import type { Meta, StoryObj } from '@storybook/react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger, EnhancedCollapsible } from '@/components/atoms'
import { Button } from '@/components/atoms'

const meta: Meta<typeof Collapsible> = {
  title: 'Atoms/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false)
    
    return (
      <div className="w-80 space-y-2">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex w-full justify-between p-4">
              Can I use this in my project?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6,9 12,15 18,9" />
              </svg>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 text-sm">
              Yes. Free to use for personal and commercial projects. No attribution required.
            </div>
            <div className="rounded-md border px-4 py-3 text-sm">
              You can copy and paste the code into your project and customize it as needed.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    )
  },
}

export const WithMultipleItems: Story = {
  render: () => {
    const [openStates, setOpenStates] = React.useState({
      first: false,
      second: false,
      third: false,
    })
    
    const toggleItem = (key: keyof typeof openStates) => {
      setOpenStates(prev => ({ ...prev, [key]: !prev[key] }))
    }
    
    return (
      <div className="w-80 space-y-2">
        <Collapsible open={openStates.first} onOpenChange={() => toggleItem('first')}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex w-full justify-between p-4">
              Installation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${openStates.first ? 'rotate-180' : ''}`}
              >
                <polyline points="6,9 12,15 18,9" />
              </svg>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 text-sm font-mono bg-muted">
              npm install @trucco/ui
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={openStates.second} onOpenChange={() => toggleItem('second')}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex w-full justify-between p-4">
              Usage
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${openStates.second ? 'rotate-180' : ''}`}
              >
                <polyline points="6,9 12,15 18,9" />
              </svg>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 text-sm">
              Import the components you need and use them in your React application.
            </div>
            <div className="rounded-md border px-4 py-3 text-sm font-mono bg-muted">
              import {`{ Button }`} from '@trucco/ui'
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={openStates.third} onOpenChange={() => toggleItem('third')}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex w-full justify-between p-4">
              Customization
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${openStates.third ? 'rotate-180' : ''}`}
              >
                <polyline points="6,9 12,15 18,9" />
              </svg>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 text-sm">
              All components follow the Trucco design system and can be customized
              using CSS variables or by overriding the default classes.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    )
  },
}

export const DefaultOpen: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Collapsible defaultOpen>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="flex w-full justify-between p-4">
            Open by default
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6,9 12,15 18,9" />
            </svg>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 text-sm">
            This collapsible section is open by default when the component loads.
          </div>
          <div className="rounded-md border px-4 py-3 text-sm">
            You can still collapse it by clicking the trigger.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
}

// Enhanced Collapsible Stories
export const EnhancedSimple: Story = {
  render: () => (
    <div className="w-80">
      <EnhancedCollapsible
        trigger={
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Recent Activity
          </span>
        }
      >
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">Today</div>
          <div className="rounded-md border p-3 text-sm">
            Updated project documentation
          </div>
          <div className="rounded-md border p-3 text-sm">
            Fixed authentication bug
          </div>
          <div className="rounded-md border p-3 text-sm">
            Added new component to design system
          </div>
        </div>
      </EnhancedCollapsible>
    </div>
  ),
}

export const EnhancedWithCustomStyling: Story = {
  render: () => (
    <div className="w-80">
      <EnhancedCollapsible
        trigger="Show advanced settings"
        triggerClassName="text-primary hover:text-primary/80 font-semibold"
        contentClassName="bg-muted/50 rounded-md p-4"
      >
        <div className="space-y-3">
          <h4 className="font-medium">Advanced Configuration</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              Enable debug mode
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              Show performance metrics
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              Enable experimental features
            </label>
          </div>
        </div>
      </EnhancedCollapsible>
    </div>
  ),
}