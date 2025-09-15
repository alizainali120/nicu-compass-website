// NICU Compass Website JavaScript

// Main application object
const NICUCompass = {
    
    /**
     * Initializes all application modules
     */
    initializeModules: function() {
        console.log('Initializing NICU Compass website...');
        
        // Initialize navigation
        NavigationManager.initSmoothScrolling();
        NavigationManager.initMobileMenuListeners();
        
        // Initialize resource interactions
        this.initResourceListeners();
        
        // Initialize accessibility features
        AccessibilityManager.initKeyboardNavigation();
        AccessibilityManager.manageFocus();
        
        console.log('NICU Compass website initialized successfully!');
    },

    /**
     * Initialize resource card click listeners
     */
    initResourceListeners: function() {
        const resourceCards = document.querySelectorAll('.resource-card button');
        resourceCards.forEach(button => {
            button.addEventListener('click', this.toggleResourceDetails.bind(this));
        });
    },

    /**
     * Toggle resource card details
     */
    toggleResourceDetails: function(event) {
        const button = event.target.closest('button');
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const controlsId = button.getAttribute('aria-controls');
        const details = document.getElementById(controlsId);
        const arrow = button.querySelector('svg');

        if (details) {
            if (isExpanded) {
                details.classList.remove('show');
                button.setAttribute('aria-expanded', 'false');
                if (arrow) arrow.classList.remove('arrow-rotate');
            } else {
                details.classList.add('show');
                button.setAttribute('aria-expanded', 'true');
                if (arrow) arrow.classList.add('arrow-rotate');
            }
        }
    }
};

// Navigation Management
const NavigationManager = {
    
    /**
     * Initialize smooth scrolling for navigation links
     */
    initSmoothScrolling: function() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    },

    /**
     * Initialize mobile menu listeners
     */
    initMobileMenuListeners: function() {
        const mobileMenuButton = document.querySelector('.sm\\:hidden');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
                mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
                mobileMenu.classList.toggle('show');
            });
        }
    }
};

// Accessibility Management
const AccessibilityManager = {
    
    /**
     * Initialize keyboard navigation
     */
    initKeyboardNavigation: function() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                const mobileMenuButton = document.querySelector('.sm\\:hidden');
                if (mobileMenu && mobileMenu.classList.contains('show')) {
                    mobileMenu.classList.remove('show');
                    if (mobileMenuButton) {
                        mobileMenuButton.setAttribute('aria-expanded', 'false');
                        mobileMenuButton.focus();
                    }
                }
            }
        });
    },

    /**
     * Manage focus for better accessibility
     */
    manageFocus: function() {
        // Ensure proper focus management for interactive elements
        const interactiveElements = document.querySelectorAll('button, a, input, textarea, select');
        interactiveElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '2px solid #2563eb';
                element.style.outlineOffset = '2px';
            });
            element.addEventListener('blur', () => {
                element.style.outline = '';
                element.style.outlineOffset = '';
            });
        });
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    NICUCompass.initializeModules();
});