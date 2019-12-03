import { addParameters, configure } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

function loaderFunction() {
  const allExports = new Set([require('../src/introduction.stories.mdx')]);
  const requireContext = require.context(
    '../src',
    true,
    /\.stories\.(mdx|tsx?)$/
  );
  requireContext
    .keys()
    .forEach(fileName => allExports.add(requireContext(fileName)));
  return [...allExports];
}

configure(loaderFunction, module);
