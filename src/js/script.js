/* script.js - главный скрипт портфолио */
document.addEventListener('DOMContentLoaded', function () {
    initializeSite();
    loadConfig();
    initializeThemeToggle();
});

function initializeSite() {
    console.log('🎮 Портфолио инициализировано');
}

function loadConfig() {
    applySiteSettings();
    applyAppearanceSettings();
    applyUserSettings();
    applySkillsSettings();
    applyAchievementsSettings();
    applySakuraSettings();
    applySocialNetworksSettings();
}

function applySiteSettings() {
    document.title = CONFIG.SITE.title;
}

function applyAppearanceSettings() {
    const { APPEARANCE } = CONFIG;

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

    const avatar = document.getElementById('avatar');
    if (USER.avatar) {
        avatar.src = USER.avatar;
        avatar.onerror = function () {
            this.style.display = 'none';
        }
    }
}

function applySocialNetworksSettings() {
    const { SOCIAL_NETWORKS, ICONS_BASE_URL } = CONFIG;
    const socialNetworks = document.getElementById('socialNetworks');

    const networks = [
        { 
            key: "github", 
            name: SOCIAL_NETWORKS.github.displayName,
            url: SOCIAL_NETWORKS.github.url,
            iconName: "GitHub"
        },
        { 
            key: "telegram", 
            name: SOCIAL_NETWORKS.telegram.displayName,
            url: SOCIAL_NETWORKS.telegram.url,
            iconName: "Telegram"
        },
        { 
            key: "pinterest", 
            name: SOCIAL_NETWORKS.pinterest.displayName,
            url: SOCIAL_NETWORKS.pinterest.url,
            iconName: "Pinterest"
        },
        { 
            key: "youtube", 
            name: SOCIAL_NETWORKS.youtube.displayName,
            url: SOCIAL_NETWORKS.youtube.url,
            iconName: "YouTube"
        },
        { 
            key: "itchio", 
            name: SOCIAL_NETWORKS.itchio.displayName,
            url: SOCIAL_NETWORKS.itchio.url,
            iconName: "Itch"
        }
    ];

    socialNetworks.innerHTML = networks
        .map(network => `
            <a href="${network.url}" 
               class="network-link" 
               target="_blank" 
               rel="noopener noreferrer" 
               data-network="${network.key}"
               aria-label="${network.name}">
                <div class="network-icon-container">
                    <img src="${ICONS_BASE_URL}${network.iconName}.svg" 
                         alt="${network.name}" 
                         class="network-icon network-icon-color"
                         onerror="handleIconError(this)">
                    <img src="${ICONS_BASE_URL}${network.iconName}_white.svg" 
                         alt="${network.name}" 
                         class="network-icon network-icon-white"
                         onerror="handleIconError(this)">
                    <img src="${ICONS_BASE_URL}${network.iconName}_black.svg" 
                         alt="${network.name}" 
                         class="network-icon network-icon-black"
                         onerror="handleIconError(this)">
                </div>
                <span class="network-name">${network.name}</span>
            </a>
        `).join('');
}

function handleIconError(img) {
    console.warn(`Не удалось загрузить иконку: ${img.src}`);
    img.style.display = 'none';
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
}

function applyAchievementsSettings() {
    const { ACHIEVEMENTS } = CONFIG;
    const achievementsGrid = document.getElementById('achievementsGrid');

    const achievementsToShow = ACHIEVEMENTS.showLocked ?
        ACHIEVEMENTS.items :
        ACHIEVEMENTS.items.filter(ach => ach.unlocked);

    achievementsGrid.innerHTML = achievementsToShow.map(achievement => `
        <div class="achievement unlocked">
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

        // Ждем немного чтобы DOM полностью загрузился
        setTimeout(() => {
            if (typeof initializeSakura === 'function') {
                initializeSakura();
            } else {
                console.warn('Функция initializeSakura не найдена');
                // Альтернативная инициализация
                if (window.sakuraSystem && typeof window.sakuraSystem.initialize === 'function') {
                    window.sakuraSystem.initialize();
                }
            }
        }, 800);
    }
}

function initializeThemeToggle() {
    const themeCheckbox = document.getElementById('themeCheckbox');

    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        applyDarkTheme();
        themeCheckbox.checked = true;
    }

    themeCheckbox.addEventListener('change', function () {
        if (this.checked) {
            applyDarkTheme();
            localStorage.setItem('portfolio-theme', 'dark');
        } else {
            applyLightTheme();
            localStorage.setItem('portfolio-theme', 'light');
        }
    });
}

function applyDarkTheme() {
    document.body.classList.add('dark-theme');
    document.documentElement.style.setProperty('--accent-color', '#ff6b9d');
    document.documentElement.style.setProperty('--bg-color', '#1a1a1a');
    document.documentElement.style.setProperty('--card-color', '#2d2d2d');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--border-color', '#ff6b9d');
    document.documentElement.style.setProperty('--progress-bg', '#3a3a3a');
}

function applyLightTheme() {
    document.body.classList.remove('dark-theme');
    document.documentElement.style.setProperty('--accent-color', '#ff6b9d');
    document.documentElement.style.setProperty('--bg-color', '#fffafc');
    document.documentElement.style.setProperty('--card-color', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#5a3d5c');
    document.documentElement.style.setProperty('--border-color', '#ffd6e7');
    document.documentElement.style.setProperty('--progress-bg', '#ffd6e7');
}