export const company = {
  brand: 'UPos',
  legalName: 'UPos',
  email: 'support@upos.ge',
  phone: '+995 32 200 00 00',
  address: 'Tbilisi, Georgia',
  supportHours: 'Monday–Friday, 09:00–18:00 (GET)',
  responseTime: 'within 2 business days',
  lastUpdated: '20 September 2026',
} as const;

export const plans = [
  {
    name: 'Starter',
    description: 'For one location getting its daily operations under control.',
    monthly: 29,
    annual: 290,
    locations: '1 location',
    users: 'Up to 5 users',
    features: ['POS & receipts', 'Products and inventory', 'Cash shifts', 'Daily sales insights', 'Email support'],
    priceEnv: 'PUBLIC_PADDLE_PRICE_STARTER',
    featured: false,
  },
  {
    name: 'Growth',
    description: 'For growing teams that need tighter controls and richer reporting.',
    monthly: 59,
    annual: 590,
    locations: 'Up to 3 locations',
    users: 'Up to 20 users',
    features: ['Everything in Starter', 'Returns and advanced permissions', 'Multi-location inventory', 'Detailed reports', 'Priority email support'],
    priceEnv: 'PUBLIC_PADDLE_PRICE_GROWTH',
    featured: true,
  },
] as const;

export const navigation = [
  { label: 'Product', href: '#product' },
  { label: 'How it works', href: '#workflow' },
  { label: 'Pricing', href: 'pricing/' },
  { label: 'FAQ', href: '#faq' },
] as const;
