require('file-loader?name=[name].[ext]!extract-loader?!./index.html');
require('xin/css/layout.css');
require('xin-ui/scss/ui-layout.scss');
require('xin-ui/scss/ui-typography.scss');
require('xin-ui/scss/ui-list.scss');
require('xin-ui/scss/ui-header.scss');
require('xin-ui/scss/ui-button.scss');
require('material-design-icons/iconfont/material-icons.css');

(async () => {
  window.xin = {
    viewLoaders: [
      {
        test: /^doc-/,
        load (view) {
          return System.import(`./views/${view.name}`);
        },
      },
    ],
  };

  await System.import('./components/doc-app');
})();
