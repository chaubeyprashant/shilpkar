import { IMAGES } from './images';

export const promoMessages = [
  { text: '10% OFF on Ready to Ship Artworks | Ships in 3–4 Days', link: '#gallery' },
  { text: 'Handpainted, Resin & Lipan Art · Worldwide Shipping', link: '#contact' },
  { text: 'See how collectors style our artworks at home', link: '#homes' },
];

export const heroSlides = [
  {
    image: IMAGES.carouselArtist,
    alt: 'artsdivine artist at work in the studio',
    title: 'Crafting Art, Touching Souls',
    subtitle: '10+ Years of Handpainted · Resin · Lippan Excellence',
    cta: 'Explore Collection',
    href: '#gallery',
    fit: 'cover',
    objectPosition: 'center 40%',
    overlay: 'left',
  },
  {
    image: IMAGES.carouselBrand,
    alt: 'artsdivine brand — handmade art with divine inspiration',
    title: '',
    subtitle: '',
    cta: 'Shop Artworks',
    href: '#gallery',
    fit: 'contain',
    objectPosition: 'center center',
    lightOverlay: true,
    bgColor: '#f7f2ea',
  },
  {
    image: IMAGES.carouselHome,
    alt: 'Mandala artwork styled in a modern living room',
    title: 'Art That Elevates Your Space',
    subtitle: 'See how collectors style artsdivine pieces at home',
    cta: 'View In Homes',
    href: '#homes',
    fit: 'cover',
    objectPosition: 'center center',
    overlay: 'left',
  },
];

export const quickCategories = [
  {
    title: 'All Handpainted Artworks',
    image: IMAGES.painting,
    href: '#gallery',
  },
  {
    title: 'Resin Art Collection',
    image: IMAGES.resin,
    href: '#artforms',
  },
  {
    title: 'Spiritual & Devotional',
    image: IMAGES.colorfulArt,
    href: '#gallery',
  },
  {
    title: 'Ready to Ship · 10% OFF',
    image: IMAGES.craft,
    href: '#gallery',
  },
];

export const products = [
  {
    id: 1,
    title: 'Divine Krishna in Pichwai Style',
    artist: 'artsdivine',
    size: '24 in × 36 in',
    status: 'Made To Order',
    price: 28000,
    salePrice: null,
    image: IMAGES.painting,
    artform: 'Pichwai',
  },
  {
    id: 2,
    title: 'Ocean Wave Resin Wall Art',
    artist: 'artsdivine',
    size: '18 in × 24 in',
    status: 'Ready To Ship',
    price: 8500,
    salePrice: 7650,
    image: IMAGES.resin,
    artform: 'Resin Art',
  },
  {
    id: 3,
    title: 'Sacred Mandala Composition',
    artist: 'artsdivine',
    size: '20 in × 20 in',
    status: 'Made To Order',
    price: 12000,
    salePrice: null,
    image: IMAGES.mandala,
    artform: 'Mandala',
  },
  {
    id: 4,
    title: 'Lipan Art Wall Panel',
    artist: 'artsdivine',
    size: '18 in × 24 in',
    status: 'Made To Order',
    price: 18500,
    salePrice: null,
    image: IMAGES.craft,
    artform: 'Lippan',
  },
  {
    id: 5,
    title: 'Madhubani Folk Narrative',
    artist: 'artsdivine',
    size: '22 in × 30 in',
    status: 'Ready To Ship',
    price: 22000,
    salePrice: 19800,
    image: IMAGES.colorfulArt,
    artform: 'Madhubani',
  },
  {
    id: 6,
    title: 'Geode Resin Coaster Set (Set of 4)',
    artist: 'artsdivine',
    size: '4 in × 4 in each',
    status: 'Ready To Ship',
    price: 3200,
    salePrice: null,
    image: IMAGES.resin,
    artform: 'Resin Art',
  },
  {
    id: 7,
    title: 'Tree of Life in Kalamkari',
    artist: 'artsdivine',
    size: '30 in × 45 in',
    status: 'Made To Order',
    price: 45000,
    salePrice: null,
    image: IMAGES.studio,
    artform: 'Kalamkari',
  },
  {
    id: 8,
    title: 'Floral Resin Serving Tray',
    artist: 'artsdivine',
    size: '14 in × 20 in',
    status: 'Made To Order',
    price: 6500,
    salePrice: null,
    image: IMAGES.supplies,
    artform: 'Resin Art',
  },
];

