import { useApp } from "@/contexts/AppContext";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { lang, toggleLang } = useApp();
  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
    >
      <Languages className="h-4 w-4" />
      {lang === "en" ? "AR" : "EN"}
    </button>
  );
}
