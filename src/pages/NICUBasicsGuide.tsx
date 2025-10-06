import React from 'react'
import { Link } from 'react-router-dom'
import './NICUBasicsGuide.css'

const NICUBasicsGuide: React.FC = () => (
  <div className="nicu-guide-page-bg section-padding">
    <div className="container-padding">
      <div className="max-w-5xl mx-auto mb-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-accent-600 mb-6">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span className="text-accent-400">›</span>
          <Link to="/#resources" className="hover:text-primary-600 transition-colors">Resources</Link>
          <span className="text-accent-400">›</span>
          <span className="text-accent-700 font-medium">NICU Essentials</span>
        </nav>

        {/* Category Badge */}
        <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
          NICU Essentials
        </div>
      </div>

      <div className="nicu-guide-content max-w-5xl mx-auto">
        <article className="card p-8 sm:p-10 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-primary-700 border-b border-primary-100 pb-6">
            Understanding Your Baby's NICU Care Team
          </h1>

          <p className="text-lg sm:text-xl mb-10 text-accent-700 leading-relaxed">
            When your baby is admitted to the Neonatal Intensive Care Unit (NICU), you'll meet many different people caring for your little one. Each has a unique role, but together they work as a team to provide the best possible care for your baby.
          </p>

          <div className="space-y-8">
            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                Attending Neonatologist:
              </h3>
              <p className="text-accent-700 leading-relaxed ml-5 pl-2 border-l-2 border-primary-100">
                The attending neonatologist is the team leader. They are responsible for making medical decisions and overseeing your baby's overall care.
              </p>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                Neonatology Fellow:
              </h3>
              <p className="text-accent-700 leading-relaxed ml-5 pl-2 border-l-2 border-primary-100">
                A fellow is a physician completing training to become a neonatologist. Fellows work closely with the attending and help guide daily care.
              </p>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                Resident & Medical Students:
              </h3>
              <p className="text-accent-700 leading-relaxed ml-5 pl-2 border-l-2 border-primary-100">
                Residents (doctors in training) and medical students may also round on your baby daily. They help check progress, write orders, and ensure treatments are carried out.
              </p>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                Consultants:
              </h3>
              <p className="text-accent-700 leading-relaxed ml-5 pl-2 border-l-2 border-primary-100">
                Sometimes, other specialists are asked to weigh in—for example, cardiology, gastroenterology, or infectious disease. These doctors are called consultants.
              </p>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                Nurse Practitioners (NPs)/Physician Assistants (PAs):
              </h3>
              <p className="text-accent-700 leading-relaxed ml-5 pl-2 border-l-2 border-primary-100">
                NPs and PAs perform procedures, write notes, and provide hands-on care under the guidance of the neonatologist.
              </p>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                Nurses:
              </h3>
              <p className="text-accent-700 leading-relaxed ml-5 pl-2 border-l-2 border-primary-100">
                Your baby's primary caregiver in the NICU is their nurse. Nurses provide day-to-day care, feedings, medications, and comfort, and are often the ones you'll talk to most.
              </p>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                Respiratory Therapists:
              </h3>
              <p className="text-accent-700 leading-relaxed ml-5 pl-2 border-l-2 border-primary-100">
                If your baby needs breathing support (such as ventilator, CPAP, or a cannula), respiratory therapists manage the machines, suctioning, and help with positioning.
              </p>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                Dieticians:
              </h3>
              <p className="text-accent-700 leading-relaxed ml-5 pl-2 border-l-2 border-primary-100">
                Dietitians review your baby's growth, nutrition, and lab values to recommend the best feeding plan.
              </p>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                Pharmacists:
              </h3>
              <p className="text-accent-700 leading-relaxed ml-5 pl-2 border-l-2 border-primary-100">
                NICU pharmacists double-check every medication for safety, dosing, and compatibility with other treatments.
              </p>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                Social Workers:
              </h3>
              <p className="text-accent-700 leading-relaxed ml-5 pl-2 border-l-2 border-primary-100">
                Social workers help with practical and emotional needs: transportation, insurance, housing, parking, transfers, or finding equipment and community resources.
              </p>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                Therapists:
              </h3>
              <p className="text-accent-700 leading-relaxed ml-5 pl-2 border-l-2 border-primary-100">
                Speech, physical, and occupational therapists support your baby's development. They may help with feeding, movement, and sensory stimulation to promote growth.
              </p>
            </section>
          </div>

          <div className="mt-12 bg-gradient-to-br from-primary-50 to-primary-100/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-l-4 border-primary-500 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-700 flex items-center">
              <span className="text-2xl mr-3">💡</span>
              Quick Tip of the Week: "What to Pack for your Daily NICU Visit"
            </h3>
            <p className="text-sm text-primary-600 mb-6 italic font-medium">(downloadable checklist)</p>

            <ul className="space-y-4 text-accent-700">
              <li className="flex items-start hover:bg-white/40 p-3 rounded-lg transition-colors">
                <span className="mr-4 text-2xl flex-shrink-0">📖</span>
                <span className="leading-relaxed">A book to read to your baby</span>
              </li>
              <li className="flex items-start hover:bg-white/40 p-3 rounded-lg transition-colors">
                <span className="mr-4 text-2xl flex-shrink-0">📝</span>
                <span className="leading-relaxed">A journal (for notes, questions, or downtime)</span>
              </li>
              <li className="flex items-start hover:bg-white/40 p-3 rounded-lg transition-colors">
                <span className="mr-4 text-2xl flex-shrink-0">💧</span>
                <span className="leading-relaxed">A water bottle & snacks</span>
              </li>
              <li className="flex items-start hover:bg-white/40 p-3 rounded-lg transition-colors">
                <span className="mr-4 text-2xl flex-shrink-0">🖼</span>
                <span className="leading-relaxed">A family photo or small blanket to leave near your baby's crib</span>
              </li>
              <li className="flex items-start hover:bg-white/40 p-3 rounded-lg transition-colors">
                <span className="mr-4 text-2xl flex-shrink-0">🧥</span>
                <span className="leading-relaxed">A sweater or hoodie (NICUs can be chilly)</span>
              </li>
              <li className="flex items-start hover:bg-white/40 p-3 rounded-lg transition-colors">
                <span className="mr-4 text-2xl flex-shrink-0">👕</span>
                <span className="leading-relaxed">Comfortable clothing for breastfeeding/pumping: nursing tanks, button-down shirts, wrap tops, or soft nursing bras. These make feeding and skin-to-skin easier during long NICU days.</span>
              </li>
              <li className="flex items-start bg-gradient-to-r from-amber-50 to-amber-100/50 p-4 rounded-xl border-l-4 border-amber-500 shadow-sm">
                <span className="mr-4 text-2xl flex-shrink-0">⚠️</span>
                <span className="leading-relaxed"><strong className="text-amber-900">Infection control reminder:</strong> <span className="text-amber-800">avoid wearing jewelry or watches — keep your arms bare below the elbows when touching or holding your baby.</span></span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </div>
)

export default NICUBasicsGuide
