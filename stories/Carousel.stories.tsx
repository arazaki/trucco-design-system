import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/atoms'

const meta: Meta<typeof Carousel> = {
  title: 'Atoms/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="max-w-xs">
      <Carousel
        orientation="vertical"
        opts={{
          align: "start",
        }}
        className="w-full max-w-xs"
      >
        <CarouselContent className="-mt-1 h-[200px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-full h-32 bg-muted rounded-md flex items-center justify-center">
                    <span className="text-muted-foreground">Image 1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Product Title 1</h3>
                    <p className="text-sm text-muted-foreground">This is a description of the first product.</p>
                    <p className="text-lg font-bold mt-2">$99.99</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-full h-32 bg-muted rounded-md flex items-center justify-center">
                    <span className="text-muted-foreground">Image 2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Product Title 2</h3>
                    <p className="text-sm text-muted-foreground">This is a description of the second product.</p>
                    <p className="text-lg font-bold mt-2">$149.99</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-full h-32 bg-muted rounded-md flex items-center justify-center">
                    <span className="text-muted-foreground">Image 3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Product Title 3</h3>
                    <p className="text-sm text-muted-foreground">This is a description of the third product.</p>
                    <p className="text-lg font-bold mt-2">$79.99</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}