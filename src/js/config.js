/* config.js - конфигурация портфолио */
const CONFIG = {
  SITE: {
    title: "xo4x4ww"
  },
  USER: {
    name: "xo4x4ww",
    title: "Дизайнер/Веб разраотчик",
    customStatus: "👋 Погружен в разработку с головой – тот самый разраб!",
    avatar: "src/images/avatar.png",
    bio: `👋 Привет! Я Семён 😀, 12-летний дизайнер и программист. Погружен в разработку с головой – тот самый разраб! 😎

💻 На чем я кодю:
• HTML & CSS (Веб разработка сайтов)
• Scratch (Разработка игр и приложений)

⏰ Всегда на связи! (GMT +10 🏞)`,
  },
  APPEARANCE: {
    theme: "sakura-light",
    accentColor: "#ff6b9d",
    backgroundColor: "#fffafc",
    cardColor: "#ffffff",
    textColor: "#5a3d5c",
    borderColor: "#ffd6e7",
    cardBlur: 0,
    animations: true,
    backgroundImage: "",
    smoothTransitions: true,
    transitionSpeed: 0.3,
  },
  SAKURA: {
    enabled: true,
    pixelOnHover: true,
  },
  SKILLS: {
    items: [
      {
        name: "Web Design",
        level: 85,
        color: "#ff9e6d",
        style: "pixel",
        description: "Дизайн и верстка сайтов"
      },
      {
        name: "HTML/CSS",
        level: 90,
        color: "#ff6b9d",
        style: "pixel",
        description: "Создание веб-страниц"
      },
      {
        name: "Scratch",
        level: 95,
        color: "#d46fd4",
        style: "pixel",
        description: "Разработка игр и приложений"
      },
      {
        name: "Game Design",
        level: 80,
        color: "#6db8ff",
        style: "quality",
        description: "Проектирование игровых механик"
      }
    ],
    showPercentage: true,
  },
  ACHIEVEMENTS: {
    items: [
      {
        id: "first_game",
        name: "Первая Игра",
        unlocked: true,
        icon: "🎮",
        description: "Запустил первую игру",
        color: "#6dffb8",
        style: "pixel"
      },
      {
        id: "pixel_artist",
        name: "Pixel Artist",
        unlocked: true,
        icon: "🎨",
        description: "10+ созданных спрайтов",
        color: "#d46fd4",
        style: "pixel"
      },
      {
        id: "game_jam",
        name: "Game Jam Veteran",
        unlocked: true,
        icon: "⏰",
        description: "Участвовал в 1+ геймджемах",
        color: "#6db8ff",
        style: "quality"
      },
      {
        id: "prototype",
        name: "Prototype Master",
        unlocked: true,
        icon: "🚀",
        description: "10+ игровых прототипов",
        color: "#ff6b6b",
        style: "quality"
      }
    ],
    showLocked: true,
  },
  // Базовый URL для иконок из Gist
  ICONS_BASE_URL: "https://gist.githubusercontent.com/Semyon595/291b75b9faef598a2e697d29337388fb/raw/",
  
  // ВСЕ соцсети как указано
  SOCIAL_NETWORKS: {
    github: { 
      url: "https://github.com/Semyon595", 
      username: "Semyon595",
      displayName: "GitHub"
    },
    telegram: { 
      url: "https://t.me/Semyon_5", 
      username: "Semyon_5",
      displayName: "Telegram"
    },
    pinterest: { 
      url: "https://ru.pinterest.com/semyon_5/", 
      username: "semyon_5",
      displayName: "Pinterest"
    },
    youtube: { 
      url: "https://www.youtube.com/@Semyon_5", 
      username: "@Semyon_5",
      displayName: "YouTube"
    },
    itchio: { 
      url: "https://semyon-5.itch.io/", 
      username: "semyon-5",
      displayName: "Itch.io"
    }
  }
};