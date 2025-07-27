import * as React from 'react'
import { Input, type InputProps } from '../atoms/input'
import { Button } from '../atoms/button'
import { SearchIcon, XIcon } from '../atoms/icons'
import { cn } from '../../lib/utils/cn'

export interface SearchFieldProps extends Omit<InputProps, 'leftIcon' | 'rightIcon' | 'type'> {
  onSearch?: (value: string) => void
  onClear?: () => void
  showClearButton?: boolean
  value?: string
  defaultValue?: string
}

const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  ({
    className,
    placeholder = 'Search...',
    onSearch,
    onClear,
    showClearButton = true,
    value,
    defaultValue,
    onChange,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || '')
    const isControlled = value !== undefined
    const searchValue = isControlled ? value : internalValue

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      
      if (!isControlled) {
        setInternalValue(newValue)
      }
      
      onChange?.(e)
      onSearch?.(newValue)
    }

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('')
      }
      
      onClear?.()
      onSearch?.('')
    }

    return (
      <div className={cn('relative', className)}>
        <Input
          ref={ref}
          type="search"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleChange}
          leftIcon={<SearchIcon />}
          rightIcon={
            showClearButton && searchValue ? (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-4 w-4 absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
                onClick={handleClear}
              >
                <XIcon />
              </Button>
            ) : undefined
          }
          {...props}
        />
      </div>
    )
  }
)

SearchField.displayName = 'SearchField'

export { SearchField }