// Official Tournament Bracket & Flow Engine
const tournamentConfig = {
  schoolsDirectory: [
    { name: "Urdu High School Chandgadh" },
    { name: "Dr. Zakir Husain Anglo Urdu High School & Jr. College Aajra" },
    { name: "Urdu High School Halkarni" },
    { name: "Maulana Azad High School and Jr. College Kolhapur" },
    { name: "Nehru High School and Jr. College Kolhapur" },
    { name: "Urdu Anglo High School Shiroli" },
    { name: "Urdu High School Vikram Nagar Ichalkaranji" },
    { name: "National High School & Jr. College Ichalkaranji" },
    { name: "Urdu High School Rui" },
    { name: "Urdu High School Rajapur" },
    { name: "Anglo Urdu High School Aurwad" },
    { name: "Ishaatul Uloom Urdu High School Alas" },
    { name: "Dr. Allama Iqbal High School and Jr. College Kurundwad" },
    { name: "Urdu High School Shirol" },
    { name: "Anglo Urdu High School and Jr. College Jaysingpur" },
    { name: "Urdu High School and Jr. College Rendal" },

    { name: "Mohammadiya Anglo Urdu School & Jr. College Sangli" },
    { name: "Jawahar Urdu High School & Jr. College Miraj" },
    { name: "Shamnamira Girls High School & Jr. College Miraj" },
    { name: "Anglo Urdu High School Ashta" },
    { name: "Dr. Zakir Hussain High School Palus" },
    { name: "Noor Girls High School Sangli" },
    { name: "Rehmat Anglo Urdu School Vita" },
    { name: "Anjuman Urdu High School Jath" },
    { name: "Moulana Abulkalam Nivasi Shala Rampur" },
    { name: "Hazrat Mohabat Suleman High School Islampur" },
    { name: "Chand Urdu School Miraj" },
    { name: "Dr. Salim Urdu High School Miraj" },

    { name: "Husen Kasam Danekari Anglo Urdu High School Karad" },
    { name: "Anjuman Khairul Islam Urdu High School Satara" },
    { name: "Shaheen High School Karad" },
    { name: "Satara Urdu High School & Junior College Nagthane" },
    { name: "Haji Abdul Rajjak Urdu High School and Junior College Phaltan" },
    { name: "Madrasa Islamiya Ziya ul Quran Malkapur" }
  ],

  // Official Participating Championship Teams from Schools Directory (All 34 Schools)
  allTeamsMaster: [
    { id: 1, name: "Urdu High School Chandgadh", group: "Group 1", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 2, name: "Dr. Zakir Husain Anglo Urdu High School Aajra", group: "Group 1", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 3, name: "Urdu High School Halkarni", group: "Group 1", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },

    { id: 4, name: "Maulana Azad High School Kolhapur", group: "Group 2", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 5, name: "Nehru High School and Jr. College Kolhapur", group: "Group 2", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 6, name: "Urdu Anglo High School Shiroli", group: "Group 2", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },

    { id: 7, name: "Urdu High School Vikram Nagar Ichalkaranji", group: "Group 3", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 8, name: "National High School & Jr. College Ichalkaranji", group: "Group 3", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 9, name: "Urdu High School Rui", group: "Group 3", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },

    { id: 10, name: "Urdu High School Rajapur", group: "Group 4", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 11, name: "Anglo Urdu High School Aurwad", group: "Group 4", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 12, name: "Ishaatul Uloom Urdu High School Alas", group: "Group 4", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },

    { id: 13, name: "Dr. Allama Iqbal High School Kurundwad", group: "Group 5", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 14, name: "Urdu High School Shirol", group: "Group 5", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 15, name: "Anglo Urdu High School & Jr. College Jaysingpur", group: "Group 5", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },

    { id: 16, name: "Urdu High School and Jr. College Rendal", group: "Group 6", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 17, name: "Mohammadiya Anglo Urdu School Sangli", group: "Group 6", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 18, name: "Jawahar Urdu High School & Jr. College Miraj", group: "Group 6", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },

    { id: 19, name: "Shamnamira Girls High School & Jr. College Miraj", group: "Group 7", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 20, name: "Anglo Urdu High School Ashta", group: "Group 7", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 21, name: "Dr. Zakir Hussain High School Palus", group: "Group 7", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },

    { id: 22, name: "Noor Girls High School Sangli", group: "Group 8", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 23, name: "Rehmat Anglo Urdu School Vita", group: "Group 8", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 24, name: "Anjuman Urdu High School Jath", group: "Group 8", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },

    { id: 25, name: "Moulana Abulkalam Nivasi Shala Rampur", group: "Group 9", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 26, name: "Hazrat Mohabat Suleman High School Islampur", group: "Group 9", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 27, name: "Chand Urdu School Miraj", group: "Group 9", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },

    { id: 28, name: "Dr. Salim Urdu High School Miraj", group: "Group 10", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 29, name: "Husen Kasam Danekari Anglo Urdu High School Karad", group: "Group 10", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 30, name: "Anjuman Khairul Islam Urdu High School Satara", group: "Group 10", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },

    { id: 31, name: "Shaheen High School Karad", group: "Group 11", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 32, name: "Satara Urdu High School & Junior College Nagthane", group: "Group 11", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },
    { id: 33, name: "Haji Abdul Rajjak Urdu High School Phaltan", group: "Group 11", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false },

    { id: 34, name: "Madrasa Islamiya Ziya ul Quran Malkapur", group: "Group 12", phase1Score: 0, phase2Score: 0, phase3Score: 0, selected: false, inPhase2: false, inPhase3: false, isWinner: false }
  ],

  phases: [
    {
      id: 1,
      title: "Phase 1: League Round",
      subtitle: "34 Teams in 12 Groups (3 Teams per Group)",
      teamsCount: 34,
      advanceCount: 12,
      status: "active",
      note: "Top qualifying teams advance to Phase 2 Semi Final",
      rounds: [
        { id: 1, name: "Round 1: Media Round", questionsRequired: 68, timer: 15, remark: "Images, Audio & Video Clues" },
        { id: 2, name: "Round 2: Buzzer", questionsRequired: 60, timer: 10, remark: "5 Questions for 1 Group" }
      ]
    },
    {
      id: 2,
      title: "Phase 2: Semi Final",
      subtitle: "Qualified Teams in 3-Team Groups",
      teamsCount: 9,
      advanceCount: 3,
      status: "locked",
      note: "Scores start from 0. Top 3 Teams qualify for Final",
      rounds: [
        { id: 1, name: "Round 1: MCQ", questionsRequired: 18, timer: 10, remark: "Two Questions for one Team" },
        { id: 2, name: "Round 2: Media Round", questionsRequired: 18, timer: 15, remark: "Visual Clues & Audio Archives" },
        { id: 3, name: "Round 3: Buzzer", questionsRequired: 15, timer: 10, remark: "5 Questions for 1 Group" },
        { id: 4, name: "Round 4: Rapid Fire", questionsRequired: 180, timer: 60, remark: "Anchor 60-Second Verbal Rapid Fire per Team" }
      ]
    },
    {
      id: 3,
      title: "Phase 3: Grand Final",
      subtitle: "3 Teams in 1 Championship Group",
      teamsCount: 3,
      advanceCount: 1,
      status: "locked",
      note: "Scores start from 0. Top 1 Team is WINNER",
      rounds: [
        { id: 1, name: "Round 1: Sequence", questionsRequired: 6, timer: 15, remark: "Two Questions for one Team" },
        { id: 2, name: "Round 2: Media Round", questionsRequired: 6, timer: 15, remark: "Historical Media Archives" },
        { id: 3, name: "Round 3: Buzzer", questionsRequired: 5, timer: 10, remark: "5 Questions for 1 Group" },
        { id: 4, name: "Round 4: Visual Rapid Fire", questionsRequired: 75, timer: 60, remark: "Rapid Image Slideshow • Students Answer Verbally" }
      ]
    }
  ]
};

// Current Live State
let currentPhaseIdx = 0;
let currentRoundIdx = 0;
let currentGroupIdx = 1;
let currentQuestionNum = 1;

let defaultQuestionTimer = 10;
let timerSeconds = 10;
let timerRunning = false;
let timerInterval = null;

let editingTeamId = null;

// ==============================================================================
// 💾 TOURNAMENT STATE PERSISTENCE & PHASE 1 SHUFFLE ENFORCEMENT ENGINE
// ==============================================================================
const STORAGE_KEY_TEAMS = "tameer_quiz_allTeamsMaster_v1";
const STORAGE_KEY_PHASES = "tameer_quiz_phases_v1";
const STORAGE_KEY_P1_SHUFFLED = "tameer_quiz_phase1_shuffled_v1";
const STORAGE_KEY_CUSTOM_QS = "tameer_quiz_questions_custom_v1";
const STORAGE_KEY_PRESENTED_QS = "tameer_quiz_presented_qs_v1";

function isPhase1Shuffled() {
  return localStorage.getItem(STORAGE_KEY_P1_SHUFFLED) === 'true';
}

function markPhase1Shuffled() {
  localStorage.setItem(STORAGE_KEY_P1_SHUFFLED, 'true');
}

function saveTournamentStateToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY_TEAMS, JSON.stringify(tournamentConfig.allTeamsMaster));
    localStorage.setItem(STORAGE_KEY_PHASES, JSON.stringify(tournamentConfig.phases));
    localStorage.setItem(STORAGE_KEY_CUSTOM_QS, JSON.stringify(quizRoundsQuestions));
    localStorage.setItem(STORAGE_KEY_PRESENTED_QS, JSON.stringify(Array.from(presentedQuestionsHistory)));
  } catch (e) {
    console.warn("Storage save failed:", e);
  }
}

// Reset Tournament to Phase 1 Modal Controls & Action
function openResetTournamentModal() {
  const modal = document.getElementById('reset-tournament-modal');
  if (modal) modal.classList.add('modal-open');
}

function closeResetTournamentModal() {
  const modal = document.getElementById('reset-tournament-modal');
  if (modal) modal.classList.remove('modal-open');
}

function confirmResetTournamentToPhase1() {
  closeResetTournamentModal();

  // 1. Clear saved tournament items from localStorage
  localStorage.removeItem(STORAGE_KEY_TEAMS);
  localStorage.removeItem(STORAGE_KEY_PHASES);
  localStorage.removeItem(STORAGE_KEY_P1_SHUFFLED);
  localStorage.removeItem(STORAGE_KEY_PRESENTED_QS);

  // 2. Reset in-memory state variables
  currentPhaseIdx = 0;
  currentRoundIdx = 0;
  currentGroupIdx = 1;
  currentQuestionNum = 1;
  activeSchoolTurnSlot = 0;
  schoolQuestionCounts = { 0: 0, 1: 0, 2: 0 };
  currentBuzzerGroupQCount = 0;
  buzzerActiveTeamId = null;
  buzzerFirstTeamAttempted = false;
  buzzerAttemptedTeamIds.clear();
  presentedQuestionsHistory.clear();
  activeRoundQuestionsPool = [];
  currentLiveQuestionIndex = 0;
  currentLiveActiveQuestion = null;

  // 3. Reset all 34 master teams to baseline Phase 1 state
  tournamentConfig.allTeamsMaster.forEach((team, idx) => {
    team.phase1Score = 0;
    team.phase2Score = 0;
    team.phase3Score = 0;
    team.selected = false;
    team.inPhase2 = false;
    team.inPhase3 = false;
    team.isWinner = false;
    // Restore default Group 1 to Group 12 distribution
    const defaultGroupNum = Math.floor(idx / 3) + 1;
    team.group = `Group ${defaultGroupNum}`;
  });

  // 4. Reset Phase progression state (Phase 1 active, 2 & 3 locked)
  tournamentConfig.phases.forEach((phase, idx) => {
    phase.status = (idx === 0) ? "active" : "locked";
  });

  // 5. Persist the fresh clean state
  saveTournamentStateToStorage();

  // 6. Refresh all UI views across the application
  renderPhasesLaunchDeck();
  renderCompactAnimatedLeaderboard();
  renderOfficialChampionshipBracket();
  renderSchoolsDirectory();
  populateStageGroupSelector();
  updateStageActiveGroupDisplay();
  updateTopTracker();

  // 7. Play reset chime & switch to Phases view
  playQuizTone(523.25, 659.25, 'success');
  switchMainScreen('screen-phases');

  // Trigger brief celebration fanfare to signal fresh tournament initialization
  if (typeof confetti === 'function') {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.5 } });
  }
}

function loadTournamentStateFromStorage() {
  try {
    const savedTeams = localStorage.getItem(STORAGE_KEY_TEAMS);
    if (savedTeams) {
      const parsed = JSON.parse(savedTeams);
      if (Array.isArray(parsed) && parsed.length > 0) {
        tournamentConfig.allTeamsMaster = parsed;
      }
    }
    const savedPhases = localStorage.getItem(STORAGE_KEY_PHASES);
    if (savedPhases) {
      const parsedPhases = JSON.parse(savedPhases);
      if (Array.isArray(parsedPhases) && parsedPhases.length > 0) {
        parsedPhases.forEach((p, pIdx) => {
          const configPhase = tournamentConfig.phases[pIdx];
          if (!configPhase) return;
          // Keep phase status
          configPhase.status = p.status || configPhase.status;
          // If stored rounds match config count, restore timers; otherwise keep new config rounds
          if (p.rounds && p.rounds.length === configPhase.rounds.length) {
            p.rounds.forEach((r, rIdx) => {
              if (configPhase.rounds[rIdx] && r.timer !== undefined) {
                configPhase.rounds[rIdx].timer = r.timer;
              }
            });
          }
        });
      }
    }
    const savedCustomQs = localStorage.getItem(STORAGE_KEY_CUSTOM_QS);
    if (savedCustomQs) {
      const parsedQs = JSON.parse(savedCustomQs);
      if (parsedQs && typeof parsedQs === 'object') {
        Object.keys(parsedQs).forEach(cat => {
          if (Array.isArray(parsedQs[cat])) {
            quizRoundsQuestions[cat] = parsedQs[cat];
          }
        });
      }
    }

    // Ensure the Demo Calendar Months question is always present in Sequence round
    if (quizRoundsQuestions["Sequence"]) {
      const hasDemo = quizRoundsQuestions["Sequence"].some(q => q.text && q.text.includes("Arrange the months in correct chronological calendar order"));
      if (!hasDemo) {
        quizRoundsQuestions["Sequence"].unshift({
          text: "Arrange the months in correct chronological calendar order (قدیم سے جدید ترتیب دیں)",
          options: [
            { key: "1", text: "May (مئی)" },
            { key: "2", text: "April (اپریل)" },
            { key: "3", text: "Jan (جنوری)" },
            { key: "4", text: "Feb (فروری)" }
          ],
          correctSequence: ["3", "4", "2", "1"],
          time: 20
        });
      }
    }
    const savedPresented = localStorage.getItem(STORAGE_KEY_PRESENTED_QS);
    if (savedPresented) {
      const parsedPresented = JSON.parse(savedPresented);
      if (Array.isArray(parsedPresented)) {
        presentedQuestionsHistory = new Set(parsedPresented);
      }
    }
  } catch (e) {
    console.warn("Storage load error:", e);
  }
}

// ------------------------------------------------------------------------------
// 👥 STAGE 3-TEAM TRIAD GROUP TRACKER & LIVE CONTROLLER
// ------------------------------------------------------------------------------
let isTieBreakerActive = false;
let tieBreakerActiveTeams = [];

function getActiveGroupTeams(groupNameOrNum) {
  if (isTieBreakerActive && tieBreakerActiveTeams && tieBreakerActiveTeams.length > 0) {
    return tieBreakerActiveTeams;
  }
  const label = typeof groupNameOrNum === 'number' ? `Group ${groupNameOrNum}` : groupNameOrNum;
  const activeTeams = getActivePhaseTeams();
  return activeTeams.filter(t => t.group === label);
}

function populateStageGroupSelector() {
  const selector = document.getElementById('stage-group-selector');
  const hubSelector = document.getElementById('rh-group-dropdown-selector');

  const activeTeams = getActivePhaseTeams();
  // Find all unique groups
  const groupSet = new Set();
  activeTeams.forEach(t => {
    if (t.group) groupSet.add(t.group);
  });

  const groups = Array.from(groupSet).sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, '') || '0', 10);
    const numB = parseInt(b.replace(/\D/g, '') || '0', 10);
    return numA - numB;
  });

  const totalGroups = groups.length || (currentPhaseIdx === 0 ? 12 : (currentPhaseIdx === 1 ? 3 : 1));

  if (groups.length === 0) {
    // Generate fallback groups if none explicitly created yet
    for (let i = 1; i <= totalGroups; i++) {
      groups.push(`Group ${i}`);
    }
  }

  const optionsHtml = groups.map(g => {
    const teamsInG = activeTeams.filter(t => t.group === g);
    const names = teamsInG.length > 0 ? teamsInG.map(t => t.name.split(' ')[0] || `Team ${t.id}`).join(', ') : '3 Teams';
    const isSelected = g === `Group ${currentGroupIdx}`;
    return `<option value="${g}" ${isSelected ? 'selected' : ''}>${g} (${teamsInG.length || 3} Teams: ${names})</option>`;
  }).join('');

  if (selector) selector.innerHTML = optionsHtml;
  if (hubSelector) {
    hubSelector.innerHTML = groups.map(g => {
      const isSelected = g === `Group ${currentGroupIdx}`;
      return `<option value="${g}" ${isSelected ? 'selected' : ''}>${g}</option>`;
    }).join('');
    hubSelector.value = `Group ${currentGroupIdx}`;
  }
}

function onStageGroupChanged(selectedGroupVal) {
  const num = parseInt(selectedGroupVal.replace(/\D/g, '') || '1', 10);
  currentGroupIdx = num;
  updateStageActiveGroupDisplay();
  renderRoundsHubGroupSelector();
  playQuizTone(520, 640, 'lock');
}

function selectHubGroup(groupName) {
  const num = parseInt(groupName.replace(/\D/g, '') || '1', 10);
  currentGroupIdx = num;
  renderRoundsHubGroupSelector();
  populateStageGroupSelector();
  updateStageActiveGroupDisplay();
  playQuizTone(520, 640, 'lock');
}

// Move to next group in sequence, marking current as played and updating colors
function advanceToNextGroup() {
  const activeTeams = getActivePhaseTeams();
  const groupSet = new Set();
  activeTeams.forEach(t => {
    if (t.group) groupSet.add(t.group);
  });

  const groups = Array.from(groupSet).sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, '') || '0', 10);
    const numB = parseInt(b.replace(/\D/g, '') || '0', 10);
    return numA - numB;
  });

  if (groups.length === 0) return;

  const currentIdxInArray = groups.indexOf(`Group ${currentGroupIdx}`);
  let nextGroup;
  if (currentIdxInArray >= 0 && currentIdxInArray < groups.length - 1) {
    nextGroup = groups[currentIdxInArray + 1];
  } else {
    // Loop back to first group
    nextGroup = groups[0];
  }

  selectHubGroup(nextGroup);
}

