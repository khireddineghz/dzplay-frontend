import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    rightElement?: React.ReactNode;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, rightElement, error, ...props }, ref) => {
    return (
      <div className="relative group w-full">
        <input
          type={type}
          className={cn(
            "flex h-14 w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-surface-dark/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 dark:text-white transition-all",
            icon && "pl-11", // Add padding if icon exists
            rightElement && "pr-12", // Add padding if right element exists
            error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20",
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
            <div className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors pointer-events-none",
              error && "text-red-500 group-focus-within:text-red-500"
            )}>
                {icon}
            </div>
        )}
        {rightElement && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors">
                {rightElement}
            </div>
        )}
        {error && (
          <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">error</span>
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
