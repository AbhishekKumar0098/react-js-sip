const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // entry point now includes TypeScript (tsx)
  output: {
    filename: "bundle.js", // the bundled output file
    path: path.resolve(__dirname, "dist"), // output folder
    library: "CapanicusSip", // name of the global variable
    libraryTarget: "umd", // format that works for both Node and browser
    clean: true, // clear dist folder before each build
  },
  stats: {
    children: true, // Include more detailed information about child compilations
  },
  externals: {
    react: "React",  // React will be provided externally
    "react-dom": "ReactDOM",  // ReactDOM will be provided externally
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Handle both .ts and .tsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env", // Transpile modern JavaScript
              "@babel/preset-react", // Handle React JSX
              "@babel/preset-typescript", // Handle TypeScript
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Resolve .ts and .tsx files
  },

  devServer: {
    contentBase: "./dist",
    port: 3000,
  },
  mode: "production",
};
