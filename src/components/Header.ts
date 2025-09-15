import { NavigationItem } from '../types';

export class Header {
  private navigationItems: NavigationItem[];
  private isMobileMenuOpen = false;
  private element: HTMLElement | null = null;

  constructor(navigationItems: NavigationItem[]) {
    this.navigationItems = navigationItems;
  }

  private toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.render();
  }

  private render(): void {
    if (!this.element) return;

    this.element.innerHTML = `
      <header class="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div class="container-padding">
          <div class="flex items-center justify-between h-16">
            <!-- Logo -->
            <div class="flex items-center">
              <div class="text-2xl font-bold text-gray-900">
                NICU Compass
              </div>
              <div class="ml-3 px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                For Parents
              </div>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center space-x-1">
              ${this.navigationItems.map(item => `
                <a href="${item.href}" 
                   class="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-medium">
                  ${item.label}
                </a>
              `).join('')}
            </nav>

            <!-- Mobile Menu Button -->
            <button class="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all" 
                    aria-label="Toggle menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="${this.isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}"></path>
              </svg>
            </button>
          </div>

          <!-- Mobile Navigation -->
          <div class="md:hidden transition-all duration-300 ${this.isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}">
            <nav class="py-4 space-y-1">
              ${this.navigationItems.map(item => `
                <a href="${item.href}" 
                   class="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all">
                  ${item.label}
                </a>
              `).join('')}
            </nav>
          </div>
        </div>
      </header>
    `;

    // Attach event listeners
    const mobileButton = this.element.querySelector('button[aria-label="Toggle menu"]');
    if (mobileButton) {
      mobileButton.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Close mobile menu when clicking navigation links
    const mobileLinks = this.element.querySelectorAll('nav a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.isMobileMenuOpen = false;
        this.render();
      });
    });
  }

  public mount(container: HTMLElement): HTMLElement {
    this.element = document.createElement('div');
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
}