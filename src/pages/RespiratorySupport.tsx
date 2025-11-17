import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RespiratorySupport: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<string>('nasal-cannula')
  
  // Stock images
  const nasalCannulaImg = '/stock_images/newborn_baby_with_na_244da65e.jpg'
  const cpapImg = '/stock_images/premature_baby_cpap__8a2b5219.jpg'
  const ventilatorImg = '/stock_images/infant_ventilator_br_faddfeda.jpg'
  const respiratoryEquipmentImg = '/stock_images/neonatal_respiratory_fce63762.jpg'

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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary-700">
              Understanding Respiratory Support in the NICU
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 text-accent-700 leading-relaxed italic">
              A Parent-Friendly Guide
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 sm:p-8 mb-8 border-l-4 border-primary-500">
              <p className="text-lg text-primary-800 leading-relaxed">
                Respiratory support can feel overwhelming in the NICU—especially when you hear numbers, settings, and terms that sound unfamiliar. This guide breaks everything down in simple, clear language so you can feel confident understanding your baby's breathing support.
              </p>
            </div>

            {/* Interactive Device Selector */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Interactive Device Guide</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                {[
                  { id: 'nasal-cannula', label: 'Nasal Cannula', icon: '👃' },
                  { id: 'hfnc', label: 'HFNC', icon: '🌬️' },
                  { id: 'cpap', label: 'CPAP', icon: '😷' },
                  { id: 'nippv', label: 'NIPPV', icon: '💨' },
                  { id: 'ventilator', label: 'Ventilator', icon: '🏥' }
                ].map(device => (
                  <button
                    key={device.id}
                    onClick={() => setActiveDevice(device.id)}
                    className={`p-4 rounded-lg font-semibold transition-all ${
                      activeDevice === device.id
                        ? 'bg-primary-600 text-white shadow-lg scale-105'
                        : 'bg-white text-primary-600 border-2 border-primary-200 hover:border-primary-400'
                    }`}
                  >
                    <div className="text-2xl mb-1">{device.icon}</div>
                    <div className="text-xs">{device.label}</div>
                  </button>
                ))}
              </div>

              {/* Nasal Cannula */}
              {activeDevice === 'nasal-cannula' && (
                <div className="bg-white rounded-xl p-6 border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-primary-700 mb-4">Nasal Cannula (Low Flow)</h3>
                  <div className="mb-6">
                    <img 
                      src={nasalCannulaImg} 
                      alt="Baby with nasal cannula oxygen support" 
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-blue-900 mb-2"><strong>What it is:</strong> A small tube with soft prongs that sit just inside your baby's nostrils. It gives extra oxygen to help your baby breathe comfortably.</p>
                    <p className="text-blue-900 mb-2"><strong>Flow:</strong> Usually 0.5–2 liters per minute for newborns</p>
                    <p className="text-blue-900"><strong>What you'll see:</strong> Small, soft prongs connected to green oxygen tubing</p>
                  </div>
                </div>
              )}

              {/* HFNC */}
              {activeDevice === 'hfnc' && (
                <div className="bg-white rounded-xl p-6 border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-primary-700 mb-4">High-Flow Nasal Cannula (HFNC)</h3>
                  <div className="mb-6">
                    <img 
                      src={respiratoryEquipmentImg} 
                      alt="High-flow nasal cannula respiratory equipment" 
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <p className="text-purple-900 mb-2"><strong>What it is:</strong> Gives warmed, humidified air at a higher flow. This flow creates a gentle pressure that helps keep tiny air sacs (alveoli) from collapsing.</p>
                    <p className="text-purple-900 mb-2"><strong>Flow:</strong> Higher than regular nasal cannula (2–8+ liters per minute)</p>
                    <p className="text-purple-900 mb-2"><strong>FiO₂:</strong> Fraction of Inspired Oxygen. Room air is 21%. Babies may need more temporarily.</p>
                    <p className="text-purple-900"><strong>What you'll see:</strong> Heated humidifier machine with specialized tubing delivering warmed air</p>
                  </div>
                </div>
              )}

              {/* CPAP */}
              {activeDevice === 'cpap' && (
                <div className="bg-white rounded-xl p-6 border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-primary-700 mb-4">CPAP (Continuous Positive Airway Pressure)</h3>
                  <div className="mb-6">
                    <img 
                      src={cpapImg} 
                      alt="Premature baby with CPAP mask breathing support" 
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                    <p className="text-indigo-900 mb-2"><strong>What it is:</strong> Provides a steady pressure to keep your baby's lungs open during breathing. Often used in premature babies whose lungs are not fully developed.</p>
                    <p className="text-indigo-900 mb-2"><strong>Typical starting pressure:</strong> +4 or +5</p>
                    <p className="text-indigo-900 mb-2"><strong>FiO₂:</strong> Same as other devices (21–100%)</p>
                    <p className="text-indigo-900"><strong>What you'll see:</strong> Soft prongs or a small mask secured gently to your baby's face</p>
                  </div>
                </div>
              )}

              {/* NIPPV */}
              {activeDevice === 'nippv' && (
                <div className="bg-white rounded-xl p-6 border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-primary-700 mb-4">NIPPV (Non-Invasive Positive Pressure Ventilation)</h3>
                  <div className="mb-6">
                    <img 
                      src={cpapImg} 
                      alt="Baby with NIPPV breathing support" 
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">
                    <p className="text-pink-900 mb-2"><strong>What it is:</strong> Like CPAP but includes a backup breathing rate. This helps babies who sometimes forget to breathe on their own.</p>
                    <p className="text-pink-900 mb-2"><strong>Why it helps:</strong> Preemies may have immature breathing centers. NIPPV provides gentle 'reminder breaths.'</p>
                    <p className="text-pink-900 mb-2"><strong>How it works:</strong> Continuous pressure (like CPAP) + backup breaths at set intervals</p>
                    <p className="text-pink-900"><strong>What you'll see:</strong> Looks similar to CPAP with a mask or prongs, but the machine also delivers scheduled breaths</p>
                  </div>
                </div>
              )}

              {/* Ventilator */}
              {activeDevice === 'ventilator' && (
                <div className="bg-white rounded-xl p-6 border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-primary-700 mb-4">Mechanical Ventilator (Breathing Tube)</h3>
                  <div className="mb-6">
                    <img 
                      src={ventilatorImg} 
                      alt="Infant ventilator breathing equipment" 
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-blue-900 mb-2"><strong>What it is:</strong> Used for extremely premature babies or older infants who need help breathing. A breathing tube (ETT) is placed in the windpipe and connected to a ventilator.</p>
                    <p className="text-blue-900 mb-2"><strong>Rate:</strong> Number of breaths per minute. Higher = more help; lower = baby doing more breathing.</p>
                    <p className="text-blue-900 mb-2"><strong>What it does:</strong> Helps with oxygen delivery and removal of CO₂</p>
                    <p className="text-blue-900 mb-2"><strong>Adjustments:</strong> The team uses blood gases to adjust settings safely</p>
                    <p className="text-blue-900"><strong>What you'll see:</strong> A sophisticated machine with monitors and controls, connected to a breathing tube (ETT)</p>
                  </div>
                </div>
              )}
            </div>

            {/* What Numbers Should Parents Pay Attention To */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-amber-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-amber-900">
                  What Numbers Should Parents Pay Attention To?
                </h2>
                <p className="text-lg text-amber-900 leading-relaxed mb-4">
                  Here are the basics — everything else can safely be left to the medical team:
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-amber-900 mb-2">• FiO₂ (Oxygen Percentage)</h3>
                    <p className="text-amber-800 text-sm">Goal is usually as close to room air (21%) as possible.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-amber-900 mb-2">• Rate</h3>
                    <p className="text-amber-800 text-sm">How many breaths the ventilator gives (if on a ventilator).</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-amber-900 mb-2">• Pressure or Volume</h3>
                    <p className="text-amber-800 text-sm">How big each breath is (don't worry about exact numbers).</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Parent Tips */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-green-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-900">
                  Parent Tips
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-green-900">
                      <strong>Ask your team:</strong> "How is my baby's breathing today?" — not "What are the settings?"
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-green-900">
                      <strong>Look at your baby more than the machine</strong> — color, comfort, calm breathing are key signs.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-green-900">
                      <strong>Remember:</strong> Numbers change as babies grow. That's normal.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-green-900">
                      <strong>It's okay to feel overwhelmed</strong>—NICU respiratory support is one of the most complex parts of care.
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            {/* Final Reassurance */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-primary-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-900">
                  Final Reassurance
                </h2>
                <p className="text-lg text-primary-900 leading-relaxed mb-4">
                  NICU breathing support may seem intimidating, but every device has one purpose: <strong>to help your baby breathe more comfortably and safely</strong>.
                </p>
                <p className="text-lg text-primary-900 leading-relaxed mb-4">
                  You don't need to memorize the settings. What matters most is partnering with the care team, asking questions, and watching your baby grow stronger day by day.
                </p>
                <p className="text-xl text-primary-800 font-bold italic">
                  You've got this. ❤️
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

export default RespiratorySupport
