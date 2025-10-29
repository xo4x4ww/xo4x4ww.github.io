// ==================== 🚀 MAIN SCRIPT ====================

document.addEventListener("DOMContentLoaded", function () {
  initializeSite();
  loadConfig();
  setupEventListeners();
});

function initializeSite() {
  console.log("🎮 GitHub Portfolio Initialized");
}

function loadConfig() {
  applyAppearanceSettings();
  applyUserSettings();
  applySocialSettings();
  applySkillsSettings();
  applyAchievementsSettings();
  applySakuraSettings();
}

function applyAppearanceSettings() {
  const { APPEARANCE } = CONFIG;

  // Установка GitHub темы
  document.documentElement.setAttribute("data-theme", APPEARANCE.theme);

  // Применение CSS переменных
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

  // Фоновое изображение
  if (APPEARANCE.backgroundImage) {
    document.body.style.backgroundImage = `url(${APPEARANCE.backgroundImage})`;
  }
}

function applySakuraSettings() {
  const { SAKURA } = CONFIG;

  if (!SAKURA.enabled) return;

  // Создаем элемент для сакуры
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

  // Создаем лепестки
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
    `;

  document.getElementById("sakura-container").appendChild(petal);
}

// Добавляем CSS для анимации сакуры
const sakuraStyle = document.createElement("style");
sakuraStyle.textContent = `
    @keyframes sakura-fall {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: ${CONFIG.SAKURA.opacity};
        }
        25% {
            transform: translate(${
              Math.random() * 100 - 50
            }px, 25vh) rotate(90deg) scale(0.9);
        }
        50% {
            transform: translate(${
              Math.random() * 100 - 50
            }px, 50vh) rotate(180deg) scale(0.8);
        }
        75% {
            transform: translate(${
              Math.random() * 100 - 50
            }px, 75vh) rotate(270deg) scale(0.7);
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

// Остальные функции остаются как были (applyUserSettings, applySocialSettings и т.д.)
// ... (код из предыдущего script.js)

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
