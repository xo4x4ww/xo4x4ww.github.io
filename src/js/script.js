/* ==================== 📱 КРАСИВЫЙ ФУТЕР ==================== */

.footer {
    background: linear - gradient(135deg, var(--card - color) 0 %, var(--bg - color) 100 %);
    border - top: 1px solid var(--border - color);
    padding: 60px 32px 20px;
    margin - top: auto;
    position: relative;
    overflow: hidden;
}

.footer - waves {
    position: absolute;
    top: -10px;
    left: 0;
    width: 100 %;
    height: 100px;
    overflow: hidden;
}

.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200 %;
    height: 100px;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" fill="%2358a6ff" opacity="0.1"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path></svg>');
    animation: wave 10s linear infinite;
}

.wave - 1 {
    animation - duration: 10s;
    opacity: 0.1;
}

.wave - 2 {
    animation - duration: 8s;
    opacity: 0.05;
    animation - direction: reverse;
}

.wave - 3 {
    animation - duration: 12s;
    opacity: 0.03;
}

@keyframes wave {
    0 % { transform: translateX(0); }
    50 % { transform: translateX(-25 %); }
    100 % { transform: translateX(-50 %); }
}

.footer - content {
    display: grid;
    grid - template - columns: 2fr 1fr 1fr 1.5fr;
    gap: 40px;
    max - width: 1200px;
    margin: 0 auto 40px;
    position: relative;
    z - index: 2;
}

.footer - logo {
    display: flex;
    align - items: center;
    gap: 15px;
    margin - bottom: 20px;
}

.footer - avatar {
    width: 60px;
    height: 60px;
    border - radius: 50 %;
    border: 2px solid var(--accent - color);
    object - fit: cover;
}

.footer - brand h3 {
    color: var(--accent - color);
    font - size: 20px;
    font - weight: 600;
    margin - bottom: 5px;
}

.footer - brand p {
    color: #8b949e;
    font - size: 14px;
}

.footer - description {
    color: #8b949e;
    font - size: 14px;
    line - height: 1.6;
    margin - bottom: 25px;
}

.footer - stats {
    display: flex;
    gap: 30px;
}

.stat - item {
    text - align: center;
}

.stat - number {
    display: block;
    font - size: 24px;
    font - weight: 700;
    color: var(--accent - color);
    margin - bottom: 5px;
}

.stat - label {
    font - size: 12px;
    color: #8b949e;
    text - transform: uppercase;
    letter - spacing: 0.5px;
}

.footer - section h4 {
    color: var(--accent - color);
    font - size: 18px;
    font - weight: 600;
    margin - bottom: 20px;
    position: relative;
}

.footer - section h4::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--accent - color);
    border - radius: 1px;
}

.footer - links {
    display: flex;
    flex - direction: column;
    gap: 12px;
}

.footer - link {
    display: flex;
    align - items: center;
    gap: 10px;
    color: var(--text - color);
    text - decoration: none;
    padding: 8px 0;
    transition: all var(--transition - speed) ease;
    border - radius: 6px;
}

.footer - link:hover {
    color: var(--accent - color);
    transform: translateX(8px);
    background: rgba(88, 166, 255, 0.1);
}

.link - icon {
    font - size: 16px;
    width: 20px;
    text - align: center;
}

.tech - stack {
    display: flex;
    flex - wrap: wrap;
    gap: 8px;
    margin - bottom: 20px;
}

.tech - badge {
    padding: 6px 12px;
    border - radius: 20px;
    font - size: 12px;
    font - weight: 500;
    border: 1px solid;
}

.tech - badge.html {
    background: rgba(227, 79, 38, 0.1);
    border - color: #e34f26;
    color: #e34f26;
}

.tech - badge.css {
    background: rgba(41, 101, 241, 0.1);
    border - color: #2965f1;
    color: #2965f1;
}

.tech - badge.js {
    background: rgba(247, 223, 30, 0.1);
    border - color: #f7df1e;
    color: #f7df1e;
}

.tech - badge.pixel {
    background: rgba(186, 104, 200, 0.1);
    border - color: #ba68c8;
    color: #ba68c8;
}

.tech - badge.ui {
    background: rgba(16, 185, 129, 0.1);
    border - color: #10b981;
    color: #10b981;
}

.footer - achievement {
    display: flex;
    align - items: center;
    gap: 10px;
    padding: 12px;
    background: rgba(88, 166, 255, 0.05);
    border: 1px solid var(--border - color);
    border - radius: 8px;
    font - size: 14px;
    color: #8b949e;
}

.achievement - icon {
    font - size: 16px;
    color: var(--accent - color);
}

/* Соц-иконки в футере */
.social - links {
    display: grid;
    grid - template - columns: repeat(2, 1fr);
    gap: 10px;
    margin - bottom: 25px;
}

.social - link {
    display: flex;
    align - items: center;
    gap: 8px;
    padding: 10px 12px;
    border: 1px solid var(--border - color);
    border - radius: 8px;
    text - decoration: none;
    color: var(--text - color);
    transition: all var(--transition - speed) ease;
    background: var(--bg - color);
    font - size: 13px;
}

.social - link:hover {
    border - color: var(--accent - color);
    transform: translateY(-2px);
    box - shadow: 0 4px 12px rgba(88, 166, 255, 0.1);
}

