const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.jsx',
    'add-bar-builder-buttons': './src/add-bar-builder-buttons.js',
  },
  externals: {
    jquery: 'jQuery',
    underscore: '_',
    lodash: 'lodash',
    react: ['vendor', 'React'],
    'react-dom': ['vendor', 'ReactDOM'],

    // WordPress dependencies.
    '@wordpress/i18n': ['vendor', 'wp', 'i18n'],
    '@wordpress/hooks': ['vendor', 'wp', 'hooks'],

    // Divi dependencies.
    '@divi/rest': ['divi', 'rest'],
    '@divi/data': ['divi', 'data'],
    '@divi/module': ['divi', 'module'],
    '@divi/module-utils': ['divi', 'moduleUtils'],
    '@divi/modal': ['divi', 'modal'],
    '@divi/field-library': ['divi', 'fieldLibrary'],
    '@divi/icon-library': ['divi', 'iconLibrary'],
    '@divi/module-library': ['divi', 'moduleLibrary'],
    '@divi/app-ui': ['divi', 'appUi'],
    '@divi/style-library': ['divi', 'styleLibrary'],
  },

  // This option determine how different types of module within the project will be treated.
  // @see https://webpack.js.org/configuration/module/
  module: {
    // This option sets up loaders for webpack configuration.
    // Loaders allow webpack to process various types because by default webpack only
    // understand JavaScript and JSON files.
    // @see https://webpack.js.org/concepts/#loaders
    rules: [
      // Handle `.jsx` files.
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          // Spawns multiple processes and split work between them. This makes faster build.
          // @see https://webpack.js.org/loaders/thread-loader/
          {
            loader: 'thread-loader',
            options: {
              workers: -1,
            },
          },

          // Transpiles JavaScript files using Babel. Translates newer syntax with less support
          // into older syntax with more support so the project can use newer syntax and have
          // them automatically translated into older syntax for compatibility suppoert.
          // @see https://www.npmjs.com/package/babel-loader
          // @see https://babeljs.io/
          {
            loader: 'babel-loader',
            options: {
              compact: false,
              presets: [
                // Preset that adds configuration for handling latest JavaScript syntax.
                // @see https://babeljs.io/docs/en/babel-preset-env
                ['@babel/preset-env', {
                  modules: false,
                  targets: '> 5%',
                }],

                // Preset that added configuration for handling react & JSX.
                // @see https://babeljs.io/docs/en/babel-preset-react
                '@babel/preset-react',
              ],
              cacheDirectory: false,
            },
          }
        ]
      },
    ]
  },

  // Determine how modules are resolved.
  // @see https://webpack.js.org/configuration/resolve/
  resolve: {
    // Allows extension to be leave off when importing.
    // @see https://webpack.js.org/configuration/resolve/#resolveextensions
    extensions: ['.js', '.jsx'],
  },

  // Determine where the created bundles will be outputted. Here we have two bundles
  // @see https://webpack.js.org/concepts/#output
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
};