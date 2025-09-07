import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator, Label } from '@/components/atoms'

const meta: Meta<typeof InputOTP> = {
  title: 'Atoms/InputOTP',
  component: InputOTP,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    
    return (
      <div className="space-y-2">
        <Label htmlFor="otp">One-Time Password</Label>
        <InputOTP
          id="otp"
          maxLength={6}
          value={value}
          onChange={setValue}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    )
  },
}

export const WithSeparator: Story = {
  render: () => {
    const [value, setValue] = useState('')
    
    return (
      <div className="space-y-2">
        <Label htmlFor="otp-sep">Verification Code</Label>
        <InputOTP
          id="otp-sep"
          maxLength={6}
          value={value}
          onChange={setValue}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    )
  },
}

export const FourDigit: Story = {
  render: () => {
    const [value, setValue] = useState('')
    
    return (
      <div className="space-y-2">
        <Label htmlFor="otp-4">4-Digit PIN</Label>
        <InputOTP
          id="otp-4"
          maxLength={4}
          value={value}
          onChange={setValue}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    )
  },
}

export const WithValidation: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const isComplete = value.length === 6
    
    return (
      <div className="space-y-2">
        <Label htmlFor="otp-validation">
          Email Verification Code
          {isComplete && <span className="text-green-600 ml-2">✓</span>}
        </Label>
        <InputOTP
          id="otp-validation"
          maxLength={6}
          value={value}
          onChange={setValue}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-sm text-muted-foreground">
          Enter the 6-digit code sent to your email
        </div>
        {isComplete && (
          <div className="text-sm text-green-600">Code complete!</div>
        )}
      </div>
    )
  },
}

export const CustomPattern: Story = {
  render: () => {
    const [value, setValue] = useState('')
    
    return (
      <div className="space-y-2">
        <Label htmlFor="otp-pattern">Custom Pattern (Letters & Numbers)</Label>
        <InputOTP
          id="otp-pattern"
          maxLength={6}
          pattern="^[A-Z0-9]+$"
          value={value}
          onChange={setValue}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-sm text-muted-foreground">
          Accepts uppercase letters and numbers only
        </div>
      </div>
    )
  },
}