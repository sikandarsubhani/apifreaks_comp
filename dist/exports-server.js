"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }























































































































































var _chunkBS75PHBDjs = require('./chunk-BS75PHBD.js');

// src/library/components/navigation/Footer.tsx
var _image = require('next/image'); var _image2 = _interopRequireDefault(_image);
var _link = require('next/link'); var _link2 = _interopRequireDefault(_link);

// src/library/components/common/NoPrefetchLink.tsx

var _jsxruntime = require('react/jsx-runtime');
function NoPrefetchLink({
  href,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href, prefetch: false, className, ...props, children });
}
var NoPrefetchLink_default = NoPrefetchLink;

// src/library/utils/tools-navigation.tsx
var toolsLinks = [
  {
    category: "Formatters & Beautifiers",
    id: "web-tools",
    items: [
      {
        title: "Online HTML Formatter, HTML Beautifier and HTML Viewer",
        link: _chunkBS75PHBDjs.toolPageUrl.call(void 0, "HTML-Formatter" /* HTMLFormatter */),
        icon: _chunkBS75PHBDjs.HtmlIcon,
        // ✅ pass component, not JSX
        description: "Easily format HTML with customizable indentation levels, minify HTML, and preview your content by uploading files."
      },
      {
        title: "Free CSS Minifier & CSS Formatter Online",
        link: _chunkBS75PHBDjs.toolPageUrl.call(void 0, "CSS-Minifier" /* CSSMinifier */),
        icon: _chunkBS75PHBDjs.CssIcon,
        description: "Optimize your CSS for faster load times and cleaner code with our free CSS Minifier and CSS Formatter."
      },
      {
        title: "Minify, Compress, and Beautify JavaScript Code Online",
        link: _chunkBS75PHBDjs.toolPageUrl.call(void 0, "JS-Minifier" /* JSMinifier */),
        icon: _chunkBS75PHBDjs.JavascriptIcon,
        description: "Easily compress, minify, and format JavaScript code to enhance readability and performance."
      },
      {
        title: "Free Online SQL Beautifier & Minifier",
        link: _chunkBS75PHBDjs.toolPageUrl.call(void 0, "SQL-Formatter" /* SQLFormatter */),
        icon: _chunkBS75PHBDjs.SqlIcon,
        description: "Format and structure SQL queries for better readability and maintenance."
      },
      {
        title: "View, Format, Minify, and Validate JSON Online",
        link: _chunkBS75PHBDjs.toolPageUrl.call(void 0, "JSON-Formatter" /* JSONFormatter */),
        icon: _chunkBS75PHBDjs.JsonIcon,
        description: "Beautify, minify, validate, and view JSON data with an easy-to-navigate structure."
      },
      {
        title: "Free XML Beautifier, XML Minifier, and XML Validator Online",
        link: _chunkBS75PHBDjs.toolPageUrl.call(void 0, "XML-Formatter" /* XMLFormatter */),
        icon: _chunkBS75PHBDjs.JsonIcon,
        description: "Format, minify, and validate XML data for improved readability and efficiency."
      }
    ]
  },
  {
    category: "Converters & Optimizers",
    id: "data-file-processing",
    items: [
      {
        title: "Free & Fast XML2JSON Online Tool",
        link: _chunkBS75PHBDjs.toolPageUrl.call(void 0, "XML-to-JSON-Converter" /* XMLtoJSONConverter */),
        icon: _chunkBS75PHBDjs.XmlIcon,
        description: "Convert XML to JSON quickly and efficiently with customizable formatting options."
      },
      {
        title: "Remove Whitespace, Change Text Case & Replace Text Online",
        link: _chunkBS75PHBDjs.toolPageUrl.call(void 0, "Case-Converter" /* CaseConverter */),
        icon: _chunkBS75PHBDjs.TextIcon,
        description: "Transform text by changing case, removing whitespace, and replacing characters efficiently."
      },
      {
        title: "Online Diff Checker",
        link: _chunkBS75PHBDjs.toolPageUrl.call(void 0, "Diff-Checker" /* DiffChecker */),
        icon: _chunkBS75PHBDjs.DiffCheckIcon,
        description: "Compare text, code, and files instantly with our online diff checker tool \u2014 ideal for spotting differences and changes with ease and accuracy."
      }
    ]
  },
  {
    category: "Viewers & Validators",
    id: "text-content-utilities",
    items: [
      {
        title: "Free SVG File Viewer & Reader",
        link: _chunkBS75PHBDjs.toolPageUrl.call(void 0, "SVG-Viewer" /* SVGViewer */),
        icon: _chunkBS75PHBDjs.SvgIcon,
        description: "Preview and analyze SVG files with an intuitive online viewer."
      },
      {
        title: "Online YAML Validator and YAML Formatter",
        link: _chunkBS75PHBDjs.toolPageUrl.call(void 0, "YAMLValidator" /* YAMLValidator */),
        icon: _chunkBS75PHBDjs.YamlIcon,
        description: "Our online YAML Validator checks for syntax errors and ensuring correct formatting."
      },
      {
        title: "Free Online SMTP Checker Tool",
        link: _chunkBS75PHBDjs.toolPageUrl.call(void 0, "SMPTChecker" /* SMTPChecker */),
        icon: _chunkBS75PHBDjs.EmailIcon,
        description: "Quickly test SMTP connections, ports, and authentication. Diagnose email delivery issues and simulate sending\u2014all in one easy tool."
      },
      {
        title: "Email Header Analyzer",
        link: _chunkBS75PHBDjs.toolPageUrl.call(void 0, "EmailHeaderAnalyzer" /* EmailHeaderAnalyzer */),
        icon: _chunkBS75PHBDjs.EmailWithSearchIcon,
        description: "Analyze full email headers to trace origin, verify SPF/DKIM/DMARC, and detect spam, spoofing, or delivery issues."
      }
    ]
  }
];
var toolsCategories = toolsLinks.map((cat) => ({
  title: cat.category,
  link: `${_chunkBS75PHBDjs.pageUrl.call(void 0, "tools" /* Tools */)}#${cat.id}`
}));