export const popularThemes = [
  'Mythology', 'Resin Art', 'Tree of Life', 'Lotus', 'Religious', 'Krishna',
  'Nature', 'Mandala', 'Lippan', 'Madhubani', 'Spiritual', 'Pichwai', 'Custom',
];

export const artforms = [
  { name: 'Resin Art', desc: 'Glossy fluid pours, geodes, coasters, and wall pieces with pigments, flowers, and gold leaf.', image: IMAGES.resin },
  { name: 'Madhubani', desc: 'Bold geometric folk art from Bihar with intricate patterns.', image: IMAGES.colorfulArt },
  { name: 'Pichwai', desc: 'Devotional Rajasthani paintings of Krishna and sacred motifs.', image: IMAGES.painting },
  { name: 'Kalamkari', desc: 'Hand-painted fabric art with floral and mythological narratives.', image: IMAGES.studio },
  { name: 'Lippan Kaam', desc: 'Three-dimensional mud and mirror work from Gujarat.', image: IMAGES.craft },
  { name: 'Mandala', desc: 'Sacred circular compositions for meditation and decor.', image: IMAGES.mandala },
  { name: 'Spiritual Art', desc: 'Contemporary devotionals blending tradition, resin, and modern palettes.', image: IMAGES.supplies },
];

export const priceBrackets = [
  { label: 'Under ₹5,000', max: 5000 },
  { label: 'Under ₹15,000', max: 15000 },
  { label: 'Under ₹25,000', max: 25000 },
  { label: 'Under ₹50,000', max: 50000 },
  { label: 'Under ₹1,00,000', max: 100000 },
  { label: 'Luxury ₹1L+', max: null },
];

export const workshops = [
  { title: 'Resin Art Masterclass', instructor: 'artsdivine', price: 1299, image: IMAGES.resin },
  { title: 'Lippan Art Workshop', instructor: 'artsdivine', price: 999, image: IMAGES.craft },
  { title: 'Madhubani Masterclass', instructor: 'artsdivine', price: 999, image: IMAGES.colorfulArt },
  { title: 'Mandala & Spiritual Art', instructor: 'artsdivine', price: 999, image: IMAGES.mandala },
  { title: 'Pichwai Techniques', instructor: 'artsdivine', price: 1299, image: IMAGES.painting },
];

export const stats = [
  { value: '10+', label: 'Years of Artistry' },
  { value: '500+', label: 'Artworks Created' },
  { value: '13+', label: 'Artforms incl. Resin' },
  { value: '100+', label: 'Happy Collectors' },
];

export const trustBadges = [
  { title: 'Authentic', subtitle: 'Handmade Artworks' },
  { title: 'Worldwide', subtitle: 'Shipping' },
  { title: 'Certificate', subtitle: 'Of Authenticity' },
  { title: 'Secure', subtitle: 'Checkout' },
  { title: 'Safe', subtitle: 'Packaging' },
  { title: 'Artist', subtitle: 'First Pricing' },
];

export const customerHomes = [
  IMAGES.home1,
  IMAGES.home2,
  IMAGES.home3,
  IMAGES.home4,
];

export const formatPrice = (n) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

export const socialLinks = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/artsdivine107/',
    handle: '@artsdivine107',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/share/14cUZT2wkQt/',
    handle: 'artsdivine',
  },
];

export const contactEmail = 'divinearts134@gmail.com';
