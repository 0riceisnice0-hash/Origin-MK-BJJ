import type { NextConfig } from 'next';

const isPages = process.env.GITHUB_PAGES === 'true';
const repo = 'Origin-MK-BJJ';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: isPages ? `/${repo}/` : '',
  trailingSlash: isPages,
};

export default nextConfig;