// src/library/components/navigation/Footer.tsx

function Footer({ logosrc = "https://res.cloudinary.com/dc5hkrpco/image/upload/v1755631017/logo-black-bg-small_uadg5k.jpg" }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _jsxruntime.Fragment, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "footer", { className: "@container bg-black text-white responsive-pad overflow-hidden", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "max-w-[1540px] mx-auto", children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex-cc py-10 flex-col @[768px]:flex-row gap-5", children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: "text-3xl font-bold text-white", children: "Ready to get started?" }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        _link2.default,
        {
          href: _chunkBS75PHBDjs.pageUrl.call(void 0, "signup" /* Signup */),
          className: "bg-primary text-center py-5 px-10 rounded-full text-black font-medium text-base",
          children: "Sign Up for Free"
        }
      )
    ] }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "hr", {}),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "py-10 text-center @[640px]:text-left", children: [
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "@[768px]:flex-b items-start gap-x-12 space-y-20 @[768px]:space-y-0", children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex flex-col justify-center space-y-3", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: "/", className: "mx-auto", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            _image2.default,
            {
              src: logosrc,
              width: 120,
              height: 120,
              alt: "APIFreaks"
            }
          ) }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex-cc gap-2 mt-4", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              _link2.default,
              {
                href: "/",
                className: "rounded-full bg-primary w-7 h-7 flex-cc text-black",
                children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _chunkBS75PHBDjs.LinkedinIcon, {})
              }
            ),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              _link2.default,
              {
                href: "/",
                className: "rounded-full bg-primary w-7 h-7 flex-cc text-black",
                children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _chunkBS75PHBDjs.FacebookIcon, {})
              }
            ),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              _link2.default,
              {
                href: "/",
                className: "rounded-full bg-primary w-7 h-7 flex-cc text-black",
                children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _chunkBS75PHBDjs.TwitterIcon, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex flex-col flex-wrap @[640px]:h-[500px] @[1280px]:h-[380px] @[768px]:w-[70%] gap-y-8", children: [
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h3", { className: "text-primary text-xl font-bold", children: "API Catalog" }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "ul", { className: "space-y-1", children: _chunkBS75PHBDjs.APIDocsUrls.map((api) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: api.link, children: api.title }) }, api.title)) })
          ] }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h3", { className: "text-primary text-xl font-bold", children: "Tools Catalog" }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "ul", { className: "space-y-1", children: toolsCategories.map((api) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, NoPrefetchLink_default, { href: api.link, children: api.title }) }, api.title)) })
          ] }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h3", { className: "text-primary text-xl font-bold", children: "Docs" }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "ul", { className: "space-y-1", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: _chunkBS75PHBDjs.pageUrl.call(void 0, "apifreaks" /* APIFreaks */), children: "Documentation" }) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: _chunkBS75PHBDjs.pageUrl.call(void 0, "swagger" /* Swagger */), children: "Swagger Docs" }) })
            ] })
          ] }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h3", { className: "text-primary text-xl font-bold", children: "Pricing & Accounts" }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "ul", { className: "space-y-1", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: _chunkBS75PHBDjs.pageUrl.call(void 0, "api-plans-one-off" /* APIPlansPricingOneOff */), children: "Pricing" }) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: _chunkBS75PHBDjs.pageUrl.call(void 0, "signup" /* Signup */), children: "Sign up" }) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: _chunkBS75PHBDjs.pageUrl.call(void 0, "login" /* Login */), children: "Sign In" }) })
            ] })
          ] }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h3", { className: "text-primary text-xl font-bold", children: "Company" }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "ul", { className: "space-y-1", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: _chunkBS75PHBDjs.pageUrl.call(void 0, "about" /* About */), children: "About Us" }) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: _chunkBS75PHBDjs.pageUrl.call(void 0, "resources" /* Resources */), children: "Resources" }) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: _chunkBS75PHBDjs.pageUrl.call(void 0, "terms" /* Terms */), children: "Terms" }) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: _chunkBS75PHBDjs.pageUrl.call(void 0, "privacy-policy" /* PrivacyPolicy */), children: "Privacy" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex-cc flex-col text-base mt-56", children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "rounded-full bg-primary w-10 h-10 flex-cc text-black mb-2", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _chunkBS75PHBDjs.HeartIcon, {}) }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { children: "Copyright \xA9 2024" }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { children: "Made in Pakistan" })
      ] })
    ] })
  ] }) }) });
}
var Footer_default = Footer;

