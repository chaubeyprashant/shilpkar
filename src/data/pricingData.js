import { formatPrice } from './siteData';

export const serviceTypes = [
  { id: 'resin', label: 'Resin Art' },
  { id: 'painting', label: 'Handpainted Artwork' },
  { id: 'lippan', label: 'Lippan Art' },
  { id: 'commission', label: 'Custom Commission' },
  { id: 'workshop', label: 'Workshop / Masterclass' },
];

export const resinProducts = [
  { id: 'coasters', label: 'Coaster Set (Set of 4)', baseMin: 2500, baseMax: 3500 },
  { id: 'tray', label: 'Serving Tray', baseMin: 5500, baseMax: 7500 },
  { id: 'wall-small', label: 'Wall Art — Small (up to 12×16 in)', baseMin: 6000, baseMax: 9000 },
  { id: 'wall-medium', label: 'Wall Art — Medium (up to 18×24 in)', baseMin: 7500, baseMax: 11000 },
  { id: 'wall-large', label: 'Wall Art — Large (up to 24×36 in)', baseMin: 12000, baseMax: 18000 },
];

export const paintingArtforms = [
  { id: 'madhubani', label: 'Madhubani', baseMin: 8000, baseMax: 22000 },
  { id: 'pichwai', label: 'Pichwai', baseMin: 18000, baseMax: 35000 },
  { id: 'kalamkari', label: 'Kalamkari', baseMin: 20000, baseMax: 50000 },
  { id: 'mandala', label: 'Mandala', baseMin: 6000, baseMax: 14000 },
  { id: 'spiritual', label: 'Spiritual / Devotional', baseMin: 10000, baseMax: 30000 },
];

export const sizeOptions = [
  { id: 'small', label: 'Small', multiplier: 0.85 },
  { id: 'medium', label: 'Medium', multiplier: 1 },
  { id: 'large', label: 'Large', multiplier: 1.35 },
  { id: 'xlarge', label: 'Extra Large', multiplier: 1.75 },
];

export const complexityOptions = [
  { id: 'standard', label: 'Standard', multiplier: 1 },
  { id: 'detailed', label: 'Detailed Work', multiplier: 1.15 },
  { id: 'premium', label: 'Premium (Gold Leaf / 3D)', multiplier: 1.28 },
];

export const frameOptions = [
  { id: 'none', label: 'Unframed', multiplier: 1 },
  { id: 'basic', label: 'Basic Frame', multiplier: 1.1 },
  { id: 'premium', label: 'Premium Frame', multiplier: 1.2 },
];

export const lippanSizes = [
  { id: 'panel-small', label: 'Small Panel (up to 12×16 in)', baseMin: 9000, baseMax: 14000 },
  { id: 'panel-medium', label: 'Medium Panel (up to 18×24 in)', baseMin: 15000, baseMax: 22000 },
  { id: 'panel-large', label: 'Large Panel (up to 24×36 in)', baseMin: 22000, baseMax: 35000 },
  { id: 'mural', label: 'Wall Mural / Feature Wall', baseMin: 35000, baseMax: 80000 },
];

export const workshopTypes = [
  { id: 'resin-workshop', label: 'Resin Art Masterclass', baseMin: 999, baseMax: 1499 },
  { id: 'lippan-workshop', label: 'Lippan Art Workshop', baseMin: 899, baseMax: 1199 },
  { id: 'madhubani-workshop', label: 'Madhubani Masterclass', baseMin: 899, baseMax: 1199 },
  { id: 'mandala-workshop', label: 'Mandala & Spiritual Art', baseMin: 899, baseMax: 1199 },
  { id: 'pichwai-workshop', label: 'Pichwai Techniques', baseMin: 1199, baseMax: 1499 },
];

export const workshopFormats = [
  { id: 'online', label: 'Online Live Session', multiplier: 1 },
  { id: 'in-studio', label: 'In-Studio (Delhi NCR)', multiplier: 1.25 },
  { id: 'private', label: 'Private 1-on-1 Session', multiplier: 1.6 },
];

