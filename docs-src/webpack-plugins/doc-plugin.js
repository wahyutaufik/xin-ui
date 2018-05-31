const glob = require('glob');
const path = require('path');
const fs = require('fs');
const { parse } = require('xin-markdown/parse');

class DocPlugin {
  constructor () {
    this.startTime = Date.now();
    this.prevTimestamps = {};
  }

  apply (compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      let components = [];
      let css = [];

      let changeManifest = false;
      let mdFiles = glob.sync('./docs/*/*.md');
      mdFiles.forEach(srcFile => {
        let file = srcFile;
        let content = fs.readFileSync(srcFile, 'utf8');
        let watchfile = path.resolve(srcFile);

        compilation.fileDependencies.push(watchfile);
        if ((this.prevTimestamps[watchfile] || this.startTime) < (compilation.fileTimestamps[watchfile] || Infinity)) {
          changeManifest = true;
          compilation.assets[file] = {
            source () {
              return content;
            },

            size () {
              return content.length;
            },
          };
        }

        let { meta } = parse(content);
        meta.file = file;
        if (srcFile.indexOf('css') !== -1) {
          meta.uri = '/css/' + path.basename(file, '.md');
          css.push(meta);
        } else {
          meta.uri = '/components/' + path.basename(file, '.md');
          components.push(meta);
        }
      });

      this.prevTimestamps = compilation.fileTimestamps;

      let manifest = { components, css };
      let manifestContent = JSON.stringify(manifest, null, 2);

      if (changeManifest) {
        compilation.assets['manifest.json'] = {
          source () {
            return manifestContent;
          },

          size () {
            return manifestContent.length;
          },
        };
      }

      callback();
    });
  }
}

module.exports = DocPlugin;
