// folder types in root dir fixes issues with this modules
const withPlugins = require('next-compose-plugins');
const { withPlaiceholder } = require("@plaiceholder/next");

module.exports = withPlugins(
    [
        [withPlaiceholder],
    ],
    {
        env: {
            VERCEL_ENV: process.env.VERCEL_ENV,
        },
        images: {
            domains: [
                'res.cloudinary.com'
            ],
        },
        reactStrictMode: true,
    }
);
