"use client";

import * as React from "react";
import { career } from "@/modules/content";
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

const icons = {
  award: <TrophyIcon />,
  education: <GraduationCapIcon />,
  mentor: <Users2Icon />,
  training: <School2Icon />,
  work: <BriefcaseIcon />,
};

export function BasicTimeline() {
  return (
    <div className="relative">
      <Timeline>
        {career.map(({ type, date: { value, display }, description }, idx) => (
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
        ))}
      </Timeline>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted to-98% pointer-events-none" />
    </div>
  );
}
