// ==================== ⚙️ KONФИГ ПОРТФОЛИО ====================
// АБСОЛЮТНО ВСЕ настройки сайта здесь! Меняй значения - меняется ВСЁ!

const CONFIG = {
  // ==================== 👤 ОСНОВНЫЕ НАСТРОЙКИ ====================
  USER: {
    name: "Ваше Имя",
    title: "Pixel Artist & Web Developer",
    status: "🟢 ONLINE",
    customStatus: "Открыт для проектов!",
    avatar: "src/images/avatar.jpg",
    bio: "Занимаюсь пиксельной графикой и веб-разработкой. Создаю минималистичные и функциональные проекты.",
    team: "Zed Red Games",
  },

  // ==================== 🎨 ВНЕШНИЙ ВИД ====================
  APPEARANCE: {
    theme: "github-dark",
    accentColor: "#58a6ff",
    backgroundColor: "#0d1117",
    cardColor: "#161b22",
    textColor: "#f0f6fc",
    borderColor: "#30363d",
    cardBlur: 0,
    animations: true,
    backgroundImage: "",
    smoothTransitions: true,
    transitionSpeed: 0.3,
  },

  // ==================== 🌐 ОНЛАЙН СТАТУС ====================
  ONLINE_STATUS: {
    autoDetect: true,
    updateInterval: 60000,
    platforms: {
      github: true,
      discord: true,
      telegram: true,
      itchio: true,
    },
    fallbackStatus: "online",
  },

  // ==================== 🎮 АНИМАЦИЯ САКУРЫ ====================
  SAKURA: {
    enabled: true,
    pixelOnHover: true,
  },

  // ==================== 🎯 СТИЛИ ЭЛЕМЕНТОВ ====================
  ELEMENT_STYLES: {
    pixelElements: ["pixel-art", "achievements", "game-assets", "pixel-button"],
    qualityElements: ["html-skill", "css-skill", "web-tech", "code"],
    transitionElements: ["all"],
  },

  // ==================== 🛠 НАВЫКИ ====================
  SKILLS: {
    items: [
      {
        name: "HTML",
        level: 90,
        color: "#e34f26",
        style: "quality",
        description: "Семантическая верстка",
      },
      {
        name: "CSS",
        level: 85,
        color: "#2965f1",
        style: "quality",
        description: "Адаптивный дизайн",
      },
      {
        name: "Pixel Art",
        level: 70,
        color: "#ba68c8",
        style: "pixel",
        description: "Создание спрайтов",
      },
      {
        name: "UI Design",
        level: 65,
        color: "#10b981",
        style: "quality",
        description: "Интерфейсы",
      },
    ],
    showPercentage: true,
  },

  // ==================== 🏆 АЧИВКИ ====================
  ACHIEVEMENTS: {
    items: [
      {
        id: "first_project",
        name: "Первый Проект",
        unlocked: true,
        icon: "🚀",
        description: "Запустил первый сайт",
        color: "#3fb950",
        style: "pixel",
      },
      {
        id: "pixel_artist",
        name: "Pixel Artist",
        unlocked: true,
        icon: "🎨",
        description: "10+ пиксельартов",
        color: "#a371f7",
        style: "pixel",
      },
      {
        id: "web_master",
        name: "Web Master",
        unlocked: true,
        icon: "🌐",
        description: "Освоил HTML/CSS",
        color: "#58a6ff",
        style: "quality",
      },
    ],
    showLocked: true,
  },

  // ==================== 📱 СОЦСЕТИ ====================
  SOCIAL: {
    ok: { url: "https://ok.ru/yourprofile", username: "yourusername" },
    pinterest: {
      url: "https://pinterest.com/yourprofile",
      username: "yourusername",
    },
    telegram: { url: "https://t.me/yourusername", username: "yourusername" },
    vk: { url: "https://vk.com/yourprofile", username: "yourusername" },
    youtube: {
      url: "https://youtube.com/yourchannel",
      username: "yourusername",
    },
    linkedin: {
      url: "https://linkedin.com/in/yourprofile",
      username: "yourusername",
    },
    github: {
      url: "https://github.com/yourusername",
      username: "yourusername",
    },
    itchio: { url: "https://yourusername.itch.io", username: "yourusername" },
    email: "your.email@example.com",
  },

  // ==================== ⚙️ СИСТЕМНЫЕ ====================
  SYSTEM: {
    autoRefresh: true,
    refreshInterval: 30000,
    offlineMode: false,
    debugMode: false,
    language: "ru",
  },
};
