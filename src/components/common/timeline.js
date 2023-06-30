import * as React from "react";
import { cn } from "@/modules/utils";

const Timeline = React.forwardRef(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn("w-full list-none", className)} {...props} />
));
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("relative flex", className)} {...props} />
));
TimelineItem.displayName = "TimelineItem";

const TimelineConnector = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "absolute top-0 left-0 h-full w-8 flex justify-center bg-transparent",
        className
      )}
      {...props}
    >
      <span className="h-full w-0.5 bg-accent" />
      {children}
    </span>
  )
);
TimelineConnector.displayName = "TimelineConnector";

const TimelineIcon = React.forwardRef(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "relative inline-flex items-center justify-center h-8 w-8 shrink-0 overflow-hidden rounded-full bg-accent",
      className
    )}
    {...props}
  />
));
TimelineIcon.displayName = "TimelineIcon";

const TimelineContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("ml-8 pb-8", className)} {...props} />
));
TimelineContent.displayName = "TimelineContent";

const TimelineHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between h-8 mb-2", className)}
    {...props}
  />
));
TimelineHeader.displayName = "TimelineHeader";

const TimelineDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
TimelineDescription.displayName = "TimelineDescription";

export {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineContent,
  TimelineHeader,
  TimelineDescription,
};
