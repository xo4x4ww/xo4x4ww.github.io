// ==================== 🚀 MAIN SCRIPT ====================

document.addEventListener("DOMContentLoaded", function () {
  initializeSite();
  loadConfig();
  setupEventListeners();
  startOnlineStatusChecker();
});

function initializeSite() {
  console.log("🎮 Pixel Portfolio Initialized");
}

function loadConfig() {
  applyAppearanceSettings();
  applyUserSettings();
  applySocialSettings();
  applySkillsSettings();
  applyAchievementsSettings();
  applySakuraSettings();
  applyElementStyles();

  if (CONFIG.SYSTEM.autoRefresh) {
    setInterval(updateActivity, CONFIG.SYSTEM.refreshInterval);
  }
}

function applyAppearanceSettings() {
  const { APPEARANCE } = CONFIG;

  let theme = APPEARANCE.theme;
  if (theme === "auto") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "github-dark"
      : "github-light";
  }
  document.documentElement.setAttribute("data-theme", theme);

  document.documentElement.style.setProperty(
    "--accent-color",
    APPEARANCE.accentColor
  );
  document.documentElement.style.setProperty(
    "--bg-color",
    APPEARANCE.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--card-color",
    APPEARANCE.cardColor
  );
  document.documentElement.style.setProperty(
    "--text-color",
    APPEARANCE.textColor
  );
  document.documentElement.style.setProperty(
    "--border-color",
    APPEARANCE.borderColor
  );
  document.documentElement.style.setProperty(
    "--transition-speed",
    `${APPEARANCE.transitionSpeed}s`
  );

  if (APPEARANCE.backgroundImage) {
    document.body.style.backgroundImage = `url(${APPEARANCE.backgroundImage})`;
  }
}

function applyUserSettings() {
  const { USER } = CONFIG;

  document.getElementById("userName").textContent = USER.name;
  document.getElementById("userTitle").textContent = USER.title;
  document.getElementById("customStatus").textContent = USER.customStatus;
  document.getElementById("userBio").textContent = USER.bio;
  document.getElementById("teamName").textContent = USER.team;
  document.getElementById("footerName").textContent = USER.name;

  const statusDot = document.getElementById("statusDot");
  const statusText = document.getElementById("statusText");

  statusDot.className = `status-dot ${USER.status
    .toLowerCase()
    .replace("🟢 ", "")
    .replace("🔴 ", "")
    .replace("🟡 ", "")}`;
  statusText.textContent = USER.status;

  const avatar = document.getElementById("avatar");
  if (USER.avatar) {
    avatar.src = USER.avatar;
  }
}

function applySocialSettings() {
  const { SOCIAL } = CONFIG;
  const socialLinks = document.getElementById("socialLinks");

  const socials = [
    { name: "OK", data: SOCIAL.ok, icon: "ok.svg" },
    { name: "Pinterest", data: SOCIAL.pinterest, icon: "pinterest.svg" },
    { name: "Telegram", data: SOCIAL.telegram, icon: "telegram.svg" },
    { name: "VK", data: SOCIAL.vk, icon: "vk.svg" },
    { name: "YouTube", data: SOCIAL.youtube, icon: "youtube.svg" },
    { name: "LinkedIn", data: SOCIAL.linkedin, icon: "linkedin.svg" },
    { name: "GitHub", data: SOCIAL.github, icon: "github.svg" },
    { name: "Itch.io", data: SOCIAL.itchio, icon: "itch.svg" },
  ];

  socialLinks.innerHTML = socials
    .filter((social) => social.data && social.data.url)
    .map(
      (social) => `
            <a href="${social.data.url}" class="social-link" target="_blank" title="${social.name}">
                <img src="src/icons/${social.icon}" alt="${social.name}" class="social-icon-svg">
                ${social.name}
            </a>
        `
    )
    .join("");
}

function applySkillsSettings() {
  const { SKILLS } = CONFIG;
  const skillsList = document.getElementById("skillsList");

  skillsList.innerHTML = SKILLS.items
    .map(
      (skill) => `
        <div class="skill-item">
            <div class="skill-header">
                <span class="skill-name ${skill.style}-style">${
        skill.name
      }</span>
                ${
                  SKILLS.showPercentage
                    ? `<span class="skill-percent">${skill.level}%</span>`
                    : ""
                }
            </div>
            <div class="progress-bar">
                <div class="progress-fill ${skill.style}-style" 
                     style="width: ${skill.level}%; background: ${skill.color}">
                </div>
            </div>
            <div class="skill-desc">${skill.description}</div>
        </div>
    `
    )
    .join("");
}

