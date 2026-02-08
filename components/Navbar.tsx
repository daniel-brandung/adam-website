"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocale } from "@/lib/locale-context";
import { Menu, X, Globe } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick() {
    setIsMobileMenuOpen(false);
  }

  function toggleLocale() {
    setLocale(locale === "he" ? "en" : "he");
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            type="button"
            onClick={() => {
              handleNavClick();
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <span className="text-primary font-bold text-2xl md:text-3xl">
              {t.hero.number}
            </span>
            <span className="text-foreground font-bold text-lg md:text-xl group-hover:text-primary transition-colors">
              {t.hero.name}
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={toggleLocale}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm font-medium cursor-pointer"
              aria-label={locale === "he" ? "Switch to English" : "עבור לעברית"}
            >
              <Globe className="w-4 h-4" />
              <span>{locale === "he" ? "EN" : "HE"}</span>
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleLocale}
              className="text-foreground p-2 flex items-center gap-1 cursor-pointer"
              aria-label={locale === "he" ? "Switch to English" : "עבור לעברית"}
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium">
                {locale === "he" ? "EN" : "HE"}
              </span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="text-foreground p-2"
              aria-label={locale === "he" ? "תפריט" : "Menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {t.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-muted-foreground hover:text-primary transition-colors text-base font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
