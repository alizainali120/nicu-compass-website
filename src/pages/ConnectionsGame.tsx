import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

interface Category {
  name: string
  words: string[]
  color: string
  difficulty: string
  explanation: string
}

const categories: Category[] = [
  {
    name: 'Breathing Support',
    words: ['CPAP', 'high flow', 'ventilator', 'nasal cannula'],
    color: 'bg-teal-500',
    difficulty: 'Easy',
    explanation: 'Devices that help your baby breathe or keep lungs open'
  },
  {
    name: 'Feeding Methods',
    words: ['breast', 'bottle', 'orogastric tube', 'nasogastric tube'],
    color: 'bg-amber-500',
    difficulty: 'Medium',
    explanation: 'Ways to get milk into the stomach'
  },
  {
    name: 'Vital Signs',
    words: ['heart rate', 'respiratory rate', 'blood pressure', 'temperature'],
    color: 'bg-rose-500',
    difficulty: 'Hard',
    explanation: 'Vital signs monitored in the NICU'
  },
  {
    name: 'NICU Care Team',
    words: ['neonatologist', 'respiratory therapist', 'nurse', 'dietician'],
    color: 'bg-indigo-600',
    difficulty: 'Tricky',
    explanation: 'People you will see at your baby\'s bedside'
  }
]

