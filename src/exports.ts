// Main components
/**
 * Footer - Uses container queries (@container). Wrap in a container with @container class.
 * @example
 * <div className="@container">
 *   <Footer />
 * </div>
 */
export { default as Footer, Footer as FooterComponent } from "./library/components/Footer";

/**
 * ModernFooter - Uses standard Tailwind responsive classes. Works without container queries.
 * @example
 * <ModernFooter logoSrc="/your-logo.png" logoAlt="Your Company" />
 */
export { default as ModernFooter, ModernFooter as ModernFooterComponent } from "./library/components/ModernFooter";

// Icon components (dependencies for Footer)
export {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  HeartIcon,
  type IconSizeProps
} from "./library/components/icons/Icon";

// NoPrefetchLink component (if needed)
export { default as NoPrefetchLink } from "./library/components/NoPrefetchLink";

// components
// export { NoPrefetchLink } from "./library/components/common/NoPrefetchLink";
// export { default as DropDownMenu } from "./library/components/common/DropDownMenu";
// export { Footer } from "./library/components/navigation/Footer";




// icons
export * from "./library/components/icons/Icon";
// utils
// export * from "./library/utils/navigation-links";
// export * from "./library/utils/utils";
// export * from "./library/utils/constants";
// export * from "./library/utils/ghost-api-clients";

// types
// export * from "./library/types/types";

// Styles: Import in your app entry (e.g., layout.tsx or _app.js):
// import 'af-components/dist/af-components.css';
// All styles are bundled and exported via the package build.