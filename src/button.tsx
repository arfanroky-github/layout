import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyle = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "text-white", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100", 'text-secondary-text'],
      active: ["bg-secondary-active", "text-white", "hover:bg-secondary-hover"],
    },
    size: {
      default: ["rounded", "p-2", ],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
});

type ButtonProps = VariantProps<typeof buttonStyle> & ComponentProps<"button">;

function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyle({ variant, size }), className)}
    />
  );
}
export default Button;