.social - icon - svg {
    width: 18px;
    height: 18px;
    transition: all var(--transition - speed) ease;
}

.social - link: hover.social - icon - svg {
    transform: scale(1.1);
}

.footer - newsletter {
    margin - top: 20px;
}

.footer - newsletter p {
    color: #8b949e;
    font - size: 14px;
    margin - bottom: 10px;
}

.newsletter - form {
    display: flex;
    gap: 8px;
}

.newsletter - input {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid var(--border - color);
    border - radius: 6px;
    background: var(--bg - color);
    color: var(--text - color);
    font - size: 14px;
}

.newsletter - input::placeholder {
    color: #8b949e;
}

.newsletter - input:focus {
    outline: none;
    border - color: var(--accent - color);
}

.newsletter - btn {
    padding: 8px 16px;
    white - space: nowrap;
}

/* Нижняя часть футера */
.footer - bottom {
    max - width: 1200px;
    margin: 0 auto;
    padding - top: 30px;
    border - top: 1px solid var(--border - color);
    display: flex;
    justify - content: space - between;
    align - items: center;
    flex - wrap: wrap;
    gap: 20px;
}

.footer - copyright p {
    color: #8b949e;
    font - size: 14px;
    margin - bottom: 5px;
}

.footer - motto {
    font - size: 12px!important;
    font - style: italic;
}

.footer - meta {
    display: flex;
    align - items: center;
    gap: 30px;
}

.meta - info {
    display: flex;
    gap: 15px;
}

.meta - item {
    color: #8b949e;
    font - size: 13px;
    padding: 4px 8px;
    background: var(--bg - color);
    border - radius: 4px;
    border: 1px solid var(--border - color);
}

.footer - actions {
    display: flex;
    gap: 10px;
}

.action - btn {
    padding: 8px 16px;
    border: 1px solid var(--border - color);
    border - radius: 6px;
    background: var(--bg - color);
    color: var(--text - color);
    cursor: pointer;
    transition: all var(--transition - speed) ease;
    font - size: 14px;
}

.contact - btn {
    background: var(--accent - color);
    border - color: var(--accent - color);
    color: white;
}

.support - btn:hover {
    border - color: var(--accent - color);
    color: var(--accent - color);
}

/* ==================== 🔄 ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ (ОБНОВЛЕННЫЙ) ==================== */

.theme - toggle - container {
    display: flex;
    align - items: center;
}

.theme - toggle {
    position: relative;
    display: flex;
    align - items: center;
    gap: 10px;
    cursor: pointer;
    padding: 8px 12px;
    border - radius: 8px;
    transition: all var(--transition - speed) ease;
}

.theme - toggle:hover {
    background: rgba(88, 166, 255, 0.1);
}

.theme - toggle - input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}

.theme - toggle - track {
    width: 50px;
    height: 26px;
    background: var(--border - color);
    border - radius: 13px;
    position: relative;
    transition: all var(--transition - speed) ease;
    border: 2px solid transparent;
}

.theme - toggle: hover.theme - toggle - track {
    border - color: var(--accent - color);
    background: var(--card - color);
}

.theme - toggle - thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    background: var(--accent - color);
    border - radius: 50 %;
    transition: all var(--transition - speed) ease;
    display: flex;
    align - items: center;
    justify - content: center;
    overflow: hidden;
    box - shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.theme - icon {
    width: 12px;
    height: 12px;
    transition: all var(--transition - speed) ease;
    position: absolute;
}

.sun - icon {
    opacity: 1;
    transform: scale(1);
}

.moon - icon {
    opacity: 0;
    transform: scale(0);
}

.theme - toggle - input: checked + .theme - toggle - track.theme - toggle - thumb {
    transform: translateX(24px);
    background: var(--accent - color);
}

.theme - toggle - input: checked + .theme - toggle - track.sun - icon {
    opacity: 0;
    transform: scale(0);
}

.theme - toggle - input: checked + .theme - toggle - track.moon - icon {
    opacity: 1;
    transform: scale(1);
}

.theme - label {
    color: var(--text - color);
    font - size: 14px;
    font - weight: 500;
}

/* ==================== 📱 АДАПТИВНОСТЬ ФУТЕРА ==================== */

@media(max - width: 1024px) {
    .footer - content {
        grid - template - columns: 1fr 1fr;
        gap: 30px;
    }
}

@media(max - width: 768px) {
    .footer {
        padding: 40px 16px 15px;
    }
    
    .footer - content {
        grid - template - columns: 1fr;
        gap: 30px;
    }
    
    .footer - stats {
        justify - content: flex - start;
    }
    
    .footer - bottom {
        flex - direction: column;
        text - align: center;
        gap: 20px;
    }
    
    .footer - meta {
        flex - direction: column;
        gap: 15px;
    }
    
    .meta - info {
        justify - content: center;
        flex - wrap: wrap;
    }
    
    .social - links {
        grid - template - columns: repeat(3, 1fr);
    }
    
    .newsletter - form {
        flex - direction: column;
    }
}

@media(max - width: 480px) {
    .social - links {
        grid - template - columns: repeat(2, 1fr);
    }
    
    .footer - stats {
        flex - direction: column;
        gap: 15px;
    }
    
    .footer - actions {
        flex - direction: column;
        width: 100 %;
    }
    
    .action - btn {
        width: 100 %;
        text - align: center;
    }
}