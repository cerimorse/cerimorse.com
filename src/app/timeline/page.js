import { data } from "@/modules/timeline";
import {
  Briefcase as BriefcaseIcon,
  GraduationCap as GraduationCapIcon,
  School2 as School2Icon,
  Trophy as TrophyIcon,
  Users2 as Users2Icon,
} from "@/components/common/icons";
import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineConnector,
  TimelineContent,
  TimelineHeader,
  TimelineDescription,
} from "@/components/common/timeline";
import { Typography } from "@/components/common/typography";

const icons = {
  award: <TrophyIcon />,
  education: <GraduationCapIcon />,
  mentor: <Users2Icon />,
  training: <School2Icon />,
  work: <BriefcaseIcon />,
};

export default function TimelinePage() {
  return (
    <section className="max-w-screen-lg px-4 py-16 mx-auto sm:px-8">
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-6 md:h-min md:sticky md:top-[7.5rem]">
          <Typography variant="h3">
            Here are some significant moments from my professional career.
          </Typography>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Timeline>
            {data.map(
              ({ type, date: { value, display }, description }, idx) => (
                <TimelineItem key={idx}>
                  <TimelineConnector />
                  <TimelineIcon>{icons[type]}</TimelineIcon>
                  <TimelineContent>
                    <TimelineHeader>
                      <time
                        dateTime={value}
                        className="text-sm font-semibold tracking-tight"
                      >
                        {display}
                      </time>
                    </TimelineHeader>
                    <TimelineDescription>{description}</TimelineDescription>
                  </TimelineContent>
                </TimelineItem>
              )
            )}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
