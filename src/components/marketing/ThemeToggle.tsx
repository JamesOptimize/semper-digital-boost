import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";
const COLORS: Record<Theme, string> = { dark: "#1A1816", light: "#F8F5F0" };

function apply(theme: Theme) {
  document.documentElement.classList.toggle("light", theme === "light");
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", COLORS[theme]);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const t: Theme = document.documentElement.classList.contains("light") ? "light" : "dark";
    setTheme(t);
    apply(t);
  }, []);

  const next: Theme = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => {
        setTheme(next);
        apply(next);
        try {
          localStorage.setItem("theme", next);
        } catch {
          /* storage unavailable */
        }
      }}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-forest transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze md:h-10 md:w-10"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
