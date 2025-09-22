import React from 'react'
import ResourceCard from './ResourceCard'
import { ResourceCard as ResourceCardType } from '../types'

interface ResourceGridCardProps {
  cardData: ResourceCardType
  isExpanded: boolean
  onToggle: (cardId: string, expanded: boolean) => void
  animationDelay: number
}

const ResourceGridCard: React.FC<ResourceGridCardProps> = ({
  cardData,
  isExpanded,
  onToggle,
  animationDelay
}) => (
  <div style={{ animationDelay: `${animationDelay}ms` }}>
    <ResourceCard
      card={cardData}
      isExpanded={isExpanded}
      onToggle={onToggle}
    />
  </div>
)

export default ResourceGridCard
