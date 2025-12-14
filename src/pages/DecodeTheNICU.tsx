import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

interface NICUTerm {
  term: string
  meaning: string
  whatItMeans: string
}

const nicuTerms: NICUTerm[] = [
  {
    term: "A/B/D",
    meaning: "Apnea, Bradycardia, Desaturation",
    whatItMeans: "\"Spells\" where a baby briefly stops breathing (apnea), heart rate slows (bradycardia), or oxygen levels drop (desaturation). Common in preemies and usually improve with maturity."
  },
  {
    term: "CPAP",
    meaning: "Continuous Positive Airway Pressure",
    whatItMeans: "A machine that gently pushes air into your baby's lungs to keep them open and make breathing easier."
  },
  {
    term: "ETT",
    meaning: "Endotracheal Tube",
    whatItMeans: "A small breathing tube placed in the windpipe and connected to a ventilator to help babies breathe."
  },
  {
    term: "HFV",
    meaning: "High-Frequency Ventilator",
    whatItMeans: "A special ventilator that gives hundreds of tiny breaths per minute — used for very fragile lungs."
  },
  {
    term: "SIMV",
    meaning: "Synchronized Intermittent Mandatory Ventilation",
    whatItMeans: "A type of ventilator that delivers set breaths but lets the baby breathe in between."
  },
  {
    term: "HFNC",
    meaning: "High-Flow Nasal Cannula",
    whatItMeans: "Delivers warm, humidified oxygen through soft prongs in the nose; gentler than CPAP."
  },
  {
    term: "IVH",
    meaning: "Intraventricular Hemorrhage",
    whatItMeans: "Bleeding in the brain's fluid spaces, seen mainly in very premature infants. Monitored with ultrasound."
  },
  {
    term: "PDA",
    meaning: "Patent Ductus Arteriosus",
    whatItMeans: "A small vessel that should close after birth but sometimes stays open, affecting heart and lung function."
  },
  {
    term: "ROP",
    meaning: "Retinopathy of Prematurity",
    whatItMeans: "An eye condition in preterm babies; eye exams are done to detect it early."
  },
  {
    term: "NPO",
    meaning: "Nil Per Os (Latin for \"nothing by mouth\")",
    whatItMeans: "Means no feedings are given by mouth or tube temporarily."
  },
  {
    term: "TPN",
    meaning: "Total Parenteral Nutrition",
    whatItMeans: "IV nutrition that provides calories, protein, and vitamins when babies can't eat yet."
  },
  {
    term: "PICC",
    meaning: "Peripherally Inserted Central Catheter",
    whatItMeans: "A long IV line placed in a small vein for giving medicines or nutrition."
  },
  {
    term: "UAC/UVC",
    meaning: "Umbilical Arterial/Venous Catheter",
    whatItMeans: "Tubes placed in the umbilical cord shortly after birth to monitor blood pressure or give fluids."
  },
  {
    term: "ABG",
    meaning: "Arterial Blood Gas",
    whatItMeans: "A blood test that checks oxygen, carbon dioxide, and acid levels to see how well your baby is breathing."
  },
  {
    term: "PEEP",
    meaning: "Positive End-Expiratory Pressure",
    whatItMeans: "The gentle pressure a ventilator keeps in the lungs between breaths to prevent collapse."
  },
  {
    term: "Kangaroo Care",
    meaning: "Skin-to-skin holding",
    whatItMeans: "Holding your baby on your bare chest helps regulate temperature, breathing, and bonding."
  }
]

const DecodeTheNICU: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <Header navigationItems={navigationItems} />
      
      <div className="max-w-5xl mx-auto px-4 py-12">
        <nav className="text-sm mb-8 flex items-center space-x-2 text-accent-600">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/" className="hover:text-primary-600 transition-colors">Resources</Link>
          <span>›</span>
          <span className="text-accent-800">Decode the NICU</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            NICU ESSENTIALS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-900 mb-4">
            Decode the NICU
          </h1>
          <p className="text-lg text-accent-600 leading-relaxed">
            A simple guide to understanding common NICU terms, abbreviations, and medical equipment
          </p>
        </div>

        <div className="card p-8 mb-8 bg-primary-50 border-2 border-primary-200">
          <h2 className="text-xl font-bold text-primary-700 mb-3">Understanding the Language of the NICU</h2>
          <p className="text-accent-700 leading-relaxed">
            The NICU has its own language filled with medical terms and abbreviations. This guide breaks down the most common terms you'll hear, what they mean technically, and more importantly — what they mean for your baby. Don't hesitate to ask your care team to explain anything you don't understand.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {nicuTerms.map((item, index) => (
            <div key={index} className="card hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-24 sm:w-32">
                    <div className="bg-primary-100 text-primary-700 font-bold text-lg sm:text-xl px-4 py-2 rounded-lg text-center">
                      {item.term}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-accent-900 mb-2">
                      {item.meaning}
                    </h3>
                    <p className="text-accent-700 leading-relaxed">
                      {item.whatItMeans}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card p-6 bg-white border-2 border-primary-200 mb-8">
          <h3 className="text-lg font-bold text-accent-900 mb-3">💙 Tips for Understanding Your Baby's Care</h3>
          <ul className="space-y-2 text-accent-700">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Don't be afraid to ask questions — your care team wants you to understand</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Write down unfamiliar terms during rounds and ask for clarification</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Ask your nurse to explain what the monitors and equipment are showing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>It's okay to ask the same question multiple times — information can be overwhelming</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Keep a notebook with important terms and your baby's progress</span>
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

export default DecodeTheNICU
