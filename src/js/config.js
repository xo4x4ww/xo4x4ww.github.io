// ==================== ⚙️ КОНФИГ ПОРТФОЛИО ====================

const CONFIG = {
  // ==================== 🌐 НАСТРОЙКИ САЙТА ====================
  SITE: {
    title: "Semyon_5"
  },

  // ==================== 👤 ОСНОВНЫЕ НАСТРОЙКИ ====================
  USER: {
    name: "Семён",
    title: "Game Dev Enthusiast | Pixel Art Lover",
    status: "online", // online / away / offline
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

  // ==================== 🎮 АНИМАЦИЯ САКУРЫ ====================
  SAKURA: {
    enabled: true,
    pixelOnHover: true,
  },

  // ==================== 🛠 НАВЫКИ И ПРОГРЕСС-БАРЫ ====================
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
        name: "HTML",
        level: 90,
        color: "#e34f26",
        style: "quality",
        description: "Семантическая верстка"
      },
      {
        name: "CSS",
        level: 85,
        color: "#2965f1",
        style: "quality",
        description: "Стили и адаптивный дизайн"
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

  // ==================== 🏆 АЧИВКИ И ДОСТИЖЕНИЯ ====================
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
        description: "10+ созданных спрайтов",
        color: "#a371f7",
        style: "pixel"
      },
      {
        id: "game_jam",
        name: "Game Jam Veteran",
        unlocked: true,
        icon: "⏰",
        description: "Участвовал в 1+ геймджемах",
        color: "#58a6ff",
        style: "quality"
      },
    ],
    showLocked: true,
  },

  // ==================== 📱 СОЦСЕТИ И КОНТАКТЫ ====================
  SOCIAL: {
    github: { url: "https://github.com/Semyon595", username: "Semyon595" },
    pinterest: { url: "https://ru.pinterest.com/semyon_5/", username: "semyon_5" },
    youtube: { url: "https://www.youtube.com/@Semyon_5", username: "@Semyon_5" },
    itchio: { url: "https://semyon-5.itch.io/", username: "semyon-5" },
  }
};