// Render dynamic triad cards in the Rounds Selection Hub with live scores & played status
function renderRoundsHubGroupSelector() {
  const container = document.getElementById('hub-group-chips-container');
  const stagePill = document.getElementById('hub-active-stage-pill');
  if (!container) return;

  if (stagePill) {
    stagePill.innerText = `● On Stage: Group ${currentGroupIdx}`;
  }

  const activeTeams = getActivePhaseTeams();
  const groupSet = new Set();
  activeTeams.forEach(t => {
    if (t.group) groupSet.add(t.group);
  });

  const groups = Array.from(groupSet).sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, '') || '0', 10);
    const numB = parseInt(b.replace(/\D/g, '') || '0', 10);
    return numA - numB;
  });

  if (groups.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; color: #94a3b8; font-size: 0.9rem; padding: 1.5rem; background: rgba(255, 255, 255, 0.02); border-radius: 12px; border: 1px dashed rgba(255, 255, 255, 0.1);">
        No groups formed yet. Click <strong>"🎲 Shuffle 3-Team Groups"</strong> above to organize teams into balanced triads.
      </div>
    `;
    return;
  }

  container.innerHTML = groups.map(g => {
    const teamsInG = activeTeams.filter(t => t.group === g);
    const isActive = (g === `Group ${currentGroupIdx}`);
    
    // Check if group has played (sum of scores > 0)
    const totalGroupPoints = teamsInG.reduce((sum, t) => sum + getTeamCurrentScore(t), 0);
    const isPlayed = totalGroupPoints > 0;

    let cardStatusClass = 'group-card-pending';
    let statusBadgeText = 'PENDING';
    let statusBadgeColor = '#94a3b8';

    if (isActive) {
      cardStatusClass = 'group-card-on-stage';
      statusBadgeText = '★ ON STAGE';
      statusBadgeColor = '#00f0ff';
    } else if (isPlayed) {
      cardStatusClass = 'group-card-played';
      statusBadgeText = `✓ PLAYED (${totalGroupPoints} PTS)`;
      statusBadgeColor = '#10b981';
    }

    const teamRowsHtml = teamsInG.map(t => {
      const score = getTeamCurrentScore(t);
      const shortName = t.name ? t.name.split(' ').slice(0, 3).join(' ') : `Team ${t.id}`;
      return `
        <div class="triad-member-row">
          <span class="triad-school-name" title="${t.name}">• ${shortName}</span>
          <span class="triad-school-pts ${score > 0 ? 'pts-positive' : ''}">${score} PTS</span>
        </div>
      `;
    }).join('');

    return `
      <div class="hub-triad-card ${cardStatusClass}" onclick="selectHubGroup('${g}')" title="Click to put ${g} on stage">
        <div class="hub-triad-header">
          <div class="hub-triad-title">${g}</div>
          <span class="hub-triad-badge" style="color: ${statusBadgeColor}; border-color: ${statusBadgeColor};">
            ${statusBadgeText}
          </span>
        </div>
        <div class="hub-triad-teams-list">
          ${teamRowsHtml}
        </div>
        <button class="hub-triad-action-btn ${isActive ? 'btn-active-stage' : ''}">
          ${isActive ? 'CURRENTLY ON STAGE' : 'Bring To Stage →'}
        </button>
      </div>
    `;
  }).join('');
}

// Synchronize on-screen 3-team podium display and host dock scoring buttons
function updateStageActiveGroupDisplay() {
  const groupLabelEl = document.getElementById('stage-active-group-name');
  const groupTeamsEl = document.getElementById('stage-active-group-teams');
  const selector = document.getElementById('stage-group-selector');
  const stagePodsStrip = document.getElementById('stage-teams-competing-strip');
  const dockAwardList = document.getElementById('dock-team-award-buttons');

  const groupName = `Group ${currentGroupIdx}`;
  const teams = getActiveGroupTeams(groupName);

  if (groupLabelEl) {
    groupLabelEl.innerText = groupName;
  }

  if (groupTeamsEl) {
    if (teams.length > 0) {
      const summaryNames = teams.map(t => {
        const parts = (t.name || `T${t.id}`).split(' ');
        return parts.slice(0, 2).join(' ');
      }).join(' • ');
      groupTeamsEl.innerText = summaryNames;
      groupTeamsEl.title = teams.map(t => t.name).join(' | ');
    } else {
      groupTeamsEl.innerText = "3 Teams";
    }
  }

  if (selector && selector.value !== groupName) {
    selector.value = groupName;
  }

  // 1. Render Big Screen 3-Team Podium Pods
  if (stagePodsStrip) {
    if (teams.length === 0) {
      stagePodsStrip.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; color: #94a3b8; font-size: 0.8rem; padding: 0.4rem;">
          No teams assigned to ${groupName}. Use Team Shuffler to form balanced triads.
        </div>
      `;
    } else {
      stagePodsStrip.innerHTML = [0, 1, 2].map(slotIdx => {
        const team = teams[slotIdx];
        if (!team) {
          return `
            <div class="stage-team-podium-pod pod-team-${slotIdx + 1}" style="opacity: 0.4;">
              <span class="pod-slot-badge">T${slotIdx + 1}</span>
              <div class="pod-name-block">
                <div class="pod-team-name" style="color: #64748b;">(Empty Slot)</div>
              </div>
            </div>
          `;
        }

        const score = getTeamCurrentScore(team);
        const isActiveTurn = (activeSchoolTurnSlot === slotIdx);
        const originalCode = team.code || `T${team.id}`;
        return `
          <div class="stage-team-podium-pod pod-team-${slotIdx + 1} ${isActiveTurn ? 'active-turn-pod' : ''}" 
               id="stage-pod-team-${team.id}" 
               onclick="selectActiveSchoolTurn(${slotIdx})" 
               title="Click to select ${team.name} for current direct question">
            <div class="pod-header-row">
              <span class="pod-slot-badge">${originalCode}</span>
              <div class="pod-score-badge" id="pod-score-val-${team.id}">${score} PTS</div>
              <div class="pod-quick-award-actions">
                <button class="btn-point-action btn-point-add" onclick="event.stopPropagation(); awardStageTeamPoints(${team.id}, 10)" title="Award +10 points to ${team.name}">+10</button>
                <button class="btn-point-action btn-point-add" onclick="event.stopPropagation(); awardStageTeamPoints(${team.id}, 5)" title="Award +5 points to ${team.name}">+5</button>
                <button class="btn-point-action btn-point-sub" onclick="event.stopPropagation(); awardStageTeamPoints(${team.id}, -5)" title="Deduct -5 points from ${team.name}">-5</button>
              </div>
            </div>
            <div class="pod-name-block">
              <div class="pod-team-name" title="${team.name}">${team.name}</div>
              <div class="pod-team-sub">${groupName} • Podium ${slotIdx + 1}${isActiveTurn ? ' • ACTIVE TURN' : ''}</div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 1.5 Render School Turn Selector in Right Control Dock
  const dockSchoolButtons = document.getElementById('dock-school-select-buttons');
  const dockSchoolQBadge = document.getElementById('dock-school-q-badge');
  if (dockSchoolButtons && teams.length > 0) {
    dockSchoolButtons.innerHTML = teams.map((team, sIdx) => {
      const qDone = schoolQuestionCounts[sIdx] || 0;
      const isAct = (activeSchoolTurnSlot === sIdx);
      const originalCode = team.code || `T${team.id}`;
      const shortTitle = team.name ? team.name.split(' ').slice(0, 2).join(' ') : `Team ${team.id}`;
      return `
        <button class="dock-school-btn ${isAct ? 'active-dock-school' : ''}" 
                onclick="selectActiveSchoolTurn(${sIdx})" 
                title="Switch question turn to ${team.name}">
          <span>${originalCode}: ${shortTitle}</span>
          <span style="font-size: 0.65rem; opacity: 0.85;">(${qDone}/2 Qs)</span>
        </button>
      `;
    }).join('');
  }
  if (dockSchoolQBadge) {
    const currCount = (schoolQuestionCounts[activeSchoolTurnSlot] || 0) + 1;
    dockSchoolQBadge.innerText = `Q ${Math.min(2, currCount)}/2`;
  }

  // 2. Render On-Stage Teams Direct Points Awarding Row in screen-rounds-hub
  const hubAwardRow = document.getElementById('rh-teams-award-row');
  const hubGroupLabel = document.getElementById('rh-active-group-label');
  const stagePill = document.getElementById('hub-active-stage-pill');

  const totalGroups = currentPhaseIdx === 0 ? 12 : (currentPhaseIdx === 1 ? 3 : 1);
  if (hubGroupLabel) {
    hubGroupLabel.innerText = `CURRENTLY ON STAGE: ${groupName.toUpperCase()}`;
  }
  if (stagePill) {
    stagePill.innerText = `● On Stage: ${groupName} of ${totalGroups}`;
  }
  const hubSelector = document.getElementById('rh-group-dropdown-selector');
  if (hubSelector && hubSelector.value !== groupName) {
    hubSelector.value = groupName;
  }

  if (hubAwardRow) {
    if (teams.length === 0) {
      hubAwardRow.innerHTML = `<span style="font-size: 0.8rem; color: #94a3b8;">No teams currently in ${groupName}.</span>`;
    } else {
      hubAwardRow.innerHTML = teams.map((team, idx) => {
        const score = getTeamCurrentScore(team);
        const originalCode = team.code || `T${team.id}`;
        const shortName = team.name ? team.name.split(' ').slice(0, 3).join(' ') : `Team ${team.id}`;
        return `
          <div class="rh-team-award-card">
            <div class="rh-team-info">
              <span class="rh-team-slot">${originalCode} • Podium ${idx + 1}</span>
              <div class="rh-team-name" title="${team.name}">${shortName}</div>
              <div class="rh-team-score-num">${score} PTS</div>
            </div>
            <div class="rh-team-actions">
              <button class="btn-point-action btn-point-add" onclick="awardStageTeamPoints(${team.id}, 10)" title="Award +10 points to ${team.name}">+10</button>
              <button class="btn-point-action btn-point-add" onclick="awardStageTeamPoints(${team.id}, 5)" title="Award +5 points to ${team.name}">+5</button>
              <button class="btn-point-action btn-point-sub" onclick="awardStageTeamPoints(${team.id}, -5)" title="Deduct -5 points from ${team.name}">-5</button>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 3. Render Host Dock Quick Points Award Buttons (+10 / -5 / +5)
  if (dockAwardList) {
    if (teams.length === 0) {
      dockAwardList.innerHTML = `<span style="font-size: 0.72rem; color: #64748b;">Select group to award points</span>`;
    } else {
      dockAwardList.innerHTML = teams.map(team => {
        const score = getTeamCurrentScore(team);
        const originalCode = team.code || `T${team.id}`;
        const shortName = team.name ? team.name.split(' ').slice(0, 3).join(' ') : `Team ${team.id}`;
        return `
          <div class="dock-team-award-row">
            <span class="dock-team-award-name" title="${team.name}"><strong>${originalCode}</strong> ${shortName}: <strong>${score}p</strong></span>
            <div class="dock-award-actions">
              <button class="btn-point-action btn-point-add" onclick="awardStageTeamPoints(${team.id}, 10)" title="Award +10 points to this team">+10</button>
              <button class="btn-point-action btn-point-add" onclick="awardStageTeamPoints(${team.id}, 5)" title="Award +5 points to this team">+5</button>
              <button class="btn-point-action btn-point-sub" onclick="awardStageTeamPoints(${team.id}, -5)" title="Deduct -5 points from this team">-5</button>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

// Award or deduct points for an on-stage team and sync leaderboard + storage
function awardStageTeamPoints(teamId, delta) {
  const team = tournamentConfig.allTeamsMaster.find(t => t.id === teamId);
  if (!team) return;

  if (isTieBreakerActive) {
    // TIE BREAKER: Calculate score strictly separately! Never touch regular phase leaderboard score!
    team.tieBreakerScore = Math.max(0, (team.tieBreakerScore || 0) + delta);
  } else {
    // Regular Phase round: update current phase score
    const currentScore = getTeamCurrentScore(team);
    const newScore = Math.max(0, currentScore + delta);
    setTeamCurrentScore(team, newScore);
  }

  // Sound feedback
  if (delta > 0) {
    playQuizTone(587.33, 880, 'success');
  } else {
    playQuizTone(164.81, 130.81, 'wrong');
  }

  saveTournamentStateToStorage();
  updateStageActiveGroupDisplay();
  renderRoundsHubGroupSelector();
  renderCompactAnimatedLeaderboard();
  renderOfficialChampionshipBracket();
}

// ==============================================================================
// 🔄 DYNAMIC ON-STAGE TEAM SWAP & SUBSTITUTION CONTROLLER
// ==============================================================================
let pendingSwapTeamId = null;
let pendingSwapGroupName = null;
let pendingSwapSlotIdx = null;

function openTeamSwapModal(teamId, groupName, slotIdx) {
  pendingSwapTeamId = teamId;
  pendingSwapGroupName = groupName;
  pendingSwapSlotIdx = slotIdx;

  const modal = document.getElementById('team-swap-modal');
  const currDisplay = document.getElementById('swap-current-team-display');
  const selectEl = document.getElementById('swap-replacement-team-select');
  if (!modal || !selectEl) return;

  const currentTeam = tournamentConfig.allTeamsMaster.find(t => t.id === teamId);
  if (currDisplay) {
    currDisplay.innerText = currentTeam 
      ? `Slot ${slotIdx + 1}: ${currentTeam.name} (${groupName})` 
      : `Slot ${slotIdx + 1} (${groupName})`;
  }

  // Populate select with all teams in tournament except this current team
  const allTeams = tournamentConfig.allTeamsMaster.filter(t => t.id !== teamId);
  selectEl.innerHTML = allTeams.map(t => {
    const grp = t.group || 'Unassigned';
    return `<option value="${t.id}">${t.name} (Currently in ${grp} • Score: ${getTeamCurrentScore(t)} PTS)</option>`;
  }).join('');

  modal.classList.add('modal-open');
}

function closeTeamSwapModal() {
  document.getElementById('team-swap-modal')?.classList.remove('modal-open');
  pendingSwapTeamId = null;
  pendingSwapGroupName = null;
  pendingSwapSlotIdx = null;
}

function confirmTeamSlotSwap() {
  const selectEl = document.getElementById('swap-replacement-team-select');
  if (!selectEl || !pendingSwapTeamId || !pendingSwapGroupName) {
    closeTeamSwapModal();
    return;
  }

  const replacementTeamId = parseInt(selectEl.value, 10);
  const currentTeam = tournamentConfig.allTeamsMaster.find(t => t.id === pendingSwapTeamId);
  const replacementTeam = tournamentConfig.allTeamsMaster.find(t => t.id === replacementTeamId);

  if (currentTeam && replacementTeam) {
    // Swap group assignments
    const targetGroup = pendingSwapGroupName;
    const originGroup = replacementTeam.group;

    replacementTeam.group = targetGroup;
    currentTeam.group = originGroup || null;

    saveTournamentStateToStorage();

    // Re-render UI
    populateStageGroupSelector();
    updateStageActiveGroupDisplay();
    renderRoundsHubGroupSelector();
    renderCompactAnimatedLeaderboard();
    updateLiveSchoolTurnBadge();

    playQuizTone(587.33, 880, 'success');
  }

  closeTeamSwapModal();
}

// Pure Text & Media Separate Question Pools
// Only Media Round contains images/audio/video; all other rounds are strictly clean Question + Options
const quizRoundsQuestions = {
  // Pure Text MCQ Questions (Zero Media)
  "MCQ": [
    {
      text: "Which prominent social reformer founded the renowned Rayat Shikshan Sanstha in 1919 at Kale, Satara?",
      options: [
        { key: "A", text: "Karmaveer Bhaurao Patil" },
        { key: "B", text: "Chhatrapati Shahu Maharaj" },
        { key: "C", text: "Mahatma Jyotirao Phule" },
        { key: "D", text: "Dr. B. R. Ambedkar" }
      ],
      correct: "A",
      time: 30
    },
    {
      text: "Which prominent river joins the Krishna River at the sacred geographical confluence (Sangam) of Haripur near Sangli?",
      options: [
        { key: "A", text: "Panchganga River" },
        { key: "B", text: "Warna River" },
        { key: "C", text: "Koyna River" },
        { key: "D", text: "Bhima River" }
      ],
      correct: "B",
      time: 30
    },
    {
      text: "In which year did the historic Kolhapur princely state enact the pioneering 50% reservation policy under Chhatrapati Shahu Maharaj?",
      options: [
        { key: "A", text: "1894" },
        { key: "B", text: "1902" },
        { key: "C", text: "1911" },
        { key: "D", text: "1920" }
      ],
      correct: "B",
      time: 30
    }
  ],

  // Dedicated Media Round Questions (Images, Audio, Video Clues - Question Above, Media Below, Direct Answer)
  "Media Round": [
    {
      type: "image",
      mediaLabel: "VISUAL IDENTITY CLUE",
      mediaSrc: "logo.png",
      text: "Observe the projected official emblem carefully: Name the prominent educational and social organisation behind this State-Level Quiz Championship.",
      answer: "Team Tameer (Tameer Foundation)",
      time: 10
    },
    {
      type: "image",
      mediaLabel: "TECHNICAL SPONSOR & PLATFORM CLUE",
      mediaSrc: "ROLogo.jpeg",
      text: "Identify the technological organization whose official software platform and digital infrastructure powers this Live Quiz Arena.",
      answer: "RO CODE (Software Support by RO CODE)",
      time: 10
    },
    {
      type: "audio",
      mediaLabel: "HISTORIC SPEECH ARCHIVE",
      audioTitle: "Midnight Broadcast 'Tryst with Destiny' Clue",
      mediaSrc: "https://actions.google.com/sounds/v1/ambiences/outdoor_festival.ogg",
      text: "Listen to the historical broadcast audio recording: Which iconic Indian leader delivered this celebrated address on the eve of Independence?",
      answer: "Pandit Jawaharlal Nehru",
      time: 10
    },
    {
      type: "image",
      mediaLabel: "HISTORIC HERITAGE CREST",
      mediaSrc: "logo2.jpeg",
      text: "Observe the golden commemorative seal: Which state-level championship initiative is honored in this insignia?",
      answer: "State Level GK Quiz Contest 2026",
      time: 10
    },
    {
      type: "audio",
      mediaLabel: "BROADCAST FANFARE ARCHIVE",
      audioTitle: "Historic National Melody Archival Recording",
      mediaSrc: "https://actions.google.com/sounds/v1/ambiences/outdoor_festival.ogg",
      text: "Listen to the musical archive: In which historical year was this iconic national melody officially adopted by the Constituent Assembly?",
      answer: "1950 (Adopted on 24 January 1950)",
      time: 10
    },
    {
      type: "image",
      mediaLabel: "GEOGRAPHICAL RECOGNITION CLUE",
      mediaSrc: "logo.png",
      text: "Identify the educational foundation striving for academic excellence and youth empowerment across Maharashtra.",
      answer: "Team Tameer",
      time: 10
    }
  ],

  // Buzzer Round Questions (Fast-Paced Pure Text)
  "Buzzer": [
    {
      text: "Which revolutionary Indian scientist won the Nobel Prize in Physics in 1930 for the discovery of the scattering of light?",
      options: [
        { key: "A", text: "Dr. Homi Bhabha" },
        { key: "B", text: "Sir C. V. Raman" },
        { key: "C", text: "Satyendra Nath Bose" },
        { key: "D", text: "Dr. Vikram Sarabhai" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "Which historic fort in Maharashtra was chosen by Chhatrapati Shivaji Maharaj as the capital of the Maratha Empire in 1674?",
      options: [
        { key: "A", text: "Torna Fort" },
        { key: "B", text: "Raigad Fort" },
        { key: "C", text: "Panhala Fort" },
        { key: "D", text: "Pratapgad Fort" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "Who authored the national pledge of India ('India is my country and all Indians are my brothers and sisters')?",
      options: [
        { key: "A", text: "Pydimarri Venkata Subba Rao" },
        { key: "B", text: "Rabindranath Tagore" },
        { key: "C", text: "Bankim Chandra Chattopadhyay" },
        { key: "D", text: "Sarojini Naidu" }
      ],
      correct: "A",
      time: 15
    },
    {
      text: "Which planet in our solar system has the shortest day, rotating on its axis in less than 10 hours?",
      options: [
        { key: "A", text: "Saturn" },
        { key: "B", text: "Jupiter" },
        { key: "C", text: "Neptune" },
        { key: "D", text: "Mars" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "In which year did the historic Dandi Salt March led by Mahatma Gandhi conclude at Dandi beach?",
      options: [
        { key: "A", text: "1928" },
        { key: "B", text: "1930" },
        { key: "C", text: "1932" },
        { key: "D", text: "1942" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "Which is the highest peak in Maharashtra located in the Western Ghats (Sahyadri range)?",
      options: [
        { key: "A", text: "Kalsubai Peak" },
        { key: "B", text: "Salher Peak" },
        { key: "C", text: "Mahabaleshwar" },
        { key: "D", text: "Harishchandragad" }
      ],
      correct: "A",
      time: 15
    },
    {
      text: "Who is known as the 'Father of the Indian Space Programme'?",
      options: [
        { key: "A", text: "Dr. A. P. J. Abdul Kalam" },
        { key: "B", text: "Dr. Vikram Sarabhai" },
        { key: "C", text: "Prof. Satish Dhawan" },
        { key: "D", text: "Dr. K. Sivan" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "Which element on the periodic table has the chemical symbol 'Fe' and atomic number 26?",
      options: [
        { key: "A", text: "Fluorine" },
        { key: "B", text: "Iron" },
        { key: "C", text: "Lead" },
        { key: "D", text: "Francium" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "Which river is popularly known as 'Dakshin Ganga' (Ganges of the South)?",
      options: [
        { key: "A", text: "Godavari" },
        { key: "B", text: "Krishna" },
        { key: "C", text: "Kaveri" },
        { key: "D", text: "Narmada" }
      ],
      correct: "A",
      time: 15
    },
    {
      text: "Who was the first Indian woman to go into space aboard the Space Shuttle Columbia in 1997?",
      options: [
        { key: "A", text: "Sunita Williams" },
        { key: "B", text: "Kalpana Chawla" },
        { key: "C", text: "Sirisha Bandla" },
        { key: "D", text: "Ritu Karidhal" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "Which constitutional amendment in India made the Right to Education (RTE) a fundamental right under Article 21A?",
      options: [
        { key: "A", text: "42nd Amendment" },
        { key: "B", text: "86th Amendment" },
        { key: "C", text: "73rd Amendment" },
        { key: "D", text: "91st Amendment" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "What is the speed of light in a vacuum approximately in kilometers per second?",
      options: [
        { key: "A", text: "150,000 km/s" },
        { key: "B", text: "300,000 km/s" },
        { key: "C", text: "450,000 km/s" },
        { key: "D", text: "1,080,000 km/s" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "Which city in Maharashtra is famously honored as the 'Grape City of India'?",
      options: [
        { key: "A", text: "Nashik" },
        { key: "B", text: "Sangli" },
        { key: "C", text: "Solapur" },
        { key: "D", text: "Pune" }
      ],
      correct: "A",
      time: 15
    },
    {
      text: "Who composed the Indian National Anthem 'Jana Gana Mana'?",
      options: [
        { key: "A", text: "Rabindranath Tagore" },
        { key: "B", text: "Bankim Chandra Chatterjee" },
        { key: "C", text: "Muhammad Iqbal" },
        { key: "D", text: "Kavi Pradeep" }
      ],
      correct: "A",
      time: 15
    },
    {
      text: "Which blood group is universally known as the 'Universal Donor'?",
      options: [
        { key: "A", text: "AB Positive" },
        { key: "B", text: "O Negative" },
        { key: "C", text: "A Positive" },
        { key: "D", text: "B Negative" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "Which ancient university in Bihar was revived as an international university in 2014?",
      options: [
        { key: "A", text: "Taxila" },
        { key: "B", text: "Nalanda" },
        { key: "C", text: "Vikramashila" },
        { key: "D", text: "Vallabhi" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "What gas do plants absorb during photosynthesis and release oxygen?",
      options: [
        { key: "A", text: "Nitrogen" },
        { key: "B", text: "Carbon Dioxide" },
        { key: "C", text: "Methane" },
        { key: "D", text: "Hydrogen" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "Which famous bird sanctuary in Maharashtra is located near Mayani in Khatav taluka of Satara district?",
      options: [
        { key: "A", text: "Mayani Bird Sanctuary" },
        { key: "B", text: "Karnala Bird Sanctuary" },
        { key: "C", text: "Jaikwadi Bird Sanctuary" },
        { key: "D", text: "Nandur Madhmeshwar" }
      ],
      correct: "A",
      time: 15
    },
    {
      text: "Who was the first President of Independent India?",
      options: [
        { key: "A", text: "Dr. Sarvepalli Radhakrishnan" },
        { key: "B", text: "Dr. Rajendra Prasad" },
        { key: "C", text: "Dr. Zakir Husain" },
        { key: "D", text: "Varahagiri Venkata Giri" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "What is the primary power source for artificial satellites orbiting the Earth?",
      options: [
        { key: "A", text: "Diesel Generators" },
        { key: "B", text: "Solar Panels" },
        { key: "C", text: "Wind Turbines" },
        { key: "D", text: "Liquid Nitrogen" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "Which sea lies directly to the west of Maharashtra?",
      options: [
        { key: "A", text: "Bay of Bengal" },
        { key: "B", text: "Arabian Sea" },
        { key: "C", text: "Red Sea" },
        { key: "D", text: "Andaman Sea" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "Who invented the telephone in 1876?",
      options: [
        { key: "A", text: "Thomas Edison" },
        { key: "B", text: "Alexander Graham Bell" },
        { key: "C", text: "Nikola Tesla" },
        { key: "D", text: "Guglielmo Marconi" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "Which organ in the human body filters blood and produces urine?",
      options: [
        { key: "A", text: "Liver" },
        { key: "B", text: "Kidneys" },
        { key: "C", text: "Lungs" },
        { key: "D", text: "Pancreas" }
      ],
      correct: "B",
      time: 15
    },
    {
      text: "In computer science, what does 'CPU' stand for?",
      options: [
        { key: "A", text: "Central Processing Unit" },
        { key: "B", text: "Control Program Utility" },
        { key: "C", text: "Core Processor Unified" },
        { key: "D", text: "Compute Power Unit" }
      ],
      correct: "A",
      time: 15
    },
    {
      text: "Which Indian sportsperson is celebrated on National Sports Day (29 August)?",
      options: [
        { key: "A", text: "Milkha Singh" },
        { key: "B", text: "Major Dhyan Chand" },
        { key: "C", text: "K. D. Jadhav" },
        { key: "D", text: "Kapil Dev" }
      ],
      correct: "B",
      time: 15
    }
  ],

  // Tie Breaker Buzzer Round Questions (Sudden-Death Showdown)
  "Tie Breaker": [
    {
      text: "TIE BREAKER: What is the highest civilian award conferred by the Republic of India?",
      options: [
        { key: "A", text: "Padma Vibhushan" },
        { key: "B", text: "Bharat Ratna" },
        { key: "C", text: "Param Vir Chakra" },
        { key: "D", text: "Padma Bhushan" }
      ],
      correct: "B",
      time: 15,
      phase: "all"
    },
    {
      text: "TIE BREAKER: Which Indian satellite was the first to be launched successfully into space in 1975?",
      options: [
        { key: "A", text: "Aryabhata" },
        { key: "B", text: "Rohini" },
        { key: "C", text: "Bhaskara-I" },
        { key: "D", text: "INSAT-1A" }
      ],
      correct: "A",
      time: 15,
      phase: "all"
    },
    {
      text: "TIE BREAKER: Which historical monument in Mumbai was built in 1911 to commemorate the landing of King George V and Queen Mary?",
      options: [
        { key: "A", text: "India Gate" },
        { key: "B", text: "Gateway of India" },
        { key: "C", text: "Victoria Memorial" },
        { key: "D", text: "Charminar" }
      ],
      correct: "B",
      time: 15,
      phase: "all"
    },
    {
      text: "TIE BREAKER: In which year did the Constitution of India come into full legal effect across the nation?",
      options: [
        { key: "A", text: "1947" },
        { key: "B", text: "1950" },
        { key: "C", text: "1949" },
        { key: "D", text: "1952" }
      ],
      correct: "B",
      time: 15,
      phase: "all"
    },
    {
      text: "TIE BREAKER: Which is the longest river entirely within the borders of peninsular India?",
      options: [
        { key: "A", text: "Krishna River" },
        { key: "B", text: "Godavari River" },
        { key: "C", text: "Kaveri River" },
        { key: "D", text: "Narmada River" }
      ],
      correct: "B",
      time: 15,
      phase: "all"
    }
  ],

  // Rapid Fire Round Questions (Pure Text)
  "Rapid Fire": [
    {
      text: "Who was the first Law Minister of Independent India and the Chairman of the Constitution Drafting Committee?",
      options: [
        { key: "A", text: "Dr. B. R. Ambedkar" },
        { key: "B", text: "Dr. K. M. Munshi" },
        { key: "C", text: "B. N. Rau" },
        { key: "D", text: "Alladi Krishnaswamy Iyer" }
      ],
      correct: "A",
      time: 15
    }
  ],

  // Sequence Round Questions (Chronological Ordering)
  "Sequence": [
    {
      text: "Arrange the months in correct chronological calendar order (قدیم سے جدید ترتیب دیں)",
      options: [
        { key: "1", text: "May (مئی)" },
        { key: "2", text: "April (اپریل)" },
        { key: "3", text: "Jan (جنوری)" },
        { key: "4", text: "Feb (فروری)" }
      ],
      // Correct chronological sequence: Jan (3) ➔ Feb (4) ➔ April (2) ➔ May (1)
      correctSequence: ["3", "4", "2", "1"],
      time: 20
    },
    {
      text: "ذیل کے اسلامی مہینوں کو درست ترتیب (رمضان سے آخر تک) میں لگائیں",
      options: [
        { key: "1", text: "ذی الحجہ" },
        { key: "2", text: "ذی القعدہ" },
        { key: "3", text: "شوال" },
        { key: "4", text: "رمضان" }
      ],
      // Correct chronological order from Ramadan to Dhul-Hijjah: Ramadan (4), Shawwal (3), Dhul-Qadah (2), Dhul-Hijjah (1)
      correctSequence: ["4", "3", "2", "1"],
      time: 20
    },
    {
      text: "ISRO کے مشن کو ترتیب (قدیم سے جدید) میں لگائیں",
      options: [
        { key: "1", text: "NVS-02 (NavIC)" },
        { key: "2", text: "PSLV-C62" },
        { key: "3", text: "NISAR (ISRO-NASA)" },
        { key: "4", text: "Gaganyaan-1" }
      ],
      correctSequence: ["1", "3", "4", "2"],
      time: 20
    },
    {
      text: "تاریخِ ہند کے واقعات کو قدیم سے جدید کی ترتیب میں لگائیں",
      options: [
        { key: "1", text: "تحریکِ عدم تعاون (Non-Cooperation Movement 1920)" },
        { key: "2", text: "ڈانڈی نمک مارچ (Salt Satyagraha 1930)" },
        { key: "3", text: "ہندوستان چھوڑو تحریک (Quit India 1942)" },
        { key: "4", text: "آئینِ ہند کا نفاذ (Republic Day 1950)" }
      ],
      correctSequence: ["1", "2", "3", "4"],
      time: 20
    },
    {
      text: "مغلیہ سلطنت کے حکمرانوں کو ان کے دورِ حکومت کے مطابق ترتیب دیں",
      options: [
        { key: "1", text: "بابر (Babur)" },
        { key: "2", text: "ہمایوں (Humayun)" },
        { key: "3", text: "اکبر (Akbar)" },
        { key: "4", text: "جہانگیر (Jahangir)" }
      ],
      correctSequence: ["1", "2", "3", "4"],
      time: 20
    },
    {
      text: "خلفائے راشدینؓ کو ان کے عہدِ خلافت کے مطابق ترتیب دیں",
      options: [
        { key: "1", text: "حضرت ابوبکر صدیقؓ" },
        { key: "2", text: "حضرت عمر فاروقؓ" },
        { key: "3", text: "حضرت عثمان غنیؓ" },
        { key: "4", text: "حضرت علی مرتضیٰؓ" }
      ],
      correctSequence: ["1", "2", "3", "4"],
      time: 20
    },
    {
      text: "اسلام کے بنیادی ارکان کو ترتیب سے لگائیں",
      options: [
        { key: "1", text: "توحید و رسالت کی گواہی" },
        { key: "2", text: "نماز کا قیام" },
        { key: "3", text: "زکوٰۃ کی ادائیگی" },
        { key: "4", text: "حج بیت اللہ" }
      ],
      correctSequence: ["1", "2", "3", "4"],
      time: 20
    }
  ],

  // Visual Rapid Fire (For Grand Final: Rapid Image Slideshow)
  "Visual Rapid Fire": [
    {
      type: "image",
      mediaLabel: "RAPID VISUAL CLUE #1",
      mediaSrc: "logo.png",
      text: "Visual Clue 1: Institutional Emblem"
    },
    {
      type: "image",
      mediaLabel: "RAPID VISUAL CLUE #2",
      mediaSrc: "ROLogo.jpeg",
      text: "Visual Clue 2: Software Platform Insignia"
    },
    {
      type: "image",
      mediaLabel: "RAPID VISUAL CLUE #3",
      mediaSrc: "logo2.jpeg",
      text: "Visual Clue 3: Championship Commemorative Crest"
    },
    {
      type: "image",
      mediaLabel: "RAPID VISUAL CLUE #4",
      mediaSrc: "logo.png",
      text: "Visual Clue 4: State Contest Foundation"
    },
    {
      type: "image",
      mediaLabel: "RAPID VISUAL CLUE #5",
      mediaSrc: "ROLogo.jpeg",
      text: "Visual Clue 5: Digital Technology Sponsor"
    },
    {
      type: "image",
      mediaLabel: "RAPID VISUAL CLUE #6",
      mediaSrc: "logo2.jpeg",
      text: "Visual Clue 6: State Olympiad Emblem"
    }
  ]
};

function getTeamCurrentScore(team) {
  if (isTieBreakerActive) {
    return team.tieBreakerScore || 0;
  }
  if (currentPhaseIdx === 0) return team.phase1Score || 0;
  if (currentPhaseIdx === 1) return team.phase2Score || 0;
  if (currentPhaseIdx === 2) return team.phase3Score || 0;
  return 0;
}

function setTeamCurrentScore(team, newScore) {
  if (isTieBreakerActive) {
    team.tieBreakerScore = newScore;
    return;
  }
  if (currentPhaseIdx === 0) team.phase1Score = newScore;
  else if (currentPhaseIdx === 1) team.phase2Score = newScore;
  else if (currentPhaseIdx === 2) team.phase3Score = newScore;
}

function getActivePhaseTeams() {
  if (currentPhaseIdx === 0) {
    return tournamentConfig.allTeamsMaster;
  } else if (currentPhaseIdx === 1) {
    return tournamentConfig.allTeamsMaster.filter(t => t.inPhase2);
  } else {
    return tournamentConfig.allTeamsMaster.filter(t => t.inPhase3);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadTournamentStateFromStorage();
  renderPhasesLaunchDeck();
  renderCompactAnimatedLeaderboard();
  renderOfficialChampionshipBracket();
  renderSchoolsDirectory();
  updateSelectedCount();
  setupStageHotkeys();
  initCloudDatabaseOnLaunch();

  // Initialize screen history with initial screen
  screenHistoryStack.push('screen-phases');
  updateBackButtonVisibility();

  // Seamless Fullscreen Persistence across landing page -> arena page
  const shouldResumeFullscreen = (sessionStorage.getItem('quizArenaFullscreen') === 'true');
  const tryResumeFullscreen = () => {
    const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
    if (!isFs) {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(() => {});
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
  };

  if (shouldResumeFullscreen) {
    tryResumeFullscreen();
  }

  // Unlock browser audio context & ensure fullscreen persistence on first user click or keypress
  const unlockAudioAndFs = () => {
    getAudioContext();
    if (shouldResumeFullscreen) {
      tryResumeFullscreen();
    }
    window.removeEventListener('click', unlockAudioAndFs);
    window.removeEventListener('keydown', unlockAudioAndFs);
    window.removeEventListener('pointerdown', unlockAudioAndFs);
  };
  window.addEventListener('click', unlockAudioAndFs);
  window.addEventListener('keydown', unlockAudioAndFs);
  window.addEventListener('pointerdown', unlockAudioAndFs);
});

// Navigation Screen History Stack
const screenHistoryStack = [];
let isNavigatingBack = false;

// Universal Back Button Handler (Steps back to previous screen inside Arena)
function navigateBack() {
  if (screenHistoryStack.length > 1) {
    // Current screen is at top of stack
    screenHistoryStack.pop();
    const prevScreenId = screenHistoryStack[screenHistoryStack.length - 1];
    isNavigatingBack = true;
    switchMainScreen(prevScreenId);
    isNavigatingBack = false;
    updateBackButtonVisibility();
    return;
  }
  // Fallback defaults if history stack is empty
  const currentActive = document.querySelector('.stage-panel-view.active-panel')?.id;
  if (currentActive === 'screen-round-arena') {
    openRoundsHubForActivePhase();
  } else if (currentActive === 'screen-round-intro') {
    openRoundsHubForActivePhase();
  } else if (currentActive === 'screen-rounds-hub' || currentActive === 'screen-groups-hub') {
    switchMainScreen('screen-phases');
  } else if (currentActive === 'screen-analytics' || currentActive === 'screen-directory' || currentActive === 'screen-admin') {
    switchMainScreen('screen-phases');
  } else {
    // If already on screen-phases (home of Arena), optionally go to landing poster
    window.location.href = "index.html";
  }
}

// Update back button visibility across screens
function updateBackButtonVisibility() {
  const backBtn = document.getElementById('btn-nav-universal-back');
  if (!backBtn) return;
  const currentActive = document.querySelector('.stage-panel-view.active-panel')?.id;
  // If we are on the initial landing phase view, show link to poster or subtle icon
  if (currentActive === 'screen-phases' && screenHistoryStack.length <= 1) {
    backBtn.style.opacity = '0.5';
    backBtn.title = 'Back to Tournament Poster (Home)';
  } else {
    backBtn.style.opacity = '1';
    backBtn.title = 'Back to Previous Screen';
  }
}

// Switch Top Navigation Screens
function switchMainScreen(screenId) {
  // Security Guard: Prevent unauthenticated access to admin portal
  if (screenId === 'screen-admin' && !isAdminLoggedIn) {
    openAdminAccessModal();
    return;
  }

  // Push to internal screen history stack
  if (!isNavigatingBack) {
    if (screenHistoryStack.length === 0 || screenHistoryStack[screenHistoryStack.length - 1] !== screenId) {
      screenHistoryStack.push(screenId);
      // Keep browser history in sync without causing full page reload
      try {
        window.history.pushState({ screenId }, '', `#${screenId}`);
      } catch (e) {}
    }
  }

  document.querySelectorAll('.stage-panel-view').forEach(p => p.classList.remove('active-panel'));
  document.querySelectorAll('.minimal-nav-btn').forEach(b => b.classList.remove('active-nav'));

  const target = document.getElementById(screenId);
  if (target) target.classList.add('active-panel');

  const btnMap = {
    'screen-phases': 'btn-tab-phases',
    'screen-groups-hub': 'btn-tab-phases',
    'screen-rounds-hub': 'btn-tab-phases',
    'screen-round-intro': 'btn-tab-phases',
    'screen-leaderboard': 'btn-tab-leaderboard',
    'screen-analytics': 'btn-tab-analytics',
    'screen-directory': 'btn-tab-directory',
    'screen-admin': 'btn-tab-admin'
  };

  const activeBtnId = btnMap[screenId];
  if (activeBtnId) {
    document.getElementById(activeBtnId)?.classList.add('active-nav');
  }

  // Hide header and footer strictly during live round stage
  if (screenId === 'screen-round-arena') {
    document.body.classList.add('live-round-immersive-mode');
    stopTimerCountdown();
  } else {
    document.body.classList.remove('live-round-immersive-mode');
    stopTimerCountdown();
  }

  if (screenId === 'screen-analytics') {
    renderOfficialChampionshipBracket();
  }

  updateBackButtonVisibility();
}

// Browser Back Button (popstate) Interceptor so hardware/browser back also stays in arena!
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.screenId) {
    isNavigatingBack = true;
    switchMainScreen(e.state.screenId);
    isNavigatingBack = false;
  } else if (screenHistoryStack.length > 1) {
    navigateBack();
  }
});

// 1. PHASES & INDIVIDUAL ROUND LAUNCHERS
function renderPhasesLaunchDeck() {
  const container = document.getElementById('phases-blueprint-cards');
  if (!container) return;

  container.innerHTML = tournamentConfig.phases.map((p, idx) => {
    const isActive = p.status === "active";
    const isCompleted = p.status === "completed";
    const isLocked = p.status === "locked";

    let actionButton = "";
    if (isActive) {
      actionButton = `<button class="phase-btn-trigger btn-enter-live-phase" onclick="openRoundsHubForPhase(${p.id})">Launch Live Competition Stage →</button>`;
    } else if (isCompleted) {
      actionButton = `<button class="phase-btn-trigger" style="background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.3); cursor: pointer;" onclick="openRoundsHubForPhase(${p.id})">Completed Rounds Review</button>`;
    } else if (isLocked) {
      actionButton = `<button class="phase-btn-trigger" style="background: rgba(255,255,255,0.05); color: #64748b; border: 1px solid rgba(255,255,255,0.1); cursor: not-allowed;" disabled>Locked</button>`;
    } else {
      actionButton = `<button class="phase-btn-trigger btn-start-phase" onclick="activatePhaseManually(${p.id})">Activate Phase 0${p.id}</button>`;
    }

    return `
      <div class="phase-blueprint-box ${isActive ? 'phase-is-active' : ''} ${isLocked ? 'phase-is-locked' : ''}">
        <div>
          <div class="phase-tag-top">
            <span class="phase-chip-label">Phase 0${p.id}</span>
            <span style="font-size: 0.8rem; font-weight: 800; color: ${isActive ? '#00f0ff' : (isCompleted ? '#10b981' : '#64748b')}">
              ${isActive ? '● ACTIVE PHASE' : (isCompleted ? '✓ FINISHED' : (isLocked ? 'LOCKED' : 'READY'))}
            </span>
          </div>

          <h3 class="phase-h-title">${p.title}</h3>
          <p class="phase-h-desc">${p.subtitle}</p>

          <div class="phase-rounds-flow-list">
            ${p.rounds.map((r, rIdx) => `
              <div class="round-flow-row ${isActive && rIdx === currentRoundIdx ? 'round-active-pill' : ''}" onclick="openRoundsHubForPhase(${p.id})">
                <div>
                  <strong>${r.name}</strong>
                  <div style="font-size: 0.75rem; color: #94a3b8;">${r.remark}</div>
                </div>
                <div>
                  <span style="font-size: 0.75rem; color: ${isActive ? '#00f0ff' : '#64748b'}; font-weight: 700;">${r.questionsRequired} Qs</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="margin-top: 1rem;">
          ${actionButton}
        </div>
      </div>
    `;
  }).join('');
}

// Professional Psychological Round Theming Metadata
// Clean, precision vector icons (No cheesy emojis or AI looking symbols)
const roundMetaThemes = {
  "MCQ": {
    themeClass: "theme-mcq",
    tag: "LOGICAL REASONING",
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    badgeColor: "#38bdf8",
    gradient: "linear-gradient(145deg, rgba(14, 28, 54, 0.95), rgba(7, 13, 26, 0.98))",
    borderColor: "rgba(56, 189, 248, 0.35)",
    glowColor: "rgba(56, 189, 248, 0.25)",
    desc: "Multiple Choice Questions evaluating analytical clarity, knowledge recall, and swift deduction under stage pressure."
  },
  "Media Round": {
    themeClass: "theme-media",
    tag: "AUDIO-VISUAL CLUES",
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`,
    badgeColor: "#fbbf24",
    gradient: "linear-gradient(145deg, rgba(38, 28, 12, 0.95), rgba(15, 12, 6, 0.98))",
    borderColor: "rgba(251, 191, 36, 0.35)",
    glowColor: "rgba(251, 191, 36, 0.25)",
    desc: "Observational decoding from curated historical photographs, speech recordings, and documentary video footage."
  },
  "Buzzer": {
    themeClass: "theme-buzzer",
    tag: "RAPID REFLEX",
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    badgeColor: "#f43f5e",
    gradient: "linear-gradient(145deg, rgba(46, 14, 25, 0.95), rgba(18, 5, 10, 0.98))",
    borderColor: "rgba(244, 63, 94, 0.35)",
    glowColor: "rgba(244, 63, 94, 0.25)",
    desc: "High-stakes direct buzzer test where quick reflexes and instantaneous answer lock-in secure points."
  },
  "Rapid Fire": {
    themeClass: "theme-rapid",
    tag: "SPEED ENDURANCE",
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    badgeColor: "#f97316",
    gradient: "linear-gradient(145deg, rgba(41, 20, 10, 0.95), rgba(17, 8, 4, 0.98))",
    borderColor: "rgba(249, 115, 22, 0.35)",
    glowColor: "rgba(249, 115, 22, 0.25)",
    desc: "20 consecutive rapid-fire questions per team without pausing. A rigorous test of mental endurance."
  },
  "Sequence": {
    themeClass: "theme-sequence",
    tag: "CHRONOLOGY",
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
    badgeColor: "#a855f7",
    gradient: "linear-gradient(145deg, rgba(32, 16, 51, 0.95), rgba(14, 7, 23, 0.98))",
    borderColor: "rgba(168, 85, 247, 0.35)",
    glowColor: "rgba(168, 85, 247, 0.25)",
    desc: "Arranging historical milestones, scientific discoveries, and constitutional developments in chronology."
  },
  "Visual Rapid Fire": {
    themeClass: "theme-visual-rapid",
    tag: "FINALS VISUALS",
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34"/><path d="M18 14.66V17c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2.34"/><path d="M6 9a6 6 0 0 0 12 0V4H6v5z"/></svg>`,
    badgeColor: "#10b981",
    gradient: "linear-gradient(145deg, rgba(12, 36, 26, 0.95), rgba(5, 16, 12, 0.98))",
    borderColor: "rgba(168, 85, 247, 0.35)",
    glowColor: "rgba(16, 185, 129, 0.25)",
    desc: "Rapid image stream projected one after another. Students identify verbally without answers on screen. Points awarded manually at the end."
  }
};

// Open the dedicated 12-Group On-Stage Selection Hub for a given phase
function openGroupsHubForPhase(phaseId) {
  const phaseIndex = phaseId - 1;
  const phase = tournamentConfig.phases[phaseIndex];
  if (!phase) return;

  if (phaseIndex === 0 && !isPhase1Shuffled()) {
    openTeamShufflerModal(true);
    return;
  }

  currentPhaseIdx = phaseIndex;
  updateTopTracker();

  const titleEl = document.getElementById('groups-hub-title');
  const subEl = document.getElementById('groups-hub-subtitle');
  if (titleEl) titleEl.innerText = `${phase.title} • Choose Group On Stage`;
  if (subEl) subEl.innerText = `${phase.subtitle}. Click any group card to put it on stage, then proceed to rounds.`;

  renderRoundsHubGroupSelector();
  switchMainScreen('screen-groups-hub');
}

// Open the dedicated Round Selection Cards Hub for a given phase
function openRoundsHubForPhase(phaseId) {
  const phaseIndex = phaseId - 1;
  const phase = tournamentConfig.phases[phaseIndex];
  if (!phase) return;

  // MANDATORY SHUFFLE GATE FOR PHASE 1:
  // User cannot enter Phase 1 rounds until 3-team triads are shuffled and confirmed
  if (phaseIndex === 0 && !isPhase1Shuffled()) {
    openTeamShufflerModal(true);
    return;
  }

  currentPhaseIdx = phaseIndex;
  updateTopTracker();

  const titleEl = document.getElementById('rounds-hub-title');
  const subEl = document.getElementById('rounds-hub-subtitle');
  const badgeEl = document.getElementById('rounds-hub-phase-badge');
  const container = document.getElementById('round-cards-selection-container');

  if (titleEl) titleEl.innerText = `${phase.title} • Select Round`;
  if (subEl) subEl.innerText = `${phase.subtitle}. Choose a round card below to launch live presentation on the big screen.`;
  if (badgeEl) {
    badgeEl.innerText = phase.status === 'active' ? '● CURRENT STAGE' : (phase.status === 'completed' ? '✓ FINISHED' : 'PREVIEW');
  }

  if (container) {
    const roundsCount = phase.rounds ? phase.rounds.length : 4;
    container.setAttribute('data-round-count', roundsCount);
    container.className = `round-cards-interactive-grid grid-rounds-${roundsCount}`;
    container.innerHTML = phase.rounds.map((r, rIdx) => {
      // Find matching theme or fallback
      let theme = roundMetaThemes["MCQ"];
      for (const key in roundMetaThemes) {
        if (r.name.includes(key)) {
          theme = roundMetaThemes[key];
          break;
        }
      }

      const isCurrentActiveRound = phase.status === 'active' && rIdx === currentRoundIdx;

      return `
        <div class="interactive-round-card ${theme.themeClass} ${isCurrentActiveRound ? 'round-card-active' : ''}" style="background: ${theme.gradient}; border-color: ${theme.borderColor};">
          <div class="rc-top-row">
            <div class="rc-icon-badge" style="border-color: ${theme.borderColor}; color: ${theme.badgeColor}; box-shadow: 0 4px 20px ${theme.glowColor};">
              ${theme.iconSvg}
            </div>
            <div class="rc-tag-pill" style="color: ${theme.badgeColor}; border-color: ${theme.borderColor};">
              ${theme.tag}
            </div>
          </div>

          <div class="rc-info-body">
            <h3 class="rc-title-text">${r.name}</h3>
            <p class="rc-desc-text">${theme.desc}</p>
            
            <div class="rc-stats-strip">
              <div class="rc-stat-item">
                <span class="rc-stat-num">${r.questionsRequired}</span>
                <span class="rc-stat-lbl">Questions Required</span>
              </div>
              <div class="rc-stat-item">
                <span class="rc-stat-lbl" style="font-weight: 700; color: #fff;">Format Rule:</span>
                <span class="rc-stat-val" style="color: ${theme.badgeColor};">${r.remark}</span>
              </div>
            </div>
          </div>

          <button class="rc-launch-btn" style="background: ${theme.badgeColor}; color: #020617;" onclick="launchRoundFromCard(${phase.id}, ${r.id})">
            Launch ${r.name} on Screen →
          </button>
        </div>
      `;
    }).join('');
  }

  populateStageGroupSelector();
  renderRoundsHubGroupSelector();
  updateStageActiveGroupDisplay();
  switchMainScreen('screen-rounds-hub');
}

function openRoundsHubForActivePhase() {
  openRoundsHubForPhase(currentPhaseIdx + 1);
}

function launchRoundFromCard(phaseId, roundId) {
  enterLiveRound(phaseId, roundId);
}

function activatePhaseManually(phaseId) {
  const phaseIndex = phaseId - 1;
  const targetPhase = tournamentConfig.phases[phaseIndex];

  if (phaseIndex > 0) {
    const prevPhase = tournamentConfig.phases[phaseIndex - 1];
    if (prevPhase.status !== "completed") {
      alert(`⚠️ Please complete ${prevPhase.title} and select qualified teams on the leaderboard before unlocking Phase ${phaseId}.`);
      return;
    }
  }

  tournamentConfig.phases.forEach((p, idx) => {
    if (idx < phaseIndex) p.status = "completed";
    else if (idx === phaseIndex) p.status = "active";
    else p.status = "locked";
  });

  currentPhaseIdx = phaseIndex;
  currentRoundIdx = 0;
  currentGroupIdx = 1;

  // Play Indian KBC Grand Level Transition Theme
  playQuizTone(0, 0, 'kbc-level-intro');

  updateTopTracker();
  renderPhasesLaunchDeck();
  renderCompactAnimatedLeaderboard();
  renderOfficialChampionshipBracket();

  const modal = document.getElementById('phase-advance-modal');
  const mTitle = document.getElementById('modal-step-title');
  const mDesc = document.getElementById('modal-step-desc');

  if (mTitle) mTitle.innerText = `${targetPhase.title.toUpperCase()} ACTIVATED!`;
  if (mDesc) mDesc.innerText = `${targetPhase.subtitle}. Click below to select which round to launch.`;
  if (modal) modal.classList.add('modal-open');

  if (typeof confetti === 'function') {
    confetti({ particleCount: 110, spread: 90, origin: { y: 0.55 } });
  }
}

function startCurrentPhaseRounds() {
  document.getElementById('phase-advance-modal')?.classList.remove('modal-open');
  openRoundsHubForPhase(currentPhaseIdx + 1);
}

// Active question pool for current live round (questions are consumed and never repeated)
let activeRoundQuestionsPool = [];
let currentLiveQuestionIndex = 0;
let currentLiveActiveQuestion = null;
// Persistent set of question identifiers that have already been presented on stage
let presentedQuestionsHistory = new Set();

// 2 Questions Per School in Active 3-Team Triad (for Rounds 1 & 2)
let activeSchoolTurnSlot = 0; // 0, 1, 2 for Team 1, Team 2, Team 3
let schoolQuestionCounts = { 0: 0, 1: 0, 2: 0 }; // Tracks questions answered per school in this round

// Buzzer Round State Tracking (5 Questions per Group)
let currentBuzzerGroupQCount = 0; // Tracks questions 1 to 5 for buzzer round
let buzzerActiveTeamId = null; // Currently buzzed team
let buzzerFirstTeamAttempted = false; // Whether the fastest team has already answered (true = passed to other 2)
let buzzerAttemptedTeamIds = new Set(); // Teams that already attempted this question

// Function to select active school turn (via clicking top podium pod or host control)
function selectActiveSchoolTurn(slotIdx) {
  if (slotIdx < 0 || slotIdx > 2) return;
  activeSchoolTurnSlot = slotIdx;
  updateStageActiveGroupDisplay();
  updateLiveSchoolTurnBadge();

  const groupName = `Group ${currentGroupIdx}`;
  const teams = getActiveGroupTeams(groupName);
  const targetTeamName = document.getElementById('media-eval-target-team-name');
  if (targetTeamName && teams[activeSchoolTurnSlot]) {
    targetTeamName.innerText = teams[activeSchoolTurnSlot].name;
  }

  playQuizTone(523.25, 659.25, 'lock');
}

// Update the glowing school badge right on the question prompt card
function updateLiveSchoolTurnBadge() {
  const badgeEl = document.getElementById('live-target-school-badge');
  const nameEl = document.getElementById('target-school-name');
  const countEl = document.getElementById('target-school-qcount');
  const groupName = `Group ${currentGroupIdx}`;
  const teams = getActiveGroupTeams(groupName);

  if (!badgeEl) return;

  const phase = tournamentConfig.phases[currentPhaseIdx];
  const round = phase ? (phase.rounds[currentRoundIdx] || phase.rounds[0]) : null;
  const isBuzzerRound = round && round.name.includes("Buzzer");

  if (isBuzzerRound) {
    badgeEl.style.display = 'inline-flex';
    badgeEl.style.borderColor = 'rgba(239, 68, 68, 0.6)';
    badgeEl.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.18), rgba(15, 23, 42, 0.8))';
    badgeEl.style.color = '#fca5a5';
    badgeEl.innerHTML = `🔔 Buzzer Round • <span class="target-school-strong" style="color: #fff;">Open to Fastest Team</span> <span class="target-school-counter" style="background: rgba(239, 68, 68, 0.35); color: #fff;">(Q ${Math.min(5, currentBuzzerGroupQCount || 1)} of 5)</span>`;
    return;
  }

  // Restore standard direct school turn appearance
  badgeEl.style.borderColor = '';
  badgeEl.style.background = '';
  badgeEl.style.color = '';

  const team = teams[activeSchoolTurnSlot];
  const qNum = (schoolQuestionCounts[activeSchoolTurnSlot] || 0) + 1;

  if (team) {
    badgeEl.style.display = 'inline-flex';
    badgeEl.innerHTML = `🎯 Direct Question: <span id="target-school-name" class="target-school-strong">${team.name || `Team ${activeSchoolTurnSlot + 1}`}</span> <span id="target-school-qcount" class="target-school-counter">(Q ${Math.min(2, qNum)} of 2)</span>`;
  } else {
    badgeEl.style.display = 'none';
  }
}

