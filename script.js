document.addEventListener('DOMContentLoaded', () => {
    /* --- Theme Toggle Logic --- */
    const themeButton = document.getElementById('theme-toggle');
    
    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }

    themeButton.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    /* --- Mobile Menu Logic --- */
    const menuButton = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuButton.addEventListener('click', () => {
        // Toggle the .active class on the navigation list
        navLinks.classList.toggle('active');
        
        // Optional: Animate hamburger to X (simple CSS transition can be added later)
    });

    // Close menu when a link is clicked (UX improvement for single page feel)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});