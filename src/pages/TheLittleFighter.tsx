import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

const TheLittleFighter: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <Header navigationItems={navigationItems} />
      
      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm mb-8 flex items-center space-x-2 text-accent-600">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/" className="hover:text-primary-600 transition-colors">Resources</Link>
          <span>›</span>
          <Link to="/nicu-storybook-series" className="hover:text-primary-600 transition-colors">NICU Storybook Series</Link>
          <span>›</span>
          <span className="text-accent-800">The Little Fighter</span>
        </nav>

        <div className="mb-8 text-center">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            NICU STORYBOOK SERIES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-900 mb-4">
            The Little Fighter
          </h1>
          <p className="text-lg text-accent-600">
            A story of strength, courage, and growing stronger every day
          </p>
        </div>

        <div className="card p-8 sm:p-12 mb-8">
          <div className="mb-8 rounded-2xl overflow-hidden">
            <img 
              src="/little-fighter-illustration.png" 
              alt="Soft watercolor illustration of a brave NICU baby growing stronger"
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-accent-700 leading-relaxed space-y-6">
              <p>
                In a quiet room filled with tiny heartbeats and soft beeps, there was a baby so small that her entire hand could fit around one of her mother's fingers. Every day, she worked so hard — breathing, growing, and dreaming.
              </p>

              <p>
                Her parents whispered to her, "You're stronger than you know." And though the machines hummed and nurses moved quietly around her, she knew she wasn't alone.
              </p>

              <p>
                Each day, she opened her eyes a little wider. Each night, her heartbeat sang softly on the monitor — a lullaby of strength and love.
              </p>

              <p className="font-semibold text-primary-700">
                And one day, when the tubes came off and the room felt brighter, she smiled. The little fighter had always been brave enough to grow.
              </p>
            </div>
          </div>
        </div>

        <div className="card p-6 bg-primary-50 border-2 border-primary-200 mb-8">
          <h3 className="text-lg font-bold text-primary-700 mb-3">💙 About Your Little Fighter</h3>
          <p className="text-accent-700 leading-relaxed">
            Every NICU baby is a fighter, showing incredible strength and resilience each day. This story celebrates the quiet courage of premature and medically fragile babies who work so hard to breathe, eat, and grow. Your baby is stronger than you know, and each small milestone is a victory worth celebrating.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link to="/nicu-storybook-series" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
            ← Back to Storybook Series
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TheLittleFighter
