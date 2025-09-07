import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Calendar } from '@/components/atoms'

const meta: Meta<typeof Calendar> = {
  title: 'Atoms/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    )
  },
}

export const Range: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<{from: Date, to?: Date} | undefined>({
      from: new Date(2023, 0, 20),
      to: new Date(2023, 0, 30),
    })
    
    return (
      <Calendar
        mode="range"
        defaultMonth={new Date(2023, 0)}
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={2}
        className="rounded-md border"
      />
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const [dates, setDates] = useState<Date[] | undefined>([
      new Date(2023, 0, 10),
      new Date(2023, 0, 15),
      new Date(2023, 0, 20),
    ])
    
    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border"
      />
    )
  },
}

export const WithDisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>()
    
    const disabledDates = [
      new Date(2023, 0, 5),
      new Date(2023, 0, 15),
      new Date(2023, 0, 25),
    ]
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={disabledDates}
        className="rounded-md border"
      />
    )
  },
}

export const WeekStartsOnMonday: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        weekStartsOn={1} // Monday
        className="rounded-md border"
      />
    )
  },
}