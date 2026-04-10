import { RoadmapData } from '@/store/useRoadmapStore';
import { OnboardingData } from '@/store/useOnboardingStore';

export function generateMockRoadmap(userData: OnboardingData): RoadmapData {
  const skill = userData.skill || 'Digital Marketing';
  const level = userData.level || 'Beginner';

  const roadmapConfigs: Record<string, { modules: Array<{ title: string; description: string; duration: string; topics: string[] }>, careers: Array<{ title: string; salaryRange: string; avgSalary: string; growth: string; demand: 'High' | 'Medium' | 'Low'; companies: string[]; skills: string[] }> }> = {
    'Digital Marketing': {
      modules: [
        { title: 'Marketing Fundamentals', description: 'Core concepts of digital marketing, funnels, and customer psychology', duration: '2 weeks', topics: ['Marketing Mix', 'Customer Journey', 'Brand Positioning', 'Market Research'] },
        { title: 'SEO & Content Strategy', description: 'Search engine optimization, keyword research, and content planning', duration: '3 weeks', topics: ['On-Page SEO', 'Technical SEO', 'Content Planning', 'Link Building'] },
        { title: 'Social Media Marketing', description: 'Platform-specific strategies for Instagram, LinkedIn, and YouTube', duration: '2 weeks', topics: ['Instagram Growth', 'LinkedIn Strategy', 'YouTube SEO', 'Community Building'] },
        { title: 'Paid Advertising', description: 'Google Ads, Meta Ads, and campaign optimization', duration: '3 weeks', topics: ['Google Ads', 'Meta Ads Manager', 'Campaign Optimization', 'A/B Testing'] },
        { title: 'Analytics & Data', description: 'Google Analytics, tracking, and data-driven decisions', duration: '2 weeks', topics: ['GA4 Setup', 'UTM Tracking', 'Dashboard Building', 'KPI Setting'] },
        { title: 'Email Marketing & Automation', description: 'Building funnels, email sequences, and marketing automation', duration: '2 weeks', topics: ['Email Copywriting', 'Automation Flows', 'Segmentation', 'A/B Testing'] },
      ],
      careers: [
        { title: 'Digital Marketing Manager', salaryRange: '₹6L - ₹18L', avgSalary: '₹10L/yr', growth: '+22%', demand: 'High', companies: ['Flipkart', 'Swiggy', 'Razorpay', 'PhonePe'], skills: ['SEO', 'Google Ads', 'Analytics', 'Content Strategy'] },
        { title: 'Performance Marketer', salaryRange: '₹8L - ₹24L', avgSalary: '₹14L/yr', growth: '+28%', demand: 'High', companies: ['Meesho', 'CRED', 'Dream11', 'Groww'], skills: ['Meta Ads', 'Google Ads', 'Data Analysis', 'CRO'] },
        { title: 'SEO Specialist', salaryRange: '₹4L - ₹15L', avgSalary: '₹8L/yr', growth: '+18%', demand: 'Medium', companies: ['Naukri', 'MakeMyTrip', 'Practo', 'UpGrad'], skills: ['Technical SEO', 'Content Strategy', 'Analytics', 'Link Building'] },
        { title: 'Content Strategist', salaryRange: '₹5L - ₹16L', avgSalary: '₹9L/yr', growth: '+20%', demand: 'High', companies: ['Zerodha', 'Notion', 'Freshworks', 'Zoho'], skills: ['Copywriting', 'SEO', 'Social Media', 'Brand Voice'] },
      ],
    },
    'Data Science': {
      modules: [
        { title: 'Python for Data Science', description: 'Python programming essentials, NumPy, and Pandas', duration: '3 weeks', topics: ['Python Basics', 'NumPy Arrays', 'Pandas DataFrames', 'Data Cleaning'] },
        { title: 'Statistics & Probability', description: 'Statistical foundations for data analysis and hypothesis testing', duration: '2 weeks', topics: ['Descriptive Stats', 'Probability', 'Hypothesis Testing', 'Distributions'] },
        { title: 'Data Visualization', description: 'Creating compelling visualizations with Matplotlib and Seaborn', duration: '2 weeks', topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Dashboard Design'] },
        { title: 'Machine Learning Basics', description: 'Supervised and unsupervised learning algorithms', duration: '4 weeks', topics: ['Linear Regression', 'Classification', 'Clustering', 'Model Evaluation'] },
        { title: 'Deep Learning', description: 'Neural networks, CNNs, and practical applications', duration: '3 weeks', topics: ['Neural Networks', 'TensorFlow', 'CNNs', 'Transfer Learning'] },
        { title: 'Capstone Project', description: 'End-to-end ML project from data collection to deployment', duration: '3 weeks', topics: ['Problem Framing', 'Feature Engineering', 'Model Deploy', 'Portfolio'] },
      ],
      careers: [
        { title: 'Data Scientist', salaryRange: '₹8L - ₹30L', avgSalary: '₹16L/yr', growth: '+32%', demand: 'High', companies: ['Google', 'Microsoft', 'Amazon', 'Flipkart'], skills: ['Python', 'ML', 'Statistics', 'SQL'] },
        { title: 'ML Engineer', salaryRange: '₹10L - ₹40L', avgSalary: '₹22L/yr', growth: '+38%', demand: 'High', companies: ['Meta', 'NVIDIA', 'Atlassian', 'Uber'], skills: ['Python', 'TensorFlow', 'MLOps', 'Cloud'] },
        { title: 'Data Analyst', salaryRange: '₹5L - ₹18L', avgSalary: '₹9L/yr', growth: '+25%', demand: 'High', companies: ['Paytm', 'Swiggy', 'Ola', 'BYJU\'S'], skills: ['SQL', 'Excel', 'Python', 'Tableau'] },
        { title: 'AI Research Scientist', salaryRange: '₹15L - ₹60L', avgSalary: '₹35L/yr', growth: '+45%', demand: 'Medium', companies: ['Google DeepMind', 'OpenAI', 'Microsoft Research', 'IISC'], skills: ['PyTorch', 'Math', 'Research', 'NLP'] },
      ],
    },
    'Web Development': {
      modules: [
        { title: 'HTML & CSS Mastery', description: 'Modern HTML5, CSS3, Flexbox, Grid, and responsive design', duration: '2 weeks', topics: ['Semantic HTML', 'CSS Grid', 'Flexbox', 'Responsive Design'] },
        { title: 'JavaScript Foundations', description: 'Core JS concepts, DOM manipulation, and modern ES6+', duration: '3 weeks', topics: ['Variables & Types', 'Functions & Closures', 'DOM API', 'Async/Await'] },
        { title: 'React.js', description: 'Component-based UI development with React', duration: '3 weeks', topics: ['Components', 'Hooks', 'State Management', 'React Router'] },
        { title: 'Node.js & Express', description: 'Backend development with Node.js, REST APIs', duration: '3 weeks', topics: ['Express.js', 'REST APIs', 'Authentication', 'Middleware'] },
        { title: 'Database & Deployment', description: 'MongoDB, PostgreSQL, and cloud deployment', duration: '2 weeks', topics: ['MongoDB', 'PostgreSQL', 'Docker', 'AWS/Vercel'] },
        { title: 'Full-Stack Project', description: 'Build a production-ready full-stack application', duration: '3 weeks', topics: ['System Design', 'CI/CD', 'Testing', 'Portfolio'] },
      ],
      careers: [
        { title: 'Frontend Developer', salaryRange: '₹6L - ₹25L', avgSalary: '₹12L/yr', growth: '+20%', demand: 'High', companies: ['Razorpay', 'Swiggy', 'Zerodha', 'CRED'], skills: ['React', 'TypeScript', 'CSS', 'Performance'] },
        { title: 'Full-Stack Developer', salaryRange: '₹8L - ₹35L', avgSalary: '₹18L/yr', growth: '+28%', demand: 'High', companies: ['Google', 'Microsoft', 'Amazon', 'Atlassian'], skills: ['React', 'Node.js', 'SQL', 'System Design'] },
        { title: 'Backend Developer', salaryRange: '₹7L - ₹30L', avgSalary: '₹15L/yr', growth: '+22%', demand: 'High', companies: ['Flipkart', 'PhonePe', 'Ola', 'Groww'], skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
        { title: 'DevOps Engineer', salaryRange: '₹10L - ₹35L', avgSalary: '₹20L/yr', growth: '+30%', demand: 'High', companies: ['Atlassian', 'VMware', 'Freshworks', 'Nutanix'], skills: ['Docker', 'K8s', 'AWS', 'CI/CD'] },
      ],
    },
    'UI/UX Design': {
      modules: [
        { title: 'Design Thinking', description: 'Human-centered design process and user research methods', duration: '2 weeks', topics: ['Empathy Maps', 'User Personas', 'Journey Maps', 'Problem Framing'] },
        { title: 'Visual Design Principles', description: 'Typography, color theory, layouts, and visual hierarchy', duration: '2 weeks', topics: ['Typography', 'Color Theory', 'Grid Systems', 'Visual Hierarchy'] },
        { title: 'Figma Mastery', description: 'Professional UI design and prototyping in Figma', duration: '3 weeks', topics: ['Components', 'Auto Layout', 'Prototyping', 'Design Systems'] },
        { title: 'UX Research & Testing', description: 'Usability testing, A/B testing, and iterative improvement', duration: '2 weeks', topics: ['Usability Testing', 'A/B Testing', 'Analytics', 'Heuristic Evaluation'] },
        { title: 'Interaction Design', description: 'Micro-interactions, animations, and motion design', duration: '2 weeks', topics: ['Motion Design', 'Micro-interactions', 'Transitions', 'Lottie'] },
        { title: 'Portfolio & Case Studies', description: 'Build a portfolio that gets you hired', duration: '2 weeks', topics: ['Case Study Writing', 'Portfolio Site', 'Presentation', 'Networking'] },
      ],
      careers: [
        { title: 'UI/UX Designer', salaryRange: '₹5L - ₹22L', avgSalary: '₹11L/yr', growth: '+25%', demand: 'High', companies: ['Swiggy', 'PhonePe', 'CRED', 'Razorpay'], skills: ['Figma', 'Research', 'Prototyping', 'Design Systems'] },
        { title: 'Product Designer', salaryRange: '₹10L - ₹35L', avgSalary: '₹18L/yr', growth: '+30%', demand: 'High', companies: ['Google', 'Microsoft', 'Atlassian', 'Notion'], skills: ['Strategy', 'Figma', 'Analytics', 'Systems'] },
        { title: 'UX Researcher', salaryRange: '₹8L - ₹25L', avgSalary: '₹14L/yr', growth: '+22%', demand: 'Medium', companies: ['Google', 'Meta', 'Amazon', 'Flipkart'], skills: ['User Research', 'Data Analysis', 'Surveys', 'A/B Testing'] },
        { title: 'Design Lead', salaryRange: '₹18L - ₹50L', avgSalary: '₹28L/yr', growth: '+18%', demand: 'Medium', companies: ['Uber', 'Airbnb', 'Stripe', 'CRED'], skills: ['Leadership', 'Strategy', 'Mentoring', 'Design Ops'] },
      ],
    },
  };

  const defaultConfig = roadmapConfigs['Digital Marketing'];
  const config = roadmapConfigs[skill] || defaultConfig;

  const levelStartIndex = level === 'Beginner' ? 0 : level === 'Basics' ? 1 : level === 'Intermediate' ? 2 : 3;

  const modules = config.modules.map((m, i) => ({
    id: `module-${i + 1}`,
    title: m.title,
    description: m.description,
    duration: m.duration,
    status: (i < levelStartIndex ? 'completed' : i === levelStartIndex ? 'current' : 'locked') as 'completed' | 'current' | 'locked',
    topics: m.topics,
    resources: generateResources(m.title, skill),
  }));

  const timeMap: Record<string, string> = {
    '30 min/day': '20 weeks',
    '1 hour/day': '14 weeks',
    '2 hours/day': '8 weeks',
    'Flexible': '12 weeks',
  };

  return {
    title: `${skill} Roadmap`,
    skill,
    estimatedTime: timeMap[userData.timeCommitment] || '14 weeks',
    totalModules: modules.length,
    completedModules: modules.filter(m => m.status === 'completed').length,
    modules,
    careerPaths: config.careers.map((c, i) => ({ ...c, id: `career-${i + 1}` })),
    weeklyPlan: generateWeeklyPlan(skill),
  };
}

function generateResources(moduleTitle: string, skill: string) {
  const platforms = ['Coursera', 'Udemy', 'YouTube', 'freeCodeCamp', 'Skillshare', 'LinkedIn Learning'];
  const types: Array<'video' | 'article' | 'course' | 'project'> = ['course', 'video', 'article', 'project'];

  return Array.from({ length: 4 }, (_, i) => ({
    id: `res-${moduleTitle.replace(/\s/g, '-').toLowerCase()}-${i}`,
    title: `${moduleTitle} - ${['Complete Guide', 'Crash Course', 'Deep Dive', 'Hands-On Project'][i]}`,
    platform: platforms[i % platforms.length],
    type: types[i],
    url: '#',
    duration: ['12 hours', '4 hours', '45 min read', '8 hours'][i],
    rating: [4.8, 4.6, 4.9, 4.7][i],
    price: i === 2 ? 'Free' : ['₹449', '₹649', 'Free', '₹899'][i],
    isFree: i === 2,
  }));
}

function generateWeeklyPlan(skill: string): { currentWeek: number; totalWeeks: number; days: Array<{ day: string; tasks: Array<{ id: string; title: string; type: 'learn' | 'practice' | 'project' | 'review'; duration: string; completed: boolean }>; timeEstimate: string }> } {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return {
    currentWeek: 1,
    totalWeeks: 14,
    days: days.map((day, i) => ({
      day,
      timeEstimate: i < 5 ? '1 hour' : i === 5 ? '2 hours' : '30 min',
      tasks: i === 6
        ? [{ id: `task-${day}-1`, title: 'Weekly Review & Reflection', type: 'review' as const, duration: '30 min', completed: false }]
        : [
            { id: `task-${day}-1`, title: `${skill} - Theory & Concepts`, type: 'learn' as const, duration: '30 min', completed: i < 2 },
            { id: `task-${day}-2`, title: `${skill} - Practice Exercise`, type: 'practice' as const, duration: i === 5 ? '1 hour' : '30 min', completed: i < 1 },
            ...(i === 5 ? [{ id: `task-${day}-3`, title: 'Mini Project Assignment', type: 'project' as const, duration: '1 hour', completed: false }] : []),
          ],
    })),
  };
}
