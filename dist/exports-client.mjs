"use client";
import {
  ChevronRightIcon,
  CrossIcon,
  DarkModeIcon,
  HamburgerIcon,
  LightModeIcon,
  MobileNavigationCloseIcon,
  SearchIcon,
  SystemIcon,
  adminApi,
  contentApi,
  getAdminApi,
  getContentApi,
  navigationLinksPublic,
  pageUrl,
  stopClickPropagation
} from "./chunk-2F64GF7T.mjs";

// src/library/components/common/DropDownMenu.tsx
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function DropdownMenu({
  title,
  items,
  className,
  page,
  linkPrefetch = true
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdownOpen = () => setIsOpen(true);
  const toggleDropdownClose = () => setIsOpen(false);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        onMouseEnter: toggleDropdownOpen,
        onMouseLeave: toggleDropdownClose,
        className: "cursor-pointer",
        children: /* @__PURE__ */ jsx("div", { className: "font-bold", children: /* @__PURE__ */ jsx(
          Link,
          {
            href: page,
            className: "flex items-center",
            prefetch: linkPrefetch,
            children: /* @__PURE__ */ jsx("p", { children: title })
          }
        ) })
      }
    ),
    isOpen && /* @__PURE__ */ jsx(
      "div",
      {
        onMouseEnter: toggleDropdownOpen,
        onMouseLeave: toggleDropdownClose,
        className: "absolute w-48 h-20 z-50",
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: clsx(
              "mt-8 w-[45rem] bg-white dark:text-soft-white dark:bg-primary-dark shadow-xl rounded-lg overflow-hidden border border-gray-100 transform transition-all duration-300 ease-in-out dark:border-none",
              className
            ),
            children: [
              /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-3 dark:text-soft-white", children: title }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3", children: items.map((item) => /* @__PURE__ */ jsx("div", { className: "group relative", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: item.link,
                    className: "block p-3 rounded-lg transition-all duration-200 ease-in-out\n                        bg-gray-100 dark:bg-black hover:bg-gray-50 dark:hover:bg-primary-dark-hover hover:shadow-md\n                        transform hover:-translate-y-1",
                    prefetch: linkPrefetch,
                    children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-primary-dark group-hover:text-primary-dark-hover dark:text-soft-white", children: item.title }),
                      /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-500 group-hover:text-gray-400", children: [
                        `Explore ${title}`,
                        " \u2192"
                      ] })
                    ] })
                  }
                ) }, item.title)) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "bg-gray-50 px-4 py-3 border-t border-gray-100 dark:bg-dark-gray  dark:border-none", children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: page,
                  className: "text-sm text-primary-dark hover:text-primary-dark-hover font-medium flex items-center dark:text-soft-white",
                  prefetch: linkPrefetch,
                  children: [
                    "View all ",
                    title,
                    " ",
                    /* @__PURE__ */ jsx(ChevronRightIcon, {})
                  ]
                }
              ) })
            ]
          }
        )
      }
    )
  ] });
}
var DropDownMenu_default = DropdownMenu;

