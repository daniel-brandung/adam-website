"use client";

import { useLocale } from "@/lib/locale-context";
import { SectionHeading } from "./SectionHeading";
import { TimelineItem } from "./TimelineItem";

export function Timeline() {
  const { t } = useLocale();

  return (
    <section id="timeline" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/2 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.timeline.title}
          subtitle={t.timeline.subtitle}
        />

        <div className="mt-12 md:mt-16">
          {t.timeline.entries.map((entry, index) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              index={index}
              isLast={index === t.timeline.entries.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