function enterLiveRound(phaseId, roundId) {
  currentPhaseIdx = phaseId - 1;
  currentRoundIdx = roundId - 1;
  updateTopTracker();

  const phase = tournamentConfig.phases[currentPhaseIdx];
  const round = phase ? (phase.rounds[currentRoundIdx] || phase.rounds[0]) : null;

  // Load questions from repository and exclude any questions already presented on stage
  const sourceQuestions = getCurrentRoundQuestionsList();
  
  // Filter out questions that have already appeared on stage
  let freshQuestions = sourceQuestions.filter(q => {
    const qKey = (q.text || '').trim();
    return !presentedQuestionsHistory.has(qKey);
  });

  // If all questions from the repository have been presented, recycle gracefully
  if (freshQuestions.length === 0 && sourceQuestions.length > 0) {
    sourceQuestions.forEach(q => presentedQuestionsHistory.delete((q.text || '').trim()));
    freshQuestions = [...sourceQuestions];
  }

  activeRoundQuestionsPool = [...freshQuestions];

  // Randomize sequence so order is always varied (except keep demo question first in Sequence round for demonstration)
  const isSequenceRound = round && round.name && round.name.includes("Sequence");
  if (isSequenceRound) {
    const demoIdx = activeRoundQuestionsPool.findIndex(q => q.text && q.text.includes("Arrange the months in correct chronological calendar order"));
    if (demoIdx > 0) {
      const demoQ = activeRoundQuestionsPool.splice(demoIdx, 1)[0];
      activeRoundQuestionsPool.unshift(demoQ);
    }
  } else {
    for (let i = activeRoundQuestionsPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [activeRoundQuestionsPool[i], activeRoundQuestionsPool[j]] = [activeRoundQuestionsPool[j], activeRoundQuestionsPool[i]];
    }
  }

  currentLiveQuestionIndex = 0;
  activeSchoolTurnSlot = 0;
  schoolQuestionCounts = { 0: 0, 1: 0, 2: 0 };
  currentBuzzerGroupQCount = 0;
  buzzerActiveTeamId = null;
  buzzerFirstTeamAttempted = false;
  buzzerAttemptedTeamIds.clear();
  // Play Indian KBC Grand Entrance Fanfare for round/level launch
  playQuizTone(0, 0, 'kbc-level-intro');

  // Populate stage triad group selector and sync active group banner
  populateStageGroupSelector();
  updateStageActiveGroupDisplay();
  updateLiveSchoolTurnBadge();

  // Show the cinematic 3-team stage matchup faceoff screen first!
  renderRoundIntroFaceoff();
  switchMainScreen('screen-round-intro');
}

