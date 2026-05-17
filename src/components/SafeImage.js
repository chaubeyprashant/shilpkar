import React, { useState, useEffect } from 'react';
import { IMAGE_FALLBACK } from '../data/images';

const SafeImage = ({ src, alt, className, fallback = IMAGE_FALLBACK, ...props }) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      className={className}
      loading={props.loading ?? 'lazy'}
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
};

export default SafeImage;
