module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com', // cloudinary images
            'lh3.googleusercontent.com', // google avatars
            'platform-lookaside.fbsbx.com', // facebook avatars
            'dl.airtable.com', // strapi marketplace
            `https://${env('AWS_BUCKET_NAME')}.s3.amazonaws.com`
          ],
          'media-src': ["'self'", 'data:', 'blob:', `https://${env('AWS_BUCKET_NAME')}.s3.amazonaws.com`],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
