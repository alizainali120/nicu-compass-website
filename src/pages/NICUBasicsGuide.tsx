import React from 'react'
import './NICUBasicsGuide.css'

const NICUBasicsGuide: React.FC = () => (
  <div className="nicu-guide-page-bg container-padding py-12">
    <h1 className="nicu-guide-title text-4xl font-bold mb-8">
      NICU Essentials Guide
    </h1>

    <div className="nicu-guide-content max-w-4xl mx-auto">
      <article className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-sky-700">
          Understanding Your Baby's NICU Care Team
        </h2>

        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          When your baby is admitted to the Neonatal Intensive Care Unit (NICU), you'll meet many different people caring for your little one. Each has a unique role, but together they work as a team to provide the best possible care for your baby.
        </p>

        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2 text-sky-600">Attending Neonatologist:</h3>
            <p className="text-gray-700 leading-relaxed">
              The attending neonatologist is the team leader. They are responsible for making medical decisions and overseeing your baby's overall care.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-sky-600">Neonatology Fellow:</h3>
            <p className="text-gray-700 leading-relaxed">
              A fellow is a physician completing training to become a neonatologist. Fellows work closely with the attending and help guide daily care.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-sky-600">Resident & Medical Students:</h3>
            <p className="text-gray-700 leading-relaxed">
              Residents (doctors in training) and medical students may also round on your baby daily. They help check progress, write orders, and ensure treatments are carried out.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-sky-600">Consultants:</h3>
            <p className="text-gray-700 leading-relaxed">
              Sometimes, other specialists are asked to weigh in—for example, cardiology, gastroenterology, or infectious disease. These doctors are called consultants.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-sky-600">Nurse Practitioners (NPs)/Physician Assistants (PAs):</h3>
            <p className="text-gray-700 leading-relaxed">
              NPs and PAs perform procedures, write notes, and provide hands-on care under the guidance of the neonatologist.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-sky-600">Nurses:</h3>
            <p className="text-gray-700 leading-relaxed">
              Your baby's primary caregiver in the NICU is their nurse. Nurses provide day-to-day care, feedings, medications, and comfort, and are often the ones you'll talk to most.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-sky-600">Respiratory Therapists:</h3>
            <p className="text-gray-700 leading-relaxed">
              If your baby needs breathing support (such as ventilator, CPAP, or a cannula), respiratory therapists manage the machines, suctioning, and help with positioning.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-sky-600">Dieticians:</h3>
            <p className="text-gray-700 leading-relaxed">
              Dietitians review your baby's growth, nutrition, and lab values to recommend the best feeding plan.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-sky-600">Pharmacists:</h3>
            <p className="text-gray-700 leading-relaxed">
              NICU pharmacists double-check every medication for safety, dosing, and compatibility with other treatments.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-sky-600">Social Workers:</h3>
            <p className="text-gray-700 leading-relaxed">
              Social workers help with practical and emotional needs: transportation, insurance, housing, parking, transfers, or finding equipment and community resources.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-sky-600">Therapists:</h3>
            <p className="text-gray-700 leading-relaxed">
              Speech, physical, and occupational therapists support your baby's development. They may help with feeding, movement, and sensory stimulation to promote growth.
            </p>
          </section>
        </div>

        <div className="mt-10 bg-sky-50 rounded-lg p-6 border-l-4 border-sky-500">
          <h3 className="text-2xl font-bold mb-4 text-sky-700">
            Quick Tip of the Week: What to Pack for Your Daily NICU Visit
          </h3>
          <p className="text-sm text-gray-600 mb-4 italic">Downloadable checklist</p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-xl">📖</span>
              <span>A book to read to your baby</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">📝</span>
              <span>A journal (for notes, questions, or downtime)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">💧</span>
              <span>A water bottle & snacks</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">🖼</span>
              <span>A family photo or small blanket to leave near your baby's crib</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">🧥</span>
              <span>A sweater or hoodie (NICUs can be chilly)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">👕</span>
              <span>Comfortable clothing for breastfeeding/pumping: nursing tanks, button-down shirts, wrap tops, or soft nursing bras. These make feeding and skin-to-skin easier during long NICU days.</span>
            </li>
            <li className="flex items-start bg-amber-50 p-3 rounded border-l-4 border-amber-400">
              <span className="mr-3 text-xl">⚠️</span>
              <span><strong>Infection control reminder:</strong> avoid wearing jewelry or watches — keep your arms bare below the elbows when touching or holding your baby.</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </div>
)

export default NICUBasicsGuide
