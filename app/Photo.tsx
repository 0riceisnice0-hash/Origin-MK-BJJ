import type { ImgHTMLAttributes } from 'react';
import assets from '../lib/image-assets.json';

type Asset = { src: string; width: number; height: number; srcSet?: string };
const images: Record<string, Asset> = assets;

export default function Photo({ src = '', alt = '', sizes = '(max-width: 620px) 100vw, 50vw', loading, fetchPriority, ...props }: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & { src?: string }) {
  const image = images[src];
  /* oxlint-disable next/no-img-element -- Responsive files are generated at build preparation for a static export. */
  return <img {...props} src={image?.src ?? src} alt={alt} width={image?.width ?? props.width} height={image?.height ?? props.height} srcSet={image?.srcSet} sizes={image?.srcSet ? sizes : undefined} loading={loading} fetchPriority={fetchPriority} decoding="async" />;
}
