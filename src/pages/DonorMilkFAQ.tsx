import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

const DonorMilkFAQ: React.FC = () => {
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
                Donor Milk in the NICU: What Parents Often Ask
              </h1>

              <p className="text-lg sm:text-xl mb-10 text-accent-700 leading-relaxed">
                When your baby receives donor milk in the NICU, it's natural to have questions. Here are answers to the most common concerns parents share with us.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8 rounded-r-lg">
                <p className="text-primary-900 font-medium">
                  💡 Donor milk is a safe, gentle option for NICU babies when mother's milk is not available or not enough. It's carefully screened and tested to protect your baby.
                </p>
              </div>

              <section className="mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="card p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-3">Whose milk is this?</h3>
                    <p className="text-accent-700 leading-relaxed">
                      Donor milk is collected from healthy, carefully screened mothers who have more milk than their own baby needs.
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-3">Is it safe?</h3>
                    <p className="text-accent-700 leading-relaxed">
                      All donor milk is pasteurized and tested by milk banks. Mothers are screened with medical histories and blood tests. The milk is also checked for bacteria before it's used.
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-3">Does pasteurization make it less good?</h3>
                    <p className="text-accent-700 leading-relaxed">
                      Pasteurization does reduce some immune properties, but donor milk still protects babies much better than formula, especially against gut illness (NEC).
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-3">Is there something wrong with my milk if they use donor milk?</h3>
                    <p className="text-accent-700 leading-relaxed">
                      Not at all — donor milk is usually used when a mother's milk is still coming in, or when the baby needs more than she can make yet. It's a bridge, not a replacement.
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-3">Is this really necessary?</h3>
                    <p className="text-accent-700 leading-relaxed">
                      For very premature or sick babies, donor milk is easier to digest and lowers the risk of dangerous complications compared to formula. Formula is still safe, but donor milk is gentler for fragile babies.
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-3">I don't make enough milk. Does that mean I've failed my baby?</h3>
                    <p className="text-accent-700 leading-relaxed">
                      Absolutely not. Low milk supply is very common in the NICU. Even small amounts of your milk provide important immune protection. Donor milk and formula are safe and important supplements when needed. What matters most is that your baby is nourished and you feel supported.
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-3">How long will my baby need donor milk?</h3>
                    <p className="text-accent-700 leading-relaxed">
                      Donor milk is usually a short-term bridge — used until your own milk supply increases or your baby is ready for other feeding options.
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-3">What if I prefer my baby to have formula instead?</h3>
                    <p className="text-accent-700 leading-relaxed">
                      You are your baby's parent, and you always have a voice in feeding decisions. Talk openly with your NICU team — they will explain the options, risks, and benefits, and support your choice.
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-3">Can I still breastfeed if my baby is getting donor milk?</h3>
                    <p className="text-accent-700 leading-relaxed">
                      Yes! Donor milk is only used when your own supply isn't enough yet. You can still pump or breastfeed whenever possible, and the staff can help transition your baby to your milk as soon as it's available.
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-10 rounded-r-lg">
                <p className="text-primary-900 font-medium">
                  "Whether your baby is fed with your milk, donor milk, or formula, the most important thing is that they are nourished and growing. You are doing an amazing job, and your NICU team is here to support you every step of the way."
                </p>
              </div>

              <section className="mb-10">
                <div className="card p-8 bg-primary-50">
                  <h2 className="text-2xl font-bold text-primary-700 mb-4">✅ Questions to Ask Your NICU Team About Donor Milk</h2>
                  <ul className="space-y-3 text-accent-700 leading-relaxed">
                    <li>☐ Where does your donor milk come from?</li>
                    <li>☐ How is the milk screened and tested?</li>
                    <li>☐ How long will my baby likely need donor milk?</li>
                    <li>☐ Can I continue pumping while my baby receives donor milk?</li>
                    <li>☐ What happens when my milk supply increases?</li>
                    <li>☐ Are there any costs associated with donor milk?</li>
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

export default DonorMilkFAQ
