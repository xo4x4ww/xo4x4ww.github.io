[file name]: sakura.js
[file content begin]
/* sakura.js - анимация лепестков сакуры */
class SakuraPetal {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'sakura-petal';
        
        // Случайный размер
        this.size = 12 + Math.random() * 8;
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        
        // Случайный цвет
        const colors = ['#ffb7d5', '#ff80ab', '#ffcdd2', '#f8bbd0', '#f48fb1'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.element.style.backgroundColor = this.color;
        
        // Начальная позиция
        this.x = Math.random() * 100; // процент от ширины
        this.y = -50 - Math.random() * 100;
        
        // Параметры движения
        this.speed = 0.5 + Math.random() * 1; // пикселей в кадр
        this.sway = Math.random() * 0.02; // скорость качания
        this.swayAmount = 20 + Math.random() * 30; // амплитуда качания
        this.rotation = Math.random() * 360;
        this.rotationSpeed = -1 + Math.random() * 2;
        
        // Стилизация
        this.element.style.position = 'fixed';
        this.element.style.left = `${this.x}%`;
        this.element.style.top = `${this.y}px`;
        this.element.style.transform = `rotate(${this.rotation}deg)`;
        this.element.style.zIndex = '9999';
        this.element.style.pointerEvents = 'none';
        this.element.style.borderRadius = '70% 30% 80% 20% / 60% 40% 60% 40%';
        this.element.style.filter = 'drop-shadow(1px 1px 3px rgba(255, 128, 171, 0.4))';
        
        document.body.appendChild(this.element);
    }
    
    update() {
        // Двигаем вниз
        this.y += this.speed;
        
        // Качание из стороны в сторону (синусоида)
        const swayX = Math.sin(Date.now() * this.sway) * this.swayAmount;
        
        // Вращение
        this.rotation += this.rotationSpeed;
        
        // Обновляем позицию
        this.element.style.transform = `translateX(${swayX}px) rotate(${this.rotation}deg)`;
        this.element.style.top = `${this.y}px`;
        
        // Если упал за пределы экрана - возвращаем наверх
        if (this.y > window.innerHeight + 100) {
            this.reset();
        }
    }
    
    reset() {
        this.y = -100;
        this.x = Math.random() * 100;
        this.element.style.left = `${this.x}%`;
    }
}

class SakuraSystem {
    constructor() {
        this.petals = [];
        this.petalCount = 25; // Больше лепестков
        this.isAnimating = false;
        this.animationId = null;
    }
    
    initialize() {
        // Создаем лепестки
        for (let i = 0; i < this.petalCount; i++) {
            // Создаем с задержкой для красивого появления
            setTimeout(() => {
                const petal = new SakuraPetal();
                this.petals.push(petal);
            }, i * 100);
        }
        
        // Запускаем анимацию
        this.startAnimation();
        
        // Обработчик ресайза
        window.addEventListener('resize', () => this.handleResize());
    }
    
    startAnimation() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        
        const animate = () => {
            this.petals.forEach(petal => petal.update());
            this.animationId = requestAnimationFrame(animate);
        };
        
        animate();
    }
    
    stopAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        this.isAnimating = false;
    }
    
    handleResize() {
        // При ресайзе сбрасываем позиции лепестков
        this.petals.forEach(petal => {
            if (petal.y > window.innerHeight) {
                petal.reset();
            }
        });
    }
    
    destroy() {
        this.stopAnimation();
        this.petals.forEach(petal => {
            if (petal.element && petal.element.parentNode) {
                petal.element.parentNode.removeChild(petal.element);
            }
        });
        this.petals = [];
    }
}

// Глобальный экземпляр
let sakuraSystem = null;

function initializeSakura() {
    if (window.CONFIG && window.CONFIG.SAKURA && window.CONFIG.SAKURA.enabled) {
        // Удаляем старую сакуру если есть
        if (sakuraSystem) {
            sakuraSystem.destroy();
        }
        
        // Создаем новую
        sakuraSystem = new SakuraSystem();
        sakuraSystem.initialize();
        
        console.log('🌸 Сакура инициализирована');
    }
}

// Автоматическая инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Ждем немного чтобы конфиг успел загрузиться
    setTimeout(() => {
        if (window.CONFIG && window.CONFIG.SAKURA && window.CONFIG.SAKURA.enabled) {
            initializeSakura();
        }
    }, 500);
});

// Экспорт для использования в script.js
window.initializeSakura = initializeSakura;
[file content end]