// Render the 3 Competing Teams Matchup Face-Off on Stage
function renderRoundIntroFaceoff() {
  const phase = tournamentConfig.phases[currentPhaseIdx];
  const round = phase.rounds[currentRoundIdx] || phase.rounds[0];
  const groupName = `Group ${currentGroupIdx}`;
  const teams = getActiveGroupTeams(groupName);

  const titleEl = document.getElementById('intro-round-title');
  const tagEl = document.getElementById('intro-round-name-tag');
  const groupSpecEl = document.getElementById('intro-spec-group');
  const gridEl = document.getElementById('intro-triad-matchup-grid');

  if (titleEl) titleEl.innerText = `${round.name.toUpperCase()} • ${phase.title.toUpperCase()}`;
  if (tagEl) tagEl.innerText = round.name.toUpperCase();
  if (groupSpecEl) groupSpecEl.innerText = groupName;

  if (gridEl) {
    if (teams.length === 0) {
      gridEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; color: #94a3b8; padding: 2rem;">
          No teams currently assigned to ${groupName}. Please shuffle or add teams.
        </div>
      `;
      return;
    }

    gridEl.innerHTML = teams.map((team, idx) => {
      const score = getTeamCurrentScore(team);
      const slotNum = idx + 1;
      const slotColors = [
        { border: 'rgba(0, 240, 255, 0.4)', bg: 'linear-gradient(145deg, rgba(0, 240, 255, 0.12), rgba(10, 16, 32, 0.9))', glow: 'rgba(0, 240, 255, 0.25)', tag: '#00f0ff' },
        { border: 'rgba(255, 196, 0, 0.4)', bg: 'linear-gradient(145deg, rgba(255, 196, 0, 0.12), rgba(10, 16, 32, 0.9))', glow: 'rgba(255, 196, 0, 0.25)', tag: '#ffc400' },
        { border: 'rgba(16, 185, 129, 0.4)', bg: 'linear-gradient(145deg, rgba(16, 185, 129, 0.12), rgba(10, 16, 32, 0.9))', glow: 'rgba(16, 185, 129, 0.25)', tag: '#34d399' }
      ];
      const color = slotColors[idx % slotColors.length];

      return `
        <div class="intro-team-podium-card" style="border-color: ${color.border}; background: ${color.bg}; box-shadow: 0 10px 30px ${color.glow}; animation-delay: ${idx * 0.15}s;">
          <div class="intro-podium-slot-badge" style="background: ${color.tag};">
            PODIUM ${slotNum}
          </div>
          <div class="intro-team-avatar-ring">
            <span class="intro-team-avatar-text">${team.name.charAt(0) || 'T'}</span>
          </div>
          <h3 class="intro-team-school-name" title="${team.name}">${team.name}</h3>
          <div class="intro-team-meta-row">
            <span class="intro-team-code-pill">${team.code || `TEAM-${team.id}`}</span>
            <span class="intro-team-group-pill">${groupName}</span>
          </div>
          <div class="intro-team-score-pedestal">
            <span class="intro-score-label">CURRENT SCORE</span>
            <span class="intro-score-digit">${score} <span style="font-size: 0.8rem; font-weight: 700; opacity: 0.8;">PTS</span></span>
          </div>
          <div class="intro-competing-strip">
            <span class="competing-pulse-dot"></span> LIVE ON STAGE
          </div>
        </div>
      `;
    }).join('');
  }
}

// Moderator / User clicks "⚡ Start Round & Show Questions"
function beginLiveQuestionsOnStage() {
  switchMainScreen('screen-round-arena');
  const phase = tournamentConfig.phases[currentPhaseIdx];
  const round = phase ? (phase.rounds[currentRoundIdx] || phase.rounds[0]) : null;
  const isSpeedRound = round && (round.name.includes("Rapid Fire") || round.name.includes("Visual Rapid Fire"));

  // If entering a Rapid Fire round: launch INSTANTLY with zero overlay delay so teams do not lose precious timer seconds!
  if (isSpeedRound) {
    renderLiveQuestion();
  } else {
    triggerQuestionLogoTransition("STAGE READY • QUESTION 01", () => {
      renderLiveQuestion();
    });
  }
}

// Advance the active group on stage smoothly to the next round (e.g. Round 1 -> Round 2 -> Round 3 -> Round 4)
function advanceToNextRoundOnStage() {
  const phase = tournamentConfig.phases[currentPhaseIdx];
  if (!phase) return;

  if (currentRoundIdx < phase.rounds.length - 1) {
    const nextRound = phase.rounds[currentRoundIdx + 1];
    enterLiveRound(phase.id, nextRound.id);
  } else {
    // If already at last round, advance group and return to dashboard
    advanceNextGroupAndReturnToDashboard();
  }
}

// Conclude current group's 4 rounds, move to the next group, and return to Dashboard (giving time for the next group to take the stage)
function advanceNextGroupAndReturnToDashboard() {
  advanceToNextGroup();
  saveTournamentStateToStorage();
  currentRoundIdx = 0; // Reset next group to start from Round 1
  
  // Play triumphant level fanfare
  playQuizTone(0, 0, 'kbc-level-intro');

  // Open the Rounds Hub dashboard displaying the next group ready on stage
  openRoundsHubForActivePhase();
}

// Conclude current group's 4 rounds, bring next group on stage, and start Round 1 directly
function advanceNextGroupAndStartRounds() {
  advanceToNextGroup();
  const phase = tournamentConfig.phases[currentPhaseIdx];
  if (!phase) return;

  // Start at Round 1 (id: 1) for the newly brought group
  const firstRound = phase.rounds[0];
  enterLiveRound(phase.id, firstRound.id);
}

function updateTopTracker() {
  const phase = tournamentConfig.phases[currentPhaseIdx];
  const round = phase.rounds[currentRoundIdx] || phase.rounds[0];

  const pText = document.getElementById('tracker-phase-text');
  const rText = document.getElementById('tracker-round-text');

  if (pText) pText.innerText = phase.title;
  if (rText) rText.innerText = round.name;

  const indicator = document.getElementById('fresh-score-indicator');
  if (indicator) {
    indicator.innerText = `PHASE ${currentPhaseIdx + 1} FRESH SCORE`;
  }
}

// Helper to get questions for current round
function getCurrentRoundQuestionsList() {
  const phase = tournamentConfig.phases[currentPhaseIdx];
  const round = phase.rounds[currentRoundIdx] || phase.rounds[0];
  const targetPhaseNum = currentPhaseIdx + 1; // 1, 2, or 3
  
  let pool = [];
  if (isTieBreakerActive || round.name.includes("Tie Breaker")) {
    pool = (quizRoundsQuestions["Tie Breaker"] && quizRoundsQuestions["Tie Breaker"].length > 0)
      ? quizRoundsQuestions["Tie Breaker"]
      : (quizRoundsQuestions["Buzzer"] || []);
  } else if (round.name.includes("Media")) {
    pool = quizRoundsQuestions["Media Round"] || [];
  } else if (round.name.includes("Buzzer")) {
    pool = quizRoundsQuestions["Buzzer"] || [];
  } else if (round.name.includes("Visual Rapid Fire")) {
    pool = quizRoundsQuestions["Visual Rapid Fire"] || [];
  } else if (round.name.includes("Rapid Fire")) {
    pool = quizRoundsQuestions["Rapid Fire"] || [];
  } else if (round.name.includes("Sequence")) {
    pool = quizRoundsQuestions["Sequence"] || [];
  } else {
    pool = quizRoundsQuestions["MCQ"] || [];
  }

  // Filter pool for questions configured specifically for this phase OR shared across all phases
  const phaseSpecific = pool.filter(q => String(q.phase) === String(targetPhaseNum));
  const sharedQuestions = pool.filter(q => !q.phase || q.phase === "all");

  // If questions are explicitly defined for this phase, use them (plus shared pool)
  // If no specific questions, use the entire available pool
  if (phaseSpecific.length > 0) {
    return [...phaseSpecific, ...sharedQuestions];
  }

  return pool;
}

// 2. BROADCAST MEDIA & QUESTION DISPLAY (Guaranteed Non-Repeating)
function setStageLightingState(state) {
  const rig = document.getElementById('stage-lighting-rig');
  if (!rig) return;
  rig.classList.remove('light-state-suspense', 'light-state-correct', 'light-state-wrong');
  if (state) {
    rig.classList.add(`light-state-${state}`);
  }
}

function renderLiveQuestion() {
  stageSelectedOptionKey = null;
  isAnswerAlreadyRevealed = false;
  currentQuestionAttemptCount = 0;
  stopKbcHeartbeatLoop();
  setStageLightingState(null); // Return to default broadcast ambient lighting
  updateStageActiveGroupDisplay();

  const phase = tournamentConfig.phases[currentPhaseIdx];
  const round = phase.rounds[currentRoundIdx] || phase.rounds[0];
  const roundBadge = document.getElementById('current-round-title-badge');
  const formatBadge = document.getElementById('format-label-text');
  const qPrompt = document.getElementById('live-question-text');
  const optionsGrid = document.getElementById('live-options-container');
  const mediaContainer = document.getElementById('media-container-zone');

  const isBuzzerRound = round.name.includes("Buzzer");
  const isVisualRapidFire = round.name.includes("Visual Rapid Fire");
  const isRapidFire = !isVisualRapidFire && round.name.includes("Rapid Fire");

  // In Visual Rapid Fire (Grand Finals): Rapid image stream shown one by one, no answers on screen, students answer rapidly, manual points at end!
  if (isVisualRapidFire) {
    renderVisualRapidFireStageView(round, phase);
    return;
  }

  // In Verbal Rapid Fire Round: Anchor asks questions verbally for 60 seconds.
  // No questions on screen! Show Big Screen Rapid Stadium with giant timer & 3 on-stage teams for manual scoring (+200, +100, etc.)
  if (isRapidFire) {
    renderRapidFireStadiumView(round, phase);
    return;
  }

  // Hide Rapid Fire and Visual Rapid Fire stadium views if not in those rounds
  const rfCard = document.getElementById('rapid-fire-stage-card');
  if (rfCard) rfCard.style.display = "none";
  const vrfCard = document.getElementById('visual-rapid-stage-card');
  if (vrfCard) vrfCard.style.display = "none";

  // Ensure top podium strip is visible for normal rounds
  const topPodiumStrip = document.getElementById('stage-teams-competing-strip');
  if (topPodiumStrip) topPodiumStrip.style.display = "grid";

  // Check if round is finished (Rounds 1 & 2: when pool empty; Buzzer round: when currentBuzzerGroupQCount >= 5 or pool empty)
  const isBuzzerFinished = isBuzzerRound && currentBuzzerGroupQCount >= 5;
  const isPoolEmpty = !activeRoundQuestionsPool || activeRoundQuestionsPool.length === 0;

  if (isBuzzerFinished || isPoolEmpty) {
    if (roundBadge) roundBadge.innerText = `${round.name} • COMPLETED`;
    if (formatBadge) formatBadge.innerText = "ROUND FINISHED";
    if (qPrompt) qPrompt.innerHTML = `<span style="color: var(--cyan);">🎉 All ${isBuzzerRound ? '5 Buzzer' : ''} questions for ${round.name} have been presented!</span>`;
    if (mediaContainer) {
      mediaContainer.style.display = "none";
      mediaContainer.innerHTML = "";
    }

    const turnBadge = document.getElementById('live-target-school-badge');
    if (turnBadge) turnBadge.style.display = "none";
    const promptCard = document.querySelector('.question-prompt-card');
    if (promptCard) promptCard.style.display = "none";
    const buzzerCard = document.getElementById('buzzer-round-action-card');
    if (buzzerCard) buzzerCard.style.display = "none";
    const mediaEvalCard = document.getElementById('media-answer-eval-card');
    if (mediaEvalCard) mediaEvalCard.style.display = "none";
    const standingsCard = document.getElementById('triad-standings-card');
    if (standingsCard) standingsCard.style.display = "none";

    const totalRoundsInPhase = phase.rounds.length;
    const isLastRoundOfPhase = (currentRoundIdx >= totalRoundsInPhase - 1);
    const nextRoundObj = !isLastRoundOfPhase ? phase.rounds[currentRoundIdx + 1] : null;

    let actionButtonsHtml = "";
    if (isTieBreakerActive) {
      actionButtonsHtml = `
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button class="action-btn-clean btn-reveal-gold" style="background: linear-gradient(135deg, #ef4444, #dc2626); color: #fff; padding: 0.9rem 2.2rem; font-size: 1.05rem; font-weight: 900; box-shadow: 0 0 25px rgba(239,68,68,0.6);" onclick="exitTieBreakerMode()">
            ⚡ Conclude Tie Breaker & Return to Leaderboard →
          </button>
        </div>
      `;
    } else if (!isLastRoundOfPhase && nextRoundObj) {
      actionButtonsHtml = `
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button class="action-btn-clean btn-reveal-gold" style="padding: 0.8rem 1.8rem; font-size: 1rem; font-weight: 900;" onclick="advanceToNextRoundOnStage()">
            Advance to ${nextRoundObj.name} →
          </button>
          <button class="action-btn-clean" style="padding: 0.8rem 1.4rem;" onclick="openRoundsHubForActivePhase()">
            ← Select Different Round
          </button>
          <button class="action-btn-clean" style="padding: 0.8rem 1.4rem;" onclick="switchMainScreen('screen-leaderboard')">
            View Leaderboard Standings
          </button>
        </div>
      `;
    } else {
      // Last round of the phase concluded! Return to dashboard to prepare next group!
      actionButtonsHtml = `
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button class="action-btn-clean btn-reveal-gold" style="background: linear-gradient(135deg, #00f0ff, #0088ff); color: #020617; padding: 0.9rem 2.2rem; font-size: 1.05rem; font-weight: 900; box-shadow: 0 0 25px rgba(0,240,255,0.6);" onclick="advanceNextGroupAndReturnToDashboard()">
            🏠 Save & Return to Dashboard (Prepare Next Group) →
          </button>
          <button class="action-btn-clean" style="padding: 0.85rem 1.4rem;" onclick="switchMainScreen('screen-leaderboard')">
            View Live Leaderboard →
          </button>
          <button class="action-btn-clean" style="padding: 0.85rem 1.4rem;" onclick="openRoundsHubForActivePhase()">
            Rounds Hub →
          </button>
        </div>
      `;
    }

    if (optionsGrid) {
      optionsGrid.style.display = "grid";
      optionsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.2rem 1.5rem; background: rgba(0, 240, 255, 0.06); border: 1.5px solid rgba(0, 240, 255, 0.3); border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
          <h3 style="color: #fff; font-size: 1.45rem; font-weight: 800; margin-bottom: 0.5rem;">
            ${isLastRoundOfPhase 
              ? `🎉 All 4 Rounds Finished for Group ${currentGroupIdx}!` 
              : `🎉 ${round.name} Completed for Group ${currentGroupIdx}!`}
          </h3>
          <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.6rem; max-width: 620px; margin-left: auto; margin-right: auto;">
            ${isLastRoundOfPhase 
              ? `Group ${currentGroupIdx} has completed all 4 rounds. Click below to return to the dashboard and give the next 3 teams time to take the stage.` 
              : `All questions for this round have been presented. Click below to smoothly transition Group ${currentGroupIdx} into ${nextRoundObj.name}.`}
          </p>
          ${actionButtonsHtml}
        </div>
      `;
    }
    stopTimerCountdown();
    return;
  }

  // POP the next question directly from the pool so it is NEVER seen again in this round
  currentLiveQuestionIndex++;
  if (isBuzzerRound) {
    currentBuzzerGroupQCount++;
    buzzerActiveTeamId = null;
    buzzerFirstTeamAttempted = false;
    buzzerAttemptedTeamIds.clear();
  }
  currentLiveActiveQuestion = activeRoundQuestionsPool.shift();
  const q = currentLiveActiveQuestion;
  if (q && q.text) {
    presentedQuestionsHistory.add(q.text.trim());
    try {
      localStorage.setItem(STORAGE_KEY_PRESENTED_QS, JSON.stringify(Array.from(presentedQuestionsHistory)));
    } catch (e) {}
  }

  // Play Indian KBC Question Presentation Dramatic Stinger
  playQuizTone(0, 0, 'kbc-question-appear');

  if (roundBadge) {
    if (isBuzzerRound) {
      roundBadge.innerText = `${round.name} • Buzzer Q 0${currentBuzzerGroupQCount} of 05`;
    } else {
      roundBadge.innerText = `${round.name} • Question ${currentLiveQuestionIndex < 10 ? '0' + currentLiveQuestionIndex : currentLiveQuestionIndex}`;
    }
  }
  if (formatBadge) formatBadge.innerText = q.mediaLabel || (round.name.toUpperCase());

  // Close standings modal for the new question
  closeTriadStandingsModal();

  // Restore prompt card display for active questions
  const promptCard = document.querySelector('.question-prompt-card');
  if (promptCard) promptCard.style.display = 'flex';

  // Synchronize school turn indicator badge on the question prompt card
  updateLiveSchoolTurnBadge();
  // STRICT RULE: Only show media container if round is a Media Round AND question has media
  const isMediaRound = round.name.includes("Media") || round.name.includes("Visual");

  // In Media Round: strictly ensure options grid is completely hidden and empty
  if (optionsGrid) {
    if (isMediaRound) {
      optionsGrid.style.display = "none";
      optionsGrid.innerHTML = "";
    } else {
      optionsGrid.style.display = "grid";
    }
  }

  // Toggle "Check Pick (Pass/Buzz)" button visibility in host dock (not needed when there are no options)
  const checkPickBtn = document.getElementById('btn-check-pick');
  if (checkPickBtn) {
    checkPickBtn.style.display = isMediaRound ? "none" : "block";
  }
  const dockNextBtn = document.querySelector('.btn-next-cyan');
  if (dockNextBtn) {
    dockNextBtn.innerText = "Next Question →";
  }

  if (mediaContainer) {
    if (isMediaRound && q.type === "image") {
      mediaContainer.style.display = "flex";
      mediaContainer.innerHTML = `<img src="${q.mediaSrc}" alt="Visual Clue" class="media-image-display">`;
    } else if (isMediaRound && q.type === "video") {
      mediaContainer.style.display = "flex";
      mediaContainer.innerHTML = `
        <video class="media-video-display" controls autoplay ${q.muted ? 'muted' : ''}>
          <source src="${q.mediaSrc}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;
    } else if (isMediaRound && q.type === "audio") {
      mediaContainer.style.display = "flex";
      mediaContainer.innerHTML = `
        <div class="interactive-audio-stage-card" id="audio-stage-card">
          <audio id="live-stage-audio" src="${q.mediaSrc}" preload="auto"></audio>
          
          <div class="audio-control-row">
            <button class="anchor-play-audio-btn" id="anchor-audio-toggle-btn" onclick="toggleStageAudioPlayback()" title="Play / Pause Audio Clue">
              <span class="audio-btn-icon" id="audio-play-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </span>
              <span class="audio-btn-text" id="audio-btn-label">PLAY AUDIO CLUE</span>
            </button>

            <div class="audio-meta-capsule">
              <span class="audio-meta-tag">ARCHIVE BROADCAST</span>
              <span class="audio-meta-title">${q.audioTitle || 'Historic Audio Recording'}</span>
            </div>
          </div>

          <!-- Broadcast Audio Lifeline & Voice Waveform Visualizer -->
          <div class="audio-lifeline-container stage-audio-lifeline" id="stage-audio-lifeline">
            <div class="lifeline-glow-beam"></div>
            <div class="lifeline-soundwave-bars">
              <span class="wave-bar wb-1"></span>
              <span class="wave-bar wb-2"></span>
              <span class="wave-bar wb-3"></span>
              <span class="wave-bar wb-4"></span>
              <span class="wave-bar wb-5"></span>
              <span class="wave-bar wb-6"></span>
              <span class="wave-bar wb-7"></span>
              <span class="wave-bar wb-8"></span>
              <span class="wave-bar wb-9"></span>
              <span class="wave-bar wb-10"></span>
              <span class="wave-bar wb-11"></span>
              <span class="wave-bar wb-12"></span>
              <span class="wave-bar wb-13"></span>
              <span class="wave-bar wb-14"></span>
              <span class="wave-bar wb-15"></span>
              <span class="wave-bar wb-16"></span>
              <span class="wave-bar wb-17"></span>
              <span class="wave-bar wb-18"></span>
              <span class="wave-bar wb-19"></span>
              <span class="wave-bar wb-20"></span>
            </div>
            <div class="lifeline-pulse-heartbeat">
              <svg viewBox="0 0 500 40" class="ecg-lifeline-svg">
                <polyline class="ecg-track-back" points="0,20 120,20 140,5 155,35 170,12 185,28 200,20 300,20 320,5 335,35 350,12 365,28 380,20 500,20" />
                <polyline class="ecg-track-pulse" points="0,20 120,20 140,5 155,35 170,12 185,28 200,20 300,20 320,5 335,35 350,12 365,28 380,20 500,20" />
              </svg>
            </div>
          </div>
        </div>
      `;

      // Set up audio event listeners for automatic waveform synchronization
      setTimeout(() => {
        const audioEl = document.getElementById('live-stage-audio');
        if (audioEl) {
          audioEl.onended = () => {
            syncAudioPlaybackUI(false);
          };
          audioEl.onpause = () => {
            syncAudioPlaybackUI(false);
          };
          audioEl.onplay = () => {
            syncAudioPlaybackUI(true);
          };
        }
      }, 50);
    } else {
      mediaContainer.style.display = "none";
      mediaContainer.innerHTML = "";
    }
  }

  // Display Question Text with Urdu & English Nastaleeq Support
  if (qPrompt) {
    qPrompt.innerText = q.text || "Question";
    qPrompt.setAttribute('dir', 'auto');
  }

  let selectedOptionKey = null;

  const mediaEvalCard = document.getElementById('media-answer-eval-card');
  const mediaHiddenPrompt = document.getElementById('media-answer-hidden-prompt');
  const mediaRevealedBox = document.getElementById('media-answer-revealed-box');
  const mediaEvalDecision = document.getElementById('media-eval-decision-strip');
  const mediaTargetTeamLabel = document.getElementById('media-eval-target-team-name');

  const buzzerCard = document.getElementById('buzzer-round-action-card');
  const buzzerClaimStrip = document.getElementById('buzzer-claim-strip');
  const buzzerEvalStrip = document.getElementById('buzzer-eval-strip');
  const seqCard = document.getElementById('sequence-stage-card');

  const isSequenceRound = round.name.includes("Sequence");

  if (isSequenceRound) {
    // 🔢 In Sequence Round: Show Chronological Ordering Stadium Card
    if (mediaEvalCard) mediaEvalCard.style.display = "none";
    if (buzzerCard) buzzerCard.style.display = "none";
    if (optionsGrid) {
      optionsGrid.style.display = "none";
      optionsGrid.innerHTML = "";
    }
    renderSequenceRoundStageView(q);
  } else if (isMediaRound) {
    // In Media Round: No multiple-choice options!
    if (seqCard) seqCard.style.display = "none";
    if (buzzerCard) buzzerCard.style.display = "none";
    if (optionsGrid) {
      optionsGrid.style.display = "none";
      optionsGrid.innerHTML = "";
    }

    if (mediaEvalCard) {
      mediaEvalCard.style.display = "flex";
      if (mediaHiddenPrompt) mediaHiddenPrompt.style.display = "flex";
      if (mediaRevealedBox) mediaRevealedBox.style.display = "none";
      if (mediaEvalDecision) mediaEvalDecision.style.display = "none";

      const groupName = `Group ${currentGroupIdx}`;
      const teams = getActiveGroupTeams(groupName);
      const allocatedTeam = teams[activeSchoolTurnSlot];
      if (mediaTargetTeamLabel && allocatedTeam) {
        mediaTargetTeamLabel.innerText = allocatedTeam.name;
      }
    }
  } else if (isBuzzerRound) {
    // Buzzer Round: Show options and buzzer team allocation selector
    if (seqCard) seqCard.style.display = "none";
    if (mediaEvalCard) mediaEvalCard.style.display = "none";
    if (buzzerCard) {
      buzzerCard.style.display = "flex";
      if (buzzerClaimStrip) buzzerClaimStrip.style.display = "flex";
      if (buzzerEvalStrip) buzzerEvalStrip.style.display = "none";
      renderBuzzerTeamSelector();
    }

    if (optionsGrid) {
      optionsGrid.style.display = "grid";
      if (q.options && q.options.length > 0) {
        optionsGrid.innerHTML = q.options.map(opt => `
          <div class="option-stage-btn" id="opt-stage-${opt.key}" onclick="selectStageOption('${opt.key}')">
            <div class="opt-key-char">${opt.key}</div>
            <div class="opt-text-label" dir="auto">${opt.text}</div>
            <div class="opt-status-badge"></div>
          </div>
        `).join('');
      } else {
        optionsGrid.innerHTML = "";
      }
    }
  } else {
    // Standard MCQ or other rounds
    if (seqCard) seqCard.style.display = "none";
    if (mediaEvalCard) mediaEvalCard.style.display = "none";
    if (buzzerCard) buzzerCard.style.display = "none";
    if (optionsGrid) {
      optionsGrid.style.display = "grid";
      if (q.options && q.options.length > 0) {
        optionsGrid.innerHTML = q.options.map(opt => `
          <div class="option-stage-btn" id="opt-stage-${opt.key}" onclick="selectStageOption('${opt.key}')">
            <div class="opt-key-char">${opt.key}</div>
            <div class="opt-text-label" dir="auto">${opt.text}</div>
            <div class="opt-status-badge"></div>
          </div>
        `).join('');
      } else {
        optionsGrid.innerHTML = "";
      }
    }
  }

  const currentRoundTimer = (round && round.timer) ? round.timer : defaultQuestionTimer;
  resetTimer(q.time || currentRoundTimer);
  stopTimerCountdown();
}

// ==============================================================================
// 🔢 SEQUENCE CHRONOLOGY ROUND: INTERACTIVE SELECTION & STEP REVEAL CONTROLLER
// 1. Initial State: Display options list in question order. Candidate picks options.
// 2. User Sequence Tray: Shows chosen options in order (1, 2, 3, 4).
// 3. Verify Sequence: Compares candidate's sequence against the official order.
// 4. Space Bar / Button: Reveals the official sequence items one by one!
// 5. Host Evaluation: Award +10 PTS to the active triad team or mark wrong.
// ==============================================================================
let candidateSelectedSequence = [];
let currentSequenceRevealStep = 0;
let isSequenceRevealActive = false;

function renderSequenceRoundStageView(q) {
  const seqCard = document.getElementById('sequence-stage-card');
  const pickingView = document.getElementById('sequence-picking-view');
  const revealView = document.getElementById('sequence-reveal-view');
  if (!seqCard || !pickingView || !revealView) return;

  seqCard.style.display = "flex";
  pickingView.style.display = "flex";
  revealView.style.display = "none";

  candidateSelectedSequence = [];
  currentSequenceRevealStep = 0;
  isSequenceRevealActive = false;

  // Render empty selected sequence tray
  updateSequenceTrayUI();

  // Render the vertical options list in given order (e.g. options 1, 2, 3, 4)
  const optionsListEl = document.getElementById('seq-options-vertical-list');
  if (optionsListEl && q.options) {
    optionsListEl.innerHTML = q.options.map((opt, idx) => {
      const optionNum = opt.key || (idx + 1);
      return `
        <div class="seq-option-row-card" id="seq-opt-card-${opt.key}" onclick="handleSequenceOptionClick('${opt.key}')">
          <div class="seq-opt-left-badge" id="seq-opt-order-badge-${opt.key}" style="display: none;"></div>
          <div class="seq-opt-urdu-text" dir="auto">${opt.text}</div>
          <div class="seq-opt-right-badge">${optionNum}</div>
        </div>
      `;
    }).join('');
  }

  const verifyBtn = document.getElementById('btn-seq-verify');
  if (verifyBtn) verifyBtn.disabled = true;
}

// User or candidate clicks an option to add it to their sequence
function handleSequenceOptionClick(optKey) {
  if (isSequenceRevealActive) return;
  const q = currentLiveActiveQuestion;
  if (!q || !q.options) return;

  const totalRequired = q.options.length;
  // If already selected, clicking it again can deselect it
  const existingIdx = candidateSelectedSequence.indexOf(optKey);
  if (existingIdx !== -1) {
    candidateSelectedSequence.splice(existingIdx, 1);
  } else {
    if (candidateSelectedSequence.length >= totalRequired) return;
    candidateSelectedSequence.push(optKey);
  }

  playQuizTone(440, 550, 'lock');
  updateSequenceTrayUI();
}

// Update the top sequence tray chips and card highlights
function updateSequenceTrayUI() {
  const q = currentLiveActiveQuestion;
  if (!q || !q.options) return;

  const trayRow = document.getElementById('seq-selected-chips-row');
  const verifyBtn = document.getElementById('btn-seq-verify');

  // Update card selected status and show order number on the left badge
  q.options.forEach(opt => {
    const card = document.getElementById(`seq-opt-card-${opt.key}`);
    const orderBadge = document.getElementById(`seq-opt-order-badge-${opt.key}`);
    const chosenIndex = candidateSelectedSequence.indexOf(opt.key);

    if (card) {
      if (chosenIndex !== -1) {
        card.classList.add('seq-picked');
        if (orderBadge) {
          orderBadge.style.display = 'flex';
          orderBadge.innerText = chosenIndex + 1; // 1st, 2nd, 3rd, 4th selected
        }
      } else {
        card.classList.remove('seq-picked');
        if (orderBadge) {
          orderBadge.style.display = 'none';
          orderBadge.innerText = '';
        }
      }
    }
  });

  if (candidateSelectedSequence.length === 0) {
    if (trayRow) {
      trayRow.innerHTML = `<span class="seq-tray-empty-hint">Click options below in the order you want to sequence them...</span>`;
    }
    if (verifyBtn) verifyBtn.disabled = true;
    return;
  }

  if (trayRow) {
    trayRow.innerHTML = candidateSelectedSequence.map((key, idx) => {
      const opt = q.options.find(o => o.key === key);
      const text = opt ? opt.text : key;
      const orderNum = idx + 1;
      return `
        <div class="seq-tray-chip" onclick="handleSequenceOptionClick('${key}')" title="Click to remove">
          <span class="seq-chip-order-badge">${orderNum}</span>
          <span class="seq-chip-text" dir="auto">${text}</span>
          <span class="seq-chip-key-badge">${key}</span>
        </div>
      `;
    }).join('');
  }

  if (verifyBtn) {
    verifyBtn.disabled = (candidateSelectedSequence.length !== q.options.length);
  }
}

// Reset the candidate sequence selection
function resetUserSequenceSelection() {
  candidateSelectedSequence = [];
  updateSequenceTrayUI();
}

// Verify Sequence: switches to the comparison view
function verifyCandidateSequence() {
  const q = currentLiveActiveQuestion;
  if (!q || !q.options) return;

  if (candidateSelectedSequence.length !== q.options.length) {
    alert("Please select all options in sequence first!");
    return;
  }

  stopTimerCountdown();

  const pickingView = document.getElementById('sequence-picking-view');
  const revealView = document.getElementById('sequence-reveal-view');
  if (pickingView) pickingView.style.display = "none";
  if (revealView) revealView.style.display = "flex";

  isSequenceRevealActive = true;
  currentSequenceRevealStep = 0;

  // Set the current team name in evaluation bar
  const targetLabel = document.getElementById('seq-target-team-label');
  const groupName = `Group ${currentGroupIdx}`;
  const teams = getActiveGroupTeams(groupName);
  const allocatedTeam = teams[activeSchoolTurnSlot];
  if (targetLabel && allocatedTeam) {
    targetLabel.innerText = allocatedTeam.name;
  }

  // Render Candidate Answer column (Left) initially in neutral/pending state (no spoilers)
  renderCandidateAnswerComparisonList();

  // Render Correct Sequence column (Right) with initial hidden placeholders
  renderCorrectSequenceRevealList();

  // Play lock tone
  playQuizTone(587.33, 784, 'lock');
}

// Render candidate's chosen order - evaluated only up to currentSequenceRevealStep
function renderCandidateAnswerComparisonList() {
  const q = currentLiveActiveQuestion;
  if (!q || !q.options) return;
  const correctSeq = q.correctSequence || (q.options ? q.options.map(o => o.key) : []);
  const candidateListEl = document.getElementById('seq-candidate-answer-list');
  if (!candidateListEl) return;

  candidateListEl.innerHTML = candidateSelectedSequence.map((key, idx) => {
    const opt = q.options.find(o => o.key === key);
    const text = opt ? opt.text : key;
    const orderNum = idx + 1; // 1, 2, 3, 4 in candidate sequence

    // Only evaluated if step has been revealed
    const isStepRevealed = (idx < currentSequenceRevealStep);
    let cardClass = "seq-item-pending";
    let iconPill = "";

    if (isStepRevealed) {
      const isItemCorrect = (String(key).trim() === String(correctSeq[idx]).trim());
      if (isItemCorrect) {
        cardClass = "seq-item-correct-match";
        iconPill = '<span class="seq-icon-pill icon-correct">✓</span>';
      } else {
        cardClass = "seq-item-wrong-match";
        iconPill = '<span class="seq-icon-pill icon-wrong">✕</span>';
      }
    }

    return `
      <div class="seq-compare-item ${cardClass}" id="seq-cand-row-${idx}">
        <div class="seq-badge-round-orange">${orderNum}</div>
        <div class="seq-item-text" dir="auto">${text}</div>
        <div class="seq-status-indicator">
          <span class="seq-box-badge-blue">${key}</span>
          ${iconPill}
        </div>
      </div>
    `;
  }).join('');
}

// Render the right side: Correct Sequence items one by one as SPACE is pressed
function renderCorrectSequenceRevealList() {
  const q = currentLiveActiveQuestion;
  if (!q || !q.options) return;
  const correctSeq = q.correctSequence || (q.options ? q.options.map(o => o.key) : []);
  const correctListEl = document.getElementById('seq-correct-answer-list');
  if (!correctListEl) return;

  correctListEl.innerHTML = correctSeq.map((key, idx) => {
    const isRevealed = (idx < currentSequenceRevealStep);
    if (!isRevealed) {
      return `
        <div class="seq-compare-item seq-item-hidden-placeholder" onclick="revealNextCorrectSequenceStep()">
          <span>Slot ${idx + 1} • Press SPACE to Reveal</span>
        </div>
      `;
    }

    const opt = q.options.find(o => o.key === key);
    const text = opt ? opt.text : key;
    const orderNum = idx + 1;

    return `
      <div class="seq-compare-item seq-item-official-blue">
        <div class="seq-badge-round-yellow">${orderNum}</div>
        <div class="seq-item-text" dir="auto">${text}</div>
        <div class="seq-status-indicator">
          <span class="seq-box-badge-green">${key}</span>
          <span class="seq-icon-pill icon-correct">✓</span>
        </div>
      </div>
    `;
  }).join('');
}

// Reveal next item in the correct sequence (triggered by SPACE or click)
function revealNextCorrectSequenceStep() {
  if (!isSequenceRevealActive) return;
  const q = currentLiveActiveQuestion;
  if (!q || !q.options) return;
  const total = (q.correctSequence || q.options).length;

  if (currentSequenceRevealStep < total) {
    const currentStepIdx = currentSequenceRevealStep;
    currentSequenceRevealStep++;

    const correctSeq = q.correctSequence || q.options.map(o => o.key);
    const candidateChoiceAtStep = candidateSelectedSequence[currentStepIdx];
    const correctChoiceAtStep = correctSeq[currentStepIdx];
    const isStepCorrect = (String(candidateChoiceAtStep).trim() === String(correctChoiceAtStep).trim());

    // Update both sides simultaneously
    renderCandidateAnswerComparisonList();
    renderCorrectSequenceRevealList();

    if (!isStepCorrect) {
      // The moment candidate sequence fails: dramatic failure sound, red lighting wash & shake animation
      setStageLightingState('wrong');
      playQuizTone(164.81, 130.81, 'wrong');
    } else {
      playQuizTone(523.25, 659.25, 'kbc-option-lock');
    }

    if (currentSequenceRevealStep >= total) {
      // Check full sequence match
      const isFullyCorrect = candidateSelectedSequence.every((key, idx) => String(key).trim() === String(correctSeq[idx]).trim());
      if (isFullyCorrect) {
        setStageLightingState('correct');
        triggerSuccessCelebration();
        playQuizTone(587.33, 880, 'success');
      }
    }
  }
}

// Host marks sequence answer correct or wrong
function evaluateSequenceRoundScore(isCorrectAnswer) {
  const groupName = `Group ${currentGroupIdx}`;
  const teams = getActiveGroupTeams(groupName);
  const allocatedTeam = teams[activeSchoolTurnSlot];

  if (isCorrectAnswer && allocatedTeam) {
    awardStageTeamPoints(allocatedTeam.id, 10);
    setStageLightingState('correct');
    triggerSuccessCelebration();
    playQuizTone(587.33, 880, 'success');
  } else {
    setStageLightingState('wrong');
    playQuizTone(164.81, 130.81, 'wrong');
  }

  // Show updated standings
  setTimeout(() => {
    renderTriadGroupStandingsCard();
  }, 800);
}

// ------------------------------------------------------------------------------
// 🔥 RAPID FIRE ROUND: BIG SCREEN STADIUM CONTROLLER
// In this round, the anchor asks rapid verbal questions to each group for 60 seconds.
// Questions are NOT shown on screen. Instead, the screen showcases:
// 1. Giant Central Stadium Clock (60s timer)
// 2. 3 Competing On-Stage Teams with Live Scores
// 3. One-Click Manual Point Adders (+200, +100, +50, +20, +10) and Custom Score Input
// ------------------------------------------------------------------------------
function renderRapidFireStadiumView(round, phase) {
  // 1. Hide question card, media container, options grid, buzzer and evaluation strips
  const promptCard = document.querySelector('.question-prompt-card');
  if (promptCard) promptCard.style.display = "none";
  const mediaContainer = document.getElementById('media-container-zone');
  if (mediaContainer) {
    mediaContainer.style.display = "none";
    mediaContainer.innerHTML = "";
  }
  const optionsGrid = document.getElementById('live-options-container');
  if (optionsGrid) {
    optionsGrid.style.display = "none";
    optionsGrid.innerHTML = "";
  }
  const buzzerCard = document.getElementById('buzzer-round-action-card');
  if (buzzerCard) buzzerCard.style.display = "none";
  const mediaEvalCard = document.getElementById('media-answer-eval-card');
  if (mediaEvalCard) mediaEvalCard.style.display = "none";
  const standingsCard = document.getElementById('triad-standings-card');
  if (standingsCard) standingsCard.style.display = "none";

  // Hide Check Pick and Reveal Answer buttons in right dock because rapid fire is verbally hosted
  const checkPickBtn = document.getElementById('btn-check-pick');
  if (checkPickBtn) checkPickBtn.style.display = "none";
  const revealBtn = document.getElementById('btn-reveal-answer-main');
  if (revealBtn) revealBtn.style.display = "none";

  // Update top round header
  const roundBadge = document.getElementById('current-round-title-badge');
  const formatBadge = document.getElementById('format-label-text');
  if (roundBadge) roundBadge.innerText = `${round.name} • 60s VERBAL FIRE`;
  if (formatBadge) formatBadge.innerText = "SPEED ENDURANCE • 60s";

  // 2. Display and populate Rapid Fire Stage Card
  const rfCard = document.getElementById('rapid-fire-stage-card');
  const rfTitle = document.getElementById('rf-stage-title');
  const rfBadge = document.getElementById('rf-active-group-badge');
  const rfGrid = document.getElementById('rf-teams-arena-grid');

  if (rfCard) rfCard.style.display = "flex";

  const groupName = `Group ${currentGroupIdx}`;
  if (rfTitle) rfTitle.innerText = `${round.name.toUpperCase()} • ${groupName.toUpperCase()}`;
  if (rfBadge) rfBadge.innerText = `${groupName.toUpperCase()} ON STAGE`;

  // 3. Render the 3 Competing On-Stage Teams with Manual Scoring Controls
  const activeTeams = getActiveGroupTeams(groupName);

  if (rfGrid) {
    if (activeTeams.length === 0) {
      rfGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; color: #94a3b8; padding: 2rem;">
          No teams currently assigned to ${groupName}.
        </div>
      `;
    } else {
      rfGrid.innerHTML = activeTeams.map((team, idx) => {
        const score = getTeamCurrentScore(team);
        const codeTag = team.code || `T${team.id}`;
        const isCurrentSlot = (idx === activeSchoolTurnSlot);

        return `
          <div class="rf-team-podium-card ${isCurrentSlot ? 'rf-team-active-turn' : ''}" id="rf-podium-${team.id}" style="${isCurrentSlot ? 'border-color: #f97316; box-shadow: 0 0 25px rgba(249, 115, 22, 0.4);' : ''}; border-radius: 0px; padding: 0.75rem 1rem;">
            <div class="rf-team-podium-top" style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.35rem;">
              <span class="rf-team-tag-badge" style="border-radius: 0px;">${codeTag} • PODIUM ${idx + 1}</span>
              <span class="rf-team-pts-display" id="rf-score-val-${team.id}">${score} PTS</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.35rem 0; gap: 0.8rem;">
              <div style="text-align: left; flex: 1;">
                <div class="rf-team-name-title" style="font-size: 1.15rem; font-weight: 900; color: #fff; white-space: normal; line-height: 1.25;" title="${team.name}">${team.name}</div>
                <div class="rf-team-slot-info" style="color: #fb923c; font-weight: 700; font-size: 0.78rem; margin-top: 0.1rem;">${groupName} • ${isCurrentSlot ? '🎯 CURRENT TURN' : 'Triad Team'}</div>
              </div>
              <button class="action-btn-clean" style="border-radius: 0px; background: linear-gradient(135deg, #f97316, #ea580c); color: #fff; font-weight: 800; font-size: 0.88rem; padding: 0.5rem 1.1rem; border: 1px solid #fb923c; cursor: pointer; white-space: nowrap;" onclick="openRapidFireTimeUpModal(${team.id})" title="Award marks manually to team">
                + Add Points
              </button>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 4. Initialize 60-second Rapid Fire Clock
  const roundTimerSec = (round && round.timer) ? round.timer : 60;
  resetTimer(roundTimerSec);
}

function updateRapidFireTeamScoreUI(teamId) {
  const team = tournamentConfig.allTeamsMaster.find(t => t.id === teamId);
  if (!team) return;
  const score = getTeamCurrentScore(team);

  const rfScoreEl = document.getElementById(`rf-score-val-${team.id}`);
  if (rfScoreEl) rfScoreEl.innerText = `${score} PTS`;
  const podScoreEl = document.getElementById(`pod-score-val-${team.id}`);
  if (podScoreEl) podScoreEl.innerText = `${score} PTS`;

  saveTournamentStateToStorage();
}

let activeRfTargetTeamId = null;

function openRapidFireTimeUpModal(teamId) {
  const groupName = `Group ${currentGroupIdx}`;
  const activeTeams = getActiveGroupTeams(groupName);

  let targetTeam = null;
  if (teamId) {
    targetTeam = activeTeams.find(t => t.id === teamId) || tournamentConfig.allTeamsMaster.find(t => t.id === teamId);
  } else {
    targetTeam = activeTeams[activeSchoolTurnSlot] || activeTeams[0];
  }

  if (!targetTeam) return;
  activeRfTargetTeamId = targetTeam.id;

  const modal = document.getElementById('rf-timeup-score-modal');
  const card = document.getElementById('rf-timeup-team-card');
  const input = document.getElementById('rf-modal-points-input');

  const currScore = getTeamCurrentScore(targetTeam);

  if (card) {
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem; margin-bottom: 0.6rem;">
        <span style="background: rgba(249, 115, 22, 0.2); color: #fb923c; font-weight: 800; font-size: 0.8rem; padding: 0.2rem 0.6rem; border: 1px solid rgba(249, 115, 22, 0.4);">${targetTeam.code || 'TEAM'} • ON STAGE</span>
        <span style="font-family: 'JetBrains Mono', monospace; font-size: 1.25rem; font-weight: 900; color: #10b981;">CURRENT: ${currScore} PTS</span>
      </div>
      <div style="font-size: 1.35rem; font-weight: 900; color: #fff; line-height: 1.3;">
        ${targetTeam.name}
      </div>
    `;
  }

  if (input) {
    input.value = "";
    setTimeout(() => input.focus(), 150);
  }

  if (modal) {
    modal.style.display = "flex";
  }
}

function closeRapidFireTimeUpModal() {
  const modal = document.getElementById('rf-timeup-score-modal');
  if (modal) modal.style.display = "none";
}

function submitRapidFirePointsFromModal() {
  if (!activeRfTargetTeamId) return;
  const input = document.getElementById('rf-modal-points-input');
  if (!input) return;

  const points = parseInt(input.value, 10);
  if (isNaN(points) || points === 0) {
    alert("Please enter a valid points amount to add (e.g. 50, 100, 150).");
    return;
  }

  awardStageTeamPoints(activeRfTargetTeamId, points);
  updateRapidFireTeamScoreUI(activeRfTargetTeamId);
  closeRapidFireTimeUpModal();
  playQuizTone(587.33, 880, 'success');
}

function applyRapidFireCustomPoints(teamId) {
  const input = document.getElementById(`rf-custom-input-${teamId}`);
  if (!input) return;
  const points = parseInt(input.value, 10);
  if (isNaN(points) || points === 0) {
    alert("Please enter a valid points number (e.g. 200, 150, 180).");
    return;
  }

  awardStageTeamPoints(teamId, points);
  updateRapidFireTeamScoreUI(teamId);
  input.value = "";
  playQuizTone(587.33, 880, 'success');
}

function resetRapidFireTimer(seconds = 60) {
  resetTimer(seconds);
  const btn = document.getElementById('rf-btn-toggle');
  if (btn) btn.innerText = `▶ Start ${seconds}s Timer`;
  playQuizTone(440, 554.37, 'lock');
}

// ------------------------------------------------------------------------------
// 👁️ VISUAL RAPID FIRE STAGE CONTROLLER (Images Only, Rapid Advancement, Manual Scoring)
// ------------------------------------------------------------------------------
let currentVrfImageIndex = 0;
let visualRapidFireList = [];

function renderVisualRapidFireStageView(round, phase) {
  // 1. Hide question card, media container, options grid, buzzer and evaluation strips
  const promptCard = document.querySelector('.question-prompt-card');
  if (promptCard) promptCard.style.display = "none";
  const mediaContainer = document.getElementById('media-container-zone');
  if (mediaContainer) {
    mediaContainer.style.display = "none";
    mediaContainer.innerHTML = "";
  }
  const optionsGrid = document.getElementById('live-options-container');
  if (optionsGrid) {
    optionsGrid.style.display = "none";
    optionsGrid.innerHTML = "";
  }
  const buzzerCard = document.getElementById('buzzer-round-action-card');
  if (buzzerCard) buzzerCard.style.display = "none";
  const mediaEvalCard = document.getElementById('media-answer-eval-card');
  if (mediaEvalCard) mediaEvalCard.style.display = "none";
  const standingsCard = document.getElementById('triad-standings-card');
  if (standingsCard) standingsCard.style.display = "none";
  // Hide redundant top 3-team podium strip during Visual Rapid Fire so the large visual image showcase takes center stage
  const topPodiumStrip = document.getElementById('stage-teams-competing-strip');
  if (topPodiumStrip) topPodiumStrip.style.display = "none";

  // Hide Check Pick and Reveal Answer buttons in right dock because rapid visual questions have no on-screen text answers
  const checkPickBtn = document.getElementById('btn-check-pick');
  if (checkPickBtn) checkPickBtn.style.display = "none";
  const revealBtn = document.getElementById('btn-reveal-answer-main');
  if (revealBtn) revealBtn.style.display = "none";

  // Customize dock Next button for Visual Rapid Fire (Instant snap, zero 2.2s transition)
  const dockNextBtn = document.querySelector('.btn-next-cyan');
  if (dockNextBtn) {
    dockNextBtn.innerText = "Next Image ❯";
    dockNextBtn.setAttribute('title', 'Advance image instantly without animation');
  }

  // Update top round header
  const roundBadge = document.getElementById('current-round-title-badge');
  const formatBadge = document.getElementById('format-label-text');
  if (roundBadge) roundBadge.innerText = `${round.name} • RAPID VISUALS`;
  if (formatBadge) formatBadge.innerText = "VISUAL SPEED • IMAGES ONLY";

  // Display Visual Rapid Fire Stage Card
  const vrfCard = document.getElementById('visual-rapid-stage-card');
  if (vrfCard) vrfCard.style.display = "flex";

  const groupName = `Group ${currentGroupIdx}`;
  const vrfTitle = document.getElementById('vrf-stage-title');
  const vrfBadge = document.getElementById('vrf-active-group-badge');
  if (vrfTitle) vrfTitle.innerText = `${round.name.toUpperCase()} • ${groupName.toUpperCase()}`;
  if (vrfBadge) vrfBadge.innerText = `${groupName.toUpperCase()} ON STAGE`;

  // Fetch image questions
  visualRapidFireList = quizRoundsQuestions["Visual Rapid Fire"] || [];
  if (visualRapidFireList.length === 0) {
    // Fallback images from media round if visual rapid fire pool is empty
    visualRapidFireList = (quizRoundsQuestions["Media Round"] || []).filter(q => q.type === 'image' || q.mediaSrc);
  }

  currentVrfImageIndex = 0;
  displayCurrentVisualRapidImage();

  // Render on-stage teams with rapid point adders and custom point input
  const activeTeams = getActiveGroupTeams(groupName);
  const vrfGrid = document.getElementById('vrf-teams-arena-grid');

  if (vrfGrid) {
    if (activeTeams.length === 0) {
      vrfGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; color: #94a3b8; padding: 2rem;">
          No teams currently assigned to ${groupName}.
        </div>
      `;
    } else {
      vrfGrid.innerHTML = activeTeams.map((team, idx) => {
        const score = getTeamCurrentScore(team);
        const codeTag = team.code || `T${team.id}`;
        const isCurrentSlot = (idx === activeSchoolTurnSlot);

        return `
          <div class="rf-team-podium-card ${isCurrentSlot ? 'rf-team-active-turn' : ''}" id="vrf-podium-${team.id}" style="${isCurrentSlot ? 'border-color: #10b981; box-shadow: 0 0 25px rgba(16, 185, 129, 0.4);' : ''}; max-width: 580px; margin: 0 auto; width: 100%; border-radius: 0px; padding: 0.65rem 1rem;">
            <div class="rf-team-podium-top" style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.35rem;">
              <span class="rf-team-tag-badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.4); border-radius: 0px;">${codeTag} • PODIUM ${idx + 1}</span>
              <span class="rf-team-pts-display" id="vrf-score-val-${team.id}">${score} PTS</span>
            </div>

            <!-- School Name Centered & Direct Point Modal Trigger -->
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.3rem 0; gap: 0.8rem;">
              <div style="text-align: left; flex: 1;">
                <div class="rf-team-name-title" style="font-size: 1.18rem; font-weight: 900; color: #fff; white-space: normal; line-height: 1.25;" title="${team.name}">
                  ${team.name}
                </div>
                <div class="rf-team-slot-info" style="color: #34d399; font-weight: 700; font-size: 0.78rem; margin-top: 0.1rem;">
                  ${groupName} • ${isCurrentSlot ? '🎯 COMPETING ON STAGE' : 'Team Slot'}
                </div>
              </div>
              <button class="action-btn-clean" style="border-radius: 0px; background: linear-gradient(135deg, #10b981, #059669); color: #fff; font-weight: 800; font-size: 0.88rem; padding: 0.5rem 1.1rem; border: 1px solid #34d399; cursor: pointer; white-space: nowrap;" onclick="openVisualRapidTimeUpModal(${team.id})" title="Award marks manually to team">
                + Add Points
              </button>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // Set overall round timer
  const roundTimerSec = (round && round.timer) ? round.timer : 60;
  resetTimer(roundTimerSec);
}

function displayCurrentVisualRapidImage() {
  const imgEl = document.getElementById('vrf-active-image');
  const counterEl = document.getElementById('vrf-image-counter');
  const tagEl = document.getElementById('vrf-watermark-tag');

  if (!visualRapidFireList || visualRapidFireList.length === 0) {
    if (imgEl) imgEl.src = "logo.png";
    if (counterEl) counterEl.innerText = "No Images Loaded";
    return;
  }

  // Wrap around index
  if (currentVrfImageIndex < 0) currentVrfImageIndex = 0;
  if (currentVrfImageIndex >= visualRapidFireList.length) currentVrfImageIndex = visualRapidFireList.length - 1;

  const currentItem = visualRapidFireList[currentVrfImageIndex];
  if (imgEl) {
    // Instantaneous image switch - NO waiting, NO delays, preserves team's rapid clock!
    imgEl.src = currentItem.mediaSrc || currentItem.image || "logo.png";
    imgEl.style.opacity = '1';
  }

  if (counterEl) {
    counterEl.innerText = `Image ${currentVrfImageIndex + 1} of ${visualRapidFireList.length}`;
  }
  if (tagEl) {
    tagEl.innerText = currentItem.mediaLabel || `IMAGE #${currentVrfImageIndex + 1}`;
  }

  // Instant audio click (zero latency)
  playQuizTone(987.77, 1318.51, 'tick');
}

function nextVisualRapidImage() {
  if (visualRapidFireList.length === 0) return;
  if (currentVrfImageIndex < visualRapidFireList.length - 1) {
    currentVrfImageIndex++;
    displayCurrentVisualRapidImage();
  } else {
    // If reached last image, notify
    playQuizTone(523.25, 659.25, 'success');
  }
}

function prevVisualRapidImage() {
  if (visualRapidFireList.length === 0) return;
  if (currentVrfImageIndex > 0) {
    currentVrfImageIndex--;
    displayCurrentVisualRapidImage();
  }
}

function resetVisualRapidFireImages() {
  currentVrfImageIndex = 0;
  displayCurrentVisualRapidImage();
}

function updateVisualRapidTeamScoreUI(teamId) {
  const team = tournamentConfig.allTeamsMaster.find(t => t.id === teamId);
  if (!team) return;
  const score = getTeamCurrentScore(team);

  const vrfScoreEl = document.getElementById(`vrf-score-val-${team.id}`);
  if (vrfScoreEl) vrfScoreEl.innerText = `${score} PTS`;
  const podScoreEl = document.getElementById(`pod-score-val-${team.id}`);
  if (podScoreEl) podScoreEl.innerText = `${score} PTS`;

  saveTournamentStateToStorage();
}

let activeVrfTargetTeamId = null;

function openVisualRapidTimeUpModal(teamId) {
  const groupName = `Group ${currentGroupIdx}`;
  const activeTeams = getActiveGroupTeams(groupName);
  
  let targetTeam = null;
  if (teamId) {
    targetTeam = activeTeams.find(t => t.id === teamId) || tournamentConfig.allTeamsMaster.find(t => t.id === teamId);
  } else {
    targetTeam = activeTeams[activeSchoolTurnSlot] || activeTeams[0];
  }

  if (!targetTeam) return;
  activeVrfTargetTeamId = targetTeam.id;

  const modal = document.getElementById('vrf-timeup-score-modal');
  const card = document.getElementById('vrf-timeup-team-card');
  const input = document.getElementById('vrf-modal-points-input');

  const currScore = getTeamCurrentScore(targetTeam);

  if (card) {
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem; margin-bottom: 0.6rem;">
        <span style="background: rgba(16, 185, 129, 0.2); color: #34d399; font-weight: 800; font-size: 0.8rem; padding: 0.2rem 0.6rem; border: 1px solid rgba(16, 185, 129, 0.4);">${targetTeam.code || 'TEAM'} • ON STAGE</span>
        <span style="font-family: 'JetBrains Mono', monospace; font-size: 1.25rem; font-weight: 900; color: #10b981;">CURRENT: ${currScore} PTS</span>
      </div>
      <div style="font-size: 1.35rem; font-weight: 900; color: #fff; line-height: 1.3;">
        ${targetTeam.name}
      </div>
    `;
  }

  if (input) {
    input.value = "";
    setTimeout(() => input.focus(), 150);
  }

  if (modal) {
    modal.style.display = "flex";
  }
}

function closeVisualRapidTimeUpModal() {
  const modal = document.getElementById('vrf-timeup-score-modal');
  if (modal) modal.style.display = "none";
}

function submitVisualRapidPointsFromModal() {
  if (!activeVrfTargetTeamId) return;
  const input = document.getElementById('vrf-modal-points-input');
  if (!input) return;

  const points = parseInt(input.value, 10);
  if (isNaN(points) || points === 0) {
    alert("Please enter a valid points amount to add (e.g. 50, 80, 150).");
    return;
  }

  awardStageTeamPoints(activeVrfTargetTeamId, points);
  updateVisualRapidTeamScoreUI(activeVrfTargetTeamId);
  closeVisualRapidTimeUpModal();
  playQuizTone(587.33, 880, 'success');
}

function applyVisualRapidCustomPoints(teamId) {
  const input = document.getElementById(`vrf-custom-input-${teamId}`);
  if (!input) return;
  const points = parseInt(input.value, 10);
  if (isNaN(points) || points === 0) {
    alert("Please enter a valid points value (e.g. 50, 80, 120).");
    return;
  }

  awardStageTeamPoints(teamId, points);
  updateVisualRapidTeamScoreUI(teamId);
  input.value = "";
  playQuizTone(587.33, 880, 'success');
}

// Anchor / Moderator Audio Playback Controller
function toggleStageAudioPlayback() {
  const audioEl = document.getElementById('live-stage-audio');
  if (!audioEl) return;

  if (audioEl.paused) {
    audioEl.play().catch(e => console.log('Audio playback prevented:', e));
    syncAudioPlaybackUI(true);
  } else {
    audioEl.pause();
    syncAudioPlaybackUI(false);
  }
}

// Synchronize play button state & animated lifeline waveform
function syncAudioPlaybackUI(isPlaying) {
  const btn = document.getElementById('anchor-audio-toggle-btn');
  const icon = document.getElementById('audio-play-icon');
  const label = document.getElementById('audio-btn-label');
  const lifeline = document.getElementById('stage-audio-lifeline');
  const card = document.getElementById('audio-stage-card');

  if (isPlaying) {
    if (btn) btn.classList.add('playing-now');
    if (label) label.innerText = 'PAUSE AUDIO';
    if (icon) {
      icon.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      `;
    }
    if (lifeline) lifeline.classList.add('lifeline-active-pulse');
    if (card) card.classList.add('audio-playing-glow');
  } else {
    if (btn) btn.classList.remove('playing-now');
    if (label) label.innerText = 'PLAY AUDIO CLUE';
    if (icon) {
      icon.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `;
    }
    if (lifeline) lifeline.classList.remove('lifeline-active-pulse');
    if (card) card.classList.remove('audio-playing-glow');
  }
}

let stageSelectedOptionKey = null;
let isAnswerAlreadyRevealed = false;
let currentQuestionAttemptCount = 0; // Tracks buzzer team attempts for 3-team triads

// 1. Stage User / Team clicks an option: Locks choice in suspense state (does NOT reveal answer yet)
function selectStageOption(chosenKey) {
  // If answer is already revealed, prevent re-selecting
  if (isAnswerAlreadyRevealed) return;

  const q = currentLiveActiveQuestion;
  if (!q) return;

  const clickedBtn = document.getElementById(`opt-stage-${chosenKey}`);
  if (!clickedBtn) return;

  // If this specific option was already checked and marked wrong in buzzer round, ignore click
  if (clickedBtn.classList.contains('wrong-shake')) return;

  // Stop timer upon answer lock-in
  stopTimerCountdown();

  stageSelectedOptionKey = chosenKey;

  // Update button highlights (preserving previously eliminated wrong options)
  document.querySelectorAll('.option-stage-btn').forEach(btn => {
    const key = btn.id.replace('opt-stage-', '');

    // Don't touch previously eliminated wrong options from prior attempts
    if (btn.classList.contains('wrong-shake')) return;

    btn.classList.remove('selected-locked', 'correct-glow', 'wrong-dim');
    const badge = btn.querySelector('.opt-status-badge');
    if (badge && !btn.classList.contains('wrong-shake')) badge.innerText = '';

    if (key === chosenKey) {
      btn.classList.add('selected-locked');
      if (badge) badge.innerText = 'LOCKED IN';
    }
  });

  // Play subtle lock-in tick sound
  playQuizTone(440, 523.25, 'lock');

  // Trigger broadcast studio amber suspense spotlight beams
  setStageLightingState('suspense');

  // Start Indian KBC-style suspense "Dhak-Dhak" heartbeat loop until admin evaluates
  startKbcHeartbeatLoop();
}

// 2. Host clicks "⚡ Check Pick (Pass/Buzz)": Validates ONLY the selected option WITHOUT revealing the correct one!
// If correct: turns GREEN with celebration
// If incorrect: turns RED, leaves other options intact, resumes/re-enables for next team to buzz and choose!
function checkSelectedOptionOnly() {
  if (isAnswerAlreadyRevealed) return;

  // Stop suspense Dhak-Dhak
  stopKbcHeartbeatLoop();

  const q = currentLiveActiveQuestion;
  if (!q) return;

  const userPickedKey = stageSelectedOptionKey;
  if (!userPickedKey) {
    // If no option has been locked yet
    const prompt = document.getElementById('live-question-text');
    if (prompt) {
      const orig = prompt.innerHTML;
      prompt.innerHTML = `<span style="color: #ffc400;">⚠️ Please select an option first before checking!</span>`;
      setTimeout(() => { prompt.innerHTML = orig; }, 1800);
    }
    return;
  }

  const selectedBtn = document.getElementById(`opt-stage-${userPickedKey}`);
  if (!selectedBtn) return;

  const isCorrect = (userPickedKey === q.correct);
  const badge = selectedBtn.querySelector('.opt-status-badge');

  selectedBtn.classList.remove('selected-locked');

  if (isCorrect) {
    // The team got it right! Mark only this one GREEN and finalize
    isAnswerAlreadyRevealed = true;
    selectedBtn.classList.add('correct-glow');
    if (badge) {
      badge.innerText = 'CORRECT';
      badge.style.background = 'rgba(16, 185, 129, 0.3)';
      badge.style.borderColor = '#10b981';
      badge.style.color = '#10b981';
    }

    // Dim the remaining unused options
    document.querySelectorAll('.option-stage-btn').forEach(btn => {
      const key = btn.id.replace('opt-stage-', '');
      if (key !== userPickedKey) {
        btn.classList.add('wrong-dim');
      }
    });

    setStageLightingState('correct');
    triggerSuccessCelebration();
    playQuizTone(587.33, 880, 'success');

    // Show updated rankings points table
    setTimeout(() => {
      renderTriadGroupStandingsCard();
    }, 1000);

  } else {
    // The team got it WRONG!
    currentQuestionAttemptCount++;

    // Turn ONLY this chosen option RED, keep the other options OPEN for the remaining teams in the triad!
    setStageLightingState('wrong');
    selectedBtn.classList.add('wrong-shake');
    if (badge) {
      badge.innerText = 'WRONG';
      badge.style.background = 'rgba(239, 68, 68, 0.3)';
      badge.style.borderColor = '#ef4444';
      badge.style.color = '#ef4444';
    }

    // Play authentic KBC descending minor wrong buzzer
    playQuizTone(164.81, 130.81, 'wrong');

    // Reset current selection so the next team can buzz and pick from the remaining options
    stageSelectedOptionKey = null;

    // Check if all 3 teams in the triad group have exhausted their attempts
    if (currentQuestionAttemptCount >= 3) {
      const statusNotice = document.getElementById('format-label-text');
      if (statusNotice) {
        statusNotice.innerText = 'ALL 3 TEAMS EXHAUSTED ATTEMPTS! REVEALING ANSWER...';
        statusNotice.style.color = '#f87171';
      }
      setTimeout(() => {
        triggerAnswerReveal();
      }, 1500);
    } else {
      // Show notice of remaining pass attempts for next team
      const statusNotice = document.getElementById('format-label-text');
      if (statusNotice) {
        const oldText = statusNotice.innerText;
        statusNotice.innerText = `WRONG! ATTEMPT ${currentQuestionAttemptCount}/3 USED. QUESTION PASSED TO NEXT TEAM`;
        statusNotice.style.color = '#f87171';
        setTimeout(() => {
          statusNotice.innerText = oldText;
          statusNotice.style.color = '';
          setStageLightingState(null); // Return to neutral stage lights for the next team
        }, 3200);
      }
    }
  }
}

// 3. Anchor / Admin clicks "✓ Reveal Answer": Triggers the full reveal of the actual correct answer
function triggerAnswerReveal() {
  if (isAnswerAlreadyRevealed) return;
  isAnswerAlreadyRevealed = true;

  // Stop the suspense Dhak-Dhak loop
  stopKbcHeartbeatLoop();

  stopTimerCountdown();
  const q = currentLiveActiveQuestion;
  if (!q) return;

  const phase = tournamentConfig.phases[currentPhaseIdx];
  const round = phase.rounds[currentRoundIdx] || phase.rounds[0];
  const isMediaRound = round.name.includes("Media") || round.name.includes("Visual");

  if (isMediaRound) {
    // Media Round Direct Answer Reveal: Reveal the official answer & host verification buttons
    const hiddenPrompt = document.getElementById('media-answer-hidden-prompt');
    const revealedBox = document.getElementById('media-answer-revealed-box');
    const revealedText = document.getElementById('media-revealed-answer-text');
    const decisionStrip = document.getElementById('media-eval-decision-strip');
    const targetTeamName = document.getElementById('media-eval-target-team-name');

    if (hiddenPrompt) hiddenPrompt.style.display = "none";
    if (revealedBox) {
      revealedBox.style.display = "flex";
      if (revealedText) {
        revealedText.innerText = q.answer || (q.options ? q.options.find(o => o.key === q.correct)?.text : "Correct Answer");
      }
    }
    if (decisionStrip) {
      decisionStrip.style.display = "flex";
      const groupName = `Group ${currentGroupIdx}`;
      const teams = getActiveGroupTeams(groupName);
      const allocatedTeam = teams[activeSchoolTurnSlot];
      if (targetTeamName && allocatedTeam) {
        targetTeamName.innerText = allocatedTeam.name;
      }
    }

    setStageLightingState('suspense');
    playQuizTone(587.33, 784, 'lock');
    return;
  }

  // Standard MCQ format evaluation
  const userPickedKey = stageSelectedOptionKey;
  const isCorrect = (userPickedKey === q.correct);

  document.querySelectorAll('.option-stage-btn').forEach(btn => {
    const key = btn.id.replace('opt-stage-', '');
    btn.classList.remove('selected-locked');

    const badge = btn.querySelector('.opt-status-badge');

    if (key === q.correct) {
      // True correct answer always lights up green
      btn.classList.add('correct-glow');
      if (badge) {
        badge.innerText = 'CORRECT';
        badge.style.background = 'rgba(16, 185, 129, 0.3)';
        badge.style.borderColor = '#10b981';
        badge.style.color = '#10b981';
      }
    } else if (key === userPickedKey && !isCorrect) {
      // User's locked choice was wrong -> dramatic red shake
      btn.classList.add('wrong-shake');
      if (badge) {
        badge.innerText = 'INCORRECT';
        badge.style.background = 'rgba(239, 68, 68, 0.3)';
        badge.style.borderColor = '#ef4444';
        badge.style.color = '#ef4444';
      }
    } else {
      btn.classList.add('wrong-dim');
    }
  });

  if (isCorrect) {
    // Grand celebration with god rays, confetti bursts and victory chime
    setStageLightingState('correct');
    triggerSuccessCelebration();
    playQuizTone(587.33, 880, 'success');
  } else {
    // Red dramatic error alert wash and buzz
    setStageLightingState('wrong');
    playQuizTone(164.81, 130.81, 'wrong');
  }

  // Show the updated points table ranking for the 3 teams in this active group
  setTimeout(() => {
    renderTriadGroupStandingsCard();
  }, 1000);
}

// Host evaluates student answer in Media Round (Correct = +10 PTS, Wrong = 0 PTS)
function evaluateMediaRoundAnswer(isCorrectAnswer) {
  const decisionStrip = document.getElementById('media-eval-decision-strip');
  if (decisionStrip) decisionStrip.style.display = "none";

  const groupName = `Group ${currentGroupIdx}`;
  const teams = getActiveGroupTeams(groupName);
  const allocatedTeam = teams[activeSchoolTurnSlot];

  if (isCorrectAnswer && allocatedTeam) {
    // Award 10 points to the allocated team
    awardStageTeamPoints(allocatedTeam.id, 10);
    setStageLightingState('correct');
    triggerSuccessCelebration();
    playQuizTone(587.33, 880, 'success');
  } else {
    setStageLightingState('wrong');
    playQuizTone(164.81, 130.81, 'wrong');
  }

  // Show the updated points table ranking for the 3 teams in this active group
  setTimeout(() => {
    renderTriadGroupStandingsCard();
  }, 800);
}

// Render team buzzer selection buttons for the 3 schools in current group
function renderBuzzerTeamSelector() {
  const row = document.getElementById('buzzer-team-selector-row');
  const claimText = document.getElementById('buzzer-claim-text');
  if (!row) return;

  const groupName = `Group ${currentGroupIdx}`;
  const teams = getActiveGroupTeams(groupName);

  if (claimText) {
    if (!buzzerFirstTeamAttempted) {
      claimText.innerText = "SELECT TEAM THAT BUZZED FASTEST:";
    } else {
      claimText.innerText = "PASS QUESTION: SELECT FROM REMAINING 2 TEAMS (+10, NO PENALTY):";
    }
  }

  row.innerHTML = teams.map((team, idx) => {
    const isAttempted = buzzerAttemptedTeamIds.has(team.id);
    const isSelected = (buzzerActiveTeamId === team.id);

    return `
      <button class="btn-buzz-team ${isSelected ? 'active-buzzed-team' : ''}" 
              ${isAttempted ? 'disabled' : ''} 
              onclick="allocateBuzzerToTeam(${team.id})" 
              title="${isAttempted ? `${team.name} already attempted` : `Allocate buzzer to ${team.name}`}">
        <span>T${idx + 1}: ${team.name}</span>
        ${isAttempted ? ' (Exhausted)' : ''}
      </button>
    `;
  }).join('');
}

// Host allocates buzzer to the team that pressed fastest (or remaining teams on pass)
function allocateBuzzerToTeam(teamId) {
  if (buzzerAttemptedTeamIds.has(teamId)) return;

  // Stop countdown timer once a team buzzes in
  stopTimerCountdown();
  stopKbcHeartbeatLoop();

  buzzerActiveTeamId = teamId;
  const team = tournamentConfig.allTeamsMaster.find(t => t.id === teamId);
  if (!team) return;

  // Play buzzer sound FX
  playQuizTone(440, 660, 'lock');

  // Update button highlights
  renderBuzzerTeamSelector();

  // Show host evaluation strip
  const evalStrip = document.getElementById('buzzer-eval-strip');
  const stageTag = document.getElementById('buzzer-eval-stage-tag');
  const teamNamePrompt = document.getElementById('buzzer-eval-team-name');
  const wrongBtn = document.getElementById('btn-buzzer-wrong');

  if (evalStrip) evalStrip.style.display = 'flex';
  if (teamNamePrompt) teamNamePrompt.innerText = team.name;

  if (!buzzerFirstTeamAttempted) {
    // First fastest team attempt: +10 if correct, -5 penalty if wrong
    if (stageTag) {
      stageTag.innerText = "⚡ FIRST BUZZER ATTEMPT (PENALTY APPLIES)";
      stageTag.style.color = "#f87171";
      stageTag.style.borderColor = "rgba(239, 68, 68, 0.4)";
      stageTag.style.background = "rgba(239, 68, 68, 0.12)";
    }
    if (wrongBtn) {
      wrongBtn.innerHTML = "✕ Wrong (-5 PTS Penalty)";
      wrongBtn.title = "Deduct 5 points penalty and pass question to remaining 2 schools";
    }
  } else {
    // Passed attempt to remaining schools: +10 if correct, NO penalty (0 pts) if wrong
    if (stageTag) {
      stageTag.innerText = "🎯 PASSED QUESTION (NO PENALTY)";
      stageTag.style.color = "#34d399";
      stageTag.style.borderColor = "rgba(16, 185, 129, 0.4)";
      stageTag.style.background = "rgba(16, 185, 129, 0.12)";
    }
    if (wrongBtn) {
      wrongBtn.innerHTML = "✕ Wrong (0 PTS • No Penalty)";
      wrongBtn.title = "Mark wrong without penalty and allow remaining team to answer or reveal";
    }
  }
}

// Host evaluates buzzer team's answer
function evaluateBuzzerRoundAnswer(isCorrect) {
  if (!buzzerActiveTeamId) return;

  const team = tournamentConfig.allTeamsMaster.find(t => t.id === buzzerActiveTeamId);
  const evalStrip = document.getElementById('buzzer-eval-strip');
  if (evalStrip) evalStrip.style.display = 'none';

  buzzerAttemptedTeamIds.add(buzzerActiveTeamId);

  if (isCorrect) {
    // CORRECT! Award +10 points to this team
    if (team) awardStageTeamPoints(team.id, 10);
    setStageLightingState('correct');
    triggerSuccessCelebration();
    playQuizTone(587.33, 880, 'success');

    // Trigger reveal of answer on screen
    triggerAnswerReveal();

    // Show rankings table
    setTimeout(() => {
      renderTriadGroupStandingsCard();
    }, 900);

  } else {
    // WRONG!
    setStageLightingState('wrong');
    playQuizTone(164.81, 130.81, 'wrong');

    if (!buzzerFirstTeamAttempted) {
      // First team gets -5 penalty!
      if (team) awardStageTeamPoints(team.id, -5);
      buzzerFirstTeamAttempted = true;
    } else {
      // Subsequent passed teams get 0 penalty
    }

    buzzerActiveTeamId = null;

    // Check if all 3 teams have attempted
    const groupName = `Group ${currentGroupIdx}`;
    const teams = getActiveGroupTeams(groupName);
    const allAttempted = teams.every(t => buzzerAttemptedTeamIds.has(t.id));

    if (allAttempted) {
      // All 3 teams exhausted! Reveal correct answer and show scoreboard
      triggerAnswerReveal();
      setTimeout(() => {
        renderTriadGroupStandingsCard();
      }, 1000);
    } else {
      // Pass question to remaining teams! Re-render selector and restart timer
      renderBuzzerTeamSelector();
      startTimerCountdown();
    }
  }
}

// Render dynamic points table ranking popup modal for the competing teams on stage
function renderTriadGroupStandingsCard() {
  const modal = document.getElementById('triad-standings-modal');
  const titleEl = document.getElementById('tsc-group-title');
  const tbody = document.getElementById('tsc-table-body');
  if (!tbody) return;

  const groupName = isTieBreakerActive ? "Tie Breaker Showdown" : `Group ${currentGroupIdx}`;
  const teams = isTieBreakerActive ? tieBreakerActiveTeams : getActiveGroupTeams(groupName);
  if (!teams || teams.length === 0) return;

  if (titleEl) {
    titleEl.innerText = isTieBreakerActive 
      ? `⚡ Sudden-Death Tie Breaker Standings` 
      : `${groupName} • Live Stage Rankings & Points`;
  }

  // Sort the competing teams by current score descending
  const sortedTeams = [...teams].map((t, originalSlotIdx) => ({
    team: t,
    originalSlotIdx: originalSlotIdx,
    score: getTeamCurrentScore(t),
    qDone: schoolQuestionCounts[originalSlotIdx] || 0
  })).sort((a, b) => b.score - a.score);

  const highestScore = sortedTeams[0]?.score || 0;

  tbody.innerHTML = sortedTeams.map((item, rankIdx) => {
    const rank = rankIdx + 1;
    const rankClass = rank === 1 ? 'tsc-rank-1' : (rank === 2 ? 'tsc-rank-2' : 'tsc-rank-3');
    const isCurrentActiveTurn = (item.originalSlotIdx === activeSchoolTurnSlot);
    const isLeader = (item.score > 0 && item.score === highestScore);

    const phase = tournamentConfig.phases[currentPhaseIdx];
    const round = phase ? (phase.rounds[currentRoundIdx] || phase.rounds[0]) : null;
    const isBuzzer = isTieBreakerActive || (round && round.name.includes("Buzzer"));

    return `
      <tr class="tsc-row ${(!isBuzzer && isCurrentActiveTurn) ? 'tsc-active-answering' : ''}">
        <td>
          <span class="tsc-rank-pill ${rankClass}">#${rank}</span>
        </td>
        <td>
          <div class="tsc-school-name">
            <span style="font-weight: 800; color: #fff;">${item.team.name}</span>
            ${(!isBuzzer && isCurrentActiveTurn) ? `<span class="tsc-active-tag">Current Answering</span>` : ''}
            ${isTieBreakerActive ? `<span style="font-size: 0.7rem; color: #fca5a5; margin-left: 0.4rem;">(Main: ${item.team.phase1Score || item.team.phase2Score || 0}p)</span>` : ''}
          </div>
        </td>
        <td style="text-align: center; font-weight: 800; color: #94a3b8;">
          ${isBuzzer ? `Buzzer ${currentBuzzerGroupQCount}/5` : `${item.qDone}/2 Qs`}
        </td>
        <td class="tsc-score-text ${isLeader ? 'tsc-score-lead' : ''}">
          ${item.score} PTS
        </td>
        <td style="text-align: center;">
          <div style="display: inline-flex; gap: 0.25rem;">
            <button class="btn-point-action btn-point-add" onclick="awardStageTeamPoints(${item.team.id}, 10); renderTriadGroupStandingsCard();" title="+10 PTS">+10</button>
            <button class="btn-point-action btn-point-add" onclick="awardStageTeamPoints(${item.team.id}, 5); renderTriadGroupStandingsCard();" title="+5 PTS">+5</button>
            <button class="btn-point-action btn-point-sub" onclick="awardStageTeamPoints(${item.team.id}, -5); renderTriadGroupStandingsCard();" title="-5 PTS">-5</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  if (modal) {
    modal.classList.add('modal-open');
  }
}

function closeTriadStandingsModal() {
  const modal = document.getElementById('triad-standings-modal');
  if (modal) {
    modal.classList.remove('modal-open');
  }
}

// Full stage celebration effect with multiple confetti bursts
function triggerSuccessCelebration() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.65 },
      colors: ['#00f0ff', '#10b981', '#ffc400', '#ffffff', '#3b82f6']
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 250);
  }
}

let isQuizAudioMuted = false;
let quizAudioContext = null;
let kbcHeartbeatInterval = null;

function getAudioContext() {
  if (!quizAudioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    quizAudioContext = new AudioCtx();
  }
  if (quizAudioContext.state === 'suspended') {
    quizAudioContext.resume();
  }
  return quizAudioContext;
}

function toggleQuizSoundFX() {
  isQuizAudioMuted = !isQuizAudioMuted;
  const btn = document.getElementById('dock-sfx-toggle-btn');
  if (btn) {
    btn.innerHTML = isQuizAudioMuted ? '🔇 Arena Sound: MUTED' : '🔊 Arena Sound: ON';
    btn.style.color = isQuizAudioMuted ? 'var(--rose)' : 'var(--cyan)';
  }
  if (isQuizAudioMuted) {
    stopKbcHeartbeatLoop();
    stopClockTickingAudio();
    const qAudio = document.getElementById('question-change-audio');
    if (qAudio) {
      qAudio.pause();
      qAudio.currentTime = 0;
    }
  }
}

// Dedicated clock audio player (clock.m4a)
function playClockTickingAudio() {
  if (isQuizAudioMuted) return;
  const audio = document.getElementById('clock-ticking-audio');
  if (!audio) return;
  audio.loop = true;
  audio.currentTime = 0;
  audio.play().catch(e => console.log('Clock audio play prevented:', e));
}

function stopClockTickingAudio() {
  const audio = document.getElementById('clock-ticking-audio');
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
}

// Indian KBC-style Heartbeat ("Dhak-Dhak") Suspense Engine
function startKbcHeartbeatLoop() {
  stopKbcHeartbeatLoop();
  if (isQuizAudioMuted) return;

  // Immediately play first pulse
  playKbcDhakDhakPulse();

  // Pulse rhythmically every 1.15 seconds (70-75 bpm natural elevated heart rate)
  kbcHeartbeatInterval = setInterval(() => {
    playKbcDhakDhakPulse();
  }, 1150);
}

function stopKbcHeartbeatLoop() {
  if (kbcHeartbeatInterval) {
    clearInterval(kbcHeartbeatInterval);
    kbcHeartbeatInterval = null;
  }
}

// Synthesizes the authentic Indian KBC "Dhak... Dhak..." heartbeat suspense effect
function playKbcDhakDhakPulse() {
  if (isQuizAudioMuted) return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Helper: Trigger one anatomical cardiac thump ("DHAK")
    function triggerThump(startTime, baseFreq, subFreq, volume, decay) {
      // 1. Deep Sub-bass Chest Thump (Sine drop)
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(baseFreq, startTime);
      subOsc.frequency.exponentialRampToValueAtTime(26, startTime + decay);

      subGain.gain.setValueAtTime(volume * 0.9, startTime);
      subGain.gain.exponentialRampToValueAtTime(0.001, startTime + decay);

      subOsc.connect(subGain);
      subGain.connect(ctx.destination);
      subOsc.start(startTime);
      subOsc.stop(startTime + decay + 0.05);

      // 2. Punchy Acoustic Body Strike (Low-passed Triangle with resonant Q)
      const punchOsc = ctx.createOscillator();
      const punchFilter = ctx.createBiquadFilter();
      const punchGain = ctx.createGain();

      punchOsc.type = 'triangle';
      punchOsc.frequency.setValueAtTime(subFreq, startTime);
      punchOsc.frequency.exponentialRampToValueAtTime(35, startTime + decay * 0.7);

      punchFilter.type = 'lowpass';
      punchFilter.frequency.setValueAtTime(160, startTime);
      punchFilter.Q.setValueAtTime(3.5, startTime);

      punchGain.gain.setValueAtTime(volume * 0.7, startTime);
      punchGain.gain.exponentialRampToValueAtTime(0.001, startTime + decay * 0.8);

      punchOsc.connect(punchFilter);
      punchFilter.connect(punchGain);
      punchGain.connect(ctx.destination);
      punchOsc.start(startTime);
      punchOsc.stop(startTime + decay + 0.05);
    }

    // 1st Thump: Primary "DHAK" (Loud & deep)
    triggerThump(now, 92, 115, 0.85, 0.22);

    // 2nd Thump: Rebound "...DHAK" (190ms later, slightly softer & lower pitch)
    triggerThump(now + 0.19, 80, 98, 0.65, 0.20);

    // 3. Eerie Low Suspense Drone (Tension pad between beats)
    const drone = ctx.createOscillator();
    const droneGain = ctx.createGain();
    const droneFilter = ctx.createBiquadFilter();

    drone.type = 'sawtooth';
    drone.frequency.setValueAtTime(55, now); // Low A1 note
    droneFilter.type = 'lowpass';
    droneFilter.frequency.setValueAtTime(110, now);

    droneGain.gain.setValueAtTime(0.08, now);
    droneGain.gain.exponentialRampToValueAtTime(0.001, now + 0.95);

    drone.connect(droneFilter);
    droneFilter.connect(droneGain);
    droneGain.connect(ctx.destination);

    drone.start(now);
    drone.stop(now + 1.0);

  } catch (e) {
    // AudioContext blocked
  }
}

// High-fidelity web audio feedback & music effects
function playQuizTone(freq1, freq2, type) {
  if (isQuizAudioMuted) return;

  try {
    const ctx = getAudioContext();

    if (type === 'success') {
      // 🏆 Authentic Indian KBC Correct Answer Signature Fanfare
      // 1. Triumphant orchestral strike + ascending pentatonic bells (D4 -> F#4 -> A4 -> D5 -> F#5)
      const kbcCorrectNotes = [
        { f: 293.66, t: 0.00, dur: 0.55 }, // D4
        { f: 369.99, t: 0.08, dur: 0.60 }, // F#4
        { f: 440.00, t: 0.16, dur: 0.65 }, // A4
        { f: 587.33, t: 0.24, dur: 0.90 }, // D5 (Bright bell)
        { f: 739.99, t: 0.32, dur: 1.10 }, // F#5 (Top brilliance)
        { f: 880.00, t: 0.40, dur: 1.30 }  // A5 (Grand resolution)
      ];

      kbcCorrectNotes.forEach(n => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f, ctx.currentTime + n.t);

        gain.gain.setValueAtTime(0.32, ctx.currentTime + n.t);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.t + n.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + n.t);
        osc.stop(ctx.currentTime + n.t + n.dur + 0.05);
      });

      // 2. High Shimmer Glass Chimes (Authentic KBC sparkle)
      const shimmerNotes = [1174.66, 1479.98, 1760.00];
      shimmerNotes.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, ctx.currentTime + 0.35 + idx * 0.07);
        gain.gain.setValueAtTime(0.18, ctx.currentTime + 0.35 + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35 + idx * 0.07 + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + 0.35 + idx * 0.07);
        osc.stop(ctx.currentTime + 0.35 + idx * 0.07 + 0.85);
      });

      // 3. Deep warm brass swell foundation
      const bassOsc = ctx.createOscillator();
      const bassGain = ctx.createGain();
      bassOsc.type = 'sawtooth';
      bassOsc.frequency.setValueAtTime(146.83, ctx.currentTime); // D3
      bassGain.gain.setValueAtTime(0.22, ctx.currentTime);
      bassGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      const bassFilter = ctx.createBiquadFilter();
      bassFilter.type = 'lowpass';
      bassFilter.frequency.setValueAtTime(260, ctx.currentTime);
      bassOsc.connect(bassFilter);
      bassFilter.connect(bassGain);
      bassGain.connect(ctx.destination);
      bassOsc.start(ctx.currentTime);
      bassOsc.stop(ctx.currentTime + 1.25);

    } else if (type === 'lock') {
      // 🔒 Golden Suspense Lock-in Resonance
      const osc = ctx.createOscillator();
      const oscSub = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      oscSub.type = 'triangle';

      osc.frequency.setValueAtTime(440, ctx.currentTime); // A4
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.18); // A5

      oscSub.frequency.setValueAtTime(220, ctx.currentTime);
      oscSub.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.22, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      oscSub.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      oscSub.start();
      osc.stop(ctx.currentTime + 0.38);
      oscSub.stop(ctx.currentTime + 0.38);
    } else if (type === 'tick') {
      // ⏱ Authentic Broadcast Quiz Show Ticking Clock (Alternating High-Low Pendulum Tick)
      const isAltTick = (timerSeconds % 2 === 0);
      const pitch1 = isAltTick ? 1600 : 1300;
      const pitch2 = isAltTick ? 1100 : 900;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(pitch1, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.04);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(pitch2, ctx.currentTime);
      filter.Q.setValueAtTime(4.0, ctx.currentTime);

      gain.gain.setValueAtTime(0.55, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.055);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.06);

      // Deep percussive mechanical wood block tap
      const click = ctx.createOscillator();
      const clickGain = ctx.createGain();
      click.type = 'sine';
      click.frequency.setValueAtTime(600, ctx.currentTime);
      click.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.03);

      clickGain.gain.setValueAtTime(0.35, ctx.currentTime);
      clickGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      click.connect(clickGain);
      clickGain.connect(ctx.destination);
      click.start(ctx.currentTime);
      click.stop(ctx.currentTime + 0.045);

    } else if (type === 'warning-tick') {
      // 🚨 Last 5 Seconds Urgent Panic Pulsing "Tik-Tik" Chime
      const osc = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc2.type = 'sine';

      osc.frequency.setValueAtTime(1480, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(740, ctx.currentTime + 0.08);

      osc2.frequency.setValueAtTime(2960, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(1480, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.5, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc2.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.11);
      osc2.stop(ctx.currentTime + 0.11);
    } else if (type === 'timesup') {
      // ⏰ Time-out Deep Gavel Gong
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.8);

      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.85);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.9);
    } else if (type === 'kbc-question-appear') {
      // ⚡ Indian KBC Question Presentation Dramatic Stinger (Swell & Chord Strike)
      const droneOsc = ctx.createOscillator();
      const droneGain = ctx.createGain();
      const droneFilter = ctx.createBiquadFilter();

      droneOsc.type = 'sawtooth';
      droneOsc.frequency.setValueAtTime(65.41, ctx.currentTime); // C2
      droneFilter.type = 'lowpass';
      droneFilter.frequency.setValueAtTime(180, ctx.currentTime);
      droneFilter.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 1.2);

      droneGain.gain.setValueAtTime(0.45, ctx.currentTime);
      droneGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.4);

      droneOsc.connect(droneFilter);
      droneFilter.connect(droneGain);
      droneGain.connect(ctx.destination);
      droneOsc.start(ctx.currentTime);
      droneOsc.stop(ctx.currentTime + 1.5);

      // Dramatic bell / chime strike (C4 + G4 + C5)
      const bellFreqs = [261.63, 392.00, 523.25];
      bellFreqs.forEach((freq) => {
        const bellOsc = ctx.createOscillator();
        const bellGain = ctx.createGain();
        bellOsc.type = 'sine';
        bellOsc.frequency.setValueAtTime(freq, ctx.currentTime);
        bellGain.gain.setValueAtTime(0.2, ctx.currentTime);
        bellGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

        bellOsc.connect(bellGain);
        bellGain.connect(ctx.destination);
        bellOsc.start(ctx.currentTime);
        bellOsc.stop(ctx.currentTime + 1.3);
      });

    } else if (type === 'kbc-level-intro') {
      // 🏆 Indian KBC Level/Phase Entrance Grand Brass & Cymbal Fanfare
      const notes = [
        { f: 220.00, t: 0.00, d: 0.25 },  // A3
        { f: 277.18, t: 0.15, d: 0.25 },  // C#4
        { f: 329.63, t: 0.30, d: 0.30 },  // E4
        { f: 440.00, t: 0.45, d: 0.70 },  // A4 (Sustained climax)
        { f: 554.37, t: 0.50, d: 0.90 },  // C#5 (High shimmer)
        { f: 659.25, t: 0.55, d: 1.10 }   // E5 (Triumph)
      ];

      notes.forEach(n => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f, ctx.currentTime + n.t);

        gain.gain.setValueAtTime(0.28, ctx.currentTime + n.t);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.t + n.d);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + n.t);
        osc.stop(ctx.currentTime + n.t + n.d + 0.1);
      });

      // Low booming kettle drum / timpani roll
      const timp = ctx.createOscillator();
      const timpGain = ctx.createGain();
      timp.type = 'sine';
      timp.frequency.setValueAtTime(110, ctx.currentTime);
      timp.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.8);
      timpGain.gain.setValueAtTime(0.6, ctx.currentTime);
      timpGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);

      timp.connect(timpGain);
      timpGain.connect(ctx.destination);
      timp.start(ctx.currentTime);
      timp.stop(ctx.currentTime + 0.95);

    } else if (type === 'wrong') {
      // ❌ Authentic Indian KBC Wrong Answer Dramatic Plunge & Low Gong
      // 1. Heavy descending minor dissonant brass hit (Eb3 -> D3 -> Db3 drop)
      const minorDropNotes = [
        { f1: 155.56, f2: 185.00, t: 0.00, dur: 0.28 }, // Eb3 + F#3 (Dark minor)
        { f1: 146.83, f2: 174.61, t: 0.18, dur: 0.35 }, // D3 + F3 (Descent)
        { f1: 138.59, f2: 164.81, t: 0.38, dur: 0.75 }  // Db3 + E3 (Deep doom resolution)
      ];

      minorDropNotes.forEach(chord => {
        const oscA = ctx.createOscillator();
        const oscB = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        oscA.type = 'sawtooth';
        oscB.type = 'sawtooth';
        oscA.frequency.setValueAtTime(chord.f1, ctx.currentTime + chord.t);
        oscB.frequency.setValueAtTime(chord.f2, ctx.currentTime + chord.t);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, ctx.currentTime + chord.t);
        filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + chord.t + chord.dur);

        gain.gain.setValueAtTime(0.35, ctx.currentTime + chord.t);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + chord.t + chord.dur);

        oscA.connect(filter);
        oscB.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        oscA.start(ctx.currentTime + chord.t);
        oscB.start(ctx.currentTime + chord.t);
        oscA.stop(ctx.currentTime + chord.t + chord.dur + 0.05);
        oscB.stop(ctx.currentTime + chord.t + chord.dur + 0.05);
      });

      // 2. Heavy Sub-bass Shock Impact Thud
      const thudOsc = ctx.createOscillator();
      const thudGain = ctx.createGain();
      thudOsc.type = 'sine';
      thudOsc.frequency.setValueAtTime(95, ctx.currentTime);
      thudOsc.frequency.exponentialRampToValueAtTime(28, ctx.currentTime + 0.45);
      thudGain.gain.setValueAtTime(0.65, ctx.currentTime);
      thudGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

      thudOsc.connect(thudGain);
      thudGain.connect(ctx.destination);
      thudOsc.start(ctx.currentTime);
      thudOsc.stop(ctx.currentTime + 0.55);

      // 3. Low hollow metallic gong reverberation
      const gongOsc = ctx.createOscillator();
      const gongGain = ctx.createGain();
      gongOsc.type = 'triangle';
      gongOsc.frequency.setValueAtTime(73.42, ctx.currentTime + 0.25); // D2
      gongGain.gain.setValueAtTime(0.28, ctx.currentTime + 0.25);
      gongGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

      gongOsc.connect(gongGain);
      gongGain.connect(ctx.destination);
      gongOsc.start(ctx.currentTime + 0.25);
      gongOsc.stop(ctx.currentTime + 1.25);
    } else if (type === 'shuffle-slot-tick') {
      // 🎲 Lottery slot reel rolling mechanical click with dynamic pitch ramp
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq1 || 820, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(260, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.38, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.045);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.05);

    } else if (type === 'shuffle-suspense-pulse') {
      // 🎻 Cinematic 11-Second Suspense Background Drone & Tension Heartbeat
      const now = ctx.currentTime;
      const baseFreq = freq1 || 110; // Rising base pitch (A2 -> D3)

      // 1. Deep cinematic cello/synth tension drone
      const droneOsc = ctx.createOscillator();
      const droneGain = ctx.createGain();
      const droneFilter = ctx.createBiquadFilter();

      droneOsc.type = 'sawtooth';
      droneOsc.frequency.setValueAtTime(baseFreq, now);
      droneOsc.frequency.exponentialRampToValueAtTime(baseFreq * 1.05, now + 0.9);

      droneFilter.type = 'lowpass';
      droneFilter.frequency.setValueAtTime(240, now);

      droneGain.gain.setValueAtTime(0.18, now);
      droneGain.gain.exponentialRampToValueAtTime(0.001, now + 0.95);

      droneOsc.connect(droneFilter);
      droneFilter.connect(droneGain);
      droneGain.connect(ctx.destination);
      droneOsc.start(now);
      droneOsc.stop(now + 1.0);

      // 2. High mysterious celestial chime ping
      const pingOsc = ctx.createOscillator();
      const pingGain = ctx.createGain();
      pingOsc.type = 'sine';
      pingOsc.frequency.setValueAtTime(baseFreq * 6, now);
      pingGain.gain.setValueAtTime(0.12, now);
      pingGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      pingOsc.connect(pingGain);
      pingGain.connect(ctx.destination);
      pingOsc.start(now);
      pingOsc.stop(now + 0.75);

    } else if (type === 'shuffle-complete') {
      // ✨ Grand lottery reveal resolution chord
      const chords = [440, 554.37, 659.25, 880]; // A Major
      chords.forEach((note, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(note, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.28, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.85);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.9);
      });
    }
  } catch (e) {
    // AudioContext blocked
  }
}

