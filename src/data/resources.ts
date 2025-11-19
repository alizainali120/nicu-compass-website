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
      articles: [
        {
          title: 'Understanding Your Baby\'s NICU Care Team',
          link: '/nicu-basics-guide'
        },
        {
          title: 'Decode the NICU: Medical Terms Explained',
          link: '/decode-the-nicu'
        },
        {
          title: 'Feeding in the NICU: From Tube to Breast or Bottle',
          link: '/feeding-in-nicu'
        },
        {
          title: 'Breast Milk vs. Donor Milk vs. Formula',
          link: '/milk-comparison'
        },
        {
          title: 'Donor Milk in the NICU: What Parents Often Ask',
          link: '/donor-milk-faq'
        },
        {
          title: 'Gastroesophageal Reflux & Colic in Preterm and Newborn Babies',
          link: '/reflux-and-colic'
        },
        {
          title: 'Understanding Respiratory Support in the NICU',
          link: '/respiratory-support'
        },
        {
          title: 'How to Read the Monitor Without Stressing (Parent Cheatsheet)',
          link: '/monitor-cheatsheet'
        },
        {
          title: 'Vitamin K for Newborns: What Parents Need to Know',
          link: '/vitamin-k-for-newborns'
        }
      ]
    }
  },
  {
    id: 'interactive-tools',
    title: 'Stories & Activities',
    description: 'Gentle games, stories, and bonding activities to share with your baby in the NICU',
    icon: '📚',
    category: 'guidance',
    details: {
      subtitle: 'Interactive resources for you and baby',
      articles: [
        {
          title: 'NICU Word Match',
          link: '/nicu-word-match'
        },
        {
          title: 'NICU Word Builder',
          link: '/nicu-word-builder'
        },
        {
          title: 'Match the NICU Term',
          link: '/match-the-nicu-term'
        },
        {
          title: 'NICU Storybook Series',
          link: '/nicu-storybook-series'
        }
      ]
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
      articles: [
        {
          title: 'Going Home After the NICU: Tips for Parents',
          link: '/going-home-after-nicu'
        },
        {
          title: 'NICU Discharge Checklist',
          link: '/nicu-discharge-checklist'
        }
      ],
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
    title: 'Coping in the NICU',
    description: 'Nurturing your own wellbeing while supporting your little one through this journey',
    icon: '💚',
    category: 'wellness',
    details: {
      subtitle: 'You matter too',
      articles: [
        {
          title: 'Color My Feelings: Therapeutic Mandala',
          link: '/color-my-feelings'
        }
      ],
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