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
        { id: 1, name: "Round 1: MCQ", questionsRequired: 68, remark: "Two Questions for one Team" },
        { id: 2, name: "Round 2: Media Round", questionsRequired: 68, remark: "Images, Audio & Video Clues" },
        { id: 3, name: "Round 3: Buzzer", questionsRequired: 60, remark: "5 Questions for 1 Group" },
        { id: 4, name: "Round 4: Rapid Fire", questionsRequired: 180, remark: "Fast-Paced Direct Questions" }
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
        { id: 1, name: "Round 1: MCQ", questionsRequired: 18, remark: "Two Questions for one Team" },
        { id: 2, name: "Round 2: Media Round", questionsRequired: 18, remark: "Visual Clues & Audio Archives" },
        { id: 3, name: "Round 3: Buzzer", questionsRequired: 15, remark: "5 Questions for 1 Group" },
        { id: 4, name: "Round 4: Rapid Fire", questionsRequired: 180, remark: "20 Questions for each Team" }
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
        { id: 1, name: "Round 1: Sequence", questionsRequired: 6, remark: "Two Questions for one Team" },
        { id: 2, name: "Round 2: Media Round", questionsRequired: 6, remark: "Historical Media Archives" },
        { id: 3, name: "Round 3: Buzzer", questionsRequired: 5, remark: "5 Questions for 1 Group" },
        { id: 4, name: "Round 4: Visual Rapid Fire", questionsRequired: 75, remark: "20 Questions for each Team" }
      ]
    }
  ]
};

// Current Live State
let currentPhaseIdx = 0;
let currentRoundIdx = 0;
let currentGroupIdx = 1;
let currentQuestionNum = 1;

let defaultQuestionTimer = 30;
let timerSeconds = 30;
let timerRunning = false;
let timerInterval = null;

let editingTeamId = null;

// ==============================================================================
// 💾 TOURNAMENT STATE PERSISTENCE & PHASE 1 SHUFFLE ENFORCEMENT ENGINE
// ==============================================================================
const STORAGE_KEY_TEAMS = "tameer_quiz_allTeamsMaster_v1";
const STORAGE_KEY_PHASES = "tameer_quiz_phases_v1";
const STORAGE_KEY_P1_SHUFFLED = "tameer_quiz_phase1_shuffled_v1";

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
  } catch (e) {
    console.warn("Storage save failed:", e);
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
        tournamentConfig.phases = parsedPhases;
      }
    }
  } catch (e) {
    console.warn("Storage load error:", e);
  }
}

// ------------------------------------------------------------------------------
// 👥 STAGE 3-TEAM TRIAD GROUP TRACKER & LIVE CONTROLLER
// ------------------------------------------------------------------------------
function getActiveGroupTeams(groupNameOrNum) {
  const label = typeof groupNameOrNum === 'number' ? `Group ${groupNameOrNum}` : groupNameOrNum;
  const activeTeams = getActivePhaseTeams();
  return activeTeams.filter(t => t.group === label);
}

