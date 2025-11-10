import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

const NICUWordBuilder: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <Header navigationItems={navigationItems} />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm mb-8 flex items-center space-x-2 text-accent-600">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/" className="hover:text-primary-600 transition-colors">Resources</Link>
          <span>›</span>
          <span className="text-accent-800">Stories & Activities</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            STORIES & ACTIVITIES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-900 mb-4">
            NICU Word Builder
          </h1>
          <p className="text-lg text-accent-600 leading-relaxed">
            Guess NICU medical terms letter by letter
          </p>
        </div>

        <div className="card p-8 mb-8 bg-primary-50 border-2 border-primary-200">
          <h2 className="text-xl font-bold text-primary-700 mb-3">About This Game:</h2>
          <p className="text-accent-700 leading-relaxed">
            NICU Word Builder helps you learn important medical vocabulary through an engaging word-guessing challenge. Each time you play, you'll get a new NICU term to guess. Color-coded feedback guides you to the answer, and you'll learn the definition when you complete the puzzle!
          </p>
        </div>

        <div className="card hover:shadow-xl transition-all duration-300 mb-8">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🔤</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-accent-900">
                    NICU Term Challenge
                  </h3>
                </div>
                <p className="text-accent-600 mb-4">
                  Guess the NICU medical term in 6 tries with helpful hints and color-coded feedback
                </p>
              </div>
            </div>

            <div className="mb-4 bg-white rounded-lg p-4 border-2 border-accent-200">
              <p className="text-sm font-semibold text-accent-700 mb-2">What you'll learn:</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-teal-100 text-teal-700 text-sm px-3 py-1 rounded-full">38+ NICU terms</span>
                <span className="inline-block bg-amber-100 text-amber-700 text-sm px-3 py-1 rounded-full">Medical definitions</span>
                <span className="inline-block bg-rose-100 text-rose-700 text-sm px-3 py-1 rounded-full">Care vocabulary</span>
              </div>
            </div>

            <Link
              to="/nicu-term-challenge"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
            >
              Start Challenge →
            </Link>
          </div>
        </div>

        <div className="card p-6 bg-accent-50">
          <h3 className="text-lg font-bold text-accent-900 mb-3">💡 Why Word Building?</h3>
          <p className="text-accent-700 leading-relaxed mb-3">
            Learning NICU vocabulary helps you feel more empowered in your baby's care journey:
          </p>
          <ul className="space-y-2 text-accent-700">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Build familiarity with medical terms you'll hear in the NICU</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Understand what equipment and procedures are for</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Ask more informed questions during rounds</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Feel confident participating in your baby's care plan</span>
            </li>
          </ul>
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

export default NICUWordBuilder
