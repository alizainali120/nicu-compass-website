import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

const ColorMyFeelings: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <Header navigationItems={navigationItems} />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm mb-8 flex items-center space-x-2 text-accent-600">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/" className="hover:text-primary-600 transition-colors">Resources</Link>
          <span>›</span>
          <span className="text-accent-800">Color My Feelings</span>
        </nav>

        <div className="mb-8 text-center">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            COPING IN THE NICU
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-900 mb-4">
            Color My Feelings
          </h1>
          <p className="text-lg text-accent-600">
            A calming mandala to color while you process your emotions
          </p>
        </div>

        <div className="card p-8 mb-8 bg-primary-50 border-2 border-primary-200">
          <h2 className="text-xl font-bold text-primary-700 mb-3">How to Use This Activity:</h2>
          <p className="text-accent-700 leading-relaxed mb-4">
            The NICU journey brings many emotions - hope, worry, love, fear, joy, and exhaustion. This mandala coloring activity gives you a peaceful way to express what you're feeling without words. Choose colors that match your emotions and let the repetitive motion of coloring help you find calm.
          </p>
          <div className="space-y-2 text-accent-700">
            <p className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Download and print the mandala, or color it on your device</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Choose colors based on how you're feeling today</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Take your time - there's no right or wrong way to color</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Use this as a quiet moment for yourself during NICU visits</span>
            </p>
          </div>
        </div>

        <div className="card p-8 mb-8">
          <h2 className="text-xl font-bold text-accent-900 mb-6 text-center">Your Feelings Mandala</h2>
          
          <div className="mb-6 bg-white rounded-2xl p-6 border-2 border-primary-200">
            <img 
              src="/feelings-mandala.png" 
              alt="Mandala coloring template with intricate patterns"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="text-center">
            <a
              href="/feelings-mandala.png"
              download="NICU-Compass-Feelings-Mandala.png"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
            >
              📥 Download Mandala to Print
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card p-6 bg-white border-2 border-primary-200">
            <h3 className="text-lg font-bold text-accent-900 mb-3">💙 Suggested Color Meanings</h3>
            <div className="space-y-2 text-sm text-accent-700">
              <p><span className="font-semibold text-blue-600">Blue:</span> Calm, peace, hope</p>
              <p><span className="font-semibold text-purple-600">Purple:</span> Strength, courage, resilience</p>
              <p><span className="font-semibold text-pink-600">Pink:</span> Love, tenderness, connection</p>
              <p><span className="font-semibold text-green-600">Green:</span> Healing, growth, balance</p>
              <p><span className="font-semibold text-yellow-600">Yellow:</span> Joy, optimism, light</p>
              <p><span className="font-semibold text-orange-600">Orange:</span> Energy, warmth, comfort</p>
              <p><span className="font-semibold text-red-600">Red:</span> Passion, life, vitality</p>
              <p><span className="font-semibold text-gray-600">Gray:</span> Rest, quiet, processing</p>
            </div>
          </div>

          <div className="card p-6 bg-white border-2 border-primary-200">
            <h3 className="text-lg font-bold text-accent-900 mb-3">✨ Benefits of Coloring</h3>
            <ul className="space-y-2 text-sm text-accent-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Reduces stress and anxiety</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Provides a mindful break</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Helps process complex emotions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Creates a sense of accomplishment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Offers quiet reflection time</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card p-6 bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-200 mb-8">
          <h3 className="text-lg font-bold text-primary-700 mb-3">💚 A Note for NICU Parents</h3>
          <p className="text-accent-700 leading-relaxed">
            Your feelings are valid - all of them. The NICU journey is filled with ups and downs, and it's okay to feel many things at once. This coloring activity is a small gift to yourself: permission to pause, breathe, and honor whatever emotions you're carrying today. You're doing an amazing job, and you deserve moments of peace.
          </p>
        </div>

        <div className="mt-8">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ColorMyFeelings
