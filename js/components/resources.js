/**
 * Resources Component Module
 * Handles resource card functionality
 */
export const Resources = {
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