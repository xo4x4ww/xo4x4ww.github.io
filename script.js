// ==================== 🚀 MAIN SCRIPT ====================

document.addEventListener("DOMContentLoaded", function () {
  initializeSite();
  loadConfig();
  setupEventListeners();
  startOnlineStatusChecker();
});

function initializeSite() {
  console.log("🎮 Pixel Portfolio Initialized");
  if (CONFIG.SYSTEM.debugMode) {
    console.log("Debug mode enabled");
  }
}

// ==================== ⚙️ ЗАГРУЗКА КОНФИГА ====================

function loadConfig() {
  applyAppearanceSettings();
  applyUserSettings();
  applySocialSettings();
  applySkillsSettings();
  applyAchievementsSettings();
  applyProjectsSettings();
  applySakuraSettings();
  applyPixelEffects();

  if (CONFIG.SYSTEM.autoRefresh) {
    setInterval(updateActivity, CONFIG.SYSTEM.refreshInterval);
  }
}

// ==================== 🎨 ВНЕШНИЙ ВИД ====================

function applyAppearanceSettings() {
  const { APPEARANCE } = CONFIG;

  // Установка темы
  let theme = APPEARANCE.theme;
  if (theme === "auto") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "github-dark"
      : "github-light";
  }
  document.documentElement.setAttribute("data-theme", theme);

  // Установка CSS переменных
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
    APPEARANCE.borderColor || "#30363d"
  );
  document.documentElement.style.setProperty(
    "--card-blur",
    `${APPEARANCE.cardBlur}px`
  );
  document.documentElement.style.setProperty(
    "--transition-speed",
    `${APPEARANCE.transitionSpeed}s`
  );

  // Фоновое изображение
  if (APPEARANCE.backgroundImage) {
    document.body.style.backgroundImage = `url(${APPEARANCE.backgroundImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  }
}

// ==================== 👤 ПОЛЬЗОВАТЕЛЬСКИЕ НАСТРОЙКИ ====================

function applyUserSettings() {
  const { USER } = CONFIG;

  document.getElementById("userName").textContent = USER.name;
  document.getElementById("userTitle").textContent = USER.title;
  document.getElementById("customStatus").textContent = USER.customStatus;
  document.getElementById("userBio").textContent = USER.bio;
  document.getElementById("teamName").textContent = USER.team || "";

  // Статус онлайн
  const statusDot = document.getElementById("statusDot");
  const statusText = document.getElementById("statusText");

  statusDot.className = `status-dot ${USER.status
    .toLowerCase()
    .replace("🟢 ", "")
    .replace("🔴 ", "")
    .replace("🟡 ", "")}`;
  statusText.textContent = USER.status;

  // Аватар
  const avatar = document.getElementById("avatar");
  if (USER.avatar) {
    avatar.src = USER.avatar;
    avatar.alt = `${USER.name} Avatar`;
  }
}

// ==================== 📱 СОЦСЕТИ ====================

function applySocialSettings() {
  const { SOCIAL, SECTIONS } = CONFIG;
  const socialLinks = document.getElementById("socialLinks");

  if (!SECTIONS.showContact) {
    document.querySelector(".footer").style.display = "none";
    return;
  }

  if (!SOCIAL.showOnlineStatus) {
    document.querySelector(".status-indicator").style.display = "none";
  }

  // Создание соц-иконок
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
            <a href="${social.data.url}" class="social-icon pixel-effect" target="_blank" title="${social.name}">
                ${social.icon} ${social.name}
            </a>
        `
    )
    .join("");
}

// ==================== 🛠 НАВЫКИ ====================

