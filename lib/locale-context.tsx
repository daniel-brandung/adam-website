"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Dictionary } from "./dictionaries/types";
import { he } from "./dictionaries/he";
import { en } from "./dictionaries/en";

type Locale = "he" | "en";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  isRtl: boolean;
};

const dictionaries: Record<Locale, Dictionary> = { he, en };

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "preferred-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("he");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && (stored === "he" || stored === "en")) {
      setLocaleState(stored);
      document.documentElement.lang = stored;
      document.documentElement.dir = stored === "he" ? "rtl" : "ltr";
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === "he" ? "rtl" : "ltr";
  }, []);

  const t = dictionaries[locale];
  const isRtl = locale === "he";

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, isRtl }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
