import { ResourceCard } from '../types';

export const resourceCards: ResourceCard[] = [
  {
    id: 'nicu-basics',
    title: 'NICU Essentials',
    description: 'Understanding your journey with practical guidance for navigating this new experience',
    icon: '📖',
    category: 'guidance',
    details: {
      subtitle: 'Articles & Guides',
      content: [
        'Understanding Your Baby\'s NICU Care Team'
      ],
      actionText: 'Start Learning',
      actionLink: '/nicu-basics-guide'
    }
  },
  {
    id: 'parent-stories',
    title: 'Real Family Journeys',
    description: 'Find hope and connection through stories from parents who understand your experience',
    icon: '🤗',
    category: 'community',
    details: {
      subtitle: 'Stories of strength and hope',
      content: [
        'First-time parents sharing their unexpected journey',
        'Celebrating the smallest victories and milestones',
        'How families found strength during difficult moments',
        'The path from admission to bringing baby home',
        'Building precious bonds in the NICU environment'
      ],
      actionText: 'Read Stories',
      actionLink: '/parent-stories'
    }
  },
  {
    id: 'going-home',
    title: 'Transition Home',
    description: 'Comprehensive preparation for the exciting journey from NICU to home life',
    icon: '🏡',
    category: 'practical',
    details: {
      subtitle: 'Ready for the next chapter',
      content: [
        'Creating a safe and welcoming home environment',
        'Essential baby care supplies and equipment setup',
        'Coordinating follow-up care and appointments',
        'Understanding medications and feeding routines',
        'When to contact your pediatrician after discharge'
      ],
      actionText: 'Get Prepared',
      actionLink: '/discharge-planning'
    }
  },
  {
    id: 'parent-wellness',
    title: 'Caring for Yourself',
    description: 'Nurturing your own wellbeing while supporting your little one through this journey',
    icon: '💚',
    category: 'wellness',
    details: {
      subtitle: 'You matter too',
      content: [
        'Managing stress and processing complex emotions',
        'Finding balance between NICU visits and self-care',
        'Maintaining relationships and family connections',
        'Nutrition and rest strategies for NICU parents',
        'When and how to seek professional support'
      ],
      actionText: 'Learn More',
      actionLink: '/parent-wellness'
    }
  },
  {
    id: 'financial-guidance',
    title: 'Financial Navigation',
    description: 'Understanding costs and accessing resources to support your family financially',
    icon: '💼',
    category: 'practical',
    details: {
      subtitle: 'Financial clarity and support',
      content: [
        'Understanding insurance coverage and benefits',
        'Hospital financial assistance and payment programs',
        'Community resources and nonprofit support options',
        'Tax considerations and potential deductions',
        'Planning for ongoing medical and therapy costs'
      ],
      actionText: 'Get Guidance',
      actionLink: '/financial-resources'
    }
  },
  {
    id: 'support-network',
    title: 'Emergency Support',
    description: 'Quick access to immediate help when you need guidance or someone to talk to',
    icon: '🆘',
    category: 'community',
    details: {
      subtitle: 'Help when you need it most',
      content: [
        'When to call your NICU team immediately',
        'Warning signs that require urgent medical attention',
        '24/7 emotional support helplines for NICU families',
        'Essential contacts and phone numbers to save',
        'Crisis support and mental health resources'
      ],
      actionText: 'Get Help Now',
      actionLink: '/emergency-support'
    }
  }
];