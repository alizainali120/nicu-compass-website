// Resource Cards Data Configuration
// Each card can be easily modified or new ones added here

const resourceCardsData = [
    {
        id: 'nicu101',
        title: 'NICU 101',
        icon: '📝',
        description: 'Essential basics for understanding your NICU experience',
        colorScheme: 'sage', // Will use sage green theme
        details: {
            subtitle: 'What You\'ll Find:',
            items: [
                'Common NICU terms explained in simple language',
                'Understanding medical equipment and monitors',
                'Daily routines and what to expect',
                'How to communicate with your care team',
                'Your rights as a parent in the NICU'
            ],
            actionText: '🔗 Access Full Guide',
            actionLink: '#'
        }
    },
    {
        id: 'stories',
        title: 'Parent Stories',
        icon: '💕',
        description: 'Real experiences from families who\'ve walked this path',
        colorScheme: 'sky', // Will use soft blue theme
        details: {
            subtitle: 'Stories of Hope & Strength:',
            items: [
                'First-time parents navigating the unexpected',
                'Celebrating small victories and milestones',
                'Coping strategies that really worked',
                'The journey from admission to going home',
                'Building bonds with your baby in the NICU'
            ],
            actionText: '🔗 Browse All Stories',
            actionLink: '#'
        }
    },
    {
        id: 'discharge',
        title: 'Going Home Guide',
        icon: '🏠',
        description: 'Everything you need for a smooth transition home',
        colorScheme: 'sage',
        details: {
            subtitle: 'Your Discharge Checklist:',
            items: [
                'Preparing your home environment',
                'Essential supplies and equipment',
                'Scheduling follow-up appointments',
                'Understanding medications and feeding',
                'When to call your pediatrician'
            ],
            actionText: '🔗 Download Checklist',
            actionLink: '#'
        }
    },
    {
        id: 'wellness',
        title: 'Parent Wellness',
        icon: '🌱',
        description: 'Taking care of yourself during this challenging time',
        colorScheme: 'mint',
        details: {
            subtitle: 'Caring for Yourself:',
            items: [
                'Managing stress and emotional overwhelm',
                'Finding time for rest and nutrition',
                'Connecting with support networks',
                'Balancing NICU visits with life',
                'Professional support resources'
            ],
            actionText: '🔗 Wellness Resources',
            actionLink: '#'
        }
    },
    {
        id: 'financial',
        title: 'Financial Support',
        icon: '💰',
        description: 'Understanding costs and finding financial assistance',
        colorScheme: 'sky',
        details: {
            subtitle: 'Financial Resources:',
            items: [
                'Understanding insurance coverage',
                'Hospital financial assistance programs',
                'Nonprofit organizations that help families',
                'Tax considerations and deductions',
                'Planning for ongoing medical costs'
            ],
            actionText: '🔗 Financial Guide',
            actionLink: '#'
        }
    },
    {
        id: 'emergency',
        title: 'Emergency Guide',
        icon: '🆘',
        description: 'Quick reference for urgent situations and concerns',
        colorScheme: 'coral',
        details: {
            subtitle: 'Emergency Information:',
            items: [
                'When to call your NICU immediately',
                'Signs that require urgent attention',
                'Important phone numbers to keep handy',
                'What to bring for unexpected visits',
                'After-hours contact information'
            ],
            actionText: '🔗 Emergency Contacts',
            actionLink: '#'
        }
    }
];