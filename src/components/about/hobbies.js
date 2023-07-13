import { hobbies } from "@/modules/content";
import { CloudinaryImage } from "@/components/common/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/common/card";
import { Typography } from "@/components/common/typography";

export function Hobbies() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-8">
      {hobbies.map(({ name, description, image }) => (
        <Card key={name} className="col-span-12 overflow-hidden md:col-span-6">
          <div className="relative h-80">
            <CloudinaryImage
              src={image}
              alt="Alt tag"
              fill
              sizes="(min-width: 0px) 100vw, (min-width: 768px) 50vw"
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Typography
              variant="body"
              className="text-sm text-muted-foreground"
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
