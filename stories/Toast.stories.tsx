import type { Meta, StoryObj } from '@storybook/react'
import { Toaster, toast, truccoToast, Button } from '@/components/atoms'

const meta: Meta<typeof Toaster> = {
  title: 'Atoms/Toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <Button 
          onClick={() => toast('Hello, World!')}
        >
          Default Toast
        </Button>
        <Button 
          onClick={() => toast('This is a longer message that shows how toasts handle multiple lines of text and wrap appropriately.')}
        >
          Long Message
        </Button>
      </div>
    </div>
  ),
}

export const TruccoVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="grid grid-cols-2 gap-2">
        <Button 
          variant="success"
          onClick={() => truccoToast.success('Success! Your changes have been saved.')}
        >
          Success Toast
        </Button>
        
        <Button 
          variant="destructive"
          onClick={() => truccoToast.error('Error! Something went wrong.')}
        >
          Error Toast
        </Button>
        
        <Button 
          variant="warning"
          onClick={() => truccoToast.warning('Warning! Please review your settings.')}
        >
          Warning Toast
        </Button>
        
        <Button 
          variant="outline"
          onClick={() => truccoToast.info('Info: Here\'s some helpful information.')}
        >
          Info Toast
        </Button>
        
        <Button 
          variant="default"
          onClick={() => truccoToast.primary('Primary action completed!')}
        >
          Primary Toast
        </Button>
        
        <Button 
          variant="secondary"
          onClick={() => truccoToast.secondary('Secondary action completed!')}
        >
          Secondary Toast
        </Button>
      </div>
    </div>
  ),
}

export const WithActions: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <Button 
          onClick={() => 
            toast('Event created', {
              action: {
                label: 'Undo',
                onClick: () => toast('Event deleted'),
              },
            })
          }
        >
          Toast with Action
        </Button>
        
        <Button 
          onClick={() => 
            truccoToast.success('File uploaded successfully!', {
              action: {
                label: 'View',
                onClick: () => toast('Opening file...'),
              },
            })
          }
        >
          Success with Action
        </Button>
      </div>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <Button 
          onClick={() => 
            toast('New message received', {
              description: 'You have a new message from John Doe about the project update.',
            })
          }
        >
          With Description
        </Button>
        
        <Button 
          onClick={() => 
            truccoToast.success('Profile updated', {
              description: 'Your profile information has been successfully updated and saved.',
            })
          }
        >
          Success with Description
        </Button>
      </div>
    </div>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster position="top-left" />
      <div className="grid grid-cols-3 gap-2">
        <Button 
          size="sm"
          onClick={() => toast('Top Left', { duration: 2000 })}
        >
          Top Left
        </Button>
        <Button 
          size="sm"
          onClick={() => toast('Top Center', { duration: 2000 })}
        >
          Top Center
        </Button>
        <Button 
          size="sm"
          onClick={() => toast('Top Right', { duration: 2000 })}
        >
          Top Right
        </Button>
        <Button 
          size="sm"
          onClick={() => toast('Bottom Left', { duration: 2000 })}
        >
          Bottom Left
        </Button>
        <Button 
          size="sm"
          onClick={() => toast('Bottom Center', { duration: 2000 })}
        >
          Bottom Center
        </Button>
        <Button 
          size="sm"
          onClick={() => toast('Bottom Right', { duration: 2000 })}
        >
          Bottom Right
        </Button>
      </div>
      <p className="text-sm text-muted-foreground text-center">
        Note: Position changes require page refresh to see effect
      </p>
    </div>
  ),
}

export const CustomDuration: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <Button 
          onClick={() => toast('Quick message', { duration: 1000 })}
        >
          1 Second
        </Button>
        
        <Button 
          onClick={() => toast('Standard message', { duration: 4000 })}
        >
          4 Seconds
        </Button>
        
        <Button 
          onClick={() => toast('Persistent message', { duration: Infinity })}
        >
          Persistent
        </Button>
        
        <Button 
          variant="outline"
          onClick={() => toast.dismiss()}
        >
          Dismiss All
        </Button>
      </div>
    </div>
  ),
}

export const LoadingToast: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <Button 
          onClick={() => {
            const promise = new Promise((resolve) => 
              setTimeout(resolve, 2000)
            )
            
            toast.promise(promise, {
              loading: 'Uploading file...',
              success: 'File uploaded successfully!',
              error: 'Failed to upload file',
            })
          }}
        >
          Promise Toast
        </Button>
        
        <Button 
          onClick={() => {
            const toastId = toast.loading('Processing...')
            
            setTimeout(() => {
              toast.success('Processing completed!', { id: toastId })
            }, 2000)
          }}
        >
          Loading to Success
        </Button>
        
        <Button 
          onClick={() => {
            const toastId = toast.loading('Deleting...')
            
            setTimeout(() => {
              toast.error('Failed to delete', { id: toastId })
            }, 2000)
          }}
        >
          Loading to Error
        </Button>
      </div>
    </div>
  ),
}

export const RichContent: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <Button 
          onClick={() => 
            toast.custom((t) => (
              <div className="bg-white border border-border rounded-lg p-4 shadow-lg max-w-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">Payment Successful</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your payment of $29.99 has been processed successfully.
                    </p>
                    <div className="flex space-x-2 mt-3">
                      <button 
                        className="text-xs bg-green-600 text-white px-2 py-1 rounded"
                        onClick={() => toast.dismiss(t.id)}
                      >
                        View Receipt
                      </button>
                      <button 
                        className="text-xs border px-2 py-1 rounded"
                        onClick={() => toast.dismiss(t.id)}
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        >
          Rich Content Toast
        </Button>
        
        <Button 
          onClick={() => 
            toast('👋 Hello there!', {
              icon: '👋',
            })
          }
        >
          With Emoji
        </Button>
      </div>
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <Button 
          onClick={() => {
            toast('First toast')
            setTimeout(() => toast('Second toast'), 500)
            setTimeout(() => toast('Third toast'), 1000)
          }}
        >
          Multiple Toasts
        </Button>
        
        <Button 
          onClick={() => {
            truccoToast.success('Task 1 completed')
            setTimeout(() => truccoToast.warning('Task 2 needs attention'), 1000)
            setTimeout(() => truccoToast.error('Task 3 failed'), 2000)
          }}
        >
          Mixed Types
        </Button>
        
        <Button 
          variant="outline"
          onClick={() => toast.dismiss()}
        >
          Clear All
        </Button>
      </div>
    </div>
  ),
}