// Cinematic 2.2-Second Broadcast Competition Transition Sound & Whoosh Generator
function playBroadcastCompetitionFanfare2s() {
  if (isQuizAudioMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // 1. Kinetic Sci-Fi Swish/Whoosh Impact (0s to 0.7s)
    const whooshOsc = ctx.createOscillator();
    const whooshGain = ctx.createGain();
    const whooshFilter = ctx.createBiquadFilter();

    whooshOsc.type = 'sawtooth';
    whooshFilter.type = 'bandpass';
    whooshFilter.Q.value = 4.0;

    whooshOsc.frequency.setValueAtTime(260, now);
    whooshOsc.frequency.exponentialRampToValueAtTime(75, now + 0.55);
    whooshFilter.frequency.setValueAtTime(450, now);
    whooshFilter.frequency.exponentialRampToValueAtTime(1900, now + 0.35);
    whooshFilter.frequency.exponentialRampToValueAtTime(300, now + 0.65);

    whooshGain.gain.setValueAtTime(0.01, now);
    whooshGain.gain.linearRampToValueAtTime(0.4, now + 0.22);
    whooshGain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

    whooshOsc.connect(whooshFilter);
    whooshFilter.connect(whooshGain);
    whooshGain.connect(ctx.destination);
    whooshOsc.start(now);
    whooshOsc.stop(now + 0.7);

    // 2. Deep Sub-Bass Sub-Boom (0s to 0.9s)
    const boomOsc = ctx.createOscillator();
    const boomGain = ctx.createGain();
    boomOsc.type = 'sine';
    boomOsc.frequency.setValueAtTime(120, now);
    boomOsc.frequency.exponentialRampToValueAtTime(32, now + 0.75);
    boomGain.gain.setValueAtTime(0.5, now);
    boomGain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
    boomOsc.connect(boomGain);
    boomGain.connect(ctx.destination);
    boomOsc.start(now);
    boomOsc.stop(now + 0.9);

    // 3. Dual Broadcast Sync Stings (at 0.4s and 0.85s)
    [0.35, 0.75].forEach((tOff, idx) => {
      const stingOsc = ctx.createOscillator();
      const stingGain = ctx.createGain();
      stingOsc.type = 'triangle';
      stingOsc.frequency.setValueAtTime(idx === 0 ? 330 : 493.88, now + tOff); // E4, B4
      stingGain.gain.setValueAtTime(0.28, now + tOff);
      stingGain.gain.exponentialRampToValueAtTime(0.001, now + tOff + 0.28);
      stingOsc.connect(stingGain);
      stingGain.connect(ctx.destination);
      stingOsc.start(now + tOff);
      stingOsc.stop(now + tOff + 0.32);
    });

    // 4. Grand Orchestral Reveal Impact Strike (1.1s to 2.2s)
    const revealChords = [
      { f: 220.00, type: 'triangle' }, // A3
      { f: 329.63, type: 'sine' },     // E4
      { f: 440.00, type: 'triangle' }, // A4
      { f: 554.37, type: 'sine' },     // C#5
      { f: 659.25, type: 'sine' }      // E5
    ];
    revealChords.forEach(note => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = note.type;
      osc.frequency.setValueAtTime(note.f, now + 1.1);
      gain.gain.setValueAtTime(0.22, now + 1.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + 1.1);
      osc.stop(now + 2.2);
    });

  } catch (e) {
    console.warn("Competition transition audio error:", e);
  }
}

// ==============================================================================
// 4.5 SUDDEN-DEATH TIE BREAKER CONTROLLER (Buzzer Round Showdown)
// ==============================================================================
let tieBreakerSelectedTeamIds = new Set();

function openTieBreakerModal() {
  const modal = document.getElementById('tie-breaker-modal');
  const phaseBadge = document.getElementById('tiebreaker-active-phase-badge');
  const countLabel = document.getElementById('tiebreaker-tied-groups-count');
  const detectedList = document.getElementById('tiebreaker-detected-list');
  const checklist = document.getElementById('tiebreaker-teams-checklist');
  if (!modal) return;

  const currentPhaseNum = currentPhaseIdx + 1;
  if (phaseBadge) phaseBadge.innerText = `PHASE ${currentPhaseNum}`;

  const activeTeams = getActivePhaseTeams();

  // Group teams by their current phase score
  const scoreMap = new Map();
  activeTeams.forEach(t => {
    const s = getTeamCurrentScore(t);
    if (!scoreMap.has(s)) scoreMap.set(s, []);
    scoreMap.get(s).push(t);
  });

  // Filter for actual ties (scores with >= 2 teams)
  const tieGroups = [];
  scoreMap.forEach((teamList, sc) => {
    if (teamList.length >= 2) {
      tieGroups.push({ score: sc, teams: teamList });
    }
  });

  // Sort descending by score
  tieGroups.sort((a, b) => b.score - a.score);

  tieBreakerSelectedTeamIds.clear();

  // Render detected ties
  if (detectedList && countLabel) {
    if (tieGroups.length === 0) {
      countLabel.innerText = "No Ties Detected (All Scores Unique)";
      detectedList.innerHTML = `
        <div style="font-size: 0.82rem; color: #94a3b8; font-style: italic; padding: 0.3rem 0;">
          All teams currently have unique scores in Phase ${currentPhaseNum}. You can still manually pick teams below if needed.
        </div>
      `;
    } else {
      countLabel.innerText = `${tieGroups.length} Tied Score Tier${tieGroups.length > 1 ? 's' : ''} Found`;
      detectedList.innerHTML = tieGroups.map(tg => {
        return `
          <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.4); padding: 0.4rem 0.75rem; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.25);">
            <div>
              <strong style="color: #fbbf24; font-size: 0.88rem;">${tg.score} PTS TIE:</strong>
              <span style="font-size: 0.82rem; color: #e2e8f0; margin-left: 0.4rem;">${tg.teams.map(t => t.name).join(' vs ')}</span>
            </div>
            <button class="action-btn-clean" style="font-size: 0.75rem; padding: 0.2rem 0.6rem; border-color: rgba(239, 68, 68, 0.5); color: #fca5a5; font-weight: 800;" onclick="prefillTieBreakerTeams([${tg.teams.map(t => t.id).join(',')}])">
              Select These Teams
            </button>
          </div>
        `;
      }).join('');

      // Auto-prefill the top tied group
      if (tieGroups[0] && tieGroups[0].teams.length >= 2) {
        tieGroups[0].teams.slice(0, 4).forEach(t => tieBreakerSelectedTeamIds.add(t.id));
      }
    }
  }

  // Render manual checklist
  if (checklist) {
    checklist.innerHTML = activeTeams.map(t => {
      const isChecked = tieBreakerSelectedTeamIds.has(t.id);
      const score = getTeamCurrentScore(t);
      return `
        <label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.35rem 0.5rem; border-radius: 6px; background: rgba(255,255,255,0.03); cursor: pointer; font-size: 0.8rem; color: #fff;">
          <input type="checkbox" value="${t.id}" ${isChecked ? 'checked' : ''} onchange="toggleTieBreakerTeamSelection(${t.id}, this.checked)">
          <span style="flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${t.name}">
            <strong>T${t.id}:</strong> ${t.name}
          </span>
          <span style="color: #fbbf24; font-weight: 800; font-family: 'JetBrains Mono', monospace;">${score}p</span>
        </label>
      `;
    }).join('');
  }

  updateTieBreakerSelectionCount();
  modal.classList.add('modal-open');
}

