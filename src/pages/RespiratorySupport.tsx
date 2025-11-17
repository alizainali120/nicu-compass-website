import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RespiratorySupport: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<string>('nasal-cannula')

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

              {/* Nasal Cannula Diagram */}
              {activeDevice === 'nasal-cannula' && (
                <div className="bg-white rounded-xl p-6 border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-primary-700 mb-4">Nasal Cannula (Low Flow)</h3>
                  <div className="mb-6">
                    <svg viewBox="0 0 600 300" className="w-full max-w-2xl mx-auto">
                      {/* Oxygen Source */}
                      <rect x="20" y="100" width="80" height="100" fill="#4299e1" rx="8" />
                      <text x="60" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">O₂</text>
                      <text x="60" y="165" textAnchor="middle" fill="white" fontSize="10">Source</text>
                      
                      {/* Tubing */}
                      <line x1="100" y1="150" x2="250" y2="150" stroke="#10b981" strokeWidth="4" />
                      <text x="175" y="140" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="bold">Oxygen Tubing</text>
                      
                      {/* Nasal Prongs */}
                      <ellipse cx="300" cy="150" rx="30" ry="40" fill="#fbbf24" />
                      <circle cx="290" cy="145" r="8" fill="#f59e0b" />
                      <circle cx="310" cy="145" r="8" fill="#f59e0b" />
                      <text x="300" y="195" textAnchor="middle" fill="#b45309" fontSize="11" fontWeight="bold">Soft Prongs</text>
                      
                      {/* Arrow */}
                      <path d="M 340 150 L 400 150 L 395 145 M 400 150 L 395 155" stroke="#6366f1" strokeWidth="3" fill="none" />
                      
                      {/* Baby */}
                      <circle cx="470" cy="150" r="50" fill="#fecdd3" />
                      <circle cx="455" cy="140" r="8" fill="#1f2937" />
                      <circle cx="485" cy="140" r="8" fill="#1f2937" />
                      <path d="M 450 165 Q 470 175 490 165" stroke="#1f2937" strokeWidth="2" fill="none" />
                      <text x="470" y="225" textAnchor="middle" fill="#be123c" fontSize="11" fontWeight="bold">Baby</text>
                    </svg>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-blue-900 mb-2"><strong>What it is:</strong> A small tube with soft prongs that sit just inside your baby's nostrils. It gives extra oxygen to help your baby breathe comfortably.</p>
                    <p className="text-blue-900"><strong>Flow:</strong> Usually 0.5–2 liters per minute for newborns</p>
                  </div>
                </div>
              )}

              {/* HFNC Diagram */}
              {activeDevice === 'hfnc' && (
                <div className="bg-white rounded-xl p-6 border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-primary-700 mb-4">High-Flow Nasal Cannula (HFNC)</h3>
                  <div className="mb-6">
                    <svg viewBox="0 0 650 320" className="w-full max-w-2xl mx-auto">
                      {/* HFNC Machine */}
                      <rect x="20" y="80" width="100" height="120" fill="#6366f1" rx="8" />
                      <text x="70" y="130" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">HFNC</text>
                      <text x="70" y="145" textAnchor="middle" fill="white" fontSize="10">Machine</text>
                      <circle cx="50" cy="165" r="8" fill="#22c55e" />
                      <circle cx="90" cy="165" r="8" fill="#ef4444" />
                      
                      {/* Warmed/Humidified indicator */}
                      <rect x="140" y="100" width="90" height="60" fill="#fef3c7" rx="6" stroke="#f59e0b" strokeWidth="2" />
                      <text x="185" y="125" textAnchor="middle" fill="#b45309" fontSize="10" fontWeight="bold">Warmed &amp;</text>
                      <text x="185" y="140" textAnchor="middle" fill="#b45309" fontSize="10" fontWeight="bold">Humidified</text>
                      <circle cx="160" cy="120" r="3" fill="#f59e0b" opacity="0.6" />
                      <circle cx="175" cy="115" r="3" fill="#f59e0b" opacity="0.6" />
                      <circle cx="195" cy="118" r="3" fill="#f59e0b" opacity="0.6" />
                      
                      {/* Tube with waves showing warmth */}
                      <path d="M 120 140 Q 150 130, 180 140 T 240 140 T 300 140" stroke="#10b981" strokeWidth="5" fill="none" />
                      <text x="210" y="125" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="bold">Heated Tube</text>
                      
                      {/* Prongs */}
                      <ellipse cx="340" cy="140" rx="30" ry="40" fill="#fbbf24" />
                      <circle cx="330" cy="135" r="8" fill="#f59e0b" />
                      <circle cx="350" cy="135" r="8" fill="#f59e0b" />
                      <text x="340" y="195" textAnchor="middle" fill="#b45309" fontSize="10" fontWeight="bold">Prongs</text>
                      
                      {/* Pressure waves */}
                      <path d="M 380 130 Q 395 125, 410 130" stroke="#ec4899" strokeWidth="2" fill="none" />
                      <path d="M 380 140 Q 395 135, 410 140" stroke="#ec4899" strokeWidth="2" fill="none" />
                      <path d="M 380 150 Q 395 145, 410 150" stroke="#ec4899" strokeWidth="2" fill="none" />
                      <text x="395" y="120" textAnchor="middle" fill="#be185d" fontSize="9" fontWeight="bold">Gentle</text>
                      <text x="395" y="108" textAnchor="middle" fill="#be185d" fontSize="9" fontWeight="bold">Pressure</text>
                      
                      {/* Baby */}
                      <circle cx="500" cy="140" r="55" fill="#fecdd3" />
                      <circle cx="483" cy="128" r="8" fill="#1f2937" />
                      <circle cx="517" cy="128" r="8" fill="#1f2937" />
                      <path d="M 480 155 Q 500 168 520 155" stroke="#1f2937" strokeWidth="2" fill="none" />
                      <text x="500" y="215" textAnchor="middle" fill="#be123c" fontSize="11" fontWeight="bold">Baby</text>
                      
                      {/* Alveoli note */}
                      <text x="500" y="240" textAnchor="middle" fill="#6366f1" fontSize="10" fontWeight="bold">Keeps alveoli open</text>
                    </svg>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <p className="text-purple-900 mb-2"><strong>What it is:</strong> Gives warmed, humidified air at a higher flow. This flow creates a gentle pressure that helps keep tiny air sacs (alveoli) from collapsing.</p>
                    <p className="text-purple-900 mb-2"><strong>Flow:</strong> Higher than regular nasal cannula (2–8+ liters per minute)</p>
                    <p className="text-purple-900"><strong>FiO₂:</strong> Fraction of Inspired Oxygen. Room air is 21%. Babies may need more temporarily.</p>
                  </div>
                </div>
              )}

              {/* CPAP Diagram */}
              {activeDevice === 'cpap' && (
                <div className="bg-white rounded-xl p-6 border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-primary-700 mb-4">CPAP (Continuous Positive Airway Pressure)</h3>
                  <div className="mb-6">
                    <svg viewBox="0 0 600 320" className="w-full max-w-2xl mx-auto">
                      {/* CPAP Machine */}
                      <rect x="20" y="90" width="110" height="130" fill="#8b5cf6" rx="8" />
                      <text x="75" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CPAP</text>
                      <text x="75" y="160" textAnchor="middle" fill="white" fontSize="11">Machine</text>
                      <rect x="45" y="175" width="60" height="25" fill="#a78bfa" rx="4" />
                      <text x="75" y="192" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Pressure</text>
                      
                      {/* Pressure indicator */}
                      <circle cx="75" cy="115" r="15" fill="#fbbf24" />
                      <text x="75" y="120" textAnchor="middle" fill="#78350f" fontSize="11" fontWeight="bold">+5</text>
                      
                      {/* Tube */}
                      <path d="M 130 155 L 250 155" stroke="#10b981" strokeWidth="6" fill="none" />
                      <text x="190" y="145" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="bold">Pressure Tube</text>
                      
                      {/* Mask/Prongs */}
                      <ellipse cx="310" cy="155" rx="40" ry="50" fill="#fde047" stroke="#ca8a04" strokeWidth="3" />
                      <text x="310" y="220" textAnchor="middle" fill="#854d0e" fontSize="11" fontWeight="bold">Mask or Prongs</text>
                      
                      {/* Pressure arrows */}
                      <path d="M 360 145 L 400 145 L 395 140 M 400 145 L 395 150" stroke="#ec4899" strokeWidth="3" fill="none" />
                      <path d="M 360 155 L 400 155 L 395 150 M 400 155 L 395 160" stroke="#ec4899" strokeWidth="3" fill="none" />
                      <path d="M 360 165 L 400 165 L 395 160 M 400 165 L 395 170" stroke="#ec4899" strokeWidth="3" fill="none" />
                      <text x="380" y="130" textAnchor="middle" fill="#be185d" fontSize="9" fontWeight="bold">Steady</text>
                      <text x="380" y="120" textAnchor="middle" fill="#be185d" fontSize="9" fontWeight="bold">Pressure</text>
                      
                      {/* Baby with lungs */}
                      <circle cx="490" cy="155" r="55" fill="#fecdd3" />
                      <circle cx="473" cy="143" r="8" fill="#1f2937" />
                      <circle cx="507" cy="143" r="8" fill="#1f2937" />
                      <path d="M 477 170 Q 490 180 503 170" stroke="#1f2937" strokeWidth="2" fill="none" />
                      
                      {/* Lungs inside baby */}
                      <ellipse cx="483" cy="170" rx="10" ry="15" fill="#93c5fd" opacity="0.7" />
                      <ellipse cx="497" cy="170" rx="10" ry="15" fill="#93c5fd" opacity="0.7" />
                      
                      <text x="490" y="230" textAnchor="middle" fill="#be123c" fontSize="11" fontWeight="bold">Baby</text>
                      <text x="490" y="250" textAnchor="middle" fill="#1d4ed8" fontSize="9" fontWeight="bold">Alveoli stay open</text>
                    </svg>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                    <p className="text-indigo-900 mb-2"><strong>What it is:</strong> Provides a steady pressure to keep your baby's lungs open during breathing. Often used in premature babies whose lungs are not fully developed.</p>
                    <p className="text-indigo-900 mb-2"><strong>Typical starting pressure:</strong> +4 or +5</p>
                    <p className="text-indigo-900"><strong>FiO₂:</strong> Same as other devices (21–100%)</p>
                  </div>
                </div>
              )}

              {/* NIPPV Diagram */}
              {activeDevice === 'nippv' && (
                <div className="bg-white rounded-xl p-6 border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-primary-700 mb-4">NIPPV (Non-Invasive Positive Pressure Ventilation)</h3>
                  <div className="mb-6">
                    <svg viewBox="0 0 650 340" className="w-full max-w-2xl mx-auto">
                      {/* NIPPV Machine */}
                      <rect x="20" y="80" width="120" height="150" fill="#ec4899" rx="8" />
                      <text x="80" y="140" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">NIPPV</text>
                      <text x="80" y="155" textAnchor="middle" fill="white" fontSize="10">Machine</text>
                      
                      {/* Continuous pressure indicator */}
                      <rect x="40" y="170" width="80" height="20" fill="#f472b6" rx="4" />
                      <text x="80" y="184" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Continuous +5</text>
                      
                      {/* Backup breaths indicator */}
                      <rect x="40" y="195" width="80" height="20" fill="#fbbf24" rx="4" />
                      <text x="80" y="209" textAnchor="middle" fill="#78350f" fontSize="9" fontWeight="bold">+ Backup Rate</text>
                      
                      {/* Tube */}
                      <path d="M 140 155 L 270 155" stroke="#10b981" strokeWidth="6" fill="none" />
                      
                      {/* Mask */}
                      <ellipse cx="330" cy="155" rx="40" ry="50" fill="#fde047" stroke="#ca8a04" strokeWidth="3" />
                      <text x="330" y="220" textAnchor="middle" fill="#854d0e" fontSize="11" fontWeight="bold">Mask/Prongs</text>
                      
                      {/* Pressure waves (continuous) */}
                      <path d="M 380 145 L 420 145" stroke="#ec4899" strokeWidth="2" fill="none" />
                      <path d="M 380 155 L 420 155" stroke="#ec4899" strokeWidth="2" fill="none" />
                      <path d="M 380 165 L 420 165" stroke="#ec4899" strokeWidth="2" fill="none" />
                      <text x="400" y="135" textAnchor="middle" fill="#be185d" fontSize="8" fontWeight="bold">Continuous</text>
                      
                      {/* Backup breaths (pulses) */}
                      <circle cx="425" cy="145" r="6" fill="#fbbf24" />
                      <circle cx="445" cy="145" r="6" fill="#fbbf24" />
                      <circle cx="465" cy="145" r="6" fill="#fbbf24" />
                      <text x="445" y="125" textAnchor="middle" fill="#b45309" fontSize="8" fontWeight="bold">+ Backup Breaths</text>
                      
                      {/* Baby */}
                      <circle cx="540" cy="155" r="55" fill="#fecdd3" />
                      <circle cx="523" cy="143" r="8" fill="#1f2937" />
                      <circle cx="557" cy="143" r="8" fill="#1f2937" />
                      <path d="M 527 170 Q 540 180 553 170" stroke="#1f2937" strokeWidth="2" fill="none" />
                      
                      {/* Lungs */}
                      <ellipse cx="533" cy="170" rx="10" ry="15" fill="#93c5fd" opacity="0.7" />
                      <ellipse cx="547" cy="170" rx="10" ry="15" fill="#93c5fd" opacity="0.7" />
                      
                      <text x="540" y="230" textAnchor="middle" fill="#be123c" fontSize="11" fontWeight="bold">Baby</text>
                      <text x="540" y="250" textAnchor="middle" fill="#1d4ed8" fontSize="9" fontWeight="bold">Breathing reminders</text>
                    </svg>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">
                    <p className="text-pink-900 mb-2"><strong>What it is:</strong> Like CPAP but includes a backup breathing rate. This helps babies who sometimes forget to breathe on their own.</p>
                    <p className="text-pink-900 mb-2"><strong>Why it helps:</strong> Preemies may have immature breathing centers. NIPPV provides gentle 'reminder breaths.'</p>
                    <p className="text-pink-900"><strong>How it works:</strong> Continuous pressure (like CPAP) + backup breaths at set intervals</p>
                  </div>
                </div>
              )}

              {/* Ventilator Diagram */}
              {activeDevice === 'ventilator' && (
                <div className="bg-white rounded-xl p-6 border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-primary-700 mb-4">Mechanical Ventilator (Breathing Tube)</h3>
                  <div className="mb-6">
                    <svg viewBox="0 0 700 360" className="w-full max-w-2xl mx-auto">
                      {/* Ventilator Machine */}
                      <rect x="20" y="70" width="140" height="180" fill="#1e40af" rx="8" />
                      <text x="90" y="150" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Ventilator</text>
                      
                      {/* Display screen */}
                      <rect x="35" y="90" width="110" height="50" fill="#3b82f6" rx="4" />
                      <text x="90" y="110" textAnchor="middle" fill="white" fontSize="9">Rate: 40/min</text>
                      <text x="90" y="125" textAnchor="middle" fill="white" fontSize="9">FiO₂: 30%</text>
                      
                      {/* Controls */}
                      <circle cx="50" cy="175" r="10" fill="#22c55e" />
                      <circle cx="90" cy="175" r="10" fill="#fbbf24" />
                      <circle cx="130" cy="175" r="10" fill="#ef4444" />
                      
                      <text x="90" y="210" textAnchor="middle" fill="white" fontSize="9">Adjusted by</text>
                      <text x="90" y="223" textAnchor="middle" fill="white" fontSize="9">blood gases</text>
                      
                      {/* Breathing tube */}
                      <path d="M 160 160 L 280 160" stroke="#10b981" strokeWidth="8" fill="none" />
                      <text x="220" y="150" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="bold">ETT (Breathing Tube)</text>
                      
                      {/* Breath indicator */}
                      <rect x="300" y="140" width="60" height="40" fill="#fef3c7" rx="6" stroke="#f59e0b" strokeWidth="2" />
                      <text x="330" y="158" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold">Set</text>
                      <text x="330" y="170" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold">Breaths</text>
                      
                      {/* Breath pulses */}
                      <circle cx="380" cy="150" r="8" fill="#60a5fa" />
                      <circle cx="410" cy="150" r="8" fill="#60a5fa" />
                      <circle cx="440" cy="150" r="8" fill="#60a5fa" />
                      <circle cx="470" cy="150" r="8" fill="#60a5fa" />
                      <text x="425" y="135" textAnchor="middle" fill="#1d4ed8" fontSize="9" fontWeight="bold">Regular breaths</text>
                      
                      {/* Baby with tube */}
                      <ellipse cx="570" cy="160" rx="65" ry="60" fill="#fecdd3" />
                      
                      {/* Face */}
                      <circle cx="553" cy="148" r="8" fill="#1f2937" />
                      <circle cx="587" cy="148" r="8" fill="#1f2937" />
                      
                      {/* Tube going into mouth */}
                      <rect x="505" y="165" width="40" height="6" fill="#10b981" rx="2" />
                      
                      {/* Lungs */}
                      <ellipse cx="560" cy="185" rx="12" ry="18" fill="#60a5fa" opacity="0.8" />
                      <ellipse cx="580" cy="185" rx="12" ry="18" fill="#60a5fa" opacity="0.8" />
                      
                      <text x="570" y="245" textAnchor="middle" fill="#be123c" fontSize="11" fontWeight="bold">Baby</text>
                      <text x="570" y="265" textAnchor="middle" fill="#1d4ed8" fontSize="9" fontWeight="bold">Ventilator does breathing work</text>
                      
                      {/* CO2 removal note */}
                      <path d="M 610 175 Q 640 175, 650 185" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" fill="none" />
                      <text x="655" y="190" fill="#6b7280" fontSize="8">Removes CO₂</text>
                    </svg>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-blue-900 mb-2"><strong>What it is:</strong> Used for extremely premature babies or older infants who need help breathing. A breathing tube (ETT) is placed in the windpipe and connected to a ventilator.</p>
                    <p className="text-blue-900 mb-2"><strong>Rate:</strong> Number of breaths per minute. Higher = more help; lower = baby doing more breathing.</p>
                    <p className="text-blue-900 mb-2"><strong>What it does:</strong> Helps with oxygen delivery and removal of CO₂</p>
                    <p className="text-blue-900"><strong>Adjustments:</strong> The team uses blood gases to adjust settings safely</p>
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
