import type { Meta, StoryObj } from '@storybook/react'
import { ColumnDef } from '@tanstack/react-table'
import { DataTable, createSortableHeader, createActionColumn, createSelectionColumn } from '@/components/organisms'
import { Badge } from '@/components/atoms'

const meta: Meta<typeof DataTable> = {
  title: 'Organisms/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

type User = {
  id: string
  name: string
  email: string
  status: 'active' | 'inactive' | 'pending'
  role: string
}

const userData: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active',
    role: 'Admin',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'inactive',
    role: 'User',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    status: 'pending',
    role: 'Editor',
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice@example.com',
    status: 'active',
    role: 'User',
  },
  {
    id: '5',
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    status: 'active',
    role: 'Admin',
  },
]

const columns: ColumnDef<User>[] = [
  createSelectionColumn(),
  {
    accessorKey: 'name',
    header: createSortableHeader('Name', 'name'),
  },
  {
    accessorKey: 'email',
    header: createSortableHeader('Email', 'email'),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      return (
        <Badge
          variant={
            status === 'active'
              ? 'success'
              : status === 'inactive'
              ? 'destructive'
              : 'warning'
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  createActionColumn(),
]

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <DataTable
        columns={columns}
        data={userData}
        searchKey="name"
        searchPlaceholder="Search users..."
      />
    </div>
  ),
}

export const WithoutSearch: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <DataTable
        columns={columns}
        data={userData}
      />
    </div>
  ),
}

type Product = {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: 'in-stock' | 'out-of-stock' | 'low-stock'
}

const productData: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 99.99,
    stock: 25,
    status: 'in-stock',
  },
  {
    id: '2',
    name: 'Coffee Mug',
    category: 'Home & Kitchen',
    price: 14.99,
    stock: 0,
    status: 'out-of-stock',
  },
  {
    id: '3',
    name: 'Notebook',
    category: 'Office Supplies',
    price: 8.99,
    stock: 3,
    status: 'low-stock',
  },
  {
    id: '4',
    name: 'Desk Lamp',
    category: 'Home & Office',
    price: 45.00,
    stock: 12,
    status: 'in-stock',
  },
]

const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: 'name',
    header: createSortableHeader('Product Name', 'name'),
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'price',
    header: createSortableHeader('Price', 'price'),
    cell: ({ row }) => {
      const price = parseFloat(row.getValue('price'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price)
      return formatted
    },
  },
  {
    accessorKey: 'stock',
    header: createSortableHeader('Stock', 'stock'),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      return (
        <Badge
          variant={
            status === 'in-stock'
              ? 'success'
              : status === 'out-of-stock'
              ? 'destructive'
              : 'warning'
          }
        >
          {status.replace('-', ' ')}
        </Badge>
      )
    },
  },
  createActionColumn(),
]

export const ProductTable: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <DataTable
        columns={productColumns}
        data={productData}
        searchKey="name"
        searchPlaceholder="Search products..."
      />
    </div>
  ),
}

export const EmptyState: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <DataTable
        columns={columns}
        data={[]}
        searchKey="name"
        searchPlaceholder="Search users..."
      />
    </div>
  ),
}