// src/library/components/NotFound.tsx


function NotFound() {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "text-center", children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h1", { className: "text-9xl font-extrabold text-primary-dark dark:text-soft-white", children: "404" }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: "text-2xl text-gray-700 mt-4", children: "Page Not Found" }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: "text-gray-500 mt-2", children: "Sorry, the page you are looking for does not exist." }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      _link2.default,
      {
        href: "/",
        className: "mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-primary-dark dark:bg-primary dark:text-black rounded-lg hover:bg-primary-dark-hover",
        children: "Go Back Home"
      }
    )
  ] });
}
var NotFound_default = NotFound;

// src/library/components/navigation/NavBarGlobal.tsx



function NavBarGlobal({
  logosrc = "https://res.cloudinary.com/dc5hkrpco/image/upload/v1755631017/logo-black-yellow-bg_ty4arv.jpg",
  DropdownMenu,
  MobileNavigation,
  SiteSearchBarComponent: SiteSearchBarComponent2,
  SearchBar
}) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "relative bg-primary", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "header", { className: "text-primary-dark-hover responsive-pad max-w-[1668px] w-full mx-auto", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex-cb py-1 w-full", children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _link2.default, { href: "/", className: "block mx-5", children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        _image2.default,
        {
          src: logosrc,
          width: 90,
          height: 90,
          alt: "API Freaks logo",
          priority: true,
          className: "hidden lg:block"
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        _image2.default,
        {
          src: logosrc,
          width: 70,
          height: 70,
          alt: "API Freaks logo",
          priority: true,
          className: "lg:hidden block"
        }
      )
    ] }),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex-cc gap-1 lg:hidden", children: [
      SiteSearchBarComponent2 && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SiteSearchBarComponent2, { SiteSearchBar: SearchBar }),
      MobileNavigation && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, MobileNavigation, {})
    ] }),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "nav", { className: "hidden lg:flex justify-between gap-0 max-w-[1050px] w-full py-3 px-5 mx-5 bg-white dark:text-soft-white dark:bg-primary-dark rounded-full select-none dark:bg-black dark:hover:text-[#f5f5f5]", children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "ul", { className: "flex-c space-x-8 xl:space-x-10 dark:text-soft-white dark:hover:text-gray-100", children: _chunkBS75PHBDjs.navigationLinksPublic.map((link, index) => {
        if (link.label === "Documentation") {
          return DropdownMenu ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DropdownMenu,
            {
              items: _chunkBS75PHBDjs.APIDocsUrls,
              title: "Documentation",
              page: _chunkBS75PHBDjs.pageUrl.call(void 0, "apifreaks" /* APIFreaks */)
            },
            index
          ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: _chunkBS75PHBDjs.pageUrl.call(void 0, "apifreaks" /* APIFreaks */), className: "font-bold", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "flex-cc", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { children: "Documentation" }) }) }) }, index);
        }
        if (link.label === "Tools") {
          return DropdownMenu ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DropdownMenu,
            {
              items: toolsCategories,
              title: "Tools",
              page: _chunkBS75PHBDjs.pageUrl.call(void 0, "tools" /* Tools */),
              className: "-translate-x-[20rem]",
              linkPrefetch: false
            },
            index
          ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: _chunkBS75PHBDjs.pageUrl.call(void 0, "tools" /* Tools */), className: "font-bold", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "flex-cc", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { children: "Tools" }) }) }) }, index);
        }
        return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          _link2.default,
          {
            href: link.href,
            className: "font-bold",
            prefetch: link.label !== "Tools",
            children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "flex-cc", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { children: link.label }) })
          }
        ) }, index);
      }) }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex-cb gap-4 font-bold", children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "ml-2", children: [
          " ",
          SiteSearchBarComponent2 && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SiteSearchBarComponent2, { SiteSearchBar: SearchBar }),
          " "
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          _link2.default,
          {
            className: "hover:text-black dark:text-soft-white dark:hover:text-soft-white",
            href: _chunkBS75PHBDjs.pageUrl.call(void 0, "login" /* Login */),
            children: "Sign In"
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          _link2.default,
          {
            href: _chunkBS75PHBDjs.pageUrl.call(void 0, "signup" /* Signup */),
            className: "bg-primary-dark text-white rounded-full py-3 px-4 hover:bg-primary-dark-hover dark:bg-primary dark:text-primary-dark dark:hover:bg-primary-hover",
            children: "Get Started For Free"
          }
        )
      ] })
    ] })
  ] }) }) });
}
var NavBarGlobal_default = NavBarGlobal;

