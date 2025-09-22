import React from 'react'
import ResourceGridCard from './ResourceGridCard'
import { resourceCards } from '../data/resources'

interface ResourcesSectionProps {
  expandedCards: Set<string>
  onToggle: (cardId: string, expanded: boolean) => void
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ expandedCards, onToggle }) => (
  <section id="resources" className="section-padding bg-gray-50">
    <div className="container-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Helpful Resources
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Click any resource below to explore detailed information and tools designed specifically for NICU families
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resourceCards.map((cardData, index) => (
          <ResourceGridCard
            key={cardData.id}
            cardData={cardData}
            isExpanded={expandedCards.has(cardData.id)}
            onToggle={onToggle}
            animationDelay={index * 100}
          />
        ))}
      </div>
    </div>
  </section>
)

export default ResourcesSection
