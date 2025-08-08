"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/exports.ts
var exports_exports = {};
__export(exports_exports, {
  FacebookIcon: () => FacebookIcon,
  Footer: () => Footer_default,
  FooterComponent: () => Footer,
  HeartIcon: () => HeartIcon,
  LinkedinIcon: () => LinkedinIcon,
  ModernFooter: () => ModernFooter_default,
  ModernFooterComponent: () => ModernFooter,
  NoPrefetchLink: () => NoPrefetchLink_default,
  TwitterIcon: () => TwitterIcon
});
module.exports = __toCommonJS(exports_exports);

// src/library/components/Footer.tsx
var import_image = __toESM(require("next/image"));
var import_link = __toESM(require("next/link"));

// src/library/components/icons/Icon.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function FacebookIcon({
  width = "1.5em",
  height = "1.5em"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
        }
      )
    }
  );
}
function LinkedinIcon({
  width = "1.5em",
  height = "1.5em"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height,
      viewBox: "0 0 20 20",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M2.5 18h3V6.9h-3zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2m6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6"
        }
      )
    }
  );
}
function TwitterIcon({
  width = "1.2em",
  height = "1.2em"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height,
      viewBox: "0 0 14 14",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { fill: "none", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { clipPath: "url(#primeTwitter0)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            fill: "currentColor",
            d: "M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "primeTwitter0", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#fff", d: "M0 0h14v14H0z" }) }) })
      ] })
    }
  );
}
function HeartIcon({
  width = "1.5em",
  height = "1.5em"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height,
      viewBox: "0 0 20 20",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0L10 5.197L8.864 4.155c-1.672-1.534-4.382-1.534-6.054 0c-1.881 1.727-1.881 4.52 0 6.246L10 17l7.19-6.599c1.88-1.726 1.88-4.52 0-6.246"
        }
      )
    }
  );
}

// src/library/components/Footer.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("footer", { className: "@container bg-black text-white responsive-pad overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "max-w-[1540px] mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex-cc py-10 flex-col @[768px]:flex-row gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-3xl font-bold text-white", children: "Ready to get started?" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_link.default,
        {
          href: "#",
          className: "bg-primary text-center py-5 px-10 rounded-full text-black font-medium text-base",
          children: "Sign Up for Free"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("hr", {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "py-10 text-center @[640px]:text-left", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "@[768px]:flex-b items-start gap-x-12 space-y-20 @[768px]:space-y-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col justify-center space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "/", className: "mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_image.default,
            {
              src: "/img/logo-black-bg-small.jpg",
              width: 120,
              height: 120,
              alt: "APIFreaks"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex-cc gap-2 mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_link.default,
              {
                href: "/",
                className: "rounded-full bg-primary w-7 h-7 flex-cc text-black",
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LinkedinIcon, {})
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_link.default,
              {
                href: "/",
                className: "rounded-full bg-primary w-7 h-7 flex-cc text-black",
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FacebookIcon, {})
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_link.default,
              {
                href: "/",
                className: "rounded-full bg-primary w-7 h-7 flex-cc text-black",
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TwitterIcon, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col flex-wrap @[640px]:h-[500px] @[1280px]:h-[380px] @[768px]:w-[70%] gap-y-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "text-primary text-xl font-bold", children: "API Catalog" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Geolocation APIs" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "WHOIS APIs" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "DNS APIs" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "SSL APIs" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Domain Availability APIs" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Screenshot API" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Currency APIs" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Commodity APIs" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Timezone APIs" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "User Agent APIs" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Other APIs" }) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "text-primary text-xl font-bold", children: "Tools Catalog" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Formatters & Beautifiers" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Converters & Optimizers" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Viewers & Validators" }) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "text-primary text-xl font-bold", children: "Docs" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Documentation" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Swagger Docs" }) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "text-primary text-xl font-bold", children: "Pricing & Accounts" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Pricing" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Sign up" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Sign In" }) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "text-primary text-xl font-bold", children: "Company" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "About Us" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Resources" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Terms" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: "#", children: "Privacy" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex-cc flex-col text-base mt-56", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "rounded-full bg-primary w-10 h-10 flex-cc text-black mb-2", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(HeartIcon, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: "Copyright \xA9 2024" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: "Made in Pakistan" })
      ] })
    ] })
  ] }) }) });
}
var Footer_default = Footer;

