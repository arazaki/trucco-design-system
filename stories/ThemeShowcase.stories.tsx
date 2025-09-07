import type { Meta, StoryObj } from '@storybook/nextjs'
import { useState } from 'react'
// Atoms
import { Button } from '../components/atoms/button'
import { Input, Textarea } from '../components/atoms/input'
import { Text } from '../components/atoms/text'
import { PlusIcon, SearchIcon, ChevronRightIcon } from '../components/atoms/icons'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  Badge,
  Alert,
  AlertDescription,
  Switch,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Progress,
  Skeleton,
  Separator,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  AspectRatio,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  ScrollArea,
  Slider,
  Toggle,
  toast,
  truccoToast
} from '../components/atoms'

// Molecules
import { SearchField } from '../components/molecules/search-field'
import { FormGroup } from '../components/molecules/form-group'
import { ButtonGroup } from '../components/molecules/button-group'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '../components/molecules'

const meta = {
  title: 'Themes/Showcase',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Theme Showcase

This story demonstrates how components appear with different theme presets. Use the **Theme** toolbar at the top to switch between:

- 🔵 **Default**: Modern, versatile, professional
- ⚪ **Minimal**: Clean, subtle, refined  
- 🟣 **Vibrant**: Bold, energetic, creative
- 🔷 **Corporate**: Professional, trustworthy, reliable
- ⚫ **Dark**: Modern dark mode with proper contrast

Each theme includes a complete design token system with colors, typography, spacing, and shadows carefully crafted for that aesthetic.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AllComponents: Story = {
  render: () => {
    const [progressValue, setProgressValue] = useState(65)
    const [sliderValue, setSliderValue] = useState([50])
    const [switchChecked, setSwitchChecked] = useState(false)
    const [togglePressed, setTogglePressed] = useState(false)
    const [collapsibleOpen, setCollapsibleOpen] = useState(false)
    
    return (
    <div className="space-y-8 w-full max-w-4xl">
      {/* Typography Section */}
      <section className="space-y-4">
        <Text variant="h2">Typography Showcase</Text>
        <div className="space-y-2">
          <Text variant="h1">Heading 1 - Main Title</Text>
          <Text variant="h2">Heading 2 - Section Title</Text>
          <Text variant="h3">Heading 3 - Subsection Title</Text>
          <Text variant="body">
            Body text - This demonstrates how the selected theme affects text appearance, 
            font families, and color contrast. Each theme provides a unique typographic personality.
          </Text>
          <Text variant="bodySmall">Small body text for secondary information and captions.</Text>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="space-y-4">
        <Text variant="h3">Button Variants</Text>
        <div className="grid grid-cols-3 gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="error">Error</Button>
        </div>
        
        <div className="space-y-3">
          <Text variant="h4">Button Sizes</Text>
          <div className="flex gap-3 items-end">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </div>
        
        <div className="space-y-3">
          <Text variant="h4">Button States</Text>
          <div className="flex gap-3">
            <Button variant="primary" loading>Loading</Button>
            <Button variant="primary" disabled>Disabled</Button>
            <Button leftIcon={<PlusIcon />}>With Icon</Button>
            <Button variant="outline" rightIcon={<ChevronRightIcon />}>Continue</Button>
          </div>
        </div>
      </section>

      {/* Form Elements Section */}
      <section className="space-y-4">
        <Text variant="h3">Form Elements</Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input 
            label="Email Address" 
            placeholder="Enter your email"
            type="email"
          />
          <Input 
            label="Full Name" 
            placeholder="Enter your full name"
          />
        </div>
        <Textarea 
          label="Message" 
          placeholder="Enter your message..."
          rows={3}
        />
        <SearchField 
          placeholder="Search components..."
        />
      </section>

      {/* Complex Components Section */}
      <section className="space-y-4">
        <Text variant="h3">Complex Components</Text>
        
        <FormGroup
          label="Account Settings"
          helperText="Configure your account preferences and notification settings."
        >
          <div className="space-y-4">
            <Input label="Username" placeholder="johndoe" />
            <div className="grid grid-cols-2 gap-4">
              <Input label="First Name" placeholder="John" />
              <Input label="Last Name" placeholder="Doe" />
            </div>
          </div>
        </FormGroup>

        <div className="space-y-3">
          <Text variant="h4">Button Groups</Text>
          <ButtonGroup>
            <Button variant="outline">Left</Button>
            <Button variant="outline">Center</Button>
            <Button variant="outline">Right</Button>
          </ButtonGroup>
        </div>
      </section>

      {/* Enhanced Form Controls */}
      <section className="space-y-4">
        <Text variant="h3">Advanced Form Controls</Text>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Form Inputs</CardTitle>
              <CardDescription>Interactive form elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  id="notifications"
                  checked={switchChecked}
                  onCheckedChange={setSwitchChecked}
                />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>

              <div className="space-y-2">
                <Label>Choose an option</Label>
                <RadioGroup defaultValue="option1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="r1" />
                    <Label htmlFor="r1">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="r2" />
                    <Label htmlFor="r2">Option 2</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Select Dropdown</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select theme..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="minimal">Minimal</SelectItem>
                    <SelectItem value="vibrant">Vibrant</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Slider Value: {sliderValue[0]}</Label>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                />
              </div>

              <div className="space-y-2">
                <Label>Toggle Button</Label>
                <Toggle 
                  pressed={togglePressed}
                  onPressedChange={setTogglePressed}
                >
                  {togglePressed ? 'ON' : 'OFF'}
                </Toggle>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feedback Elements</CardTitle>
              <CardDescription>Status and progress indicators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="destructive">Error</Badge>
              </div>

              <Alert>
                <AlertDescription>
                  This is an informational alert message.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertDescription>
                  This is an error alert message.
                </AlertDescription>
              </Alert>

              <div className="space-y-2">
                <Label>Progress: {progressValue}%</Label>
                <Progress value={progressValue} />
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setProgressValue(Math.max(0, progressValue - 10))}
                  >
                    -10
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setProgressValue(Math.min(100, progressValue + 10))}
                  >
                    +10
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Loading States</Label>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation Components */}
      <section className="space-y-4">
        <Text variant="h3">Navigation & Layout</Text>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Tabs Example</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Account</TabsTrigger>
                  <TabsTrigger value="tab2">Password</TabsTrigger>
                  <TabsTrigger value="tab3">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4">
                  <Text variant="bodySmall">Account settings content</Text>
                </TabsContent>
                <TabsContent value="tab2" className="mt-4">
                  <Text variant="bodySmall">Password settings content</Text>
                </TabsContent>
                <TabsContent value="tab3" className="mt-4">
                  <Text variant="bodySmall">General settings content</Text>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accordion Example</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Getting Started</AccordionTrigger>
                  <AccordionContent>
                    Learn the basics of using our design system.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Components</AccordionTrigger>
                  <AccordionContent>
                    Explore all available components and their usage.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Customization</AccordionTrigger>
                  <AccordionContent>
                    Learn how to customize themes and components.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Other Navigation Elements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="mb-2 block">Breadcrumbs</Label>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" onClick={(e) => e.preventDefault()}>
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" onClick={(e) => e.preventDefault()}>
                      Components
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Showcase</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div>
              <Label className="mb-2 block">Collapsible Content</Label>
              <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="flex items-center justify-between w-full">
                    <span>Toggle Details</span>
                    <span>{collapsibleOpen ? '▼' : '▶'}</span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 p-4 border rounded">
                  <Text variant="bodySmall">
                    This content can be collapsed and expanded dynamically.
                  </Text>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <Separator />

            <div>
              <Label className="mb-2 block">Dropdown Menu</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Data Display */}
      <section className="space-y-4">
        <Text variant="h3">Data Display</Text>
        
        <Card>
          <CardHeader>
            <CardTitle>Data Table</CardTitle>
            <CardDescription>Structured data presentation</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell><Badge variant="success">Active</Badge></TableCell>
                  <TableCell>Admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell><Badge variant="warning">Pending</Badge></TableCell>
                  <TableCell>User</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bob Johnson</TableCell>
                  <TableCell><Badge variant="destructive">Inactive</Badge></TableCell>
                  <TableCell>Editor</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scrollable Content</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-32 w-full border rounded p-4">
              <div className="space-y-2">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="text-sm">
                    Scrollable item {i + 1} - This demonstrates scrollable content areas
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Overlays */}
      <section className="space-y-4">
        <Text variant="h3">Interactive Overlays</Text>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog Example</DialogTitle>
                    <DialogDescription>
                      This is a modal dialog component.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <Text variant="bodySmall">Dialog content goes here.</Text>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alert Dialog</CardTitle>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Delete Item</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sheet</CardTitle>
            </CardHeader>
            <CardContent>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Sheet Example</SheetTitle>
                    <SheetDescription>
                      This is a slide-out panel component.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <Text variant="bodySmall">Sheet content goes here.</Text>
                  </div>
                </SheetContent>
              </Sheet>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tooltip</CardTitle>
            </CardHeader>
            <CardContent>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popover</CardTitle>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="space-y-2">
                    <Text variant="h4">Popover Content</Text>
                    <Text variant="bodySmall">
                      This is popover content with additional information.
                    </Text>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hover Card</CardTitle>
            </CardHeader>
            <CardContent>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">@trucco</Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>TC</AvatarFallback>
                    </Avatar>
                    <div>
                      <Text variant="h4">@trucco</Text>
                      <Text variant="bodySmall">Design System</Text>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Media Components */}
      <section className="space-y-4">
        <Text variant="h3">Media & Layout</Text>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Avatars</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>TC</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aspect Ratios</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Text variant="bodySmall" className="mb-2">16:9 Aspect Ratio</Text>
                <AspectRatio ratio={16 / 9}>
                  <div className="bg-secondary rounded flex items-center justify-center">
                    <Text variant="bodySmall">16:9</Text>
                  </div>
                </AspectRatio>
              </div>
              <div>
                <Text variant="bodySmall" className="mb-2">1:1 Aspect Ratio</Text>
                <AspectRatio ratio={1}>
                  <div className="bg-secondary rounded flex items-center justify-center">
                    <Text variant="bodySmall">1:1</Text>
                  </div>
                </AspectRatio>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Color Palette Preview */}
      <section className="space-y-4">
        <Text variant="h3">Color System</Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Text variant="label" className="mb-2 block">Primary & Interactive</Text>
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border"
                  style={{ 
                    backgroundColor: 'var(--primary-subtle)',
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Primary Subtle</Text>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border"
                  style={{ 
                    backgroundColor: 'var(--primary)',
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Primary</Text>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border"
                  style={{ 
                    backgroundColor: 'var(--primary-emphasis)',
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Primary Emphasis</Text>
              </div>
            </div>
          </div>
          
          <div>
            <Text variant="label" className="mb-2 block">Surface & Text</Text>
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border bg-background"
                  style={{ 
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Background</Text>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border bg-secondary"
                  style={{ 
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Secondary Surface</Text>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border bg-accent"
                  style={{ 
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Accent</Text>
              </div>
            </div>
          </div>

          <div>
            <Text variant="label" className="mb-2 block">Semantic Feedback</Text>
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border"
                  style={{ 
                    backgroundColor: 'var(--success)',
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Success</Text>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border"
                  style={{ 
                    backgroundColor: 'var(--warning)',
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Warning</Text>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border bg-destructive"
                  style={{ 
                    borderColor: 'var(--border)'
                  }}
                />
                <Text variant="bodySmall">Error</Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shadow & Radius Showcase */}
      <section className="space-y-4">
        <Text variant="h3">Shadows & Border Radius</Text>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            className="p-4 bg-background border text-center"
            style={{ 
              borderColor: 'var(--border)',
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Text variant="bodySmall">Small Shadow</Text>
          </div>
          <div 
            className="p-4 bg-background border text-center"
            style={{ 
              borderColor: 'var(--border)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <Text variant="bodySmall">Medium Shadow</Text>
          </div>
          <div 
            className="p-4 bg-background border text-center"
            style={{ 
              borderColor: 'var(--border)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <Text variant="bodySmall">Large Shadow</Text>
          </div>
          <div 
            className="p-4 bg-background border text-center"
            style={{ 
              borderColor: 'var(--border)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-xl)'
            }}
          >
            <Text variant="bodySmall">XL Shadow</Text>
          </div>
        </div>
      </section>
    </div>
    )
  },
  parameters: {
    layout: 'padded',
  },
}

export const ButtonShowcase: Story = {
  render: () => (
    <div className="space-y-6">
      <Text variant="h2">Button Theme Variations</Text>
      <Text variant="body">
        See how button variants adapt to different themes. Notice the color changes, 
        typography, border radius, and shadow effects.
      </Text>
      
      <div className="grid grid-cols-3 gap-4">
        <Button variant="primary" size="lg">Primary</Button>
        <Button variant="secondary" size="lg">Secondary</Button>
        <Button variant="tertiary" size="lg">Tertiary</Button>
        <Button variant="outline" size="lg">Outline</Button>
        <Button variant="ghost" size="lg">Ghost</Button>
        <Button variant="link" size="lg">Link</Button>
        <Button variant="success" size="lg">Success</Button>
        <Button variant="warning" size="lg">Warning</Button>
        <Button variant="error" size="lg">Error</Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}

export const FormShowcase: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-md">
      <Text variant="h2">Form Theme Variations</Text>
      <Text variant="body">
        Form elements adapt their appearance based on the selected theme,
        including input styles, focus states, and typography.
      </Text>
      
      <div className="space-y-4">
        <Input 
          label="Email Address" 
          placeholder="Enter your email"
          type="email"
        />
        <Input 
          label="Password" 
          placeholder="Enter your password"
          type="password"
        />
        <Textarea 
          label="Bio" 
          placeholder="Tell us about yourself..."
          rows={4}
        />
        <SearchField 
          placeholder="Search anything..."
        />
        <div className="flex gap-3">
          <Button variant="primary" fullWidth>Submit</Button>
          <Button variant="outline" fullWidth>Cancel</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}

export const TypographyShowcase: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Text variant="h2">Typography Theme Variations</Text>
      <Text variant="body">
        Each theme includes carefully selected font families, sizes, weights, and colors
        that create a cohesive typographic hierarchy.
      </Text>
      
      <div className="space-y-4">
        <Text variant="h1">The Five Boxing Wizards</Text>
        <Text variant="h2">Jump Quickly Over</Text>
        <Text variant="h3">The Lazy Brown Fox</Text>
        <Text variant="h4">Amazingly Few Discotheques</Text>
        <Text variant="h5">Provide Jukeboxes</Text>
        <Text variant="h6">For Energetic Dancing</Text>
        
        <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
          <Text variant="body">
            This is body text that demonstrates the reading experience with the current theme.
            The font family, size, line height, and color are all optimized for readability
            and visual hierarchy. Notice how different themes create different moods and personalities.
          </Text>
          <Text variant="bodySmall" className="mt-2">
            This is small body text, perfect for secondary information, captions, and metadata.
          </Text>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}