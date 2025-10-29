// ==================== ⚙️ KONФИГ ПОРТФОЛИО ====================
// АБСОЛЮТНО ВСЕ настройки сайта здесь! Меняй значения - меняется ВСЁ!

const CONFIG = {
  // ==================== 👤 ОСНОВНЫЕ НАСТРОЙКИ ====================
  USER: {
    name: "Ваше Имя", // Имя (макс: 20 символов, мин: 1)
    title: "Pixel Artist & Web Developer", // Титул (макс: 40 символов)
    status: "🟢 ONLINE", // Статус: 🟢 ONLINE / 🟡 AWAY / 🔴 OFFLINE
    customStatus: "Открыт для проектов!", // Кастомный статус (макс: 30 символов)
    avatar: "assets/images/avatar.png", // Путь к аватарке (или URL)
    bio: "Занимаюсь пиксельной графикой и веб-разработкой. Люблю создавать минималистичные и функциональные проекты.", // Био (макс: 200 символов)
    team: "Zed Red Games", // Название команды
  },

  // ==================== 🎨 ВНЕШНИЙ ВИД ====================
  APPEARANCE: {
    theme: "github-dark", // github-dark / github-light / auto
    accentColor: "#58a6ff", // Акцентный цвет (hex/rgb/hsl)
    backgroundColor: "#0d1117", // Цвет фона (hex/rgb/hsl)
    cardColor: "#161b22", // Цвет карточек (макс: любой цвет)
    textColor: "#f0f6fc", // Цвет текста (макс: любой цвет)
    borderColor: "#30363d", // Цвет границ
    cardBlur: 0, // Размытие карточек (макс: 20, мин: 0)
    animations: true, // Анимации: true/false
    particleEffects: true, // Частицы на фоне: true/false
    backgroundImage: "", // Фоновая картинка (путь или URL)
    githubTheme: true, // Специальный GitHub стиль
    smoothTransitions: true, // Плавные переходы пиксель/непиксель
    transitionSpeed: 0.3, // Скорость переходов (сек)
  },

  // ==================== 🌐 ОНЛАЙН СТАТУС ====================
  ONLINE_STATUS: {
    autoDetect: true, // Авто-определение онлайн статуса
    updateInterval: 60000, // Интервал проверки (мс)
    platforms: {
      github: true, // Проверять GitHub
      discord: true, // Проверять Discord
      telegram: true, // Проверять Telegram
      itchio: true, // Проверять Itch.io
    },
    fallbackStatus: "online", // Если не удалось определить
  },

  // ==================== 🎮 АНИМАЦИЯ САКУРЫ ====================
  SAKURA: {
    enabled: true,
    density: 12, // Количество лепестков (макс: 30, мин: 0)
    speed: 20, // Скорость анимации (макс: 30, мин: 5)
    colors: ["#ffb7d5", "#ff80ab", "#ffcdd2", "#f8bbd0", "#f48fb1"],
    opacity: 0.7,
    pixelOnHover: true,
    hoverPixelTime: 0.2,
    animationTypes: [
      "sakura-fall-1",
      "sakura-fall-2",
      "sakura-fall-3",
      "sakura-fall-4",
      "sakura-fall-5",
      "sakura-fall-6",
    ],
    sizes: ["small", "medium", "large"],
    backgroundEffect: false, // Градиентный фон: true/false
  },

  // ==================== 🎯 ПИКСЕЛЬНЫЕ ЭФФЕКТЫ ====================
  PIXEL_EFFECTS: {
    enabled: true,
    elements: [
      "achievement",
      "social-icon",
      "pixel-button",
      "pixel-progress",
      "avatar",
    ], // Элементы с эффектом
    hoverPixel: true, // Пикселить при наведении
    alwaysPixel: false, // Всегда пиксельные
    transition: true, // Плавные переходы
  },

  // ==================== 🛠 НАВЫКИ И ПРОГРЕСС-БАРЫ ====================
  SKILLS: {
    // Прогресс-бары навыков (макс: 100, мин: 0)
    items: [
      { name: "HTML", level: 90, color: "#e34f26" },
      { name: "CSS", level: 85, color: "#2965f1" },
      { name: "Pixel Art", level: 70, color: "#ba68c8" },
      { name: "UI Design", level: 65, color: "#10b981" },
    ],
    maxVisible: 6, // Макс. показываемых навыков (макс: 10)
    showPercentage: true, // Показывать проценты: true/false
  },

  // ==================== 🏆 АЧИВКИ И ДОСТИЖЕНИЯ ====================
  ACHIEVEMENTS: {
    items: [
      {
        id: "first_project",
        name: "First Project",
        unlocked: true,
        icon: "🚀",
        description: "Первый запущенный проект",
        color: "#3fb950",
      },
      {
        id: "pixel_artist",
        name: "Pixel Artist",
        unlocked: true,
        icon: "🎨",
        description: "10+ созданных пиксельартов",
        color: "#a371f7",
      },
      {
        id: "github_streak",
        name: "GitHub Streak",
        unlocked: false,
        icon: "🔥",
        description: "30 дней коммитов подряд",
        color: "#f59e0b",
      },
    ],
    maxVisible: 8, // Макс. показываемых ачивок
    showLocked: true, // Показывать заблокированные: true/false
  },

  // ==================== 📱 СОЦСЕТИ И КОНТАКТЫ ====================
  SOCIAL: {
    // Активные соцсети (менять ссылки!)
    github: {
      url: "https://github.com/yourusername",
      username: "yourusername",
    },
    discord: { url: "https://discord.gg/yourinvite", username: "yourusername" },
    telegram: { url: "https://t.me/yourusername", username: "yourusername" },
    itchio: { url: "https://yourusername.itch.io", username: "yourusername" },
    email: "your.email@example.com",
    linkedin: "",

    // Настройки отображения
    showOnlineStatus: true,
    showActivityFeed: true,
    contactButton: true,
  },

  // ==================== 📊 ПРОЕКТЫ И ПОРТФОЛИО ====================
  PROJECTS: {
    items: [
      // ДОБАВЬТЕ СВОИ ПРОЕКТЫ ЗДЕСЬ
      // {
      //   name: "Мой сайт",
      //   description: "Пиксельный портфолио",
      //   status: "completed",
      //   technologies: ["HTML", "CSS"],
      //   link: "#",
      //   image: "assets/project1.jpg"
      // },
    ],
    maxVisible: 4, // Макс. показываемых проектов (макс: 8)
    showImages: true, // Показывать картинки проектов: true/false
  },

  // ==================== ⚙️ СИСТЕМНЫЕ НАСТРОЙКИ ====================
  SYSTEM: {
    autoRefresh: true, // Авто-обновление активности: true/false
    refreshInterval: 30000, // Интервал обновления (мс, макс: 300000)
    offlineMode: false, // Оффлайн режим: true/false
    debugMode: false, // Режим отладки: true/false
    language: "ru", // Язык: "ru" / "en"
  },

  // ==================== 🎯 ДОПОЛНИТЕЛЬНЫЕ СЕКЦИИ ====================
  SECTIONS: {
    showSkills: true, // Показывать секцию навыков: true/false
    showAchievements: true, // Показывать секцию ачивок: true/false
    showProjects: false, // Показывать секцию проектов: true/false
    showActivity: true, // Показывать секцию активности: true/false
    showContact: true, // Показывать контакты: true/false
  },
};

// ==================== 🚀 ЭКСПОРТ КОНФИГА ====================
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