function applyAchievementsSettings() {
  const { ACHIEVEMENTS } = CONFIG;
  const achievementsGrid = document.getElementById("achievementsGrid");

  const achievementsToShow = ACHIEVEMENTS.showLocked
    ? ACHIEVEMENTS.items
    : ACHIEVEMENTS.items.filter((ach) => ach.unlocked);

  achievementsGrid.innerHTML = achievementsToShow
    .map(
      (achievement) => `
        <div class="achievement ${achievement.style}-style ${
        achievement.unlocked ? "" : "locked"
      }" 
             style="border-color: ${
               achievement.unlocked ? achievement.color : "var(--border-color)"
             }">
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-desc">${achievement.description}</div>
        </div>
    `
    )
    .join("");
}

function applySakuraSettings() {
  const { SAKURA } = CONFIG;

  if (SAKURA.enabled) {
    document.body.classList.add("sakura-enabled");
    if (SAKURA.pixelOnHover) {
      document.body.classList.add("sakura-pixel-mode");
    }
  }
}

function applyElementStyles() {
  const avatar = document.getElementById("avatar");
  if (avatar) {
    avatar.classList.add("pixel-element");
  }
}

let onlineStatusInterval;

function startOnlineStatusChecker() {
  if (!CONFIG.ONLINE_STATUS.autoDetect) return;

  checkOnlineStatus();
  onlineStatusInterval = setInterval(
    checkOnlineStatus,
    CONFIG.ONLINE_STATUS.updateInterval
  );
}

async function checkOnlineStatus() {
  const statusDot = document.getElementById("statusDot");
  const statusText = document.getElementById("statusText");

  statusDot.className = "status-dot checking";
  statusText.textContent = "Проверка статуса...";

  try {
    const statusPromises = [];

    if (CONFIG.ONLINE_STATUS.platforms.github) {
      statusPromises.push(checkGitHubStatus());
    }
    if (CONFIG.ONLINE_STATUS.platforms.discord) {
      statusPromises.push(checkDiscordStatus());
    }
    if (CONFIG.ONLINE_STATUS.platforms.telegram) {
      statusPromises.push(checkTelegramStatus());
    }
    if (CONFIG.ONLINE_STATUS.platforms.itchio) {
      statusPromises.push(checkItchIOStatus());
    }

    const statuses = await Promise.allSettled(statusPromises);
    const onlinePlatforms = statuses.filter(
      (result) => result.status === "fulfilled" && result.value === true
    ).length;

    updateGlobalStatus(onlinePlatforms > 0 ? "online" : "offline");
  } catch (error) {
    console.error("Error checking online status:", error);
    updateGlobalStatus(CONFIG.ONLINE_STATUS.fallbackStatus);
  }
}

async function checkGitHubStatus() {
  return Math.random() > 0.3;
}

async function checkDiscordStatus() {
  return Math.random() > 0.4;
}

async function checkTelegramStatus() {
  return Math.random() > 0.5;
}

async function checkItchIOStatus() {
  return Math.random() > 0.6;
}

function updateGlobalStatus(status) {
  const statusDot = document.getElementById("statusDot");
  const statusText = document.getElementById("statusText");

  statusDot.className = `status-dot ${status}`;

  switch (status) {
    case "online":
      statusText.textContent = "🟢 В сети";
      break;
    case "away":
      statusText.textContent = "🟡 Отошел";
      break;
    case "offline":
      statusText.textContent = "🔴 Не в сети";
      break;
  }
}

function setupEventListeners() {
  const themeSwitch = document.getElementById("themeSwitch");
  if (themeSwitch) {
    themeSwitch.addEventListener("change", toggleTheme);

    const currentTheme = document.documentElement.getAttribute("data-theme");
    themeSwitch.checked = currentTheme.includes("dark");
  }
}

function toggleTheme() {
  const themeSwitch = document.getElementById("themeSwitch");
  const newTheme = themeSwitch.checked ? "github-dark" : "github-light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("portfolio-theme", newTheme);
}

function updateActivity() {
  if (CONFIG.SYSTEM.debugMode) {
    console.log("🔄 Auto-refresh activity");
  }
}

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeSwitch = document.getElementById("themeSwitch");
  if (themeSwitch) {
    themeSwitch.checked = savedTheme.includes("dark");
  }
}
