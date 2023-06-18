import * as React from "react";
import NextLink from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva("", {
  variants: {
    variant: {
      default: "underline-offset-4 hover:underline text-primary",
      unstyled: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Link = React.forwardRef(({ variant, href, className, ...props }, ref) => {
  return (
    <NextLink
      ref={ref}
      href={href}
      className={cn(linkVariants({ variant, className }))}
      {...props}
    />
  );
});
Link.displayName = "Link";

export { linkVariants, Link };
