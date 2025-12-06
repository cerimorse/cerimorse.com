import { cn } from "@/lib/utils";

function Timeline({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul data-slot="timeline" className={cn("w-full", className)} {...props} />
  );
}

function TimelineItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="timeline-item"
      className={cn("relative flex", className)}
      {...props}
    />
  );
}

function TimelineConnector({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="timeline-connector"
      className={cn(
        "absolute top-0 left-0 h-full w-8 flex justify-center bg-transparent",
        className,
      )}
      {...props}
    >
      <span className="h-full w-0.5 bg-accent" />
      {children}
    </span>
  );
}

function TimelineIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="timeline-icon"
      className={cn(
        "relative inline-flex items-center justify-center h-8 w-8 shrink-0 overflow-hidden rounded-full bg-accent",
        className,
      )}
      {...props}
    />
  );
}

function TimelineContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-content"
      className={cn("ml-8 pb-8", className)}
      {...props}
    />
  );
}

function TimelineHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-header"
      className={cn("flex items-center justify-between h-8 mb-2", className)}
      {...props}
    />
  );
}

function TimelineDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="timeline-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineContent,
  TimelineHeader,
  TimelineDescription,
};
