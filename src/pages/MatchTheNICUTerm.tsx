import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

interface Term {
  id: string
  term: string
  meaning: string
}

const terms: Term[] = [
  { id: '1', term: 'A/B/D', meaning: 'Apnea, Bradycardia, Desaturation' },
  { id: '2', term: 'CPAP', meaning: 'Breathing support' },
  { id: '3', term: 'PICC', meaning: 'Long IV line' },
  { id: '4', term: 'TPN', meaning: 'IV nutrition' },
  { id: '5', term: 'HFNC', meaning: 'High-flow nasal cannula' },
  { id: '6', term: 'PDA', meaning: 'Heart vessel that stays open' },
  { id: '7', term: 'ROP', meaning: 'Eye condition in preemies' },
  { id: '8', term: 'IVH', meaning: 'Bleeding in the brain' }
]

const MatchTheNICUTerm: React.FC = () => {
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null)
  const [selectedMeaning, setSelectedMeaning] = useState<string | null>(null)
  const [matches, setMatches] = useState<{ [key: string]: string }>({})
  const [shuffledMeanings, setShuffledMeanings] = useState<Term[]>([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [attempts, setAttempts] = useState(0)

  useEffect(() => {
    const meanings = [...terms].sort(() => Math.random() - 0.5)
    setShuffledMeanings(meanings)
  }, [])

  const handleTermClick = (termId: string) => {
    if (matches[termId]) return
    
    if (selectedTerm === termId) {
      setSelectedTerm(null)
    } else {
      setSelectedTerm(termId)
      
      if (selectedMeaning) {
        checkMatch(termId, selectedMeaning)
      }
    }
  }

  const handleMeaningClick = (meaningId: string) => {
    if (Object.values(matches).includes(meaningId)) return
    
    if (selectedMeaning === meaningId) {
      setSelectedMeaning(null)
    } else {
      setSelectedMeaning(meaningId)
      
      if (selectedTerm) {
        checkMatch(selectedTerm, meaningId)
      }
    }
  }

  const checkMatch = (termId: string, meaningId: string) => {
    setAttempts(prev => prev + 1)
    
    if (termId === meaningId) {
      setMatches(prev => ({ ...prev, [termId]: meaningId }))
      setSelectedTerm(null)
      setSelectedMeaning(null)
      
      if (Object.keys(matches).length + 1 === terms.length) {
        setShowSuccess(true)
      }
    } else {
      setTimeout(() => {
        setSelectedTerm(null)
        setSelectedMeaning(null)
      }, 800)
    }
  }

  const resetGame = () => {
    setMatches({})
    setSelectedTerm(null)
    setSelectedMeaning(null)
    setShowSuccess(false)
    setAttempts(0)
    const meanings = [...terms].sort(() => Math.random() - 0.5)
    setShuffledMeanings(meanings)
  }

  const isTermMatched = (termId: string) => !!matches[termId]
  const isMeaningMatched = (meaningId: string) => Object.values(matches).includes(meaningId)

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <Header navigationItems={navigationItems} />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <nav className="text-sm mb-8 flex items-center space-x-2 text-accent-600">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/" className="hover:text-primary-600 transition-colors">Resources</Link>
          <span>›</span>
          <span className="text-accent-800">Match the NICU Term</span>
        </nav>

        <div className="mb-8 text-center">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            STORIES & ACTIVITIES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-900 mb-4">
            Match the NICU Term
          </h1>
          <p className="text-lg text-accent-600 mb-4">
            Click a term on the left, then click its matching meaning on the right
          </p>
          <p className="text-sm text-accent-500">
            Attempts: {attempts}
          </p>
        </div>

        {showSuccess && (
          <div className="card p-6 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300">
            <div className="text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-green-800 mb-2">Perfect Match!</h2>
              <p className="text-green-700 mb-4">
                You matched all {terms.length} NICU terms correctly in {attempts} attempts!
              </p>
              <button
                onClick={resetGame}
                className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-accent-900 mb-4 text-center">NICU Terms</h2>
            <div className="space-y-3">
              {terms.map(term => (
                <button
                  key={term.id}
                  onClick={() => handleTermClick(term.id)}
                  disabled={isTermMatched(term.id)}
                  className={`w-full p-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    isTermMatched(term.id)
                      ? 'bg-green-100 text-green-800 border-2 border-green-400 cursor-default'
                      : selectedTerm === term.id
                      ? 'bg-primary-600 text-white border-2 border-primary-700 shadow-lg scale-105'
                      : 'bg-primary-100 text-primary-700 border-2 border-primary-300 hover:bg-primary-200 hover:scale-102'
                  }`}
                >
                  {term.term}
                  {isTermMatched(term.id) && <span className="ml-2">✓</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-bold text-accent-900 mb-4 text-center">Meanings</h2>
            <div className="space-y-3">
              {shuffledMeanings.map(term => (
                <button
                  key={term.id}
                  onClick={() => handleMeaningClick(term.id)}
                  disabled={isMeaningMatched(term.id)}
                  className={`w-full p-4 rounded-xl font-medium transition-all duration-300 ${
                    isMeaningMatched(term.id)
                      ? 'bg-green-100 text-green-800 border-2 border-green-400 cursor-default'
                      : selectedMeaning === term.id
                      ? 'bg-accent-600 text-white border-2 border-accent-700 shadow-lg scale-105'
                      : 'bg-accent-100 text-accent-700 border-2 border-accent-300 hover:bg-accent-200 hover:scale-102'
                  }`}
                >
                  {term.meaning}
                  {isMeaningMatched(term.id) && <span className="ml-2">✓</span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="card p-6 bg-primary-50 border-2 border-primary-200 mb-8">
          <h3 className="text-lg font-bold text-primary-700 mb-3">💙 How to Play</h3>
          <ul className="space-y-2 text-accent-700">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Click a NICU term on the left to select it</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Then click its matching meaning on the right</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>If correct, both will turn green with a checkmark</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>If incorrect, they'll deselect and you can try again</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Match all 8 terms to complete the quiz!</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
            ← Back to Home
          </Link>
          <button
            onClick={resetGame}
            className="inline-flex items-center gap-2 bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-700 transition-colors"
          >
            🔄 Reset Quiz
          </button>
        </div>
      </div>
    </div>
  )
}

export default MatchTheNICUTerm
