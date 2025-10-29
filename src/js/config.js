// ==================== ⚙️ KONФИГ ПОРТФОЛИО ====================
// АБСОЛЮТНО ВСЕ настройки сайта здесь! Меняй значения - меняется ВСЁ!

const CONFIG = {
  // ==================== 👤 ОСНОВНЫЕ НАСТРОЙКИ ====================
  USER: {
    name: "Ваше Имя",
    title: "Game Dev Enthusiast | Pixel Art Lover",
    status: "🟢 ONLINE",
    customStatus: "Создаю игры с душой!",
    avatar: "src/images/avatar.png",
    bio: `🎮 Game Dev Enthusiast | Pixel Art Lover | Mechanics Explorer

«Верю, что лучшие игры рождаются на стыке механик, искусства и истории. Создаю их от сердца, вкладывая душу в каждый пиксель и каждую игровую механику.»

Моя философия проста:
• Игра это эмоции
• Механики важнее графики (но пиксель-арт ❤️)
• Сообщество это семья  
• Процесс важнее результата

В моих проектах ты найдешь:
🎯 Уникальные геймплейные механики
🎨 Душевный пиксель-арт
📖 Истории, которые заставляют задуматься
🚀 Прототипы безумных идей из геймджемов
💫 И ту самую магию, ради которой мы любим инди-игры`,
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
        name: "Game Design",
        level: 85,
        color: "#f59e0b",
        style: "pixel",
        description: "Проектирование игровых механик"
      },
      {
        name: "Pixel Art",
        level: 80,
        color: "#ba68c8",
        style: "pixel",
        description: "Создание спрайтов и анимаций"
      },
      {
        name: "Unity",
        level: 75,
        color: "#000000",
        style: "quality",
        description: "Разработка игр"
      },
      {
        name: "UI/UX Design",
        level: 70,
        color: "#10b981",
        style: "quality",
        description: "Интерфейсы и пользовательский опыт"
      },
      {
        name: "HTML/CSS",
        level: 90,
        color: "#e34f26",
        style: "quality",
        description: "Верстка и веб-разработка"
      },
      {
        name: "JavaScript",
        level: 75,
        color: "#f7df1e",
        style: "quality",
        description: "Интерактивность и логика"
      },
    ],
    showPercentage: true,
  },

  // ==================== 🏆 АЧИВКИ ====================
  ACHIEVEMENTS: {
    items: [
      {
        id: "first_game",
        name: "Первая Игра",
        unlocked: true,
        icon: "🎮",
        description: "Запустил первую игру",
        color: "#3fb950",
        style: "pixel"
      },
      {
        id: "pixel_artist",
        name: "Pixel Artist",
        unlocked: true,
        icon: "🎨",
        description: "100+ созданных спрайтов",
        color: "#a371f7",
        style: "pixel"
      },
      {
        id: "game_jam",
        name: "Game Jam Veteran",
        unlocked: true,
        icon: "⏰",
        description: "Участвовал в 5+ геймджемах",
        color: "#58a6ff",
        style: "quality"
      },
      {
        id: "community",
        name: "Community Builder",
        unlocked: false,
        icon: "👥",
        description: "Создал игровое сообщество",
        color: "#f59e0b",
        style: "quality"
      },
    ],
    showLocked: true,
  },

  // ==================== 📱 СОЦСЕТИ ====================
  SOCIAL: {
    ok: { url: "https://ok.ru/yourprofile", username: "yourusername" },
    pinterest: { url: "https://pinterest.com/yourprofile", username: "yourusername" },
    telegram: { url: "https://t.me/yourusername", username: "yourusername" },
    vk: { url: "https://vk.com/yourprofile", username: "yourusername" },
    youtube: { url: "https://youtube.com/yourchannel", username: "yourusername" },
    linkedin: { url: "https://linkedin.com/in/yourprofile", username: "yourusername" },
    github: { url: "https://github.com/yourusername", username: "yourusername" },
    itchio: { url: "https://yourusername.itch.io", username: "yourusername" },
    email: "your.email@example.com"
  },

  // ==================== ⚙️ СИСТЕМНЫЕ ====================
  SYSTEM: {
    autoRefresh: true,
    refreshInterval: 30000,
    offlineMode: false,
    debugMode: false,
    language: "ru",
  }
};