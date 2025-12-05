/* sakura.js - анимация лепестков сакуры */
let sakuraPetals = [];

function initializeSakura() {
    if (window.CONFIG && window.CONFIG.SAKURA && window.CONFIG.SAKURA.enabled) {
        createSakuraPetals();
        startSakuraAnimation();
    }
}

function createSakuraPetals() {
    const petalCount = 15; // Увеличил количество лепестков

    // Удаляем старые лепестки если есть
    sakuraPetals.forEach(petal => {
        if (petal.element && petal.element.parentNode) {
            petal.element.parentNode.removeChild(petal.element);
        }
    });

    sakuraPetals = [];

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'sakura-petal';

        // Случайный размер
        const size = 12 + Math.random() * 8;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;

        // Случайный цвет
        const colors = [
            '#ffb7d5', '#ff80ab', '#ffcdd2',
            '#f8bbd0', '#f48fb1', '#e91e63',
            '#f06292', '#ec407a'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        petal.style.backgroundColor = color;

        // Случайное начальное положение
        const startLeft = Math.random() * 100;
        const startTop = Math.random() * -100;

        petal.style.position = 'fixed';
        petal.style.left = `${startLeft}%`;
        petal.style.top = `${startTop}px`;
        petal.style.zIndex = '9999';
        petal.style.pointerEvents = 'none';
        petal.style.opacity = '0.7';
        petal.style.borderRadius = '70% 30% 80% 20% / 60% 40% 60% 40%';
        petal.style.filter = 'drop-shadow(1px 1px 3px rgba(255, 128, 171, 0.4))';

        document.body.appendChild(petal);

        sakuraPetals.push({
            element: petal,
            x: startLeft,
            y: startTop,
            speed: 1 + Math.random() * 2, // Случайная скорость
            sway: Math.random() * 2 - 1, // Случайное качание
            rotation: 0,
            rotationSpeed: Math.random() * 2 - 1
        });
    }
}

function startSakuraAnimation() {
    function animate() {
        const windowHeight = window.innerHeight;

        sakuraPetals.forEach(petal => {
            // Двигаем лепесток вниз
            petal.y += petal.speed;

            // Добавляем качание из стороны в сторону
            petal.x += Math.sin(Date.now() * 0.001 * petal.sway) * 0.1;

            // Вращаем лепесток
            petal.rotation += petal.rotationSpeed;

            // Если лепесток упал за пределы экрана, возвращаем его наверх
            if (petal.y > windowHeight + 100) {
                petal.y = -100;
                petal.x = Math.random() * 100;
            }

            // Применяем преобразования
            petal.element.style.transform = `translate(${petal.x}%, ${petal.y}px) rotate(${petal.rotation}deg)`;

            // Меняем прозрачность в зависимости от положения
            const progress = petal.y / (windowHeight + 100);
            petal.element.style.opacity = 0.7 * (1 - progress * 0.5);
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// Инициализируем сакуру при загрузке
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initializeSakura, 500);
});

// Перезапускаем сакуру при изменении размера окна
window.addEventListener('resize', function () {
    if (sakuraPetals.length > 0) {
        createSakuraPetals();
    }
});