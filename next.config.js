const withPWA = require('next-pwa');
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['lumber520.github.io'],
  }
};
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});
