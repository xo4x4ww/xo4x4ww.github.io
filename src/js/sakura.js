/* sakura.js - анимация лепестков сакуры */
function initializeSakura() {
    if (window.CONFIG && window.CONFIG.SAKURA && window.CONFIG.SAKURA.enabled) {
        createSakuraPetals();
    }
}

function createSakuraPetals() {
    const petalCount = 8;
    const sakuraContainer = document.createElement('div');
    sakuraContainer.className = 'sakura-container';
    document.body.appendChild(sakuraContainer);

    for (let i = 1; i <= petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = `sakura-petal petal-${i}`;
        petal.style.position = 'fixed';
        petal.style.zIndex = '9999';
        sakuraContainer.appendChild(petal);

        // Перезапуск анимации для постоянного падения
        restartPetalAnimation(petal);
    }
}

function restartPetalAnimation(petal) {
    // Удаляем текущую анимацию
    petal.style.animation = 'none';

    // Форсируем перерисовку
    void petal.offsetWidth;

    // Устанавливаем случайное начальное положение
    const startLeft = Math.random() * 100;
    petal.style.left = `${startLeft}%`;
    petal.style.top = `${Math.random() * -100}px`;

    // Случайная длительность анимации
    const duration = 15 + Math.random() * 15;

    // Случайные параметры анимации
    const sway = 50 + Math.random() * 100;
    const rotate = Math.random() * 360;

    // Создаем уникальную анимацию для каждого лепестка
    const animationName = `sakura-fall-${Date.now()}-${Math.random()}`;

    // Динамически создаем CSS для анимации
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes ${animationName} {
            0% {
                transform: translate(0px, 0px) rotate(0deg);
                opacity: 0.8;
            }
            100% {
                transform: translate(${sway}px, 100vh) rotate(${rotate}deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Применяем анимацию
    petal.style.animation = `${animationName} ${duration}s linear infinite`;

    // Через некоторое время удаляем старый стиль и перезапускаем
    setTimeout(() => {
        style.remove();
        restartPetalAnimation(petal);
    }, duration * 1000);
}

// Автоматическая инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initializeSakura, 500);
});

// Перезапуск сакуры при изменении размера окна
window.addEventListener('resize', function () {
    document.querySelectorAll('.sakura-petal').forEach(petal => {
        restartPetalAnimation(petal);
    });
});