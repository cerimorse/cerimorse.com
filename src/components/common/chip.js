import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/modules/utils";

const chipVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 data-[selected]:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 data-[selected]:bg-destructive/50",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground data-[selected]:bg-accent/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 data-[selected]:bg-secondary/50",
      },
      size: {
        default: "h-8 px-2 py-1",
        sm: "h-7 px-1",
        lg: "h-9 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Chip = React.forwardRef(
  ({ variant, size, selected, asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        data-selected={selected ? "" : undefined}
        className={cn(chipVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Chip.displayName = "Chip";

export { Chip };
