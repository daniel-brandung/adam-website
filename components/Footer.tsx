"use client";

import { useLocale } from "@/lib/locale-context";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-primary font-bold text-2xl">
              {t.footer.number}
            </span>
            <span className="text-foreground font-bold text-lg">
              {t.footer.name}
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://www.macrgbc.co.il"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {t.footer.links.team}
            </a>
            <a
              href="https://basket.co.il"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              basket.co.il
            </a>
            <a
              href={t.footer.links.wikipediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {t.footer.links.wikipedia}
            </a>
          </div>

          <p className="text-xs text-muted-foreground/60">
            {t.footer.name} &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
