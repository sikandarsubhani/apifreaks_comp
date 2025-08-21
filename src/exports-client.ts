"use client";
// Client-only exports: hooks, dropdowns, components that use context or hooks
// export { default as NavbarGlobal } from "./library/components/navigation/NavBarGlobal";

export { default as DropDownMenu } from "./library/components/common/DropDownMenu";
// Do NOT export a NavBarGlobal client wrapper. Host apps should compose the
// server-safe `NavbarGlobal` (from the server entry) with client components
// imported from this client entry. Example usage in host app:
// import { NavbarGlobal } from '@7sikandar/af-nav'; // server entry
// import { DropDownMenu, MobileNavigation, SiteSearchBar } from '@7sikandar/af-nav/client';
//
// <NavbarGlobal DropdownMenu={DropDownMenu} SiteSearchBarComponent={SiteSearchBarComponent} SearchBar={SiteSearchBar} MobileNavigation={MobileNavigation} />
// SiteSearchBarComponent is a server component; only export the interactive SearchBar here.
export { default as MobileNavigation } from "./library/components/navigation/MobileNavigationGlobal";
export { default as SiteSearchBar } from "./library/components/navigation/site-search/SearchBar";
export * from "./library/hooks/hook";
export * from "./library/utils/ghost-api-clients";

export { default as ThemeProvider } from "./library/components/dark-mode/ThemeProvider";
export * from "./library/components/dark-mode/ThemeProvider";
export { default as DarkModeToggle } from "./library/components/dark-mode/DarkModeToggle";
