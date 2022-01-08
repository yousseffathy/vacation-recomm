module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ce3ebed2a3cc0265dcc286c57318ba97'),
  },
});
