import { ProgramItem, FacilityItem, WhyChooseItem, NavItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Fitness Era Barkat Market Garden Town',
  shortName: 'Fitness Era',
  subLocation: 'Garden Town • Barkat Market',
  address: '47 New, Babar Block, Garden Town, Lahore, 54000, Pakistan',
  street: '47 New, Babar Block, Garden Town',
  city: 'Lahore, Pakistan',
  postalCode: '54000',
  phone: '03004445883',
  phoneFormatted: '0300 4445883',
  phoneTel: '+923004445883',
  googleMapsUrl: 'https://maps.app.goo.gl/yisiJBrj46HQUEg88',
  tagline: 'BUILD YOUR STRONGER ERA.',
  description: 'Train with purpose. Build strength, improve your fitness, and become the strongest version of yourself at Fitness Era Barkat Market Garden Town.',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Membership', href: '#membership' },
  { label: 'Contact', href: '#contact' },
];

export const TRUST_STRIP_ITEMS = [
  { number: '01', title: 'Train With Purpose', subtitle: 'Targeted strength training' },
  { number: '02', title: 'Modern Training Environment', subtitle: 'Industrial athletic aesthetic' },
  { number: '03', title: 'Strength & Conditioning', subtitle: 'Progressive overload focus' },
  { number: '04', title: 'Garden Town, Lahore', subtitle: 'Babar Block, Barkat Market' },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    number: '01',
    title: 'TRAINING FOCUSED',
    description: 'A dedicated environment designed to help you stay focused on your workout without unnecessary distractions.',
    iconName: 'Dumbbell',
  },
  {
    number: '02',
    title: 'MODERN EQUIPMENT',
    description: 'A broad range of heavy-duty training equipment for serious strength, resistance, and fitness sessions.',
    iconName: 'Layers',
  },
  {
    number: '03',
    title: 'MOTIVATING ATMOSPHERE',
    description: 'A high-energy industrial environment with focused lighting that keeps your workout engaging and disciplined.',
    iconName: 'Flame',
  },
  {
    number: '04',
    title: 'CENTRAL GARDEN TOWN LOCATION',
    description: 'Conveniently located in Babar Block, Garden Town, Lahore, with easy access right near Barkat Market.',
    iconName: 'MapPin',
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'strength-training',
    title: 'STRENGTH TRAINING',
    category: 'Foundational Resistance',
    description: 'Build strength, power, and confidence through structured resistance training and progressive overload.',
    image: '/assets/images/programs_strength_1789251417037.jpg',
    highlights: ['Compound movements', 'Heavy barbell & plate training', 'Core stability & bone density'],
  },
  {
    id: 'muscle-building',
    title: 'MUSCLE BUILDING',
    category: 'Hypertrophy & Physique',
    description: 'Train with progressive resistance and consistency to support your physique goals and muscular development.',
    image: '/assets/images/about_strength_gym_1789251406394.jpg',
    highlights: ['Targeted isolation exercises', 'Dumbbell & cable volume work', 'Structural symmetry'],
  },
  {
    id: 'fat-loss-fitness',
    title: 'FAT LOSS & FITNESS',
    category: 'Conditioning & Stamina',
    description: 'Combine resistance training and conditioning to create a stronger, fitter routine that boosts metabolic rate.',
    image: '/assets/images/lifestyle_results_1789251440054.jpg',
    highlights: ['High-density circuit lifting', 'Metabolic conditioning', 'Lean muscle retention'],
  },
  {
    id: 'general-fitness',
    title: 'GENERAL FITNESS',
    category: 'Longevity & Health',
    description: 'Build a sustainable training habit and improve everyday functional strength, posture, and cardiovascular health.',
    image: '/assets/images/facilities_gym_floor_1789251429061.jpg',
    highlights: ['Joint mobility & posture', 'Sustainable workout habit', 'Daily energy & vitality'],
  },
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'heavy-strength-floor',
    title: 'Strength Training & Power Racks',
    category: 'Main Lifting Arena',
    description: 'Heavy-duty power racks, Olympic barbells, and durable bumper plates calibrated for serious lifters.',
    image: '/assets/images/facilities_gym_floor_1789251429061.jpg',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 'cable-machines',
    title: 'Precision Dual Cable Stations',
    category: 'Cable & Pulley Suite',
    description: 'Smooth multi-angle cable crossover towers and adjustable weight stacks for targeted muscle resistance.',
    image: '/assets/images/cable_machine_zone_1789251451845.jpg',
    span: 'col-span-1 md:col-span-1 row-span-1',
  },
  {
    id: 'free-weights-racks',
    title: 'Dumbbells & Commercial Benches',
    category: 'Free Weight Zone',
    description: 'High-capacity dumbbell racks with knurled steel grips and heavy incline/flat bench stations.',
    image: '/assets/images/about_strength_gym_1789251406394.jpg',
    span: 'col-span-1 md:col-span-1 row-span-1',
  },
  {
    id: 'main-gym-interior',
    title: 'Modern Industrial Gym Interior',
    category: 'Atmosphere & Architecture',
    description: 'Dark matte finishes, cool linear architectural lighting, and electric blue mood accents for intense workout focus.',
    image: '/assets/images/hero_gym_interior_1789251392871.jpg',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
];
