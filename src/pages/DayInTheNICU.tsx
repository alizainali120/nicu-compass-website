import React from 'react'
import { Link } from 'react-router-dom'

const DayInTheNICU: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="section-padding">
        <div className="container-padding max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span>›</span>
            <Link to="/#resources" className="hover:text-primary-600 transition-colors">Resources</Link>
            <span>›</span>
            <span className="text-gray-900">NICU Essentials</span>
          </nav>

          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            NICU ESSENTIALS
          </div>

          <article className="card p-8 sm:p-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-700 mb-4">
              Understanding Your Baby's Day in the NICU
            </h1>
            <p className="text-xl text-gray-600 italic mb-8">
              A Parent's Guide to Rounds, Daily Routines & What to Expect
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-blue-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-primary-500 mb-8">
              <p className="text-lg text-primary-900 leading-relaxed">
                Every day in the NICU follows a rhythm designed to keep your baby safe, comfortable, and growing. Knowing what happens behind the scenes can ease anxiety and help you feel more confident and connected to your baby's care.
              </p>
            </div>

            {/* Morning Rounds */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-amber-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-amber-900">
                  ☀️ Morning Rounds: The Daily Game Plan
                </h2>
                <p className="text-lg text-amber-900 leading-relaxed mb-4">
                  Each morning, the NICU team gathers to review every baby's overnight events and create the plan for the day. This team may include:
                </p>
                <div className="space-y-2 mb-6">
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <span className="text-2xl mr-3">👨‍⚕️</span>
                    <p className="text-amber-900">Attending Neonatologist</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <span className="text-2xl mr-3">👩‍⚕️</span>
                    <p className="text-amber-900">Fellow / Resident / Nurse Practitioner</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <span className="text-2xl mr-3">💉</span>
                    <p className="text-amber-900">Bedside Nurse</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <span className="text-2xl mr-3">🫁</span>
                    <p className="text-amber-900">Respiratory Therapist (if needed)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <span className="text-2xl mr-3">👥</span>
                    <p className="text-amber-900">Pharmacist, Dietitian, or Consultants (as needed)</p>
                  </div>
                </div>

                <p className="text-lg text-amber-900 leading-relaxed mb-4">
                  During rounds, the team discusses:
                </p>
                <div className="grid md:grid-cols-2 gap-2 mb-6">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-amber-900">• How your baby did overnight</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-amber-900">• Vital signs and breathing support</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-amber-900">• Feeding progress</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-amber-900">• Lab results</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:col-span-2">
                    <p className="text-amber-900">• Any new concerns or decisions for the day</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg p-5">
                  <p className="text-violet-900 font-semibold">
                    🟣 Parent Tip: If you're able, try to be present for rounds. It's a great time to hear updates and ask questions. You can also ask your nurse roughly what time your baby will round — times vary by unit.
                  </p>
                </div>
              </div>
            </section>

            {/* Touch Times */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-blue-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900">
                  🕐 Touch Times: Your Baby's Care Schedule
                </h2>
                <p className="text-lg text-blue-900 leading-relaxed mb-4">
                  NICUs cluster care to protect your baby's sleep and reduce unnecessary stimulation. These "touch times" typically occur every 3–6 hours, depending on the baby's condition.
                </p>
                <p className="text-lg text-blue-900 leading-relaxed mb-4">
                  During touch time, the nurse may:
                </p>
                <div className="grid md:grid-cols-2 gap-2 mb-6">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-blue-900">• Check vital signs (heart rate, respiratory rate, temperature)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-blue-900">• Change diapers</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-blue-900">• Complete feeding assessments</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-blue-900">• Give medications</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-blue-900">• Reposition your baby</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-blue-900">• Perform oral care or skin care</p>
                  </div>
                </div>

                <div className="bg-blue-100 rounded-lg p-5">
                  <p className="text-blue-900">
                    Because premature babies need long stretches of uninterrupted rest, most of the day is intentionally quiet. <strong>The goal is to mimic the calm environment of the womb.</strong>
                  </p>
                </div>
              </div>
            </section>

            {/* Kangaroo Care */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-pink-50 to-rose-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-pink-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-pink-900">
                  🦘 Kangaroo Care & Bonding Time
                </h2>
                <p className="text-lg text-pink-900 leading-relaxed mb-4">
                  Skin-to-skin care (kangaroo care) is one of the most powerful things you can do for your baby.
                </p>
                <p className="text-lg text-pink-900 leading-relaxed mb-4">
                  It can:
                </p>
                <div className="grid md:grid-cols-2 gap-2 mb-6">
                  <div className="bg-white rounded-lg p-3 flex items-start">
                    <span className="text-pink-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-pink-900">Improve breathing and heart rate</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-start">
                    <span className="text-pink-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-pink-900">Support temperature regulation</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-start">
                    <span className="text-pink-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-pink-900">Improve sleep quality</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-start">
                    <span className="text-pink-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-pink-900">Boost milk production</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-start">
                    <span className="text-pink-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-pink-900">Strengthen bonding and attachment</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-start">
                    <span className="text-pink-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-pink-900">Support long-term brain development</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg p-5">
                  <p className="text-violet-900 font-semibold">
                    🟣 Parent Tip: Tell your nurse early in the day that you'd like to hold your baby. Sometimes it requires coordinating multiple staff members (especially if your baby is on CPAP or a ventilator), so planning ahead helps make it successful.
                  </p>
                </div>
              </div>
            </section>

            {/* Rest of the Day */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-green-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-900">
                  🌿 What the Rest of the Day Looks Like
                </h2>
                <p className="text-lg text-green-900 leading-relaxed mb-4">
                  Between touch times and rounding updates, the rest of the day involves:
                </p>
                <div className="space-y-2 mb-6">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-green-900">• Following up on morning plans</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-green-900">• Adjusting respiratory or feeding support</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-green-900">• Notifying you of any changes</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-green-900">• Consulting specialists (cardiology, neurology, surgery, etc.)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-green-900">• Performing ultrasounds, X-rays, or lab work if needed</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-green-900">• Ensuring your baby rests as much as possible</p>
                  </div>
                </div>

                <div className="bg-green-100 rounded-lg p-5">
                  <p className="text-green-900">
                    <strong>You can visit any time that works for you.</strong> Some parents stay all day; others come around work or other responsibilities. There is no "right" way — do what works for your family.
                  </p>
                </div>
              </div>
            </section>

            {/* How You Can Take Part */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-violet-50 to-purple-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-violet-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-violet-900">
                  💜 How You Can Take Part in Your Baby's Day
                </h2>
                <p className="text-lg text-violet-900 leading-relaxed mb-6">
                  Even if your baby is tiny or connected to tubes and machines, <strong>you still play a major role.</strong> You can:
                </p>
                <div className="bg-white rounded-xl p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-violet-600 font-bold text-xl mr-3">✓</span>
                      <p className="text-violet-900">Participate in care times (diapers, temperatures, oral care)</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 font-bold text-xl mr-3">✓</span>
                      <p className="text-violet-900">Read, sing, or talk softly to your baby</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 font-bold text-xl mr-3">✓</span>
                      <p className="text-violet-900">Help with pumping or storing breast milk</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 font-bold text-xl mr-3">✓</span>
                      <p className="text-violet-900">Learn your baby's cues</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 font-bold text-xl mr-3">✓</span>
                      <p className="text-violet-900">Keep a notebook of questions for rounds</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 font-bold text-xl mr-3">✓</span>
                      <p className="text-violet-900">Advocate for kangaroo care and bonding opportunities</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Final Reassurance */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-primary-500">
                <p className="text-lg text-primary-900 leading-relaxed mb-4">
                  NICU days can feel long, repetitive, and emotional. But behind the scenes, everything is designed to support steady growth and healing.
                </p>
                <p className="text-xl text-primary-800 font-bold italic">
                  Understanding the routine can help you feel more empowered and connected to your baby's journey. ❤️
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

export default DayInTheNICU
