/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export so the site can be served from GitHub Pages.
  output: "export",
  // GitHub Pages serves /foo/ → /foo/index.html, so trailing slashes match cleanly.
  trailingSlash: true,
  // GitHub Pages cannot run the Next.js Image Optimizer.
  images: { unoptimized: true }
};

export default nextConfig;
