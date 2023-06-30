"use client";

import * as React from "react";
import { data } from "@/modules/timeline";
import {
  Briefcase as BriefcaseIcon,
  GraduationCap as GraduationCapIcon,
  School2 as School2Icon,
  Trophy as TrophyIcon,
  Users2 as Users2Icon,
} from "@/components/common/icons";
import { Chip } from "@/components/common/chip";
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

export function TimelineMoments() {
  const [filteredTypes, setFilteredTypes] = React.useState([]);

  const filteredData = React.useMemo(() => {
    if (filteredTypes.length === 0) {
      return data;
    }
    return data.filter(({ type }) => filteredTypes.includes(type));
  }, [filteredTypes]);

  const handleTypeToggle = (type) => () => {
    setFilteredTypes((prevFilteredTypes) => {
      const typeIndex = prevFilteredTypes.findIndex(
        (prevFilteredType) => prevFilteredType === type
      );
      return typeIndex === -1
        ? [...prevFilteredTypes, type]
        : prevFilteredTypes.filter(
            (prevFilteredType) => prevFilteredType !== type
          );
    });
  };

  const types = [...new Set(data.map(({ type }) => type))];

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-8">
      <div className="col-span-12 md:col-span-6 md:h-min md:sticky md:top-[7.5rem]">
        <Typography variant="h3">
          Here are some significant moments from my professional career.
        </Typography>
        <Typography variant="body" className="mt-8">
          Filter by type:
        </Typography>
        <div className="flex flex-wrap gap-2 mt-4 mb-16">
          {types.map((type) => (
            <Chip
              key={type}
              variant="outline"
              selected={filteredTypes.includes(type)}
              onClick={handleTypeToggle(type)}
            >
              {type}
            </Chip>
          ))}
        </div>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Timeline>
          {filteredData.map(
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
  );
}
