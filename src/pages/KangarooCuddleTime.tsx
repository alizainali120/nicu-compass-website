import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { navigationItems } from '../data/navigation'

const KangarooCuddleTime: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <Header navigationItems={navigationItems} />
      
      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm mb-8 flex items-center space-x-2 text-accent-600">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/" className="hover:text-primary-600 transition-colors">Resources</Link>
          <span>›</span>
          <Link to="/nicu-storybook-series" className="hover:text-primary-600 transition-colors">NICU Storybook Series</Link>
          <span>›</span>
          <span className="text-accent-800">Kangaroo Cuddle Time</span>
        </nav>

        <div className="mb-8 text-center">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            NICU STORYBOOK SERIES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-900 mb-4">
            Kangaroo Cuddle Time
          </h1>
          <p className="text-lg text-accent-600">
            A gentle story about skin-to-skin bonding
          </p>
        </div>

        <div className="card p-8 sm:p-12 mb-8">
          <div className="mb-8 rounded-2xl overflow-hidden">
            <img 
              src="/kangaroo-cuddle-illustration.png" 
              alt="Soft watercolor illustration of parent and baby in gentle embrace"
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-accent-700 leading-relaxed space-y-6 text-center">
              <p className="italic">
                In a room full of gentle humming,<br />
                under soft and careful light,<br />
                a tiny heart is learning rhythms,<br />
                finding strength, both day and night.
              </p>

              <p className="italic">
                There is a place that feels like magic,<br />
                where your body knows just what to do.<br />
                A place where love becomes a blanket.<br />
                That place is here,<br />
                with me and you.
              </p>

              <p className="italic">
                I hold you close upon my chest,<br />
                your cheek against my skin so warm.<br />
                Your breathing settles into mine,<br />
                two heartbeats dancing, soft and calm.
              </p>

              <p className="italic">
                You are tiny, but so brave,<br />
                every breath a quiet song.<br />
                And when I wrap my arms around you,<br />
                you remember where you belong.
              </p>

              <p className="italic">
                The monitors may beep and chatter.<br />
                The world around may feel so small.<br />
                But here, in this quiet moment,<br />
                love is bigger than it all.
              </p>

              <p className="italic font-semibold text-primary-700">
                So rest, my baby, rest in comfort.<br />
                Press your heart to mine, so near.<br />
                You are safe inside this cuddle.<br />
                You are held.<br />
                You are loved.<br />
                I am here.
              </p>
            </div>
          </div>
        </div>

        <div className="card p-6 bg-primary-50 border-2 border-primary-200 mb-8">
          <h3 className="text-lg font-bold text-primary-700 mb-3">💙 About Kangaroo Care</h3>
          <p className="text-accent-700 leading-relaxed">
            Kangaroo care, also called skin-to-skin care, is one of the most powerful ways to bond with your NICU baby. Holding your baby against your bare chest helps regulate their temperature, heart rate, and breathing. It also strengthens your connection and supports their development. This story celebrates those precious moments of closeness.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link to="/nicu-storybook-series" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
            ← Back to Storybook Series
          </Link>
        </div>
      </div>
    </div>
  )
}

export default KangarooCuddleTime