const round = (n) => Math.round(n / 100) * 100;

export const calculateEstimate = ({
  serviceType,
  resinProduct,
  paintingArtform,
  size,
  complexity,
  framing,
  lippanSize,
  workshopType,
  workshopFormat,
}) => {
  let min = 0;
  let max = 0;
  let breakdown = [];

  const sizeMul = sizeOptions.find((s) => s.id === size)?.multiplier ?? 1;
  const complexityMul = complexityOptions.find((c) => c.id === complexity)?.multiplier ?? 1;
  const frameMul = frameOptions.find((f) => f.id === framing)?.multiplier ?? 1;

  if (serviceType === 'resin') {
    const product = resinProducts.find((p) => p.id === resinProduct) || resinProducts[2];
    min = product.baseMin;
    max = product.baseMax;
    breakdown.push({ label: product.label, value: `${formatPrice(min)} – ${formatPrice(max)}` });

    if (complexity !== 'standard') {
      min = round(min * complexityMul);
      max = round(max * complexityMul);
      breakdown.push({
        label: complexityOptions.find((c) => c.id === complexity)?.label,
        value: `+${Math.round((complexityMul - 1) * 100)}%`,
      });
    }
  }

  if (serviceType === 'painting' || serviceType === 'commission') {
    const art = paintingArtforms.find((a) => a.id === paintingArtform) || paintingArtforms[0];
    min = round(art.baseMin * sizeMul);
    max = round(art.baseMax * sizeMul);
    breakdown.push({ label: art.label, value: 'Base artform rate' });
    breakdown.push({
      label: sizeOptions.find((s) => s.id === size)?.label || 'Medium',
      value: `×${sizeMul}`,
    });

    if (complexity !== 'standard') {
      min = round(min * complexityMul);
      max = round(max * complexityMul);
      breakdown.push({
        label: complexityOptions.find((c) => c.id === complexity)?.label,
        value: `+${Math.round((complexityMul - 1) * 100)}%`,
      });
    }

    if (framing !== 'none') {
      min = round(min * frameMul);
      max = round(max * frameMul);
      breakdown.push({
        label: frameOptions.find((f) => f.id === framing)?.label,
        value: `+${Math.round((frameMul - 1) * 100)}%`,
      });
    }

    if (serviceType === 'commission') {
      min = round(min * 1.08);
      max = round(max * 1.12);
      breakdown.push({ label: 'Custom commission scope', value: '+8–12%' });
    }
  }

  if (serviceType === 'lippan') {
    const panel = lippanSizes.find((p) => p.id === lippanSize) || lippanSizes[1];
    min = panel.baseMin;
    max = panel.baseMax;
    breakdown.push({ label: panel.label, value: `${formatPrice(min)} – ${formatPrice(max)}` });

    if (complexity !== 'standard') {
      min = round(min * complexityMul);
      max = round(max * complexityMul);
      breakdown.push({
        label: complexityOptions.find((c) => c.id === complexity)?.label,
        value: `+${Math.round((complexityMul - 1) * 100)}%`,
      });
    }
  }

  if (serviceType === 'workshop') {
    const workshop = workshopTypes.find((w) => w.id === workshopType) || workshopTypes[0];
    const formatMul = workshopFormats.find((f) => f.id === workshopFormat)?.multiplier ?? 1;
    min = round(workshop.baseMin * formatMul);
    max = round(workshop.baseMax * formatMul);
    breakdown.push({ label: workshop.label, value: 'Per participant' });
    breakdown.push({
      label: workshopFormats.find((f) => f.id === workshopFormat)?.label || 'Online',
      value: formatMul === 1 ? 'Standard rate' : `×${formatMul}`,
    });
  }

  return {
    min,
    max,
    breakdown,
    note: 'Competitive artist-direct pricing. Final quote may vary based on design, timeline, and shipping.',
  };
};

export const formatPriceRange = (min, max) => `${formatPrice(min)} – ${formatPrice(max)}`;
