import { TimelineMoments } from "@/components/timeline/timeline-moments";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline",
  alternates: {
    canonical: "/timeline",
  },
};

export default function TimelinePage() {
  return (
    <section>
      <TimelineMoments />
    </section>
  );
}
