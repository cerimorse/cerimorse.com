import { testimonials } from "@/modules/content";
import {
  Carousel,
  CarouselViewport,
  CarouselItem,
  CarouselContent,
  CarouselControls,
  CarouselTrigger,
  CarouselPrev,
  CarouselNext,
} from "@/components/common/carousel";
import { Avatar, AvatarImage } from "@/components/common/avatar";
import { Typography } from "@/components/common/typography";

export function Testimonials() {
  return (
    <Carousel className="max-w-xl space-y-4 py-4">
      <CarouselViewport>
        {testimonials.map(({ name, job, avatar, quote }) => (
          <CarouselItem key={name} className="h-fit">
            <CarouselContent>
              <Typography
                variant="body"
                className="italic"
              >{`"${quote}"`}</Typography>
              <div className="inline-flex items-center space-x-6">
                <Avatar>
                  <AvatarImage src={avatar} alt={name} />
                </Avatar>
                <div>
                  <Typography varaint="body" className="text-muted-foreground">
                    {name}
                  </Typography>
                  <Typography
                    variant="body"
                    className="text-sm text-muted-foreground"
                  >
                    {job}
                  </Typography>
                </div>
              </div>
            </CarouselContent>
          </CarouselItem>
        ))}
      </CarouselViewport>
      <CarouselControls>
        <div className="space-x-1">
          <CarouselPrev />
          <CarouselNext />
        </div>
        <div className="space-x-2 mr-3">
          {testimonials.map((_, index) => (
            <CarouselTrigger key={index} index={index}>
              <span className="sr-only">{`Testimonial ${index + 1}`}</span>
            </CarouselTrigger>
          ))}
        </div>
      </CarouselControls>
    </Carousel>
  );
}
