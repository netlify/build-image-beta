const original = require("./src/netlify-ui/postcss.config")
const path = require("path")

module.exports = {
  plugins: [
    ...original.plugins,
    require("postcss-url")({
      url: asset => path.resolve("../netlify-ui/src/stylesheets", asset.url),
    }),
  ],
}
