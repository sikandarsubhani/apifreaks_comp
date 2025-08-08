// src/library/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

// src/library/components/icons/Icon.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function FacebookIcon({
  width = "1.5em",
  height = "1.5em"
}) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height,
      viewBox: "0 0 20 20",
      children: /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height,
      viewBox: "0 0 14 14",
      children: /* @__PURE__ */ jsxs("g", { fill: "none", children: [
        /* @__PURE__ */ jsx("g", { clipPath: "url(#primeTwitter0)", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
          }
        ) }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "primeTwitter0", children: /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M0 0h14v14H0z" }) }) })
      ] })
    }
  );
}
function HeartIcon({
  width = "1.5em",
  height = "1.5em"
}) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height,
      viewBox: "0 0 20 20",
      children: /* @__PURE__ */ jsx(
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
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function Footer() {
  return /* @__PURE__ */ jsx2(Fragment, { children: /* @__PURE__ */ jsx2("footer", { className: "@container bg-black text-white responsive-pad overflow-hidden", children: /* @__PURE__ */ jsxs2("div", { className: "max-w-[1540px] mx-auto", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex-cc py-10 flex-col @[768px]:flex-row gap-5", children: [
      /* @__PURE__ */ jsx2("p", { className: "text-3xl font-bold text-white", children: "Ready to get started?" }),
      /* @__PURE__ */ jsx2(
        Link,
        {
          href: "#",
          className: "bg-primary text-center py-5 px-10 rounded-full text-black font-medium text-base",
          children: "Sign Up for Free"
        }
      )
    ] }),
    /* @__PURE__ */ jsx2("hr", {}),
    /* @__PURE__ */ jsxs2("div", { className: "py-10 text-center @[640px]:text-left", children: [
      /* @__PURE__ */ jsxs2("div", { className: "@[768px]:flex-b items-start gap-x-12 space-y-20 @[768px]:space-y-0", children: [
        /* @__PURE__ */ jsxs2("div", { className: "flex flex-col justify-center space-y-3", children: [
          /* @__PURE__ */ jsx2(Link, { href: "/", className: "mx-auto", children: /* @__PURE__ */ jsx2(
            Image,
            {
              src: "/img/logo-black-bg-small.jpg",
              width: 120,
              height: 120,
              alt: "APIFreaks"
            }
          ) }),
          /* @__PURE__ */ jsxs2("div", { className: "flex-cc gap-2 mt-4", children: [
            /* @__PURE__ */ jsx2(
              Link,
              {
                href: "/",
                className: "rounded-full bg-primary w-7 h-7 flex-cc text-black",
                children: /* @__PURE__ */ jsx2(LinkedinIcon, {})
              }
            ),
            /* @__PURE__ */ jsx2(
              Link,
              {
                href: "/",
                className: "rounded-full bg-primary w-7 h-7 flex-cc text-black",
                children: /* @__PURE__ */ jsx2(FacebookIcon, {})
              }
            ),
            /* @__PURE__ */ jsx2(
              Link,
              {
                href: "/",
                className: "rounded-full bg-primary w-7 h-7 flex-cc text-black",
                children: /* @__PURE__ */ jsx2(TwitterIcon, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs2("div", { className: "flex flex-col flex-wrap @[640px]:h-[500px] @[1280px]:h-[380px] @[768px]:w-[70%] gap-y-8", children: [
          /* @__PURE__ */ jsxs2("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx2("h3", { className: "text-primary text-xl font-bold", children: "API Catalog" }),
            /* @__PURE__ */ jsxs2("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Geolocation APIs" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "WHOIS APIs" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "DNS APIs" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "SSL APIs" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Domain Availability APIs" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Screenshot API" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Currency APIs" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Commodity APIs" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Timezone APIs" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "User Agent APIs" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Other APIs" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs2("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx2("h3", { className: "text-primary text-xl font-bold", children: "Tools Catalog" }),
            /* @__PURE__ */ jsxs2("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Formatters & Beautifiers" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Converters & Optimizers" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Viewers & Validators" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs2("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx2("h3", { className: "text-primary text-xl font-bold", children: "Docs" }),
            /* @__PURE__ */ jsxs2("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Documentation" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Swagger Docs" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs2("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx2("h3", { className: "text-primary text-xl font-bold", children: "Pricing & Accounts" }),
            /* @__PURE__ */ jsxs2("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Pricing" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Sign up" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Sign In" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs2("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx2("h3", { className: "text-primary text-xl font-bold", children: "Company" }),
            /* @__PURE__ */ jsxs2("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "About Us" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Resources" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Terms" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link, { href: "#", children: "Privacy" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "flex-cc flex-col text-base mt-56", children: [
        /* @__PURE__ */ jsx2("div", { className: "rounded-full bg-primary w-10 h-10 flex-cc text-black mb-2", children: /* @__PURE__ */ jsx2(HeartIcon, {}) }),
        /* @__PURE__ */ jsx2("p", { children: "Copyright \xA9 2024" }),
        /* @__PURE__ */ jsx2("p", { children: "Made in Pakistan" })
      ] })
    ] })
  ] }) }) });
}
var Footer_default = Footer;

// src/library/components/ModernFooter.tsx
import Image2 from "next/image";
import Link2 from "next/link";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function ModernFooter({
  logoSrc = "/img/logo-black-bg-small.jpg",
  logoAlt = "APIFreaks",
  logoWidth = 120,
  logoHeight = 120
}) {
  return /* @__PURE__ */ jsx3("footer", { className: "bg-black text-white px-6 xs:px-8 sm:px-12 lg:px-16 overflow-hidden", children: /* @__PURE__ */ jsxs3("div", { className: "max-w-[1540px] mx-auto", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex flex-col md:flex-row items-center justify-center py-10 gap-5", children: [
      /* @__PURE__ */ jsx3("p", { className: "text-3xl font-bold text-white", children: "Ready to get started?" }),
      /* @__PURE__ */ jsx3(
        Link2,
        {
          href: "#",
          className: "bg-yellow-400 text-center py-5 px-10 rounded-full text-black font-medium text-base hover:bg-yellow-300 transition-colors duration-150",
          children: "Sign Up for Free"
        }
      )
    ] }),
    /* @__PURE__ */ jsx3("hr", { className: "border-gray-600" }),
    /* @__PURE__ */ jsxs3("div", { className: "py-10 text-center sm:text-left", children: [
      /* @__PURE__ */ jsxs3("div", { className: "md:flex md:justify-between items-start gap-x-12 space-y-20 md:space-y-0", children: [
        /* @__PURE__ */ jsxs3("div", { className: "flex flex-col justify-center space-y-3", children: [
          /* @__PURE__ */ jsx3(Link2, { href: "/", className: "mx-auto md:mx-0", children: /* @__PURE__ */ jsx3(
            Image2,
            {
              src: logoSrc,
              width: logoWidth,
              height: logoHeight,
              alt: logoAlt,
              className: "rounded"
            }
          ) }),
          /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-center md:justify-start gap-2 mt-4", children: [
            /* @__PURE__ */ jsx3(
              Link2,
              {
                href: "/",
                className: "rounded-full bg-yellow-400 w-7 h-7 flex items-center justify-center text-black hover:bg-yellow-300 transition-colors duration-150",
                children: /* @__PURE__ */ jsx3(LinkedinIcon, { width: "16", height: "16" })
              }
            ),
            /* @__PURE__ */ jsx3(
              Link2,
              {
                href: "/",
                className: "rounded-full bg-yellow-400 w-7 h-7 flex items-center justify-center text-black hover:bg-yellow-300 transition-colors duration-150",
                children: /* @__PURE__ */ jsx3(FacebookIcon, { width: "16", height: "16" })
              }
            ),
            /* @__PURE__ */ jsx3(
              Link2,
              {
                href: "/",
                className: "rounded-full bg-yellow-400 w-7 h-7 flex items-center justify-center text-black hover:bg-yellow-300 transition-colors duration-150",
                children: /* @__PURE__ */ jsx3(TwitterIcon, { width: "16", height: "16" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: "flex flex-col flex-wrap sm:h-[500px] xl:h-[380px] md:w-[70%] gap-y-8", children: [
          /* @__PURE__ */ jsxs3("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx3("h3", { className: "text-yellow-400 text-xl font-bold", children: "API Catalog" }),
            /* @__PURE__ */ jsxs3("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Geolocation APIs" }) }),
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "WHOIS APIs" }) }),
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "DNS APIs" }) }),
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "SSL APIs" }) }),
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Domain Availability APIs" }) }),
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Screenshot API" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs3("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx3("h3", { className: "text-yellow-400 text-xl font-bold", children: "Tools Catalog" }),
            /* @__PURE__ */ jsxs3("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "API Testing Tools" }) }),
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Documentation Generator" }) }),
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "API Analytics" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs3("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx3("h3", { className: "text-yellow-400 text-xl font-bold", children: "Docs" }),
            /* @__PURE__ */ jsxs3("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Getting Started" }) }),
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "API Reference" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs3("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx3("h3", { className: "text-yellow-400 text-xl font-bold", children: "Pricing & Accounts" }),
            /* @__PURE__ */ jsxs3("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Pricing Plans" }) }),
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Account Settings" }) }),
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Billing" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs3("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx3("h3", { className: "text-yellow-400 text-xl font-bold", children: "Company" }),
            /* @__PURE__ */ jsxs3("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "About Us" }) }),
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Contact" }) }),
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Privacy Policy" }) }),
              /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: "#", className: "hover:text-yellow-400 transition-colors duration-150", children: "Terms of Service" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "flex flex-col items-center justify-center text-base mt-20", children: [
        /* @__PURE__ */ jsx3("div", { className: "rounded-full bg-yellow-400 w-10 h-10 flex items-center justify-center text-black mb-2", children: /* @__PURE__ */ jsx3(HeartIcon, { width: "20", height: "20" }) }),
        /* @__PURE__ */ jsx3("p", { children: "Copyright \xA9 2024" }),
        /* @__PURE__ */ jsx3("p", { children: "Made in Pakistan" })
      ] })
    ] })
  ] }) });
}
var ModernFooter_default = ModernFooter;

// src/library/components/NoPrefetchLink.tsx
import Link3 from "next/link";
import { jsx as jsx4 } from "react/jsx-runtime";
function NoPrefetchLink({
  href,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(Link3, { href, prefetch: false, className, ...props, children });
}
var NoPrefetchLink_default = NoPrefetchLink;
export {
  FacebookIcon,
  Footer_default as Footer,
  Footer as FooterComponent,
  HeartIcon,
  LinkedinIcon,
  ModernFooter_default as ModernFooter,
  ModernFooter as ModernFooterComponent,
  NoPrefetchLink_default as NoPrefetchLink,
  TwitterIcon
};
//# sourceMappingURL=exports.mjs.map