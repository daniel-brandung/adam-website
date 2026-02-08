"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

export function Hero() {
  const { t, isRtl } = useLocale();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background" />

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-2 border-white rounded-full" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white" />
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className={`flex-1 text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary font-bold text-lg md:text-xl tracking-wider uppercase">
                #{t.hero.number}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mt-4 leading-tight"
            >
              {t.hero.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mt-6"
            >
              {t.hero.position}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8"
            >
              <span className="bg-primary/10 text-primary border border-primary/20 rounded-full px-6 py-2 text-sm font-medium">
                {t.hero.currentTeam}
              </span>
              <span className="bg-secondary text-secondary-foreground rounded-full px-6 py-2 text-sm font-medium">
                {t.hero.currentLeague}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-12"
            >
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="text-sm">{t.hero.discoverMore}</span>
                <motion.svg
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="rotate-0"
                >
                  <title>{t.hero.scrollDown}</title>
                  <path
                    d="M10 3v14m0 0l-5-5m5 5l5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="shrink-0 relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/10">
                <Image
                  src={t.hero.profileImage}
                  alt={t.hero.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              <div className={`absolute -bottom-4 ${isRtl ? "-left-4" : "-right-4"} bg-primary text-primary-foreground w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-lg`}>
                {t.hero.number}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
