import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

interface TermData {
  word: string
  definition: string
  hint: string
}

const nicuTerms: TermData[] = [
  { word: 'APNEA', definition: 'A pause in breathing lasting more than 20 seconds', hint: 'Breathing pause' },
  { word: 'CPAP', definition: 'Continuous Positive Airway Pressure - helps keep airways open', hint: 'Breathing support (4 letters)' },
  { word: 'BRADY', definition: 'Short for bradycardia - slow heart rate', hint: 'Slow heartbeat' },
  { word: 'JAUNDICE', definition: 'Yellowing of skin due to bilirubin buildup', hint: 'Yellow skin color (8 letters)' },
  { word: 'ISOLETTE', definition: 'Enclosed bed that maintains temperature and humidity', hint: 'Baby\'s enclosed bed (8 letters)' },
  { word: 'KANGAROO', definition: 'Skin-to-skin care method', hint: 'Skin-to-skin care (8 letters)' },
  { word: 'GAVAGE', definition: 'Tube feeding method', hint: 'Tube feeding (6 letters)' },
  { word: 'INTUBATE', definition: 'Placing a breathing tube', hint: 'Inserting breathing tube (8 letters)' },
  { word: 'DESAT', definition: 'Drop in oxygen saturation', hint: 'Oxygen level drop (5 letters)' },
  { word: 'ROUNDS', definition: 'Daily team meetings about patient care', hint: 'Daily care discussions (6 letters)' }
]

