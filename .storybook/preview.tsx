import type { Preview } from '@storybook/nextjs'
import React from 'react'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
    },
  },
  decorators: [
    (Story) => {
      return React.createElement(
        'div',
        { className: 'min-h-[200px] bg-background text-foreground p-4' },
        React.createElement(Story)
      )
    },
  ],
}

export default preview