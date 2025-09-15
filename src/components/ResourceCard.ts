import { ResourceCard as ResourceCardType } from '../types';

export class ResourceCard {
  private card: ResourceCardType;
  private isExpanded: boolean = false;
  private element: HTMLElement | null = null;
  private onToggle?: (id: string, expanded: boolean) => void;

  constructor(card: ResourceCardType, onToggle?: (id: string, expanded: boolean) => void) {
    this.card = card;
    this.onToggle = onToggle;
  }

  private getCategoryColor(): string {
    const colors = {
      guidance: 'bg-blue-50 text-blue-700 border-blue-200',
      community: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      practical: 'bg-purple-50 text-purple-700 border-purple-200',
      wellness: 'bg-rose-50 text-rose-700 border-rose-200'
    };
    return colors[this.card.category];
  }

  private getIconColor(): string {
    const colors = {
      guidance: 'bg-blue-600',
      community: 'bg-emerald-600',
      practical: 'bg-purple-600',
      wellness: 'bg-rose-600'
    };
    return colors[this.card.category];
  }

  private toggle(): void {
    this.isExpanded = !this.isExpanded;
    this.render();
    this.onToggle?.(this.card.id, this.isExpanded);
  }

  private render(): void {
    if (!this.element) return;

    const expandedContent = this.isExpanded ? `
      <div class="mt-6 pt-6 border-t border-gray-100 animate-slide-up">
        <h4 class="font-semibold text-gray-900 mb-3">${this.card.details.subtitle}</h4>
        <ul class="space-y-2 text-gray-600 text-sm mb-4">
          ${this.card.details.content.map(item => `
            <li class="flex items-start">
              <span class="text-primary-500 mr-2 mt-0.5">•</span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
        <a href="${this.card.details.actionLink}" 
           class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
          ${this.card.details.actionText}
          <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    ` : '';

    this.element.innerHTML = `
      <div class="card group cursor-pointer h-full">
        <div class="p-6">
          <!-- Category Badge -->
          <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${this.getCategoryColor()} mb-4">
            ${this.card.category}
          </div>
          
          <!-- Icon -->
          <div class="w-12 h-12 ${this.getIconColor()} rounded-xl flex items-center justify-center text-white text-lg mb-4 group-hover:scale-105 transition-transform">
            ${this.card.icon}
          </div>
          
          <!-- Content -->
          <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
            ${this.card.title}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">
            ${this.card.description}
          </p>
          
          <!-- Toggle Button -->
          <button class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-all group/btn">
            <span>${this.isExpanded ? 'Show Less' : 'Learn More'}</span>
            <svg class="ml-1 w-4 h-4 transition-transform ${this.isExpanded ? 'rotate-180' : ''}" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          ${expandedContent}
        </div>
      </div>
    `;

    // Reattach event listener
    const button = this.element.querySelector('button');
    if (button) {
      button.addEventListener('click', () => this.toggle());
    }
  }

  public mount(container: HTMLElement): HTMLElement {
    this.element = document.createElement('div');
    this.element.className = 'animate-fade-in';
    container.appendChild(this.element);
    this.render();
    return this.element;
  }

  public unmount(): void {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
      this.element = null;
    }
  }

  public setExpanded(expanded: boolean): void {
    if (this.isExpanded !== expanded) {
      this.isExpanded = expanded;
      this.render();
    }
  }
}