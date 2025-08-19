'use client';
import { useTheme } from '../../hooks/hook';
import { THEME } from '../../types/types';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { DarkModeIcon, LightModeIcon, SystemIcon } from '../../icons/Icons';

const themeOptions: { value: THEME; label: string; icon: React.ReactNode }[] = [
  { value: THEME.Light, label: 'Light', icon: <ResponsiveIcon Icon={LightModeIcon} /> },
  { value: THEME.Dark, label: 'Dark', icon: <ResponsiveIcon Icon={DarkModeIcon} /> },
  { value: THEME.System, label: 'System', icon: <ResponsiveIcon Icon={SystemIcon} /> },
];

function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  const [effectiveTheme, setEffectiveTheme] = useState<THEME.Light | THEME.Dark>(THEME.Light);

  useEffect(() => {
    if (theme === THEME.System) {
      const updateSystemTheme = () => {
        setEffectiveTheme(getSystemTheme());
      };
      updateSystemTheme();
      let mediaQuery: MediaQueryList | null = null;
      if (typeof window !== 'undefined') {
        mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', updateSystemTheme);
      }
      return () => {
        if (mediaQuery) {
          mediaQuery.removeEventListener('change', updateSystemTheme);
        }
      };
    } else {
      setEffectiveTheme(theme as THEME.Light | THEME.Dark);
    }
  }, [theme]);

  const isDark = effectiveTheme === THEME.Dark;
  const mainIcon = isDark ? <ResponsiveIcon Icon={DarkModeIcon} /> : <ResponsiveIcon Icon={LightModeIcon} />;

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(open => !open)}
        aria-label={`Current theme: ${theme}. Click to change theme`}
        className={clsx(
          'p-1.5 lg:p-3 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer',
          isDark
            ? 'bg-gray-900 text-white hover:bg-gray-600'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        )}
        type="button"
      >
        {mainIcon}
      </button>
      {dropdownOpen && (
        <div
          className={clsx(
            'absolute top-full mt-2 right-0 py-2 rounded-lg shadow-lg border z-50 min-w-32',
            effectiveTheme === THEME.Light
              ? 'bg-white border-gray-200'
              : 'bg-primary-dark border-gray-600'
          )}
        >
          {themeOptions.map(option => (
            <button
              key={option.value}
              onClick={() => {
                setTheme(option.value);
                setDropdownOpen(false);
              }}
              className={clsx(
                'w-full px-4 py-2 text-left flex items-center gap-3 transition-colors duration-200 cursor-pointer',
                theme === option.value
                  ? effectiveTheme === THEME.Light
                    ? 'bg-blue-50 text-blue-700'
                    : ' text-blue-200'
                  : effectiveTheme === THEME.Light
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-gray-300 hover:bg-primary-dark-hover'
              )}
              type="button"
            >
              <span className="w-5 h-5 flex-shrink-0">
                {option.icon}
              </span>
              <span className="text-sm">{option.label}</span>
              {theme === option.value && (
                <span className="ml-auto w-2 h-2 bg-primary rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function getSystemTheme(): THEME.Light | THEME.Dark {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEME.Dark
      : THEME.Light;
  }
  return THEME.Light;
}

function ResponsiveIcon({ Icon, ...props }: { Icon: React.ComponentType<any>;[key: string]: any }) {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(max-width: 639px)');
      const handler = (e: MediaQueryListEvent) => setIsSmall(e.matches);
      setIsSmall(mq.matches);
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, []);
  return <Icon width={isSmall ? '1.2em' : undefined} height={isSmall ? '1.2em' : undefined} {...props} />;
}

export default DarkModeToggle;