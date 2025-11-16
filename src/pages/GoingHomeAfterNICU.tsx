import React from 'react'
import { Link } from 'react-router-dom'

const GoingHomeAfterNICU: React.FC = () => (
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-primary-700 border-b border-primary-100 pb-6">
            Going Home After the NICU: Tips for Parents
          </h1>

          <p className="text-lg sm:text-xl mb-10 text-accent-700 leading-relaxed">
            Leaving the NICU after weeks or months is a huge milestone — but it can also feel overwhelming. Many parents describe discharge day as a mix of joy, fear, excitement, and uncertainty. You're not alone. Here are supportive, realistic tips to help make the transition home feel easier and more confident.
          </p>

          <div className="space-y-8">
            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="text-2xl mr-3">🌟</span>
                1. Expect Mixed Emotions — It's Normal
              </h3>
              <div className="ml-5 pl-2 border-l-2 border-primary-100 space-y-3">
                <p className="text-accent-700 leading-relaxed">Parents often say:</p>
                <ul className="space-y-2 text-accent-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>"I'm so happy… but also terrified."</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>"What if something goes wrong at home?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>"I've depended on nurses and monitors for months."</span>
                  </li>
                </ul>
                <p className="text-accent-700 leading-relaxed font-medium">
                  All these feelings are valid. Your NICU team is sending your baby home because you're ready and your baby is ready.
                </p>
              </div>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="text-2xl mr-3">🍼</span>
                2. Get Comfortable With Your Baby's Home Routine in the NICU
              </h3>
              <div className="ml-5 pl-2 border-l-2 border-primary-100 space-y-3">
                <p className="text-accent-700 leading-relaxed">Before discharge, practice:</p>
                <ul className="space-y-2 text-accent-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Giving medications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Mixing formula or fortifier (if needed)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Doing feedings (bottle or breast)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Using any equipment: NG tube, oxygen, monitor, pump</span>
                  </li>
                </ul>
                <p className="text-accent-700 leading-relaxed">
                  Make sure you feel confident before you leave. Ask nurses to do a "teach-back" session where you show them the steps.
                </p>
              </div>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="text-2xl mr-3">💊</span>
                3. Organize Meds, Appointments & Follow-Ups Early
              </h3>
              <div className="ml-5 pl-2 border-l-2 border-primary-100 space-y-3">
                <p className="text-accent-700 leading-relaxed">Most NICU grads have multiple appointments:</p>
                <ul className="space-y-2 text-accent-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Pediatrician</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cardiologist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ophthalmology (ROP follow-up)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>High-risk Infant Clinic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Therapies (PT/OT/feeding therapy)</span>
                  </li>
                </ul>
                <div className="bg-primary-50 p-4 rounded-lg mt-4">
                  <p className="text-accent-700 leading-relaxed font-medium mb-2">Create a simple binder or phone note with:</p>
                  <ul className="space-y-1 text-accent-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Medication times</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Follow-up appointments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Growth charts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Discharge instructions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="text-2xl mr-3">💤</span>
                4. Sleep When Your Baby Sleeps — And Give Yourself Grace
              </h3>
              <div className="ml-5 pl-2 border-l-2 border-primary-100 space-y-3">
                <p className="text-accent-700 leading-relaxed">
                  NICU parents often feel the urge to be "on alert" constantly at home. It's exhausting. You've been in survival mode for months.
                </p>
                <p className="text-accent-700 leading-relaxed">Try to:</p>
                <ul className="space-y-2 text-accent-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Rest when the baby rests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ask for help</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Take turns with your partner</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Set up a safe sleep space near your room</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="text-2xl mr-3">📞</span>
                5. Know When (and How) to Ask for Help
              </h3>
              <div className="ml-5 pl-2 border-l-2 border-primary-100 space-y-3">
                <p className="text-accent-700 leading-relaxed">
                  Your NICU team will always be part of your story.
                </p>
                <p className="text-accent-700 leading-relaxed">Call if you are worried about:</p>
                <ul className="space-y-2 text-accent-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Trouble feeding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Vomiting or poor weight gain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Trouble breathing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Decreased wet diapers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fevers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Anything that feels "not right"</span>
                  </li>
                </ul>
                <p className="text-accent-700 leading-relaxed font-medium">
                  You are never bothering them.
                </p>
              </div>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="text-2xl mr-3">🧡</span>
                6. Give Yourself Permission to Adjust Slowly
              </h3>
              <div className="ml-5 pl-2 border-l-2 border-primary-100 space-y-3">
                <p className="text-accent-700 leading-relaxed">Your baby may come home with:</p>
                <ul className="space-y-2 text-accent-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Oxygen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Feeding tubes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Monitors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Special formulas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Medications</span>
                  </li>
                </ul>
                <p className="text-accent-700 leading-relaxed">It's okay if:</p>
                <ul className="space-y-2 text-accent-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>You feel intimidated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>You cry the first night home</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>You call the NICU or pediatrician a lot</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>You don't feel like the fear goes away immediately</span>
                  </li>
                </ul>
                <p className="text-accent-700 leading-relaxed font-medium">
                  Healing takes time — for babies and parents.
                </p>
              </div>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="text-2xl mr-3">👣</span>
                7. Focus on Bonding, Not Perfection
              </h3>
              <div className="ml-5 pl-2 border-l-2 border-primary-100 space-y-3">
                <p className="text-accent-700 leading-relaxed">
                  Bonding can continue — sometimes it even gets easier at home. Try:
                </p>
                <ul className="space-y-2 text-accent-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Skin-to-skin time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reading to your baby</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Soft music</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Talking during diaper changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Eye contact (when baby is ready)</span>
                  </li>
                </ul>
                <p className="text-accent-700 leading-relaxed font-medium">
                  Every moment counts.
                </p>
              </div>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="text-2xl mr-3">🤱</span>
                8. Feeding at Home Takes Practice
              </h3>
              <div className="ml-5 pl-2 border-l-2 border-primary-100 space-y-3">
                <p className="text-accent-700 leading-relaxed">
                  Whether breastfeeding, bottle feeding, or tube feeding:
                </p>
                <ul className="space-y-2 text-accent-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Babies may tire easily</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>They may still have small amounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>They may need pacing or breaks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Growth is gradual</span>
                  </li>
                </ul>
                <p className="text-accent-700 leading-relaxed">
                  Ask your NICU team if you should track volumes, weights, or timing.
                </p>
              </div>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="text-2xl mr-3">🧺</span>
                9. Create a "Go Bag" for Appointments
              </h3>
              <div className="ml-5 pl-2 border-l-2 border-primary-100 space-y-3">
                <p className="text-accent-700 leading-relaxed">
                  You'll have many appointments at first. Pack:
                </p>
                <ul className="space-y-2 text-accent-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Extra clothes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Extra diapers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Feeding supplies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Medication doses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>A printed list of baby's medical history</span>
                  </li>
                </ul>
                <p className="text-accent-700 leading-relaxed">
                  Makes outings much less stressful.
                </p>
              </div>
            </section>

            <section className="group">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-primary-600 group-hover:text-primary-700 transition-colors flex items-center">
                <span className="text-2xl mr-3">🌈</span>
                10. Celebrate How Far You've Come
              </h3>
              <div className="ml-5 pl-2 border-l-2 border-primary-100 space-y-3">
                <p className="text-accent-700 leading-relaxed">Small victories matter:</p>
                <ul className="space-y-2 text-accent-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>First night home</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>First bath</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>First family photo outside the NICU</span>
                  </li>
                </ul>
                <p className="text-accent-700 leading-relaxed font-semibold text-primary-600 text-lg mt-4">
                  Your baby is home because of your strength, advocacy, and love.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 bg-gradient-to-br from-primary-50 to-primary-100/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-l-4 border-primary-500 shadow-sm">
            <p className="text-lg text-primary-700 italic">
              "The transition home is a new chapter — one filled with hope, healing, and the incredible joy of having your baby in your arms, in your home, where they belong."
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
)

export default GoingHomeAfterNICU
