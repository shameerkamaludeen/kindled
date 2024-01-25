const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: getEntryObj(),
  // Use "getHtmlTemplateObjArray().concat([])" statement to add more plugins
  plugins: getHtmlTemplateObjArray(),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    chunkFilename: 'scripts/[name].chunk.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[hash][ext][query]'
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: './scripts/runtime',
    },
  },
};

function getHtmlTemplateObjArray() {
  return [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['bootstrap-plugins', 'plugins', 'main', 'home'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about.html',
      chunks: ['bootstrap-plugins', 'plugins', 'main', 'about'],
      filename: 'pages/about.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/services.html',
      chunks: ['bootstrap-plugins', 'plugins', 'main', 'services'],
      filename: 'pages/services.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/team.html',
      chunks: ['bootstrap-plugins', 'plugins', 'main', 'team'],
      filename: 'pages/team.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/portfolio.html',
      chunks: ['bootstrap-plugins', 'plugins', 'main', 'portfolio'],
      filename: 'pages/portfolio.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/contact.html',
      chunks: ['bootstrap-plugins', 'plugins', 'main', 'contact'],
      filename: 'pages/contact.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/project-details.html',
      chunks: ['bootstrap-plugins', 'plugins', 'main', 'project-details'],
      filename: 'pages/project-details.html',
    })
  ];
}

function getEntryObj() {
  return {
    'bootstrap-plugins': {
      import: './src/scripts/bootstrap-plugins.js',
      filename: './scripts/[name].js'
    },
    plugins: {
      import: ['./src/scripts/scroll-smoother.min.js'],
      filename: './scripts/[name].js'
    },
    main: {
      import: './src/scripts/main.js',
      filename: './scripts/[name].js'
    },
    home: {
      import: './src/scripts/pages/home.js',
      filename: './scripts/pages/[name].js'
    },
    about: {
      import: './src/scripts/pages/about.js',
      filename: './scripts/pages/[name].js'
    },
    services: {
      import: './src/scripts/pages/services.js',
      filename: './scripts/pages/[name].js'
    },
    team: {
      import: './src/scripts/pages/team.js',
      filename: './scripts/pages/[name].js'
    },
    portfolio: {
      import: './src/scripts/pages/portfolio.js',
      filename: './scripts/pages/[name].js'
    },
    contact: {
      import: './src/scripts/pages/contact.js',
      filename: './scripts/pages/[name].js'
    },
    'project-details': {
      import: './src/scripts/pages/project-details.js',
      filename: './scripts/pages/[name].js'
    }
  };
}