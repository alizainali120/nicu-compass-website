import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

const MilkComparison: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header navigationItems={navigationItems} />
      
      <article className="section-padding">
        <div className="container-padding">
          <div className="max-w-5xl mx-auto">
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

          <div className="max-w-5xl mx-auto">
            <article className="card p-8 sm:p-10 mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-primary-700 border-b border-primary-100 pb-6">
                Breast Milk vs. Donor Milk vs. Formula
              </h1>

              <p className="text-lg sm:text-xl mb-10 text-accent-700 leading-relaxed">
                Understanding the differences between feeding options can help you make informed decisions and feel more confident about your baby's nutrition in the NICU. Here's what you need to know about each option.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8 rounded-r-lg">
                <p className="text-primary-900 font-medium">
                  💡 Every baby's needs are unique. Your NICU team will help you choose the best feeding option based on your baby's health, your preferences, and what's available.
                </p>
              </div>

              <section className="mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-6">Comparing Your Feeding Options</h2>
                
                <div className="space-y-6">
                  <div className="card p-6 border-l-4 border-primary-500">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-4">💗 Mother's Own Milk</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-accent-800 mb-2">What It Is:</h4>
                      <p className="text-accent-700 leading-relaxed">
                        Milk expressed directly from the baby's mother.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-accent-800 mb-2">Benefits:</h4>
                      <ul className="space-y-2 text-accent-700 leading-relaxed">
                        <li>✓ Best option whenever possible</li>
                        <li>✓ Easier to digest</li>
                        <li>✓ Provides antibodies and immune protection</li>
                        <li>✓ Linked to lower risk of NEC (necrotizing enterocolitis, a serious gut illness)</li>
                        <li>✓ Supports better brain growth</li>
                        <li>✓ Tailored to your own baby's needs</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-accent-800 mb-2">Limitations/Things to Know:</h4>
                      <p className="text-accent-700 leading-relaxed">
                        Pumping can be challenging and time-consuming.
                      </p>
                    </div>
                  </div>

                  <div className="card p-6 border-l-4 border-primary-400">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-4">🍼 Donor Human Milk</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-accent-800 mb-2">What It Is:</h4>
                      <p className="text-accent-700 leading-relaxed">
                        Milk donated by screened mothers, pasteurized for safety, and stored in milk banks.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-accent-800 mb-2">Benefits:</h4>
                      <ul className="space-y-2 text-accent-700 leading-relaxed">
                        <li>✓ Next best option for premature babies if mother's milk is not available</li>
                        <li>✓ Easier to digest than formula</li>
                        <li>✓ Provides many immune factors (though some are reduced after pasteurization)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-accent-800 mb-2">Limitations/Things to Know:</h4>
                      <ul className="space-y-2 text-accent-700 leading-relaxed">
                        <li>• Pasteurization decreases some nutrients and antibodies</li>
                        <li>• Limited availability in some NICUs</li>
                        <li>• Can lead to poor weight gain in some cases</li>
                        <li>• Can lead to low glucose levels</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card p-6 border-l-4 border-primary-300">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-4">🥛 Infant Formula</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-accent-800 mb-2">What It Is:</h4>
                      <p className="text-accent-700 leading-relaxed">
                        Specially designed powder or liquid, usually made from cow's milk protein with added nutrients.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-accent-800 mb-2">Benefits:</h4>
                      <ul className="space-y-2 text-accent-700 leading-relaxed">
                        <li>✓ Safe and nutritionally complete</li>
                        <li>✓ Readily available</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-accent-800 mb-2">Limitations/Things to Know:</h4>
                      <ul className="space-y-2 text-accent-700 leading-relaxed">
                        <li>• Harder for premature or sick babies to digest</li>
                        <li>• Lacks immune protection</li>
                        <li>• May increase risk of feeding complications in very preterm babies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-6">Making the Best Choice for Your Baby</h2>
                <p className="text-accent-700 leading-relaxed mb-6">
                  The ideal feeding choice depends on many factors, including your baby's gestational age, current health status, and what's available to you. Your NICU team will work with you to create the best nutrition plan.
                </p>
                
                <div className="card p-6 bg-primary-50">
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">Why Human Milk Matters in the NICU</h3>
                  <ul className="space-y-3 text-accent-700 leading-relaxed">
                    <li>Human milk (whether from mother or donor) has been shown to reduce the risk of serious complications in premature babies.</li>
                    <li>It's easier on tiny, developing digestive systems.</li>
                    <li>Even small amounts of mother's milk provide important immune benefits.</li>
                    <li>If you're able to pump, every drop makes a difference — even if your baby also receives donor milk or formula.</li>
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-6">Common Questions Parents Ask</h2>
                
                <div className="space-y-6">
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-primary-600 mb-2">What if I can't produce enough milk?</h3>
                    <p className="text-accent-700 leading-relaxed">
                      Many NICU parents struggle with milk supply, especially in the beginning. This is completely normal. Donor milk or formula can supplement what you're able to provide. Remember: any amount of your milk is valuable.
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-primary-600 mb-2">Is donor milk safe?</h3>
                    <p className="text-accent-700 leading-relaxed">
                      Yes! Donor milk from accredited milk banks goes through careful screening and pasteurization processes to ensure safety. Donors are thoroughly screened for health conditions and infections.
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-primary-600 mb-2">Will my baby need formula even if I'm pumping?</h3>
                    <p className="text-accent-700 leading-relaxed">
                      It depends on your supply and your baby's needs. Some babies receive a combination of mother's milk, donor milk, and/or formula. Your team will help you understand what works best.
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-primary-600 mb-2">Does using formula mean I've failed?</h3>
                    <p className="text-accent-700 leading-relaxed">
                      Absolutely not. Formula is a safe, nutritionally complete option that helps many NICU babies thrive. The most important thing is that your baby is fed and growing. You're doing an amazing job.
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-10 rounded-r-lg">
                <p className="text-primary-900 font-medium mb-4">
                  Remember: Fed is best. Whether your baby receives your milk, donor milk, formula, or a combination, you are providing nourishment and love.
                </p>
                <ul className="space-y-2 text-primary-900">
                  <li><strong>Don't compare yourself to others.</strong> Every NICU journey is different.</li>
                  <li><strong>Ask for lactation support.</strong> NICU lactation consultants are there to help you succeed.</li>
                  <li><strong>Be kind to yourself.</strong> You're doing the best you can during a challenging time.</li>
                </ul>
              </div>

              <section className="mb-10">
                <div className="card p-8 bg-primary-50">
                  <h2 className="text-2xl font-bold text-primary-700 mb-4">✅ Questions to Ask Your NICU Team</h2>
                  <ul className="space-y-3 text-accent-700 leading-relaxed">
                    <li>☐ What feeding option do you recommend for my baby and why?</li>
                    <li>☐ Is donor milk available in this NICU?</li>
                    <li>☐ Can I meet with a lactation consultant to help with pumping?</li>
                    <li>☐ How much milk does my baby need each day?</li>
                    <li>☐ Can I combine different feeding options?</li>
                    <li>☐ What should I do if my milk supply is low?</li>
                  </ul>
                </div>
              </section>
            </article>

            <div className="mt-8 max-w-5xl mx-auto">
              <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </article>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container-padding text-center">
          <div className="text-2xl font-bold text-white mb-2">NICU Compass</div>
          <p className="text-gray-400">Guiding families through the NICU journey with love and support</p>
        </div>
      </footer>
    </div>
  )
}

export default MilkComparison
