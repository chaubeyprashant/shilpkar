/**
 * Central image URLs — verified to load (Unsplash + picsum fallback seeds).
 * Format: unsplash photo IDs that return HTTP 200.
 */
const unsplash = (id, w, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}${h ? `&h=${h}` : ''}`;

const picsum = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const IMAGES = {
  painting: unsplash('1579783902614-a3fb3927b6a5', 2000, 1200),
  studio: unsplash('1547826039-bfc35e0f1ea8', 2000, 1200),
  colorfulArt: unsplash('1513364776144-60967b0f800f', 800, 1000),
  craft: unsplash('1578301978693-85fa9c0320b9', 800, 1000),
  resin: unsplash('1574943320219-553eb213f72d', 800, 1000),
  supplies: unsplash('1513506003901-1e6a229e2d15', 800, 1000),
  mandala: unsplash('1513364776144-60967b0f800f', 800, 800),
  home1: unsplash('1618220179428-22790b461013', 600, 600),
  home2: unsplash('1616486338812-3dadae4b4ace', 600, 600),
  home3: unsplash('1615874959474-d609969a20ed', 600, 600),
  home4: unsplash('1615529328331-f8917597711f', 600, 600),
  artist: unsplash('1547826039-bfc35e0f1ea8', 1000, 1200),
};

/** Fallback if primary src fails */
export const IMAGE_FALLBACK = picsum('shilpi-art-fallback', 800, 1000);

export const img = (key, width) => {
  const map = {
    painting: IMAGES.painting,
    studio: IMAGES.studio,
    colorfulArt: IMAGES.colorfulArt,
    craft: IMAGES.craft,
    resin: IMAGES.resin,
    supplies: IMAGES.supplies,
    mandala: IMAGES.mandala,
    home1: IMAGES.home1,
    home2: IMAGES.home2,
    home3: IMAGES.home3,
    home4: IMAGES.home4,
    artist: IMAGES.artist,
  };
  const base = map[key] || IMAGES.painting;
  if (!width) return base;
  return base.replace(/w=\d+/, `w=${width}`).replace(/h=\d+/, `h=${Math.round(width * 1.25)}`);
};
