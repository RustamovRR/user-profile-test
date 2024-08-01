import React, { InputHTMLAttributes } from "react";
import { cn } from "../../utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          {...props}
          type={type}
          ref={ref}
          className={cn(
            "h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            !!error &&
              "!border-red-500 hover:!border-red-500 focus:!border-red-500",
            className
          )}
        />
        {!!error && (
          <p className="absolute -bottom-4 text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

export default Input;
