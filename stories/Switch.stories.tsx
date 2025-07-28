import type { Meta, StoryObj } from '@storybook/nextjs'
import { Switch } from '../components/atoms/switch'

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A toggle switch component for binary choices with enhanced accessibility, theming, and form integration. Built on shadcn/ui foundation with Trucco\'s semantic theming system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
      description: 'The semantic variant of the switch',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the switch',
    },
    theme: {
      control: 'select',
      options: ['semantic', 'red', 'blue', 'purple', 'green'],
      description: 'The color theme variant',
    },
    label: {
      control: 'text',
      description: 'Label text for the switch',
    },
    description: {
      control: 'text',
      description: 'Helper text that appears below the label',
    },
    error: {
      control: 'text',
      description: 'Error message that replaces the description',
    },
    required: {
      control: 'boolean',
      description: 'Shows required indicator in the label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the switch',
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
  },
  args: {
    checked: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithLabel: Story = {
  args: {
    label: 'Enable notifications',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Email notifications',
    description: 'Receive email notifications for important updates',
  },
}

export const Required: Story = {
  args: {
    label: 'Accept terms and conditions',
    description: 'You must accept the terms to continue',
    required: true,
  },
}

export const WithError: Story = {
  args: {
    label: 'Enable two-factor authentication',
    description: 'Secure your account with an additional verification step',
    error: 'Two-factor authentication setup failed. Please try again.',
    checked: false,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Maintenance mode',
    description: 'This feature is currently under maintenance',
    disabled: true,
    checked: true,
  },
}

export const AllVariants: Story = {
  args: {},
  render: () => (
    <div className="space-y-4">
      <Switch variant="default" label="Default variant" />
      <Switch variant="primary" label="Primary variant" />
      <Switch variant="secondary" label="Secondary variant" />
      <Switch variant="success" label="Success variant" />
      <Switch variant="warning" label="Warning variant" />
      <Switch variant="error" label="Error variant" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available switch variants with semantic coloring.',
      },
    },
  },
}

export const AllSizes: Story = {
  args: {},
  render: () => (
    <div className="space-y-4">
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" />
      <Switch size="lg" label="Large switch" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Switch sizes from small to large.',
      },
    },
  },
}

export const ThemeVariants: Story = {
  args: {},
  render: () => (
    <div className="space-y-4">
      <Switch theme="semantic" variant="primary" label="Semantic theme" />
      <Switch theme="red" variant="primary" label="Red theme" />
      <Switch theme="blue" variant="primary" label="Blue theme" />
      <Switch theme="purple" variant="primary" label="Purple theme" />
      <Switch theme="green" variant="primary" label="Green theme" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Theme-based color variants for different contexts.',
      },
    },
  },
}

export const FormIntegration: Story = {
  args: {},
  render: () => (
    <div className="max-w-md space-y-6 p-6 border rounded-lg">
      <h3 className="font-semibold text-lg">Account Settings</h3>
      
      <Switch
        variant="primary"
        label="Email notifications"
        description="Receive emails about account activity and updates"
      />
      
      <Switch
        variant="success"
        label="Two-factor authentication"
        description="Add an extra layer of security to your account"
      />
      
      <Switch
        variant="secondary"
        label="Marketing emails"
        description="Receive promotional content and product updates"
      />
      
      <Switch
        variant="warning"
        label="Data sharing"
        description="Allow anonymous usage data to help improve our services"
      />
      
      <Switch
        variant="error"
        label="Account deletion"
        description="Permanently delete your account and all associated data"
        error="This action cannot be undone"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of switches used in a settings form with different variants and states.',
      },
    },
  },
}

export const SimpleToggles: Story = {
  args: {},
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm">Dark mode</span>
        <Switch variant="primary" />
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm">Sound</span>
        <Switch variant="success" size="sm" />
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm">Autoplay</span>
        <Switch variant="secondary" size="lg" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Simple toggle switches without full form integration.',
      },
    },
  },
}

export const StatusSwitches: Story = {
  args: {},
  render: () => (
    <div className="space-y-4 max-w-sm">
      <div className="flex items-center justify-between p-3 border rounded">
        <div>
          <p className="font-medium text-sm">Service Status</p>
          <p className="text-xs text-muted-foreground">Online</p>
        </div>
        <Switch variant="success" checked />
      </div>
      
      <div className="flex items-center justify-between p-3 border rounded">
        <div>
          <p className="font-medium text-sm">Maintenance Mode</p>
          <p className="text-xs text-muted-foreground">Disabled</p>
        </div>
        <Switch variant="warning" />
      </div>
      
      <div className="flex items-center justify-between p-3 border rounded">
        <div>
          <p className="font-medium text-sm">Debug Mode</p>
          <p className="text-xs text-muted-foreground">Enabled</p>
        </div>
        <Switch variant="error" checked />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Switches used for status indicators in dashboard-style layouts.',
      },
    },
  },
}

export const AccessibilityExample: Story = {
  args: {},
  render: () => (
    <div className="space-y-6 max-w-md">
      <div>
        <h4 className="font-medium mb-4">Accessibility Features</h4>
        
        <Switch
          variant="primary"
          label="Screen reader support"
          description="Enable enhanced screen reader compatibility"
          required
        />
      </div>
      
      <div>
        <Switch
          variant="success"
          label="High contrast mode"
          description="Increase contrast for better visibility"
        />
      </div>
      
      <div>
        <Switch
          variant="secondary"
          label="Reduced motion"
          description="Minimize animations and transitions"
          disabled
          error="This setting requires system-level permissions"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing accessibility features with proper labeling, descriptions, and error states.',
      },
    },
  },
}