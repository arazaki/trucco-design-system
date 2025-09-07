import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { 
  Command, 
  CommandDialog, 
  CommandEmpty, 
  CommandGroup, 
  CommandInput, 
  CommandItem, 
  CommandList,
  CommandSeparator,
  CommandShortcut, 
  Button
} from '@/components/atoms'

const meta: Meta<typeof Command> = {
  title: 'Atoms/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md max-w-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            📅 Calendar
          </CommandItem>
          <CommandItem>
            😀 Search Emoji
          </CommandItem>
          <CommandItem>
            🧮 Calculator
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            👤 Profile
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            💳 Billing
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            ⚙️ Settings
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const Dialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        >
          <span className="hidden lg:inline-flex">Search documentation...</span>
          <span className="inline-flex lg:hidden">Search...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Quick Actions">
              <CommandItem onSelect={() => setOpen(false)}>
                📁 Create new file
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                📂 Create new folder
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                🔍 Search files
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Recent">
              <CommandItem onSelect={() => setOpen(false)}>
                📄 document.pdf
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                🖼️ image.png
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                📊 spreadsheet.xlsx
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem onSelect={() => setOpen(false)}>
                👤 Profile
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                ⚙️ Settings
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    )
  },
}

export const WithIcons: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md max-w-md">
      <CommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="File">
          <CommandItem>
            <span className="mr-2">📄</span>
            New File
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span className="mr-2">📂</span>
            Open Folder
            <CommandShortcut>⌘O</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span className="mr-2">💾</span>
            Save
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Edit">
          <CommandItem>
            <span className="mr-2">↶</span>
            Undo
            <CommandShortcut>⌘Z</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span className="mr-2">↷</span>
            Redo
            <CommandShortcut>⌘⇧Z</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span className="mr-2">📋</span>
            Copy
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span className="mr-2">📄</span>
            Paste
            <CommandShortcut>⌘V</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}