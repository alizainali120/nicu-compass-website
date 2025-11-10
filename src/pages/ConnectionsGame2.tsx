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
    name: 'Devices to Keep Your Baby Warm',
    words: ['plastic bag', 'thermal mattress', 'hat', 'warmer'],
    color: 'bg-teal-500',
    difficulty: 'Easy',
    explanation: 'Temperature regulation tools used to keep premature babies warm'
  },
  {
    name: 'Ways to Collect Breast Milk/Colostrum',
    words: ['breast pump', 'hand expression', 'colostrum collector', 'syringes'],
    color: 'bg-amber-500',
    difficulty: 'Medium',
    explanation: 'Methods and tools for collecting milk, especially important in early days'
  },
  {
    name: 'Ways to Stimulate Your Baby\'s Development',
    words: ['reading', 'singing', 'skin to skin', 'gentle touch'],
    color: 'bg-rose-500',
    difficulty: 'Hard',
    explanation: 'Bonding activities that support brain development and connection'
  },
  {
    name: 'Composition of Breast Milk',
    words: ['nutrients', 'antibodies', 'stem cells', 'enzymes'],
    color: 'bg-indigo-600',
    difficulty: 'Tricky',
    explanation: 'Living components that make breast milk powerful medicine for your baby'
  }
]

const ConnectionsGame2: React.FC = () => {
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
      setMessage('Not quite right. Try again!')
      setShake(true)
      setTimeout(() => setShake(false), 500)

      if (newMistakes >= 4) {
        setGameOver(true)
        setMessage('Game Over! Don\'t worry, you can try again.')
      }
    }
  }

  const renderTries = () => {
    const tries = []
    for (let i = 0; i < 4; i++) {
      if (i < mistakes) {
        tries.push(
          <span key={i} className="inline-block w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
            ✗
          </span>
        )
      } else {
        tries.push(
          <span key={i} className="inline-block w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">
            ✓
          </span>
        )
      }
    }
    return tries
  }

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
          <p className="text-lg text-accent-600">
            A fun learning game for NICU families
          </p>
        </div>

        <div className="card p-8 mb-8">
          <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-primary-700 mb-3">How to Play:</h2>
            <p className="text-accent-700 leading-relaxed">
              Find groups of 4 related NICU terms from the 16 words below. Select 4 words and tap "Check Answer" to see if they match a category. You get 4 tries!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {solvedCategories.map((category, idx) => (
              <div
                key={idx}
                className={`${category.color} text-white rounded-xl p-6 mb-4 shadow-lg`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <span>✓</span>
                    {category.name}
                  </h3>
                  <span className="text-sm opacity-90">{category.difficulty}</span>
                </div>
                <p className="text-sm opacity-95 mb-2">
                  {category.words.join(' • ')}
                </p>
                <div className="border-t border-white/30 pt-3 mt-3">
                  <p className="text-sm opacity-95 italic flex items-start gap-2">
                    <span className="text-lg">💡</span>
                    <span>{category.explanation}</span>
                  </p>
                </div>
              </div>
            ))}

            {!gameOver && (
              <div className="grid grid-cols-4 gap-3 mb-6">
                {words.map((word, idx) => {
                  const isSolved = solvedCategories.some(cat => cat.words.includes(word))
                  const isSelected = selected.includes(word)
                  
                  if (isSolved) return null

                  return (
                    <button
                      key={idx}
                      onClick={() => handleWordClick(word)}
                      disabled={isSolved}
                      className={`
                        h-20 rounded-xl font-semibold text-sm transition-all duration-200
                        border-2 shadow-md
                        ${isSelected 
                          ? 'bg-primary-600 text-white border-primary-700 scale-95' 
                          : 'bg-white text-accent-800 border-accent-300 hover:border-primary-400 hover:shadow-lg'
                        }
                        ${shake && isSelected ? 'animate-shake' : ''}
                        disabled:opacity-50 disabled:cursor-not-allowed
                      `}
                    >
                      {word}
                    </button>
                  )
                })}
              </div>
            )}

            {!gameOver && (
              <div className="border-2 border-accent-200 rounded-xl p-6 bg-white shadow-sm">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-accent-700 font-semibold">Tries Left:</span>
                  <div className="flex gap-2">
                    {renderTries()}
                  </div>
                </div>

                {message && (
                  <div className={`text-center mb-4 p-3 rounded-lg ${
                    message.includes('Great') ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                  }`}>
                    {message}
                  </div>
                )}

                <div className="flex gap-3 justify-center">
                  <button
                    onClick={handleShuffle}
                    className="px-6 py-3 bg-white border-2 border-accent-300 text-accent-700 rounded-xl font-semibold hover:border-primary-400 hover:bg-primary-50 transition-all shadow-sm hover:shadow-md"
                  >
                    🔀 Mix Words
                  </button>
                  <button
                    onClick={handleDeselectAll}
                    disabled={selected.length === 0}
                    className="px-6 py-3 bg-white border-2 border-accent-300 text-accent-700 rounded-xl font-semibold hover:border-primary-400 hover:bg-primary-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                  >
                    ↺ Clear Selection
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={selected.length !== 4}
                    className="px-6 py-3 bg-primary-600 border-2 border-primary-700 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                  >
                    Check Answer →
                  </button>
                </div>
              </div>
            )}

            {gameOver && (
              <div className="text-center">
                <div className={`text-xl font-bold mb-6 p-6 rounded-xl ${
                  won ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                }`}>
                  {message}
                </div>

                {!won && (
                  <div className="mb-6 space-y-3">
                    <p className="text-accent-700 font-semibold mb-4">Here are the categories:</p>
                    {categories.filter(cat => !solvedCategories.includes(cat)).map((category, idx) => (
                      <div
                        key={idx}
                        className={`${category.color} text-white rounded-xl p-6 shadow-lg`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold flex items-center gap-2">
                            <span>💡</span>
                            {category.name}
                          </h3>
                          <span className="text-sm opacity-90">{category.difficulty}</span>
                        </div>
                        <p className="text-sm opacity-95 mb-2">
                          {category.words.join(' • ')}
                        </p>
                        <div className="border-t border-white/30 pt-3 mt-3">
                          <p className="text-sm opacity-95 italic">
                            {category.explanation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={initializeGame}
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  🔄 Play Again
                </button>
              </div>
            )}
            </div>

            <div className="mt-8">
              <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ConnectionsGame2
