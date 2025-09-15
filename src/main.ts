import './style.css';
import { Header } from './components/Header';
import { ResourceCard } from './components/ResourceCard';
import { AppState } from './types';
import { navigationItems } from './data/navigation';
import { resourceCards } from './data/resources';

class NICUCompassApp {
  private state: AppState = {
    expandedCards: new Set(),
    theme: 'light',
    isMobileMenuOpen: false
  };

  private components: {
    header?: Header;
    resourceCards: ResourceCard[];
  } = {
    resourceCards: []
  };

  constructor() {
    this.init();
  }

  private init(): void {
    const app = document.getElementById('app');
    if (!app) {
      throw new Error('App container not found');
    }

    this.renderApp(app);
    this.setupSmoothScrolling();
  }

  private renderApp(container: HTMLElement): void {
    container.innerHTML = `
      <div id="header-container"></div>
      
      <!-- Hero Section -->
      <section class="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="container-padding text-center">
          <div class="max-w-4xl mx-auto">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Your NICU Journey,
              <span class="text-primary-600">Simplified</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Gentle guidance, trusted resources, and a caring community for families navigating the NICU experience together.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#resources" class="btn btn-primary">
                Explore Resources
              </a>
              <a href="#community" class="btn btn-secondary">
                Join Community
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Story Section -->
      <section id="story" class="section-padding">
        <div class="container-padding">
          <div class="max-w-4xl mx-auto">
            <div class="card p-12 text-center">
              <h2 class="text-4xl font-bold text-gray-900 mb-6">
                Created by Parents, for Parents
              </h2>
              <p class="text-lg text-gray-600 leading-relaxed mb-8">
                We understand that having a baby in the NICU can feel overwhelming. Every question, 
                worry, and hope you're experiencing is valid. That's why we created this space - to be 
                your gentle guide through this journey, offering clear information and connecting you 
                with a community that truly understands.
              </p>
              <div class="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium">
                You're not walking this path alone
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Resources Section -->
      <section id="resources" class="section-padding bg-gray-50">
        <div class="container-padding">
          <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Helpful Resources
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Click any resource below to explore detailed information and tools designed specifically for NICU families
            </p>
          </div>
          
          <div id="resources-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Resource cards will be rendered here -->
          </div>
        </div>
      </section>

      <!-- Community Section -->
      <section id="community" class="section-padding">
        <div class="container-padding">
          <div class="bg-primary-600 text-white rounded-3xl p-12 text-center">
            <h2 class="text-4xl font-bold mb-6">
              You're Not Alone
            </h2>
            <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with other families, share your journey, and find the support you need. 
              Our community is here for you, every step of the way.
            </p>
            <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#" class="btn bg-white text-primary-600 hover:bg-gray-50">
                Join Our Community
              </a>
              <a href="#" class="btn bg-primary-500 text-white hover:bg-primary-400">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Support Section -->
      <section id="support" class="section-padding bg-gray-50">
        <div class="container-padding">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Quick Help
            </h2>
            <p class="text-xl text-gray-600">
              Immediate support when you need it most
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="card p-6 text-center">
              <div class="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl mb-4 mx-auto">
                💬
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Need to Talk?</h3>
              <p class="text-gray-600 text-sm mb-4">
                Our trained volunteers are available 24/7 for emotional support
              </p>
              <button class="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Call Now →
              </button>
            </div>
            
            <div class="card p-6 text-center">
              <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white text-xl mb-4 mx-auto">
                📅
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Virtual Meetups</h3>
              <p class="text-gray-600 text-sm mb-4">
                Join weekly online support groups with other NICU families
              </p>
              <button class="text-primary-600 hover:text-primary-700 font-medium text-sm">
                View Schedule →
              </button>
            </div>
            
            <div class="card p-6 text-center">
              <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl mb-4 mx-auto">
                📧
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Ask an Expert</h3>
              <p class="text-gray-600 text-sm mb-4">
                Get answers from NICU nurses and specialists
              </p>
              <button class="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Submit Question →
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-900 text-gray-300 py-12">
        <div class="container-padding">
          <div class="text-center mb-8">
            <div class="text-2xl font-bold text-white mb-2">NICU Compass</div>
            <p class="text-gray-400">Guiding families through the NICU journey with love and support</p>
          </div>
          
          <div class="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 text-sm">
            <a href="#story" class="text-gray-300 hover:text-white transition-colors">Our Story</a>
            <a href="#resources" class="text-gray-300 hover:text-white transition-colors">Resources</a>
            <a href="#community" class="text-gray-300 hover:text-white transition-colors">Community</a>
            <a href="#support" class="text-gray-300 hover:text-white transition-colors">Support</a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
          </div>
          
          <div class="text-center text-gray-400 text-sm">
            <p>&copy; 2024 NICU Compass. All Rights Reserved. Made for NICU families with care.</p>
          </div>
        </div>
      </footer>
    `;

    this.renderComponents(container);
  }

  private renderComponents(container: HTMLElement): void {
    // Render Header
    const headerContainer = container.querySelector('#header-container');
    if (headerContainer) {
      this.components.header = new Header(navigationItems);
      this.components.header.mount(headerContainer as HTMLElement);
    }

    // Render Resource Cards
    const resourcesContainer = container.querySelector('#resources-container');
    if (resourcesContainer) {
      this.components.resourceCards = resourceCards.map(cardData => 
        new ResourceCard(cardData, (id, expanded) => this.handleCardToggle(id, expanded))
      );

      this.components.resourceCards.forEach((card, index) => {
        setTimeout(() => {
          card.mount(resourcesContainer as HTMLElement);
        }, index * 100); // Stagger animations
      });
    }
  }

  private handleCardToggle(cardId: string, expanded: boolean): void {
    if (expanded) {
      this.state.expandedCards.add(cardId);
    } else {
      this.state.expandedCards.delete(cardId);
    }

    // Optional: Close other cards when one opens (accordion behavior)
    // You can enable this for a more focused experience
    /*
    if (expanded) {
      this.components.resourceCards.forEach(card => {
        if (card.card.id !== cardId) {
          card.setExpanded(false);
        }
      });
    }
    */
  }

  private setupSmoothScrolling(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Initialize the application
new NICUCompassApp();