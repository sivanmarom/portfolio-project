import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [enabled, setEnabled] = useState(() => {
    return localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [enabled]);

  return [enabled, setEnabled];
}