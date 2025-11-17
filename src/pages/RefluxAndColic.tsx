import React from 'react'
import { Link } from 'react-router-dom'

const RefluxAndColic: React.FC = () => {
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
              Gastroesophageal Reflux & Colic in Preterm and Newborn Babies
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 text-accent-700 leading-relaxed italic">
              A guide for exhausted, worried, amazing NICU parents.
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 sm:p-8 mb-8 border-l-4 border-primary-500">
              <p className="text-lg text-primary-800 leading-relaxed">
                Many NICU and newborn parents say the same thing: "My baby cries constantly… spits up… seems uncomfortable… and I don't know what to do."
              </p>
              <p className="text-lg text-primary-800 leading-relaxed mt-4">
                Reflux and colic are extremely common in newborns — especially premature babies. And although they often improve with time, the symptoms can be overwhelming for families. This guide explains what's normal, what research shows, and how to help your baby (and yourself) through this phase.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-700 flex items-center">
                <span className="text-3xl mr-3">⭐</span>
                Why Do Babies Have Reflux?
              </h2>
              <p className="text-lg text-accent-700 leading-relaxed mb-4">
                Newborns — especially preemies — have:
              </p>
              <ul className="space-y-2 mb-4 ml-6">
                <li className="text-accent-700 leading-relaxed flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>an immature digestive system,</span>
                </li>
                <li className="text-accent-700 leading-relaxed flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>a loose lower esophageal sphincter (the valve that keeps milk down),</span>
                </li>
                <li className="text-accent-700 leading-relaxed flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>short, frequent feeds,</span>
                </li>
                <li className="text-accent-700 leading-relaxed flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>lots of time spent lying flat.</span>
                </li>
              </ul>
              <p className="text-lg text-accent-700 leading-relaxed mb-4">
                All of this makes milk come back up easily. This is called <strong>physiologic reflux</strong>, and almost all babies have some degree of it.
              </p>
              <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-500">
                <p className="text-primary-800 font-medium">
                  📌 Most reflux is normal and not dangerous, even if it looks dramatic.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-700 flex items-center">
                <span className="text-3xl mr-3">⭐</span>
                What About Colic?
              </h2>
              <p className="text-lg text-accent-700 leading-relaxed mb-4">
                Colic is defined as:
              </p>
              <ul className="space-y-2 mb-4 ml-6">
                <li className="text-accent-700 leading-relaxed flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>crying for &gt;3 hours a day,</span>
                </li>
                <li className="text-accent-700 leading-relaxed flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>more than 3 days a week,</span>
                </li>
                <li className="text-accent-700 leading-relaxed flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>in an otherwise healthy baby.</span>
                </li>
              </ul>
              <p className="text-lg text-accent-700 leading-relaxed mb-4">
                Preemies often have more colicky behavior because:
              </p>
              <ul className="space-y-2 mb-4 ml-6">
                <li className="text-accent-700 leading-relaxed flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>their nervous systems are immature,</span>
                </li>
                <li className="text-accent-700 leading-relaxed flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>they can get overstimulated easily,</span>
                </li>
                <li className="text-accent-700 leading-relaxed flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>they're adjusting to life outside the NICU.</span>
                </li>
              </ul>
              <p className="text-lg text-accent-700 leading-relaxed font-medium">
                Colic feels terrible — but it does not mean something is wrong with your baby.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-700 flex items-center">
                <span className="text-3xl mr-3">⭐</span>
                What the Studies Show: Why Acid-Suppressing Medications Rarely Help
              </h2>
              <p className="text-lg text-accent-700 leading-relaxed mb-4">
                Parents often wonder about medications like omeprazole, lansoprazole, or esomeprazole. Here's what strong scientific studies have shown:
              </p>

              <div className="space-y-6">
                <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-400">
                  <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center">
                    <span className="mr-2">❌</span>
                    1. PPIs don't improve typical reflux symptoms
                  </h3>
                  <p className="text-red-800 mb-3">
                    Placebo-controlled trials found no difference in:
                  </p>
                  <ul className="space-y-1 ml-6">
                    <li className="text-red-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>crying</span>
                    </li>
                    <li className="text-red-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>fussiness</span>
                    </li>
                    <li className="text-red-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>arching</span>
                    </li>
                    <li className="text-red-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>spit-ups</span>
                    </li>
                  </ul>
                  <p className="text-red-800 mt-3">
                    between babies taking PPIs and babies taking placebo.
                  </p>
                  <p className="text-red-800 mt-3 italic">
                    These medications only help acid-related GERD, which is rare in infants.
                  </p>
                </div>

                <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-400">
                  <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center">
                    <span className="mr-2">⚠️</span>
                    2. PPIs can cause side effects
                  </h3>
                  <p className="text-amber-800 mb-3">
                    Infants taking PPIs have higher rates of:
                  </p>
                  <ul className="space-y-1 ml-6">
                    <li className="text-amber-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>pneumonia</span>
                    </li>
                    <li className="text-amber-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>gastroenteritis</span>
                    </li>
                    <li className="text-amber-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>nutrient malabsorption</span>
                    </li>
                    <li className="text-amber-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>possible changes in the gut microbiome</span>
                    </li>
                  </ul>
                  <p className="text-amber-800 mt-3">
                    Because babies naturally have less acid, suppressing it further can increase infection risks.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center">
                    <span className="mr-2">✔️</span>
                    3. Medications are reserved for severe or clearly diagnosed GERD
                  </h3>
                  <p className="text-green-800 mb-3">
                    Examples include:
                  </p>
                  <ul className="space-y-1 ml-6 mb-4">
                    <li className="text-green-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>poor weight gain,</span>
                    </li>
                    <li className="text-green-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>blood in vomit,</span>
                    </li>
                    <li className="text-green-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>evidence of esophagitis,</span>
                    </li>
                    <li className="text-green-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>persistent feeding refusal,</span>
                    </li>
                    <li className="text-green-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>apnea/bradycardia truly linked to reflux (rare).</span>
                    </li>
                  </ul>
                  <p className="text-green-800 mb-2">
                    Even then, specialists recommend:
                  </p>
                  <ul className="space-y-1 ml-6">
                    <li className="text-green-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>short trials,</span>
                    </li>
                    <li className="text-green-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>reassessment,</span>
                    </li>
                    <li className="text-green-800 flex items-start">
                      <span className="mr-2">•</span>
                      <span>and stopping if no improvement.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-100 rounded-lg p-6 mt-6 border-l-4 border-primary-600">
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  ⭐ Why this matters for you
                </h3>
                <p className="text-primary-800 leading-relaxed mb-2">
                  If your baby is crying, fussy, and spitting up — that does NOT mean you did anything wrong, and you're not missing something.
                </p>
                <p className="text-primary-800 leading-relaxed font-medium">
                  Most babies outgrow reflux by 4–6 months corrected age.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-700 flex items-center">
                <span className="text-3xl mr-3">⭐</span>
                What Does Help? (Evidence + Practical Tips)
              </h2>
              <p className="text-lg text-accent-700 leading-relaxed mb-6">
                These strategies are safe and can make a real difference.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-green-900 mb-2 flex items-start">
                    <span className="mr-2">✓</span>
                    Smaller, more frequent feeds
                  </h3>
                  <p className="text-green-800 text-sm">
                    Preemies do better with small volumes spaced out.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-green-900 mb-2 flex items-start">
                    <span className="mr-2">✓</span>
                    Hold baby upright after feeds (20–30 minutes)
                  </h3>
                  <p className="text-green-800 text-sm">
                    Let gravity help keep milk down.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-green-900 mb-2 flex items-start">
                    <span className="mr-2">✓</span>
                    Slow-flow nipples (if bottle feeding)
                  </h3>
                  <p className="text-green-800 text-sm">
                    Reduces air swallowing and discomfort.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-green-900 mb-2 flex items-start">
                    <span className="mr-2">✓</span>
                    Paced bottle feeding
                  </h3>
                  <p className="text-green-800 text-sm">
                    Allows better control and less gulping.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-green-900 mb-2 flex items-start">
                    <span className="mr-2">✓</span>
                    Burping during and after feeds
                  </h3>
                  <p className="text-green-800 text-sm">
                    Minimizes air in the stomach.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-green-900 mb-2 flex items-start">
                    <span className="mr-2">✓</span>
                    Side-lying or elevated side-lying feeds
                  </h3>
                  <p className="text-green-800 text-sm">
                    Often gentler for preemies with reflux.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-green-900 mb-2 flex items-start">
                    <span className="mr-2">✓</span>
                    White noise, swaddling, warm baths
                  </h3>
                  <p className="text-green-800 text-sm">
                    Helps with colicky behaviors.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-green-900 mb-2 flex items-start">
                    <span className="mr-2">✓</span>
                    Tummy time when awake and supervised
                  </h3>
                  <p className="text-green-800 text-sm">
                    Can reduce gassiness and build strength.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-700 flex items-center">
                <span className="text-3xl mr-3">⭐</span>
                What Does Not Work
              </h2>
              <div className="space-y-3">
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <p className="text-red-900 flex items-start">
                    <span className="mr-2">❌</span>
                    <span>Switching multiple formulas repeatedly</span>
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <p className="text-red-900 flex items-start">
                    <span className="mr-2">❌</span>
                    <span>Thickeners (often not recommended for preemies unless specifically advised)</span>
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <p className="text-red-900 flex items-start">
                    <span className="mr-2">❌</span>
                    <span>Early introduction of solids</span>
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <p className="text-red-900 flex items-start">
                    <span className="mr-2">❌</span>
                    <span>Overfeeding to "calm them down"</span>
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-pink-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-pink-900 flex items-center">
                  <span className="text-3xl mr-3">❤️</span>
                  For Parents: Your Feelings Are Real and Valid
                </h2>
                <p className="text-lg text-pink-900 leading-relaxed mb-4">
                  Reflux and colic can be absolutely exhausting. Parents often say things like:
                </p>
                <ul className="space-y-2 mb-6 ml-6">
                  <li className="text-pink-800 leading-relaxed flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>"I'm doing laundry all day."</span>
                  </li>
                  <li className="text-pink-800 leading-relaxed flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>"My baby only sleeps when held."</span>
                  </li>
                  <li className="text-pink-800 leading-relaxed flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>"I can't tell if something is wrong."</span>
                  </li>
                  <li className="text-pink-800 leading-relaxed flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>"Everyone says it gets better, but it doesn't feel like it."</span>
                  </li>
                </ul>

                <p className="text-xl font-bold text-pink-900 mb-4">
                  You are NOT alone.
                </p>

                <p className="text-lg text-pink-900 leading-relaxed mb-3">
                  These symptoms do not mean:
                </p>
                <ul className="space-y-2 mb-6 ml-6">
                  <li className="text-pink-800 leading-relaxed flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>you're doing something wrong,</span>
                  </li>
                  <li className="text-pink-800 leading-relaxed flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>your baby is in constant pain,</span>
                  </li>
                  <li className="text-pink-800 leading-relaxed flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span>or that you're failing.</span>
                  </li>
                </ul>

                <p className="text-lg text-pink-900 leading-relaxed mb-3 italic">
                  Sometimes babies cry even when we've tried everything. Sometimes all you can do is hold them, breathe, and wait for their nervous system to mature.
                </p>

                <p className="text-xl font-bold text-pink-900">
                  And that is enough. You are enough.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-amber-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-amber-900 flex items-center">
                  <span className="text-3xl mr-3">⭐</span>
                  When to Call Your Doctor
                </h2>
                <p className="text-lg text-amber-900 leading-relaxed mb-4">
                  Seek medical advice if your baby has:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-amber-800 leading-relaxed flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>vomiting that is forceful (projectile),</span>
                  </li>
                  <li className="text-amber-800 leading-relaxed flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>blood in spit-up or stool,</span>
                  </li>
                  <li className="text-amber-800 leading-relaxed flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>poor weight gain,</span>
                  </li>
                  <li className="text-amber-800 leading-relaxed flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>refusal to feed,</span>
                  </li>
                  <li className="text-amber-800 leading-relaxed flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>fewer wet diapers,</span>
                  </li>
                  <li className="text-amber-800 leading-relaxed flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>fever,</span>
                  </li>
                  <li className="text-amber-800 leading-relaxed flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>breathing problems,</span>
                  </li>
                  <li className="text-amber-800 leading-relaxed flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>extreme irritability that seems painful.</span>
                  </li>
                </ul>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

export default RefluxAndColic
