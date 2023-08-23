import { TimelineMoments } from "@/components/timeline/timeline-moments";

export const metadata = {
  title: "Timeline",
  alternates: {
    canonical: "/timeline",
  },
};

export default function TimelinePage() {
  return (
    <section className="max-w-screen-lg px-4 py-16 mx-auto sm:px-8">
      <TimelineMoments />
    </section>
  );
}
