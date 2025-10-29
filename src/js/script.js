// ==================== 🚀 ГЛАВНЫЙ СКРИПТ ====================

document.addEventListener('DOMContentLoaded', function () {
    initializeSite();
    loadConfig();
    setupEventListeners();
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

    let theme = APPEARANCE.theme;
    if (theme === 'auto') {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'github-dark' : 'github-light';
    }
    document.documentElement.setAttribute('data-theme', theme);

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
    document.getElementById('teamName').textContent = USER.team;
    document.getElementById('footerName').textContent = USER.name;

    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');

    statusDot.className = 'status-dot online';
    statusText.textContent = USER.status;

    const avatar = document.getElementById('avatar');
    if (USER.avatar) {
        avatar.src = USER.avatar;
    }
}

function applySocialSettings() {
    const { SOCIAL } = CONFIG;
    const socialLinks = document.getElementById('socialLinks');

    const socials = [
        { name: 'OK', data: SOCIAL.ok, icon: 'ok.svg' },
        { name: 'Telegram', data: SOCIAL.telegram, icon: 'telegram.svg' },
        { name: 'VK', data: SOCIAL.vk, icon: 'vk.svg' },
        { name: 'YouTube', data: SOCIAL.youtube, icon: 'youtube.svg' },
        { name: 'GitHub', data: SOCIAL.github, icon: 'github.svg' },
        { name: 'Itch.io', data: SOCIAL.itchio, icon: 'itch.svg' }
    ];

    socialLinks.innerHTML = socials
        .filter(social => social.data && social.data.url)
        .map(social => `
            <a href="${social.data.url}" class="social-link" target="_blank">
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
        <div class="achievement">
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
    }
}

function setupEventListeners() {
    const themeSwitch = document.getElementById('themeSwitch');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', toggleTheme);

        const currentTheme = document.documentElement.getAttribute('data-theme');
        themeSwitch.checked = currentTheme.includes('dark');
    }
}

function toggleTheme() {
    const themeSwitch = document.getElementById('themeSwitch');
    const newTheme = themeSwitch.checked ? 'github-dark' : 'github-light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
}

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeSwitch = document.getElementById('themeSwitch');
    if (themeSwitch) {
        themeSwitch.checked = savedTheme.includes('dark');
    }
}