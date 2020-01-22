const path = require("path");

module.exports = {
  entry: "./src/app/src/App.jsx",
  output: {
    path: path.join(__dirname, "./src/webapp/resources/js/dist/"),
    filename: "App_bundle.js"
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '..jsx', '.js']
    },  
module:{
  rules: [
    { test: /.jsx$/, loader: 'babylon-file-loader' }
    ]  

   
}
}