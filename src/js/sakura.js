// sakura.js - Дополнительный скрипт для анимации сакуры

document.addEventListener('DOMContentLoaded', function () {
    initializeSakura();
});

function initializeSakura() {
    // Проверяем конфиг и настройки сакуры
    if (window.CONFIG && window.CONFIG.SAKURA && window.CONFIG.SAKURA.enabled) {
        createSakuraPetals();
    }
}

function createSakuraPetals() {
    const petalCount = 8;

    for (let i = 1; i <= petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = `sakura-petal petal-${i}`;
        document.body.appendChild(petal);
    }
}