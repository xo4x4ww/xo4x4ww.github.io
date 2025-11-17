/* sakura.js - анимация лепестков сакуры */
document.addEventListener('DOMContentLoaded', function () {
    // Инициализация будет вызвана из script.js после загрузки конфигурации
});

function initializeSakura() {
    if (window.CONFIG && window.CONFIG.SAKURA && window.CONFIG.SAKURA.enabled) {
        createSakuraPetals();
    }
}

function createSakuraPetals() {
    const petalCount = 8;

    // Удаляем старые лепестки если есть
    document.querySelectorAll('.sakura-petal').forEach(petal => petal.remove());

    for (let i = 1; i <= petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = `sakura-petal petal-${i}`;
        document.body.appendChild(petal);
    }
}