function applySkillsSettings() {
  const { SKILLS, SECTIONS } = CONFIG;
  const skillsList = document.getElementById("skillsList");

  if (!SECTIONS.showSkills) {
    document.querySelector(".skills-card").style.display = "none";
    return;
  }

  if (SKILLS.items.length === 0) {
    skillsList.innerHTML = "<p>Навыки не добавлены</p>";
    return;
  }

  skillsList.innerHTML = SKILLS.items
    .slice(0, SKILLS.maxVisible)
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
                <div class="pixel-progress">
                    <div class="pixel-progress-fill pixel-effect" 
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

// ==================== 🏆 АЧИВКИ ====================

function applyAchievementsSettings() {
  const { ACHIEVEMENTS, SECTIONS } = CONFIG;
  const achievementsGrid = document.getElementById("achievementsGrid");

  if (!SECTIONS.showAchievements) {
    document.querySelector(".achievements-card").style.display = "none";
    return;
  }

  const achievementsToShow = ACHIEVEMENTS.showLocked
    ? ACHIEVEMENTS.items
    : ACHIEVEMENTS.items.filter((ach) => ach.unlocked);

  achievementsGrid.innerHTML = achievementsToShow
    .slice(0, ACHIEVEMENTS.maxVisible)
    .map(
      (achievement) => `
            <div class="achievement pixel-effect ${
              achievement.unlocked ? "" : "locked"
            }" 
                 style="border-color: ${
                   achievement.unlocked
                     ? achievement.color || "var(--accent-color)"
                     : "var(--border-color)"
                 }">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-desc">${achievement.description}</div>
            </div>
        `
    )
    .join("");
}

// ==================== 📊 ПРОЕКТЫ ====================

function applyProjectsSettings() {
  const { PROJECTS, SECTIONS } = CONFIG;

  if (!SECTIONS.showProjects) {
    // Секция проектов скрыта в конфиге
    return;
  }

  // Логика для отображения проектов будет добавлена позже
  if (CONFIG.SYSTEM.debugMode) {
    console.log("Projects section disabled in config");
  }
}

// ==================== 🌐 ОНЛАЙН СТАТУС ====================

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
  // Заглушка для GitHub статуса
  return Math.random() > 0.3;
}

async function checkDiscordStatus() {
  // Заглушка для Discord статуса
  return Math.random() > 0.4;
}

async function checkTelegramStatus() {
  // Заглушка для Telegram статуса
  return Math.random() > 0.5;
}

async function checkItchIOStatus() {
  // Заглушка для Itch.io статуса
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

// ==================== 🎮 САКУРА ====================

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
  const randomX = Math.random() * 100 - 50;

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
        --random-x: ${randomX}px;
    `;

  // Пиксельный эффект при наведении
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

  PIXEL_EFFECTS.elements.forEach((elementType) => {
    const elements = document.querySelectorAll(`.${elementType}`);
    elements.forEach((element) => {
      if (PIXEL_EFFECTS.transition) {
        element.classList.add("pixel-effect");
      }

      if (PIXEL_EFFECTS.hoverPixel) {
        element.addEventListener("mouseenter", function () {
          this.style.imageRendering = "pixelated";
        });

        element.addEventListener("mouseleave", function () {
          if (!PIXEL_EFFECTS.alwaysPixel) {
            this.style.imageRendering = "auto";
          }
        });
      }

      if (PIXEL_EFFECTS.alwaysPixel) {
        element.style.imageRendering = "pixelated";
      }
    });
  });
}

// ==================== ⚙️ СИСТЕМНЫЕ ФУНКЦИИ ====================

function setupEventListeners() {
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme;

  if (currentTheme.includes("light")) {
    newTheme = "github-dark";
  } else {
    newTheme = "github-light";
  }

  document.documentElement.setAttribute("data-theme", newTheme);

  const themeToggle = document.getElementById("themeToggle");
  themeToggle.textContent = newTheme === "github-dark" ? "🌙" : "☀️";
  themeToggle.className =
    newTheme === "github-dark" ? "pixel-button" : "pixel-button";

  localStorage.setItem("portfolio-theme", newTheme);
}

function updateActivity() {
  if (CONFIG.SYSTEM.debugMode) {
    console.log("🔄 Auto-refresh activity");
  }
}

// ==================== 🚀 ИНИЦИАЛИЗАЦИЯ ====================

// Загрузка сохраненной темы
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.textContent = savedTheme.includes("dark") ? "🌙" : "☀️";
  }
}

// Добавляем CSS для анимации сакуры
const sakuraStyle = document.createElement("style");
sakuraStyle.textContent = `
    @keyframes sakura-fall {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: ${CONFIG.SAKURA.opacity};
        }
        100% {
            transform: translate(var(--random-x), 100vh) rotate(360deg) scale(0.6);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sakuraStyle);
