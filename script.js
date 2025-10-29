// ==================== 🚀 MAIN SCRIPT ====================

document.addEventListener("DOMContentLoaded", function () {
  initializeSite();
  loadConfig();
  setupEventListeners();
  startOnlineStatusChecker();
});

function initializeSite() {
  console.log("🎮 Vertical GitHub Portfolio Initialized");
}

function loadConfig() {
  applyAppearanceSettings();
  applyUserSettings();
  applySocialSettings();
  applySkillsSettings();
  applyAchievementsSettings();
  applySakuraSettings();
  applyPixelEffects();
}

// ==================== 🌐 ОНЛАЙН СТАТУС ====================

let onlineStatusInterval;

function startOnlineStatusChecker() {
  if (!CONFIG.ONLINE_STATUS.autoDetect) return;

  checkOnlineStatus(); // Первая проверка сразу
  onlineStatusInterval = setInterval(
    checkOnlineStatus,
    CONFIG.ONLINE_STATUS.updateInterval
  );
}

async function checkOnlineStatus() {
  const statusDot = document.getElementById("statusDot");
  const statusText = document.getElementById("statusText");

  // Показываем статус проверки
  statusDot.className = "status-dot checking";
  statusText.textContent = "Проверка статуса...";

  try {
    const statuses = await Promise.allSettled([
      CONFIG.ONLINE_STATUS.platforms.github ? checkGitHubStatus() : null,
      CONFIG.ONLINE_STATUS.platforms.discord ? checkDiscordStatus() : null,
      CONFIG.ONLINE_STATUS.platforms.telegram ? checkTelegramStatus() : null,
      CONFIG.ONLINE_STATUS.platforms.itchio ? checkItchIOStatus() : null,
    ]);

    const onlinePlatforms = statuses.filter(
      (result) => result.status === "fulfilled" && result.value === true
    ).length;

    updateGlobalStatus(onlinePlatforms > 0 ? "online" : "offline");
    updatePlatformStatuses(statuses);
  } catch (error) {
    console.error("Error checking online status:", error);
    updateGlobalStatus(CONFIG.ONLINE_STATUS.fallbackStatus);
  }
}

async function checkGitHubStatus() {
  // Заглушка - в реальности нужно API GitHub
  return Math.random() > 0.5; // 50% шанс быть онлайн
}

async function checkDiscordStatus() {
  // Заглушка - в реальности нужно Discord API
  return Math.random() > 0.3; // 70% шанс быть онлайн
}

async function checkTelegramStatus() {
  // Заглушка - в реальности нужно Telegram API
  return Math.random() > 0.4; // 60% шанс быть онлайн
}