function closeTieBreakerModal() {
  document.getElementById('tie-breaker-modal')?.classList.remove('modal-open');
}

function prefillTieBreakerTeams(teamIds) {
  tieBreakerSelectedTeamIds.clear();
  teamIds.forEach(id => tieBreakerSelectedTeamIds.add(id));
  
  const checklist = document.getElementById('tiebreaker-teams-checklist');
  if (checklist) {
    const inputs = checklist.querySelectorAll('input[type="checkbox"]');
    inputs.forEach(inp => {
      inp.checked = tieBreakerSelectedTeamIds.has(parseInt(inp.value, 10));
    });
  }
  updateTieBreakerSelectionCount();
}

function toggleTieBreakerTeamSelection(teamId, isChecked) {
  if (isChecked) {
    tieBreakerSelectedTeamIds.add(teamId);
  } else {
    tieBreakerSelectedTeamIds.delete(teamId);
  }
  updateTieBreakerSelectionCount();
}

function updateTieBreakerSelectionCount() {
  const countSpan = document.getElementById('tiebreaker-selected-count');
  const launchBtn = document.getElementById('btn-start-tiebreaker-now');
  const size = tieBreakerSelectedTeamIds.size;

  if (countSpan) countSpan.innerText = size;
  if (launchBtn) {
    if (size >= 2) {
      launchBtn.disabled = false;
      launchBtn.style.opacity = '1';
      launchBtn.style.cursor = 'pointer';
      launchBtn.innerText = `⚡ Launch Tie Breaker (${size} Teams) →`;
    } else {
      launchBtn.disabled = true;
      launchBtn.style.opacity = '0.5';
      launchBtn.style.cursor = 'not-allowed';
      launchBtn.innerText = `Select at least 2 teams to play`;
    }
  }
}

// Launch the live Tie Breaker Buzzer Round
function launchTieBreakerBuzzerRound() {
  if (tieBreakerSelectedTeamIds.size < 2) {
    alert("Please select at least 2 tied teams for this Tie Breaker showdown.");
    return;
  }

  const selectedTeams = Array.from(tieBreakerSelectedTeamIds).map(id => {
    return tournamentConfig.allTeamsMaster.find(t => t.id === id);
  }).filter(Boolean);

  if (selectedTeams.length < 2) return;

  isTieBreakerActive = true;
  tieBreakerActiveTeams = selectedTeams;
  // Initialize dedicated Tie Breaker score to 0 for competing teams
  selectedTeams.forEach(t => { t.tieBreakerScore = 0; });

  closeTieBreakerModal();

  // Look for Buzzer round in active phase or fallback to round index 1
  const phase = tournamentConfig.phases[currentPhaseIdx];
  let buzzerRoundIdx = phase.rounds.findIndex(r => r.name.includes("Buzzer"));
  if (buzzerRoundIdx < 0) buzzerRoundIdx = 0;
  const roundObj = phase.rounds[buzzerRoundIdx];

  currentRoundIdx = buzzerRoundIdx;
  updateTopTracker();

  // Fetch Tie Breaker specific questions or Buzzer pool
  const tieQuestions = (quizRoundsQuestions["Tie Breaker"] && quizRoundsQuestions["Tie Breaker"].length > 0)
    ? [...quizRoundsQuestions["Tie Breaker"]]
    : [...(quizRoundsQuestions["Buzzer"] || [])];

  // Randomize tie breaker pool
  for (let i = tieQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tieQuestions[i], tieQuestions[j]] = [tieQuestions[j], tieQuestions[i]];
  }

  activeRoundQuestionsPool = [...tieQuestions];
  currentLiveQuestionIndex = 0;
  activeSchoolTurnSlot = 0;
  schoolQuestionCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };
  currentBuzzerGroupQCount = 0;
  buzzerActiveTeamId = null;
  buzzerFirstTeamAttempted = false;
  buzzerAttemptedTeamIds.clear();

  // Play Indian KBC Grand Entrance Fanfare
  playQuizTone(0, 0, 'kbc-level-intro');

  // Update top tracker
  const phaseTracker = document.getElementById('tracker-phase-text');
  const roundTracker = document.getElementById('tracker-round-text');
  if (phaseTracker) phaseTracker.innerText = `⚡ SUDDEN-DEATH TIE BREAKER`;
  if (roundTracker) roundTracker.innerText = `Buzzer Round (${selectedTeams.length} Teams)`;

  // Update active group banner display
  const groupLabelEl = document.getElementById('stage-active-group-name');
  const groupTeamsEl = document.getElementById('stage-active-group-teams');
  if (groupLabelEl) groupLabelEl.innerText = "⚡ TIE BREAKER SHOWDOWN";
  if (groupTeamsEl) groupTeamsEl.innerText = selectedTeams.map(t => t.name).join(' vs ');

  // Render Intro Faceoff for the tied teams
  renderRoundIntroFaceoff();
  switchMainScreen('screen-round-intro');
}

function exitTieBreakerMode() {
  isTieBreakerActive = false;
  tieBreakerActiveTeams = [];
  updateTopTracker();
  switchMainScreen('screen-leaderboard');
}

// Cinematic Question Change Animation Audio Transition Function triggered between questions
function triggerQuestionLogoTransition(captionText, onMidpointCallback) {
  const overlay = document.getElementById('question-transition-overlay');
  const captionEl = document.getElementById('transition-pulse-caption');
  const changeAudio = document.getElementById('question-change-audio');

  if (captionEl) {
    captionEl.innerText = captionText || "STAGE PRESENTATION IN PROGRESS...";
  }

  // Play Question change animation.mp3 audio track
  if (changeAudio) {
    try {
      changeAudio.muted = isQuizAudioMuted;
      changeAudio.currentTime = 0;
      if (!isQuizAudioMuted) {
        changeAudio.play().catch(e => console.log('Question change audio play prevented:', e));
      }
    } catch (e) {}
  }

  if (overlay) {
    // Reset any previous animation state
    overlay.classList.remove('transition-active');
    void overlay.offsetWidth; // Force DOM reflow to retrigger animation
    overlay.classList.add('transition-active');

    // At the 1.1s mark of the transition, execute callback to load and prepare the new question
    setTimeout(() => {
      if (typeof onMidpointCallback === 'function') {
        onMidpointCallback();
      }
    }, 1100);

    // Fade out and close overlay smoothly at 2.2 seconds
    setTimeout(() => {
      overlay.classList.remove('transition-active');
      if (changeAudio) {
        try {
          changeAudio.pause();
          changeAudio.currentTime = 0;
        } catch (e) {}
      }
    }, 2200);
  } else {
    // Fallback if overlay not found
    if (typeof onMidpointCallback === 'function') {
      onMidpointCallback();
    }
  }
}

function nextStageQuestion() {
  const phase = tournamentConfig.phases[currentPhaseIdx];
  const round = phase ? (phase.rounds[currentRoundIdx] || phase.rounds[0]) : null;
  
  // All Rapid Fire games (Verbal Rapid Fire & Visual Rapid Fire) bypass animations completely to preserve student time
  const isSpeedRound = round && (
    (round.type && (round.type.includes("Rapid Fire") || round.type.includes("Visual Rapid Fire"))) ||
    (round.name && (round.name.includes("Rapid Fire") || round.name.includes("Visual Rapid Fire")))
  );
  if (isSpeedRound) {
    if (round.type === 'Visual Rapid Fire' || (round.name && round.name.includes('Visual Rapid Fire'))) {
      nextVisualRapidImage();
    } else {
      // In Verbal Rapid Fire: advance directly with zero delay/animation
      renderLiveQuestion();
    }
    return;
  }

  const isBuzzerRound = round && round.name.includes("Buzzer");

  // Determine transition label
  let nextQNum = currentLiveQuestionIndex + 1;
  let transitionLabel = `NEXT QUESTION ➔ Q${nextQNum < 10 ? '0' + nextQNum : nextQNum}`;
  if (isBuzzerRound) {
    const nextBuzzNum = Math.min(5, (currentBuzzerGroupQCount || 0) + 1);
    transitionLabel = `BUZZER QUESTION 0${nextBuzzNum} OF 05`;
  }

  triggerQuestionLogoTransition(transitionLabel, () => {
    if (!isBuzzerRound) {
      // Increment question count for current active school (Rounds 1 & 2)
      schoolQuestionCounts[activeSchoolTurnSlot] = (schoolQuestionCounts[activeSchoolTurnSlot] || 0) + 1;

      // If this school has completed 2 questions, automatically pass turn to the next school in triad
      if (schoolQuestionCounts[activeSchoolTurnSlot] >= 2) {
        // Find next school that has not completed 2 questions, or cycle sequentially
        let nextSlot = (activeSchoolTurnSlot + 1) % 3;
        let found = false;
        for (let i = 0; i < 3; i++) {
          const checkSlot = (activeSchoolTurnSlot + 1 + i) % 3;
          if ((schoolQuestionCounts[checkSlot] || 0) < 2) {
            nextSlot = checkSlot;
            found = true;
            break;
          }
        }
        activeSchoolTurnSlot = nextSlot;
      }
    }

    renderLiveQuestion();
  });
}

// 3. COMPACT 10-TEAM ANIMATED LEADERBOARD
function renderCompactAnimatedLeaderboard() {
  const container = document.getElementById('animated-leaderboard-list');
  const title = document.getElementById('leaderboard-title-h2');
  if (!container) return;

  const currentPhase = tournamentConfig.phases[currentPhaseIdx];
  const activeTeams = getActivePhaseTeams();

  if (title) title.innerText = `${currentPhase.title} Standings (${activeTeams.length} Competing Teams)`;

  const sorted = [...activeTeams].sort((a, b) => getTeamCurrentScore(b) - getTeamCurrentScore(a));

  container.innerHTML = sorted.map((t, idx) => {
    const newRank = idx + 1;
    const rankClass = newRank === 1 ? 'gold-rank' : (newRank === 2 ? 'silver-rank' : (newRank === 3 ? 'bronze-rank' : ''));

    // Main Leaderboard always shows official tournament phase score, never tie breaker points
    let currentScore = 0;
    if (currentPhaseIdx === 0) currentScore = t.phase1Score || 0;
    else if (currentPhaseIdx === 1) currentScore = t.phase2Score || 0;
    else if (currentPhaseIdx === 2) currentScore = t.phase3Score || 0;
    const p1 = t.phase1Score || 0;
    const p2 = t.inPhase2 ? t.phase2Score : '-';
    const p3 = t.inPhase3 ? t.phase3Score : '-';

    const displayName = (t.name && t.name.trim() !== '') ? t.name : `Slot ${t.id} (Unassigned - Click Edit)`;
    const isUnassigned = !t.name || t.name.trim() === '';

    return `
      <div class="animated-team-row ${t.selected ? 'team-is-selected' : 'team-is-unselected'}" id="team-row-${t.id}">
        <div>
          <input type="checkbox" class="team-cb-control" ${t.selected ? 'checked' : ''} onchange="toggleTeamSelection(${t.id}, this.checked)">
        </div>
        <div>
          <div class="compact-rank-tag ${rankClass}">#${newRank}</div>
        </div>
        <div class="team-text-title ${isUnassigned ? 'team-title-empty' : ''}" title="${displayName}">${displayName}</div>
        <div class="team-score-num">${currentScore} PTS</div>
        <div class="col-phase-pts">${p1}</div>
        <div class="col-phase-pts">${p2}</div>
        <div class="col-phase-pts">${p3}</div>
        <div>
          <button class="btn-quick-edit-pts" onclick="openScoreEditModal(${t.id}, '${escapeQuotes(t.name)}', ${currentScore})">
            Edit
          </button>
        </div>
        <div>
          <span class="compact-status-chip ${t.selected ? 'chip-advancing' : 'chip-eliminated'}">
            ${t.selected ? 'QUALIFIED' : 'PENDING'}
          </span>
        </div>
      </div>
    `;
  }).join('');

  updateSelectedCount();
}

function escapeQuotes(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function toggleTeamSelection(teamId, isChecked) {
  const team = tournamentConfig.allTeamsMaster.find(t => t.id === teamId);
  if (team) {
    team.selected = isChecked;
    updateSelectedCount();
    renderCompactAnimatedLeaderboard();
  }
}

function updateSelectedCount() {
  const activeTeams = getActivePhaseTeams();
  const count = activeTeams.filter(t => t.selected).length;
  const countSpan = document.getElementById('selected-counter-badge');
  if (countSpan) countSpan.innerText = count;
}

// Move Selected Teams to Next Phase in Bracket
function advanceSelectedSchools() {
  const activeTeams = getActivePhaseTeams();
  const selected = activeTeams.filter(t => t.selected);

  if (selected.length === 0) {
    alert("Please select at least 1 school to advance.");
    return;
  }

  const nextPhaseIdx = currentPhaseIdx + 1;
  if (nextPhaseIdx >= tournamentConfig.phases.length) {
    // Crown Winner
    selected[0].isWinner = true;
    renderOfficialChampionshipBracket();
    alert(`🏆 Congratulations! ${selected[0].name} is the CHAMPION of State-Level GK Quiz Contest 2026!`);
    return;
  }

  const nextPhase = tournamentConfig.phases[nextPhaseIdx];
  const confirmMsg = `Advance ${selected.length} selected schools to ${nextPhase.title}?\n\n• Bracket slots will automatically fill with these qualified teams.\n• Scores in ${nextPhase.title} will start fresh from 0.`;

  if (confirm(confirmMsg)) {
    // Unlock them in next phase
    selected.forEach(t => {
      if (nextPhaseIdx === 1) {
        t.inPhase2 = true;
        t.phase2Score = 0;
      } else if (nextPhaseIdx === 2) {
        t.inPhase3 = true;
        t.phase3Score = 0;
      }
      t.selected = false; // reset selection checkbox for next phase
    });

    tournamentConfig.phases[currentPhaseIdx].status = "completed";
    tournamentConfig.phases[nextPhaseIdx].status = "active";

    currentPhaseIdx = nextPhaseIdx;
    currentRoundIdx = 0;
    currentGroupIdx = 1;

    saveTournamentStateToStorage();
    updateTopTracker();
    renderPhasesLaunchDeck();
    renderCompactAnimatedLeaderboard();
    renderOfficialChampionshipBracket();

    const modal = document.getElementById('phase-advance-modal');
    const mTitle = document.getElementById('modal-step-title');
    const mDesc = document.getElementById('modal-step-desc');

    if (mTitle) mTitle.innerText = `${nextPhase.title.toUpperCase()} UNLOCKED!`;
    if (mDesc) mDesc.innerText = `${selected.length} schools advanced to the bracket. Scores start fresh from 0 for Phase ${nextPhaseIdx + 1}.`;
    if (modal) modal.classList.add('modal-open');

    if (typeof confetti === 'function') {
      confetti({ particleCount: 120, spread: 90, origin: { y: 0.55 } });
    }
  }
}

// 4. SCORE & TIMER MODALS
function openScoreEditModal(teamId, teamName, currentScore) {
  editingTeamId = teamId;
  const nameInput = document.getElementById('custom-school-name-input');
  const scoreInput = document.getElementById('custom-score-input');
  const phaseLabel = document.getElementById('edit-phase-label');

  if (nameInput) nameInput.value = teamName || '';
  if (scoreInput) scoreInput.value = currentScore;
  if (phaseLabel) phaseLabel.innerText = `Phase ${currentPhaseIdx + 1}`;

  document.getElementById('edit-score-modal')?.classList.add('modal-open');
}

function closeScoreEditModal() {
  document.getElementById('edit-score-modal')?.classList.remove('modal-open');
  editingTeamId = null;
}

function saveCustomScore() {
  if (editingTeamId === null) return;
  const nameInput = document.getElementById('custom-school-name-input');
  const scoreInput = document.getElementById('custom-score-input');
  const newScore = parseInt(scoreInput.value, 10);

  if (isNaN(newScore)) {
    alert("Please enter a valid number for score.");
    return;
  }

  const team = tournamentConfig.allTeamsMaster.find(t => t.id === editingTeamId);
  if (team) {
    if (nameInput && nameInput.value.trim() !== '') {
      team.name = nameInput.value.trim();
    }
    setTeamCurrentScore(team, newScore);
    saveTournamentStateToStorage();
    renderCompactAnimatedLeaderboard();
    renderOfficialChampionshipBracket();
  }

  closeScoreEditModal();
}

// ==============================================================================
// 5. OFFICIAL CHAMPIONSHIP TOURNAMENT BRACKET TREE (Matching the Reference Image)
// Pure bracket layout: Rectangular nodes + connector forks + trophy podium
// Empty slots by default; dynamically fills as teams advance!
// ==============================================================================
function renderOfficialChampionshipBracket() {
  const container = document.getElementById('tournament-tree-canvas');
  if (!container) return;

  // Tier 1: All Participating League Teams
  const tier1Teams = tournamentConfig.allTeamsMaster;

  // Tier 2: Qualified Semi-Finalists (empty until qualified)
  const tier2Teams = tournamentConfig.allTeamsMaster.filter(t => t.inPhase2);

  // Tier 3: 3 Finalists (empty until qualified)
  const tier3Teams = tournamentConfig.allTeamsMaster.filter(t => t.inPhase3);

  // Winner (empty until crowned)
  const winnerTeam = tournamentConfig.allTeamsMaster.find(t => t.isWinner);

  // Helper to render bracket slot
  function renderBracketBox(team, placeholderText) {
    if (team && team.name && team.name.trim() !== '') {
      const score = getTeamCurrentScore(team);
      return `
        <div class="bracket-node-box node-filled ${team.isWinner ? 'node-winner' : ''}">
          <span class="bracket-school-name" title="${team.name}">${team.name}</span>
          <span class="bracket-score-tag">${score} PTS</span>
        </div>
      `;
    }
    return `
      <div class="bracket-node-box node-empty">
        <span class="bracket-placeholder-text">${placeholderText}</span>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="bracket-canvas-stage">
      
      <!-- Column 1: Phase 1 (All Competing Team Slots) -->
      <div class="bracket-tier-column">
        <div class="bracket-tier-header">
          <span class="tier-badge">PHASE 1: LEAGUE</span>
          <h4>${tier1Teams.length} Competing Schools</h4>
        </div>
        <div class="bracket-slots-stack">
          ${tier1Teams.map((team, i) => `
            <div class="bracket-pair-wrapper">
              ${renderBracketBox(team, `Slot ${i + 1} (Empty)`)}
              <div class="bracket-branch-line"></div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Column 2: Phase 2 (9 Semi-Finalist Slots) -->
      <div class="bracket-tier-column">
        <div class="bracket-tier-header" style="border-color: var(--cyan);">
          <span class="tier-badge" style="background: linear-gradient(135deg, #0070f3, #00f0ff); color: #020306;">PHASE 2: SEMI FINAL</span>
          <h4>Top 9 Qualified Slots</h4>
        </div>
        <div class="bracket-slots-stack tier-2-spacing">
          ${Array.from({ length: 9 }).map((_, i) => `
            <div class="bracket-pair-wrapper">
              ${renderBracketBox(tier2Teams[i], `Semi-Finalist ${i + 1}`)}
              <div class="bracket-branch-line"></div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Column 3: Phase 3 (3 Finalist Slots) -->
      <div class="bracket-tier-column">
        <div class="bracket-tier-header" style="border-color: var(--gold);">
          <span class="tier-badge" style="background: linear-gradient(135deg, #ffc400, #ff9100); color: #000;">PHASE 3: GRAND FINAL</span>
          <h4>Top 3 Championship Slots</h4>
        </div>
        <div class="bracket-slots-stack tier-3-spacing">
          ${Array.from({ length: 3 }).map((_, i) => `
            <div class="bracket-pair-wrapper">
              ${renderBracketBox(tier3Teams[i], `Grand Finalist ${i + 1}`)}
              <div class="bracket-branch-line"></div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Column 4: Championship Trophy Podium -->
      <div class="bracket-tier-column trophy-column">
        <div class="bracket-tier-header" style="border-color: var(--gold);">
          <span class="tier-badge" style="background: var(--gold); color: #000;">STATE CHAMPION</span>
          <h4>Grand Trophy</h4>
        </div>

        <div class="trophy-podium-shrine">
          <div class="gold-trophy-graphic">
            <svg width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
              <path d="M4 22h16"/>
              <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34"/>
              <path d="M18 14.66V17c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2.34"/>
              <path d="M6 9a6 6 0 0 0 12 0V4H6v5z"/>
            </svg>
          </div>
          <h3 class="trophy-championship-title">STATE CHAMPION 2026</h3>

          <div class="champion-crowned-box ${winnerTeam ? 'champion-active' : ''}">
            ${winnerTeam ? `
              <div style="font-size: 0.8rem; font-weight: 800; color: #000; letter-spacing: 0.12em;">WINNER</div>
              <div style="font-size: 1.25rem; font-weight: 900; color: #000; margin: 0.2rem 0;">${winnerTeam.name}</div>
              <div style="font-size: 0.95rem; font-weight: 800; color: #000;">${winnerTeam.phase3Score} Final PTS</div>
            ` : `
              <div style="color: #64748b; font-size: 0.9rem; font-weight: 700; text-transform: uppercase;">
                Awaiting Final Decider
              </div>
            `}
          </div>
        </div>
      </div>

    </div>
  `;
}

// 6. TIMER ENGINE
function openTimerEditModal() {
  const input = document.getElementById('custom-timer-input');
  if (input) input.value = defaultQuestionTimer;
  document.getElementById('edit-timer-modal')?.classList.add('modal-open');
}

function closeTimerEditModal() {
  document.getElementById('edit-timer-modal')?.classList.remove('modal-open');
}

function saveCustomTimer() {
  const input = document.getElementById('custom-timer-input');
  const newTime = parseInt(input.value, 10);

  if (isNaN(newTime) || newTime < 5) {
    alert("Timer must be at least 5 seconds.");
    return;
  }

  defaultQuestionTimer = newTime;
  resetTimer(newTime);
  startTimerCountdown();
  closeTimerEditModal();
}

function openAddSchoolModal() {
  document.getElementById('add-school-modal')?.classList.add('modal-open');
}

function closeAddSchoolModal() {
  document.getElementById('add-school-modal')?.classList.remove('modal-open');
}

function saveNewSchool() {
  const nameInput = document.getElementById('new-school-name-input');
  const groupInput = document.getElementById('new-school-group-input');
  const scoreInput = document.getElementById('new-school-score-input');

  const schoolName = nameInput.value.trim();
  const group = groupInput.value;
  const score = parseInt(scoreInput.value, 10) || 0;

  if (!schoolName) {
    alert("Please enter a school name.");
    return;
  }

  // Next team number
  const nextNum = tournamentConfig.allTeamsMaster.length + 1;
  const newTeam = {
    id: Date.now(),
    name: schoolName,
    code: `T${nextNum}`,
    group: group,
    phase1Score: score,
    phase2Score: 0,
    phase3Score: 0,
    selected: false,
    inPhase2: false,
    inPhase3: false,
    isWinner: false
  };

  tournamentConfig.allTeamsMaster.push(newTeam);
  tournamentConfig.schoolsDirectory.push({ name: schoolName, code: `T${nextNum}` });

  saveTournamentStateToStorage();
  renderCompactAnimatedLeaderboard();
  renderOfficialChampionshipBracket();
  renderSchoolsDirectory();
  populateStageGroupSelector();
  updateStageActiveGroupDisplay();

  nameInput.value = "";
  closeAddSchoolModal();
  playQuizTone(523.25, 659.25, 'success');
}

function deleteSchoolFromDirectory(schoolIndex) {
  const targetSchool = tournamentConfig.schoolsDirectory[schoolIndex];
  if (!targetSchool) return;

  const confirmDelete = confirm(`Are you sure you want to delete "${targetSchool.name}" from the tournament and directory?`);
  if (!confirmDelete) return;

  // Remove from schoolsDirectory
  tournamentConfig.schoolsDirectory.splice(schoolIndex, 1);

  // Remove matching team from allTeamsMaster if found by name or code
  const masterIdx = tournamentConfig.allTeamsMaster.findIndex(t => 
    t.name.trim().toLowerCase() === targetSchool.name.trim().toLowerCase() ||
    (targetSchool.code && t.code === targetSchool.code)
  );

  if (masterIdx !== -1) {
    tournamentConfig.allTeamsMaster.splice(masterIdx, 1);
  }

  // Re-index remaining schools and teams with continuous T1, T2, T3... codes
  tournamentConfig.schoolsDirectory.forEach((s, idx) => {
    s.code = `T${idx + 1}`;
  });
  tournamentConfig.allTeamsMaster.forEach((t, idx) => {
    t.code = `T${idx + 1}`;
  });

  saveTournamentStateToStorage();
  renderCompactAnimatedLeaderboard();
  renderOfficialChampionshipBracket();
  renderSchoolsDirectory();
  populateStageGroupSelector();
  updateStageActiveGroupDisplay();

  playQuizTone(220, 164.81, 'wrong');
}

function toggleTimerState() {
  const btn = document.getElementById('btn-toggle-timer');
  if (timerRunning) {
    stopTimerCountdown();
    if (btn) btn.innerText = "▶ Resume Timer";
  } else {
    startTimerCountdown();
    if (btn) btn.innerText = "⏸ Pause Timer";
  }
}

function startTimerCountdown() {
  if (timerRunning) return;
  timerRunning = true;
  clearInterval(timerInterval);
  const btn = document.getElementById('btn-toggle-timer');
  if (btn) btn.innerText = "⏸ Pause Timer";
  const rfBtn = document.getElementById('rf-btn-toggle');
  if (rfBtn) rfBtn.innerText = "⏸ Pause Timer";

  // Play official clock audio (clock.m4a)
  playClockTickingAudio();

  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();

    if (timerSeconds <= 5 && timerSeconds > 0) {
      // Urgent warning pulse in final 5 seconds
      playQuizTone(0, 0, 'warning-tick');
    }

    if (timerSeconds <= 0) {
      stopTimerCountdown();
      playQuizTone(0, 0, 'timesup');
      document.getElementById('timer-box-display')?.classList.add('danger-pulse');
      if (btn) btn.innerText = "▶ Start Timer";
      if (rfBtn) rfBtn.innerText = "▶ Start Timer";

      // If in Rapid Fire or Visual Rapid Fire round, automatically open the rectangular Points Award Popup
      const currentPhase = tournamentConfig.phases[currentPhaseIdx];
      const currentRound = currentPhase ? (currentPhase.rounds[currentRoundIdx] || currentPhase.rounds[0]) : null;
      if (currentRound && currentRound.type === 'Visual Rapid Fire') {
        setTimeout(() => {
          openVisualRapidTimeUpModal();
        }, 600);
      } else if (currentRound && currentRound.type === 'Rapid Fire') {
        setTimeout(() => {
          openRapidFireTimeUpModal();
        }, 600);
      }
    }
  }, 1000);
}

function stopTimerCountdown() {
  clearInterval(timerInterval);
  timerRunning = false;
  stopClockTickingAudio();
  const btn = document.getElementById('btn-toggle-timer');
  if (btn) btn.innerText = "▶ Start Timer";
  const rfBtn = document.getElementById('rf-btn-toggle');
  if (rfBtn) rfBtn.innerText = "▶ Start Timer";
}

let currentTimerMaxSeconds = 10;

function resetTimer(seconds) {
  stopTimerCountdown();
  if (typeof seconds === 'number') {
    timerSeconds = seconds;
  } else {
    const phase = tournamentConfig.phases[currentPhaseIdx];
    const round = phase ? (phase.rounds[currentRoundIdx] || phase.rounds[0]) : null;
    timerSeconds = (round && round.timer) ? round.timer : defaultQuestionTimer;
  }
  currentTimerMaxSeconds = timerSeconds;
  updateTimerDisplay();
  const btn = document.getElementById('btn-toggle-timer');
  if (btn) btn.innerText = "▶ Start Timer";
}

function updateTimerDisplay() {
  const digits = document.getElementById('live-timer-number');
  const box = document.getElementById('timer-box-display');
  const ring = document.getElementById('clock-timer-progress-ring');
  const hand = document.getElementById('clock-timer-hand');
  if (!digits) return;

  const formatted = timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds;
  digits.innerText = `${formatted}s`;

  // Animate SVG Clock Progress Ring
  // Circumference of r=58 circle is ~364.42
  const maxSec = currentTimerMaxSeconds || 30;
  const fraction = Math.max(0, Math.min(1, timerSeconds / maxSec));
  const fullCircumference = 2 * Math.PI * 58; // 364.42
  if (ring) {
    const dashoffset = fullCircumference * (1 - fraction);
    ring.style.strokeDashoffset = dashoffset;
  }

  // Animate Clock Hand Pointer (Clockwise rotation from 0 to 360 deg)
  if (hand) {
    const rotationDeg = (1 - fraction) * 360;
    hand.style.transform = `rotate(${rotationDeg}deg)`;
  }

  if (timerSeconds <= 5) {
    box?.classList.add('danger-pulse');
  } else {
    box?.classList.remove('danger-pulse');
  }

  // Synchronize Rapid Fire Stadium Clock
  const rfDigits = document.getElementById('rf-live-timer-number');
  const rfRing = document.getElementById('rf-clock-ring');
  if (rfDigits) rfDigits.innerText = `${formatted}s`;
  if (rfRing) {
    const rfCircumference = 2 * Math.PI * 104;
    rfRing.style.strokeDashoffset = rfCircumference * (1 - fraction);
    if (timerSeconds <= 10) {
      rfRing.style.stroke = '#ef4444';
      if (rfDigits) rfDigits.style.textShadow = '0 0 25px rgba(239, 68, 68, 0.9)';
    } else {
      rfRing.style.stroke = '#f97316';
      if (rfDigits) rfDigits.style.textShadow = '0 0 25px rgba(249, 115, 22, 0.7)';
    }
  }

  // Synchronize Visual Rapid Fire Stage Timer Capsule
  const vrfDigits = document.getElementById('vrf-live-timer-number');
  if (vrfDigits) {
    vrfDigits.innerText = `${formatted}s`;
    if (timerSeconds <= 10) {
      vrfDigits.style.color = '#ef4444';
      vrfDigits.style.textShadow = '0 0 15px rgba(239, 68, 68, 0.9)';
    } else {
      vrfDigits.style.color = '#34d399';
      vrfDigits.style.textShadow = '0 0 15px rgba(16, 185, 129, 0.7)';
    }
  }
}

function renderSchoolsDirectory() {
  const container = document.getElementById('schools-directory-grid');
  if (!container) return;

  // Sync team codes across all schools
  tournamentConfig.schoolsDirectory.forEach((s, idx) => {
    if (!s.code) s.code = `T${idx + 1}`;
  });

  const total = tournamentConfig.schoolsDirectory.length;

  if (total === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #94a3b8; font-size: 1.05rem;">
        No schools in directory. Click "+ Add School" above to add participating institutions.
      </div>
    `;
    return;
  }

  container.innerHTML = tournamentConfig.schoolsDirectory.map((s, idx) => {
    const codeTag = s.code || `T${idx + 1}`;
    return `
      <div class="school-row-item">
        <div class="school-row-main" title="${s.name} (${codeTag})">
          <span class="school-code-tag">${codeTag}</span>
          <span class="school-name-text">${s.name}</span>
        </div>
        <button class="btn-delete-school" onclick="deleteSchoolFromDirectory(${idx})" title="Delete ${s.name} (${codeTag}) from Directory">
          🗑
        </button>
      </div>
    `;
  }).join('');
}

function toggleStageFullscreen() {
  const elem = document.documentElement;
  const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);

  if (!isFs) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {});
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

// Track fullscreen changes and update button label
document.addEventListener('fullscreenchange', updateFullscreenButtonUI);
document.addEventListener('webkitfullscreenchange', updateFullscreenButtonUI);

function updateFullscreenButtonUI() {
  const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
  const dockBtn = document.getElementById('dock-fs-toggle-btn');
  const topBtn = document.querySelector('.btn-fullscreen-toggle');

  if (dockBtn) {
    dockBtn.innerHTML = isFs ? '⛶ Exit Fullscreen' : '⛶ Fullscreen Arena';
    dockBtn.style.color = isFs ? 'var(--cyan)' : '';
  }
  if (topBtn) {
    topBtn.innerHTML = isFs ? '✕' : '⛶';
    topBtn.title = isFs ? 'Exit Fullscreen' : 'Fullscreen Stage';
  }
}

function setupStageHotkeys() {
  window.addEventListener('keydown', (e) => {
    // Ignore hotkeys if user is currently typing in an input or textarea
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
      return;
    }

    // Ignore if modal dialog is open
    const openModal = document.querySelector('.modal-backdrop-layer.modal-open');
    if (openModal) {
      if (e.key === 'Escape') {
        openModal.classList.remove('modal-open');
      }
      return;
    }

    if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleStageFullscreen();
    }
    if (e.key === ' ') {
      e.preventDefault();
      if (isSequenceRevealActive) {
        revealNextCorrectSequenceStep();
      } else {
        if (timerRunning) stopTimerCountdown();
        else startTimerCountdown();
      }
    }
    if (e.key === 'r' || e.key === 'R') {
      e.preventDefault();
      if (isSequenceRevealActive) {
        revealNextCorrectSequenceStep();
      } else {
        triggerAnswerReveal();
      }
    }
    if (e.key === 'n' || e.key === 'N') {
      e.preventDefault();
      nextStageQuestion();
    }
  });
}

/* ==============================================================================
   7. SECURE ADMIN PORTAL & REPOSITORY CONTROLLER
   Authorized Admin: argaikwad24@gmail.com
   ============================================================================== */
const AUTHORIZED_ADMIN_EMAIL = "argaikwad24@gmail.com";
const DEFAULT_ADMIN_PASSKEY = "admin2026";
let isAdminLoggedIn = false;
let currentAdminCategoryFilter = "MCQ";
let currentAdminPhaseFilter = "all"; // "all" | "1" | "2" | "3"

