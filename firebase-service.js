/**
 * State-Level GK Quiz Contest 2026 - Firebase Service
 * Handles Firestore Database operations and Firebase Storage media uploads.
 */

class QuizFirebaseService {
  constructor() {
    this.app = null;
    this.db = null;
    this.storage = null;
    this.isInitialized = false;
    this.lastError = null;
    this.COLLECTION_QUESTIONS = 'quiz_questions';
    this.STORAGE_FOLDER = 'quiz_media';
  }

  /**
   * Initialize Firebase SDK with active configuration
   */
  async init() {
    try {
      if (!window.firebase) {
        console.warn("[Firebase] Firebase SDK not detected in window.");
        return false;
      }

      const config = window.FirebaseConfigManager ? window.FirebaseConfigManager.get() : null;
      if (!config || !config.apiKey || !config.projectId) {
        console.info("[Firebase] No active Firebase credentials configured yet. Running in Local Storage mode.");
        return false;
      }

      // Initialize or get existing Firebase app
      if (!firebase.apps.length) {
        this.app = firebase.initializeApp(config);
      } else {
        this.app = firebase.app();
      }

      this.db = firebase.firestore();
      this.storage = firebase.storage();
      if (firebase.auth) {
        this.auth = firebase.auth();
        // Transparent anonymous sign-in if enabled in Firebase Auth
        this.auth.signInAnonymously().catch(authErr => {
          // If anonymous auth is disabled, silently continue (rule-based)
          console.info("[Firebase Auth] Anonymous sign-in note:", authErr.code || authErr.message);
        });
      }
      this.isInitialized = true;
      this.lastError = null;
      console.log(`[Firebase] Initialized successfully for project: ${config.projectId}`);
      return true;
    } catch (err) {
      this.lastError = err.message || String(err);
      console.error("[Firebase] Initialization error:", err);
      this.isInitialized = false;
      return false;
    }
  }

  /**
   * Check if Firebase is currently connected and usable
   */
  isReady() {
    return this.isInitialized && this.db !== null;
  }

  /**
   * Test database connectivity
   */
  async testConnection() {
    if (!this.isReady()) {
      const ok = await this.init();
      if (!ok) return { success: false, message: this.lastError || "Firebase not initialized. Please verify credentials." };
    }

    try {
      // Perform a lightweight read from quiz_questions collection
      const snap = await this.db.collection(this.COLLECTION_QUESTIONS).limit(1).get();
      return {
        success: true,
        message: `Connected successfully! (${snap.size} question sample verified)`,
        projectId: this.app.options.projectId
      };
    } catch (err) {
      return { success: false, message: err.message || String(err) };
    }
  }

