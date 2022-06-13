const { withContentlayer } = require('next-contentlayer')
/**
 * @type {import("next").NextConfig}
 */
const isProd = process.env.NODE_ENV === "production"
module.exports = withContentlayer({ reactStrictMode: true, assetPrefix: isProd ? "/documentation" : "" })
