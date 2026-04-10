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
    'Product Mgmt': {
      modules: [
        { title: 'Product Thinking', description: 'Problem discovery, user needs, and product vision', duration: '2 weeks', topics: ['Problem Discovery', 'User Needs', 'Product Vision', 'OKRs'] },
        { title: 'Market & User Research', description: 'Competitive analysis, user interviews, and market sizing', duration: '2 weeks', topics: ['Competitive Analysis', 'User Interviews', 'TAM/SAM/SOM', 'Surveys'] },
        { title: 'Roadmap & Prioritization', description: 'Building product roadmaps and prioritization frameworks', duration: '2 weeks', topics: ['RICE Framework', 'MoSCoW', 'Story Mapping', 'Sprint Planning'] },
        { title: 'Metrics & Analytics', description: 'Defining KPIs, tracking metrics, and data-driven decisions', duration: '3 weeks', topics: ['North Star Metric', 'Funnel Analysis', 'A/B Testing', 'Cohort Analysis'] },
        { title: 'Stakeholder Management', description: 'Cross-functional collaboration, PRDs, and communication', duration: '2 weeks', topics: ['PRD Writing', 'Stakeholder Maps', 'Presentations', 'Negotiation'] },
        { title: 'Product Launch', description: 'Go-to-market strategy, launches, and iteration', duration: '2 weeks', topics: ['GTM Strategy', 'Launch Playbook', 'Post-Launch', 'Iteration'] },
      ],
      careers: [
        { title: 'Associate Product Manager', salaryRange: '₹8L - ₹20L', avgSalary: '₹12L/yr', growth: '+28%', demand: 'High', companies: ['Google', 'Flipkart', 'Razorpay', 'Swiggy'], skills: ['Analytics', 'SQL', 'Roadmapping', 'Agile'] },
        { title: 'Product Manager', salaryRange: '₹15L - ₹40L', avgSalary: '₹24L/yr', growth: '+32%', demand: 'High', companies: ['Microsoft', 'Amazon', 'Uber', 'PhonePe'], skills: ['Strategy', 'Data', 'PRDs', 'Leadership'] },
        { title: 'Senior PM / Group PM', salaryRange: '₹30L - ₹70L', avgSalary: '₹45L/yr', growth: '+20%', demand: 'Medium', companies: ['Google', 'Meta', 'Apple', 'Netflix'], skills: ['Vision', 'P&L', 'Team Building', 'Strategy'] },
        { title: 'Product Analyst', salaryRange: '₹6L - ₹18L', avgSalary: '₹10L/yr', growth: '+25%', demand: 'High', companies: ['Paytm', 'CRED', 'Meesho', 'Dream11'], skills: ['SQL', 'Python', 'Mixpanel', 'Excel'] },
      ],
    },
    'Cybersecurity': {
      modules: [
        { title: 'Networking Fundamentals', description: 'TCP/IP, DNS, firewalls, and network architecture', duration: '3 weeks', topics: ['TCP/IP', 'DNS & DHCP', 'Firewalls', 'Network Topologies'] },
        { title: 'Linux & System Admin', description: 'Linux command line, permissions, and server management', duration: '2 weeks', topics: ['Linux CLI', 'File Permissions', 'Process Management', 'Shell Scripting'] },
        { title: 'Security Fundamentals', description: 'CIA triad, encryption, authentication, and access control', duration: '3 weeks', topics: ['CIA Triad', 'Encryption', 'PKI', 'Access Control'] },
        { title: 'Ethical Hacking & Pentesting', description: 'Vulnerability scanning, exploitation, and penetration testing', duration: '4 weeks', topics: ['Nmap', 'Metasploit', 'Burp Suite', 'OWASP Top 10'] },
        { title: 'Incident Response & Forensics', description: 'Threat detection, incident handling, and digital forensics', duration: '2 weeks', topics: ['SIEM', 'Log Analysis', 'Malware Analysis', 'Forensics Tools'] },
        { title: 'Compliance & Certifications', description: 'Security frameworks, compliance, and certification prep', duration: '2 weeks', topics: ['ISO 27001', 'NIST', 'CEH Prep', 'CompTIA Security+'] },
      ],
      careers: [
        { title: 'Security Analyst', salaryRange: '₹5L - ₹18L', avgSalary: '₹10L/yr', growth: '+30%', demand: 'High', companies: ['TCS', 'Infosys', 'Wipro', 'Deloitte'], skills: ['SIEM', 'Networking', 'Incident Response', 'Linux'] },
        { title: 'Penetration Tester', salaryRange: '₹8L - ₹25L', avgSalary: '₹14L/yr', growth: '+35%', demand: 'High', companies: ['Payatu', 'CrowdStrike', 'Palo Alto', 'Cisco'], skills: ['Burp Suite', 'Metasploit', 'Python', 'OWASP'] },
        { title: 'Security Engineer', salaryRange: '₹12L - ₹40L', avgSalary: '₹22L/yr', growth: '+38%', demand: 'High', companies: ['Google', 'Amazon', 'Microsoft', 'Goldman Sachs'], skills: ['Cloud Security', 'IAM', 'DevSecOps', 'Encryption'] },
        { title: 'CISO', salaryRange: '₹40L - ₹1.2Cr', avgSalary: '₹65L/yr', growth: '+15%', demand: 'Medium', companies: ['Reliance', 'HDFC', 'Infosys', 'TCS'], skills: ['Risk Mgmt', 'Compliance', 'Leadership', 'Strategy'] },
      ],
    },
    'AI & Machine Learning': {
      modules: [
        { title: 'Python & Math Foundations', description: 'Python, linear algebra, calculus, and probability for ML', duration: '3 weeks', topics: ['Python', 'Linear Algebra', 'Calculus', 'Probability'] },
        { title: 'Classical Machine Learning', description: 'Supervised, unsupervised learning, and ensemble methods', duration: '3 weeks', topics: ['Regression', 'Trees & Forests', 'SVMs', 'Clustering'] },
        { title: 'Deep Learning & Neural Nets', description: 'Neural networks, CNNs, RNNs, and training techniques', duration: '4 weeks', topics: ['Backpropagation', 'CNNs', 'RNNs/LSTMs', 'Regularization'] },
        { title: 'NLP & Language Models', description: 'Text processing, transformers, and large language models', duration: '3 weeks', topics: ['Tokenization', 'Transformers', 'BERT/GPT', 'Fine-tuning'] },
        { title: 'Computer Vision', description: 'Image classification, object detection, and generative models', duration: '3 weeks', topics: ['Image Classification', 'Object Detection', 'GANs', 'Diffusion Models'] },
        { title: 'MLOps & Deployment', description: 'Model serving, monitoring, and production ML systems', duration: '2 weeks', topics: ['MLflow', 'Docker', 'Model Serving', 'A/B Testing'] },
      ],
      careers: [
        { title: 'ML Engineer', salaryRange: '₹12L - ₹45L', avgSalary: '₹25L/yr', growth: '+42%', demand: 'High', companies: ['Google', 'NVIDIA', 'Amazon', 'Microsoft'], skills: ['PyTorch', 'TensorFlow', 'MLOps', 'Python'] },
        { title: 'AI Research Scientist', salaryRange: '₹20L - ₹80L', avgSalary: '₹40L/yr', growth: '+48%', demand: 'High', companies: ['DeepMind', 'OpenAI', 'Meta AI', 'Google Brain'], skills: ['Math', 'PyTorch', 'Papers', 'Innovation'] },
        { title: 'NLP Engineer', salaryRange: '₹15L - ₹50L', avgSalary: '₹28L/yr', growth: '+52%', demand: 'High', companies: ['Google', 'Bing', 'Grammarly', 'Haptik'], skills: ['Transformers', 'Python', 'LLMs', 'Linguistics'] },
        { title: 'Computer Vision Engineer', salaryRange: '₹12L - ₹40L', avgSalary: '₹22L/yr', growth: '+35%', demand: 'High', companies: ['Tesla', 'NVIDIA', 'Qualcomm', 'Samsung'], skills: ['OpenCV', 'PyTorch', 'CNNs', 'CUDA'] },
      ],
    },
    'Mobile Development': {
      modules: [
        { title: 'Mobile UI Fundamentals', description: 'Mobile design patterns, navigation, and responsive layouts', duration: '2 weeks', topics: ['Mobile UX', 'Navigation Patterns', 'Touch Targets', 'Responsive Layout'] },
        { title: 'React Native Basics', description: 'Core concepts, components, and cross-platform development', duration: '3 weeks', topics: ['JSX', 'Core Components', 'Styling', 'Navigation'] },
        { title: 'State & Data Management', description: 'State management, API integration, and local storage', duration: '3 weeks', topics: ['Zustand/Redux', 'REST APIs', 'AsyncStorage', 'Caching'] },
        { title: 'Native Features', description: 'Camera, location, push notifications, and device APIs', duration: '2 weeks', topics: ['Camera', 'Geolocation', 'Push Notifications', 'Biometrics'] },
        { title: 'Performance & Testing', description: 'App optimization, profiling, and testing strategies', duration: '2 weeks', topics: ['Profiling', 'Lazy Loading', 'Jest', 'E2E Testing'] },
        { title: 'App Store Deployment', description: 'Publishing to App Store and Play Store', duration: '2 weeks', topics: ['App Signing', 'Store Listing', 'CI/CD', 'App Review'] },
      ],
      careers: [
        { title: 'React Native Developer', salaryRange: '₹6L - ₹25L', avgSalary: '₹14L/yr', growth: '+28%', demand: 'High', companies: ['Flipkart', 'Swiggy', 'PhonePe', 'CRED'], skills: ['React Native', 'TypeScript', 'Redux', 'APIs'] },
        { title: 'iOS Developer', salaryRange: '₹8L - ₹35L', avgSalary: '₹18L/yr', growth: '+22%', demand: 'High', companies: ['Apple', 'Google', 'Uber', 'PhonePe'], skills: ['Swift', 'SwiftUI', 'Core Data', 'UIKit'] },
        { title: 'Android Developer', salaryRange: '₹6L - ₹30L', avgSalary: '₹15L/yr', growth: '+20%', demand: 'High', companies: ['Google', 'Samsung', 'Paytm', 'Dream11'], skills: ['Kotlin', 'Jetpack', 'Firebase', 'MVVM'] },
        { title: 'Flutter Developer', salaryRange: '₹5L - ₹22L', avgSalary: '₹12L/yr', growth: '+35%', demand: 'High', companies: ['Google', 'Alibaba', 'BMW', 'Realtor'], skills: ['Dart', 'Flutter', 'Provider', 'Firebase'] },
      ],
    },
    'Cloud & DevOps': {
      modules: [
        { title: 'Cloud Computing Basics', description: 'Cloud models, services, and AWS/Azure/GCP overview', duration: '2 weeks', topics: ['IaaS/PaaS/SaaS', 'AWS Overview', 'Azure Overview', 'GCP Overview'] },
        { title: 'Linux & Networking', description: 'Linux administration, networking, and security fundamentals', duration: '3 weeks', topics: ['Linux CLI', 'Networking', 'SSH', 'Security Basics'] },
        { title: 'Containers & Docker', description: 'Containerization, Docker images, and Docker Compose', duration: '2 weeks', topics: ['Containers', 'Dockerfiles', 'Docker Compose', 'Registries'] },
        { title: 'Kubernetes & Orchestration', description: 'Container orchestration, deployments, and scaling', duration: '3 weeks', topics: ['Pods & Services', 'Deployments', 'Helm Charts', 'Auto-scaling'] },
        { title: 'CI/CD & Automation', description: 'Continuous integration, delivery, and infrastructure as code', duration: '3 weeks', topics: ['GitHub Actions', 'Jenkins', 'Terraform', 'Ansible'] },
        { title: 'Monitoring & SRE', description: 'Observability, monitoring, and site reliability engineering', duration: '2 weeks', topics: ['Prometheus', 'Grafana', 'ELK Stack', 'Incident Response'] },
      ],
      careers: [
        { title: 'DevOps Engineer', salaryRange: '₹8L - ₹35L', avgSalary: '₹18L/yr', growth: '+32%', demand: 'High', companies: ['Atlassian', 'Adobe', 'Freshworks', 'Nutanix'], skills: ['Docker', 'K8s', 'CI/CD', 'AWS'] },
        { title: 'Cloud Architect', salaryRange: '₹20L - ₹55L', avgSalary: '₹35L/yr', growth: '+28%', demand: 'High', companies: ['AWS', 'Microsoft', 'Google', 'IBM'], skills: ['AWS', 'Architecture', 'Security', 'Cost Optimization'] },
        { title: 'SRE Engineer', salaryRange: '₹12L - ₹45L', avgSalary: '₹25L/yr', growth: '+38%', demand: 'High', companies: ['Google', 'LinkedIn', 'Uber', 'Netflix'], skills: ['Linux', 'Python', 'Monitoring', 'Distributed Systems'] },
        { title: 'Platform Engineer', salaryRange: '₹15L - ₹40L', avgSalary: '₹22L/yr', growth: '+35%', demand: 'High', companies: ['Spotify', 'Stripe', 'Datadog', 'HashiCorp'], skills: ['Terraform', 'K8s', 'Go', 'Platform Design'] },
      ],
    },
    'Blockchain': {
      modules: [
        { title: 'Blockchain Fundamentals', description: 'Distributed ledger technology, consensus, and cryptography', duration: '2 weeks', topics: ['Hash Functions', 'Consensus', 'Merkle Trees', 'P2P Networks'] },
        { title: 'Ethereum & EVM', description: 'Ethereum architecture, accounts, transactions, and gas', duration: '2 weeks', topics: ['EVM', 'Accounts', 'Transactions', 'Gas Optimization'] },
        { title: 'Solidity Programming', description: 'Smart contract development with Solidity', duration: '4 weeks', topics: ['Solidity Basics', 'Data Types', 'Inheritance', 'Security Patterns'] },
        { title: 'DeFi & Token Standards', description: 'ERC-20, ERC-721, DeFi protocols, and yield farming', duration: '3 weeks', topics: ['ERC-20', 'ERC-721/NFTs', 'AMMs', 'Lending Protocols'] },
        { title: 'dApp Development', description: 'Building decentralized applications with Web3.js and React', duration: '3 weeks', topics: ['Web3.js', 'Ethers.js', 'IPFS', 'React + Web3'] },
        { title: 'Security & Auditing', description: 'Smart contract security, auditing, and best practices', duration: '2 weeks', topics: ['Reentrancy', 'Overflow', 'Audit Tools', 'Formal Verification'] },
      ],
      careers: [
        { title: 'Blockchain Developer', salaryRange: '₹10L - ₹40L', avgSalary: '₹20L/yr', growth: '+45%', demand: 'High', companies: ['Polygon', 'WazirX', 'CoinDCX', 'Ethereum Foundation'], skills: ['Solidity', 'Web3.js', 'Hardhat', 'DeFi'] },
        { title: 'Smart Contract Auditor', salaryRange: '₹15L - ₹60L', avgSalary: '₹30L/yr', growth: '+50%', demand: 'High', companies: ['OpenZeppelin', 'Trail of Bits', 'Consensys', 'ChainSecurity'], skills: ['Solidity', 'Security', 'Formal Verification', 'Fuzzing'] },
        { title: 'Web3 Full-Stack Dev', salaryRange: '₹8L - ₹35L', avgSalary: '₹18L/yr', growth: '+40%', demand: 'High', companies: ['Uniswap', 'Aave', 'Compound', 'Polygon'], skills: ['React', 'Solidity', 'Ethers.js', 'IPFS'] },
        { title: 'Protocol Researcher', salaryRange: '₹20L - ₹70L', avgSalary: '₹38L/yr', growth: '+35%', demand: 'Medium', companies: ['Ethereum Foundation', 'Paradigm', 'a16z', 'Flashbots'], skills: ['Cryptography', 'Game Theory', 'Math', 'Rust'] },
      ],
    },
    'Game Development': {
      modules: [
        { title: 'Game Design Fundamentals', description: 'Game mechanics, level design, and player psychology', duration: '2 weeks', topics: ['Game Mechanics', 'Level Design', 'Player Psychology', 'Game Loops'] },
        { title: 'Unity Basics', description: 'Unity engine, C# scripting, and 2D game development', duration: '3 weeks', topics: ['Unity Editor', 'C# Basics', '2D Physics', 'Sprites & Animation'] },
        { title: '3D Game Development', description: '3D modeling, lighting, and environment design in Unity', duration: '3 weeks', topics: ['3D Objects', 'Materials', 'Lighting', 'Cameras'] },
        { title: 'Game AI & Physics', description: 'AI pathfinding, physics systems, and particle effects', duration: '3 weeks', topics: ['NavMesh', 'State Machines', 'Raycasting', 'Particle Systems'] },
        { title: 'Multiplayer & Networking', description: 'Online multiplayer, matchmaking, and server architecture', duration: '2 weeks', topics: ['Netcode', 'Photon', 'Matchmaking', 'Lag Compensation'] },
        { title: 'Publishing & Monetization', description: 'Game publishing, ad integration, and monetization', duration: '2 weeks', topics: ['App Store', 'Steam', 'Ad SDKs', 'In-App Purchases'] },
      ],
      careers: [
        { title: 'Unity Game Developer', salaryRange: '₹5L - ₹20L', avgSalary: '₹10L/yr', growth: '+22%', demand: 'High', companies: ['Ubisoft', 'Zynga', 'nCore Games', 'Moonfrog'], skills: ['Unity', 'C#', '3D Math', 'Physics'] },
        { title: 'Unreal Engine Developer', salaryRange: '₹8L - ₹30L', avgSalary: '₹16L/yr', growth: '+25%', demand: 'Medium', companies: ['Epic Games', 'EA', 'Ubisoft', 'Rockstar'], skills: ['Unreal', 'C++', 'Blueprints', 'Shaders'] },
        { title: 'Game Designer', salaryRange: '₹4L - ₹18L', avgSalary: '₹9L/yr', growth: '+18%', demand: 'Medium', companies: ['Supercell', 'Riot', 'nCore', 'Hike'], skills: ['Level Design', 'Balancing', 'UX', 'Narrative'] },
        { title: 'Technical Artist', salaryRange: '₹6L - ₹25L', avgSalary: '₹13L/yr', growth: '+20%', demand: 'Medium', companies: ['Ubisoft', 'EA', 'Unity', 'Adobe'], skills: ['Shaders', '3D Modeling', 'Pipeline', 'VFX'] },
      ],
    },
    'Content Creation': {
      modules: [
        { title: 'Content Strategy Basics', description: 'Niche selection, audience research, and content planning', duration: '2 weeks', topics: ['Niche Selection', 'Audience Research', 'Content Calendar', 'Brand Voice'] },
        { title: 'Writing & Copywriting', description: 'Blog writing, copywriting formulas, and SEO content', duration: '3 weeks', topics: ['Headlines', 'AIDA Framework', 'SEO Writing', 'Storytelling'] },
        { title: 'Video Production', description: 'YouTube, filming, editing, and thumbnail design', duration: '3 weeks', topics: ['Scripting', 'Filming', 'Editing Tools', 'Thumbnails'] },
        { title: 'Social Media Growth', description: 'Platform algorithms, growth hacking, and engagement', duration: '2 weeks', topics: ['Algorithm Hacking', 'Reels Strategy', 'Engagement', 'Hashtags'] },
        { title: 'Monetization', description: 'Brand deals, affiliate marketing, and digital products', duration: '2 weeks', topics: ['Brand Deals', 'Affiliate Marketing', 'Digital Products', 'Memberships'] },
        { title: 'Building a Personal Brand', description: 'Authority building, community, and long-term growth', duration: '2 weeks', topics: ['Personal Branding', 'Community Building', 'Email Lists', 'Scaling'] },
      ],
      careers: [
        { title: 'Content Creator / YouTuber', salaryRange: '₹2L - ₹50L+', avgSalary: '₹8L/yr', growth: '+40%', demand: 'High', companies: ['YouTube', 'Instagram', 'Substack', 'Patreon'], skills: ['Video Editing', 'Scripting', 'SEO', 'Thumbnails'] },
        { title: 'Copywriter', salaryRange: '₹4L - ₹15L', avgSalary: '₹8L/yr', growth: '+22%', demand: 'High', companies: ['Zomato', 'Swiggy', 'Dunzo', 'Slice'], skills: ['Copywriting', 'SEO', 'Brand Voice', 'Ads'] },
        { title: 'Social Media Manager', salaryRange: '₹3L - ₹12L', avgSalary: '₹6L/yr', growth: '+28%', demand: 'High', companies: ['Agencies', 'Startups', 'D2C Brands', 'SaaS'], skills: ['Content Planning', 'Analytics', 'Design', 'Community'] },
        { title: 'Technical Writer', salaryRange: '₹5L - ₹20L', avgSalary: '₹10L/yr', growth: '+18%', demand: 'Medium', companies: ['Google', 'Microsoft', 'Stripe', 'Razorpay'], skills: ['Documentation', 'Markdown', 'APIs', 'Developer Tools'] },
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
