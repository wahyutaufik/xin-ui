const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const markdownParse = require('./_docs/lib/markdown-parse');
const BabiliPlugin = require('babili-webpack-plugin');

module.exports = function ({ mode, minify = false }) {
  let env = {
    mode,
    minify: Boolean(minify),
  };

  console.info('ENV', env);

  return {
    entry: {
      index: './_docs/index.js',
    },
    output: {
      path: path.join(__dirname, 'docs'),
      filename: `[name]${minify ? '.min' : ''}.js`,
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
    // require.resolve('babel-plugin-transform-async-to-generator'),
    // [ require.resolve('babel-plugin-__coverage__'), { 'ignore': 'node_modules' } ],
    // require.resolve('babel-plugin-syntax-dynamic-import'),
  ];

  if (mode !== 'docs') {
    plugins.push(require.resolve('babel-plugin-istanbul'));
  }

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

class DocPlugin {
  apply (compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      let components = [];
      let css = [];

      glob.sync('./_docs/pages/*/*.md').forEach(srcFile => {
        let file = srcFile.replace('./_docs/', '');
        let content = fs.readFileSync(srcFile, 'utf8');

        compilation.assets[file] = {
          source () {
            return content;
          },

          size () {
            return content.length;
          },
        };

        let { meta } = markdownParse(content);
        meta.file = file;
        if (srcFile.indexOf('css') !== -1) {
          meta.uri = '/css/' + path.basename(file, '.md');
          css.push(meta);
        } else {
          meta.uri = '/components/' + path.basename(file, '.md');
          components.push(meta);
        }
      });

      let manifest = { components, css };
      let manifestContent = JSON.stringify(manifest, null, 2);

      compilation.assets['manifest.json'] = {
        source () {
          return manifestContent;
        },

        size () {
          return manifestContent.length;
        },
      };

      callback();
    });
  }
}
