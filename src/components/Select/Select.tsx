import { FC, SelectHTMLAttributes } from "react";
import { cn } from "@utils";
import { ISelectOption } from "@types";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: ISelectOption[];
  error?: string;
}

const Select: FC<SelectProps> = ({ className, options, error, ...props }) => {
  return (
    <div className="relative">
      <select
        {...props}
        className={cn(
          "h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          !!error &&
            "!border-red-500 hover:!border-red-500 focus:!border-red-500",
          className
        )}
      >
        {options.map((option) => (
          <option
            key={option.label}
            value={option.value}
            selected={option.selected}
          >
            {option.label}
          </option>
        ))}
      </select>
      {!!error && (
        <p className="absolute -bottom-4 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Select;
