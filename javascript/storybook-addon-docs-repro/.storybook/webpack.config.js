const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = async ({ config }) => {
  config.module.rules.push(
    {
      test: /\.stories\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          // may or may not need this line depending on your app's setup
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    },
    {
      test: /\.stories\.tsx?$/,
      use: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {
            // When set to typescript, the show code panel from
            // the docs view become "No code available"
            // parser: 'typescript',
            prettierConfig: {
              arrowParens: 'avoid',
              printWidth: 80,
              tabWidth: 2,
              bracketSpacing: true,
              trailingComma: 'none',
              singleQuote: true,
              semi: true,
              jsxBracketSameLine: false,
            },
          },
        },
      ],
      exclude: [/node_modules/],
      enforce: 'pre',
    },
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              [
                require.resolve('babel-preset-react-app'),
                { flow: false, typescript: true },
              ],
            ],
          },
        },
        require.resolve('react-docgen-typescript-loader'),
      ],
    }
  );

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
