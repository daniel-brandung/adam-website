"use client";

import { motion } from "motion/react";
import type { CareerEntry } from "@/lib/dictionaries/types";
import { useLocale } from "@/lib/locale-context";
import { Trophy, Star } from "lucide-react";

type TimelineItemProps = {
  entry: CareerEntry;
  index: number;
  isLast: boolean;
};

export function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  const { isRtl } = useLocale();
  const isEven = index % 2 === 0;

  const slideInFromStart = isRtl ? 60 : -60;
  const slideInFromEnd = isRtl ? -60 : 60;

  return (
    <div className="relative flex items-start gap-6 md:gap-0">
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] w-full gap-8">
        <div className={isEven ? "flex justify-start" : ""}>
          {isEven ? (
            <motion.div
              initial={{ opacity: 0, x: slideInFromStart }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md"
            >
              <TimelineCard entry={entry} />
            </motion.div>
          ) : (
            <div />
          )}
        </div>

        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, type: "spring" }}
            className={`w-5 h-5 rounded-full border-4 z-10 ${
              entry.id === "ramat-gan"
                ? "bg-primary border-primary shadow-lg shadow-primary/40"
                : "bg-card border-primary/60"
            }`}
          />
          {!isLast && (
            <div className="w-px flex-1 bg-border min-h-8" />
          )}
        </div>

        <div className={!isEven ? "flex justify-end" : ""}>
          {!isEven ? (
            <motion.div
              initial={{ opacity: 0, x: slideInFromEnd }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md"
            >
              <TimelineCard entry={entry} />
            </motion.div>
          ) : (
            <div />
          )}
        </div>
      </div>

      <div className="md:hidden flex gap-4 w-full">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, type: "spring" }}
            className={`w-4 h-4 rounded-full border-[3px] z-10 shrink-0 mt-1 ${
              entry.id === "ramat-gan"
                ? "bg-primary border-primary shadow-lg shadow-primary/40"
                : "bg-card border-primary/60"
            }`}
          />
          {!isLast && <div className="w-px flex-1 bg-border" />}
        </div>
        <motion.div
          initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex-1 pb-10"
        >
          <TimelineCard entry={entry} />
        </motion.div>
      </div>
    </div>
  );
}

function TimelineCard({ entry }: { entry: CareerEntry }) {
  const isCurrentTeam = entry.id === "ramat-gan";

  return (
    <div
      className={`bg-card border rounded-xl p-5 md:p-6 transition-all hover:border-primary/30 ${
        isCurrentTeam
          ? "border-primary/40 shadow-lg shadow-primary/5"
          : "border-border"
      }`}
    >
      <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
        {entry.years}
      </span>

      <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
        {entry.team}
      </h3>

      <p className="text-sm text-muted-foreground mb-1">
        {entry.role} | {entry.league}
      </p>

      {entry.stats && (
        <p className="text-sm text-primary/80 font-medium mb-3">
          {entry.stats}
        </p>
      )}

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {entry.description}
      </p>

      {entry.achievements.length > 0 && (
        <div className="space-y-2">
          {entry.achievements.map((achievement) => {
            const isChampionship =
              achievement.includes("אלוף") ||
              achievement.includes("גביע") ||
              achievement.includes("מצטיין") ||
              achievement.includes("Champion") ||
              achievement.includes("Cup") ||
              achievement.includes("Player of the Month");
            return (
              <div
                key={achievement}
                className="flex items-start gap-2 text-xs md:text-sm"
              >
                {isChampionship ? (
                  <Trophy className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                ) : (
                  <Star className="w-3.5 h-3.5 text-primary/60 shrink-0 mt-0.5" />
                )}
                <span className="text-foreground/80">{achievement}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
