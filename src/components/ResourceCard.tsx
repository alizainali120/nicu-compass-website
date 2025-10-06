import React from 'react'
import { ResourceCard as ResourceCardType } from '../types'
import { Link } from 'react-router-dom'

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
          <div className="mt-6 pt-6 border-t border-primary-100 animate-slide-up">
            <h4 className="font-semibold text-gray-900 mb-4 text-base">{card.details.subtitle}</h4>

            {/* Article Links */}
            {card.details.articles && (
              <ul className="space-y-3 mb-4">
                {card.details.articles.map((article, index) => (
                  <li key={index}>
                    <Link
                      to={article.link}
                      className="group/link flex items-start p-3 -mx-3 rounded-lg hover:bg-primary-50/50 transition-all duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-0.5 group-hover/link:bg-primary-500 group-hover/link:text-white transition-colors">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 group-hover/link:text-primary-700 font-medium text-sm leading-relaxed transition-colors">{article.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {/* Regular Content (for other cards) */}
            {card.details.content && (
              <ul className="space-y-3 mb-4">
                {card.details.content.map((item, index) => (
                  <li key={index} className="flex items-start group/item p-2 -mx-2 rounded-lg hover:bg-primary-50/30 transition-colors">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400 mr-3 mt-2"></span>
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Action Link (if present) */}
            {card.details.actionText && card.details.actionLink && (
              <Link
                to={card.details.actionLink}
                className="inline-flex items-center px-4 py-2 bg-primary-50 hover:bg-primary-100 text-primary-700 hover:text-primary-800 font-medium text-sm rounded-lg transition-all duration-200 group/action border border-primary-200 hover:border-primary-300"
                onClick={(e) => e.stopPropagation()}
              >
                {card.details.actionText}
                <svg className="ml-2 w-4 h-4 group-hover/action:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ResourceCard