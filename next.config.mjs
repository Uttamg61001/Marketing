
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'aceternity.com , pbs.twimg.com',
//       },
//     ],
//   },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'pbs.twimg.com',
          },
          {
            protocol: 'https',
            hostname: 'aceternity.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          }
      ],
  },
};

export default nextConfig;