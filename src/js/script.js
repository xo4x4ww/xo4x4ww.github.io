/* script.js - главный скрипт портфолио */
document.addEventListener('DOMContentLoaded', function () {
    initializeSite();
    loadConfig();
    initializeThemeToggle();
    updateSocialNetworksTheme();
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
    applySocialNetworksSettings(); // Новая функция
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

function applySocialSettings() {
    const { SOCIAL } = CONFIG;
    const socialLinks = document.getElementById('socialLinks');

    const socials = [
        { name: 'GitHub', data: SOCIAL.github, icon: 'Github.svg' },
        { name: 'Pinterest', data: SOCIAL.pinterest, icon: 'Pinterest.svg' },
        { name: 'YouTube', data: SOCIAL.youtube, icon: 'YouTube.svg' },
        { name: 'Itch.io', data: SOCIAL.itchio, icon: 'Itch-io.svg' },
        { name: 'Telegram', data: SOCIAL.telegram, icon: 'Telegram.svg' }
    ];

    socialLinks.innerHTML = socials
        .filter(social => social.data && social.data.url)
        .map(social => `
            <a href="${social.data.url}" class="social-link" target="_blank" rel="noopener" title="${social.name}">
                <img src="src/icons/${social.icon}" alt="${social.name}" class="social-icon" onerror="this.style.display='none'">
            </a>
        `).join('');
}

function applySocialNetworksSettings() {
    const { SOCIAL_NETWORKS, ICONS_BASE_URL } = CONFIG;
    const socialNetworks = document.getElementById('socialNetworks');

    const networks = [
        {
            name: 'Telegram',
            data: SOCIAL_NETWORKS.telegram,
            key: 'telegram'
        },
        {
            name: 'VK',
            data: SOCIAL_NETWORKS.vk,
            key: 'vk'
        },
        {
            name: 'WhatsApp',
            data: SOCIAL_NETWORKS.whatsapp,
            key: 'whatsapp'
        },
        {
            name: 'YouTube',
            data: SOCIAL_NETWORKS.youtube,
            key: 'youtube'
        },
        {
            name: 'Instagram',
            data: SOCIAL_NETWORKS.instagram,
            key: 'instagram'
        }
    ];

    socialNetworks.innerHTML = networks
        .filter(network => network.data && network.data.url)
        .map(network => `
            <a href="${network.data.url}" 
               class="network-link" 
               target="_blank" 
               rel="noopener" 
               data-network="${network.key}"
               aria-label="${network.name}">
                <div class="network-icon-container">
                    <img src="${ICONS_BASE_URL}${network.name}.svg" 
                         alt="${network.name}" 
                         class="network-icon network-icon-color"
                         onerror="this.style.display='none'">
                    <img src="${ICONS_BASE_URL}${network.name}_white.svg" 
                         alt="${network.name}" 
                         class="network-icon network-icon-white"
                         onerror="this.style.display='none'">
                    <img src="${ICONS_BASE_URL}${network.name}_black.svg" 
                         alt="${network.name}" 
                         class="network-icon network-icon-black"
                         onerror="this.style.display='none'">
                </div>
                <span class="network-name">${network.name}</span>
            </a>
        `).join('');

    // После загрузки обновляем тему иконок
    updateSocialNetworksTheme();
}

function updateSocialNetworksTheme() {
    // Эта функция будет вызываться при смене темы
    // Автоматически работает через CSS классы
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

        setTimeout(initializeSakura, 100);
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
        // После смены темы обновляем отображение иконок
        updateSocialNetworksTheme();
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