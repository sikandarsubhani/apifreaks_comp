import * as react_jsx_runtime from 'react/jsx-runtime';
import { S as SearchBarPage, T as ThemeContextType } from './ghost-api-clients-DoROCzF2.js';
export { b as adminApi, c as contentApi, a as getAdminApi, g as getContentApi } from './ghost-api-clients-DoROCzF2.js';
import * as react from 'react';
import { ReactNode } from 'react';

type DropdownMenuProps = {
    title: string;
    items: Array<{
        title: string;
        link: string;
    }>;
    className?: string;
    page: string;
    linkPrefetch?: boolean;
};
declare function DropdownMenu({ title, items, className, page, linkPrefetch, }: DropdownMenuProps): react_jsx_runtime.JSX.Element;

declare function MobileNavigation(): react_jsx_runtime.JSX.Element;

declare function SiteSearchBar({ searchablePages, }: {
    searchablePages: SearchBarPage[];
}): react_jsx_runtime.JSX.Element;

declare function useTheme(): ThemeContextType;

declare const ThemeContext: react.Context<ThemeContextType | undefined>;
declare function ThemeProvider({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;

declare function DarkModeToggle(): react_jsx_runtime.JSX.Element;

export { DarkModeToggle, DropdownMenu as DropDownMenu, MobileNavigation, SiteSearchBar, ThemeContext, ThemeProvider, useTheme };
