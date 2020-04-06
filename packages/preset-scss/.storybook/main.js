const path = require('path');

module.exports = {
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        modules: {
          localIdentName: '[name]__[local]--[hash:base64:5]',
        },
        cssLoaderOptions: {
          modules: true,
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    // Enable global inclusion of scss styles (variables etc)
    config.module.rules.push({
      enforce: 'pre',
      test: /.scss$/,
      loader: 'sass-resources-loader',
      options: {
        resources: './.storybook/globalStyles.scss',
      },
    });
    return config;
  },
};
