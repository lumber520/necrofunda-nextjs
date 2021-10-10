const withPWA = require('next-pwa')
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['lumber520.github.io'],
  }
};
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting:true,
    // scope: '/app',
    // sw: 'service-worker.js',
  }
});
