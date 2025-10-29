// ==================== ⚙️ KONФИГ ПОРТФОЛИО ====================
const CONFIG = {
  // ==================== 👤 ОСНОВНЫЕ НАСТРОЙКИ ====================
  USER: {
    name: "Ваше Имя",
    title: "Pixel Artist & Web Developer",
    avatar: "assets/images/avatar.jpg",
    bio: "Занимаюсь пиксельной графикой и веб-разработкой.",
  },

  // ==================== 🎨 ВНЕШНИЙ ВИД ====================
  APPEARANCE: {
    theme: "github-dark",
    accentColor: "#58a6ff",
    backgroundColor: "#0d1117",
    cardColor: "#161b22",
    textColor: "#f0f6fc",
    borderColor: "#30363d",
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
    density: 8,
    speed: 20,
    colors: ["#ffb7d5", "#ff80ab", "#ffcdd2", "#f8bbd0", "#f48fb1"],
    opacity: 0.7,
    pixelOnHover: true, // Пикселить при наведении
    hoverPixelTime: 0.2, // Время перехода в пиксель (сек)
  },

  // ==================== 🎯 ПИКСЕЛЬНЫЕ ЭФФЕКТЫ ====================
  PIXEL_EFFECTS: {
    enabled: true,
    elements: ["achievements", "skills", "social-icons"], // Элементы с эффектом
    hoverPixel: true, // Пикселить при наведении
    alwaysPixel: false, // Всегда пиксельные
    transition: true, // Плавные переходы
  },

  // ==================== 🛠 НАВЫКИ ====================
  SKILLS: {
    items: [
      { name: "HTML", level: 90, color: "#e34f26" },
      { name: "CSS", level: 85, color: "#2965f1" },
      { name: "Pixel Art", level: 70, color: "#ba68c8" },
      { name: "UI Design", level: 65, color: "#10b981" },
    ],
    showPercentage: true,
  },

  // ==================== 🏆 АЧИВКИ ====================
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
    ],
  },

  // ==================== 📱 СОЦСЕТИ ====================
  SOCIAL: {
    github: {
      url: "https://github.com/yourusername",
      username: "yourusername",
    },
    discord: { url: "https://discord.gg/yourinvite", username: "yourusername" },
    telegram: { url: "https://t.me/yourusername", username: "yourusername" },
    itchio: { url: "https://yourusername.itch.io", username: "yourusername" },
    email: "your.email@example.com",
  },
};
