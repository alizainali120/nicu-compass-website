import React from 'react'
import { Link } from 'react-router-dom'

const RetinopathyOfPrematurity: React.FC = () => {
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
              Understanding Retinopathy of Prematurity (ROP)
            </h1>
            <p className="text-xl text-gray-600 italic mb-8">
              What parents need to know about this eye condition in premature babies
            </p>

            {/* What is ROP */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-primary-50 to-blue-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-primary-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-900">
                  👁️ What is ROP?
                </h2>
                <p className="text-lg text-primary-900 leading-relaxed mb-4">
                  ROP is an eye condition that affects some premature babies. It occurs when the blood vessels in the <strong>retina</strong> (the part of the eye that senses light) don't form normally.
                </p>
                <div className="bg-white rounded-xl p-5">
                  <p className="text-primary-900 leading-relaxed">
                    In a full-term pregnancy, retinal blood vessels normally complete development before birth. But when a baby is born early, that development may be interrupted — increasing the risk for ROP.
                  </p>
                </div>
              </div>
            </section>

            {/* Who is at risk */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-amber-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-amber-900">
                  ⚠️ Who is at Risk?
                </h2>
                <p className="text-lg text-amber-900 leading-relaxed mb-4">
                  Your baby may have a higher risk of ROP if:
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <span className="text-amber-600 font-bold text-xl mr-3">•</span>
                    <p className="text-amber-900">They were born <strong>very prematurely</strong> (often before ~31-32 weeks)</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <span className="text-amber-600 font-bold text-xl mr-3">•</span>
                    <p className="text-amber-900"><strong>Birth weight was very low</strong> (often &lt;1500g / ~3.3 lbs)</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <span className="text-amber-600 font-bold text-xl mr-3">•</span>
                    <p className="text-amber-900">They needed <strong>oxygen therapy or respiratory support</strong>, especially if oxygen exposure was prolonged</p>
                  </div>
                </div>
              </div>
            </section>

            {/* How common & outcomes */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-green-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-900">
                  📊 How Common is it & What are the Possible Outcomes?
                </h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-5">
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold text-2xl mr-3">✓</span>
                      <p className="text-green-900 text-lg">
                        <strong>Many premature babies</strong> may have a mild form of ROP that <strong>resolves on its own</strong> without treatment
                      </p>
                    </div>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-5">
                    <div className="flex items-start">
                      <span className="text-amber-600 font-bold text-2xl mr-3">!</span>
                      <p className="text-amber-900">
                        If ROP progresses (in more severe cases), abnormal blood vessels can grow, bleed, and cause scar tissue that may pull on the retina — which can lead to retinal detachment and vision problems or blindness if untreated.
                      </p>
                    </div>
                  </div>
                  <div className="bg-primary-100 rounded-lg p-5">
                    <p className="text-primary-900 font-semibold text-lg text-center">
                      Because of this, <strong>early detection is key.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How doctors check */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-blue-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-900">
                  🔍 How Do Doctors Check for ROP?
                </h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-5">
                    <p className="text-blue-900 leading-relaxed">
                      For at-risk babies, an eye specialist (<strong>ophthalmologist</strong>) will perform <strong>dilated eye exams</strong> usually starting a few weeks after birth.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-5">
                    <p className="text-blue-900 leading-relaxed">
                      These exams are repeated <strong>every 1–3 weeks</strong> (or per the hospital's protocol) until the retina vessels finish growing or until any ROP resolves.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg p-5">
                    <p className="text-violet-900 font-semibold">
                      🟣 Important: Even if a baby passes the first exam, follow-up is important because ROP can develop or worsen over time.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Treatments */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-rose-50 to-pink-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-rose-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-rose-900">
                  💊 What Treatments are Available (if Needed)?
                </h2>
                <p className="text-lg text-rose-900 leading-relaxed mb-4">
                  If ROP is more serious or progressing, treatment options may include:
                </p>
                <div className="space-y-3 mb-6">
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-rose-800 mb-1">Laser Therapy</h3>
                    <p className="text-rose-900">To treat the abnormal blood vessels and prevent retina damage</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-rose-800 mb-1">Injections (anti-VEGF medications)</h3>
                    <p className="text-rose-900">In some cases, to block abnormal vessel growth</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-rose-800 mb-1">Surgery</h3>
                    <p className="text-rose-900">In advanced cases (if retina detaches), though these carry greater risks and outcomes vary</p>
                  </div>
                </div>
                <div className="bg-rose-100 rounded-lg p-5">
                  <p className="text-rose-900">
                    Healthcare teams decide on treatment based on <strong>severity, stage, and the baby's overall health</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* What parents should know & ask */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-violet-50 to-purple-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-violet-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-violet-900">
                  💬 What Parents Should Know & Ask
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white rounded-lg p-5">
                    <h3 className="font-bold text-violet-800 mb-2">⏰ Timing Matters</h3>
                    <p className="text-violet-900">Make sure you know when your baby's first eye exam is scheduled and follow the follow-up plan.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5">
                    <h3 className="font-bold text-violet-800 mb-2">💚 Most Babies Are Fine</h3>
                    <p className="text-violet-900">Many cases of ROP improve on their own — so try not to panic if ROP is mentioned early.</p>
                  </div>
                </div>

                <div className="bg-violet-100 rounded-xl p-5 mb-6">
                  <h3 className="font-bold text-violet-800 mb-3">❓ Questions to Ask:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-violet-600 mr-2">•</span>
                      <p className="text-violet-900">What stage of ROP does my baby have?</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 mr-2">•</span>
                      <p className="text-violet-900">When is the next exam scheduled?</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 mr-2">•</span>
                      <p className="text-violet-900">What signs should I watch for (if any) once my baby goes home?</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-600 mr-2">•</span>
                      <p className="text-violet-900">If treatment is needed — what does it involve, what are possible side effects?</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-5">
                  <h3 className="font-bold text-violet-800 mb-2">👀 Vision Follow-up Long-Term</h3>
                  <p className="text-violet-900">Even after ROP resolves or is treated, some children need additional eye exams later in childhood for myopia, strabismus, or other vision issues.</p>
                </div>
              </div>
            </section>

            {/* Reassurance section */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 sm:p-8 border-l-4 border-primary-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-900">
                  💜 A Message for Parents
                </h2>
                <p className="text-lg text-primary-900 leading-relaxed mb-6">
                  Dealing with ROP or the possibility of it can be stressful and scary. Here are a few reminders:
                </p>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-5 flex items-start">
                    <span className="text-primary-600 font-bold text-2xl mr-4">❤️</span>
                    <p className="text-primary-900 text-lg">
                      <strong>You are your baby's advocate:</strong> asking questions, attending screenings, and being involved matters.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-5 flex items-start">
                    <span className="text-primary-600 font-bold text-2xl mr-4">✨</span>
                    <p className="text-primary-900 text-lg">
                      <strong>Many babies with ROP have normal vision</strong> as they grow.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-5 flex items-start">
                    <span className="text-primary-600 font-bold text-2xl mr-4">🔍</span>
                    <p className="text-primary-900 text-lg">
                      <strong>Early detection and treatment significantly reduce</strong> the risk of serious vision problems.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

export default RetinopathyOfPrematurity
