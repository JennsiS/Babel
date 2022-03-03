const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./index.js",
    inicio: "./src/inicio/inicio.js",
    mision: "./src/mision/mision.js",
    localizacion: "./src/localizacion/localizacion.js",
    fuera: "./src/fuera/fuera.js",
    comentario: "./src/comentario/comentario.js",
    exito: "./src/exito/exito.js",
    fracaso: "./src/fracaso/fracaso.js",
    explosion: "./src/explosion/explosion.js",
    mutacion: "./src/mutacion/mutacion.js",
    guerra: "./src/guerra/guerra.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "bundle"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/inicio/index.html",
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: "./src/mision/mision.html",
      filename: 'mision.html',
      chunks: ['mision']
    }),
    new HtmlWebpackPlugin({
      template: "./src/localizacion/localizacion.html",
      filename: 'localizacion.html',
      chunks: ['localizacion']
    }),
    new HtmlWebpackPlugin({
      template: "./src/fuera/fuera.html",
      filename: 'fuera.html',
      chunks: ['fuera']
    }),
    new HtmlWebpackPlugin({
        template: "./src/comentario/comentario.html",
        filename: 'comentario.html',
        chunks: ['comentario']
      }),
    new HtmlWebpackPlugin({
        template: "./src/exito/exito.html",
        filename: 'exito.html',
        chunks: ['exito']
      }),
    new HtmlWebpackPlugin({
        template: "./src/fracaso/fracaso.html",
        filename: 'fracaso.html',
        chunks: ['fracaso']
      }),
    new HtmlWebpackPlugin({
        template: "./src/explosion/explosion.html",
        filename: 'explosion.html',
        chunks: ['explosion']
      }),
    new HtmlWebpackPlugin({
        template: "./src/mutacion/mutacion.html",
        filename: 'mutacion.html',
        chunks: ['mutacion']
      }),
    new HtmlWebpackPlugin({
        template: "./src/guerra/guerra.html",
        filename: 'guerra.html',
        chunks: ['guerra']
      }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ],
  },
};