// Set Admin Phase Filter
function setAdminPhaseFilter(phase) {
  currentAdminPhaseFilter = String(phase);
  
  // Update active pill button state
  const pillBtns = document.querySelectorAll('.admin-phase-pill-btn');
  pillBtns.forEach(btn => {
    if (btn.getAttribute('data-phase') === String(phase)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderAdminQuestionsList();
}

// Open Admin Portal Modal
function openAdminAccessModal() {
  if (isAdminLoggedIn) {
    switchMainScreen('screen-admin');
    renderAdminPortalView();
    return;
  }
  const modal = document.getElementById('admin-auth-modal');
  if (modal) {
    modal.classList.add('modal-open');
    const err = document.getElementById('admin-auth-error-msg');
    if (err) err.style.display = 'none';
    const passInput = document.getElementById('admin-passkey-input');
    if (passInput) {
      passInput.value = '';
      setTimeout(() => passInput.focus(), 150);
    }
  }
}

function closeAdminAccessModal() {
  document.getElementById('admin-auth-modal')?.classList.remove('modal-open');
}

// Verify Admin Credentials with strict password & email check
function verifyAdminAccess() {
  const emailInput = document.getElementById('admin-email-input')?.value.trim();
  const passInput = document.getElementById('admin-passkey-input')?.value.trim();
  const errEl = document.getElementById('admin-auth-error-msg');

  if (emailInput.toLowerCase() !== AUTHORIZED_ADMIN_EMAIL.toLowerCase()) {
    if (errEl) {
      errEl.innerText = "❌ Access Denied: Unauthorized admin email address.";
      errEl.style.display = "block";
    }
    return;
  }

  if (passInput !== DEFAULT_ADMIN_PASSKEY) {
    if (errEl) {
      errEl.innerText = "❌ Invalid security passkey. Please re-enter.";
      errEl.style.display = "block";
    }
    return;
  }

  isAdminLoggedIn = true;
  closeAdminAccessModal();
  const display = document.getElementById('admin-user-display');
  if (display) display.innerText = AUTHORIZED_ADMIN_EMAIL;
  switchMainScreen('screen-admin');
  renderAdminPortalView();
}

function logoutAdminSession() {
  isAdminLoggedIn = false;
  switchMainScreen('screen-phases');
}

// ------------------------------------------------------------------------------
// ⏱ ADMIN ROUND TIMERS CONFIGURATION CONTROLLER
// ------------------------------------------------------------------------------
const FACTORY_DEFAULT_TIMERS = {
  1: { 1: 15, 2: 10 }, // Phase 1: Media 15s, Buzzer 10s
  2: { 1: 10, 2: 15, 3: 10, 4: 60 }, // Phase 2: MCQ 10s, Media 15s, Buzzer 10s, Rapid Fire 60s
  3: { 1: 15, 2: 15, 3: 10, 4: 60 }  // Phase 3: Sequence 15s, Media 15s, Buzzer 10s, Rapid Fire 60s
};

function openAdminRoundTimersModal() {
  const modal = document.getElementById('admin-round-timers-modal');
  const container = document.getElementById('admin-timer-phases-container');
  if (!modal || !container) return;

  const phaseColors = [
    { border: 'rgba(0, 240, 255, 0.4)', bg: 'rgba(0, 240, 255, 0.05)', tag: '#00f0ff' },
    { border: 'rgba(255, 196, 0, 0.4)', bg: 'rgba(255, 196, 0, 0.05)', tag: '#ffc400' },
    { border: 'rgba(16, 185, 129, 0.4)', bg: 'rgba(16, 185, 129, 0.05)', tag: '#34d399' }
  ];

  container.innerHTML = tournamentConfig.phases.map((phase, pIdx) => {
    const col = phaseColors[pIdx % phaseColors.length];
    const roundsHtml = phase.rounds.map(round => {
      const timerVal = (typeof round.timer === 'number') ? round.timer : (FACTORY_DEFAULT_TIMERS[phase.id]?.[round.id] || 10);
      return `
        <div class="admin-timer-round-row">
          <div class="admin-timer-round-info">
            <span class="admin-timer-round-badge">Round ${round.id}</span>
            <div>
              <div class="admin-timer-round-name">${round.name}</div>
              <div class="admin-timer-round-remark">${round.remark || ''}</div>
            </div>
          </div>
          <div class="admin-timer-input-wrap">
            <input 
              type="number" 
              class="modal-input-score admin-timer-number-input" 
              data-phase-id="${phase.id}" 
              data-round-id="${round.id}" 
              value="${timerVal}" 
              min="5" 
              max="300"
              step="1"
            >
            <span class="admin-timer-sec-unit">sec</span>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="admin-timer-phase-card" style="border-color: ${col.border}; background: ${col.bg};">
        <div class="admin-timer-phase-head">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span class="admin-timer-phase-pill" style="background: ${col.tag}; color: #020617;">Phase ${phase.id}</span>
            <span style="font-size: 1.05rem; font-weight: 800; color: #fff;">${phase.title}</span>
          </div>
          <span style="font-size: 0.78rem; color: #94a3b8;">${phase.rounds.length} Rounds</span>
        </div>
        <div class="admin-timer-rounds-grid">
          ${roundsHtml}
        </div>
      </div>
    `;
  }).join('');

  modal.classList.add('modal-open');
}

function closeAdminRoundTimersModal() {
  document.getElementById('admin-round-timers-modal')?.classList.remove('modal-open');
}

function applyQuickTimerPreset(seconds) {
  const inputs = document.querySelectorAll('.admin-timer-number-input');
  inputs.forEach(input => {
    input.value = seconds;
  });
  playQuizTone(523.25, 659.25, 'lock');
}

function resetTimersToFactoryDefaults() {
  const inputs = document.querySelectorAll('.admin-timer-number-input');
  inputs.forEach(input => {
    const pId = parseInt(input.getAttribute('data-phase-id'), 10);
    const rId = parseInt(input.getAttribute('data-round-id'), 10);
    const factorySec = FACTORY_DEFAULT_TIMERS[pId]?.[rId] || 10;
    input.value = factorySec;
  });
  playQuizTone(440, 554.37, 'lock');
}

function saveAdminRoundTimers() {
  const inputs = document.querySelectorAll('.admin-timer-number-input');
  let hasInvalid = false;

  inputs.forEach(input => {
    const pId = parseInt(input.getAttribute('data-phase-id'), 10);
    const rId = parseInt(input.getAttribute('data-round-id'), 10);
    let val = parseInt(input.value, 10);

    if (isNaN(val) || val < 5) {
      val = 5;
      hasInvalid = true;
    } else if (val > 300) {
      val = 300;
      hasInvalid = true;
    }

    const phase = tournamentConfig.phases.find(p => p.id === pId);
    if (phase) {
      const round = phase.rounds.find(r => r.id === rId);
      if (round) {
        round.timer = val;
      }
    }
  });

  if (hasInvalid) {
    alert("Some timer values were outside the 5s - 300s range and were auto-adjusted.");
  }

  // Persist updated phases to storage
  saveTournamentStateToStorage();

  // If currently active in arena, sync clock display right now
  const activePhase = tournamentConfig.phases[currentPhaseIdx];
  const activeRound = activePhase ? (activePhase.rounds[currentRoundIdx] || activePhase.rounds[0]) : null;
  if (activeRound && activeRound.timer && !timerRunning) {
    resetTimer(activeRound.timer);
  }

  playQuizTone(523.25, 659.25, 'success');
  closeAdminRoundTimersModal();

  // Show celebratory notification
  if (typeof confetti === 'function') {
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
  }
}

// Render Admin Navigation and Question Inventory
function renderAdminPortalView() {
  const filterBar = document.getElementById('admin-rounds-filter-bar');
  const rounds = Object.keys(quizRoundsQuestions);

  if (filterBar) {
    filterBar.innerHTML = rounds.map(r => `
      <button class="admin-round-filter-btn ${r === currentAdminCategoryFilter ? 'active' : ''}" onclick="setAdminCategoryFilter('${r}')">
        <span>${r}</span>
        <span class="admin-round-pill-count">${(quizRoundsQuestions[r] || []).length}</span>
      </button>
    `).join('');
  }

  // Update Phase Filter Tabs container depending on currentAdminCategoryFilter
  updateAdminPhaseTabsVisibility();
  renderAdminQuestionsList();
}

function updateAdminPhaseTabsVisibility() {
  const tabsContainer = document.getElementById('admin-phase-filter-tabs');
  const cat = currentAdminCategoryFilter;
  if (!tabsContainer) return;

  if (cat === "MCQ") {
    currentAdminPhaseFilter = "2";
    tabsContainer.innerHTML = `<button class="admin-phase-pill-btn active" data-phase="2">Phase 2 Only</button>`;
  } else if (cat === "Sequence") {
    currentAdminPhaseFilter = "3";
    tabsContainer.innerHTML = `<button class="admin-phase-pill-btn active" data-phase="3">Phase 3 Only</button>`;
  } else if (cat === "Rapid Fire") {
    currentAdminPhaseFilter = "2";
    tabsContainer.innerHTML = `<button class="admin-phase-pill-btn active" data-phase="2">Phase 2 Only</button>`;
  } else if (cat === "Visual Rapid Fire") {
    currentAdminPhaseFilter = "3";
    tabsContainer.innerHTML = `<button class="admin-phase-pill-btn active" data-phase="3">Phase 3 Only</button>`;
  } else if (cat === "Tie Breaker") {
    currentAdminPhaseFilter = "all";
    tabsContainer.innerHTML = `<button class="admin-phase-pill-btn active" data-phase="all">⚡ Standalone Sudden-Death Pool (All Tie Breakers)</button>`;
  } else {
    // Multi-phase rounds: Buzzer, Media Round
    tabsContainer.innerHTML = `
      <button class="admin-phase-pill-btn ${currentAdminPhaseFilter === 'all' ? 'active' : ''}" data-phase="all" onclick="setAdminPhaseFilter('all')">🌟 All Phases</button>
      <button class="admin-phase-pill-btn ${currentAdminPhaseFilter === '1' ? 'active' : ''}" data-phase="1" onclick="setAdminPhaseFilter('1')">Phase 1</button>
      <button class="admin-phase-pill-btn ${currentAdminPhaseFilter === '2' ? 'active' : ''}" data-phase="2" onclick="setAdminPhaseFilter('2')">Phase 2</button>
      <button class="admin-phase-pill-btn ${currentAdminPhaseFilter === '3' ? 'active' : ''}" data-phase="3" onclick="setAdminPhaseFilter('3')">Phase 3</button>
    `;
  }
}

function setAdminCategoryFilter(category) {
  currentAdminCategoryFilter = category;
  currentAdminPhaseFilter = 'all';
  renderAdminPortalView();
}

function renderAdminQuestionsList() {
  const container = document.getElementById('admin-questions-list-container');
  const countLabel = document.getElementById('admin-category-count-label');
  if (!container) return;

  const rawQuestions = quizRoundsQuestions[currentAdminCategoryFilter] || [];
  
  // Filter questions according to currentAdminPhaseFilter ("all" | "1" | "2" | "3")
  const filteredQuestionsWithOriginalIndex = rawQuestions.map((q, origIdx) => ({ q, origIdx })).filter(item => {
    if (currentAdminPhaseFilter === "all") return true;
    const qPhase = item.q.phase ? String(item.q.phase) : "all";
    return qPhase === currentAdminPhaseFilter || qPhase === "all";
  });

  if (countLabel) {
    const phaseLabel = currentAdminPhaseFilter === "all" ? "All Phases" : `Phase ${currentAdminPhaseFilter}`;
    countLabel.innerText = `${currentAdminCategoryFilter} Repository • ${phaseLabel} (${filteredQuestionsWithOriginalIndex.length} of ${rawQuestions.length} Questions)`;
  }

  if (filteredQuestionsWithOriginalIndex.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #64748b;">
        <p style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">No questions match this phase filter.</p>
        <p style="font-size: 0.85rem;">Click "+ Add New Question" above to add questions for this phase or switch back to "🌟 All Phases".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredQuestionsWithOriginalIndex.map(({ q, origIdx }, displayIdx) => {
    const qPhase = q.phase ? String(q.phase) : "all";
    let phaseBadgeHtml = '';
    if (qPhase === '1') {
      phaseBadgeHtml = `<span class="admin-phase-tag-badge phase-1">🎯 Phase 1</span>`;
    } else if (qPhase === '2') {
      phaseBadgeHtml = `<span class="admin-phase-tag-badge phase-2">⚡ Phase 2</span>`;
    } else if (qPhase === '3') {
      phaseBadgeHtml = `<span class="admin-phase-tag-badge phase-3">🏆 Phase 3</span>`;
    } else {
      phaseBadgeHtml = `<span class="admin-phase-tag-badge phase-all">🌟 All Phases</span>`;
    }

    return `
    <div class="admin-q-card">
      <div class="admin-q-top-info">
        <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; font-weight: 900; color: var(--cyan);">#${displayIdx + 1}</span>
          ${phaseBadgeHtml}
          ${q.mediaLabel ? `<span style="font-size: 0.72rem; font-weight: 800; background: rgba(0, 240, 255, 0.12); color: var(--cyan); padding: 0.15rem 0.5rem; border-radius: 6px;">${q.mediaLabel}</span>` : ''}
          ${q.type ? `<span style="font-size: 0.72rem; font-weight: 800; background: rgba(255, 196, 0, 0.15); color: #ffc400; padding: 0.15rem 0.5rem; border-radius: 6px; text-transform: uppercase;">${q.type}</span>` : ''}
          <span style="font-size: 0.76rem; color: #94a3b8;">⏱ ${q.time || 30}s</span>
        </div>
        <div>
          <button class="action-btn-clean btn-micro-edit" onclick="deleteAdminQuestion(${origIdx})" style="color: var(--rose); border-color: rgba(255, 51, 102, 0.3);">
            Delete
          </button>
        </div>
      </div>

      <div class="admin-q-text">${q.text}</div>

      ${q.mediaSrc ? `
        <div style="font-size: 0.78rem; color: #94a3b8; background: rgba(0,0,0,0.3); padding: 0.4rem 0.7rem; border-radius: 8px;">
          <strong>Media Asset:</strong> <span style="color: var(--cyan);">${q.mediaSrc}</span>
          ${q.audioTitle ? ` | <em>${q.audioTitle}</em>` : ''}
        </div>
      ` : ''}

      ${q.correctSequence ? `
        <div style="margin: 0.6rem 0; padding: 0.5rem 0.8rem; background: rgba(168, 85, 247, 0.12); border: 1px solid rgba(168, 85, 247, 0.4); border-radius: 8px; font-size: 0.82rem; color: #e9d5ff; display: flex; align-items: center; gap: 0.6rem;">
          <strong style="color: #c084fc;">🔢 Correct Sequence:</strong>
          <span style="font-family: 'JetBrains Mono', monospace; font-weight: 900; color: #fff; background: rgba(0,0,0,0.4); padding: 0.15rem 0.6rem; border-radius: 5px;">
            ${q.correctSequence.join(' ➔ ')}
          </span>
        </div>
      ` : ''}

      <div class="admin-q-options-list">
        ${q.options.map((opt, oIdx) => {
          const isSeqWinner = q.correctSequence ? true : (opt.key === q.correct);
          const seqRank = q.correctSequence ? (q.correctSequence.indexOf(String(opt.key)) + 1) : null;
          return `
            <div class="admin-q-opt-item ${(!q.correctSequence && opt.key === q.correct) ? 'is-correct' : ''}">
              <strong style="color: #00f0ff;">${opt.key || (oIdx + 1)}.</strong>
              <span>${opt.text}</span>
              ${seqRank ? `<span style="margin-left: auto; font-size: 0.72rem; font-weight: 900; background: rgba(168,85,247,0.25); color: #c084fc; padding: 0.1rem 0.45rem; border-radius: 4px;">Rank #${seqRank} in Sequence</span>` : ''}
              ${(!q.correctSequence && opt.key === q.correct) ? '<span style="margin-left: auto; font-size: 0.7rem; font-weight: 900;">✓ WINNER</span>' : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
    `;
  }).join('');
}

// Randomize question sequence for stage broadcast
function shuffleCurrentQuestions() {
  const currentList = quizRoundsQuestions[currentAdminCategoryFilter];
  if (!currentList || currentList.length <= 1) {
    alert("Please add at least 2 questions to randomize.");
    return;
  }

  // Fisher-Yates modern shuffle algorithm
  for (let i = currentList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentList[i], currentList[j]] = [currentList[j], currentList[i]];
  }

  renderAdminQuestionsList();
  alert(`🔀 ${currentAdminCategoryFilter} question bank successfully randomized! The stage will present any random sequence during the live quiz.`);
}

// Question Modal Management
function openAddQuestionModal() {
  document.getElementById('modal-q-round-select').value = currentAdminCategoryFilter;
  const phaseSelect = document.getElementById('modal-q-phase-select');
  if (phaseSelect) {
    phaseSelect.value = (currentAdminPhaseFilter && currentAdminPhaseFilter !== 'all') ? currentAdminPhaseFilter : 'all';
  }
  document.getElementById('modal-q-timer-input').value = 30;
  document.getElementById('modal-q-text-input').value = '';
  document.getElementById('modal-opt-a').value = '';
  document.getElementById('modal-opt-b').value = '';
  document.getElementById('modal-opt-c').value = '';
  document.getElementById('modal-opt-d').value = '';
  document.getElementById('modal-q-media-src').value = '';
  document.getElementById('modal-q-media-label').value = '';
  document.getElementById('modal-q-audio-title').value = '';
  const fileInput = document.getElementById('modal-q-file-input');
  if (fileInput) fileInput.value = '';
  const previewContainer = document.getElementById('modal-media-preview-container');
  if (previewContainer) previewContainer.style.display = 'none';

  updateMediaInputAcceptance();
  toggleMediaFieldsVisibility();

  document.getElementById('admin-add-question-modal')?.classList.add('modal-open');
}

function closeAddQuestionModal() {
  document.getElementById('admin-add-question-modal')?.classList.remove('modal-open');
}

function toggleMediaFieldsVisibility() {
  const round = document.getElementById('modal-q-round-select')?.value;
  const mediaZone = document.getElementById('modal-media-fields-zone');
  const standardCorrectZone = document.getElementById('modal-standard-correct-zone');
  const sequenceCorrectZone = document.getElementById('modal-sequence-correct-zone');
  const phaseSelect = document.getElementById('modal-q-phase-select');

  // Exact Tournament Phase Mapping:
  // Phase 1: Media Round, Buzzer
  // Phase 2: MCQ, Media Round, Buzzer, Rapid Fire
  // Phase 3: Sequence, Media Round, Buzzer, Visual Rapid Fire
  // Tie Breaker: Sudden-Death Buzzer Showdown (All Phases)
  if (phaseSelect) {
    if (round === "MCQ") {
      phaseSelect.innerHTML = `<option value="2" selected>Phase 2: Semi Final (Only)</option>`;
    } else if (round === "Sequence") {
      phaseSelect.innerHTML = `<option value="3" selected>Phase 3: Grand Final (Only)</option>`;
    } else if (round === "Rapid Fire") {
      phaseSelect.innerHTML = `<option value="2" selected>Phase 2: Semi Final (Only)</option>`;
    } else if (round === "Visual Rapid Fire") {
      phaseSelect.innerHTML = `<option value="3" selected>Phase 3: Grand Final (Only)</option>`;
    } else if (round === "Buzzer") {
      phaseSelect.innerHTML = `
        <option value="all">🌟 All Phases (Shared Buzzer Pool)</option>
        <option value="1">Phase 1: League Round</option>
        <option value="2">Phase 2: Semi Final</option>
        <option value="3">Phase 3: Grand Final</option>
      `;
    } else if (round === "Media Round") {
      phaseSelect.innerHTML = `
        <option value="all">🌟 All Phases (Shared Media Pool)</option>
        <option value="1">Phase 1: League Round</option>
        <option value="2">Phase 2: Semi Final</option>
        <option value="3">Phase 3: Grand Final</option>
      `;
    } else if (round === "Tie Breaker") {
      phaseSelect.innerHTML = `
        <option value="all" selected>⚡ Standalone Sudden-Death Pool (Used Whenever Tie Occurs)</option>
      `;
    } else {
      phaseSelect.innerHTML = `
        <option value="all">🌟 All Phases (Shared Pool)</option>
        <option value="1">Phase 1: League</option>
        <option value="2">Phase 2: Semi Final</option>
        <option value="3">Phase 3: Grand Final</option>
      `;
    }
  }

  if (mediaZone) {
    if (round === "Media Round" || round === "Visual Rapid Fire") {
      mediaZone.style.display = "block";
      updateMediaInputAcceptance();
    } else {
      mediaZone.style.display = "none";
    }
  }

  // Switch between Single MCQ Winner radio and Sequence Order Selectors
  if (round === "Sequence") {
    if (standardCorrectZone) standardCorrectZone.style.display = "none";
    if (sequenceCorrectZone) sequenceCorrectZone.style.display = "block";
  } else {
    if (standardCorrectZone) standardCorrectZone.style.display = "flex";
    if (sequenceCorrectZone) sequenceCorrectZone.style.display = "none";
  }
}

// Adjust file input accept attribute based on selected media type
function updateMediaInputAcceptance() {
  const type = document.getElementById('modal-q-media-type')?.value || 'image';
  const fileInput = document.getElementById('modal-q-file-input');
  if (!fileInput) return;

  if (type === 'image') {
    fileInput.accept = 'image/*';
  } else if (type === 'audio') {
    fileInput.accept = 'audio/*';
  } else if (type === 'video') {
    fileInput.accept = 'video/*';
  }
}

// Handle file uploaded directly from user device via Firebase Storage or FileReader fallback
async function handleAdminMediaFileUpload(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const type = document.getElementById('modal-q-media-type')?.value || 'image';
  const progressWrap = document.getElementById('modal-q-upload-progress-wrap');
  const progressBar = document.getElementById('modal-q-upload-progress-bar');
  const pctLabel = document.getElementById('modal-q-upload-pct-label');
  const statusLabel = document.getElementById('modal-q-upload-status-label');

  // If Firebase Storage is ready, upload directly to cloud storage
  if (window.quizFirebaseService && window.quizFirebaseService.isReady()) {
    try {
      if (progressWrap) {
        progressWrap.style.display = 'block';
        if (progressBar) progressBar.style.width = '0%';
        if (pctLabel) pctLabel.innerText = '0%';
        if (statusLabel) statusLabel.innerText = '☁️ Uploading asset to Firebase Storage...';
      }

      const downloadUrl = await window.quizFirebaseService.uploadMedia(file, (pct) => {
        if (progressBar) progressBar.style.width = `${pct}%`;
        if (pctLabel) pctLabel.innerText = `${pct}%`;
      });

      const srcInput = document.getElementById('modal-q-media-src');
      if (srcInput) {
        srcInput.value = downloadUrl;
      }
      if (statusLabel) statusLabel.innerText = '✓ Uploaded to Firebase Storage!';
      renderMediaPreviewInModal(type, downloadUrl, file.name);
      return;
    } catch (err) {
      console.warn("Firebase upload failed, falling back to local FileReader:", err);
      if (statusLabel) statusLabel.innerText = '⚠️ Cloud upload failed, using local fallback';
    }
  }

  // Fallback to local DataURL (Base64)
  const reader = new FileReader();
  reader.onload = function(event) {
    const dataUrl = event.target.result;
    const srcInput = document.getElementById('modal-q-media-src');
    if (srcInput) {
      srcInput.value = dataUrl;
    }
    renderMediaPreviewInModal(type, dataUrl, file.name);
  };
  reader.readAsDataURL(file);
}

// Render instant preview inside the modal
function renderMediaPreviewInModal(type, src, fileName) {
  const container = document.getElementById('modal-media-preview-container');
  const display = document.getElementById('modal-media-preview-display');
  if (!container || !display) return;

  container.style.display = 'block';

  if (type === 'image') {
    display.innerHTML = `<img src="${src}" alt="Preview" style="max-height: 110px; max-width: 100%; border-radius: 8px; object-fit: contain; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">`;
  } else if (type === 'audio') {
    display.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; width: 100%;">
        <span style="font-size: 0.78rem; color: var(--cyan); font-weight: 700;">🎵 ${fileName || 'Selected Audio File'}</span>
        <audio controls src="${src}" style="height: 32px; width: 90%;"></audio>
      </div>
    `;
  } else if (type === 'video') {
    display.innerHTML = `<video controls src="${src}" style="max-height: 110px; max-width: 100%; border-radius: 8px;"></video>`;
  }
}

// Save New Question from Modal (Synced with Cloud Firestore)
async function saveAdminQuestion() {
  const round = document.getElementById('modal-q-round-select').value;
  const phase = document.getElementById('modal-q-phase-select')?.value || 'all';
  const time = parseInt(document.getElementById('modal-q-timer-input').value, 10) || 30;
  const text = (document.getElementById('modal-q-text-input').value || "").trim();
  const optA = (document.getElementById('modal-opt-a').value || "").trim();
  const optB = (document.getElementById('modal-opt-b').value || "").trim();
  const optC = (document.getElementById('modal-opt-c').value || "").trim();
  const optD = (document.getElementById('modal-opt-d').value || "").trim();
  const correct = document.querySelector('input[name="correct-opt-radio"]:checked')?.value || 'A';

  if (!text || !optA || !optB || !optC || !optD) {
    alert("Please fill in the Question Text and all 4 Options.");
    return;
  }

  const newQuestion = {
    text: text,
    time: time,
    phase: phase, // "1" | "2" | "3" | "all"
    options: [
      { key: "A", text: optA },
      { key: "B", text: optB },
      { key: "C", text: optC },
      { key: "D", text: optD }
    ],
    correct: correct
  };

  if (round === "Sequence") {
    const pos1 = document.getElementById('modal-seq-pos-1')?.value || "1";
    const pos2 = document.getElementById('modal-seq-pos-2')?.value || "2";
    const pos3 = document.getElementById('modal-seq-pos-3')?.value || "3";
    const pos4 = document.getElementById('modal-seq-pos-4')?.value || "4";

    const seqArr = [pos1, pos2, pos3, pos4];
    // Check if duplicate positions chosen
    const uniquePositions = new Set(seqArr);
    if (uniquePositions.size !== 4) {
      alert("Please choose each option (1, 2, 3, 4) exactly once in the sequence order!");
      return;
    }

    newQuestion.options = [
      { key: "1", text: optA },
      { key: "2", text: optB },
      { key: "3", text: optC },
      { key: "4", text: optD }
    ];
    newQuestion.correctSequence = seqArr;
    newQuestion.correct = pos1; // Fallback
  }

  // Add media properties for image/audio/video clues across rounds
  const mediaType = document.getElementById('modal-q-media-type')?.value || 'image';
  const mediaSrc = (document.getElementById('modal-q-media-src')?.value || "").trim();
  const mediaLabel = (document.getElementById('modal-q-media-label')?.value || "").trim();
  const audioTitle = (document.getElementById('modal-q-audio-title')?.value || "").trim();

  if (mediaSrc) {
    newQuestion.type = mediaType;
    newQuestion.mediaSrc = mediaSrc;
    if (mediaLabel) newQuestion.mediaLabel = mediaLabel;
    if (audioTitle) newQuestion.audioTitle = audioTitle;
  }

  if (!quizRoundsQuestions[round]) {
    quizRoundsQuestions[round] = [];
  }

  // Save to Firebase Firestore if connected
  if (window.quizFirebaseService && window.quizFirebaseService.isReady()) {
    try {
      const docId = await window.quizFirebaseService.saveQuestion(round, newQuestion);
      if (docId) newQuestion.id = docId;
    } catch (fbErr) {
      console.warn("Could not save to Firebase, saved locally:", fbErr);
    }
  }

  // Add to question repository
  quizRoundsQuestions[round].push(newQuestion);
  saveTournamentStateToStorage();

  closeAddQuestionModal();
  currentAdminCategoryFilter = round;
  renderAdminPortalView();
  const phaseNotice = phase === 'all' ? 'All Phases' : `Phase ${phase}`;
  alert(`✓ Question successfully saved to ${round} repository for ${phaseNotice}!`);
}

// Delete Question (Synced with Cloud Firestore)
async function deleteAdminQuestion(index) {
  if (confirm("Are you sure you want to delete this question from the repository?")) {
    const list = quizRoundsQuestions[currentAdminCategoryFilter];
    const qToDelete = list ? list[index] : null;

    if (list) {
      list.splice(index, 1);
    }
    saveTournamentStateToStorage();

    // Delete from Firebase Firestore if connected
    if (qToDelete && window.quizFirebaseService && window.quizFirebaseService.isReady()) {
      try {
        await window.quizFirebaseService.deleteQuestion(currentAdminCategoryFilter, qToDelete.text, qToDelete.id);
      } catch (fbErr) {
        console.warn("Could not delete from Firebase:", fbErr);
      }
    }

    renderAdminPortalView();
  }
}

/* ==============================================================================
   8. BULK PDF QUESTION EXTRACTOR & IMPORTER
   ============================================================================== */
let parsedPdfQuestionsStaging = [];

function updateBulkPdfPhaseOptions() {
  const round = document.getElementById('bulk-target-round-select')?.value;
  const phaseSelect = document.getElementById('bulk-target-phase-select');
  if (!phaseSelect) return;

  if (round === "MCQ") {
    phaseSelect.innerHTML = `<option value="2" selected>Phase 2: Semi Final (Only)</option>`;
  } else if (round === "Sequence") {
    phaseSelect.innerHTML = `<option value="3" selected>Phase 3: Grand Final (Only)</option>`;
  } else if (round === "Rapid Fire") {
    phaseSelect.innerHTML = `<option value="2" selected>Phase 2: Semi Final (Only)</option>`;
  } else if (round === "Visual Rapid Fire") {
    phaseSelect.innerHTML = `<option value="3" selected>Phase 3: Grand Final (Only)</option>`;
  } else if (round === "Tie Breaker") {
    phaseSelect.innerHTML = `<option value="all" selected>⚡ Standalone Sudden-Death Pool</option>`;
  } else if (round === "Buzzer" || round === "Media Round") {
    phaseSelect.innerHTML = `
      <option value="all" selected>🌟 All Phases (Shared Pool)</option>
      <option value="1">Phase 1: League Round</option>
      <option value="2">Phase 2: Semi Final</option>
      <option value="3">Phase 3: Grand Final</option>
    `;
  }
}

function updateBulkExcelPhaseOptions() {
  const round = document.getElementById('bulk-excel-target-round-select')?.value;
  const phaseSelect = document.getElementById('bulk-excel-target-phase-select');
  if (!phaseSelect) return;

  if (round === "MCQ") {
    phaseSelect.innerHTML = `<option value="2" selected>Phase 2: Semi Final (Only)</option>`;
  } else if (round === "Sequence") {
    phaseSelect.innerHTML = `<option value="3" selected>Phase 3: Grand Final (Only)</option>`;
  } else if (round === "Rapid Fire") {
    phaseSelect.innerHTML = `<option value="2" selected>Phase 2: Semi Final (Only)</option>`;
  } else if (round === "Visual Rapid Fire") {
    phaseSelect.innerHTML = `<option value="3" selected>Phase 3: Grand Final (Only)</option>`;
  } else if (round === "Tie Breaker") {
    phaseSelect.innerHTML = `<option value="all" selected>⚡ Standalone Sudden-Death Pool</option>`;
  } else if (round === "Buzzer" || round === "Media Round") {
    phaseSelect.innerHTML = `
      <option value="all" selected>🌟 All Phases (Shared Pool)</option>
      <option value="1">Phase 1: League Round</option>
      <option value="2">Phase 2: Semi Final</option>
      <option value="3">Phase 3: Grand Final</option>
    `;
  }
}

function openBulkPdfModal() {
  parsedPdfQuestionsStaging = [];
  document.getElementById('bulk-target-round-select').value = currentAdminCategoryFilter || 'MCQ';
  updateBulkPdfPhaseOptions();
  document.getElementById('bulk-timer-input').value = 30;
  document.getElementById('pdf-file-picker').value = '';
  document.getElementById('pdf-drop-label').innerText = 'Click or Drag & Drop Question Sheet PDF Here';
  document.getElementById('pdf-parsing-status-box').style.display = 'none';
  document.getElementById('pdf-parsed-preview-list').style.display = 'none';
  document.getElementById('pdf-parsed-preview-list').innerHTML = '';

  const confirmBtn = document.getElementById('btn-confirm-pdf-import');
  if (confirmBtn) {
    confirmBtn.disabled = true;
    confirmBtn.style.opacity = '0.4';
    confirmBtn.style.cursor = 'not-allowed';
  }

  document.getElementById('bulk-pdf-modal')?.classList.add('modal-open');
}

function closeBulkPdfModal() {
  document.getElementById('bulk-pdf-modal')?.classList.remove('modal-open');
}

// Handle PDF file selection & extraction
async function handleBulkPdfFileSelected(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const dropLabel = document.getElementById('pdf-drop-label');
  if (dropLabel) dropLabel.innerText = `📄 Processing: ${file.name}`;

  const statusBox = document.getElementById('pdf-parsing-status-box');
  const statusText = document.getElementById('pdf-parse-status-text');
  const countBadge = document.getElementById('pdf-detected-count');

  if (statusBox) statusBox.style.display = 'block';
  if (statusText) statusText.innerText = 'Extracting and parsing text from PDF pages...';
  if (countBadge) countBadge.innerText = 'Reading...';

  try {
    const arrayBuffer = await file.arrayBuffer();
    const rawText = await extractTextFromPDF(arrayBuffer);
    
    // Parse questions from extracted raw text
    parsedPdfQuestionsStaging = parseRawTextToQuestions(rawText);

    if (parsedPdfQuestionsStaging.length === 0) {
      if (statusText) statusText.innerText = '⚠️ No structured MCQ questions found in this PDF.';
      if (countBadge) countBadge.innerText = '0 Questions';
      return;
    }

    if (statusText) statusText.innerText = `✓ Successfully extracted questions from ${file.name}`;
    if (countBadge) countBadge.innerText = `${parsedPdfQuestionsStaging.length} Questions Ready`;

    renderParsedPdfQuestionsPreview(parsedPdfQuestionsStaging);

    const confirmBtn = document.getElementById('btn-confirm-pdf-import');
    if (confirmBtn) {
      confirmBtn.disabled = false;
      confirmBtn.style.opacity = '1';
      confirmBtn.style.cursor = 'pointer';
    }
  } catch (err) {
    console.error('PDF extraction failed:', err);
    if (statusText) statusText.innerText = 'Error parsing PDF. Please verify PDF is readable.';
  }
}

// Client-side text extraction across all PDF pages using pdfjsLib
async function extractTextFromPDF(arrayBuffer) {
  if (!window.pdfjsLib) {
    throw new Error('PDF.js library not loaded');
  }

  const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let fullText = '';

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const content = await page.getTextContent();
    const pageText = content.items.map(item => item.str).join(' ');
    fullText += pageText + '\n\n';
  }

  return fullText;
}

// Intelligent Question & MCQ Option Parser
function parseRawTextToQuestions(rawText) {
  const extracted = [];
  
  // Normalize whitespace & line breaks
  const clean = rawText
    .replace(/\r\n/g, '\n')
    .replace(/\s+/g, ' ')
    .trim();

  // Pattern matches questions starting with (Q1., Question 1, 1., 1)) followed by options
  // e.g., "1. Which city is the capital? (A) Mumbai (B) Delhi (C) Pune (D) Nagpur Answer: B"
  const qSplits = clean.split(/(?:Q\s*\.?\s*\d+[\.\:\)]|\b\d+[\.\)])\s+/i);

  qSplits.forEach((chunk, idx) => {
    if (!chunk || chunk.trim().length < 15) return;

    // Detect options A, B, C, D
    const optRegex = /(?:\(?([A-D])\)|\b([A-D])[\.\:\)])\s+([^A-D\(\n\r]+?)(?=(?:\(?[A-D]\)|\b[A-D][\.\:\)]|\bAns(?:wer)?[\:\s]+|$))/gi;
    let match;
    const optionsFound = [];
    let questionText = chunk;

    // Find the first option position to isolate question text
    const firstOptIdx = chunk.search(/(?:\(?[A-D]\)|\b[A-D][\.\:\)])\s+/i);
    if (firstOptIdx > -1) {
      questionText = chunk.substring(0, firstOptIdx).trim();
    }

    // Extract options
    const optionsSection = chunk.substring(firstOptIdx > -1 ? firstOptIdx : 0);
    while ((match = optRegex.exec(optionsSection)) !== null) {
      const key = (match[1] || match[2]).toUpperCase();
      const val = (match[3] || '').trim();
      if (val) {
        optionsFound.push({ key, text: val });
      }
    }

    // Detect correct answer key if specified (e.g. "Ans: B" or "Answer: B")
    let detectedCorrect = 'A';
    const ansMatch = chunk.match(/(?:Ans(?:wer)?|Correct)[\:\s]+([A-D])/i);
    if (ansMatch) {
      detectedCorrect = ansMatch[1].toUpperCase();
    }

    // Require at least 2 options to constitute a valid quiz question
    if (optionsFound.length >= 2 && questionText.length > 5) {
      // Ensure all 4 options exist, filling missing defaults if necessary
      const keys = ['A', 'B', 'C', 'D'];
      const normalizedOpts = keys.map(k => {
        const existing = optionsFound.find(o => o.key === k);
        return existing || { key: k, text: `Option ${k}` };
      });

      extracted.push({
        text: questionText,
        options: normalizedOpts,
        correct: detectedCorrect,
        time: parseInt(document.getElementById('bulk-timer-input')?.value || 30, 10)
      });
    }
  });

  return extracted;
}

// Render Preview List in Modal
function renderParsedPdfQuestionsPreview(questions) {
  const container = document.getElementById('pdf-parsed-preview-list');
  if (!container) return;

  container.style.display = 'flex';
  container.innerHTML = questions.map((q, idx) => `
    <div class="pdf-preview-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
        <span class="pdf-preview-q-title">#${idx + 1}. ${q.text}</span>
        <span style="font-size: 0.72rem; font-weight: 800; background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 0.15rem 0.5rem; border-radius: 6px; flex-shrink: 0;">
          Ans: ${q.correct}
        </span>
      </div>
      <div class="pdf-preview-opts">
        ${q.options.map(opt => `
          <div style="color: ${opt.key === q.correct ? '#34d399' : '#94a3b8'};">
            <strong>${opt.key}.</strong> ${opt.text}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Confirm and bulk insert all parsed questions into repository
function confirmBulkPdfImport() {
  if (!parsedPdfQuestionsStaging || parsedPdfQuestionsStaging.length === 0) return;

  const targetRound = document.getElementById('bulk-target-round-select').value;
  const targetPhase = document.getElementById('bulk-target-phase-select')?.value || 'all';
  const defaultTimer = parseInt(document.getElementById('bulk-timer-input').value, 10) || 30;

  if (!quizRoundsQuestions[targetRound]) {
    quizRoundsQuestions[targetRound] = [];
  }

  // Assign user-chosen timer & phase & push into selected round repository
  parsedPdfQuestionsStaging.forEach(q => {
    q.time = defaultTimer;
    q.phase = targetPhase;
    quizRoundsQuestions[targetRound].push(q);
  });

  const count = parsedPdfQuestionsStaging.length;
  saveTournamentStateToStorage();
  closeBulkPdfModal();

  // Refresh admin UI to show newly imported questions
  currentAdminCategoryFilter = targetRound;
  if (targetPhase !== 'all') currentAdminPhaseFilter = targetPhase;
  renderAdminPortalView();

  const phaseNotice = targetPhase === 'all' ? 'All Phases' : `Phase ${targetPhase}`;
  alert(`✓ Bulk Import Complete! Successfully imported ${count} questions into the ${targetRound} repository for ${phaseNotice}.`);
}

/* ==============================================================================
   8.5 BULK EXCEL (XLSX / XLS / CSV) QUESTION EXTRACTOR & IMPORTER
   Supports Questions, 4 Options (A, B, C, D), and Answer Key in Urdu & English
   ============================================================================== */
let parsedExcelQuestionsStaging = [];

function openBulkExcelModal() {
  parsedExcelQuestionsStaging = [];
  const roundSelect = document.getElementById('bulk-excel-target-round-select');
  if (roundSelect) roundSelect.value = currentAdminCategoryFilter || 'MCQ';
  updateBulkExcelPhaseOptions();
  const timerInput = document.getElementById('bulk-excel-timer-input');
  if (timerInput) timerInput.value = 30;
  const fileInput = document.getElementById('excel-file-picker');
  if (fileInput) fileInput.value = '';
  const dropLabel = document.getElementById('excel-drop-label');
  if (dropLabel) dropLabel.innerText = 'Click or Drag & Drop Excel File (.xlsx, .xls, .csv) Here';
  
  const statusBox = document.getElementById('excel-parsing-status-box');
  if (statusBox) statusBox.style.display = 'none';
  const previewList = document.getElementById('excel-parsed-preview-list');
  if (previewList) {
    previewList.style.display = 'none';
    previewList.innerHTML = '';
  }

  const confirmBtn = document.getElementById('btn-confirm-excel-import');
  if (confirmBtn) {
    confirmBtn.disabled = true;
    confirmBtn.style.opacity = '0.4';
    confirmBtn.style.cursor = 'not-allowed';
  }

  document.getElementById('bulk-excel-modal')?.classList.add('modal-open');
}

function closeBulkExcelModal() {
  document.getElementById('bulk-excel-modal')?.classList.remove('modal-open');
}

// Handle Excel file selection & extraction via SheetJS
async function handleBulkExcelFileSelected(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const dropLabel = document.getElementById('excel-drop-label');
  if (dropLabel) dropLabel.innerText = `📊 Processing: ${file.name}`;

  const statusBox = document.getElementById('excel-parsing-status-box');
  const statusText = document.getElementById('excel-parse-status-text');
  const countBadge = document.getElementById('excel-detected-count');

  if (statusBox) statusBox.style.display = 'block';
  if (statusText) statusText.innerText = 'Reading spreadsheet columns and questions...';
  if (countBadge) countBadge.innerText = 'Reading...';

  try {
    if (!window.XLSX) {
      throw new Error('XLSX spreadsheet library not loaded yet');
    }

    const data = await file.arrayBuffer();
    const workbook = window.XLSX.read(data, { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const rawRows = window.XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });

    if (!rawRows || rawRows.length < 2) {
      if (statusText) statusText.innerText = '⚠️ Excel file appears empty or missing rows.';
      if (countBadge) countBadge.innerText = '0 Questions';
      return;
    }

    parsedExcelQuestionsStaging = parseExcelRowsToQuestions(rawRows);

    if (parsedExcelQuestionsStaging.length === 0) {
      if (statusText) statusText.innerText = '⚠️ No valid question rows found. Please ensure headers: Question, Option A, Option B, Option C, Option D, Answer.';
      if (countBadge) countBadge.innerText = '0 Questions';
      return;
    }

    if (statusText) statusText.innerText = `✓ Successfully extracted questions from ${file.name}`;
    if (countBadge) countBadge.innerText = `${parsedExcelQuestionsStaging.length} Questions Ready`;

    renderParsedExcelQuestionsPreview(parsedExcelQuestionsStaging);

    const confirmBtn = document.getElementById('btn-confirm-excel-import');
    if (confirmBtn) {
      confirmBtn.disabled = false;
      confirmBtn.style.opacity = '1';
      confirmBtn.style.cursor = 'pointer';
    }
  } catch (err) {
    console.error('Excel extraction failed:', err);
    if (statusText) statusText.innerText = 'Error parsing Excel sheet: ' + (err.message || 'Check file format');
  }
}

// Robust Column-Matching Parser for Excel Rows
function parseExcelRowsToQuestions(rows) {
  if (rows.length < 2) return [];

  const headers = rows[0].map(h => String(h || '').trim().toLowerCase());
  
  // Find column indices by flexible English or Urdu names
  const findCol = (candidates) => {
    return headers.findIndex(h => candidates.some(c => h.includes(c)));
  };

  let qIdx = findCol(['question', 'सवाल', 'سوال', 'q text', 'prompt']);
  let aIdx = findCol(['option a', 'opt a', 'a', 'اختیار a', 'الف']);
  let bIdx = findCol(['option b', 'opt b', 'b', 'اختیار b', 'بے', 'ب']);
  let cIdx = findCol(['option c', 'opt c', 'c', 'اختیار c', 'جیم', 'ج']);
  let dIdx = findCol(['option d', 'opt d', 'd', 'اختیار d', 'دال', 'د']);
  let ansIdx = findCol(['answer', 'correct', 'key', 'جواب', 'صحیح']);

  // Fallback defaults if first row was simple 0..5
  if (qIdx === -1) qIdx = 0;
  if (aIdx === -1) aIdx = 1;
  if (bIdx === -1) bIdx = 2;
  if (cIdx === -1) cIdx = 3;
  if (dIdx === -1) dIdx = 4;
  if (ansIdx === -1) ansIdx = 5;

  const timerVal = parseInt(document.getElementById('bulk-excel-timer-input')?.value || 30, 10);
  const questions = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (!row || row.length === 0) continue;

    const qText = String(row[qIdx] || '').trim();
    const optA = String(row[aIdx] || '').trim();
    const optB = String(row[bIdx] || '').trim();
    const optC = String(row[cIdx] || '').trim();
    const optD = String(row[dIdx] || '').trim();
    const rawAns = String(row[ansIdx] || '').trim();

    if (!qText || (!optA && !optB)) continue;

    // Detect Correct Key: could be "A", "B", "C", "D" or match option text
    let correctKey = 'A';
    const upperAns = rawAns.toUpperCase();
    if (['A', 'B', 'C', 'D'].includes(upperAns)) {
      correctKey = upperAns;
    } else if (rawAns === optA) {
      correctKey = 'A';
    } else if (rawAns === optB) {
      correctKey = 'B';
    } else if (rawAns === optC) {
      correctKey = 'C';
    } else if (rawAns === optD) {
      correctKey = 'D';
    }

    questions.push({
      text: qText,
      options: [
        { key: 'A', text: optA || 'اختیار A' },
        { key: 'B', text: optB || 'اختیار B' },
        { key: 'C', text: optC || 'اختیار C' },
        { key: 'D', text: optD || 'اختیار D' }
      ],
      correct: correctKey,
      time: timerVal
    });
  }

  return questions;
}

// Render Preview in Excel Modal
function renderParsedExcelQuestionsPreview(questions) {
  const container = document.getElementById('excel-parsed-preview-list');
  if (!container) return;

  container.style.display = 'flex';
  container.innerHTML = questions.map((q, idx) => `
    <div class="pdf-preview-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
        <span class="pdf-preview-q-title" style="font-family: var(--font-urdu), 'Plus Jakarta Sans', sans-serif; font-size: 1.05rem;">
          #${idx + 1}. ${q.text}
        </span>
        <span style="font-size: 0.72rem; font-weight: 800; background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 0.15rem 0.5rem; border-radius: 6px; flex-shrink: 0;">
          Ans: ${q.correct}
        </span>
      </div>
      <div class="pdf-preview-opts" style="font-family: var(--font-urdu), 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem;">
        ${q.options.map(opt => `
          <div style="color: ${opt.key === q.correct ? '#34d399' : '#94a3b8'};">
            <strong>${opt.key}.</strong> ${opt.text}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Confirm and bulk insert all parsed Excel questions into repository
function confirmBulkExcelImport() {
  if (!parsedExcelQuestionsStaging || parsedExcelQuestionsStaging.length === 0) return;

  const targetRound = document.getElementById('bulk-excel-target-round-select').value;
  const targetPhase = document.getElementById('bulk-excel-target-phase-select')?.value || 'all';
  const defaultTimer = parseInt(document.getElementById('bulk-excel-timer-input').value, 10) || 30;

  if (!quizRoundsQuestions[targetRound]) {
    quizRoundsQuestions[targetRound] = [];
  }

  parsedExcelQuestionsStaging.forEach(q => {
    q.time = defaultTimer;
    q.phase = targetPhase;
    quizRoundsQuestions[targetRound].push(q);
  });

  const count = parsedExcelQuestionsStaging.length;
  saveTournamentStateToStorage();
  closeBulkExcelModal();

  currentAdminCategoryFilter = targetRound;
  if (targetPhase !== 'all') currentAdminPhaseFilter = targetPhase;
  renderAdminPortalView();

  const phaseNotice = targetPhase === 'all' ? 'All Phases' : `Phase ${targetPhase}`;
  alert(`✓ Bulk Import Complete! Successfully imported ${count} questions into the ${targetRound} repository for ${phaseNotice}.`);
}

// Download ready-to-use Sample Excel Template
function downloadSampleExcelTemplate() {
  if (!window.XLSX) {
    alert("Excel library loading, please try again in a second.");
    return;
  }

  const sampleData = [
    ["Question", "Option A", "Option B", "Option C", "Option D", "Answer"],
    ["پاکستان کا قومی ترانہ کس نے تحریر کیا؟", "حفیظ جالندھری", "علامہ اقبال", "فیض احمد فیض", "احمد فراز", "A"],
    ["ہندوستان کا دارالحکومت کون سا شہر ہے؟", "ممبئی", "نئی دہلی", "کولکتہ", "چینئی", "B"],
    ["دنیا کا سب سے بڑا سمندر کون سا ہے؟", "بحر الکاہل (Pacific)", "بحر اوقیانوس (Atlantic)", "بحر ہند (Indian)", "بحر منجمد شمالی", "A"],
    ["What is the national flower of India?", "Rose", "Lotus", "Jasmine", "Sunflower", "B"]
  ];

  const ws = window.XLSX.utils.aoa_to_sheet(sampleData);
  const wb = window.XLSX.utils.book_new();
  window.XLSX.utils.book_append_sheet(wb, ws, "Questions");
  window.XLSX.writeFile(wb, "GK_Quiz_Questions_Template.xlsx");
}

// ==============================================================================
// 🎲 LIVE TEAM SHUFFLER & 3-TEAM TRIAD GENERATOR ENGINE
// ==============================================================================
let currentShuffledTriads = [];
let isShufflingInProgress = false;
let isShufflerMandatoryMode = false;

function openTeamShufflerModal(isMandatory = false) {
  const modal = document.getElementById('team-shuffler-modal');
  if (!modal) return;

  isShufflerMandatoryMode = isMandatory;

  const currentPhase = tournamentConfig.phases[currentPhaseIdx];
  const activeTeams = getActivePhaseTeams();

  const titleEl = document.getElementById('shuffler-phase-title');
  const descEl = document.getElementById('shuffler-phase-desc');
  const teamsCountEl = document.getElementById('shuffler-teams-count');
  const groupsCountEl = document.getElementById('shuffler-groups-count');

  const totalGroups = Math.ceil(activeTeams.length / 3);

  if (titleEl) {
    titleEl.innerText = isMandatory 
      ? `Required Setup: ${currentPhase.title} Team Shuffler`
      : `${currentPhase.title}: Team Shuffler & 3-Team Triads`;
  }
  if (descEl) {
    descEl.innerText = isMandatory
      ? `⚠️ Compulsory Shuffle Required! Click "Randomize & Form Groups" below to conduct the 11-second lottery shuffle before Phase 1 rounds can begin.`
      : `Randomly randomize ${activeTeams.length} competing teams into ${totalGroups} balanced groups of 3 teams each.`;
  }
  if (teamsCountEl) teamsCountEl.innerText = `${activeTeams.length} Active Teams`;
  if (groupsCountEl) groupsCountEl.innerText = `${totalGroups} Triad Groups (3 Teams / Group)`;

  // Generate initial groups based on current team assignments
  buildCurrentTriadsFromTeams(activeTeams);
  renderShuffledTriadsStage();

  modal.classList.add('modal-open');
}

function closeTeamShufflerModal() {
  if (isShufflingInProgress) return;
  const modal = document.getElementById('team-shuffler-modal');
  if (modal) modal.classList.remove('modal-open');
}

// Build initial triads from active teams
function buildCurrentTriadsFromTeams(teams) {
  currentShuffledTriads = [];
  const totalGroups = Math.ceil(teams.length / 3);

  for (let g = 0; g < totalGroups; g++) {
    const groupLabel = `Group ${g + 1}`;
    const groupTeams = teams.filter(t => t.group === groupLabel);
    
    // Fallback if groups aren't initialized yet
    if (groupTeams.length === 0) {
      const sliceStart = g * 3;
      const sliceEnd = sliceStart + 3;
      currentShuffledTriads.push({
        groupName: groupLabel,
        teams: teams.slice(sliceStart, sliceEnd)
      });
    } else {
      currentShuffledTriads.push({
        groupName: groupLabel,
        teams: groupTeams
      });
    }
  }
}

// Render 3-Team Triad cards with optional staggered group locking
function renderShuffledTriadsStage(isSlotRolling = false, lockedGroupsThreshold = 0) {
  const container = document.getElementById('shuffled-triads-display-grid');
  if (!container) return;

  container.innerHTML = currentShuffledTriads.map((triad, gIdx) => {
    // If gIdx is below lockedGroupsThreshold, this group has already locked in!
    const isGroupLocked = !isSlotRolling || (gIdx < lockedGroupsThreshold);

    return `
      <div class="triad-group-card ${isGroupLocked ? 'triad-glow-assigned' : ''}">
        <div class="triad-card-header">
          <span class="triad-badge-title">${triad.groupName}</span>
          <span style="font-size: 0.72rem; font-weight: 800; background: ${isGroupLocked ? 'rgba(16, 185, 129, 0.2)' : 'rgba(0, 240, 255, 0.12)'}; color: ${isGroupLocked ? '#10b981' : 'var(--cyan)'}; padding: 0.15rem 0.5rem; border-radius: 9999px;">
            ${isGroupLocked ? '✓ LOCKED' : 'ROLLING...'}
          </span>
        </div>

        <div class="triad-teams-list">
          ${[0, 1, 2].map(slotIdx => {
            const team = triad.teams[slotIdx];
            if (!team) {
              return `
                <div class="triad-team-slot" style="opacity: 0.4;">
                  <span class="slot-index-pill">${slotIdx + 1}</span>
                  <span class="slot-team-name" style="font-style: italic; color: #64748b;">(Empty Slot)</span>
                </div>
              `;
            }

            const codeTag = team.code || `T${team.id}`;
            const teamName = team.name && team.name.trim() !== '' ? team.name : `Slot ${team.id} (Unassigned)`;
            const currentScore = getTeamCurrentScore(team);

            return `
              <div class="triad-team-slot ${!isGroupLocked ? 'slot-shuffling' : 'slot-locked-in'}">
                <span class="slot-index-pill">${slotIdx + 1}</span>
                <span style="background: rgba(0,240,255,0.18); border: 1px solid rgba(0,240,255,0.4); color: #00f0ff; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 900; padding: 0.1rem 0.35rem; border-radius: 4px; margin-right: 0.35rem; flex-shrink: 0;">${codeTag}</span>
                <span class="slot-team-name">${teamName}</span>
                <span class="slot-score-tag">${currentScore} PTS</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Live Lottery Sound Loop & Animation Engine
// Live Lottery Sound Loop & Animation Engine - 11 Seconds Broadcast Suspense
function startLiveTeamShuffle() {
  if (isShufflingInProgress) return;
  isShufflingInProgress = true;

  const btn = document.getElementById('btn-start-live-shuffle');
  const btnLabel = document.getElementById('shuffle-btn-label');
  const btnIcon = document.getElementById('shuffle-btn-icon');
  const saveBtn = document.getElementById('btn-apply-triad-groups');
  const countdownBadge = document.getElementById('shuffler-countdown-badge');
  const countdownTimer = document.getElementById('shuffler-countdown-timer');
  const progressBar = document.getElementById('shuffler-progress-bar');

  if (btn) btn.classList.add('shuffling-active');
  if (btnIcon) btnIcon.innerText = '🔄';
  if (countdownBadge) countdownBadge.style.display = 'inline-flex';
  if (countdownTimer) countdownTimer.innerText = '11s';
  if (progressBar) progressBar.style.width = '0%';

  if (saveBtn) {
    saveBtn.disabled = true;
    saveBtn.style.opacity = '0.4';
  }

  const activeTeams = getActivePhaseTeams();
  const totalGroups = Math.ceil(activeTeams.length / 3);

  const totalShuffleDurationMs = 11000; // Exactly 11 Seconds
  const startTime = Date.now();

  // Play initial grand cinematic suspense tension drone & heartbeat
  playQuizTone(90, 0, 'shuffle-suspense-pulse');

  // Trigger continuous orchestral tension pulse every 1.1s
  const tensionMusicInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    if (elapsed >= totalShuffleDurationMs) {
      clearInterval(tensionMusicInterval);
      return;
    }
    const progress = elapsed / totalShuffleDurationMs;
    const tensionPitch = 85 + Math.floor(progress * 110); // Rising orchestral drone (85Hz -> 195Hz)
    playQuizTone(tensionPitch, 0, 'shuffle-suspense-pulse');
  }, 1100);

  // Dynamic interval function for organic slot-machine deceleration
  function runShuffleFrame() {
    try {
      const elapsed = Date.now() - startTime;
      const remainingSeconds = Math.max(0, Math.ceil((totalShuffleDurationMs - elapsed) / 1000));

      if (btnLabel) {
        btnLabel.innerText = `Randomizing (${remainingSeconds}s)...`;
      }
      if (countdownTimer) {
        countdownTimer.innerText = `${remainingSeconds}s`;
      }
      if (progressBar) {
        const pct = Math.min(100, Math.round((elapsed / totalShuffleDurationMs) * 100));
        progressBar.style.width = `${pct}%`;
      }

      if (elapsed >= totalShuffleDurationMs) {
        clearInterval(tensionMusicInterval);
        finalizeTeamShuffle();
        return;
      }

      // Progress 0.0 -> 1.0
      const progress = elapsed / totalShuffleDurationMs;

      // How many groups should already start locking in towards the last 3.5 seconds?
      let lockedGroupsThreshold = 0;
      if (progress > 0.68) {
        // Stagger lock: Group 1, then Group 2, then 3, up to totalGroups
        lockedGroupsThreshold = Math.floor(((progress - 0.68) / 0.32) * totalGroups);
      }

      // Randomize temporary order
      const tempShuffled = [...activeTeams];
      for (let i = tempShuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempShuffled[i], tempShuffled[j]] = [tempShuffled[j], tempShuffled[i]];
      }

      // Distribute into 3-team triads
      currentShuffledTriads = [];
      for (let g = 0; g < totalGroups; g++) {
        currentShuffledTriads.push({
          groupName: `Group ${g + 1}`,
          teams: tempShuffled.slice(g * 3, g * 3 + 3)
        });
      }

      renderShuffledTriadsStage(true, lockedGroupsThreshold);

      // Audio click pitch rises with urgency & heartbeat rhythm
      try {
        const tickPitch = 550 + Math.floor(progress * 650) + (Math.random() * 80);
        playQuizTone(tickPitch, 0, 'shuffle-slot-tick');
      } catch (err) {}

      // Dynamic next frame delay: Fast (65ms) early on, deceleration near end
      let nextDelay = 65;
      if (progress > 0.65) {
        nextDelay = 75 + Math.pow((progress - 0.65) / 0.35, 2) * 240; // 75ms -> 315ms
      }

      setTimeout(runShuffleFrame, nextDelay);
    } catch (e) {
      console.error("Shuffle frame error:", e);
      finalizeTeamShuffle();
    }
  }

  // Kick off first frame
  runShuffleFrame();
}

// Finalize shuffle with resolution sound & locked visual pop
function finalizeTeamShuffle() {
  isShufflingInProgress = false;

  const btn = document.getElementById('btn-start-live-shuffle');
  const btnLabel = document.getElementById('shuffle-btn-label');
  const btnIcon = document.getElementById('shuffle-btn-icon');
  const saveBtn = document.getElementById('btn-apply-triad-groups');
  const countdownBadge = document.getElementById('shuffler-countdown-badge');
  const progressBar = document.getElementById('shuffler-progress-bar');

  if (btn) btn.classList.remove('shuffling-active');
  if (btnLabel) btnLabel.innerText = 'Shuffle Again';
  if (btnIcon) btnIcon.innerText = '🎲';
  if (countdownBadge) countdownBadge.style.display = 'none';
  if (progressBar) progressBar.style.width = '100%';

  if (saveBtn) {
    saveBtn.disabled = false;
    saveBtn.style.opacity = '1';
  }

  // Render finalized locked-in stage with all groups confirmed
  renderShuffledTriadsStage(false, 99);

  // Play grand resolution chord & fire celebratory confetti
  playQuizTone(0, 0, 'shuffle-complete');
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 55,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#a855f7', '#00f0ff', '#10b981', '#ffffff']
    });
  }
}

// Save & apply newly formed 3-team groups to master tournament state
function applyShuffledTriadGroups() {
  if (currentShuffledTriads.length === 0) return;

  currentShuffledTriads.forEach(triad => {
    triad.teams.forEach(t => {
      // Find team in master and update its group
      const masterTeam = tournamentConfig.allTeamsMaster.find(m => m.id === t.id);
      if (masterTeam) {
        masterTeam.group = triad.groupName;
      }
    });
  });

  // Mark Phase 1 as officially shuffled & persisted
  if (currentPhaseIdx === 0) {
    markPhase1Shuffled();
  }

  // Persist updated groups & state to browser localStorage
  saveTournamentStateToStorage();

  // Populate live stage selector with the new groups
  populateStageGroupSelector();
  updateStageActiveGroupDisplay();

  renderPhasesLaunchDeck();
  renderCompactAnimatedLeaderboard();
  renderOfficialChampionshipBracket();

  const wasMandatory = isShufflerMandatoryMode;
  closeTeamShufflerModal();

  // Show confirmation alert
  alert(`✓ Triad Group Allocations Saved! All teams for Phase ${currentPhaseIdx + 1} have been organized into 3-team competition groups.`);

  // If this was triggered as compulsory step upon entering Phase 1, seamlessly proceed directly to Rounds Hub
  if (wasMandatory) {
    openRoundsHubForPhase(currentPhaseIdx + 1);
  }
}

/* ==============================================================================
   13. FIREBASE CLOUD DATABASE & MEDIA STORAGE INTEGRATION
   ============================================================================== */

/**
 * Open Cloud DB & Media Storage Manager Modal
 */
function openCloudDbModal() {
  const modal = document.getElementById('firebase-db-modal');
  if (modal) modal.style.display = 'flex';

  // Populate config fields from active config manager
  const cfg = (window.FirebaseConfigManager && typeof window.FirebaseConfigManager.get === 'function')
    ? window.FirebaseConfigManager.get()
    : {};

  if (document.getElementById('fb-input-apiKey')) document.getElementById('fb-input-apiKey').value = cfg.apiKey || '';
  if (document.getElementById('fb-input-projectId')) document.getElementById('fb-input-projectId').value = cfg.projectId || '';
  if (document.getElementById('fb-input-authDomain')) document.getElementById('fb-input-authDomain').value = cfg.authDomain || '';
  if (document.getElementById('fb-input-storageBucket')) document.getElementById('fb-input-storageBucket').value = cfg.storageBucket || '';
  if (document.getElementById('fb-input-messagingSenderId')) document.getElementById('fb-input-messagingSenderId').value = cfg.messagingSenderId || '';
  if (document.getElementById('fb-input-appId')) document.getElementById('fb-input-appId').value = cfg.appId || '';

  updateCloudDbUIStatus();
}

/**
 * Close Cloud DB Modal
 */
function closeCloudDbModal() {
  const modal = document.getElementById('firebase-db-modal');
  if (modal) modal.style.display = 'none';
}

/**
 * Toggle Firebase Setup Instructions
 */
function toggleFirebaseConfigHelp() {
  const guide = document.getElementById('cloud-setup-guide');
  if (guide) {
    guide.style.display = (guide.style.display === 'none' || guide.style.display === '') ? 'block' : 'none';
  }
}

/**
 * Update UI indicators based on Firebase connectivity
 */
async function updateCloudDbUIStatus() {
  const badgePill = document.getElementById('cloud-db-pill-badge');
  const modalBadge = document.getElementById('cloud-modal-badge');
  const statStatus = document.getElementById('cloud-stat-status');
  const statLocalCount = document.getElementById('cloud-stat-local-count');
  const statCloudCount = document.getElementById('cloud-stat-cloud-count');
  const qModalBadge = document.getElementById('modal-q-cloud-storage-badge');

  // Count local questions across all rounds
  let localTotal = 0;
  Object.keys(quizRoundsQuestions).forEach(r => {
    localTotal += (quizRoundsQuestions[r] || []).length;
  });
  if (statLocalCount) statLocalCount.innerText = localTotal;

  if (window.quizFirebaseService && window.quizFirebaseService.isReady()) {
    if (badgePill) {
      badgePill.className = 'cloud-pill-active';
      badgePill.innerText = 'Connected 🟢';
    }
    if (modalBadge) {
      modalBadge.className = 'cloud-pill-active';
      modalBadge.innerText = 'ONLINE • CLOUD READY';
    }
    if (statStatus) {
      statStatus.innerText = 'Connected 🟢';
      statStatus.style.color = '#34d399';
    }
    if (qModalBadge) {
      qModalBadge.innerHTML = '☁️ Firebase Storage: Active 🟢';
      qModalBadge.style.color = '#34d399';
    }

    try {
      const snap = await window.quizFirebaseService.db.collection(window.quizFirebaseService.COLLECTION_QUESTIONS).get();
      if (statCloudCount) statCloudCount.innerText = snap.size;
    } catch (e) {
      if (statCloudCount) statCloudCount.innerText = 'Err';
    }
  } else {
    if (badgePill) {
      badgePill.className = 'cloud-pill-idle';
      badgePill.innerText = 'Local 🟡';
    }
    if (modalBadge) {
      modalBadge.className = 'cloud-pill-idle';
      modalBadge.innerText = 'LOCAL STORAGE MODE';
    }
    if (statStatus) {
      statStatus.innerText = 'Offline / Local';
      statStatus.style.color = '#fbbf24';
    }
    if (statCloudCount) statCloudCount.innerText = '--';
    if (qModalBadge) {
      qModalBadge.innerHTML = '☁️ Local Fallback Mode 🟡';
      qModalBadge.style.color = '#fbbf24';
    }
  }
}

/**
 * Test Firebase Connection with modal input credentials
 */
async function testFirebaseCredentialsConnection() {
  const cfg = {
    apiKey: document.getElementById('fb-input-apiKey')?.value.trim() || '',
    projectId: document.getElementById('fb-input-projectId')?.value.trim() || '',
    authDomain: document.getElementById('fb-input-authDomain')?.value.trim() || '',
    storageBucket: document.getElementById('fb-input-storageBucket')?.value.trim() || '',
    messagingSenderId: document.getElementById('fb-input-messagingSenderId')?.value.trim() || '',
    appId: document.getElementById('fb-input-appId')?.value.trim() || ''
  };

  if (!cfg.apiKey || !cfg.projectId) {
    alert("Please enter at least the API Key and Project ID to test connection.");
    return;
  }

  if (window.FirebaseConfigManager) {
    window.FirebaseConfigManager.save(cfg);
  }

  if (window.quizFirebaseService) {
    const ok = await window.quizFirebaseService.init();
    if (ok) {
      const res = await window.quizFirebaseService.testConnection();
      if (res.success) {
        alert(`✓ Connection Verified! ${res.message}`);
      } else {
        alert(`⚠️ Connection check failed: ${res.message}`);
      }
    } else {
      alert(`⚠️ Firebase initialization failed: ${window.quizFirebaseService.lastError || 'Verify credentials'}`);
    }
  }
  updateCloudDbUIStatus();
}

/**
 * Save Firebase credentials from modal and initialize connection
 */
async function saveFirebaseCredentialsFromModal() {
  const cfg = {
    apiKey: document.getElementById('fb-input-apiKey')?.value.trim() || '',
    projectId: document.getElementById('fb-input-projectId')?.value.trim() || '',
    authDomain: document.getElementById('fb-input-authDomain')?.value.trim() || '',
    storageBucket: document.getElementById('fb-input-storageBucket')?.value.trim() || '',
    messagingSenderId: document.getElementById('fb-input-messagingSenderId')?.value.trim() || '',
    appId: document.getElementById('fb-input-appId')?.value.trim() || ''
  };

  if (!cfg.apiKey || !cfg.projectId) {
    alert("Please fill in both the API Key and Project ID.");
    return;
  }

  if (window.FirebaseConfigManager) {
    window.FirebaseConfigManager.save(cfg);
  }

  if (window.quizFirebaseService) {
    const ok = await window.quizFirebaseService.init();
    if (ok) {
      alert("🎉 Firebase Connected Successfully! Questions, options, Urdu content, and images will now sync with Cloud Firestore and Storage.");
      updateCloudDbUIStatus();
      // Offer auto-sync
      const shouldSync = confirm("Would you like to fetch and load existing questions from Firebase Firestore now?");
      if (shouldSync) {
        syncQuestionsFromCloud();
      }
    } else {
      alert(`Credentials saved, but connection failed: ${window.quizFirebaseService.lastError || 'Please check keys'}`);
      updateCloudDbUIStatus();
    }
  }
}

/**
 * Reset Firebase configuration to local defaults
 */
function clearFirebaseConfigFromStorage() {
  if (confirm("Reset Firebase credentials? The app will operate in local browser storage mode.")) {
    if (window.FirebaseConfigManager) {
      window.FirebaseConfigManager.reset();
    }
    location.reload();
  }
}

/**
 * Synchronize questions from Firestore into local quiz rounds
 */
async function syncQuestionsFromCloud(silent = false) {
  if (!window.quizFirebaseService) return false;

  try {
    const cloudQuestions = await window.quizFirebaseService.fetchAllQuestions();
    if (!cloudQuestions || Object.keys(cloudQuestions).length === 0) {
      if (!silent) {
        alert("Firestore collection 'quiz_questions' is currently empty.\n\nYou can click 'Upload Local Qs to Cloud' to seed your existing questions into the database!");
      }
      return false;
    }

    // Merge cloud questions into quizRoundsQuestions
    let totalLoaded = 0;
    Object.keys(cloudQuestions).forEach(round => {
      quizRoundsQuestions[round] = cloudQuestions[round];
      totalLoaded += cloudQuestions[round].length;
    });

    saveTournamentStateToStorage();
    if (typeof renderAdminPortalView === 'function') {
      renderAdminPortalView();
    }
    updateCloudDbUIStatus();

    if (!silent) {
      alert(`✓ Cloud Sync Complete! Successfully loaded ${totalLoaded} questions across ${Object.keys(cloudQuestions).length} rounds from Firestore.`);
    }
    return true;
  } catch (err) {
    console.error("Cloud sync error:", err);
    if (!silent) {
      alert(`⚠️ Could not sync from Firestore: ${err.message}`);
    }
    return false;
  }
}

/**
 * Seed all local questions from memory into Firestore
 */
async function seedLocalQuestionsToCloud() {
  if (!window.quizFirebaseService || !window.quizFirebaseService.isReady()) {
    alert("Please connect to Firebase first by entering your project credentials below.");
    return;
  }

  const progressWrap = document.getElementById('cloud-sync-progress-wrap');
  const progressBar = document.getElementById('cloud-sync-progress-bar');
  const statusText = document.getElementById('cloud-sync-status-text');
  const pctText = document.getElementById('cloud-sync-pct-text');

  try {
    if (progressWrap) progressWrap.style.display = 'block';

    const count = await window.quizFirebaseService.seedAllQuestions(quizRoundsQuestions, (prog) => {
      const pct = Math.round((prog.current / prog.total) * 100);
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (pctText) pctText.innerText = `${pct}%`;
      if (statusText) statusText.innerText = `Uploading [${prog.round}]: question ${prog.current} of ${prog.total}...`;
    });

    if (statusText) statusText.innerText = `✓ Successfully uploaded ${count} questions to Firebase Firestore!`;
    updateCloudDbUIStatus();
    alert(`🎉 Success! Seeded all ${count} questions into your Firebase Cloud Database!`);
  } catch (err) {
    console.error("Cloud seeding error:", err);
    alert(`⚠️ Seeding failed: ${err.message}`);
  }
}

/**
 * Upload single image or media file directly to Firebase Storage
 */
async function uploadDirectMediaToCloud() {
  const fileInput = document.getElementById('cloud-direct-file-input');
  const resultDiv = document.getElementById('cloud-direct-upload-result');
  const file = fileInput?.files?.[0];

  if (!file) {
    alert("Please select an image or audio file to upload.");
    return;
  }

  if (!window.quizFirebaseService || !window.quizFirebaseService.isReady()) {
    alert("Firebase Storage is not connected. Please verify your Firebase credentials in the form below.");
    return;
  }

  try {
    if (resultDiv) {
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = `<span style="color: var(--cyan); font-size: 0.82rem;">⏳ Uploading ${file.name} to Firebase Storage...</span>`;
    }

    const downloadUrl = await window.quizFirebaseService.uploadMedia(file);

    if (resultDiv) {
      resultDiv.innerHTML = `
        <div class="cloud-media-preview-strip">
          <img src="${downloadUrl}" class="cloud-media-thumb" alt="Preview" onerror="this.style.display='none'">
          <div style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            <div style="font-size: 0.76rem; font-weight: 800; color: #34d399;">✓ Uploaded to Storage</div>
            <input type="text" value="${downloadUrl}" readonly style="width: 100%; font-size: 0.72rem; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 0.25rem 0.4rem; border-radius: 4px; font-family: monospace;" onclick="this.select(); navigator.clipboard.writeText(this.value); alert('Copied image URL to clipboard!');">
          </div>
          <button class="action-btn-clean" onclick="navigator.clipboard.writeText('${downloadUrl}'); alert('Copied image URL to clipboard!');" style="font-size: 0.75rem; padding: 0.35rem 0.7rem; border-color: rgba(0, 240, 255, 0.4); color: var(--cyan);">
            📋 Copy URL
          </button>
        </div>
      `;
    }
  } catch (err) {
    console.error("Direct upload error:", err);
    if (resultDiv) {
      resultDiv.innerHTML = `<span style="color: #f87171; font-size: 0.8rem;">❌ Upload failed: ${err.message}</span>`;
    }
  }
}

/**
 * Initialize Cloud Database on Application Launch
 */
async function initCloudDatabaseOnLaunch() {
  if (!window.quizFirebaseService) return;
  try {
    const ok = await window.quizFirebaseService.init();
    if (ok) {
      updateCloudDbUIStatus();
      // Silently sync from cloud if questions exist
      syncQuestionsFromCloud(true);
    } else {
      updateCloudDbUIStatus();
    }
  } catch (err) {
    console.warn("Cloud DB launch check warning:", err);
    updateCloudDbUIStatus();
  }
}

