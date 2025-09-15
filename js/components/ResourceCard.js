/**
 * Reusable Resource Card Component
 * Creates consistent, configurable resource cards
 */
class ResourceCard {
    constructor(cardData) {
        this.data = cardData;
        this.colorThemes = {
            sage: {
                border: 'border-sage-200',
                hoverBorder: 'hover:border-sage-300',
                iconBg: 'bg-sage-500',
                textColor: 'text-sage-600',
                detailsBorder: 'border-sage-100'
            },
            sky: {
                border: 'border-sky-200',
                hoverBorder: 'hover:border-sky-300', 
                iconBg: 'bg-sky-500',
                textColor: 'text-sky-600',
                detailsBorder: 'border-sky-100'
            },
            mint: {
                border: 'border-emerald-200',
                hoverBorder: 'hover:border-emerald-300',
                iconBg: 'bg-emerald-500',
                textColor: 'text-emerald-600',
                detailsBorder: 'border-emerald-100'
            },
            coral: {
                border: 'border-rose-200',
                hoverBorder: 'hover:border-rose-300',
                iconBg: 'bg-rose-400',
                textColor: 'text-rose-600',
                detailsBorder: 'border-rose-100'
            }
        };
    }

    /**
     * Generates the HTML for a resource card
     * @returns {string} HTML string for the card
     */
    render() {
        const theme = this.colorThemes[this.data.colorScheme] || this.colorThemes.sage;
        
        return `
            <div class="resource-card bg-white p-6 rounded-2xl shadow-lg border ${theme.border} ${theme.hoverBorder}" role="group" aria-labelledby="${this.data.id}-title">
                <div class="w-12 h-12 ${theme.iconBg} rounded-2xl flex items-center justify-center text-white text-xl mb-4">
                    ${this.data.icon}
                </div>
                <h3 id="${this.data.id}-title" class="text-xl font-bold text-gray-800 mb-3">${this.data.title}</h3>
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                    ${this.data.description}
                </p>
                <button type="button" class="flex items-center ${theme.textColor} font-semibold text-sm focus:outline-2 focus:outline-offset-2" aria-expanded="false" aria-controls="details-${this.data.id}">
                    <span>Learn More</span>
                    <svg class="w-4 h-4 ml-2 transition-transform" id="arrow-${this.data.id}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div id="details-${this.data.id}" class="resource-details mt-4 pt-4 border-t ${theme.detailsBorder}" role="region" aria-labelledby="${this.data.id}-title">
                    <h4 class="font-semibold text-gray-800 mb-2">${this.data.details.subtitle}</h4>
                    <ul class="text-gray-600 space-y-1 text-sm">
                        ${this.data.details.items.map(item => `<li>• ${item}</li>`).join('')}
                    </ul>
                    <a href="${this.data.details.actionLink}" class="mt-3 ${theme.textColor} hover:opacity-80 font-medium text-sm inline-block focus:outline-2 focus:outline-offset-2">
                        ${this.data.details.actionText}
                    </a>
                </div>
            </div>
        `;
    }

    /**
     * Creates and returns a DOM element for the card
     * @returns {HTMLElement} The card DOM element
     */
    createElement() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = this.render();
        return wrapper.firstElementChild;
    }
}

/**
 * Resource Cards Manager
 * Handles rendering and managing multiple resource cards
 */
class ResourceCardsManager {
    constructor(cardsData) {
        this.cardsData = cardsData;
        this.cards = [];
    }

    /**
     * Renders all cards to a container element
     * @param {string} containerId - ID of the container element
     */
    renderToContainer(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container with ID "${containerId}" not found`);
            return;
        }

        // Clear existing content
        container.innerHTML = '';

        // Create and append each card
        this.cardsData.forEach(cardData => {
            const card = new ResourceCard(cardData);
            const cardElement = card.createElement();
            container.appendChild(cardElement);
            this.cards.push(card);
        });
    }

    /**
     * Gets card data by ID
     * @param {string} cardId - The ID of the card
     * @returns {object|null} Card data or null if not found
     */
    getCardData(cardId) {
        return this.cardsData.find(card => card.id === cardId) || null;
    }

    /**
     * Adds a new card dynamically
     * @param {object} cardData - Data for the new card
     * @param {string} containerId - ID of the container to add to
     */
    addCard(cardData, containerId) {
        this.cardsData.push(cardData);
        const container = document.getElementById(containerId);
        if (container) {
            const card = new ResourceCard(cardData);
            const cardElement = card.createElement();
            container.appendChild(cardElement);
            this.cards.push(card);
        }
    }
}