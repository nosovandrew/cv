// folder types in root dir fixes issues with this modules
const withPlugins = require('next-compose-plugins');
const { withPlaiceholder } = require("@plaiceholder/next");
const withPWA = require('next-pwa');

module.exports = withPlugins(
    [
        [withPlaiceholder],
        [withPWA, {
            pwa: {
                dest: 'public',
                disable: process.env.VERCEL_ENV === 'development',
            },
        }],
    ],
    {
        env: {
            VERCEL_ENV: process.env.VERCEL_ENV,
            VERCEL_URL: process.env.VERCEL_URL,
        },
        images: {
            domains: [
                'res.cloudinary.com'
            ],
        },
        reactStrictMode: true,
    }
);