// src/library/components/navigation/site-search/SiteSearchBarComponent.tsx
var _cache = require('next/cache');

var dynamicResourcesPages = _cache.unstable_cache.call(void 0, 
  async function(tag, page) {
    const posts = await _chunkBS75PHBDjs.contentApi.posts.browse({
      order: "published_at desc",
      filter: [`tag:${tag}`]
    });
    return posts.map((post) => ({
      path: _chunkBS75PHBDjs.absoluteUrl.call(void 0, _chunkBS75PHBDjs.pageUrl.call(void 0, page, { slug: post.slug })),
      title: post.title || "",
      content: post.excerpt || ""
    }));
  },
  ["ghost-resources"],
  {
    tags: ["ghost-resources"],
    revalidate: 20
    //* 60 * 24,  //Revalidate After One Day,
  }
);
var apidocs = _chunkBS75PHBDjs.productsCategories.flatMap((category) => category.subheadings).filter((api) => api.isShowInDocs).map((api) => ({
  path: api.href,
  title: api.name,
  content: api.description,
  tag: "Product pages",
  category: "Product pages"
}));
var swaggerDocs = _chunkBS75PHBDjs.SwaggerCatelogue.flatMap((category) => category.subheadings).map((api) => ({
  path: api.href,
  title: api.name,
  content: api.description,
  tag: "Swagger Docs",
  category: "Swagger Docs"
}));
var testPages = _chunkBS75PHBDjs.productsCategoriesTestPages.flatMap((category) => category.subheadings).map((api) => ({
  path: api.href,
  title: api.name,
  content: api.description,
  tag: "Test Pages",
  category: "Test Pages"
}));
var otherPublicPages = [
  {
    path: _chunkBS75PHBDjs.absoluteUrl.call(void 0, _chunkBS75PHBDjs.pageUrl.call(void 0, "public-pricing-calculator" /* PublicPricingCalculator */)),
    title: "Pricing Calculator",
    content: "Get price estimations and plan suggestions based on your requirements using our pricing calculator.",
    tag: "Pricing",
    category: "Pricing"
  },
  {
    path: _chunkBS75PHBDjs.absoluteUrl.call(void 0, _chunkBS75PHBDjs.pageUrl.call(void 0, "api-plans-one-off" /* APIPlansPricingOneOff */)),
    title: "One-Time API Plans",
    content: "Explore our one-time payment API pricing plans for single use access.",
    tag: "Pricing",
    category: "Pricing"
  },
  {
    path: _chunkBS75PHBDjs.absoluteUrl.call(void 0, _chunkBS75PHBDjs.pageUrl.call(void 0, "api-plans-monthly" /* APIPlansPricingMonthly */)),
    title: "Monthly API Plans",
    content: "View our monthly subscription API pricing plans with flexible options.",
    tag: "Pricing",
    category: "Pricing"
  },
  {
    path: _chunkBS75PHBDjs.absoluteUrl.call(void 0, _chunkBS75PHBDjs.pageUrl.call(void 0, "api-plans-yearly" /* APIPlansPricingYearly */)),
    title: "Yearly API Plans",
    content: "Check out our yearly API pricing plans offering the best value for long-term usage.",
    tag: "Pricing",
    category: "Pricing"
  },
  {
    path: _chunkBS75PHBDjs.absoluteUrl.call(void 0, _chunkBS75PHBDjs.pageUrl.call(void 0, "organization-plans" /* OrganizationPlans */)),
    title: "Org-Teams Plans",
    content: "Discover our organization-wide plans designed for teams and enterprises.",
    tag: "Organization",
    category: "Organization"
  },
  {
    path: _chunkBS75PHBDjs.absoluteUrl.call(void 0, _chunkBS75PHBDjs.pageUrl.call(void 0, "terms" /* Terms */)),
    title: "Terms",
    content: "Review the Terms of Service for APIFreaks to understand the rules and guidelines for using our APIs and services.",
    tag: "Legal",
    category: "Legal"
  },
  {
    path: _chunkBS75PHBDjs.absoluteUrl.call(void 0, _chunkBS75PHBDjs.pageUrl.call(void 0, "privacy-policy" /* PrivacyPolicy */)),
    title: "Privacy Policy",
    content: "Read our Privacy Policy to understand how APIFreaks collects, uses, and protects your personal information.",
    tag: "Legal",
    category: "Legal"
  },
  {
    path: _chunkBS75PHBDjs.absoluteUrl.call(void 0, _chunkBS75PHBDjs.pageUrl.call(void 0, "contact-us" /* ContactUs */)),
    title: "Contact Us",
    content: "Contact APIFreaks, a centralized platform for all APIs developed by Jfreaks Software Solutions.",
    tag: "Contact",
    category: "Contact"
  },
  {
    path: _chunkBS75PHBDjs.absoluteUrl.call(void 0, _chunkBS75PHBDjs.pageUrl.call(void 0, "about" /* About */)),
    title: "About Us",
    content: "APIFreaks is a centralized platform for all APIs developed by Jfreaks Software Solutions.",
    tag: "About",
    category: "About"
  },
  {
    path: _chunkBS75PHBDjs.absoluteUrl.call(void 0, _chunkBS75PHBDjs.pageUrl.call(void 0, "swagger" /* Swagger */)),
    title: "Swagger Docs",
    content: "Interactive API documentation using Swagger UI. Explore and test all APIFreaks endpoints.",
    tag: "Swagger Docs",
    category: "Swagger Docs"
  }
];
var seen = /* @__PURE__ */ new Set();
var toolsPages = toolsLinks.flatMap(
  (section) => section.items.flatMap((tool) => {
    if (seen.has(tool.link)) return [];
    seen.add(tool.link);
    return {
      category: section.category,
      tag: "Tools",
      path: tool.link,
      title: tool.title,
      content: tool.description
      // Ensure content is always a string
    };
  })
);
async function SiteSearchBarComponent({ SiteSearchBar }) {
  let blogPages = [];
  let tutorialPages = [];
  let guidePages = [];
  try {
    console.log("Loading dynamic pages...");
    const blogs = await dynamicResourcesPages("blog" /* Blog */, "blog" /* Blog */);
    blogPages = _nullishCoalesce(_optionalChain([blogs, 'optionalAccess', _ => _.map, 'call', _2 => _2((page) => ({
      ...page,
      tag: "blog" /* Blog */,
      category: "blog" /* Blog */
    }))]), () => ( []));
    const tutorials = await dynamicResourcesPages("tutorial" /* Tutorial */, "tutorial" /* Tutorial */);
    tutorialPages = _nullishCoalesce(_optionalChain([tutorials, 'optionalAccess', _3 => _3.map, 'call', _4 => _4((page) => ({
      ...page,
      tag: "tutorial" /* Tutorial */,
      category: "tutorial" /* Tutorial */
    }))]), () => ( []));
    const guides = await dynamicResourcesPages("guide" /* Guide */, "guide" /* Guide */);
    guidePages = _nullishCoalesce(_optionalChain([guides, 'optionalAccess', _5 => _5.map, 'call', _6 => _6((page) => ({
      ...page,
      tag: "guide" /* Guide */,
      category: "guide" /* Guide */
    }))]), () => ( []));
  } catch (e) {
    console.error("Error loading dynamic pages:", e);
  }
  const searchablePages = [
    ...blogPages,
    ...tutorialPages,
    ...guidePages,
    ...otherPublicPages,
    ...apidocs,
    ...testPages,
    ...toolsPages,
    ...swaggerDocs
  ];
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _jsxruntime.Fragment, { children: SiteSearchBar ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SiteSearchBar, { searchablePages }) : null });
}































































































































































