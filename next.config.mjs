/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async rewrites() {
    return [
      // Map clean routes to existing static HTML in public/
      { source: '/', destination: '/index.html' },
      { source: '/about', destination: '/about.html' },
      { source: '/blog', destination: '/blog.html' },
      { source: '/blog-details', destination: '/blog-details.html' },
      { source: '/cart', destination: '/cart.html' },
      { source: '/checkout', destination: '/checkout.html' },
      { source: '/contact', destination: '/contact.html' },
      { source: '/faq', destination: '/faq.html' },
      { source: '/login', destination: '/login.html' },
      { source: '/price', destination: '/price.html' },
      { source: '/service', destination: '/service.html' },
      { source: '/shop', destination: '/shop.html' },
      { source: '/shop-details', destination: '/shop-details.html' },
      { source: '/team', destination: '/team.html' },
      { source: '/testimonial', destination: '/testimonial.html' },
      { source: '/wishlist', destination: '/wishlist.html' },
      { source: '/work', destination: '/work.html' },
      { source: '/404', destination: '/404.html' },
    ];
  },
};

export default nextConfig;
