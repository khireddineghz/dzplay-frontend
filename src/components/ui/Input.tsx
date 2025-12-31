import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    rightElement?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, rightElement, ...props }, ref) => {
    return (
      <div className="relative group">
        <input
          type={type}
          className={cn(
            "flex h-14 w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-surface-dark/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 dark:text-white transition-all",
            icon && "pl-11", // Add padding if icon exists
            rightElement && "pr-12", // Add padding if right element exists
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors pointer-events-none">
                {icon}
            </div>
        )}
        {rightElement && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors">
                {rightElement}
            </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
