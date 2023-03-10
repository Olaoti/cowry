const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
  include: path.resolve(__dirname, "public/assets"),
  webpack(config) {
    return config;
  },
  ReactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
});
