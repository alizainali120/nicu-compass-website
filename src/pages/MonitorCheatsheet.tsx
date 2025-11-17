import React from 'react'
import { Link } from 'react-router-dom'

const MonitorCheatsheet: React.FC = () => {
  return (
    <div className="nicu-guide-page-bg section-padding">
      <div className="container-padding">
        <div className="max-w-5xl mx-auto mb-8">
          <nav className="flex items-center space-x-2 text-sm text-accent-600 mb-6">
            <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span className="text-accent-400">›</span>
            <Link to="/#resources" className="hover:text-primary-600 transition-colors">Resources</Link>
            <span className="text-accent-400">›</span>
            <span className="text-accent-700 font-medium">NICU Essentials</span>
          </nav>

          <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            NICU Essentials
          </div>
        </div>

        <div className="nicu-guide-content max-w-5xl mx-auto">
          <article className="card p-8 sm:p-10">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-4xl">🌬️</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-700">
                How to Read the Monitor Without Stressing
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl mb-8 text-accent-700 leading-relaxed italic">
              Parent Cheatsheet
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 sm:p-8 mb-8 border-l-4 border-primary-500">
              <p className="text-lg text-primary-800 leading-relaxed">
                A super-simple way to help parents understand what actually matters.
              </p>
            </div>

            {/* The Only Numbers Parents Need to Notice */}
            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary-700">
                The Only Numbers Parents Need to Notice
              </h2>

              {/* Heart Rate */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 sm:p-8 mb-6 border-l-4 border-red-400">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">❤️</span>
                  <h3 className="text-2xl font-bold text-red-900">Heart Rate (HR)</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-red-900"><strong>• Normal range for most preemies:</strong> 120–180</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-red-900"><strong>• HR goes up</strong> when baby is active/crying, <strong>down</strong> when resting.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-red-900"><strong>• Brief drops during apnea</strong> are common and usually self-resolve.</p>
                  </div>
                </div>
              </div>

              {/* Oxygen Saturation */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 mb-6 border-l-4 border-blue-400">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🌈</span>
                  <h3 className="text-2xl font-bold text-blue-900">Oxygen Saturation (SpO₂)</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-blue-900"><strong>• Nurses set a safe range</strong> (often 88–95%).</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-blue-900"><strong>• It's normal</strong> for babies to dip below range briefly.</p>
                  </div>
                </div>
              </div>

              {/* Respiratory Rate */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 mb-6 border-l-4 border-green-400">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🌬️</span>
                  <h3 className="text-2xl font-bold text-green-900">Respiratory Rate (RR)</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-green-900"><strong>• Preemies breathe fast</strong> — 40–70 breaths per minute is typical.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-green-900"><strong>• RR changes</strong> with sleep, feeds, and stress.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Reassurance */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border-l-4 border-amber-400">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">✨</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-amber-900">Reassurance</h2>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-xl text-amber-900 leading-relaxed italic">
                    "The monitor does not measure how well you're bonding with your baby or how well they're doing overall. It's just a tool."
                  </p>
                </div>
              </div>
            </section>

            {/* Parent Tips */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border-l-4 border-purple-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-900">
                  What to Do When the Monitor Alarms
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold text-xl mr-3">1.</span>
                    <p className="text-purple-900">
                      <strong>Look at your baby first</strong> — are they pink, breathing, and comfortable?
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold text-xl mr-3">2.</span>
                    <p className="text-purple-900">
                      <strong>The nurses hear it too</strong> — they're trained to respond quickly and will come check.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold text-xl mr-3">3.</span>
                    <p className="text-purple-900">
                      <strong>Most alarms are false</strong> — loose wires, baby movement, or temporary dips that self-correct.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold text-xl mr-3">4.</span>
                    <p className="text-purple-900">
                      <strong>Ask questions</strong> — "What does this number mean for my baby today?"
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            {/* Bottom Navigation */}
            <div className="mt-8 pt-6 border-t-2 border-accent-200">
              <Link 
                to="/#resources" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                ← Back to Resources
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default MonitorCheatsheet
