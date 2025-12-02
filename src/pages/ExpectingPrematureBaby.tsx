import React from 'react'
import { Link } from 'react-router-dom'

const ExpectingPrematureBaby: React.FC = () => {
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
              What to Expect When You're Expecting a Premature Baby
            </h1>
            <p className="text-xl text-gray-600 italic mb-8">
              A guide to help you feel prepared and less overwhelmed
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-blue-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-primary-500 mb-8">
              <p className="text-lg text-primary-900 leading-relaxed">
                Finding out your baby may arrive early can bring fear, confusion, and a whirlwind of emotions. <strong>You are not alone.</strong> This guide will walk you through what typically happens when a premature baby is born so you feel more prepared and less overwhelmed.
              </p>
            </div>

            {/* Why Babies Are Born Premature */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-purple-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-900">
                  Why Babies Are Born Premature
                </h2>
                <p className="text-lg text-purple-900 leading-relaxed mb-4">
                  Premature birth can happen for many reasons:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-purple-900">• Maternal health conditions</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-purple-900">• Infections</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-purple-900">• Placental problems</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-purple-900">• Twin pregnancies</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-purple-900">• Genetic reasons</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-purple-900">• Sometimes no identifiable reason at all</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Who Will Be at the Delivery? */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-blue-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900">
                  Who Will Be at the Delivery?
                </h2>
                <p className="text-lg text-blue-900 leading-relaxed mb-4">
                  When a premature baby is expected, a specialized high-risk team is present. This usually includes:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="bg-white rounded-lg p-4 flex items-center">
                    <span className="text-2xl mr-3">👨‍⚕️</span>
                    <p className="text-blue-900 font-semibold">A neonatologist</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center">
                    <span className="text-2xl mr-3">👩‍⚕️</span>
                    <p className="text-blue-900 font-semibold">NICU nurses</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center">
                    <span className="text-2xl mr-3">🫁</span>
                    <p className="text-blue-900 font-semibold">A respiratory therapist</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center">
                    <span className="text-2xl mr-3">👥</span>
                    <p className="text-blue-900 font-semibold">Sometimes additional specialists depending on your pregnancy</p>
                  </div>
                </div>
                <div className="bg-blue-100 rounded-lg p-4">
                  <p className="text-blue-900">
                    Your baby will be evaluated on a warmer and then admitted to the NICU. Different NICUs have different levels with varying staff — not everyone may be present at every delivery.
                  </p>
                </div>
              </div>
            </section>

            {/* How Long Will My Baby Stay? */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-amber-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-amber-900">
                  How Long Will My Baby Stay?
                </h2>
                <p className="text-lg text-amber-900 leading-relaxed mb-4">
                  A common estimate is that babies stay until around their due date.
                </p>
                <div className="bg-white rounded-xl p-6 mb-4">
                  <p className="text-amber-900 font-semibold mb-2">Example:</p>
                  <p className="text-amber-900">
                    If your baby is born at <strong>25 weeks</strong>, they may stay for <strong>~15 weeks</strong> until they reach 40 weeks corrected age.
                  </p>
                </div>
                <div className="bg-amber-100 rounded-lg p-4">
                  <p className="text-amber-900 italic">
                    This is only a guideline — every baby is unique and can have their own journey which could be longer or shorter.
                  </p>
                </div>
              </div>
            </section>

            {/* What to Expect in the NICU */}
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                What to Expect in the NICU
              </h2>

              {/* Breathing Support */}
              <div className="bg-gradient-to-br from-sky-50 to-cyan-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-sky-500 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-sky-900">
                  🫁 Breathing Support
                </h3>
                <p className="text-lg text-sky-900 leading-relaxed mb-4">
                  Premature babies have lungs that are still developing. They may:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sky-900">• Have fewer air sacs (alveoli)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sky-900">• Have more fluid in the lungs</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sky-900">• Lack surfactant, the "slippery" substance that keeps lungs open</p>
                  </div>
                </div>
                <p className="text-lg text-sky-900 leading-relaxed mb-4">
                  Your baby may need:
                </p>
                <div className="grid md:grid-cols-2 gap-2 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sky-900">• CPAP</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sky-900">• High-flow oxygen</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sky-900">• NIPPV</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sky-900">• Breathing tube and ventilator (if very premature)</p>
                  </div>
                </div>
                <p className="text-sky-900 mb-4">
                  Many babies also receive <strong>surfactant medication</strong> to help their lungs stay open.
                </p>
                <div className="bg-gradient-to-r from-sky-100 to-cyan-100 rounded-lg p-4">
                  <p className="text-sky-900 font-semibold">
                    💡 Did you know? Lungs keep growing until about age 4!
                  </p>
                </div>
              </div>

              {/* Heart and Blood Pressure */}
              <div className="bg-gradient-to-br from-red-50 to-rose-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-red-500 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-red-900">
                  ❤️ Heart and Blood Pressure
                </h3>
                <p className="text-lg text-red-900 leading-relaxed mb-4">
                  Premature babies may have:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-red-900">• Immature heart function</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-red-900">• Low blood pressure</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-red-900">• A common condition called <strong>PDA (Patent Ductus Arteriosus)</strong> — a persistent opening in a blood vessel that can sometimes affect breathing</p>
                  </div>
                </div>
                <div className="bg-red-100 rounded-lg p-4">
                  <p className="text-red-900">
                    They will likely get an ultrasound of the heart to evaluate function, and some babies need medications for blood pressure support.
                  </p>
                </div>
              </div>

              {/* Feeding and Nutrition */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-green-500 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-green-900">
                  🍼 Feeding and Nutrition
                </h3>
                <p className="text-lg text-green-900 leading-relaxed mb-4">
                  Preemies often cannot feed by mouth right away because:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-green-900">• The suck–swallow–breathe reflex isn't developed until 32–34 weeks</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-green-900">• Their gut may not be ready for full feedings</p>
                  </div>
                </div>
                <p className="text-lg text-green-900 leading-relaxed mb-4">
                  They may receive:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-green-900">• IV nutrition (TPN)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-green-900">• Tube feedings (NG or OG tubes)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-green-900">• Slow, gradual increases in feeding</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
                  <p className="text-green-900 font-bold text-lg">
                    🤱 Breast milk is the best option for preterm babies.
                  </p>
                </div>
              </div>

              {/* Blood Work & Transfusions */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-orange-500 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-900">
                  🩸 Blood Work & Transfusions
                </h3>
                <p className="text-lg text-orange-900 leading-relaxed mb-4">
                  Preemies may need blood transfusions because of:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-orange-900">• Low iron stores</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-orange-900">• Rapid growth</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-orange-900">• Frequent blood sampling</p>
                  </div>
                </div>
                <div className="bg-orange-100 rounded-lg p-4">
                  <p className="text-orange-900">
                    This is common and closely monitored by the care team.
                  </p>
                </div>
              </div>

              {/* Immune System */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-indigo-500 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-indigo-900">
                  🛡️ Immune System
                </h3>
                <p className="text-lg text-indigo-900 leading-relaxed mb-4">
                  Premature babies have immature immune systems, making them more vulnerable to infections.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-indigo-900 font-semibold">
                    ✋ Hand washing and the "bare below elbows" policy help prevent the spread of infections.
                  </p>
                </div>
              </div>
            </section>

            {/* What You CAN Do as a Parent */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-violet-50 to-purple-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-violet-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-violet-900">
                  💜 What You CAN Do as a Parent
                </h2>
                <p className="text-lg text-violet-900 leading-relaxed mb-6">
                  Even if your baby is tiny or on breathing support, <strong>you are still an essential part of their care.</strong>
                </p>
                <div className="bg-white rounded-xl p-6 mb-4">
                  <h3 className="text-xl font-bold text-violet-900 mb-4">You can:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-violet-600 font-bold text-xl mr-3">✓</span>
                      <p className="text-violet-900">Talk, sing, or read to your baby</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 font-bold text-xl mr-3">✓</span>
                      <p className="text-violet-900">Touch them gently or engage in kangaroo care if allowed</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 font-bold text-xl mr-3">✓</span>
                      <p className="text-violet-900">Ask questions during rounds</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 font-bold text-xl mr-3">✓</span>
                      <p className="text-violet-900">Help with small tasks like diaper changes or temperature checks</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 font-bold text-xl mr-3">✓</span>
                      <p className="text-violet-900">Advocate for your baby — but try not to overwhelm yourself</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 font-bold text-xl mr-3">✓</span>
                      <p className="text-violet-900">Take care of yourself (rest, food, emotional support)</p>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg p-5">
                  <p className="text-xl text-violet-900 font-bold text-center">
                    Your presence is medicine. 💜
                  </p>
                </div>
              </div>
            </section>

            {/* Final Reassurance */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-primary-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-900">
                  A Message for You
                </h2>
                <p className="text-lg text-primary-900 leading-relaxed mb-4">
                  It is tough. Something you can never be prepared for enough. The idea of not being able to take your baby home is very anxiety-provoking.
                </p>
                <p className="text-lg text-primary-900 leading-relaxed mb-4">
                  But your baby will be taken well care of in the NICU. The goal of this article is to prepare you and your loved ones about what to expect and help answer some of your questions.
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

export default ExpectingPrematureBaby
