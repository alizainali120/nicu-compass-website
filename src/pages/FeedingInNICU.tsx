import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

const FeedingInNICU: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header navigationItems={navigationItems} />
      
      <article className="section-padding">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
            ← Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Feeding in the NICU: From Tube to Breast or Bottle
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Feeding in the NICU can look very different from feeding a healthy newborn. Premature and sick babies often need time to grow, practice, and develop the skills to feed safely. Here's what parents need to know.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-blue-900 font-medium">
                💡 Did you know? Even if your baby is tube-fed, you can provide drops of colostrum (first milk). This helps protect their gut and boosts immunity.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Feeding Is Different in the NICU</h2>
              <ul className="space-y-3 text-gray-700">
                <li>Premature babies may be too weak or immature to coordinate sucking, swallowing, and breathing.</li>
                <li>Babies who are very sick may not be able to take feedings by mouth.</li>
                <li>The stomach and intestines (GI tract) may not be ready to digest full feeds.</li>
                <li>Feeding is a step-by-step process — moving gradually from tiny tube feeds to full breastfeeding or bottle feeding.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways Babies Are Fed in the NICU</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Tube (Gavage) Feedings</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Common for babies born before 32–34 weeks or those not ready to feed by mouth.</li>
                    <li>A small, soft tube is placed through the nose or mouth into the stomach.</li>
                    <li>Milk is given slowly in very small amounts, then gradually increased.</li>
                    <li>Even if a baby is tube-fed, drops of colostrum (first breastmilk) can be given by mouth for comfort and protection.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cup or Spoon Feeding</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Some NICUs use small feeding cups or shallow spoons instead of bottles.</li>
                    <li>These can help babies practice oral feeding while protecting breastfeeding.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Breast or Bottle (Nipple Feeding)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Starts once babies are stable and able to coordinate suck-swallow-breathe.</li>
                    <li>Babies may still need tube feeds while practicing.</li>
                    <li>Feedings can be tiring — watch for cues that your baby needs breaks.</li>
                    <li>Special scales can weigh babies before and after breastfeeding to check how much they've taken.</li>
                    <li>Feeding by mouth is a gradual developmental process that can take weeks.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Breast Milk, Donor Milk, and Formula: What's the Difference?</h2>
              
              <div className="space-y-6">
                <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">💗 Mother's Own Milk (MOM)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Best option whenever possible — tailored to your baby's needs.</li>
                    <li>Easier to digest, with proteins and fats that are gentler on tiny stomachs.</li>
                    <li>Provides antibodies and immune factors that protect against infections.</li>
                    <li>Linked to lower risk of necrotizing enterocolitis (NEC) and better brain development.</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">🍼 Donor Human Milk</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Used if a mother's own milk is unavailable or not enough.</li>
                    <li>Comes from carefully screened, pumping mothers.</li>
                    <li>Pasteurized for safety (some immune benefits are reduced, but still much better tolerated than formula).</li>
                    <li>An important option for very premature or sick babies.</li>
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">🐄 Infant Formula</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Made from cow's milk protein (with added nutrients to mimic breast milk).</li>
                    <li>Safe and nutritionally complete but often harder for premature or sick babies to digest.</li>
                    <li>Lacks immune protection (antibodies) found in human milk.</li>
                    <li>May increase the risk of feeding complications in very preterm babies, though it is an important and necessary option when human milk is not available.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Breastmilk Matters</h2>
              <ul className="space-y-3 text-gray-700">
                <li>Human milk has the perfect balance of nutrients for growth and development.</li>
                <li>Easier to digest than formula, especially for premature or sick babies.</li>
                <li>Provides antibodies and immune factors to protect against infection.</li>
                <li>Protects against necrotizing enterocolitis (NEC), a dangerous gut illness in preemies.</li>
                <li>Linked to better brain growth in premature babies.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Lactation Support in the NICU</h2>
              <ul className="space-y-3 text-gray-700">
                <li>Lactation consultants can help mothers with pumping, storing milk, and transitioning to breastfeeding.</li>
                <li>Even if your baby can't breastfeed yet, pumped milk can be stored for tube or bottle feeds.</li>
                <li>Pumping regularly helps maintain supply until babies are strong enough to feed by mouth.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Human Milk Fortifiers: What They Are and Why They're Needed</h2>
              <p className="text-gray-700 mb-4">
                Some babies need extra nutrients beyond what breastmilk provides.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What are fortifiers?</h3>
                <p className="text-gray-700 mb-4">
                  Concentrated supplements added to breastmilk to provide extra protein, minerals, vitamins, and calories.
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Types of fortifiers:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Cow's milk–based (powder or liquid).</li>
                  <li>Human milk–based (made from donor breastmilk, available in some NICUs).</li>
                </ul>
              </div>

              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Why not just feed more milk?</h4>
                  <p>Babies' stomachs are tiny and can only hold limited volumes. Fortifiers give more nutrition without overfilling.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Do fortifiers cause problems?</h4>
                  <p>Some babies may have more digestive stress with fortifiers, but the benefits usually outweigh risks. Studies suggest human milk–based fortifiers may lower the risk of NEC and lung complications compared to cow's milk products.</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions Parents Ask</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-primary-600 mb-2">Why does my baby need fortifier?</h3>
                  <p className="text-gray-700">Because preemies grow quickly and need extra protein, calcium, and phosphorus that plain milk can't always provide.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-primary-600 mb-2">How long will my baby need it?</h3>
                  <p className="text-gray-700">This depends on your baby's condition. Some continue to need added nutrients even after discharge.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-primary-600 mb-2">Does needing fortifier mean something is wrong with my milk?</h3>
                  <p className="text-gray-700">Not at all! Your milk is still the best foundation. Fortifiers are just an added boost for growth.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-primary-600 mb-2">How can I know if my baby is receiving fortifier?</h3>
                  <p className="text-gray-700">Ask! It's routine in many NICUs, but you should always feel free to confirm with the care team.</p>
                </div>
              </div>
            </section>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 mb-10">
              <p className="text-emerald-900 font-medium mb-4">
                Feeding in the NICU is a journey that takes patience. Every step — from tube feeding to the first successful breast or bottle feed — is progress. Remember:
              </p>
              <ul className="space-y-2 text-emerald-900">
                <li><strong>Your milk matters.</strong> Every drop helps.</li>
                <li><strong>Ask questions.</strong> The NICU team is there to support you.</li>
                <li><strong>Celebrate milestones.</strong> Feeding is a big part of your baby's growth and your bonding journey.</li>
              </ul>
            </div>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quiz: Test Your NICU Feeding Knowledge</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">1. Babies born before 32 weeks often need:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>A) Extra pacifiers</li>
                    <li className="text-emerald-600 font-medium">B) Tube (gavage) feedings ✅</li>
                    <li>C) Water</li>
                    <li>D) Baby cereal</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">2. True or False: Cup or spoon feedings are sometimes used to protect breastfeeding.</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="text-emerald-600 font-medium">✅ True</li>
                    <li>False</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">3. What is the main reason human milk fortifier is used?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>A) To make milk taste better</li>
                    <li className="text-emerald-600 font-medium">B) To add extra protein, vitamins, and minerals ✅</li>
                    <li>C) To replace breast milk</li>
                    <li>D) To thicken feeds</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="bg-primary-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">✅ Fortifier Questions to Ask Your NICU Team</h2>
                <ul className="space-y-3 text-gray-700">
                  <li>☐ Is my baby receiving a fortifier?</li>
                  <li>☐ What kind of fortifier is being used (cow's milk–based or human milk–based)?</li>
                  <li>☐ How long will my baby need fortifier?</li>
                  <li>☐ Are there any signs I should watch for at home once discharged?</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
              ← Back to Home
            </Link>
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

export default FeedingInNICU
