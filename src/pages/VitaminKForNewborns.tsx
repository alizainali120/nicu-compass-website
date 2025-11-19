import React from 'react'
import { Link } from 'react-router-dom'

const VitaminKForNewborns: React.FC = () => {
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
              💉 Vitamin K for Newborns
            </h1>
            <p className="text-xl text-gray-600 italic mb-8">
              What Parents Need to Know
            </p>

            {/* What is Vitamin K? */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-blue-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900">
                  What is Vitamin K?
                </h2>
                <p className="text-lg text-blue-900 leading-relaxed mb-4">
                  Vitamin K is a nutrient our bodies need to form blood clots and stop bleeding. Adults get Vitamin K from foods and healthy gut bacteria but babies are born with very tiny stores, which puts them at risk for dangerous bleeding.
                </p>
              </div>
            </section>

            {/* What is VKDB? */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-red-50 to-rose-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-red-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-red-900">
                  What is Vitamin K Deficiency Bleeding (VKDB)?
                </h2>
                <p className="text-lg text-red-900 leading-relaxed mb-4">
                  VKDB is bleeding that happens when a baby doesn't have enough Vitamin K. Bleeding can occur:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">•</span>
                    <p className="text-red-900">In the intestines</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">•</span>
                    <p className="text-red-900">Under the skin</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">•</span>
                    <p className="text-red-900">Or most seriously — inside the brain</p>
                  </li>
                </ul>
                <div className="bg-white rounded-lg p-5">
                  <p className="text-red-900 mb-2">
                    VKDB can happen anytime in the first 6 months, especially in babies who do not get the Vitamin K shot at birth.
                  </p>
                  <p className="text-red-900 font-semibold">
                    There are no warning signs in most cases. Bleeding can begin suddenly and become life-threatening.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Do Babies Have Low Vitamin K? */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-purple-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-900">
                  Why Do Babies Have Low Vitamin K?
                </h2>
                <p className="text-lg text-purple-900 leading-relaxed mb-4">
                  Newborns naturally have low Vitamin K because:
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-purple-900">
                      <strong>•</strong> Only small amounts cross the placenta during pregnancy.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-purple-900">
                      <strong>•</strong> Their gut bacteria are not yet developed, so they cannot make Vitamin K.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-purple-900">
                      <strong>•</strong> Breast milk contains only small amounts of Vitamin K (still extremely healthy, but not enough to prevent VKDB).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How Does the Vitamin K Shot Help? */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-green-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-900">
                  How Does the Vitamin K Shot Help?
                </h2>
                <p className="text-lg text-green-900 leading-relaxed mb-4">
                  A single Vitamin K injection:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-green-900">Gives a safe, reliable dose right away</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-green-900">Protects against early, classic, and late VKDB</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-green-900">Has been standard of care since 1961</p>
                  </li>
                </ul>
                <div className="bg-white rounded-lg p-5">
                  <p className="text-xl text-green-900 font-bold">
                    This one shot is almost 100% effective at preventing life-threatening bleeding.
                  </p>
                </div>
              </div>
            </section>

            {/* Is the Vitamin K Shot Safe? */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-teal-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-900">
                  Is the Vitamin K Shot Safe?
                </h2>
                <p className="text-xl text-teal-900 font-bold mb-4">
                  Yes. Large studies have shown:
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-teal-900">
                      <strong>✓</strong> No link between Vitamin K and childhood cancer (an old study raised concern, but dozens of follow-up studies found no association)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-teal-900">
                      <strong>✓</strong> The injection is safe, widely tested, and recommended by the American Academy of Pediatrics
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Not Use Oral Vitamin K? */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-amber-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-amber-900">
                  Why Not Use Oral Vitamin K?
                </h2>
                <p className="text-lg text-amber-900 leading-relaxed mb-4">
                  Some countries use oral Vitamin K, but it is less reliable and not as effective, especially for preventing brain bleeds.
                </p>
                <p className="text-lg text-amber-900 leading-relaxed mb-4">
                  Reasons oral Vitamin K is not recommended in the U.S.:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-amber-900">• Babies may spit it up</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-amber-900">• It must be given many times (parents may miss doses)</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-amber-900">• It does not reliably prevent late VKDB</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-5">
                  <p className="text-amber-900 font-semibold">
                    The injection is the safest and most effective option.
                  </p>
                </div>
              </div>
            </section>

            {/* Breast Milk */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-pink-50 to-rose-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-pink-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-pink-900">
                  Does My Baby Get Vitamin K from Breast Milk?
                </h2>
                <p className="text-lg text-pink-900 leading-relaxed mb-4">
                  Yes — but not enough to protect against VKDB. Breastfeeding is wonderful and encouraged, but babies still need the Vitamin K shot.
                </p>
                <div className="bg-white rounded-lg p-5">
                  <p className="text-pink-900">
                    Formula contains more Vitamin K than breast milk, but formula alone does not prevent early VKDB without the shot.
                  </p>
                </div>
              </div>
            </section>

            {/* Signs of VKDB */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-red-600">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-red-900">
                  ⚠️ What Are Signs of VKDB?
                </h2>
                <p className="text-lg text-red-900 leading-relaxed mb-4 font-semibold">
                  Call your provider immediately if you notice:
                </p>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-red-900">• Easy bruising</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-red-900">• Oozing from the umbilical stump</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-red-900">• Nosebleeds</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-red-900">• Blood in vomit or stool</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-red-900">• Very pale skin or gums</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-red-900">• Yellow eyes after 3 weeks</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-red-900">• Seizures</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-red-900">• Unusual sleepiness or vomiting</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-100 to-rose-100 rounded-lg p-5">
                  <p className="text-red-900 font-bold">
                    Half of late VKDB cases involve bleeding into the brain. This is preventable with the Vitamin K shot.
                  </p>
                </div>
              </div>
            </section>

            {/* Quick Facts */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-indigo-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-indigo-900">
                  Quick Facts for Parents
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-indigo-900">Vitamin K shot = protection from dangerous bleeding</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-indigo-900">Given once, shortly after birth</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-indigo-900">Safe, routine, and recommended worldwide</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold text-xl mr-3">✓</span>
                    <p className="text-indigo-900">Especially important for exclusively breastfed babies</p>
                  </li>
                </ul>
              </div>
            </section>

            {/* Reassurance */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-primary-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-900">
                  Reassurance for Parents
                </h2>
                <p className="text-lg text-primary-900 leading-relaxed mb-4">
                  Choosing the Vitamin K shot is one of the simplest and most powerful ways to protect your newborn's health. It prevents a dangerous condition that can lead to brain injury, disability, or death — and it has been safely given to millions of babies for over 60 years.
                </p>
                <p className="text-xl text-primary-800 font-bold italic">
                  You're making the right choice. ❤️
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

export default VitaminKForNewborns
