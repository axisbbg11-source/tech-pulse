export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: 'ai' | 'gadgets' | 'startups' | 'programming' | 'security' | 'science';
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'OpenAI Unveils GPT-5: A Quantum Leap in Artificial General Intelligence',
    excerpt: 'OpenAI has announced GPT-5, promising unprecedented reasoning capabilities and multimodal understanding that rivals human cognitive abilities.',
    category: 'ai',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah'
    },
    date: '2026-03-30',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    featured: true
  },
  {
    id: '2',
    title: 'Apple Vision Pro 2: The Future of Spatial Computing is Here',
    excerpt: 'Apple\'s latest spatial computing device delivers stunning improvements in display technology and processing power.',
    category: 'gadgets',
    author: {
      name: 'Mike Rodriguez',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike'
    },
    date: '2026-03-29',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80'
  },
  {
    id: '3',
    title: 'Quantum Computing Startup Raises $500M to Build Commercial Quantum Computer',
    excerpt: 'QuantumCore Technologies secures massive funding to accelerate development of room-temperature quantum processors.',
    category: 'startups',
    author: {
      name: 'Emma Watson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma'
    },
    date: '2026-03-28',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80'
  },
  {
    id: '4',
    title: 'Rust 2026 Edition: The Programming Language That Changed Everything',
    excerpt: 'The latest Rust edition introduces revolutionary memory safety features and async programming improvements.',
    category: 'programming',
    author: {
      name: 'Alex Kumar',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex'
    },
    date: '2026-03-27',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
  },
  {
    id: '5',
    title: 'Google DeepMind Achieves Breakthrough in Protein Folding Prediction',
    excerpt: 'AlphaFold 3 can now predict protein interactions with unprecedented accuracy, revolutionizing drug discovery.',
    category: 'ai',
    author: {
      name: 'Dr. James Liu',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james'
    },
    date: '2026-03-26',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80'
  },
  {
    id: '6',
    title: 'Critical Zero-Day Vulnerability Discovered in Major Cloud Platforms',
    excerpt: 'Security researchers uncover a severe vulnerability affecting AWS, Azure, and Google Cloud infrastructure.',
    category: 'security',
    author: {
      name: 'CyberSec Expert',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cyber'
    },
    date: '2026-03-25',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80'
  },
  {
    id: '7',
    title: 'Tesla Unveils Next-Gen Neural Interface for Autonomous Vehicles',
    excerpt: 'Tesla\'s new FSD chip processes visual data 100x faster, enabling true level 5 autonomy.',
    category: 'gadgets',
    author: {
      name: 'Tech Reporter',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=reporter'
    },
    date: '2026-03-24',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80'
  },
  {
    id: '8',
    title: 'SpaceX Starship Completes First Orbital Refueling Mission',
    excerpt: 'Historical milestone marks crucial step toward Mars colonization and deep space exploration.',
    category: 'science',
    author: {
      name: 'Space Correspondent',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=space'
    },
    date: '2026-03-23',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&q=80'
  },
  {
    id: '9',
    title: 'GitHub Copilot X: AI-Powered Development Reaches New Heights',
    excerpt: 'The new AI coding assistant can now debug, refactor, and optimize code in real-time across 50+ languages.',
    category: 'programming',
    author: {
      name: 'Dev Community',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dev'
    },
    date: '2026-03-22',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80'
  },
  {
    id: '10',
    title: 'Anthropic Launches Claude 4 with Revolutionary Safety Features',
    excerpt: 'The new AI model demonstrates unprecedented alignment while maintaining creative capabilities.',
    category: 'ai',
    author: {
      name: 'AI Insights',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ai'
    },
    date: '2026-03-21',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80'
  },
  {
    id: '11',
    title: 'Tech Giants Form Coalition for Open Source AI Safety Standards',
    excerpt: 'Major companies unite to establish global guidelines for responsible AI development and deployment.',
    category: 'startups',
    author: {
      name: 'Industry Watch',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=watch'
    },
    date: '2026-03-20',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80'
  },
  {
    id: '12',
    title: 'Neuralink Human Trials Show Promising Results for Brain-Computer Interfaces',
    excerpt: 'First human patient demonstrates ability to control digital devices with thought alone.',
    category: 'science',
    author: {
      name: 'BioTech Today',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bio'
    },
    date: '2026-03-19',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80'
  }
];

export const getFeaturedArticle = () => articles.find(a => a.featured) || articles[0];

export const getArticlesByCategory = (category: Article['category']) =>
  articles.filter(a => a.category === category);

export const getTrendingArticles = () =>
  articles.slice(0, 5);

export const categories = [
  { id: 'ai', name: 'AI & ML', icon: '🤖', color: '#7b2ff7' },
  { id: 'gadgets', name: 'Gadgets', icon: '📱', color: '#00d4ff' },
  { id: 'startups', name: 'Startups', icon: '🚀', color: '#00e096' },
  { id: 'programming', name: 'Programming', icon: '💻', color: '#ff3d71' },
  { id: 'security', name: 'Security', icon: '🔒', color: '#ff9f1c' },
  { id: 'science', name: 'Science', icon: '🔬', color: '#2ec4b6' }
];