// src/library/components/navigation/MobileNavigationGlobal.tsx
import clsx2 from "clsx";
import Link2 from "next/link";
import { useState as useState2 } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function MobileNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState2(false);
  return /* @__PURE__ */ jsxs2("div", { className: "ml-auto lg:hidden w-full", children: [
    /* @__PURE__ */ jsx2("div", { className: "flex-cb", children: /* @__PURE__ */ jsx2("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx2(
      "button",
      {
        onClick: () => setIsMobileMenuOpen((prev) => !prev),
        className: "block text-primary-dark hover:text-gray-500 cursor-pointer",
        children: isMobileMenuOpen ? /* @__PURE__ */ jsx2(MobileNavigationCloseIcon, {}) : /* @__PURE__ */ jsx2(HamburgerIcon, {})
      }
    ) }) }),
    isMobileMenuOpen && /* @__PURE__ */ jsxs2(
      "nav",
      {
        className: clsx2(
          "absolute bg-primary top-[100%] left-0 z-20 px-2 w-full border-y border-primary-dark py-10 space-y-12 text-base"
        ),
        children: [
          /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2("ul", { className: "bg-primary text-primay-dark space-y-6 text-center", children: navigationLinksPublic.map((item) => /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link2, { href: item.href, className: clsx2("font-bold"), children: item.label }) }, item.label)) }) }),
          /* @__PURE__ */ jsxs2("div", { className: "flex-cc flex-col gap-5 font-bold", children: [
            /* @__PURE__ */ jsx2(Link2, { className: "hover:text-black", href: pageUrl("login" /* Login */), children: "Sign In" }),
            /* @__PURE__ */ jsx2(
              Link2,
              {
                href: pageUrl("signup" /* Signup */),
                className: "bg-primary-dark text-white rounded-full py-3 px-4 hover:bg-primary-dark-hover",
                children: "Sign Up"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
var MobileNavigationGlobal_default = MobileNavigation;

// src/library/components/navigation/site-search/SearchBar.tsx
import Fuse from "fuse.js";
import Link3 from "next/link";
import { useEffect as useEffect3, useMemo, useRef as useRef2, useState as useState5 } from "react";

// src/library/hooks/hook.ts
import { useContext } from "react";

// src/library/components/dark-mode/ThemeProvider.tsx
import { createContext, useCallback, useEffect, useState as useState3 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var ThemeContext = createContext(void 0);
function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState3("system" /* System */);
  const [mounted, setMounted] = useState3(false);
  const [systemTheme, setSystemTheme] = useState3("light" /* Light */);
  const getSystemTheme2 = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" /* Dark */ : "light" /* Light */;
  const applyTheme = useCallback((currentTheme, sysTheme) => {
    let actualTheme = currentTheme;
    if (currentTheme === "system" /* System */) {
      actualTheme = sysTheme || getSystemTheme2();
    }
    document.documentElement.classList.remove("light", "dark", "theme-ready");
    document.documentElement.classList.add("theme-ready", actualTheme);
  }, []);
  useEffect(() => {
    let initialTheme = "system" /* System */;
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" /* Light */ || storedTheme === "dark" /* Dark */) {
      initialTheme = storedTheme;
    } else {
      initialTheme = "system" /* System */;
    }
    setThemeState(initialTheme);
    const sys = getSystemTheme2();
    setSystemTheme(sys);
    applyTheme(initialTheme, sys);
    try {
      localStorage.setItem("theme", initialTheme);
    } catch {
    }
    setMounted(true);
  }, [applyTheme]);
  useEffect(() => {
    if (!mounted) return;
    if (theme !== "system" /* System */) return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const sysTheme = getSystemTheme2();
      setSystemTheme(sysTheme);
      applyTheme("system" /* System */, sysTheme);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, applyTheme, mounted]);
  useEffect(() => {
    if (!mounted) return;
    if (theme === "system" /* System */) {
      const sys = getSystemTheme2();
      setSystemTheme(sys);
      applyTheme("system" /* System */, sys);
      try {
        localStorage.setItem("theme", "system" /* System */);
      } catch {
      }
    } else {
      applyTheme(theme);
      if (theme === "light" /* Light */ || theme === "dark" /* Dark */) {
        try {
          localStorage.setItem("theme", theme);
        } catch {
        }
      }
    }
  }, [theme, systemTheme, applyTheme, mounted]);
  const toggleTheme = () => {
    if (theme === "light" /* Light */) {
      setThemeState("dark" /* Dark */);
    } else {
      setThemeState("light" /* Light */);
    }
  };
  return /* @__PURE__ */ jsx3(ThemeContext.Provider, { value: { theme, toggleTheme, setTheme: setThemeState }, children });
}
var ThemeProvider_default = ThemeProvider;

// src/library/hooks/hook.ts
function useTheme() {
  const defaultThemeContext = {
    theme: "system" /* System */,
    toggleTheme: () => {
      throw new Error("ThemeProvider is missing: toggleTheme called outside provider");
    },
    setTheme: (t) => {
      throw new Error(`ThemeProvider is missing: attempted setTheme(${t})`);
    }
  };
  const context = useContext(ThemeContext);
  return context ?? defaultThemeContext;
}

// src/library/components/dark-mode/DarkModeToggle.tsx
import clsx3 from "clsx";
import { useEffect as useEffect2, useRef, useState as useState4 } from "react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var themeOptions = [
  { value: "light" /* Light */, label: "Light", icon: /* @__PURE__ */ jsx4(ResponsiveIcon, { Icon: LightModeIcon }) },
  { value: "dark" /* Dark */, label: "Dark", icon: /* @__PURE__ */ jsx4(ResponsiveIcon, { Icon: DarkModeIcon }) },
  { value: "system" /* System */, label: "System", icon: /* @__PURE__ */ jsx4(ResponsiveIcon, { Icon: SystemIcon }) }
];
function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState4(false);
  const dropdownRef = useRef(null);
  useEffect2(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);
  const [effectiveTheme, setEffectiveTheme] = useState4("light" /* Light */);
  useEffect2(() => {
    if (theme === "system" /* System */) {
      const updateSystemTheme = () => {
        setEffectiveTheme(getSystemTheme());
      };
      updateSystemTheme();
      let mediaQuery = null;
      if (typeof window !== "undefined") {
        mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.addEventListener("change", updateSystemTheme);
      }
      return () => {
        if (mediaQuery) {
          mediaQuery.removeEventListener("change", updateSystemTheme);
        }
      };
    } else {
      setEffectiveTheme(theme);
    }
  }, [theme]);
  const isDark = effectiveTheme === "dark" /* Dark */;
  const mainIcon = isDark ? /* @__PURE__ */ jsx4(ResponsiveIcon, { Icon: DarkModeIcon }) : /* @__PURE__ */ jsx4(ResponsiveIcon, { Icon: LightModeIcon });
  return /* @__PURE__ */ jsxs3("div", { className: "relative inline-block", ref: dropdownRef, children: [
    /* @__PURE__ */ jsx4(
      "button",
      {
        onClick: () => setDropdownOpen((open) => !open),
        "aria-label": `Current theme: ${theme}. Click to change theme`,
        className: clsx3(
          "p-1.5 lg:p-3 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer",
          isDark ? "bg-gray-900 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        ),
        type: "button",
        children: mainIcon
      }
    ),
    dropdownOpen && /* @__PURE__ */ jsx4(
      "div",
      {
        className: clsx3(
          "absolute top-full mt-2 right-0 py-2 rounded-lg shadow-lg border z-50 min-w-32",
          effectiveTheme === "light" /* Light */ ? "bg-white border-gray-200" : "bg-primary-dark border-gray-600"
        ),
        children: themeOptions.map((option) => /* @__PURE__ */ jsxs3(
          "button",
          {
            onClick: () => {
              setTheme(option.value);
              setDropdownOpen(false);
            },
            className: clsx3(
              "w-full px-4 py-2 text-left flex items-center gap-3 transition-colors duration-200 cursor-pointer",
              theme === option.value ? effectiveTheme === "light" /* Light */ ? "bg-blue-50 text-blue-700" : " text-blue-200" : effectiveTheme === "light" /* Light */ ? "text-gray-700 hover:bg-gray-100" : "text-gray-300 hover:bg-primary-dark-hover"
            ),
            type: "button",
            children: [
              /* @__PURE__ */ jsx4("span", { className: "w-5 h-5 flex-shrink-0", children: option.icon }),
              /* @__PURE__ */ jsx4("span", { className: "text-sm", children: option.label }),
              theme === option.value && /* @__PURE__ */ jsx4("span", { className: "ml-auto w-2 h-2 bg-primary rounded-full" })
            ]
          },
          option.value
        ))
      }
    )
  ] });
}
function getSystemTheme() {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" /* Dark */ : "light" /* Light */;
  }
  return "light" /* Light */;
}
function ResponsiveIcon({ Icon, ...props }) {
  const [isSmall, setIsSmall] = useState4(false);
  useEffect2(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(max-width: 639px)");
      const handler = (e) => setIsSmall(e.matches);
      setIsSmall(mq.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, []);
  return /* @__PURE__ */ jsx4(Icon, { width: isSmall ? "1.2em" : void 0, height: isSmall ? "1.2em" : void 0, ...props });
}
var DarkModeToggle_default = DarkModeToggle;

// src/library/components/navigation/site-search/SearchBar.tsx
import { Fragment, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var options = {
  keys: [
    { name: "title", weight: 0.6 },
    { name: "content", weight: 0.4 },
    { name: "category", weight: 0.3 },
    { name: "tags", weight: 0.2 }
  ],
  includeScore: true,
  includeMatches: true,
  threshold: 0.3,
  shouldSort: true,
  minMatchCharLength: 1,
  distance: 150,
  useExtendedSearch: true,
  ignoreLocation: false
};
function SiteSearchBar({
  searchablePages
}) {
  const [query, setQuery] = useState5("");
  const [results, setResults] = useState5([]);
  const [isModalOpen, setIsModalOpen] = useState5(false);
  const inputRef = useRef2(null);
  const fuse = useMemo(
    () => new Fuse(searchablePages, options),
    [searchablePages]
  );
  function handleSearch(value) {
    setQuery(value);
    if (!value) return setResults([]);
    const fuseResults = fuse.search(value);
    setResults(fuseResults);
  }
  function openModal() {
    setIsModalOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  }
  function closeModal() {
    setIsModalOpen(false);
    setQuery("");
    setResults([]);
  }
  function isSwaggerRelated(path) {
    return path.includes("/swagger") || path.includes("swagger");
  }
  function handleLinkClick(path) {
    closeModal();
    if (isSwaggerRelated(path)) {
      window.location.href = path;
      return false;
    }
    return true;
  }
  useEffect3(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openModal();
      } else if (e.key === "Escape") {
        closeModal();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return /* @__PURE__ */ jsx5(Fragment, { children: /* @__PURE__ */ jsxs4("div", { className: "flex flex-row gap-2", children: [
    /* @__PURE__ */ jsx5(DarkModeToggle_default, {}),
    " ",
    /* @__PURE__ */ jsxs4(
      "div",
      {
        className: "relative cursor-pointer group transition-all duration-200",
        onClick: openModal,
        children: [
          /* @__PURE__ */ jsx5("div", { className: "lg:hidden flex items-center justify-center", children: /* @__PURE__ */ jsx5("div", { className: "text-primary-dark hover:text-gray-500 cursor-pointer transition-colors", children: /* @__PURE__ */ jsx5(SearchIcon, { width: "1.9rem", height: "1.9rem" }) }) }),
          /* @__PURE__ */ jsxs4("div", { className: "hidden lg:flex items-center relative", children: [
            /* @__PURE__ */ jsx5(
              "input",
              {
                type: "text",
                placeholder: "Search",
                readOnly: true,
                className: "dark:text-soft-white dark:bg-off-black pl-4 pr-16 py-2.5 w-20 sm:w-30 lg:w-35 border border-gray-400 rounded-full bg-white backdrop-blur-sm focus:outline-none placeholder-gray-500 hover:bg-white dark:hover:bg-off-black hover:shadow-lg transition-all duration-300 group-hover:border-primary/40"
              }
            ),
            /* @__PURE__ */ jsx5("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2", children: /* @__PURE__ */ jsx5("kbd", { className: "px-2 py-1 text-xs font-medium text-gray-500 dark:text-soft-white bg-gray-100 dark:bg-dark-gray border border-gray-200 rounded-md transition-colors dark:border-none dark:bg-dark-gray", children: "CTRL+K" }) })
          ] })
        ]
      }
    ),
    isModalOpen && /* @__PURE__ */ jsx5(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/70 flex justify-center items-start pt-[10vh] px-4",
        onClick: closeModal,
        children: /* @__PURE__ */ jsxs4(
          "div",
          {
            className: "w-full max-w-3xl max-h-[80vh] overflow-hidden bg-white dark:text-soft-white dark:bg-black rounded-2xl shadow-2xl relative p-6 border border-gray-200",
            onClick: stopClickPropagation,
            children: [
              /* @__PURE__ */ jsx5(
                "button",
                {
                  onClick: closeModal,
                  className: "absolute top-4 right-4 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full p-1 transition cursor-pointer dark:text-soft-white dark:hover:bg-off-black",
                  children: /* @__PURE__ */ jsx5(CrossIcon, { width: "1.5rem", height: "1.5rem" })
                }
              ),
              /* @__PURE__ */ jsxs4("div", { className: "flex-cb w-full px-4 py-2 mt-10 border border-primary-dark rounded-md focus:outline-none focus:ring-1 focus:ring-primary-dark-hover dark:bg-primary-dark-hover", children: [
                /* @__PURE__ */ jsx5(
                  "input",
                  {
                    ref: inputRef,
                    type: "text",
                    value: query,
                    onChange: (e) => handleSearch(e.target.value),
                    placeholder: "Search docs, tools, blog...",
                    className: "border-none w-full focus:outline-none placeholder-gray-400 dark:placeholder-soft-white"
                  }
                ),
                /* @__PURE__ */ jsx5(SearchIcon, {})
              ] }),
              /* @__PURE__ */ jsx5("div", { className: "overflow-y-auto mt-6 pr-1 max-h-[45vh]", children: results.length > 0 ? /* @__PURE__ */ jsx5("div", { className: "space-y-2", children: results.map((result, index) => /* @__PURE__ */ jsx5("div", { className: "border-l-2 border-primary", children: isSwaggerRelated(result.item.path) ? /* @__PURE__ */ jsx5(
                "a",
                {
                  href: result.item.path,
                  onClick: () => handleLinkClick(result.item.path),
                  className: "block px-4 py-3 hover:bg-gray-50 rounded-md transition text-base font-medium dark:bg-primary-dark dark:hover:bg-primary-dark-hover dark:text-soft-white",
                  children: /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx5(
                      "div",
                      {
                        className: "flex-1 text-base",
                        dangerouslySetInnerHTML: {
                          __html: highlightText(
                            result.item.title,
                            result.matches?.filter((m) => m.key === "title")
                          )
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx5("div", { className: "ml-3 flex items-center gap-2", children: result.item.category && /* @__PURE__ */ jsx5("span", { className: "px-2 py-1 text-sm bg-gray-200 dark:bg-primary dark:hover:bg-primary-hover dark:text-primary-dark text-pretty rounded-full font-normal", children: result.item.category }) })
                  ] })
                }
              ) : /* @__PURE__ */ jsx5(
                Link3,
                {
                  href: result.item.path,
                  onClick: () => handleLinkClick(result.item.path),
                  className: "block px-4 py-3 hover:bg-gray-50 dark:hover:bg-primary-dark rounded-md transition text-base font-medium dark:bg-primary-dark dark:hover:bg-primary-dark-hover dark:text-soft-white",
                  children: /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx5(
                      "div",
                      {
                        className: "flex-1 text-base",
                        dangerouslySetInnerHTML: {
                          __html: highlightText(
                            result.item.title,
                            result.matches?.filter((m) => m.key === "title")
                          )
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx5("div", { className: "ml-3 flex items-center gap-2", children: result.item.category && /* @__PURE__ */ jsx5("span", { className: "px-2 py-1 text-sm bg-gray-200 dark:bg-primary dark:hover:bg-primary-hover dark:text-primary-dark text-pretty rounded-full font-normal", children: result.item.category }) })
                  ] })
                }
              ) }, index)) }) : query ? /* @__PURE__ */ jsxs4("div", { className: "text-center text-gray-400 text-base mt-8", children: [
                "No results found for \u201C",
                /* @__PURE__ */ jsx5("span", { className: "font-medium", children: query }),
                "\u201D"
              ] }) : /* @__PURE__ */ jsxs4("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsx5("h3", { className: "text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2 px-1 dark:text-soft-white", children: "Quick Links" }),
                /* @__PURE__ */ jsxs4("ul", { className: "ml-2 border-l-2 border-primary divide-y dark:bg-primary-dark dark:hover:primary-dark-hover dark:text-soft-white", children: [
                  navigationLinksPublic.map((link, index) => /* @__PURE__ */ jsx5("li", { children: /* @__PURE__ */ jsx5(
                    Link3,
                    {
                      href: link.href,
                      onClick: () => handleLinkClick(link.href),
                      className: "block px-4 py-3 hover:bg-gray-50 dark:hover:bg-primary-dark-hover rounded-md transition text-base font-medium",
                      children: link.label
                    }
                  ) }, index)),
                  /* @__PURE__ */ jsx5("li", { children: /* @__PURE__ */ jsx5(
                    Link3,
                    {
                      href: pageUrl("swagger" /* Swagger */),
                      onClick: closeModal,
                      className: "block px-4 py-3 hover:bg-gray-50 dark:hover:bg-primary-dark-hover rounded-md transition text-base font-medium",
                      children: "Swagger Docs"
                    }
                  ) })
                ] })
              ] }) })
            ]
          }
        )
      }
    )
  ] }) });
}
function highlightText(text, matches) {
  if (!matches || matches.length === 0) return text;
  const allIndices = [];
  matches.forEach((match) => {
    match.indices.forEach(([start, end]) => {
      allIndices.push([start, end]);
    });
  });
  allIndices.sort((a, b) => a[0] - b[0]);
  const cleanIndices = [];
  for (const [start, end] of allIndices) {
    const lastIndex = cleanIndices[cleanIndices.length - 1];
    if (!lastIndex || start > lastIndex[1]) {
      cleanIndices.push([start, end]);
    } else if (end > lastIndex[1]) {
      cleanIndices[cleanIndices.length - 1] = [lastIndex[0], end];
    }
  }
  let result = text;
  for (let i = cleanIndices.length - 1; i >= 0; i--) {
    const [start, end] = cleanIndices[i];
    const matchedText = text.substring(start, end + 1);
    result = result.substring(0, start) + `<mark>${matchedText}</mark>` + result.substring(end + 1);
  }
  return result;
}
export {
  DarkModeToggle_default as DarkModeToggle,
  DropDownMenu_default as DropDownMenu,
  MobileNavigationGlobal_default as MobileNavigation,
  SiteSearchBar,
  ThemeContext,
  ThemeProvider_default as ThemeProvider,
  adminApi,
  contentApi,
  getAdminApi,
  getContentApi,
  useTheme
};
//# sourceMappingURL=exports-client.mjs.map