import React from 'react'
import { ResourceCard as ResourceCardType } from '../types'

interface ResourceCardProps {
  card: ResourceCardType
  isExpanded: boolean
  onToggle: (id: string, expanded: boolean) => void
}

const ResourceCard: React.FC<ResourceCardProps> = ({ card, isExpanded, onToggle }) => {
  const getCategoryColor = () => {
    const colors = {
      guidance: 'bg-blue-50 text-blue-700 border-blue-200',
      community: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      practical: 'bg-purple-50 text-purple-700 border-purple-200',
      wellness: 'bg-rose-50 text-rose-700 border-rose-200'
    }
    return colors[card.category]
  }

  const getIconColor = () => {
    const colors = {
      guidance: 'bg-blue-600',
      community: 'bg-emerald-600',
      practical: 'bg-purple-600',
      wellness: 'bg-rose-600'
    }
    return colors[card.category]
  }

  const handleToggle = () => {
    onToggle(card.id, !isExpanded)
  }

  return (
    <div className="card group cursor-pointer h-full" onClick={handleToggle}>
      <div className="p-6">
        {/* Category Badge */}
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor()} mb-4`}>
          {card.category}
        </div>
        
        {/* Icon */}
        <div className={`w-12 h-12 ${getIconColor()} rounded-xl flex items-center justify-center text-white text-xl mb-4 group-hover:scale-105 transition-transform`}>
          {card.icon}
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {card.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {card.description}
        </p>
        
        {/* Toggle Button */}
        <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors group-hover:gap-2">
          {isExpanded ? 'Show Less' : 'Learn More'}
          <svg 
            className={`ml-1 w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-gray-100 animate-slide-up">
            <h4 className="font-semibold text-gray-900 mb-3">{card.details.subtitle}</h4>
            <ul className="space-y-2 text-gray-600 text-sm mb-4">
              {card.details.content.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-500 mr-2 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={card.details.actionLink}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {card.details.actionText}
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResourceCard