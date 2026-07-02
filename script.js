document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    const toggleBtn = document.getElementById('themeToggle');
    const logos = document.querySelectorAll('.brand-logo');
    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(theme){
        root.setAttribute('data-bs-theme', theme);
        themeIcon.className = theme === 'dark' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
        logos.forEach(img => {
            img.src = theme === 'dark' ? 'dark-logo.png' : 'logo.png';
        });
    }

    const saved = localStorage.getItem('gh-theme');
    applyTheme(saved || (mql.matches ? 'dark' : 'light'));

    mql.addEventListener('change', (e) => {
        if(!localStorage.getItem('gh-theme')){
        applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    toggleBtn.addEventListener('click', () => {
        const current = root.getAttribute('data-bs-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem('gh-theme', next);
        applyTheme(next);
    });
})