// src/library/components/ModernFooter.tsx
var import_image2 = __toESM(require("next/image"));
var import_link2 = __toESM(require("next/link"));
var import_jsx_runtime3 = require("react/jsx-runtime");
function ModernFooter({
  logoSrc = "/img/logo-black-bg-small.jpg",
  logoAlt = "APIFreaks",
  logoWidth = 120,
  logoHeight = 120
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("footer", { className: "bg-black text-white px-6 xs:px-8 sm:px-12 lg:px-16 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "max-w-[1540px] mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col md:flex-row items-center justify-center py-10 gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-3xl font-bold text-white", children: "Ready to get started?" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_link2.default,
        {
          href: "#",
          className: "bg-yellow-400 text-center py-5 px-10 rounded-full text-black font-medium text-base hover:bg-yellow-300 transition-colors duration-150",
          children: "Sign Up for Free"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("hr", { className: "border-gray-600" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "py-10 text-center sm:text-left", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "md:flex md:justify-between items-start gap-x-12 space-y-20 md:space-y-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col justify-center space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "/", className: "mx-auto md:mx-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_image2.default,
            {
              src: logoSrc,
              width: logoWidth,
              height: logoHeight,
              alt: logoAlt,
              className: "rounded"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center justify-center md:justify-start gap-2 mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_link2.default,
              {
                href: "/",
                className: "rounded-full bg-yellow-400 w-7 h-7 flex items-center justify-center text-black hover:bg-yellow-300 transition-colors duration-150",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LinkedinIcon, { width: "16", height: "16" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_link2.default,
              {
                href: "/",
                className: "rounded-full bg-yellow-400 w-7 h-7 flex items-center justify-center text-black hover:bg-yellow-300 transition-colors duration-150",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FacebookIcon, { width: "16", height: "16" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_link2.default,
              {
                href: "/",
                className: "rounded-full bg-yellow-400 w-7 h-7 flex items-center justify-center text-black hover:bg-yellow-300 transition-colors duration-150",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TwitterIcon, { width: "16", height: "16" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col flex-wrap sm:h-[500px] xl:h-[380px] md:w-[70%] gap-y-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-yellow-400 text-xl font-bold", children: "API Catalog" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Geolocation APIs" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "WHOIS APIs" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "DNS APIs" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "SSL APIs" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Domain Availability APIs" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Screenshot API" }) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-yellow-400 text-xl font-bold", children: "Tools Catalog" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "API Testing Tools" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Documentation Generator" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "API Analytics" }) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-yellow-400 text-xl font-bold", children: "Docs" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Getting Started" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "API Reference" }) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-yellow-400 text-xl font-bold", children: "Pricing & Accounts" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Pricing Plans" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Account Settings" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Billing" }) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-yellow-400 text-xl font-bold", children: "Company" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "About Us" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Contact" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Privacy Policy" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Terms of Service" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col items-center justify-center text-base mt-20", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "rounded-full bg-yellow-400 w-10 h-10 flex items-center justify-center text-black mb-2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(HeartIcon, { width: "20", height: "20" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Copyright \xA9 2024" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Made in Pakistan" })
      ] })
    ] })
  ] }) });
}
var ModernFooter_default = ModernFooter;

// src/library/components/NoPrefetchLink.tsx
var import_link3 = __toESM(require("next/link"));
var import_jsx_runtime4 = require("react/jsx-runtime");
function NoPrefetchLink({
  href,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_link3.default, { href, prefetch: false, className, ...props, children });
}
var NoPrefetchLink_default = NoPrefetchLink;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FacebookIcon,
  Footer,
  FooterComponent,
  HeartIcon,
  LinkedinIcon,
  ModernFooter,
  ModernFooterComponent,
  NoPrefetchLink,
  TwitterIcon
});
//# sourceMappingURL=exports.js.map