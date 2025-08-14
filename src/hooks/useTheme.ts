import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored && stored !== 'system') {
        return stored === 'dark';
      }
      // Si no hay preferencia guardada o es 'system', usar la preferencia del sistema
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [themePreference, setThemePreference] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'system';
    }
    return 'system';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Añadir clase de transición antes de cambiar el tema
    root.style.setProperty('--theme-transition', 'all 0.3s ease-in-out');
    
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Remover la transición después de un breve delay para evitar conflictos
    setTimeout(() => {
      root.style.removeProperty('--theme-transition');
    }, 300);
  }, [isDark]);

  useEffect(() => {
    // Escuchar cambios en la preferencia del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (themePreference === 'system') {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [themePreference]);

  const setTheme = (theme: 'light' | 'dark' | 'system') => {
    setThemePreference(theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(systemPrefersDark);
    } else {
      setIsDark(theme === 'dark');
    }
  };

  const toggleTheme = () => {
    if (themePreference === 'system') {
      // Si está en modo sistema, cambiar a light o dark según el estado actual
      setTheme(isDark ? 'light' : 'dark');
    } else if (themePreference === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return { 
    isDark, 
    themePreference, 
    toggleTheme, 
    setTheme 
  };
};