exports.APIDocsUrls = _chunkBS75PHBDjs.APIDocsUrls; exports.ASNIcon = _chunkBS75PHBDjs.ASNIcon; exports.AddIcon = _chunkBS75PHBDjs.AddIcon; exports.AdminIcon = _chunkBS75PHBDjs.AdminIcon; exports.ArrowDownIcon = _chunkBS75PHBDjs.ArrowDownIcon; exports.ArrowUpIcon = _chunkBS75PHBDjs.ArrowUpIcon; exports.AstronomyApiIcon = _chunkBS75PHBDjs.AstronomyApiIcon; exports.AvailableIcon = _chunkBS75PHBDjs.AvailableIcon; exports.BarGraphIcon = _chunkBS75PHBDjs.BarGraphIcon; exports.BashIcon = _chunkBS75PHBDjs.BashIcon; exports.BulkDNSLookupIcon = _chunkBS75PHBDjs.BulkDNSLookupIcon; exports.BulkDocumentsIcon = _chunkBS75PHBDjs.BulkDocumentsIcon; exports.BulkIpLocationLookupIcon = _chunkBS75PHBDjs.BulkIpLocationLookupIcon; exports.BulkWhoIsLookupIcon = _chunkBS75PHBDjs.BulkWhoIsLookupIcon; exports.CIcon = _chunkBS75PHBDjs.CIcon; exports.CSharpIcon = _chunkBS75PHBDjs.CSharpIcon; exports.CalculatorIcon = _chunkBS75PHBDjs.CalculatorIcon; exports.CalendarIcon = _chunkBS75PHBDjs.CalendarIcon; exports.CashIcon = _chunkBS75PHBDjs.CashIcon; exports.CheckIcon = _chunkBS75PHBDjs.CheckIcon; exports.ChevronLefttIcon = _chunkBS75PHBDjs.ChevronLefttIcon; exports.ChevronRightIcon = _chunkBS75PHBDjs.ChevronRightIcon; exports.ClockIcon = _chunkBS75PHBDjs.ClockIcon; exports.CollapseIcon = _chunkBS75PHBDjs.CollapseIcon; exports.CommodityIcon = _chunkBS75PHBDjs.CommodityIcon; exports.ConvertIcon = _chunkBS75PHBDjs.ConvertIcon; exports.CopyIcon = _chunkBS75PHBDjs.CopyIcon; exports.CropIcon = _chunkBS75PHBDjs.CropIcon; exports.CrossIcon = _chunkBS75PHBDjs.CrossIcon; exports.CssIcon = _chunkBS75PHBDjs.CssIcon; exports.CurrencyExchangeIcon = _chunkBS75PHBDjs.CurrencyExchangeIcon; exports.DNSIcon = _chunkBS75PHBDjs.DNSIcon; exports.DarkModeIcon = _chunkBS75PHBDjs.DarkModeIcon; exports.DartIcon = _chunkBS75PHBDjs.DartIcon; exports.DeleteIcon = _chunkBS75PHBDjs.DeleteIcon; exports.DiffCheckIcon = _chunkBS75PHBDjs.DiffCheckIcon; exports.DiscountIcon = _chunkBS75PHBDjs.DiscountIcon; exports.DomainIcon = _chunkBS75PHBDjs.DomainIcon; exports.DotsMenuIcon = _chunkBS75PHBDjs.DotsMenuIcon; exports.DownloadInvoiceIcon = _chunkBS75PHBDjs.DownloadInvoiceIcon; exports.DropDownIcon = _chunkBS75PHBDjs.DropDownIcon; exports.ENDPOINT_TESTING_PAGE_URLS = _chunkBS75PHBDjs.ENDPOINT_TESTING_PAGE_URLS; exports.EditIcon = _chunkBS75PHBDjs.EditIcon; exports.EmailIcon = _chunkBS75PHBDjs.EmailIcon; exports.EmailWithSearchIcon = _chunkBS75PHBDjs.EmailWithSearchIcon; exports.ErrorIcon = _chunkBS75PHBDjs.ErrorIcon; exports.ExpandIcon = _chunkBS75PHBDjs.ExpandIcon; exports.FREE_CREDITS = _chunkBS75PHBDjs.FREE_CREDITS; exports.FacebookIcon = _chunkBS75PHBDjs.FacebookIcon; exports.FluctuationIcon = _chunkBS75PHBDjs.FluctuationIcon; exports.Footer = Footer_default; exports.FullScreenIcon = _chunkBS75PHBDjs.FullScreenIcon; exports.GithubDarkIcon = _chunkBS75PHBDjs.GithubDarkIcon; exports.GithubIcon = _chunkBS75PHBDjs.GithubIcon; exports.GoIcon = _chunkBS75PHBDjs.GoIcon; exports.GoogleIcon = _chunkBS75PHBDjs.GoogleIcon; exports.HEADER_HEIGHT = _chunkBS75PHBDjs.HEADER_HEIGHT; exports.HamburgerIcon = _chunkBS75PHBDjs.HamburgerIcon; exports.HeartIcon = _chunkBS75PHBDjs.HeartIcon; exports.HistoricIcon = _chunkBS75PHBDjs.HistoricIcon; exports.HistoricalCurrencyConverterIcon = _chunkBS75PHBDjs.HistoricalCurrencyConverterIcon; exports.HomeIcon = _chunkBS75PHBDjs.HomeIcon; exports.HomePageAPICatalogue = _chunkBS75PHBDjs.HomePageAPICatalogue; exports.HtmlIcon = _chunkBS75PHBDjs.HtmlIcon; exports.IPIcon = _chunkBS75PHBDjs.IPIcon; exports.IncludeIcon = _chunkBS75PHBDjs.IncludeIcon; exports.InviteIcon = _chunkBS75PHBDjs.InviteIcon; exports.IpLocationLookupIcon = _chunkBS75PHBDjs.IpLocationLookupIcon; exports.JavaIcon = _chunkBS75PHBDjs.JavaIcon; exports.JavaScriptIcon = _chunkBS75PHBDjs.JavaScriptIcon; exports.JavascriptIcon = _chunkBS75PHBDjs.JavascriptIcon; exports.JsonIcon = _chunkBS75PHBDjs.JsonIcon; exports.KeyIcon = _chunkBS75PHBDjs.KeyIcon; exports.KotlinIcon = _chunkBS75PHBDjs.KotlinIcon; exports.LeftArrowIcon = _chunkBS75PHBDjs.LeftArrowIcon; exports.LightModeIcon = _chunkBS75PHBDjs.LightModeIcon; exports.LinkIcon = _chunkBS75PHBDjs.LinkIcon; exports.LinkedinIcon = _chunkBS75PHBDjs.LinkedinIcon; exports.LoadingIcon = _chunkBS75PHBDjs.LoadingIcon; exports.LocalCurrencyIcon = _chunkBS75PHBDjs.LocalCurrencyIcon; exports.LockIcon = _chunkBS75PHBDjs.LockIcon; exports.LogoutIcon = _chunkBS75PHBDjs.LogoutIcon; exports.MAX_FREE_ORGANIZATION_MEMBERS = _chunkBS75PHBDjs.MAX_FREE_ORGANIZATION_MEMBERS; exports.MailIcon = _chunkBS75PHBDjs.MailIcon; exports.MeterIcon = _chunkBS75PHBDjs.MeterIcon; exports.MobileNavigationCloseIcon = _chunkBS75PHBDjs.MobileNavigationCloseIcon; exports.NavbarGlobal = NavBarGlobal_default; exports.NoPrefetchLink = NoPrefetchLink_default; exports.NodeJsIcon = _chunkBS75PHBDjs.NodeJsIcon; exports.NotFound = NotFound_default; exports.OrganizationIcon = _chunkBS75PHBDjs.OrganizationIcon; exports.OrganizationPlanIcon = _chunkBS75PHBDjs.OrganizationPlanIcon; exports.PAGE = _chunkBS75PHBDjs.PAGE; exports.PAGE_URLS = _chunkBS75PHBDjs.PAGE_URLS; exports.PER_EXTRA_MEMBER_COST = _chunkBS75PHBDjs.PER_EXTRA_MEMBER_COST; exports.PHPIcon = _chunkBS75PHBDjs.PHPIcon; exports.PRIVATE_HEADER_HEIGHT = _chunkBS75PHBDjs.PRIVATE_HEADER_HEIGHT; exports.PlusIcon = _chunkBS75PHBDjs.PlusIcon; exports.ProfileIcon = _chunkBS75PHBDjs.ProfileIcon; exports.PythonIcon = _chunkBS75PHBDjs.PythonIcon; exports.RestrictionIcon = _chunkBS75PHBDjs.RestrictionIcon; exports.ReverseDNSLookupIcon = _chunkBS75PHBDjs.ReverseDNSLookupIcon; exports.ReverseIcon = _chunkBS75PHBDjs.ReverseIcon; exports.RotateIcon = _chunkBS75PHBDjs.RotateIcon; exports.RubyIcon = _chunkBS75PHBDjs.RubyIcon; exports.RustIcon = _chunkBS75PHBDjs.RustIcon; exports.SSLCertificateChainLookupIcon = _chunkBS75PHBDjs.SSLCertificateChainLookupIcon; exports.SSLIcon = _chunkBS75PHBDjs.SSLIcon; exports.SUPPORT_EMAIL_ADDRESS = _chunkBS75PHBDjs.SUPPORT_EMAIL_ADDRESS; exports.ScraperApiIcon = _chunkBS75PHBDjs.ScraperApiIcon; exports.ScreenshotIcon = _chunkBS75PHBDjs.ScreenshotIcon; exports.SearchIcon = _chunkBS75PHBDjs.SearchIcon; exports.SiteSearchBarComponent = SiteSearchBarComponent; exports.SortArrowsIcon = _chunkBS75PHBDjs.SortArrowsIcon; exports.SqlIcon = _chunkBS75PHBDjs.SqlIcon; exports.SubscriptionIcon = _chunkBS75PHBDjs.SubscriptionIcon; exports.SuccessIcon = _chunkBS75PHBDjs.SuccessIcon; exports.SuggestIcon = _chunkBS75PHBDjs.SuggestIcon; exports.SvgIcon = _chunkBS75PHBDjs.SvgIcon; exports.SwaggerCatelogue = _chunkBS75PHBDjs.SwaggerCatelogue; exports.SwiftIcon = _chunkBS75PHBDjs.SwiftIcon; exports.SystemIcon = _chunkBS75PHBDjs.SystemIcon; exports.TAG = _chunkBS75PHBDjs.TAG; exports.THEME = _chunkBS75PHBDjs.THEME; exports.TOOLS_PAGE_URLS = _chunkBS75PHBDjs.TOOLS_PAGE_URLS; exports.TOOL_PAGE = _chunkBS75PHBDjs.TOOL_PAGE; exports.TextIcon = _chunkBS75PHBDjs.TextIcon; exports.TickIcon = _chunkBS75PHBDjs.TickIcon; exports.TimeSeriesIcon = _chunkBS75PHBDjs.TimeSeriesIcon; exports.TimeZoneConvertIcon = _chunkBS75PHBDjs.TimeZoneConvertIcon; exports.TimeZoneIcon = _chunkBS75PHBDjs.TimeZoneIcon; exports.TodayIcon = _chunkBS75PHBDjs.TodayIcon; exports.TwitterIcon = _chunkBS75PHBDjs.TwitterIcon; exports.UserAgentApiIcon = _chunkBS75PHBDjs.UserAgentApiIcon; exports.UserIcon = _chunkBS75PHBDjs.UserIcon; exports.VATIcon = _chunkBS75PHBDjs.VATIcon; exports.WhoIsHistoricalLookupIcon = _chunkBS75PHBDjs.WhoIsHistoricalLookupIcon; exports.WhoIsLookupIcon = _chunkBS75PHBDjs.WhoIsLookupIcon; exports.XmlIcon = _chunkBS75PHBDjs.XmlIcon; exports.YamlIcon = _chunkBS75PHBDjs.YamlIcon; exports.absoluteUrl = _chunkBS75PHBDjs.absoluteUrl; exports.adminApi = _chunkBS75PHBDjs.adminApi; exports.apiList = _chunkBS75PHBDjs.apiList; exports.contentApi = _chunkBS75PHBDjs.contentApi; exports.getAbsoluteToolsBasePath = _chunkBS75PHBDjs.getAbsoluteToolsBasePath; exports.getAdminApi = _chunkBS75PHBDjs.getAdminApi; exports.getBaseToolsAppPath = _chunkBS75PHBDjs.getBaseToolsAppPath; exports.getContentApi = _chunkBS75PHBDjs.getContentApi; exports.getOrigin = _chunkBS75PHBDjs.getOrigin; exports.getProtocol = _chunkBS75PHBDjs.getProtocol; exports.navigationLinksPublic = _chunkBS75PHBDjs.navigationLinksPublic; exports.pageUrl = _chunkBS75PHBDjs.pageUrl; exports.productsCategories = _chunkBS75PHBDjs.productsCategories; exports.productsCategoriesTestPages = _chunkBS75PHBDjs.productsCategoriesTestPages; exports.stopClickPropagation = _chunkBS75PHBDjs.stopClickPropagation; exports.toolPageUrl = _chunkBS75PHBDjs.toolPageUrl; exports.toolsCategories = toolsCategories; exports.toolsLinks = toolsLinks;
//# sourceMappingURL=exports-server.js.map