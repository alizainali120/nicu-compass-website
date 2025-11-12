import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

const NICUStorybookSeries: React.FC = () => {
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
            NICU Storybook Series
          </h1>
          <p className="text-lg text-accent-600 leading-relaxed">
            Gentle stories and activities to read with your baby in the NICU
          </p>
        </div>

        <div className="card p-8 mb-8 bg-primary-50 border-2 border-primary-200">
          <h2 className="text-xl font-bold text-primary-700 mb-3">About Our Storybooks:</h2>
          <p className="text-accent-700 leading-relaxed">
            Reading to your baby is one of the most powerful ways to bond, even in the NICU. Our storybook series features gentle, comforting stories written specifically for NICU families. Each story is designed to be read aloud at your baby's bedside, creating special moments of connection during your journey together.
          </p>
        </div>

        <div className="card p-6 bg-accent-50 mb-8">
          <h3 className="text-lg font-bold text-accent-900 mb-3">📚 Coming Soon</h3>
          <p className="text-accent-700 leading-relaxed">
            We're creating a collection of beautiful stories for you and your baby. Check back soon for our first stories!
          </p>
        </div>

        <div className="card p-6 bg-white border-2 border-primary-200">
          <h3 className="text-lg font-bold text-accent-900 mb-3">💙 Why Reading Matters in the NICU</h3>
          <p className="text-accent-700 leading-relaxed mb-3">
            Even the smallest babies benefit from hearing their parent's voice. Reading to your baby:
          </p>
          <ul className="space-y-2 text-accent-700">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Helps them recognize and bond with your voice</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Supports brain development and language skills</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Creates calming routines in a medical environment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Gives you meaningful ways to participate in care</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 font-bold">•</span>
              <span>Reduces stress for both parent and baby</span>
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

export default NICUStorybookSeries
