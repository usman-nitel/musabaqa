import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-ink focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        green: "bg-primary text-white hover:bg-deep-green",
        outline:
          "border border-border bg-white text-primary hover:border-primary hover:bg-background",
        gold: "bg-gold-button text-deep-green hover:bg-[#e2bd75]",
      },
      size: {
        default: "",
        sm: "min-h-10 px-4",
        lg: "min-h-12 px-6",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "green",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { asChild = false, className, size, variant, ...props },
  ref,
) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      ref={ref}
      className={cn(buttonVariants({ className, size, variant }))}
      {...props}
    />
  );
});

export { Button, buttonVariants };
export type { ButtonProps };