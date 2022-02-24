module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1b13b5d92902a1b3e6e4732b5649ff6e'),
  },
});
