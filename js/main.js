 // NICU Compass Website JavaScript Modules

/**
 * Resource Management Module
 * Handles the expanding/collapsing of resource cards
 */
const ResourceManager = {
    /**
     * Toggles the visibility of a resource card's details
     * @param {string} resourceId - The ID of the resource to toggle
     */
    toggleResource: function(resourceId) {
        const details = document.getElementById('details-' + resourceId);
        const arrow = document.getElementById('arrow-' + resourceId);
        const button = document.querySelector(`[aria-controls="details-${resourceId}"]`);
        
        if (details.classList.contains('expanded')) {
            this.collapseResource(details, arrow, button);
        } else {
            this.collapseAllResources();
            this.expandResource(details, arrow, button);
        }
    },

    /**
     * Expands a single resource
     * @param {HTMLElement} details - The details element to expand
     * @param {HTMLElement} arrow - The arrow icon to rotate
     * @param {HTMLElement} button - The button that controls the expansion
     */
    expandResource: function(details, arrow, button) {
        details.classList.add('expanded');
        arrow.style.transform = 'rotate(180deg)';
        button.setAttribute('aria-expanded', 'true');
    },

    /**
     * Collapses a single resource
     * @param {HTMLElement} details - The details element to collapse
     * @param {HTMLElement} arrow - The arrow icon to rotate
     * @param {HTMLElement} button - The button that controls the expansion
     */
    collapseResource: function(details, arrow, button) {
        details.classList.remove('expanded');
        arrow.style.transform = 'rotate(0deg)';
        button.setAttribute('aria-expanded', 'false');
    },

    /**
     * Collapses all expanded resources
     */
    collapseAllResources: function() {
        // Close all expanded details
        document.querySelectorAll('.resource-details.expanded').forEach(detail => {
            detail.classList.remove('expanded');
        });
        
        // Reset all arrows
        document.querySelectorAll('[id^="arrow-"]').forEach(arrow => {
            arrow.style.transform = 'rotate(0deg)';
        });
        
        // Reset all aria-expanded attributes
        document.querySelectorAll('[aria-controls^="details-"]').forEach(button => {
            button.setAttribute('aria-expanded', 'false');
        });
    }
};

/**
 * Navigation Management Module
 * Handles mobile menu and smooth scrolling
 */
const NavigationManager = {
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
                        NavigationManager.toggleMobileMenu();
                    }
                }
            });
        });
    },

    /**
     * Initializes event listeners for mobile menu
     */
    initMobileMenuListeners: function() {
        const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', function(e) {
                e.preventDefault();
                NavigationManager.toggleMobileMenu();
            });
        }
    }
};

/**
 * Accessibility Enhancement Module
 * Handles keyboard navigation and focus management
 */
const AccessibilityManager = {
    /**
     * Initializes keyboard navigation for resource cards
     */
    initKeyboardNavigation: function() {
        document.querySelectorAll('[aria-controls^="details-"]').forEach(button => {
            button.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const resourceId = this.getAttribute('aria-controls').replace('details-', '');
                    ResourceManager.toggleResource(resourceId);
                }
            });
        });
    },

    /**
     * Manages focus for better accessibility
     */
    manageFocus: function() {
        // Focus management can be added here for enhanced accessibility
        console.log('Focus management initialized');
    }
};

/**
 * Main Application Module
 * Initializes all modules when DOM is ready
 */
const NICUCompassApp = {
    /**
     * Initializes the entire application
     */
    init: function() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', this.initializeModules.bind(this));
        } else {
            this.initializeModules();
        }
    },

    /**
     * Initializes all application modules
     */
    initializeModules: function() {
        console.log('Initializing NICU Compass website...');
        
        // Initialize component system
        this.initComponentSystem();
        
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
     * Initializes the component system and renders cards
     */
    initComponentSystem: function() {
        // Check if we have the required classes and data
        if (typeof ResourceCardsManager === 'undefined' || typeof resourceCardsData === 'undefined') {
            console.error('Component system dependencies not loaded');
            return;
        }
        
        // Initialize the resource cards manager
        this.resourceCardsManager = new ResourceCardsManager(resourceCardsData);
        
        // Render cards to the container
        this.resourceCardsManager.renderToContainer('resource-cards-container');
        
        console.log('Component system initialized with', resourceCardsData.length, 'cards');
    },

    /**
     * Initializes event listeners for resource cards
     */
    initResourceListeners: function() {
        document.querySelectorAll('[aria-controls^="details-"]').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const resourceId = this.getAttribute('aria-controls').replace('details-', '');
                ResourceManager.toggleResource(resourceId);
            });
        });
    }
};

// Global functions for backward compatibility with inline event handlers
// These will be removed once we convert to event listeners
function toggleResource(resourceId) {
    ResourceManager.toggleResource(resourceId);
}

function toggleMobileMenu() {
    NavigationManager.toggleMobileMenu();
}

// Initialize the application
NICUCompassApp.init();