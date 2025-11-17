import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface ChecklistState {
  [key: string]: boolean
}

const NICUDischargeChecklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<ChecklistState>(() => {
    const saved = localStorage.getItem('nicuDischargeChecklist')
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    localStorage.setItem('nicuDischargeChecklist', JSON.stringify(checkedItems))
  }, [checkedItems])

  const handleToggle = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset the entire checklist? This will uncheck all items.')) {
      setCheckedItems({})
      localStorage.removeItem('nicuDischargeChecklist')
    }
  }

  const checklistSections = [
    {
      icon: '🩺',
      title: 'Medical Readiness',
      items: [
        { id: 'breathing', text: 'Stable breathing (no recent apnea/brady episodes)' },
        { id: 'temperature', text: 'Temperature stability in crib/bassinet' },
        { id: 'feeding-safely', text: 'Feeding safely (breast, bottle, NG, or G-tube)' },
        { id: 'weight', text: 'Gaining weight appropriately' },
        { id: 'medications', text: 'Medications reviewed & understood' },
        { id: 'equipment', text: 'Equipment received & taught (oxygen, monitor, pump, G-tube supplies, etc., if needed)' }
      ]
    },
    {
      icon: '📄',
      title: 'Tests Completed',
      items: [
        { id: 'hearing', text: 'Hearing screen' },
        { id: 'newborn-screening', text: 'Newborn screening (state metabolic screen)' },
        { id: 'cchd', text: 'Congenital heart disease (CCHD) screen' },
        { id: 'car-seat', text: 'Car seat challenge (if required)' },
        { id: 'rop', text: 'Retinopathy of prematurity (ROP) follow-up plan (for premature infants)' },
        { id: 'head-ultrasound', text: 'Head ultrasound follow-up (if your NICU team recommends it)' }
      ]
    },
    {
      icon: '💉',
      title: 'Immunizations & Prevention',
      items: [
        { id: 'vaccines', text: 'Routine newborn vaccines reviewed & up to date' },
        { id: 'nirsevimab', text: 'RSV protection given (nirsevimab) if baby qualifies' },
        { id: 'synagis', text: 'Synagis schedule discussed (if seasonal or insurance-dependent)' },
        { id: 'hep-b', text: 'Hepatitis B vaccine given or scheduled' }
      ]
    },
    {
      icon: '🍼',
      title: 'Feeding & Nutrition',
      items: [
        { id: 'feeding-plan', text: 'Parents confident with feeding plan (breast, formula, fortification, schedule)' },
        { id: 'formula-prep', text: 'Safe formula preparation taught' },
        { id: 'tube-supplies', text: 'NG or G-tube supplies provided' },
        { id: 'wic', text: 'WIC prescription (if eligible)' }
      ]
    },
    {
      icon: '🏠',
      title: 'Going-Home Gear',
      items: [
        { id: 'car-seat-install', text: 'Approved car seat & installation checked' },
        { id: 'sleep-space', text: 'Safe sleep space (crib/bassinet)' },
        { id: 'thermometer', text: 'Thermometer' },
        { id: 'medication-tools', text: 'Medication measuring tools' },
        { id: 'emergency-numbers', text: 'Emergency numbers saved in phone' }
      ]
    },
    {
      icon: '📅',
      title: 'Follow-Up Appointments',
      items: [
        { id: 'pediatrician', text: 'Pediatrician appointment scheduled (within 24–48 hrs)' },
        { id: 'specialists', text: 'Specialists (cardiology, neurology, GI, ophthalmology, pulmonology, surgery, etc.)' },
        { id: 'early-intervention', text: 'Early Intervention referral submitted' }
      ]
    },
    {
      icon: '❤️',
      title: 'Parent Confidence & Education',
      items: [
        { id: 'cpr', text: 'CPR training completed (if required by your NICU — optional in some units)' },
        { id: 'feeding-cues', text: 'Parents comfortable with feeding cues & safe sleep' },
        { id: 'warning-signs', text: 'Parents understand signs to call the doctor' },
        { id: 'med-admin', text: 'Parents know how to give medications' },
        { id: 'equipment-use', text: 'Parents know how to use & troubleshoot equipment' },
        { id: 'care-skills', text: 'Parents practiced holding, bathing & diaper changes' },
        { id: 'red-flags', text: 'Parents understand any RED FLAG symptom' }
      ]
    }
  ]

  const totalItems = checklistSections.reduce((sum, section) => sum + section.items.length, 0)
  const checkedCount = Object.values(checkedItems).filter(Boolean).length
  const progress = Math.round((checkedCount / totalItems) * 100)

  return (
    <div className="nicu-guide-page-bg section-padding">
      <div className="container-padding">
        <div className="max-w-5xl mx-auto mb-8">
          <nav className="flex items-center space-x-2 text-sm text-accent-600 mb-6">
            <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span className="text-accent-400">›</span>
            <Link to="/#resources" className="hover:text-primary-600 transition-colors">Resources</Link>
            <span className="text-accent-400">›</span>
            <span className="text-accent-700 font-medium">Transition Home</span>
          </nav>

          <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Transition Home
          </div>
        </div>

        <div className="nicu-guide-content max-w-5xl mx-auto">
          <article className="card p-8 sm:p-10 mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary-700">
              NICU Discharge Checklist
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 text-accent-700 leading-relaxed">
              Use this interactive checklist to prepare for bringing your baby home from the NICU. Tap each item to check it off as you complete it. Your progress is automatically saved.
            </p>

            <div className="mb-8 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 border-l-4 border-primary-500">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary-700 mb-2">Progress Tracker</h3>
                  <p className="text-primary-600 text-sm">
                    {checkedCount} of {totalItems} items completed
                  </p>
                </div>
                <div className="text-4xl font-bold text-primary-600">
                  {progress}%
                </div>
              </div>
              <div className="w-full bg-white rounded-full h-4 overflow-hidden shadow-inner">
                <div 
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <button
                onClick={handleReset}
                className="mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium underline"
              >
                Reset Checklist
              </button>
            </div>

            <div className="space-y-8">
              {checklistSections.map((section, sectionIndex) => {
                const sectionChecked = section.items.filter(item => checkedItems[item.id]).length
                const sectionTotal = section.items.length
                
                return (
                  <section key={sectionIndex} className="border-l-4 border-primary-200 pl-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-primary-700 flex items-center">
                        <span className="text-3xl mr-3">{section.icon}</span>
                        {section.title}
                      </h2>
                      <span className="text-sm text-accent-600 font-medium">
                        {sectionChecked}/{sectionTotal}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      {section.items.map((item) => (
                        <label
                          key={item.id}
                          className={`flex items-start p-4 rounded-lg cursor-pointer transition-all ${
                            checkedItems[item.id]
                              ? 'bg-green-50 border-2 border-green-400'
                              : 'bg-white border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-50/30'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checkedItems[item.id] || false}
                            onChange={() => handleToggle(item.id)}
                            className="mt-1 h-5 w-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer flex-shrink-0"
                          />
                          <span
                            className={`ml-3 text-accent-700 leading-relaxed ${
                              checkedItems[item.id] ? 'line-through opacity-75' : ''
                            }`}
                          >
                            {item.text}
                          </span>
                        </label>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>

            <div className="mt-12 bg-gradient-to-br from-amber-50 to-amber-100/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-l-4 border-amber-500 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-amber-900 flex items-center">
                <span className="text-2xl mr-3">💡</span>
                Important Reminders
              </h3>
              <ul className="space-y-2 text-amber-800 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>This checklist is meant to guide you. Your NICU team will customize your discharge plan based on your baby's unique needs.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Don't hesitate to ask questions or request additional teaching on any topic you're unsure about.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Your progress is saved automatically in your browser, so you can return to this checklist anytime.</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default NICUDischargeChecklist
