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
  ICONS_BASE_URL: "https://gist.githubusercontent.com/xo4x4ww/291b75b9faef598a2e697d29337388fb/raw/",

  // ВСЕ соцсети как указано
  SOCIAL_NETWORKS: {
    github: {
      url: "https://github.com/xo4x4ww",
      username: "xo4x4ww",
      displayName: "GitHub"
    },
    telegram: {
      url: "https://t.me/xo4x4ww",
      username: "xo4x4ww",
      displayName: "Telegram"
    },
    pinterest: {
      url: "https://ru.pinterest.com/xo4x4ww",
      username: "xo4x4ww",
      displayName: "Pinterest"
    },
    youtube: {
      url: "https://www.youtube.com/@xo4x4ww",
      username: "@xo4x4ww",
      displayName: "YouTube"
    },
    itchio: {
      url: "https://xo4x4ww.itch.io",
      username: "xo4x4ww",
      displayName: "Itch.io"
    }
  }
};