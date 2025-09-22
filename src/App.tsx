import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ResourcesSection from './components/ResourcesSection'
import { AppState } from './types'
import { navigationItems } from './data/navigation'
import NICUBasicsGuide from './pages/NICUBasicsGuide'
import ParentStories from './pages/ParentStories'
import DischargePlanning from './pages/DischargePlanning'
import ParentWellness from './pages/ParentWellness'
import FinancialResources from './pages/FinancialResources'
import EmergencySupport from './pages/EmergencySupport'

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    expandedCards: new Set(),
    theme: 'light',
    isMobileMenuOpen: false
  })

  const handleCardToggle = (cardId: string, expanded: boolean) => {
    setState(prev => {
      const newExpandedCards = new Set(prev.expandedCards)
      if (expanded) {
        newExpandedCards.add(cardId)
      } else {
        newExpandedCards.delete(cardId)
      }
      return {
        ...prev,
        expandedCards: newExpandedCards
      }
    })
  }

  const setupSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href')
        if (!href || href === '#') return
        
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })
  }

  useEffect(() => {
    setupSmoothScrolling()
  }, [])

  return (
    <Router>
      <Header navigationItems={navigationItems} />
      
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* Hero Section */}
              <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container-padding text-center">
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                      Your NICU Journey,
                      <span className="text-primary-600"> Simplified</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                      Gentle guidance, trusted resources, and a caring community for families navigating the NICU experience together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a href="#resources" className="btn btn-primary">
                        Explore Resources
                      </a>
                      <a href="#community" className="btn btn-secondary">
                        Join Community
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Story Section */}
              <section id="story" className="section-padding">
                <div className="container-padding">
                  <div className="max-w-4xl mx-auto">
                    <div className="card p-12 text-center">
                      <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Created by Parents, for Parents
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        We understand that having a baby in the NICU can feel overwhelming. Every question, 
                        worry, and hope you're experiencing is valid. That's why we created this space - to be 
                        your gentle guide through this journey, offering clear information and connecting you 
                        with a community that truly understands.
                      </p>
                      <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium">
                        You're not walking this path alone
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Resources Section */}
              <ResourcesSection
                expandedCards={state.expandedCards}
                onToggle={handleCardToggle}
              />

              {/* Community Section */}
              <section id="community" className="section-padding">
                <div className="container-padding">
                  <div className="bg-primary-600 text-white rounded-3xl p-12 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                      You're Not Alone
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                      Connect with other families, share your journey, and find the support you need. 
                      Our community is here for you, every step of the way.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                      <a href="#" className="btn bg-white text-primary-600 hover:bg-gray-50">
                        Join Our Community
                      </a>
                      <a href="#" className="btn bg-primary-500 text-white hover:bg-primary-400">
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Support Section */}
              <section id="support" className="section-padding bg-gray-50">
                <div className="container-padding">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      Quick Help
                    </h2>
                    <p className="text-xl text-gray-600">
                      Immediate support when you need it most
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card p-6 text-center">
                      <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl mb-4 mx-auto">
                        💬
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Need to Talk?</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Our trained volunteers are available 24/7 for emotional support
                      </p>
                      <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                        Call Now →
                      </button>
                    </div>
                    
                    <div className="card p-6 text-center">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white text-xl mb-4 mx-auto">
                        📅
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Virtual Meetups</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Join weekly online support groups with other NICU families
                      </p>
                      <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                        View Schedule →
                      </button>
                    </div>
                    
                    <div className="card p-6 text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl mb-4 mx-auto">
                        📧
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Ask an Expert</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Get answers from NICU nurses and specialists
                      </p>
                      <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                        Submit Question →
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="container-padding">
                  <div className="text-center mb-8">
                    <div className="text-2xl font-bold text-white mb-2">NICU Compass</div>
                    <p className="text-gray-400">Guiding families through the NICU journey with love and support</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 text-sm">
                    <a href="#story" className="text-gray-300 hover:text-white transition-colors">Our Story</a>
                    <a href="#resources" className="text-gray-300 hover:text-white transition-colors">Resources</a>
                    <a href="#community" className="text-gray-300 hover:text-white transition-colors">Community</a>
                    <a href="#support" className="text-gray-300 hover:text-white transition-colors">Support</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                  </div>
                  
                  <div className="text-center text-gray-400 text-sm">
                    <p>&copy; 2024 NICU Compass. All Rights Reserved. Made for NICU families with care.</p>
                  </div>
                </div>
              </footer>
            </div>
          }
        />
        <Route path="/nicu-basics-guide" element={<NICUBasicsGuide />} />
        <Route path="/parent-stories" element={<ParentStories />} />
        <Route path="/discharge-planning" element={<DischargePlanning />} />
        <Route path="/parent-wellness" element={<ParentWellness />} />
        <Route path="/financial-resources" element={<FinancialResources />} />
        <Route path="/emergency-support" element={<EmergencySupport />} />
      </Routes>
    </Router>
  )
}

export default App