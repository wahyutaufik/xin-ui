const path = require('path');
const DocPlugin = require('./docs-src/webpack-plugins/doc-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BabiliPlugin = require('babili-webpack-plugin');

module.exports = function ({ mode, minify = false }) {
  let env = {
    mode,
    minify: Boolean(minify),
  };

  console.info('ENV', env);

  return {
    entry: {
      index: './docs-src/index.js',
    },
    output: {
      path: path.join(__dirname, 'www'),
      filename: `js/[name]${minify ? '.min' : ''}.js`,
    },
    devtool: 'sourcemap',
    resolve: {
      alias: {
        'xin-ui': __dirname,
      },
    },
    plugins: getPlugins(env),
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [ 'style-loader', 'css-loader', 'sass-loader' ],
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: 'html-loader',
        },
        {
          test: /\.(woff2?|eot|ttf)(\?.*)?$/i,
          use: getUrlLoader('./img/[name].[ext]'),
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: getBabelLoader(env),
        },
      ],
    },
  };
};

function getBabelLoader ({ mode }) {
  let plugins = [
    require.resolve('babel-plugin-syntax-dynamic-import'),
    // require.resolve('babel-plugin-transform-async-to-generator'),
    // [ require.resolve('babel-plugin-__coverage__'), { 'ignore': 'node_modules' } ],
    // require.resolve('babel-plugin-syntax-dynamic-import'),
  ];

  // if (mode !== 'docs') {
  //   plugins.push(require.resolve('babel-plugin-istanbul'));
  // }

  let presets = [
    // require.resolve('babel-preset-es2015'),
    // require.resolve('babel-preset-stage-3'),
  ];

  return {
    loader: 'babel-loader',
    options: {
      babelrc: false,
      plugins,
      presets,
      cacheDirectory: true,
    },
  };
}

function getPlugins ({ mode }) {
  let plugins = [];
  if (mode === 'docs') {
    plugins.push(new HtmlWebpackPlugin({
      template: './docs-src/index.html',
    }));
    plugins.push(new DocPlugin());
  }
  return plugins;
}

function getUrlLoader (name = '[name].[ext]') {
  return {
    loader: 'url-loader',
    options: {
      limit: 1000,
      name: name,
    },
  };
}
