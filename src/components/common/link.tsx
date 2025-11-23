import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva("", {
  variants: {
    variant: {
      default: "text-primary underline-offset-4 hover:underline",
      underline: "text-primary underline-offset-4 underline",
      unstyled: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Link({
  variant,
  href,
  className,
  ...props
}: Omit<React.ComponentProps<"a">, keyof NextLinkProps> &
  NextLinkProps &
  VariantProps<typeof linkVariants>) {
  return (
    <NextLink
      data-slot="link"
      href={href}
      className={cn(linkVariants({ variant, className }))}
      {...props}
    />
  );
}

export { linkVariants, Link };
