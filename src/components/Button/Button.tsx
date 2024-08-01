import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "@utils";

type ButtonType = "primary" | "secondary";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: ButtonType;
};

const Button: FC<Props> = ({
  children,
  type = "button",
  buttonType = "primary",
  className,
  ...props
}) => {
  const classNames = cn(
    "h-10 text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 duration-300",
    {
      "bg-green-700 hover:bg-green-800": buttonType === "primary",
      "bg-gray-700 hover:bg-gray-800": buttonType === "secondary",
      "opacity-40 cursor-not-allowed": props.disabled,
    },
    className
  );

  return (
    <button type={type} className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