const ConnectionsGame: React.FC = () => {
  const [words, setWords] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])
  const [solvedCategories, setSolvedCategories] = useState<Category[]>([])
  const [mistakes, setMistakes] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)
  const [message, setMessage] = useState('')
  const [shake, setShake] = useState(false)

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const allWords = categories.flatMap(cat => cat.words)
    shuffleArray(allWords)
    setWords(allWords)
    setSelected([])
    setSolvedCategories([])
    setMistakes(0)
    setGameOver(false)
    setWon(false)
    setMessage('')
  }

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
  }

  const handleWordClick = (word: string) => {
    if (solvedCategories.some(cat => cat.words.includes(word))) return

    if (selected.includes(word)) {
      setSelected(selected.filter(w => w !== word))
    } else if (selected.length < 4) {
      setSelected([...selected, word])
    }
  }

  const handleShuffle = () => {
    const remainingWords = words.filter(
      word => !solvedCategories.some(cat => cat.words.includes(word))
    )
    shuffleArray(remainingWords)
    const newWords = [
      ...solvedCategories.flatMap(cat => cat.words),
      ...remainingWords
    ]
    setWords(newWords)
  }

  const handleDeselectAll = () => {
    setSelected([])
  }

  const handleSubmit = () => {
    if (selected.length !== 4) return

    const matchedCategory = categories.find(cat =>
      selected.every(word => cat.words.includes(word))
    )

    if (matchedCategory) {
      setMessage(`Great job! You found ${matchedCategory.name}!`)
      setSolvedCategories([...solvedCategories, matchedCategory])
      setSelected([])
      
      const newWords = words.filter(w => !matchedCategory.words.includes(w))
      setWords([...matchedCategory.words, ...newWords])

      if (solvedCategories.length === 3) {
        setWon(true)
        setGameOver(true)
        setMessage('Congratulations! You solved the puzzle! 🎉')
      }
    } else {
      const newMistakes = mistakes + 1
      setMistakes(newMistakes)
      setShake(true)
      setTimeout(() => setShake(false), 500)
      
      if (newMistakes >= 4) {
        setGameOver(true)
        setMessage('Game Over! Better luck next time!')
      } else {
        setMessage(`Not quite! ${4 - newMistakes} ${4 - newMistakes === 1 ? 'mistake' : 'mistakes'} remaining.`)
      }
      setSelected([])
    }
  }

  const isSolved = (word: string) => {
    return solvedCategories.some(cat => cat.words.includes(word))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header navigationItems={navigationItems} />
      
      <article className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm text-accent-600 mb-6">
              <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
              <span className="text-accent-400">›</span>
              <Link to="/#resources" className="hover:text-primary-600 transition-colors">Resources</Link>
              <span className="text-accent-400">›</span>
              <span className="text-accent-700 font-medium">Stories & Activities</span>
            </nav>

            <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Stories & Activities
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary-700">
              NICU Word Match
            </h1>
            
            <p className="text-lg text-accent-600 mb-8">
              A fun learning game for NICU families
            </p>

            <div className="card p-6 sm:p-8 mb-8 border-2 border-primary-200">
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <h2 className="font-bold text-primary-700 mb-2">How to Play:</h2>
                <p className="text-accent-700 leading-relaxed">
                  Find groups of 4 related NICU terms from the 16 words below. Select 4 words and tap "Check Answer" to see if they match a category. You get 4 tries!
                </p>
              </div>

              {message && (
                <div className={`p-4 rounded-lg mb-6 text-center font-medium ${
                  gameOver 
                    ? won 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                    : solvedCategories.length > 0 && message.includes('Great job')
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {message}
                </div>
              )}

              <div className="bg-white rounded-lg p-4 mb-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-accent-700 font-semibold">Tries Left:</span>
                  <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                          i < mistakes 
                            ? 'bg-gray-200 text-gray-400 line-through' 
                            : 'bg-primary-100 text-primary-700'
                        }`}
                      >
                        {i < mistakes ? '✗' : '✓'}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {solvedCategories.map((category, idx) => (
                  <div
                    key={idx}
                    className={`${category.color} text-white rounded-xl p-5 shadow-md border-2 border-white/30`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">✓</span>
                      <h3 className="font-bold text-xl uppercase tracking-wide">
                        {category.name}
                      </h3>
                    </div>
                    <p className="font-semibold mb-2 text-lg">
                      {category.words.join(' • ')}
                    </p>
                    <p className="text-sm opacity-95 border-t border-white/30 pt-2 mt-2">
                      {category.explanation}
                    </p>
                  </div>
                ))}
              </div>

              <div className={`grid grid-cols-4 gap-2 mb-6 ${shake ? 'animate-shake' : ''}`}>
                {words.map((word, idx) => {
                  const isWordSolved = isSolved(word)
                  
                  if (isWordSolved) {
                    return <div key={idx} className="aspect-square" />
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleWordClick(word)}
                      disabled={gameOver}
                      className={`aspect-square rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center text-center p-2 shadow-sm border-2 ${
                        selected.includes(word)
                          ? 'bg-primary-600 text-white border-primary-700 scale-95 shadow-lg'
                          : 'bg-white text-gray-800 border-gray-300 hover:border-primary-400 hover:shadow-md'
                      } ${gameOver ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      {word}
                    </button>
                  )
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleShuffle}
                  disabled={gameOver}
                  className="px-6 py-3 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  🔀 Mix Words
                </button>
                <button
                  onClick={handleDeselectAll}
                  disabled={gameOver || selected.length === 0}
                  className="px-6 py-3 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  ↺ Clear Selection
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={gameOver || selected.length !== 4}
                  className="px-8 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
                >
                  Check Answer →
                </button>
              </div>

              {gameOver && (
                <div className="mt-6 text-center">
                  <button
                    onClick={initializeGame}
                    className="px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    🔄 Play Again
                  </button>
                </div>
              )}

              {gameOver && !won && (
                <div className="mt-6 space-y-3">
                  <h3 className="font-bold text-lg text-primary-700 text-center">Solutions:</h3>
                  {categories.map((category, idx) => (
                    <div
                      key={idx}
                      className={`${category.color} text-white rounded-xl p-5 shadow-md border-2 border-white/30`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">💡</span>
                        <h3 className="font-bold text-xl uppercase tracking-wide">
                          {category.name}
                        </h3>
                      </div>
                      <p className="font-semibold mb-2 text-lg">
                        {category.words.join(' • ')}
                      </p>
                      <p className="text-sm opacity-95 border-t border-white/30 pt-2 mt-2">
                        {category.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="card p-6 bg-primary-50 mb-8">
              <h2 className="text-xl font-bold text-primary-700 mb-3">About This Game</h2>
              <p className="text-accent-700 leading-relaxed">
                This Connections game helps NICU families learn and remember important terms in a fun, interactive way. The categories cover essential aspects of NICU care: breathing support, feeding methods, vital signs, and care team members. Playing games like this can be a gentle way to process and understand the NICU experience.
              </p>
            </div>

            <div className="mt-8">
              <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </article>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container-padding text-center">
          <div className="text-2xl font-bold text-white mb-2">NICU Compass</div>
          <p className="text-gray-400">Guiding families through the NICU journey with love and support</p>
        </div>
      </footer>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.5s;
        }
      `}</style>
    </div>
  )
}

export default ConnectionsGame
