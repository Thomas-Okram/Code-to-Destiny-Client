/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com','randomuser.me'],
      },
      // experimental:{
      //   reactRoot: true,
      //   suppressHydrationWarning: true,
      // },
      // async headers() {
      //   return [
      //     {
      //       source: process.env.WEB_URL,
      //       headers: [
      //         { key: "Access-Control-Allow-Origin", value: process.env.WEB_URL },
      //         { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE" },
      //         { key: "Access-Control-Allow-Headers", value: "Content-Type" },
      //       ],
      //     },
      //   ];
      // },
}

module.exports = nextConfig