async function checkItchIOStatus() {
  // Заглушка - в реальности нужно Itch.io API
  return Math.random() > 0.6; // 40% шанс быть онлайн
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

function updatePlatformStatuses(statuses) {
  const socialLinks = document.querySelectorAll(".social-link");

  socialLinks.forEach((link, index) => {
    const statusElement = link.querySelector(".social-status");
    if (statusElement && statuses[index]) {
      const isOnline =
        statuses[index].status === "fulfilled" && statuses[index].value;
      statusElement.textContent = isOnline ? "online" : "offline";
      statusElement.className = `social-status ${
        isOnline ? "online" : "offline"
      }`;
    }
  });
}

// ==================== 🎮 САКУРА С ПИКСЕЛЬНЫМ ЭФФЕКТОМ ====================

function applySakuraSettings() {
  const { SAKURA } = CONFIG;
  if (!SAKURA.enabled) return;

  const sakuraContainer = document.createElement("div");
  sakuraContainer.id = "sakura-container";
  sakuraContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    `;
  document.body.appendChild(sakuraContainer);

  for (let i = 0; i < SAKURA.density; i++) {
    createSakuraPetal(i);
  }
}

function createSakuraPetal(index) {
  const petal = document.createElement("div");
  const color =
    CONFIG.SAKURA.colors[
      Math.floor(Math.random() * CONFIG.SAKURA.colors.length)
    ];

  petal.className = "sakura-petal";
  petal.style.cssText = `
        position: absolute;
        width: ${12 + Math.random() * 12}px;
        height: ${8 + Math.random() * 8}px;
        background: ${color};
        border-radius: 70% 30% 80% 20% / 60% 40% 60% 40%;
        opacity: ${CONFIG.SAKURA.opacity};
        filter: drop-shadow(1px 1px 2px rgba(255, 128, 171, 0.3));
        top: -50px;
        left: ${Math.random() * 100}%;
        animation: sakura-fall ${
          CONFIG.SAKURA.speed + Math.random() * 10
        }s linear infinite;
        animation-delay: ${Math.random() * 5}s;
        transition: all ${CONFIG.SAKURA.hoverPixelTime}s ease;
    `;

  // Добавляем обработчики для пиксельного эффекта
  if (CONFIG.SAKURA.pixelOnHover) {
    petal.style.pointerEvents = "auto";
    petal.addEventListener("mouseenter", function () {
      this.style.imageRendering = "pixelated";
      this.style.filter = "contrast(1.5) brightness(1.2)";
      this.style.transform = "scale(1.3) rotate(180deg)";
    });

    petal.addEventListener("mouseleave", function () {
      this.style.imageRendering = "auto";
      this.style.filter = "drop-shadow(1px 1px 2px rgba(255, 128, 171, 0.3))";
      this.style.transform = "scale(1) rotate(0deg)";
    });
  }

  document.getElementById("sakura-container").appendChild(petal);
}

// ==================== 🎯 ПИКСЕЛЬНЫЕ ЭФФЕКТЫ ====================

function applyPixelEffects() {
  const { PIXEL_EFFECTS } = CONFIG;
  if (!PIXEL_EFFECTS.enabled) return;

  // Добавляем классы для элементов с пиксельными эффектами
  PIXEL_EFFECTS.elements.forEach((elementType) => {
    const elements = document.querySelectorAll(`.${elementType}`);
    elements.forEach((element) => {
      element.classList.add("pixel-effect");

      if (PIXEL_EFFECTS.hoverPixel) {
        element.addEventListener("mouseenter", function () {
          this.style.imageRendering = "pixelated";
        });

        element.addEventListener("mouseleave", function () {
          this.style.imageRendering = "auto";
        });
      }

      if (PIXEL_EFFECTS.alwaysPixel) {
        element.style.imageRendering = "pixelated";
      }
    });
  });
}

// ==================== 🎨 ОСТАЛЬНЫЕ ФУНКЦИИ ====================

function applyAppearanceSettings() {
  const { APPEARANCE } = CONFIG;
  document.documentElement.setAttribute("data-theme", APPEARANCE.theme);
  document.documentElement.style.setProperty(
    "--transition-speed",
    `${APPEARANCE.transitionSpeed}s`
  );

  // Применяем CSS переменные
  Object.keys(APPEARANCE).forEach((key) => {
    if (key.includes("Color")) {
      document.documentElement.style.setProperty(`--${key}`, APPEARANCE[key]);
    }
  });
}

function applyUserSettings() {
  const { USER } = CONFIG;
  document.getElementById("userName").textContent = USER.name;
  document.getElementById("userTitle").textContent = USER.title;
  document.getElementById("userBio").textContent = USER.bio;

  const avatar = document.getElementById("avatar");
  if (USER.avatar) {
    avatar.src = USER.avatar;
    avatar.alt = `${USER.name} Avatar`;
  }
}

function applySocialSettings() {
  const { SOCIAL } = CONFIG;
  const socialLinks = document.getElementById("socialLinks");

  const socials = [
    { name: "GitHub", data: SOCIAL.github, icon: "💻" },
    { name: "Discord", data: SOCIAL.discord, icon: "🎮" },
    { name: "Telegram", data: SOCIAL.telegram, icon: "✈️" },
    { name: "Itch.io", data: SOCIAL.itchio, icon: "🎯" },
  ];

  socialLinks.innerHTML = socials
    .filter((social) => social.data && social.data.url)
    .map(
      (social) => `
            <a href="${social.data.url}" class="social-link pixel-effect" target="_blank">
                <div class="social-icon">${social.icon}</div>
                <span>${social.name}</span>
                <div class="social-status checking">...</div>
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
                <span class="skill-name">${skill.name}</span>
                ${
                  SKILLS.showPercentage
                    ? `<span class="skill-percent">${skill.level}%</span>`
                    : ""
                }
            </div>
            <div class="progress-bar">
                <div class="progress-fill pixel-effect" 
                     style="width: ${skill.level}%; background: ${
        skill.color || "var(--accent-color)"
      }">
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

function applyAchievementsSettings() {
  const { ACHIEVEMENTS } = CONFIG;
  const achievementsGrid = document.getElementById("achievementsGrid");

  achievementsGrid.innerHTML = ACHIEVEMENTS.items
    .map(
      (achievement) => `
        <div class="achievement pixel-effect ${
          achievement.unlocked ? "" : "locked"
        }">
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-desc">${achievement.description}</div>
        </div>
    `
    )
    .join("");
}

function setupEventListeners() {
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme.includes("light")
    ? "github-dark"
    : "github-light";
  document.documentElement.setAttribute("data-theme", newTheme);

  const themeToggle = document.getElementById("themeToggle");
  themeToggle.textContent = newTheme === "github-dark" ? "🌙" : "☀️";
  localStorage.setItem("portfolio-theme", newTheme);
}

// Загрузка сохраненной темы
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.textContent = savedTheme.includes("dark") ? "🌙" : "☀️";
  }
}

// CSS для анимации сакуры
const sakuraStyle = document.createElement("style");
sakuraStyle.textContent = `
    @keyframes sakura-fall {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: ${CONFIG.SAKURA.opacity};
        }
        100% {
            transform: translate(${
              Math.random() * 100 - 50
            }px, 100vh) rotate(360deg) scale(0.6);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sakuraStyle);
