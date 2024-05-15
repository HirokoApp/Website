/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    swcMinify: true,
    optimizeFonts: true,
    productionBrowserSourceMaps: false,
    reactStrictMode: true,
    cleanDistDir: true,
    async redirects() {
        return [{
            source: '/discord',
            destination: 'https://discord.gg/4DMmqYESXf',
            permanent: true
        },{
            source: '/twitter',
            destination: 'https://twitter.com/HeyyHiroko',
            permanent: true
        },{
            source: '/github',
            destination: 'https://github.com/HirokoApp',
            permanent: true
        }]
    }
}

module.exports = nextConfig
