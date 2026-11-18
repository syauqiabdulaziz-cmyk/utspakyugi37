import { useState } from 'react';
import { Utensils } from 'lucide-react';

interface FoodImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fallbackTitle?: string;
}

export function FoodImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackTitle,
}: FoodImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-neutral-100 via-neutral-50 to-red-50/70 text-neutral-500 p-6 text-center ${className}`}
      >
        <div className="w-11 h-11 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-3 text-red-600 shadow-xs">
          <Utensils className="w-5 h-5" aria-hidden="true" />
        </div>
        <span className="text-xs font-medium text-neutral-600 max-w-[180px] leading-snug">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
