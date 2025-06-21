"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type TFont = "default" | "dyslexic";

type TPrefContext = {
  font: TFont | null;
  changeFont: () => void;
};

const PrefContext = createContext<TPrefContext | undefined>(undefined);

type PrefProviderProps = {
  children: ReactNode;
};

export const PrefProvider: React.FC<PrefProviderProps> = ({ children }) => {
  const [font, setFont] = useState<TFont | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const changeFont = (f?: TFont) => {
    const r: HTMLElement | null = document.querySelector(":root");

    if (f) {
      setFont(f);
      if (r) {
        if (f === "default") {
          r.style.setProperty("--font-current", "var(--font-default)");
          r.style.setProperty(
            "--font-current-serif",
            "var(--font-default-serif)"
          );
        } else {
          r.style.setProperty("--font-current", "var(--font-dyslexic)");
          r.style.setProperty("--font-current-serif", "var(--font-dyslexic)");
        }
      }
      return;
    }

    if (font === "default" || !font) {
      setFont("dyslexic");
      localStorage.setItem("font", "dyslexic");

      if (r) {
        r.style.setProperty("--font-current", "var(--font-dyslexic)");
        r.style.setProperty("--font-current-serif", "var(--font-dyslexic)");
      }
    } else {
      setFont("default");
      localStorage.setItem("font", "default");

      if (r) {
        r.style.setProperty("--font-current", "var(--font-default)");
        r.style.setProperty(
          "--font-current-serif",
          "var(--font-default-serif)"
        );
      }
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const f = localStorage.getItem("font");

    if (f && (f as TFont)) {
      changeFont(f as TFont);
    }
    setIsLoading(false);
  }, []);

  return (
    <PrefContext.Provider value={{ font, changeFont }}>
      {children}
      {isLoading && (
        <div className="w-screen h-screen fixed z-50 inset-0 bg-black/50">
          loading...
        </div>
      )}
    </PrefContext.Provider>
  );
};

export const usePrefs = () => {
  const context = useContext(PrefContext);

  if (!context) {
    throw new Error("usePrefs must be used with a PrefProvider");
  }

  return context;
};
