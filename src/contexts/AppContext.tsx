import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "@/lib/i18n";

type Theme = "light" | "dark";

interface AppContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  theme: Theme;
  toggleTheme: () => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  // hydrate from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedLang = (localStorage.getItem("xtech.lang") as Lang | null) ?? "en";
    const storedTheme =
      (localStorage.getItem("xtech.theme") as Theme | null) ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "dark");
    setLangState(storedLang);
    setTheme(storedTheme);
  }, []);

  // sync html attributes
  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("xtech.lang", lang);
  }, [lang]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
    localStorage.setItem("xtech.theme", theme);
  }, [theme]);

  const value: AppContextValue = {
    lang,
    setLang: setLangState,
    toggleLang: () => setLangState((l) => (l === "en" ? "ar" : "en")),
    theme,
    toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    t: translations[lang],
    dir: lang === "ar" ? "rtl" : "ltr",
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
