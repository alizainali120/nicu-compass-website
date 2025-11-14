import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

const ColorMyFeelings: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('#60A5FA')
  const [sectionColors, setSectionColors] = useState<{ [key: string]: string }>({})

  const colorPalette = [
    { name: 'Calm Blue', color: '#60A5FA', meaning: 'Calm, peace, hope' },
    { name: 'Gentle Purple', color: '#A78BFA', meaning: 'Strength, courage' },
    { name: 'Tender Pink', color: '#F472B6', meaning: 'Love, connection' },
    { name: 'Healing Green', color: '#34D399', meaning: 'Healing, growth' },
    { name: 'Bright Yellow', color: '#FCD34D', meaning: 'Joy, optimism' },
    { name: 'Warm Orange', color: '#FB923C', meaning: 'Energy, comfort' },
    { name: 'Vibrant Red', color: '#F87171', meaning: 'Passion, vitality' },
    { name: 'Peaceful Lavender', color: '#C4B5FD', meaning: 'Serenity, grace' },
    { name: 'Soft Peach', color: '#FDBA74', meaning: 'Warmth, gentleness' },
    { name: 'Cool Teal', color: '#2DD4BF', meaning: 'Balance, clarity' },
    { name: 'Anxious Indigo', color: '#6366F1', meaning: 'Anxious, tense, worried' },
    { name: 'Scared Navy', color: '#1E3A8A', meaning: 'Scared, fearful' },
    { name: 'Uncertain Fog', color: '#D1D5DB', meaning: 'Uncertainty, confusion' },
    { name: 'Overwhelmed Brown', color: '#92400E', meaning: 'Overwhelmed, heavy' },
    { name: 'Quiet Gray', color: '#9CA3AF', meaning: 'Rest, processing' },
    { name: 'Pure White', color: '#FFFFFF', meaning: 'New beginnings' },
  ]

  const handleSectionClick = (sectionId: string) => {
    setSectionColors(prev => ({
      ...prev,
      [sectionId]: selectedColor
    }))
  }

  const handleReset = () => {
    setSectionColors({})
  }

  const downloadCanvas = () => {
    const svg = document.getElementById('interactive-mandala')
    if (!svg) return

    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()

    canvas.width = 800
    canvas.height = 800

    img.onload = () => {
      ctx?.drawImage(img, 0, 0)
      const pngFile = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.download = 'My-Colored-Mandala.png'
      downloadLink.href = pngFile
      downloadLink.click()
    }

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <Header navigationItems={navigationItems} />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
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
            A calming interactive mandala to color while you process your emotions
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
              <span>Click a color from the palette below to select it</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Click on any section of the mandala to fill it with your chosen color</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Take your time - there's no right or wrong way to color</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Download your finished mandala when you're done</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-xl font-bold text-accent-900 mb-6 text-center">Your Interactive Mandala</h2>
              
              <div className="mb-6 bg-white rounded-2xl p-6 border-2 border-primary-200">
                <svg
                  id="interactive-mandala"
                  viewBox="0 0 400 400"
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="400" height="400" fill="#FAFAFA" />
                  
                  {/* Center flower - detailed */}
                  <circle
                    cx="200"
                    cy="200"
                    r="15"
                    fill={sectionColors['center'] || '#FFFFFF'}
                    stroke="#333"
                    strokeWidth="1.5"
                    onClick={() => handleSectionClick('center')}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  />
                  
                  {/* Center decorative petals - 6 small petals around center */}
                  {[...Array(6)].map((_, i) => {
                    const angle = (i * 60) * Math.PI / 180
                    const x = 200 + Math.cos(angle) * 25
                    const y = 200 + Math.sin(angle) * 25
                    return (
                      <ellipse
                        key={`center-petal-${i}`}
                        cx={x}
                        cy={y}
                        rx="8"
                        ry="18"
                        fill={sectionColors[`center-petal-${i}`] || '#FFFFFF'}
                        stroke="#333"
                        strokeWidth="1.5"
                        transform={`rotate(${i * 60} ${x} ${y})`}
                        onClick={() => handleSectionClick(`center-petal-${i}`)}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    )
                  })}

                  {/* Inner flower layer - 8 heart-shaped petals */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45) * Math.PI / 180
                    const x = 200 + Math.cos(angle) * 55
                    const y = 200 + Math.sin(angle) * 55
                    return (
                      <path
                        key={`inner-flower-${i}`}
                        d={`M ${x} ${y} Q ${x + Math.cos(angle) * 15} ${y + Math.sin(angle) * 15 - 20}, ${x + Math.cos(angle) * 25} ${y + Math.sin(angle) * 25} Q ${x + Math.cos(angle) * 15} ${y + Math.sin(angle) * 15 + 20}, ${x} ${y} Z`}
                        fill={sectionColors[`inner-flower-${i}`] || '#FFFFFF'}
                        stroke="#333"
                        strokeWidth="1.5"
                        onClick={() => handleSectionClick(`inner-flower-${i}`)}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    )
                  })}

                  {/* Leaf layer between flowers - 8 leaves */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45 + 22.5) * Math.PI / 180
                    const x = 200 + Math.cos(angle) * 75
                    const y = 200 + Math.sin(angle) * 75
                    return (
                      <ellipse
                        key={`leaf-${i}`}
                        cx={x}
                        cy={y}
                        rx="12"
                        ry="28"
                        fill={sectionColors[`leaf-${i}`] || '#FFFFFF'}
                        stroke="#333"
                        strokeWidth="1.5"
                        transform={`rotate(${i * 45 + 22.5} ${x} ${y})`}
                        onClick={() => handleSectionClick(`leaf-${i}`)}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    )
                  })}

                  {/* Middle ring circles - 8 decorative circles */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45) * Math.PI / 180
                    const x = 200 + Math.cos(angle) * 95
                    const y = 200 + Math.sin(angle) * 95
                    return (
                      <circle
                        key={`middle-circle-${i}`}
                        cx={x}
                        cy={y}
                        r="15"
                        fill={sectionColors[`middle-circle-${i}`] || '#FFFFFF'}
                        stroke="#333"
                        strokeWidth="1.5"
                        onClick={() => handleSectionClick(`middle-circle-${i}`)}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    )
                  })}

                  {/* Outer large petals - 8 elegant petals */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45) * Math.PI / 180
                    const x = 200 + Math.cos(angle) * 130
                    const y = 200 + Math.sin(angle) * 130
                    return (
                      <ellipse
                        key={`outer-petal-${i}`}
                        cx={x}
                        cy={y}
                        rx="20"
                        ry="45"
                        fill={sectionColors[`outer-petal-${i}`] || '#FFFFFF'}
                        stroke="#333"
                        strokeWidth="1.5"
                        transform={`rotate(${i * 45} ${x} ${y})`}
                        onClick={() => handleSectionClick(`outer-petal-${i}`)}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    )
                  })}

                  {/* Outer accent petals between main petals */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45 + 22.5) * Math.PI / 180
                    const x = 200 + Math.cos(angle) * 145
                    const y = 200 + Math.sin(angle) * 145
                    return (
                      <ellipse
                        key={`accent-petal-${i}`}
                        cx={x}
                        cy={y}
                        rx="15"
                        ry="32"
                        fill={sectionColors[`accent-petal-${i}`] || '#FFFFFF'}
                        stroke="#333"
                        strokeWidth="1.5"
                        transform={`rotate(${i * 45 + 22.5} ${x} ${y})`}
                        onClick={() => handleSectionClick(`accent-petal-${i}`)}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    )
                  })}

                  {/* Outermost decorative circles - 16 small circles */}
                  {[...Array(16)].map((_, i) => {
                    const angle = (i * 22.5) * Math.PI / 180
                    const x = 200 + Math.cos(angle) * 175
                    const y = 200 + Math.sin(angle) * 175
                    return (
                      <circle
                        key={`outer-dot-${i}`}
                        cx={x}
                        cy={y}
                        r="10"
                        fill={sectionColors[`outer-dot-${i}`] || '#FFFFFF'}
                        stroke="#333"
                        strokeWidth="1.5"
                        onClick={() => handleSectionClick(`outer-dot-${i}`)}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    )
                  })}
                </svg>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors shadow-md hover:shadow-lg"
                >
                  🔄 Reset Colors
                </button>
                <button
                  onClick={downloadCanvas}
                  className="bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                >
                  📥 Download Your Mandala
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="card p-6 bg-white border-2 border-primary-200 sticky top-4">
              <h3 className="text-lg font-bold text-accent-900 mb-4">🎨 Color Palette</h3>
              <p className="text-sm text-accent-600 mb-4">Click a color to select it, then click sections of the mandala to fill</p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {colorPalette.map((item) => (
                  <button
                    key={item.color}
                    onClick={() => setSelectedColor(item.color)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedColor === item.color
                        ? 'border-accent-900 shadow-lg scale-105'
                        : 'border-gray-300 hover:border-accent-500'
                    }`}
                  >
                    <div
                      className="w-full h-12 rounded-md mb-2"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="text-xs font-semibold text-accent-900">{item.name}</div>
                    <div className="text-xs text-accent-600">{item.meaning}</div>
                  </button>
                ))}
              </div>

              <div className="p-3 bg-primary-50 rounded-lg border border-primary-200">
                <p className="text-sm font-semibold text-primary-700 mb-1">Selected Color:</p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded border-2 border-accent-900"
                    style={{ backgroundColor: selectedColor }}
                  />
                  <span className="text-sm text-accent-700">
                    {colorPalette.find(c => c.color === selectedColor)?.name || 'Custom'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card p-6 bg-white border-2 border-primary-200">
            <h3 className="text-lg font-bold text-accent-900 mb-3">💙 All Your Feelings Are Valid</h3>
            <p className="text-sm text-accent-600 mb-3">Choose colors based on your feelings today - positive and difficult emotions alike:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-accent-700">
              <p><span className="font-semibold text-blue-600">Light Blue:</span> Calm, peace, hope</p>
              <p><span className="font-semibold text-purple-600">Purple:</span> Strength, courage</p>
              <p><span className="font-semibold text-pink-600">Pink:</span> Love, connection</p>
              <p><span className="font-semibold text-green-600">Green:</span> Healing, growth</p>
              <p><span className="font-semibold text-yellow-600">Yellow:</span> Joy, optimism</p>
              <p><span className="font-semibold text-orange-600">Orange:</span> Energy, comfort</p>
              <p><span className="font-semibold text-red-600">Red:</span> Passion, vitality</p>
              <p><span className="font-semibold text-teal-600">Teal:</span> Balance, clarity</p>
              <p><span className="font-semibold text-indigo-600">Indigo:</span> Anxious, worried</p>
              <p><span className="font-semibold" style={{color: '#1E3A8A'}}>Navy:</span> Scared, fearful</p>
              <p><span className="font-semibold text-gray-400">Light Gray:</span> Uncertain, confused</p>
              <p><span className="font-semibold" style={{color: '#92400E'}}>Brown:</span> Overwhelmed, heavy</p>
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