  /**
   * Upload an image/audio/media file to Firebase Storage
   * @param {File} file - Browser File object
   * @param {Function} onProgress - Progress callback (percentage: number)
   * @returns {Promise<string>} Download URL of the uploaded asset
   */
  async uploadMedia(file, onProgress = null) {
    if (!this.isReady()) {
      const ok = await this.init();
      if (!ok) throw new Error("Firebase Storage is not connected. Configure Firebase credentials in Cloud DB settings.");
    }

    if (!file) throw new Error("No file provided for upload.");

    // Clean filename and add timestamp to avoid collisions
    const cleanName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const storagePath = `${this.STORAGE_FOLDER}/${Date.now()}_${cleanName}`;
    const storageRef = this.storage.ref(storagePath);
    const uploadTask = storageRef.put(file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (onProgress) onProgress(Math.round(progress));
        },
        (error) => {
          console.error("[Firebase Storage] Upload failed:", error);
          reject(error);
        },
        async () => {
          try {
            const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
            resolve(downloadUrl);
          } catch (urlErr) {
            reject(urlErr);
          }
        }
      );
    });
  }

  /**
   * Generate a unique document ID for a question
   */
  createDocId(round, questionText) {
    const cleanRound = (round || 'general').toLowerCase().replace(/[^a-z0-9]/g, '_');
    // Hash-like or short slug from text
    const cleanText = (questionText || '')
      .replace(/[\s\W]+/g, '_')
      .substring(0, 32);
    return `${cleanRound}_${Date.now()}_${cleanText}`;
  }

  /**
   * Save or update a question in Firestore
   */
  async saveQuestion(round, question) {
    if (!this.isReady()) {
      const ok = await this.init();
      if (!ok) return null;
    }

    try {
      const questionPayload = {
        round: round,
        text: question.text || "",
        time: question.time || 30,
        phase: question.phase || "all",
        options: question.options || [],
        correct: question.correct || "A",
        mediaSrc: question.mediaSrc || "",
        type: question.type || (question.mediaSrc ? "image" : "text"),
        mediaLabel: question.mediaLabel || "",
        audioTitle: question.audioTitle || "",
        correctSequence: question.correctSequence || null,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      };

      let docRef;
      if (question.id) {
        docRef = this.db.collection(this.COLLECTION_QUESTIONS).doc(question.id);
        await docRef.set(questionPayload, { merge: true });
      } else {
        docRef = await this.db.collection(this.COLLECTION_QUESTIONS).add({
          ...questionPayload,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        question.id = docRef.id;
      }

      console.log(`[Firebase] Saved question [${docRef.id}] in round '${round}'`);
      return docRef.id;
    } catch (err) {
      console.error("[Firebase] Error saving question to Firestore:", err);
      throw err;
    }
  }

  /**
   * Delete a question from Firestore
   */
  async deleteQuestion(round, questionText, questionId = null) {
    if (!this.isReady()) {
      const ok = await this.init();
      if (!ok) return false;
    }

    try {
      if (questionId) {
        await this.db.collection(this.COLLECTION_QUESTIONS).doc(questionId).delete();
        console.log(`[Firebase] Deleted question [${questionId}] from Firestore`);
        return true;
      }

      // Query by text and round if ID is not known
      const snap = await this.db.collection(this.COLLECTION_QUESTIONS)
        .where('round', '==', round)
        .where('text', '==', questionText)
        .get();

      const batch = this.db.batch();
      snap.forEach(doc => {
        batch.delete(doc.ref);
      });
      await batch.commit();
      console.log(`[Firebase] Deleted ${snap.size} matching questions from Firestore`);
      return true;
    } catch (err) {
      console.error("[Firebase] Error deleting question from Firestore:", err);
      return false;
    }
  }

  /**
   * Fetch all questions from Firestore, grouped by round
   * @returns {Promise<Object>} Map of { "MCQ": [...], "Buzzer": [...], ... }
   */
  async fetchAllQuestions() {
    if (!this.isReady()) {
      const ok = await this.init();
      if (!ok) return null;
    }

    try {
      const snap = await this.db.collection(this.COLLECTION_QUESTIONS).get();
      if (snap.empty) {
        console.log("[Firebase] Firestore questions collection is empty.");
        return {};
      }

      const grouped = {};
      snap.forEach(doc => {
        const data = doc.data();
        const round = data.round || "MCQ";
        if (!grouped[round]) {
          grouped[round] = [];
        }

        grouped[round].push({
          id: doc.id,
          text: data.text || "",
          time: data.time || 30,
          phase: data.phase || "all",
          options: data.options || [],
          correct: data.correct || "A",
          mediaSrc: data.mediaSrc || "",
          type: data.type || (data.mediaSrc ? "image" : "text"),
          mediaLabel: data.mediaLabel || "",
          audioTitle: data.audioTitle || "",
          correctSequence: data.correctSequence || null
        });
      });

      console.log(`[Firebase] Fetched ${snap.size} total questions from Firestore across ${Object.keys(grouped).length} rounds.`);
      return grouped;
    } catch (err) {
      console.error("[Firebase] Error fetching questions from Firestore:", err);
      throw err;
    }
  }

  /**
   * Seed / Push all local questions from memory into Firestore
   * @param {Object} questionsMap - Map of { "RoundName": [questions...] }
   * @param {Function} onProgress - Progress callback ({ current, total, currentRound })
   */
  async seedAllQuestions(questionsMap, onProgress = null) {
    if (!this.isReady()) {
      const ok = await this.init();
      if (!ok) throw new Error("Firebase is not initialized. Please configure credentials first.");
    }

    const rounds = Object.keys(questionsMap);
    let totalQuestions = 0;
    rounds.forEach(r => {
      totalQuestions += (questionsMap[r] || []).length;
    });

    if (totalQuestions === 0) {
      throw new Error("No local questions found to seed.");
    }

    let processed = 0;
    const batchLimit = 400; // Firestore batch maximum is 500 operations
    let batch = this.db.batch();
    let currentBatchOps = 0;

    for (const round of rounds) {
      const list = questionsMap[round] || [];
      for (const q of list) {
        const docRef = q.id 
          ? this.db.collection(this.COLLECTION_QUESTIONS).doc(q.id)
          : this.db.collection(this.COLLECTION_QUESTIONS).doc();

        batch.set(docRef, {
          round: round,
          text: q.text || "",
          time: q.time || 30,
          phase: q.phase || "all",
          options: q.options || [],
          correct: q.correct || "A",
          mediaSrc: q.mediaSrc || "",
          type: q.type || (q.mediaSrc ? "image" : "text"),
          mediaLabel: q.mediaLabel || "",
          audioTitle: q.audioTitle || "",
          correctSequence: q.correctSequence || null,
          seededAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });

        // Update local object with the ID
        q.id = docRef.id;

        currentBatchOps++;
        processed++;

        if (onProgress) {
          onProgress({ current: processed, total: totalQuestions, round: round });
        }

        if (currentBatchOps >= batchLimit) {
          await batch.commit();
          batch = this.db.batch();
          currentBatchOps = 0;
        }
      }
    }

    if (currentBatchOps > 0) {
      await batch.commit();
    }

    console.log(`[Firebase] Successfully seeded ${processed} questions to Firestore.`);
    return processed;
  }
}

// Global singleton instance
window.quizFirebaseService = new QuizFirebaseService();
