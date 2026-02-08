"use client";

import { motion } from "motion/react";
import { useLocale } from "@/lib/locale-context";
import { SectionHeading } from "./SectionHeading";
import { Play } from "lucide-react";

export function VideoSection() {
  const { t } = useLocale();

  return (
    <section id="highlights" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.videos.title}
          subtitle={t.videos.subtitle}
        />

        <div className="grid gap-8 max-w-4xl mx-auto">
          {t.videos.items.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
                <div className="relative w-full aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Play className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {video.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {t.videos.moments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all"
            >
              <span className="text-2xl font-black text-primary">
                {moment.stat}
              </span>
              <h4 className="text-base font-bold text-foreground mt-2 mb-1">
                {moment.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {moment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
