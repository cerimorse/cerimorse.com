import { characteristics } from "@/modules/content";
import {
  Layers as LayersIcon,
  MonitorSmartphone as MonitorSmartphoneIcon,
  PersonStanding as PersonStandingIcon,
  Users2 as Users2Icon,
} from "@/components/common/icons";
import { Card, CardHeader, CardContent } from "@/components/common/card";
import { Typography } from "@/components/common/typography";

const icons = {
  Fullstack: <LayersIcon />,
  Responsive: <MonitorSmartphoneIcon />,
  Accessible: <PersonStandingIcon />,
  Mentoring: <Users2Icon />,
};

export function Characteristics() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-screen-md mx-auto md:gap-8">
      {characteristics.map(({ name, description }) => (
        <Card key={name} className="col-span-2 md:col-span-1">
          <CardHeader className="flex-row items-center space-x-4 space-y-0">
            <span className="w-6 h-6">{icons[name]}</span>
            <span className="text-2xl font-semibold leading-none tracking-tight">
              {name}
            </span>
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
