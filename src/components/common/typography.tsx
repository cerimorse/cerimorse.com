import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-2xl font-extrabold tracking-tight text-balance",
      h2: "scroll-m-20 text-xl font-semibold tracking-tight",
      h3: "scroll-m-20 text-lg font-semibold tracking-tight",
      h4: "scroll-m-20 text-base font-semibold tracking-tight",
      body: "leading-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const typographyElements: Record<
  NonNullable<VariantPropType["variant"]>,
  keyof React.JSX.IntrinsicElements
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  blockquote: "blockquote",
  lead: "p",
  large: "div",
  small: "small",
  muted: "p",
};

function Typography<V extends keyof typeof typographyElements>({
  variant = "body" as V,
  asChild = false,
  className,
  ...props
}: React.ComponentProps<(typeof typographyElements)[V]> & {
  variant?: V;
  asChild?: boolean;
}) {
  const Comp = (
    asChild ? Slot : typographyElements[variant]
  ) as React.ElementType;
  return (
    <Comp
      data-slot="typography"
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Typography, typographyVariants };
