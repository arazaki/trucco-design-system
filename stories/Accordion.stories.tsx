import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms'

const meta: Meta<typeof Accordion> = {
  title: 'Atoms/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern and is built with
            accessibility in mind.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            This accordion supports multiple items being open at the same time.
            You can expand multiple sections simultaneously.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Customization</AccordionTrigger>
          <AccordionContent>
            The accordion is highly customizable and follows the Trucco design
            system guidelines with proper theming support.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Performance</AccordionTrigger>
          <AccordionContent>
            Built on top of Radix UI primitives for excellent performance
            and accessibility out of the box.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const DefaultOpen: Story = {
  args: {
    type: 'single',
    defaultValue: 'item-2',
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>First Item</AccordionTrigger>
          <AccordionContent>
            This is the first accordion item content.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second Item (Default Open)</AccordionTrigger>
          <AccordionContent>
            This accordion item is open by default when the component loads.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Third Item</AccordionTrigger>
          <AccordionContent>
            This is the third accordion item content.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const WithRichContent: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Getting Started</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <p>Follow these steps to get started:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Install the package</li>
                <li>Import the components</li>
                <li>Configure your theme</li>
                <li>Start building</li>
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Advanced Usage</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <p>For advanced use cases, you can:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Customize the animation duration</li>
                <li>Add custom triggers</li>
                <li>Control state programmatically</li>
              </ul>
              <div className="mt-3 p-3 bg-muted rounded">
                <code className="text-sm">
                  &lt;Accordion type="single" collapsible&gt;
                </code>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}