function populateStageGroupSelector() {
  const selector = document.getElementById('stage-group-selector');
  if (!selector) return;

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

  if (groups.length === 0) {
    // Fallback if no groups yet
    selector.innerHTML = `<option value="Group 1">Group 1 (3 Teams)</option>`;
    return;
  }

  selector.innerHTML = groups.map(g => {
    const teamsInG = activeTeams.filter(t => t.group === g);
    const names = teamsInG.map(t => t.name.split(' ')[0] || `Team ${t.id}`).join(', ');
    const isSelected = g === `Group ${currentGroupIdx}`;
    return `<option value="${g}" ${isSelected ? 'selected' : ''}>${g} (${teamsInG.length} Teams: ${names})</option>`;
  }).join('');
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
        return `
          <div class="stage-team-podium-pod pod-team-${slotIdx + 1}" id="stage-pod-team-${team.id}">
            <span class="pod-slot-badge">T${slotIdx + 1}</span>
            <div class="pod-name-block">
              <div class="pod-team-name" title="${team.name}">${team.name}</div>
              <div class="pod-team-sub">${groupName} • Podium Slot ${slotIdx + 1}</div>
            </div>
            <div class="pod-score-badge" id="pod-score-val-${team.id}">${score} PTS</div>
            <div class="pod-quick-award-actions">
              <button class="btn-point-action btn-point-add" onclick="awardStageTeamPoints(${team.id}, 10)" title="Award +10 points to ${team.name}">+10</button>
              <button class="btn-point-action btn-point-add" onclick="awardStageTeamPoints(${team.id}, 5)" title="Award +5 points to ${team.name}">+5</button>
              <button class="btn-point-action btn-point-sub" onclick="awardStageTeamPoints(${team.id}, -5)" title="Deduct -5 points from ${team.name}">-5</button>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 2. Render On-Stage Teams Direct Points Awarding Row in screen-rounds-hub
  const hubAwardRow = document.getElementById('rh-teams-award-row');
  const hubGroupLabel = document.getElementById('rh-active-group-label');
  const stagePill = document.getElementById('hub-active-stage-pill');

  if (hubGroupLabel) {
    hubGroupLabel.innerText = `CURRENTLY ON STAGE: ${groupName.toUpperCase()}`;
  }
  if (stagePill) {
    stagePill.innerText = `● On Stage: ${groupName} of 12`;
  }

  if (hubAwardRow) {
    if (teams.length === 0) {
      hubAwardRow.innerHTML = `<span style="font-size: 0.8rem; color: #94a3b8;">No teams currently in ${groupName}.</span>`;
    } else {
      hubAwardRow.innerHTML = teams.map((team, idx) => {
        const score = getTeamCurrentScore(team);
        const shortName = team.name ? team.name.split(' ').slice(0, 3).join(' ') : `Team ${team.id}`;
        return `
          <div class="rh-team-award-card">
            <div class="rh-team-info">
              <span class="rh-team-slot">Team ${idx + 1}</span>
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
        const shortName = team.name ? team.name.split(' ').slice(0, 3).join(' ') : `Team ${team.id}`;
        return `
          <div class="dock-team-award-row">
            <span class="dock-team-award-name" title="${team.name}">${shortName}: <strong>${score}p</strong></span>
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

  const currentScore = getTeamCurrentScore(team);
  const newScore = Math.max(0, currentScore + delta);
  setTeamCurrentScore(team, newScore);

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

  // Dedicated Media Round Questions (Images, Audio, Video Clues)
  "Media Round": [
    {
      type: "image",
      mediaLabel: "HISTORICAL MONUMENT CLUE",
      mediaSrc: "logo.png",
      text: "Observe the projected emblem: Which historic organisation or event does this crest represent?",
      options: [
        { key: "A", text: "Team Tameer GK Competition" },
        { key: "B", text: "Maharashtra State Board" },
        { key: "C", text: "Shivaji University Kolhapur" },
        { key: "D", text: "Rayat Shikshan Sanstha" }
      ],
      correct: "A",
      time: 30
    },
    {
      type: "audio",
      mediaLabel: "HISTORIC SPEECH ARCHIVE",
      audioTitle: "Audio Clue: 'Tryst with Destiny' Midnight Broadcast",
      mediaSrc: "https://actions.google.com/sounds/v1/ambiences/outdoor_festival.ogg",
      text: "Listen to the broadcast audio archive. Who delivered this iconic speech to the Indian Constituent Assembly on 14-15 August 1947?",
      options: [
        { key: "A", text: "Sardar Vallabhbhai Patel" },
        { key: "B", text: "Pandit Jawaharlal Nehru" },
        { key: "C", text: "Dr. Rajendra Prasad" },
        { key: "D", text: "Maulana Abul Kalam Azad" }
      ],
      correct: "B",
      time: 30
    }
  ],

  // Buzzer Round Questions (Fast-Paced Pure Text)
  "Buzzer": [
    {
      text: "BUZZER: Which revolutionary Indian scientist won the Nobel Prize in Physics in 1930 for the discovery of the scattering of light?",
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
      text: "BUZZER: Which historic fort in Maharashtra was chosen by Chhatrapati Shivaji Maharaj as the capital of the Maratha Empire in 1674?",
      options: [
        { key: "A", text: "Torna Fort" },
        { key: "B", text: "Raigad Fort" },
        { key: "C", text: "Panhala Fort" },
        { key: "D", text: "Pratapgad Fort" }
      ],
      correct: "B",
      time: 15
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

  // Sequence Round Questions (Pure Text)
  "Sequence": [
    {
      text: "Arrange in Chronological Order: [1] Non-Cooperation Movement, [2] Quit India Movement, [3] Dandi Salt March.",
      options: [
        { key: "A", text: "1 ➔ 3 ➔ 2" },
        { key: "B", text: "3 ➔ 1 ➔ 2" },
        { key: "C", text: "1 ➔ 2 ➔ 3" },
        { key: "D", text: "2 ➔ 1 ➔ 3" }
      ],
      correct: "A",
      time: 30
    }
  ],

  // Visual Rapid Fire (For Grand Final)
  "Visual Rapid Fire": [
    {
      type: "image",
      mediaLabel: "RAPID VISUAL CLUE",
      mediaSrc: "logo.png",
      text: "Identify the institutional emblem displayed on screen within 15 seconds:",
      options: [
        { key: "A", text: "Team Tameer State Contest" },
        { key: "B", text: "National Quiz Federation" },
        { key: "C", text: "Maharashtra Olympiad" },
        { key: "D", text: "State Council of Education" }
      ],
      correct: "A",
      time: 15
    }
  ]
};

function getTeamCurrentScore(team) {
  if (currentPhaseIdx === 0) return team.phase1Score || 0;
  if (currentPhaseIdx === 1) return team.phase2Score || 0;
  if (currentPhaseIdx === 2) return team.phase3Score || 0;
  return 0;
}

function setTeamCurrentScore(team, newScore) {
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

// Switch Top Navigation Screens
function switchMainScreen(screenId) {
  // Security Guard: Prevent unauthenticated access to admin portal
  if (screenId === 'screen-admin' && !isAdminLoggedIn) {
    openAdminAccessModal();
    return;
  }

  document.querySelectorAll('.stage-panel-view').forEach(p => p.classList.remove('active-panel'));
  document.querySelectorAll('.minimal-nav-btn').forEach(b => b.classList.remove('active-nav'));

  const target = document.getElementById(screenId);
  if (target) target.classList.add('active-panel');

  const btnMap = {
    'screen-phases': 'btn-tab-phases',
    'screen-groups-hub': 'btn-tab-phases',
    'screen-rounds-hub': 'btn-tab-phases',
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
    startTimerCountdown();
  } else {
    document.body.classList.remove('live-round-immersive-mode');
    stopTimerCountdown();
  }

  if (screenId === 'screen-analytics') {
    renderOfficialChampionshipBracket();
  }
}

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
    tag: "FINALS SHOWDOWN",
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34"/><path d="M18 14.66V17c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2.34"/><path d="M6 9a6 6 0 0 0 12 0V4H6v5z"/></svg>`,
    badgeColor: "#10b981",
    gradient: "linear-gradient(145deg, rgba(12, 36, 26, 0.95), rgba(5, 16, 12, 0.98))",
    borderColor: "rgba(16, 185, 129, 0.35)",
    glowColor: "rgba(16, 185, 129, 0.25)",
    desc: "Grand Championship round: rapid visual cues shown back-to-back to decide the State Champion."
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

function enterLiveRound(phaseId, roundId) {
  currentPhaseIdx = phaseId - 1;
  currentRoundIdx = roundId - 1;
  updateTopTracker();

  // Load fresh copy of questions from repository for this round and shuffle for random non-repeating delivery
  const sourceQuestions = getCurrentRoundQuestionsList();
  activeRoundQuestionsPool = [...sourceQuestions];

  // Randomize sequence so order is always varied
  for (let i = activeRoundQuestionsPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [activeRoundQuestionsPool[i], activeRoundQuestionsPool[j]] = [activeRoundQuestionsPool[j], activeRoundQuestionsPool[i]];
  }

  currentLiveQuestionIndex = 0;
  // Play Indian KBC Grand Entrance Fanfare for round/level launch
  playQuizTone(0, 0, 'kbc-level-intro');

  // Populate stage triad group selector and sync active group banner
  populateStageGroupSelector();
  updateStageActiveGroupDisplay();

  renderLiveQuestion();
  switchMainScreen('screen-round-arena');
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
  
  if (round.name.includes("Media")) {
    return quizRoundsQuestions["Media Round"] || [];
  } else if (round.name.includes("Buzzer")) {
    return quizRoundsQuestions["Buzzer"] || [];
  } else if (round.name.includes("Visual Rapid Fire")) {
    return quizRoundsQuestions["Visual Rapid Fire"] || [];
  } else if (round.name.includes("Rapid Fire")) {
    return quizRoundsQuestions["Rapid Fire"] || [];
  } else if (round.name.includes("Sequence")) {
    return quizRoundsQuestions["Sequence"] || [];
  } else {
    return quizRoundsQuestions["MCQ"] || [];
  }
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

  // If all questions in this round pool are exhausted
  if (!activeRoundQuestionsPool || activeRoundQuestionsPool.length === 0) {
    if (roundBadge) roundBadge.innerText = `${round.name} • COMPLETED`;
    if (formatBadge) formatBadge.innerText = "ROUND FINISHED";
    if (qPrompt) qPrompt.innerHTML = `<span style="color: var(--cyan);">🎉 All questions for ${round.name} have been presented!</span>`;
    if (mediaContainer) {
      mediaContainer.style.display = "none";
      mediaContainer.innerHTML = "";
    }

    const totalRoundsInPhase = phase.rounds.length;
    const isLastRoundOfPhase = (currentRoundIdx >= totalRoundsInPhase - 1);
    const nextRoundObj = !isLastRoundOfPhase ? phase.rounds[currentRoundIdx + 1] : null;

    let actionButtonsHtml = "";
    if (!isLastRoundOfPhase && nextRoundObj) {
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
      optionsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.2rem 1.5rem; background: rgba(0, 240, 255, 0.06); border: 1.5px solid rgba(0, 240, 255, 0.3); border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
          <h3 style="color: #fff; font-size: 1.45rem; font-weight: 800; margin-bottom: 0.5rem;">
            🎉 All 4 Rounds Finished for Group ${currentGroupIdx}!
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
  currentLiveActiveQuestion = activeRoundQuestionsPool.shift();
  const q = currentLiveActiveQuestion;

  // Play Indian KBC Question Presentation Dramatic Stinger
  playQuizTone(0, 0, 'kbc-question-appear');

  if (roundBadge) {
    roundBadge.innerText = `${round.name} • Question ${currentLiveQuestionIndex < 10 ? '0' + currentLiveQuestionIndex : currentLiveQuestionIndex}`;
  }
  if (formatBadge) formatBadge.innerText = q.mediaLabel || (round.name.toUpperCase());
  // STRICT RULE: Only show media container if round is a Media Round AND question has media
  const isMediaRound = round.name.includes("Media") || round.name.includes("Visual");

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

  let selectedOptionKey = null;

  if (optionsGrid) {
    optionsGrid.innerHTML = q.options.map(opt => `
      <div class="option-stage-btn" id="opt-stage-${opt.key}" onclick="selectStageOption('${opt.key}')">
        <div class="opt-key-char">${opt.key}</div>
        <div class="opt-text-label">${opt.text}</div>
        <div class="opt-status-badge"></div>
      </div>
    `).join('');
  }

  resetTimer(q.time || defaultQuestionTimer);
  startTimerCountdown();
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
  }
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

function nextStageQuestion() {
  renderLiveQuestion();
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

    const currentScore = getTeamCurrentScore(t);
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

  const newTeam = {
    id: Date.now(),
    name: schoolName,
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
  tournamentConfig.schoolsDirectory.push({ name: schoolName });

  renderCompactAnimatedLeaderboard();
  renderOfficialChampionshipBracket();
  renderSchoolsDirectory();
  nameInput.value = "";
  closeAddSchoolModal();
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

  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();

    if (timerSeconds > 5) {
      playQuizTone(0, 0, 'tick');
    } else if (timerSeconds > 0) {
      playQuizTone(0, 0, 'warning-tick');
    }

    if (timerSeconds <= 0) {
      stopTimerCountdown();
      playQuizTone(0, 0, 'timesup');
      document.getElementById('timer-box-display')?.classList.add('danger-pulse');
      if (btn) btn.innerText = "▶ Start Timer";
    }
  }, 1000);
}

function stopTimerCountdown() {
  clearInterval(timerInterval);
  timerRunning = false;
  const btn = document.getElementById('btn-toggle-timer');
  if (btn) btn.innerText = "▶ Start Timer";
}

function resetTimer(seconds) {
  stopTimerCountdown();
  timerSeconds = seconds || defaultQuestionTimer;
  updateTimerDisplay();
  const btn = document.getElementById('btn-toggle-timer');
  if (btn) btn.innerText = "▶ Start Timer";
}

function updateTimerDisplay() {
  const digits = document.getElementById('live-timer-number');
  const box = document.getElementById('timer-box-display');
  if (!digits) return;

  const formatted = timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds;
  digits.innerText = `${formatted}s`;

  if (timerSeconds <= 5) {
    box?.classList.add('danger-pulse');
  } else {
    box?.classList.remove('danger-pulse');
  }
}

function renderSchoolsDirectory() {
  const container = document.getElementById('schools-directory-grid');
  if (!container) return;

  const total = tournamentConfig.schoolsDirectory.length;
  const colSize = Math.ceil(total / 3);
  const col1 = tournamentConfig.schoolsDirectory.slice(0, colSize);
  const col2 = tournamentConfig.schoolsDirectory.slice(colSize, colSize * 2);
  const col3 = tournamentConfig.schoolsDirectory.slice(colSize * 2);

  container.innerHTML = [col1, col2, col3].map((col, idx) => `
    <div class="school-col-box">
      <h3>Section 0${idx + 1}</h3>
      <div class="school-scroll-list">
        ${col.map(s => `
          <div class="school-row-item">
            <span style="color: var(--cyan); font-size: 0.8rem;">●</span>
            <span>${s.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
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
      if (timerRunning) stopTimerCountdown();
      else startTimerCountdown();
    }
    if (e.key === 'r' || e.key === 'R') {
      e.preventDefault();
      triggerAnswerReveal();
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

  renderAdminQuestionsList();
}

function setAdminCategoryFilter(category) {
  currentAdminCategoryFilter = category;
  renderAdminPortalView();
}

function renderAdminQuestionsList() {
  const container = document.getElementById('admin-questions-list-container');
  const countLabel = document.getElementById('admin-category-count-label');
  if (!container) return;

  const questions = quizRoundsQuestions[currentAdminCategoryFilter] || [];
  if (countLabel) {
    countLabel.innerText = `${currentAdminCategoryFilter} Repository (${questions.length} Questions)`;
  }

  if (questions.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #64748b;">
        <p style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">No questions in this category yet.</p>
        <p style="font-size: 0.85rem;">Click "+ Add New Question" above to add the first question.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = questions.map((q, idx) => `
    <div class="admin-q-card">
      <div class="admin-q-top-info">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; font-weight: 900; color: var(--cyan);">#${idx + 1}</span>
          ${q.mediaLabel ? `<span style="font-size: 0.72rem; font-weight: 800; background: rgba(0, 240, 255, 0.12); color: var(--cyan); padding: 0.15rem 0.5rem; border-radius: 6px;">${q.mediaLabel}</span>` : ''}
          ${q.type ? `<span style="font-size: 0.72rem; font-weight: 800; background: rgba(255, 196, 0, 0.15); color: #ffc400; padding: 0.15rem 0.5rem; border-radius: 6px; text-transform: uppercase;">${q.type}</span>` : ''}
          <span style="font-size: 0.76rem; color: #94a3b8;">⏱ ${q.time || 30}s</span>
        </div>
        <div>
          <button class="action-btn-clean btn-micro-edit" onclick="deleteAdminQuestion(${idx})" style="color: var(--rose); border-color: rgba(255, 51, 102, 0.3);">
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

      <div class="admin-q-options-list">
        ${q.options.map(opt => `
          <div class="admin-q-opt-item ${opt.key === q.correct ? 'is-correct' : ''}">
            <strong style="color: ${opt.key === q.correct ? '#10b981' : '#fff'};">${opt.key}.</strong>
            <span>${opt.text}</span>
            ${opt.key === q.correct ? '<span style="margin-left: auto; font-size: 0.7rem; font-weight: 900;">✓ WINNER</span>' : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
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
  if (mediaZone) {
    if (round === "Media Round" || round === "Visual Rapid Fire") {
      mediaZone.style.display = "block";
      updateMediaInputAcceptance();
    } else {
      mediaZone.style.display = "none";
    }
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

// Handle file uploaded directly from user device via FileReader (DataURL Base64)
function handleAdminMediaFileUpload(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  const type = document.getElementById('modal-q-media-type')?.value || 'image';

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

// Save New Question from Modal
function saveAdminQuestion() {
  const round = document.getElementById('modal-q-round-select').value;
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
    options: [
      { key: "A", text: optA },
      { key: "B", text: optB },
      { key: "C", text: optC },
      { key: "D", text: optD }
    ],
    correct: correct
  };

  // Add media properties if in Media Round
  if (round === "Media Round" || round === "Visual Rapid Fire") {
    const mediaType = document.getElementById('modal-q-media-type').value;
    const mediaSrc = (document.getElementById('modal-q-media-src').value || "").trim();
    const mediaLabel = (document.getElementById('modal-q-media-label').value || "").trim();
    const audioTitle = (document.getElementById('modal-q-audio-title').value || "").trim();

    newQuestion.type = mediaType;
    if (mediaSrc) newQuestion.mediaSrc = mediaSrc;
    if (mediaLabel) newQuestion.mediaLabel = mediaLabel;
    if (audioTitle) newQuestion.audioTitle = audioTitle;
  }

  if (!quizRoundsQuestions[round]) {
    quizRoundsQuestions[round] = [];
  }

  // Add to question repository
  quizRoundsQuestions[round].push(newQuestion);

  closeAddQuestionModal();
  currentAdminCategoryFilter = round;
  renderAdminPortalView();
  alert(`✓ Question successfully added to the ${round} repository!`);
}

// Delete Question
function deleteAdminQuestion(index) {
  if (confirm("Are you sure you want to delete this question from the repository?")) {
    quizRoundsQuestions[currentAdminCategoryFilter].splice(index, 1);
    renderAdminPortalView();
  }
}

/* ==============================================================================
   8. BULK PDF QUESTION EXTRACTOR & IMPORTER
   ============================================================================== */
let parsedPdfQuestionsStaging = [];

function openBulkPdfModal() {
  parsedPdfQuestionsStaging = [];
  document.getElementById('bulk-target-round-select').value = currentAdminCategoryFilter || 'MCQ';
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
  const defaultTimer = parseInt(document.getElementById('bulk-timer-input').value, 10) || 30;

  if (!quizRoundsQuestions[targetRound]) {
    quizRoundsQuestions[targetRound] = [];
  }

  // Assign user-chosen timer & push into selected round repository
  parsedPdfQuestionsStaging.forEach(q => {
    q.time = defaultTimer;
    quizRoundsQuestions[targetRound].push(q);
  });

  const count = parsedPdfQuestionsStaging.length;
  closeBulkPdfModal();

  // Refresh admin UI to show newly imported questions
  currentAdminCategoryFilter = targetRound;
  renderAdminPortalView();

  alert(`✓ Bulk Import Complete! Successfully imported ${count} questions into the ${targetRound} repository.`);
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

            const teamName = team.name && team.name.trim() !== '' ? team.name : `Slot ${team.id} (Unassigned)`;
            const currentScore = getTeamCurrentScore(team);

            return `
              <div class="triad-team-slot ${!isGroupLocked ? 'slot-shuffling' : 'slot-locked-in'}">
                <span class="slot-index-pill">${slotIdx + 1}</span>
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
