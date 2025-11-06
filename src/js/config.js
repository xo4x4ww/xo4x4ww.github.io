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
    theme: "sakura-light", // sakura-light / github-dark
    accentColor: "#ff6b9d", // Нежно-розовый акцент
    backgroundColor: "#fffafc", // Очень светлый розовый фон
    cardColor: "#ffffff", // Белые карточки
    textColor: "#5a3d5c", // Тёмно-фиолетовый текст
    borderColor: "#ffd6e7", // Розовая граница
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
        color: "#ff9e6d", // Оранжево-розовый
        style: "pixel",
        description: "Проектирование игровых механик"
      },
      {
        name: "Pixel Art",
        level: 80,
        color: "#d46fd4", // Фиолетовый
        style: "pixel",
        description: "Создание спрайтов и анимаций"
      },
      {
        name: "HTML",
        level: 90,
        color: "#ff6b9d", // Розовый
        style: "quality",
        description: "Семантическая верстка"
      },
      {
        name: "CSS",
        level: 85,
        color: "#6db8ff", // Голубой
        style: "quality",
        description: "Стили и адаптивный дизайн"
      },
      {
        name: "JavaScript",
        level: 75,
        color: "#ffd46f", // Желтый
        style: "quality",
        description: "Интерактивность и анимации"
      }
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
        color: "#6dffb8", // Зелёный
        style: "pixel"
      },
      {
        id: "pixel_artist",
        name: "Pixel Artist",
        unlocked: true,
        icon: "🎨",
        description: "10+ созданных спрайтов",
        color: "#d46fd4", // Фиолетовый
        style: "pixel"
      },
      {
        id: "game_jam",
        name: "Game Jam Veteran",
        unlocked: true,
        icon: "⏰",
        description: "Участвовал в 1+ геймджемах",
        color: "#6db8ff", // Голубой
        style: "quality"
      },
      {
        id: "community",
        name: "Community Builder",
        unlocked: true,
        icon: "👥",
        description: "Создал игровое комьюнити",
        color: "#ff9e6d", // Оранжевый
        style: "pixel"
      },
      {
        id: "prototype",
        name: "Prototype Master",
        unlocked: false,
        icon: "🚀",
        description: "10+ игровых прототипов",
        color: "#ff6b6b", // Красный
        style: "quality"
      }
    ],
    showLocked: true,
  },

  // ==================== 📱 СОЦСЕТИ И КОНТАКТЫ ====================
  SOCIAL: {
    github: { url: "https://github.com/Semyon595", username: "Semyon595" },
    pinterest: { url: "https://ru.pinterest.com/semyon_5/", username: "semyon_5" },
    youtube: { url: "https://www.youtube.com/@Semyon_5", username: "@Semyon_5" },
    itchio: { url: "https://semyon-5.itch.io/", username: "semyon-5" },
    telegram: { url: "https://t.me/Semyon_5", username: "Semyon_5" }
  }
};