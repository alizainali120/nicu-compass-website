/**
 * Navigation Component Module
 * Handles all navigation-related functionality
 */
export const Navigation = {
    /**
     * Toggles the mobile menu visibility
     */
    toggleMobileMenu: function() {
        const menu = document.getElementById('mobile-menu');
        const button = document.querySelector('[aria-controls="mobile-menu"]');
        const isExpanded = menu.classList.contains('active');
        
        menu.classList.toggle('active');
        button.setAttribute('aria-expanded', (!isExpanded).toString());
    },

    /**
     * Initializes smooth scrolling for anchor links
     */
    initSmoothScrolling: function() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu && mobileMenu.classList.contains('active')) {
                        Navigation.toggleMobileMenu();
                    }
                }
            });
        });
    }
};