"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { useLocale } from "@/lib/locale-context";
import { SectionHeading } from "./SectionHeading";

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const { t, isRtl } = useLocale();

  return (
    <section id="stats" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/3 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.stats.title}
          subtitle={t.stats.subtitle}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {t.stats.items.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.08, y: -6 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-all group"
            >
              <div className="text-3xl md:text-4xl font-black text-primary group-hover:text-gold transition-colors">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-12 border border-primary/20 rounded-xl p-6 md:p-8 max-w-3xl mx-auto text-center ${
            isRtl
              ? "bg-linear-to-l from-primary/10 via-card to-card"
              : "bg-linear-to-r from-primary/10 via-card to-card"
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            {t.stats.nationalTeam.title}
          </h3>
          <p className="text-muted-foreground">
            {t.stats.nationalTeam.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
