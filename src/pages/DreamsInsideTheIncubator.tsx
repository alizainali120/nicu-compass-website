import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

const DreamsInsideTheIncubator: React.FC = () => {
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
          <span className="text-accent-800">Dreams Inside the Incubator</span>
        </nav>

        <div className="mb-8 text-center">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            NICU STORYBOOK SERIES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-900 mb-4">
            Dreams Inside the Incubator
          </h1>
          <p className="text-lg text-accent-600">
            A gentle story about the dreams, warmth, and love that surround your baby
          </p>
        </div>

        <div className="card p-8 sm:p-12 mb-8">
          <div className="mb-8 rounded-2xl overflow-hidden">
            <img 
              src="/dreams-incubator-illustration.png" 
              alt="Soft watercolor illustration of a baby dreaming peacefully in the NICU"
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-accent-700 leading-relaxed space-y-6">
              <p>
                Under a warm golden light, a baby dreamed. She dreamed of her parents' voices, her mother's soft songs, and her father's gentle touch on her tiny foot.
              </p>

              <p>
                Her dreams were full of colors — soft blues, golden yellows, and the pink glow of sunrise that slipped through the NICU window each morning.
              </p>

              <p>
                Every time her parents came to visit, her heart beat a little faster. She knew that every word, every touch, and every smile helped her grow.
              </p>

              <p className="font-semibold text-primary-700">
                Someday soon, she'd leave the incubator behind — but she would always carry those dreams with her: dreams of love, of home, and of the hands that never stopped holding her.
              </p>
            </div>
          </div>
        </div>

        <div className="card p-6 bg-primary-50 border-2 border-primary-200 mb-8">
          <h3 className="text-lg font-bold text-primary-700 mb-3">💙 Your Baby Can Hear You</h3>
          <p className="text-accent-700 leading-relaxed">
            Even inside the incubator, your baby knows you're there. Your voice, your touch, and your presence help them grow stronger every day. Research shows that babies recognize their parents' voices and respond to loving care. Every moment you spend with your baby — reading, singing, or simply talking — creates precious connections that last a lifetime.
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

export default DreamsInsideTheIncubator
