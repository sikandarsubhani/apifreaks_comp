import { useContext } from "react";
import { THEME, ThemeContextType } from "../types/types";
import { ThemeContext } from "../components/dark-mode/ThemeProvider";

export function useTheme(): ThemeContextType {
  const defaultThemeContext: ThemeContextType = {
    theme: THEME.System,
    toggleTheme: () => {
      throw new Error('ThemeProvider is missing: toggleTheme called outside provider');
    },
    setTheme: (t: THEME) => {
      throw new Error(`ThemeProvider is missing: attempted setTheme(${t})`);
    },
  };
  const context = useContext(ThemeContext);
  return context ?? defaultThemeContext;
}