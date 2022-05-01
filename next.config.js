const withPWA = require('next-pwa');
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['lumber520.github.io'],
  },
  experimental: {
    images: { layoutRaw: true } }
};
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true
  },
});
