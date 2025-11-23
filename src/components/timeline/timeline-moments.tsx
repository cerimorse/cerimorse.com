"use client";

import * as React from "react";
import { moments } from "@/content/timeline";
import {
  Briefcase as BriefcaseIcon,
  GraduationCap as GraduationCapIcon,
  School2 as School2Icon,
  Trophy as TrophyIcon,
  Users2 as Users2Icon,
} from "@/components/common/icons";
import { ToggleGroup, ToggleGroupItem } from "@/components/common/toggle-group";
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

import type { TimelineMomentType } from "@/content/timeline";

const icons = {
  award: <TrophyIcon />,
  education: <GraduationCapIcon />,
  mentor: <Users2Icon />,
  training: <School2Icon />,
  work: <BriefcaseIcon />,
};

export function TimelineMoments() {
  const [filteredTypes, setFilteredTypes] = React.useState<
    TimelineMomentType[]
  >([]);

  const filteredMoments = React.useMemo(() => {
    if (filteredTypes.length === 0) {
      return moments;
    }
    return moments.filter(({ type }) => filteredTypes.includes(type));
  }, [filteredTypes]);

  const handleTypeToggle = (types: TimelineMomentType[]) => {
    setFilteredTypes(types);
  };

  const types = [...new Set(moments.map(({ type }) => type))];

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-8">
      <div className="col-span-12 md:col-span-6 md:h-min md:sticky md:top-30">
        <Typography variant="h2">
          Here are some significant moments from my professional career.
        </Typography>
        <Typography variant="body" className="mt-8">
          Filter by type:
        </Typography>
        <ToggleGroup
          type="multiple"
          variant="outline"
          size="sm"
          spacing={2}
          onValueChange={handleTypeToggle}
          className="flex-wrap mt-4 mb-16"
        >
          {types.map((type) => (
            <ToggleGroupItem key={type} value={type}>
              {icons[type]} {type}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Timeline>
          {filteredMoments.map(
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
            ),
          )}
        </Timeline>
      </div>
    </div>
  );
}
