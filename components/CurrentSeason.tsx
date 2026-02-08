"use client";

import { motion } from "motion/react";
import { useLocale } from "@/lib/locale-context";
import { SectionHeading } from "./SectionHeading";
import { Trophy, TrendingUp, FileSignature, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const seasonStatIcons: LucideIcon[] = [Target, TrendingUp, TrendingUp];
const highlightIcons: LucideIcon[] = [Trophy, FileSignature, Target];

export function CurrentSeason() {
  const { t } = useLocale();

  return (
    <section id="current" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.currentSeason.title}
          subtitle={t.currentSeason.subtitle}
        />

        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto mb-12">
          {t.currentSeason.stats.map((stat, index) => {
            const Icon = seasonStatIcons[index];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 md:p-6 text-center"
              >
                <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-black text-foreground">
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.currentSeason.highlights.map((item, index) => {
            const Icon = highlightIcons[index];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className={`rounded-xl p-6 transition-all ${
                  item.highlight
                    ? "bg-linear-to-bl from-primary/15 via-card to-card border-2 border-primary/30 shadow-lg shadow-primary/5"
                    : "bg-card border border-border hover:border-primary/20"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                    item.highlight ? "bg-primary/20" : "bg-secondary"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      item.highlight ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                </div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
