import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useFetcher } from "@remix-run/react";

/**
 * Supported theme variants for the application.
 */
export enum Theme {
  LIGHT = "light",
  DARK = "dark",
  LAVA = "lava",
  LIME = "lime",
  BARBIE = "barbie",
}

/**
 * List of available themes for iteration or validation.
 */
export const themes: Array<Theme> = Object.values(Theme);

/**
 * User preference for theme selection.
 * 'SYSTEM' follows OS settings, 'SELECTED' uses the manually chosen theme.
 */
export enum Preference {
  SELECTED = "selected",
  SYSTEM = "system",
}

const preferences: Array<Preference> = Object.values(Preference);

export const DEFAULT_THEME: Theme = Theme.LIGHT;
const DEFAULT_PREFERENCE: Preference = Preference.SYSTEM;

type ThemeContextType = {
  theme: Theme | null;
  preference: Preference | null;
  setTheme: (theme: Theme, preference?: Preference) => void;
};

/**
 * Context for managing and accessing the current theme and user preference.
 */
export const ThemeContext = createContext<ThemeContextType | null>(null);

// Inspired from Kent C. Dodds repo https://github.com/kentcdodds/kentcdodds.com/blob/main/app/utils/theme-provider.tsx
const prefersLightMQ = "(prefers-color-scheme: light)";

/**
 * Returns the theme that matches the user's system preference.
 */
export const getSystemTheme = (): Theme =>
  window.matchMedia(prefersLightMQ).matches ? Theme.LIGHT : Theme.DARK;

/**
 * Provider component that handles theme state, system preference synchronization,
 * and persistence via a side-effect (e.g., Remix fetcher).
 */
export const ThemeProvider = ({
  children,
  specifiedTheme,
  specifiedPreference,
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme | null>(() => {
    // If a theme was specified (e.g., from a cookie on the server), use it.
    // Otherwise, fallback to system preference if on the client.
    if (specifiedTheme) {
      if (themes.includes(specifiedTheme)) return specifiedTheme;
      else return null;
    }

    if (typeof window !== "object") return null;

    return getSystemTheme();
  });
  const [preference, setPreference] = useState<Preference | null>(() => {
    if (isValidPreference(specifiedPreference)) return specifiedPreference;

    return DEFAULT_PREFERENCE;
  });

  // Use a ref for the fetcher to avoid re-triggering effects if the fetcher instance changes
  const persistTheme = useFetcher();
  const persistThemeRef = useRef(persistTheme);
  useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);

  // Sync with system theme changes when preference is set to SYSTEM
  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ);

    const handleChange = () => {
      if (preference !== Preference.SYSTEM) return;

      const newTheme = mediaQuery.matches ? Theme.LIGHT : Theme.DARK;
      setThemeState(newTheme);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [preference]);

  /**
   * Updates the theme and preference state, and triggers persistence.
   */
  const setTheme = useCallback(
    (newTheme: Theme, newPreference: Preference = Preference.SYSTEM) => {
      persistThemeRef.current.submit(
        { theme: newTheme, preference: newPreference },
        { action: "action/set-theme", method: "post" }
      );
      setThemeState(newTheme);
      setPreference(newPreference);
    },
    []
  );

  const value = {
    theme,
    preference,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

interface ThemeProviderProps {
  children: JSX.Element;
  specifiedTheme: Theme | undefined;
  specifiedPreference: Preference | undefined;
}

/**
 * Hook to access the theme context.
 * Must be used within a ThemeProvider.
 */
export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (themeContext === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return themeContext;
};

/**
 * Validates if the given value is a valid Theme.
 */
export const isValidTheme = (theme: unknown): theme is Theme => {
  return themes.includes(theme as Theme);
};

/**
 * Validates if the given value is a valid Preference.
 */
export const isValidPreference = (
  preference: unknown
): preference is Preference => {
  return preferences.includes(preference as Preference);
};
