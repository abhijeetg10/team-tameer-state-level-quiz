/**
 * State-Level GK Quiz Contest 2026 - Firebase Configuration
 * 
 * You can provide your Firebase credentials below or configure them
 * dynamically via the "Cloud DB" modal in the Admin Portal.
 */

const STORAGE_KEY_FIREBASE_CONFIG = 'tameer_quiz_firebase_config';

// Default Firebase Configuration (Secrets kept out of public repositories)
const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "team-tameer-7c55c.firebaseapp.com",
  projectId: "team-tameer-7c55c",
  storageBucket: "team-tameer-7c55c.firebasestorage.app",
  messagingSenderId: "664731082756",
  appId: "1:664731082756:web:539a9a5bb561d77a551551",
  measurementId: "G-GR0BHLVKWK"
};

/**
 * Retrieve active Firebase configuration (custom saved in localStorage or defaults)
 */
function getActiveFirebaseConfig() {
  // 1. Check if untracked local credentials exist (ignored by Git)
  if (window.LOCAL_FIREBASE_CONFIG && window.LOCAL_FIREBASE_CONFIG.apiKey) {
    return window.LOCAL_FIREBASE_CONFIG;
  }

  // 2. Check custom credentials saved via Admin Cloud DB modal
  try {
    const custom = localStorage.getItem(STORAGE_KEY_FIREBASE_CONFIG);
    if (custom) {
      const parsed = JSON.parse(custom);
      if (parsed && parsed.projectId && parsed.apiKey && parsed.apiKey.trim().length > 10) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Failed to read custom Firebase config:", e);
  }
  return DEFAULT_FIREBASE_CONFIG;
}

/**
 * Save Firebase configuration to localStorage
 */
function saveActiveFirebaseConfig(config) {
  try {
    localStorage.setItem(STORAGE_KEY_FIREBASE_CONFIG, JSON.stringify(config));
    return true;
  } catch (e) {
    console.error("Failed to save Firebase config:", e);
    return false;
  }
}

/**
 * Reset Firebase configuration to empty defaults
 */
function resetActiveFirebaseConfig() {
  localStorage.removeItem(STORAGE_KEY_FIREBASE_CONFIG);
}

// Global expose
window.FirebaseConfigManager = {
  get: getActiveFirebaseConfig,
  save: saveActiveFirebaseConfig,
  reset: resetActiveFirebaseConfig,
  storageKey: STORAGE_KEY_FIREBASE_CONFIG
};
