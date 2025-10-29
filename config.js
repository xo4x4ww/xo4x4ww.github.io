// ==================== ⚙️ KONФИГ ПОРТФОЛИО ====================
const CONFIG = {
  // ==================== 👤 ОСНОВНЫЕ НАСТРОЙКИ ====================
  USER: {
    name: "Ваше Имя",
    title: "Pixel Artist & Web Developer",
    status: "🟢 ONLINE",
    customStatus: "Открыт для проектов!",
    avatar: "assets/images/avatar.jpg",
    bio: "Занимаюсь пиксельной графикой и веб-разработкой.",
  },

  // ==================== 🎨 ВНЕШНИЙ ВИД ====================
  APPEARANCE: {
    theme: "github-dark", // github-dark / github-light / auto
    accentColor: "#58a6ff", // GitHub синий
    backgroundColor: "#0d1117", // GitHub темный фон
    cardColor: "#161b22", // GitHub карточки
    textColor: "#f0f6fc", // GitHub текст
    cardBlur: 0, // Без размытия для GitHub стиля
    animations: true,
    particleEffects: true, // Включаем анимацию сакуры
    backgroundImage: "",
    githubTheme: true, // Специальный GitHub стиль
  },

  // ==================== 🎮 АНИМАЦИЯ САКУРЫ ====================
  SAKURA: {
    enabled: true, // Включить анимацию сакуры: true/false
    density: 6, // Количество лепестков (макс: 20, мин: 0)
    speed: 15, // Скорость анимации (макс: 30, мин: 5)
    colors: ["#ffb7d5", "#ff80ab", "#ffcdd2", "#f8bbd0", "#f48fb1"], // Цвета лепестков
    opacity: 0.8, // Прозрачность (макс: 1, мин: 0.1)
  },

  // ==================== 🛠 НАВЫКИ ====================
  SKILLS: {
    items: [
      { name: "HTML", level: 90, color: "#e34f26" },
      { name: "CSS", level: 85, color: "#2965f1" },
      { name: "Pixel Art", level: 70, color: "#ba68c8" },
      { name: "UI Design", level: 65, color: "#10b981" },
    ],
    maxVisible: 6,
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
    maxVisible: 8,
    showLocked: true,
  },

  // ==================== 📱 СОЦСЕТИ ====================
  SOCIAL: {
    github: "https://github.com/yourusername",
    discord: "https://discord.gg/yourinvite",
    telegram: "https://t.me/yourusername",
    itchio: "https://yourusername.itch.io",
    email: "your.email@example.com",
    linkedin: "",

    showOnlineStatus: true,
    showActivityFeed: true,
    contactButton: true,
  },

  // ==================== ⚙️ СИСТЕМНЫЕ ====================
  SYSTEM: {
    autoRefresh: true,
    refreshInterval: 30000,
    offlineMode: false,
    debugMode: false,
    language: "ru",
  },

  // ==================== 🎯 СЕКЦИИ ====================
  SECTIONS: {
    showSkills: true,
    showAchievements: true,
    showProjects: false,
    showActivity: true,
    showContact: true,
  },
};
