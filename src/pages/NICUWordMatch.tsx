import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

interface Game {
  id: number
  title: string
  link: string
  description: string
}

const games: Game[] = [
  {
    id: 1,
    title: 'NICU Care Basics',
    link: '/connections-game',
    description: 'Learn about breathing support, feeding methods, vital signs, and your care team'
  },
  {
    id: 2,
    title: 'Baby Care & Bonding',
    link: '/connections-game-2',
    description: 'Discover warmth devices, milk collection methods, bonding activities, and breast milk benefits'
  }
]

const NICUWordMatch: React.FC = () => {
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
            NICU Word Match
          </h1>
          <p className="text-lg text-accent-600 leading-relaxed">
            Find groups of 4 related NICU terms in these fun matching games
          </p>
        </div>

        <div className="card p-8 mb-8 bg-primary-50 border-2 border-primary-200">
          <h2 className="text-xl font-bold text-primary-700 mb-3">How These Games Work:</h2>
          <p className="text-accent-700 leading-relaxed">
            Each game presents 16 NICU-related words. Your goal is to find groups of 4 words that share a common theme. Select 4 words and check if they match a category. You get 4 tries per game! These games are designed to make learning about NICU care engaging and memorable.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {games.map((game) => (
            <div key={game.id} className="card hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🎮</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-accent-900">
                        Game {game.id}: {game.title}
                      </h3>
                    </div>
                    <p className="text-accent-600 mb-4">
                      {game.description}
                    </p>
                  </div>
                </div>

                <Link
                  to={game.link}
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Play Game {game.id} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="card p-6 bg-accent-50">
          <h3 className="text-lg font-bold text-accent-900 mb-3">💡 Why Word Matching?</h3>
          <p className="text-accent-700 leading-relaxed mb-3">
            The NICU can feel overwhelming with so many new terms and concepts. These word matching games help you:
          </p>
          <ul className="space-y-2 text-accent-700">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Learn important NICU terminology in a fun, low-pressure way</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Understand connections between related concepts and equipment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Feel more confident when talking with your care team</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Take a mental break while still learning about your baby's care</span>
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

export default NICUWordMatch
