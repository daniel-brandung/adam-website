"use client";

import { motion } from "motion/react";
import { useLocale } from "@/lib/locale-context";
import { SectionHeading } from "./SectionHeading";
import { MapPin, Ruler, Calendar, Flag, Dribbble } from "lucide-react";

export function About() {
  const { t, isRtl } = useLocale();

  const infoCards = [
    {
      icon: MapPin,
      label: t.about.infoCards.birthPlace.label,
      value: t.about.infoCards.birthPlace.value,
    },
    {
      icon: Calendar,
      label: t.about.infoCards.birthDate.label,
      value: t.about.infoCards.birthDate.value,
    },
    {
      icon: Ruler,
      label: t.about.infoCards.height.label,
      value: t.about.infoCards.height.value,
    },
    {
      icon: Flag,
      label: t.about.infoCards.nationality.label,
      value: t.about.infoCards.nationality.value,
    },
    {
      icon: Dribbble,
      label: t.about.infoCards.position.label,
      value: t.about.infoCards.position.value,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.about.title} subtitle={t.about.subtitle} />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              {t.about.bio}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-card border border-border rounded-xl p-4 md:p-5 text-center hover:border-primary/30 transition-colors"
              >
                <card.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-xs text-muted-foreground mb-1">
                  {card.label}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {card.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
