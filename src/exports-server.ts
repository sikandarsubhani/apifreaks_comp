// Server-safe exports (no hooks, no createContext, no "use client" components)
// Keep this bundle minimal so importing server components doesn't pull client-only code.

export { default as Footer } from "./library/components/navigation/Footer";
export { default as NotFound } from "./library/components/NotFound";
export { default as NavbarGlobal } from "./library/components/navigation/NavBarGlobal";
export { default as SiteSearchBarComponent } from "./library/components/navigation/site-search/SiteSearchBarComponent";


export { default as NoPrefetchLink } from "./library/components/common/NoPrefetchLink";

// Icons (safe to use on server)
export * from "./library/icons/Icons";

// Pure utils & constants
export * from "./library/utils/navigation-links";
export * from "./library/utils/utils";
export * from "./library/utils/constants";

// Types
export * from "./library/types/types";
