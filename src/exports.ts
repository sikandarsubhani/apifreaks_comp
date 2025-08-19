// Main components
/**
 * Footer - Uses container queries (@container). Wrap in a container with @container class.
 * @example
 * <div className="@container">
 *   <Footer />
 * </div>
 */
export { default as Footer, Footer as FooterComponent } from "./library/components/navigation/Footer";
export { default as NotFound } from "./library/components/NotFound";
export { default as NavbarGlobal } from "./library/components/navigation/NavBarGlobal";

// Icon components (dependencies for Footer)
export * from "./library/icons/Icons";


// components
// export { NoPrefetchLink } from "./library/components/common/NoPrefetchLink";
export { default as DropDownMenu } from "./library/components/common/DropDownMenu";
export { default as NoPrefetchLink } from "./library/components/common/NoPrefetchLink";

// utils
export * from "./library/utils/navigation-links";
export * from "./library/utils/utils";
export * from "./library/utils/constants";
export * from "./library/utils/ghost-api-clients";

// types
export * from "./library/types/types";

//hooks
export * from "./library/hooks/hook";

// Styles: Import in your app entry (e.g., layout.tsx or _app.js):
// import 'af-components/dist/af-components.css';
// All styles are bundled and exported via the package build.