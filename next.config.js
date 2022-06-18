const { withContentlayer } = require('next-contentlayer')
const isProd = process.env.NODE_ENV === "production"
/**
 * @type {import("next").NextConfig}
 */
module.exports = withContentlayer({ reactStrictMode: true, assetPrefix: isProd ? "https://denocord-labs.github.io/documentation" : "", basePath: isProd ? "/documentation" : "" })
