import path from "path";

const config = {
   entry: "./src/index.tsx",
   mode: "development",
   module: {
      rules: [
         {
            exclude: /(node_modules)/,
            test: /\.(js|jsx)$/i,
            loader: "babel-loader",
         },
         {
            test: /\.(png|jpe?g|svg)$/,
            loader: 'file-loader',
            options: {
               name: 'assets/[name].[ext]',
            }
         },
      ]
   },
   output: {
      path: path.resolve("./dist")
   },
   plugins: []
};

export default config;