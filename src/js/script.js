// ==================== 🚀 ГЛАВНЫЙ СКРИПТ ====================

document.addEventListener('DOMContentLoaded', function () {
    initializeSite();
    loadConfig();
    setupEventListeners();
    setupOnlineStatus();
});

function initializeSite() {
    console.log('🎮 Портфолио инициализировано');
}

function loadConfig() {
    applySiteSettings();
    applyAppearanceSettings();
    applyUserSettings();
    applySocialSettings();
    applySkillsSettings();
    applyAchievementsSettings();
    applySakuraSettings();
}

function applySiteSettings() {
    document.getElementById('pageTitle').textContent = CONFIG.SITE.title;
}

function applyAppearanceSettings() {
    const { APPEARANCE } = CONFIG;

    // Восстанавливаем тему из localStorage или используем настройку
    const savedTheme = localStorage.getItem('portfolio-theme');
    const currentTheme = savedTheme || APPEARANCE.theme;

    document.documentElement.setAttribute('data-theme', currentTheme);

    // Обновляем переключатель темы
    const themeSwitch = document.getElementById('themeSwitch');
    if (themeSwitch) {
        themeSwitch.checked = currentTheme === 'github-dark';
    }

    document.documentElement.style.setProperty('--accent-color', APPEARANCE.accentColor);
    document.documentElement.style.setProperty('--bg-color', APPEARANCE.backgroundColor);
    document.documentElement.style.setProperty('--card-color', APPEARANCE.cardColor);
    document.documentElement.style.setProperty('--text-color', APPEARANCE.textColor);
    document.documentElement.style.setProperty('--border-color', APPEARANCE.borderColor);
    document.documentElement.style.setProperty('--transition-speed', `${APPEARANCE.transitionSpeed}s`);

    if (APPEARANCE.backgroundImage) {
        document.body.style.backgroundImage = `url(${APPEARANCE.backgroundImage})`;
    }
}

function applyUserSettings() {
    const { USER } = CONFIG;

    document.getElementById('userName').textContent = USER.name;
    document.getElementById('userTitle').textContent = USER.title;
    document.getElementById('customStatus').textContent = USER.customStatus;
    document.getElementById('userBio').textContent = USER.bio;
    document.getElementById('footerName').textContent = USER.name;

    updateOnlineStatus(USER.status);

    const avatar = document.getElementById('avatar');
    if (USER.avatar) {
        avatar.src = USER.avatar;
        avatar.onerror = function () {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNjAiIGZpbGw9IiMzMDM2M0QiLz4KPHN2ZyB4PSIzMCIgeT0iMzAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4Qjk0OUUiIHN0cm9rZS13aWR0aD0iMiI+CjxwYXRoIGQ9Ik0yMCAyMXYtMmEyIDIgMCAwIDAtMi0yaC0yYTUgNSAwIDAgMC0xMC4wMTQgMEg0YTIgMiAwIDAgMC0yIDJ2MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo8L3N2Zz4K';
        }
    }
}

function updateOnlineStatus(status) {
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');

    // Сбрасываем классы
    statusDot.className = 'status-dot';
    statusText.className = 'status-text';

    switch (status) {
        case 'online':
            statusDot.classList.add('online');
            statusText.textContent = '🟢 ОНЛАЙН';
            statusText.classList.add('online');
            break;
        case 'away':
            statusDot.classList.add('away');
            statusText.textContent = '🟡 ОТОШЕЛ';
            statusText.classList.add('away');
            break;
        case 'offline':
            statusDot.classList.add('offline');
            statusText.textContent = '🔴 НЕ В СЕТИ';
            statusText.classList.add('offline');
            break;
        default:
            statusDot.classList.add('online');
            statusText.textContent = '🟢 ОНЛАЙН';
            statusText.classList.add('online');
    }
}

function setupOnlineStatus() {
    // Симуляция изменения статуса для демонстрации
    let statusIndex = 0;
    const statuses = ['online', 'away', 'offline'];

    // Каждые 30 секунд меняем статус (только для демо)
    setInterval(() => {
        statusIndex = (statusIndex + 1) % statuses.length;
        updateOnlineStatus(statuses[statusIndex]);
    }, 30000);
}

function applySocialSettings() {
    const { SOCIAL } = CONFIG;
    const socialLinks = document.getElementById('socialLinks');

    const socials = [
        { name: 'GitHub', data: SOCIAL.github, icon: 'github.svg' },
        { name: 'Telegram', data: SOCIAL.telegram, icon: 'telegram.svg' },
        { name: 'YouTube', data: SOCIAL.youtube, icon: 'youtube.svg' },
        { name: 'Itch.io', data: SOCIAL.itchio, icon: 'itch-io.svg' },
        { name: 'Pinterest', data: SOCIAL.pinterest, icon: 'pinterest.svg' }
    ];

    socialLinks.innerHTML = socials
        .filter(social => social.data && social.data.url)
        .map(social => `
            <a href="${social.data.url}" class="social-link" target="_blank" rel="noopener">
                <img src="src/icons/${social.icon}" alt="${social.name}" class="social-icon">
                ${social.name}
            </a>
        `).join('');
}

function applySkillsSettings() {
    const { SKILLS } = CONFIG;
    const skillsList = document.getElementById('skillsList');

    skillsList.innerHTML = SKILLS.items.map(skill => `
        <div class="skill-item">
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                ${SKILLS.showPercentage ? `<span class="skill-percent">${skill.level}%</span>` : ''}
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${skill.level}%; background: ${skill.color}"></div>
            </div>
            ${skill.description ? `<div class="skill-description">${skill.description}</div>` : ''}
        </div>
    `).join('');

    // Запускаем анимацию прогресс-баров
    setTimeout(() => {
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }, 500);
}

function applyAchievementsSettings() {
    const { ACHIEVEMENTS } = CONFIG;
    const achievementsGrid = document.getElementById('achievementsGrid');

    const achievementsToShow = ACHIEVEMENTS.showLocked ?
        ACHIEVEMENTS.items :
        ACHIEVEMENTS.items.filter(ach => ach.unlocked);

    achievementsGrid.innerHTML = achievementsToShow.map(achievement => `
        <div class="achievement ${achievement.unlocked ? 'unlocked' : 'locked'}">
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-desc">${achievement.description}</div>
        </div>
    `).join('');
}

function applySakuraSettings() {
    const { SAKURA } = CONFIG;

    if (SAKURA.enabled) {
        document.body.classList.add('sakura-enabled');

        if (SAKURA.pixelOnHover) {
            document.body.classList.add('sakura-pixel-mode');
        }
    }
}

function setupEventListeners() {
    const themeSwitch = document.getElementById('themeSwitch');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', toggleTheme);
    }
}

function toggleTheme() {
    const themeSwitch = document.getElementById('themeSwitch');
    const newTheme = themeSwitch.checked ? 'github-dark' : 'github-light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
}

// Восстановление темы при загрузке
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        const themeSwitch = document.getElementById('themeSwitch');
        if (themeSwitch) {
            themeSwitch.checked = savedTheme === 'github-dark';
        }
    }
});