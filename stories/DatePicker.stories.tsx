import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DatePicker, EnhancedDatePicker, DateRangePicker } from '@/components/atoms'

const meta: Meta<typeof DatePicker> = {
  title: 'Atoms/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>()
    
    return (
      <div className="w-64">
        <DatePicker
          date={date}
          onDateChange={setDate}
          placeholder="Pick a date"
        />
      </div>
    )
  },
}

export const Enhanced: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>()
    
    return (
      <div className="w-64">
        <EnhancedDatePicker
          label="Birth Date"
          description="Select your date of birth"
          date={date}
          onDateChange={setDate}
          placeholder="Pick your birth date"
          required
        />
      </div>
    )
  },
}

export const WithError: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>()
    
    return (
      <div className="w-64">
        <EnhancedDatePicker
          label="Due Date"
          date={date}
          onDateChange={setDate}
          placeholder="Pick a due date"
          error="Due date is required"
          required
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="w-64">
      <DatePicker
        placeholder="Pick a date"
        disabled
      />
    </div>
  ),
}

export const PreSelected: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    
    return (
      <div className="w-64">
        <DatePicker
          date={date}
          onDateChange={setDate}
          placeholder="Pick a date"
        />
      </div>
    )
  },
}

export const DateRange: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<{ from: Date; to?: Date } | undefined>()
    
    return (
      <div className="w-80">
        <DateRangePicker
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          placeholder="Pick a date range"
        />
      </div>
    )
  },
}

export const DateRangePreSelected: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<{ from: Date; to?: Date } | undefined>({
      from: new Date(2023, 0, 20),
      to: new Date(2023, 0, 30),
    })
    
    return (
      <div className="w-80">
        <DateRangePicker
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          placeholder="Pick a date range"
        />
      </div>
    )
  },
}