const NICUTermChallenge: React.FC = () => {
  const [currentTerm, setCurrentTerm] = useState<TermData>(nicuTerms[0])
  const [guesses, setGuesses] = useState<string[]>([])
  const [currentGuess, setCurrentGuess] = useState('')
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)
  const [message, setMessage] = useState('')
  const [shakeRow, setShakeRow] = useState(-1)

  useEffect(() => {
    const randomTerm = nicuTerms[Math.floor(Math.random() * nicuTerms.length)]
    setCurrentTerm(randomTerm)
  }, [])

  const maxGuesses = 6

  const handleKeyPress = (key: string) => {
    if (gameOver) return

    if (key === 'ENTER') {
      if (currentGuess.length !== currentTerm.word.length) {
        setMessage(`Word must be ${currentTerm.word.length} letters`)
        setShakeRow(guesses.length)
        setTimeout(() => {
          setShakeRow(-1)
          setMessage('')
        }, 500)
        return
      }

      const newGuesses = [...guesses, currentGuess]
      setGuesses(newGuesses)
      setCurrentGuess('')

      if (currentGuess === currentTerm.word) {
        setWon(true)
        setGameOver(true)
        setMessage('Excellent! You got it! 🎉')
      } else if (newGuesses.length >= maxGuesses) {
        setGameOver(true)
        setMessage(`The term was ${currentTerm.word}`)
      } else {
        setMessage('')
      }
    } else if (key === 'BACK') {
      setCurrentGuess(currentGuess.slice(0, -1))
    } else if (currentGuess.length < currentTerm.word.length && /^[A-Z]$/.test(key)) {
      setCurrentGuess(currentGuess + key)
    }
  }

  const getLetterColor = (letter: string, position: number) => {
    if (currentTerm.word[position] === letter) {
      return 'bg-teal-500 text-white border-teal-600'
    } else if (currentTerm.word.includes(letter)) {
      return 'bg-amber-500 text-white border-amber-600'
    } else {
      return 'bg-accent-400 text-white border-accent-500'
    }
  }

  const getKeyboardKeyColor = (key: string) => {
    let bestColor = 'bg-accent-200 text-accent-800 border-accent-300'
    
    for (const guess of guesses) {
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] === key) {
          if (currentTerm.word[i] === key) {
            return 'bg-teal-500 text-white border-teal-600'
          } else if (currentTerm.word.includes(key)) {
            bestColor = 'bg-amber-500 text-white border-amber-600'
          } else {
            if (bestColor === 'bg-accent-200 text-accent-800 border-accent-300') {
              bestColor = 'bg-accent-400 text-white border-accent-500'
            }
          }
        }
      }
    }
    
    return bestColor
  }

  const handleNewGame = () => {
    const randomTerm = nicuTerms[Math.floor(Math.random() * nicuTerms.length)]
    setCurrentTerm(randomTerm)
    setGuesses([])
    setCurrentGuess('')
    setGameOver(false)
    setWon(false)
    setMessage('')
  }

  const keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <Header navigationItems={navigationItems} />
      
      <div className="max-w-2xl mx-auto px-4 py-12">
        <nav className="text-sm mb-8 flex items-center space-x-2 text-accent-600">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/" className="hover:text-primary-600 transition-colors">Resources</Link>
          <span>›</span>
          <span className="text-accent-800">Stories & Activities</span>
        </nav>

        <div className="mb-8 text-center">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            STORIES & ACTIVITIES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-900 mb-4">
            NICU Term Challenge
          </h1>
          <p className="text-lg text-accent-600">
            Guess the NICU term in 6 tries
          </p>
        </div>

        <div className="card p-8 mb-8">
          <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-primary-700 mb-3">How to Play:</h2>
            <p className="text-accent-700 leading-relaxed mb-3">
              Guess the NICU term in {maxGuesses} tries. After each guess, the colors show how close you are:
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-500 text-white rounded-lg flex items-center justify-center font-bold border-2 border-teal-600">A</div>
                <span className="text-accent-700">Letter is correct and in the right spot</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 text-white rounded-lg flex items-center justify-center font-bold border-2 border-amber-600">P</div>
                <span className="text-accent-700">Letter is in the word but wrong spot</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-400 text-white rounded-lg flex items-center justify-center font-bold border-2 border-accent-500">X</div>
                <span className="text-accent-700">Letter is not in the word</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-center text-accent-600 mb-2">
              <span className="font-semibold">Hint:</span> {currentTerm.hint}
            </p>
          </div>

          {message && (
            <div className={`text-center mb-4 p-3 rounded-lg ${
              won ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
            }`}>
              {message}
            </div>
          )}

          <div className="flex flex-col items-center gap-2 mb-6">
            {Array.from({ length: maxGuesses }).map((_, rowIndex) => (
              <div key={rowIndex} className={`flex gap-2 ${shakeRow === rowIndex ? 'animate-shake' : ''}`}>
                {Array.from({ length: currentTerm.word.length }).map((_, colIndex) => {
                  let letter = ''
                  let colorClass = 'bg-white border-accent-300'

                  if (rowIndex < guesses.length) {
                    letter = guesses[rowIndex][colIndex] || ''
                    colorClass = getLetterColor(letter, colIndex)
                  } else if (rowIndex === guesses.length) {
                    letter = currentGuess[colIndex] || ''
                    colorClass = letter ? 'bg-white border-primary-500' : 'bg-white border-accent-300'
                  }

                  return (
                    <div
                      key={colIndex}
                      className={`w-14 h-14 ${colorClass} border-2 rounded-lg flex items-center justify-center text-2xl font-bold transition-all`}
                    >
                      {letter}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>

          {!gameOver && (
            <div className="space-y-2">
              {keyboard.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-1">
                  {row.map((key) => (
                    <button
                      key={key}
                      onClick={() => handleKeyPress(key)}
                      className={`
                        ${key === 'ENTER' || key === 'BACK' ? 'px-4' : 'w-10'} 
                        h-12 rounded-lg font-bold text-sm border-2 transition-all
                        hover:scale-105 shadow-sm
                        ${getKeyboardKeyColor(key)}
                      `}
                    >
                      {key === 'BACK' ? '←' : key}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}

          {gameOver && (
            <div className="text-center space-y-6">
              <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-primary-700 mb-3 flex items-center justify-center gap-2">
                  <span>💡</span>
                  <span>{currentTerm.word}</span>
                </h3>
                <p className="text-accent-700 leading-relaxed">
                  {currentTerm.definition}
                </p>
              </div>

              <button
                onClick={handleNewGame}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                🔄 Play Again
              </button>
            </div>
          )}
        </div>

        <div className="mt-8">
          <Link to="/word-match-games" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
            ← Back to Word Matching Activities
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NICUTermChallenge
