// ==================== 🚀 MAIN SCRIPT ====================

// Инициализация сайта
document.addEventListener("DOMContentLoaded", function () {
  initializeSite();
  loadConfig();
  setupEventListeners();
});

// Основная функция инициализации
function initializeSite() {
  console.log("🎮 Pixel Portfolio Initialized");
}

// Загрузка конфига и применение настроек
function loadConfig() {
  applyAppearanceSettings();
  applyUserSettings();
  applySocialSettings();
  applySkillsSettings();
  applyAchievementsSettings();
  applyProjectsSettings();
}

// Применение настроек внешнего вида
function applyAppearanceSettings() {
  const { APPEARANCE } = CONFIG;

  // Установка темы
  document.documentElement.setAttribute("data-theme", APPEARANCE.theme);

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
    "--card-blur",
    `${APPEARANCE.cardBlur}px`
  );

  // Фоновое изображение
  if (APPEARANCE.backgroundImage) {
    document.body.style.backgroundImage = `url(${APPEARANCE.backgroundImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  }
}

// Применение пользовательских настроек
function applyUserSettings() {
  const { USER } = CONFIG;

  document.getElementById("userName").textContent = USER.name;
  document.getElementById("userTitle").textContent = USER.title;
  document.getElementById("customStatus").textContent = USER.customStatus;
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

// Применение настроек соцсетей
function applySocialSettings() {
  const { SOCIAL } = CONFIG;
  const socialLinks = document.getElementById("socialLinks");

  if (!SOCIAL.showOnlineStatus) {
    document.querySelector(".status-indicator").style.display = "none";
  }

  // Создание соц-иконок
  const socials = [
    { name: "GitHub", url: SOCIAL.github, icon: "💻" },
    { name: "Discord", url: SOCIAL.discord, icon: "🎮" },
    { name: "Telegram", url: SOCIAL.telegram, icon: "✈️" },
    { name: "itch.io", url: SOCIAL.itchio, icon: "🎯" },
  ];

  socialLinks.innerHTML = socials
    .filter((social) => social.url)
    .map(
      (social) => `
            <a href="${social.url}" class="social-icon pixel-border" target="_blank" title="${social.name}">
                ${social.icon}
            </a>
        `
    )
    .join("");
}

// Применение настроек навыков
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
                    <div class="pixel-progress-fill" style="width: ${
                      skill.level
                    }%; background: ${
        skill.color || "var(--accent-color)"
      }"></div>
                </div>
            </div>
        `
    )
    .join("");
}

// Применение настроек ачивок
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
            <div class="achievement pixel-border ${
              achievement.unlocked ? "" : "locked"
            }" 
                 style="border-color: ${
                   achievement.unlocked
                     ? achievement.color
                     : "var(--text-color)"
                 }">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-name">${achievement.name}</div>
                ${
                  achievement.unlocked
                    ? `<div class="achievement-desc">${achievement.description}</div>`
                    : '<div class="achievement-desc">🔒 Заблокировано</div>'
                }
            </div>
        `
    )
    .join("");
}

// Применение настроек проектов
function applyProjectsSettings() {
  const { PROJECTS, SECTIONS } = CONFIG;

  if (!SECTIONS.showProjects) {
    // Скрываем секцию проектов если нужно
    const projectsCard = document.querySelector(".projects-card");
    if (projectsCard) projectsCard.style.display = "none";
  }
  // Реализацию проектов добавим позже
}

// Настройка обработчиков событий
function setupEventListeners() {
  // Переключение темы
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Авто-обновление
  if (CONFIG.SYSTEM.autoRefresh) {
    setInterval(updateActivity, CONFIG.SYSTEM.refreshInterval);
  }
}

// Переключение темы
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);

  const themeToggle = document.getElementById("themeToggle");
  themeToggle.textContent = newTheme === "dark" ? "🌙" : "☀️";

  // Сохраняем в localStorage
  localStorage.setItem("portfolio-theme", newTheme);
}

// Обновление активности (заглушка)
function updateActivity() {
  if (CONFIG.SYSTEM.debugMode) {
    console.log("🔄 Auto-refresh activity");
  }
}

// Загрузка сохраненной темы
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.textContent = savedTheme === "dark" ? "🌙" : "☀️";
  }
}
