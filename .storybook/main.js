const path = require('path')

module.exports = {
  stories: ['../components/**/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            configFileName: path.resolve(__dirname, './tsconfig.json'),
          },
        },
        /* 
          ** OPTIONAL ** 
    						 
          Basically a webpack loader  used to 				 
          generate docgen information from TypeScript React components. 
The primary use case is to get the prop types 
table populated in the Storybook Info Addon.
    	*/
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, './tsconfig.json'),
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    })

    config.resolve.extensions.push('.ts', '.tsx')

    // First we prevent webpack from using Storybook CSS rules to process CSS modules
    config.module.rules.find(
      (rule) => rule.test.toString() === '/\\.css$/'
    ).exclude = /\.module\.css$/

    // Then we tell webpack what to do with CSS modules
    config.module.rules.push({
      test: /\.module\.css$/,
      include: path.resolve(__dirname, '../components'),
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
        'postcss-loader',
      ],
    })

    return config
  },
}
