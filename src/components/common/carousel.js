"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/modules/utils";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@/components/common/icons";

const CarouselContext = React.createContext({});

const useCarousel = () => {
  const carouselContext = React.useContext(CarouselContext);

  if (!carouselContext) {
    throw new Error("useCarousel should be used within <Carousel>");
  }

  const { api } = carouselContext;

  return {
    ...api,
  };
};

const Carousel = ({ options = {}, className, ...props }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    watchDrag: (_, event) => {
      if (event.type === "mousedown") {
        return false;
      }
      return true;
    },
    ...options,
  });
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const handleSelectChange = () => {
      const index = emblaApi.selectedScrollSnap();
      setCurrentIndex(index || 0);
    };

    emblaApi?.on("select", handleSelectChange);

    return () => {
      emblaApi?.off("select", handleSelectChange);
    };
  }, [emblaApi]);

  const selectedIndex = React.useCallback(() => currentIndex, [currentIndex]);

  return (
    <CarouselContext.Provider value={{ api: { ...emblaApi, selectedIndex } }}>
      <div
        ref={emblaRef}
        className={cn("relative w-full overflow-hidden", className)}
        {...props}
      />
    </CarouselContext.Provider>
  );
};
Carousel.displayName = "Carousel";

const CarouselViewport = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props} />
));
CarouselViewport.displayName = "CarouselViewport";

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "min-w-0 flex-grow-0 flex-shrink-0 basis-full mx-2 rounded-md border overflow-hidden",
      className
    )}
    {...props}
  />
));
CarouselItem.displayName = "CarouselItem";

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-4 p-6 bg-background", className)}
    {...props}
  />
));
CarouselContent.displayName = "CarouselContent";

const CarouselControls = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex justify-between items-center p-2", className)}
    {...props}
  />
));
CarouselControls.displayName = "CarouselControls";

const CarouselTrigger = React.forwardRef(
  ({ index, className, ...props }, ref) => {
    const { scrollTo, selectedIndex } = useCarousel();

    const currentIndex = selectedIndex();
    const selected = currentIndex === index;

    return (
      <button
        ref={ref}
        data-selected={selected ? "" : undefined}
        className={cn(
          "h-2 w-2 inline-flex items-center justify-center rounded-full text-sm font-medium bg-primary/90 ring-offset-background transition-colors hover:bg-primary data-[selected]:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        onClick={() => scrollTo(index)}
        {...props}
      />
    );
  }
);
CarouselTrigger.displayName = "CarouselTrigger";

const CarouselPrev = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollPrev } = useCarousel();

  return (
    <button
      ref={ref}
      className={cn(
        "h-9 w-9 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="sr-only">Previous testimonial</span>
    </button>
  );
});
CarouselPrev.displayName = "CarouselPrev";

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollNext } = useCarousel();

  return (
    <button
      ref={ref}
      className={cn(
        "h-9 w-9 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRightIcon />
      <span className="sr-only">Next testimonial</span>
    </button>
  );
});
CarouselNext.displayName = "CarouselNext";

export {
  useCarousel,
  Carousel,
  CarouselViewport,
  CarouselItem,
  CarouselContent,
  CarouselControls,
  CarouselTrigger,
  CarouselPrev,
  CarouselNext,
};
