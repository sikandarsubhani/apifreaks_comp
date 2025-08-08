import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare function Footer(): react_jsx_runtime.JSX.Element;

interface ModernFooterProps {
    logoSrc?: string;
    logoAlt?: string;
    logoWidth?: number;
    logoHeight?: number;
}
declare function ModernFooter({ logoSrc, logoAlt, logoWidth, logoHeight, }: ModernFooterProps): react_jsx_runtime.JSX.Element;

type IconSizeProps = {
    width?: string;
    height?: string;
};
declare function FacebookIcon({ width, height, }: IconSizeProps): react_jsx_runtime.JSX.Element;
declare function LinkedinIcon({ width, height, }: IconSizeProps): react_jsx_runtime.JSX.Element;
declare function TwitterIcon({ width, height, }: IconSizeProps): react_jsx_runtime.JSX.Element;
declare function HeartIcon({ width, height, }: IconSizeProps): react_jsx_runtime.JSX.Element;

type NoPrefetchLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
    [key: string]: any;
};
declare function NoPrefetchLink({ href, children, className, ...props }: NoPrefetchLinkProps): react_jsx_runtime.JSX.Element;

export { FacebookIcon, Footer, Footer as FooterComponent, HeartIcon, type IconSizeProps, LinkedinIcon, ModernFooter, ModernFooter as ModernFooterComponent, NoPrefetchLink, TwitterIcon };
