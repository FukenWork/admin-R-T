const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: { '@primary-color': '#1DA57A' },// 修改主题颜色
          javascriptEnabled: true,
        },
      },
    },
  ],
};