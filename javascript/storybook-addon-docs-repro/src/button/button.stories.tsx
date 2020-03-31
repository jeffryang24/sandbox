import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from './button';

export default {
  component: Button,
  title: 'Design|Button',
};

export const text: FunctionComponent = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

export const emoji: FunctionComponent = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
