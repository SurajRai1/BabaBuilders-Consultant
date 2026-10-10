/**
 * Centralized site configuration and data constants for BABA Builders & Consultant.
 * Editing business info, contact details, social links, or portfolio items here
 * updates them across the entire application consistently.
 */

export const SITE_CONFIG = {
  name: 'BABA Builders & Consultant',
  shortName: 'BABA',
  subheading: 'Builders & Consultant',
  tagline: 'Build a place to belong.',
  description:
    'Thoughtful design, trusted guidance and construction with purpose. BABA Builders & Consultant helps shape your vision from naksha to completion.',
  location: {
    city: 'Sunsari',
    province: 'Koshi Province',
    country: 'Nepal',
    addressLine1: 'Dharan Road, Sunsari',
    addressLine2: 'Koshi Province, Nepal',
    fullAddress: 'Dharan Road, Sunsari, Koshi Province, Nepal',
    coordinates: "26° 39' N / 87° 20' E",
    since: '2022',
  },
  contact: {
    phone: '+977 980-0000000',
    phoneTel: '+9779800000000',
    email: 'hello@bababuilders.com',
    hours: 'Mon – Sat, 9AM – 6PM',
    responseNotice: 'We respond within 24 hours',
  },
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
  },
} as const;

export const NAV_CHAPTERS = [
  {
    num: '01',
    title: 'About Us',
    desc: 'The BABA standard & building legacy in Sunsari',
    href: '#about',
  },
  {
    num: '02',
    title: 'Our Approach',
    desc: 'Architectural planning, engineering & municipal naksha',
    href: '#approach',
  },
  {
    num: '03',
    title: 'Services',
    desc: 'Full-cycle consultancy, supervision & finishing',
    href: '#services',
  },
  {
    num: '04',
    title: 'Selected Works',
    desc: 'Enduring residential homes and commercial builds',
    href: '#projects',
  },
  {
    num: '05',
    title: 'Contact Us',
    desc: 'Get in touch with our architects & engineers',
    href: '#contact',
  },
] as const;

export const MARQUEE_ITEMS = [
  'Naksha Pass',
  'House Design',
  'Construction',
  'Consultancy',
  'Renovation',
  'Estimation',
  'Supervision',
  'Architecture',
] as const;

export const APPROACH_STEPS = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We listen closely to your needs, your site and the life you want to create there.',
  },
  {
    number: '02',
    title: 'Shape',
    description:
      'We turn the possibilities into a considered plan that is practical, personal and ready to move forward.',
  },
  {
    number: '03',
    title: 'Deliver',
    description:
      'We stay close to the work, protecting the vision through every stage of construction.',
  },
] as const;

export const SERVICES_DATA = [
  {
    number: '01',
    activeNum: '01',
    totalNum: '03',
    title: 'Planning & Approval',
    subtitle: 'Naksha pass, permits & legal clearance',
    description:
      'Every enduring home begins with absolute clarity. We translate your family lifestyle, budget, and land dimensions into precision architectural drawings and municipality-approved blueprints — securing fast municipal pass before breaking ground.',
    tag: 'Municipality Approved',
    cta: 'Start Your Plan',
    image:
      'https://images.pexels.com/photos/8961133/pexels-photo-8961133.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    number: '02',
    activeNum: '02',
    totalNum: '03',
    title: 'Design & Visualization',
    subtitle: 'Modern aesthetics & spatial harmony',
    description:
      'Thoughtful spaces sculpted around sunlight, ventilation, and contemporary living. Photorealistic 3D exterior elevations and interior floor plans let you walk through and refine every space before the first brick is laid.',
    tag: '3D & Engineering',
    cta: 'Explore 3D Design',
    image: '/images/project-modern-1.png',
  },
  {
    number: '03',
    activeNum: '03',
    totalNum: '03',
    title: 'Construction & Advisory',
    subtitle: 'From foundation to turnkey finishing',
    description:
      'Reliable on-site supervision, material estimation, contractor hiring, and complete structural management. From the first concrete pour to interior finishing, our licensed engineers protect your investment till the keys are in your hand.',
    tag: 'Turnkey Building',
    cta: 'Build With Us',
    image:
      'https://images.pexels.com/photos/11429199/pexels-photo-11429199.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
] as const;

export const PROJECTS_DATA = [
  {
    title: 'The Courtyard Residence',
    category: 'Residential / New Build',
    image: '/images/project-modern-1.png',
    size: 'large',
  },
  {
    title: 'A Quiet Modern Home',
    category: 'Residential / Design',
    image: '/images/project-modern-2.png',
    size: 'small',
  },
  {
    title: 'Crafted From The Ground Up',
    category: 'Construction / Supervision',
    image: '/images/project-modern-3.png',
    size: 'small',
  },
  {
    title: 'Light, Space & Belonging',
    category: 'Residential / Architecture',
    image: '/images/project-villa.png',
    size: 'large',
  },
] as const;
