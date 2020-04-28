const webpack = require("webpack")

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "react-modal-original$": require.resolve("react-modal"),
        "react-modal$": require.resolve("./src/mocks/react-modal.js"),
      },
    },
    plugins: [
      new webpack.NormalModuleReplacementPlugin(
        /\/Alert(\.js)?$/,
        require.resolve("./src/mocks/empty.js")
      ),
    ],
  })
}
