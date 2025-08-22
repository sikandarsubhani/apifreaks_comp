import {
  APIDocsUrls,
  ASNIcon,
  AddIcon,
  AdminIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  AstronomyApiIcon,
  AvailableIcon,
  BarGraphIcon,
  BashIcon,
  BulkDNSLookupIcon,
  BulkDocumentsIcon,
  BulkIpLocationLookupIcon,
  BulkWhoIsLookupIcon,
  CIcon,
  CSharpIcon,
  CalculatorIcon,
  CalendarIcon,
  CashIcon,
  CheckIcon,
  ChevronLefttIcon,
  ChevronRightIcon,
  ClockIcon,
  CollapseIcon,
  CommodityIcon,
  ConvertIcon,
  CopyIcon,
  CropIcon,
  CrossIcon,
  CssIcon,
  CurrencyExchangeIcon,
  DNSIcon,
  DarkModeIcon,
  DartIcon,
  DeleteIcon,
  DiffCheckIcon,
  DiscountIcon,
  DomainIcon,
  DotsMenuIcon,
  DownloadInvoiceIcon,
  DropDownIcon,
  ENDPOINT_TESTING_PAGE_URLS,
  EditIcon,
  EmailIcon,
  EmailWithSearchIcon,
  ErrorIcon,
  ExpandIcon,
  FREE_CREDITS,
  FacebookIcon,
  FluctuationIcon,
  FullScreenIcon,
  GithubDarkIcon,
  GithubIcon,
  GoIcon,
  GoogleIcon,
  HEADER_HEIGHT,
  HamburgerIcon,
  HeartIcon,
  HistoricIcon,
  HistoricalCurrencyConverterIcon,
  HomeIcon,
  HomePageAPICatalogue,
  HtmlIcon,
  IPIcon,
  IncludeIcon,
  InviteIcon,
  IpLocationLookupIcon,
  JavaIcon,
  JavaScriptIcon,
  JavascriptIcon,
  JsonIcon,
  KeyIcon,
  KotlinIcon,
  LeftArrowIcon,
  LightModeIcon,
  LinkIcon,
  LinkedinIcon,
  LoadingIcon,
  LocalCurrencyIcon,
  LockIcon,
  LogoutIcon,
  MAX_FREE_ORGANIZATION_MEMBERS,
  MailIcon,
  MeterIcon,
  MobileNavigationCloseIcon,
  NodeJsIcon,
  OrganizationIcon,
  OrganizationPlanIcon,
  PAGE,
  PAGE_URLS,
  PER_EXTRA_MEMBER_COST,
  PHPIcon,
  PRIVATE_HEADER_HEIGHT,
  PlusIcon,
  ProfileIcon,
  PythonIcon,
  RestrictionIcon,
  ReverseDNSLookupIcon,
  ReverseIcon,
  RotateIcon,
  RubyIcon,
  RustIcon,
  SSLCertificateChainLookupIcon,
  SSLIcon,
  SUPPORT_EMAIL_ADDRESS,
  ScraperApiIcon,
  ScreenshotIcon,
  SearchIcon,
  SortArrowsIcon,
  SqlIcon,
  SubscriptionIcon,
  SuccessIcon,
  SuggestIcon,
  SvgIcon,
  SwaggerCatelogue,
  SwiftIcon,
  SystemIcon,
  TAG,
  THEME,
  TOOLS_PAGE_URLS,
  TOOL_PAGE,
  TextIcon,
  TickIcon,
  TimeSeriesIcon,
  TimeZoneConvertIcon,
  TimeZoneIcon,
  TodayIcon,
  TwitterIcon,
  UserAgentApiIcon,
  UserIcon,
  VATIcon,
  WhoIsHistoricalLookupIcon,
  WhoIsLookupIcon,
  XmlIcon,
  YamlIcon,
  absoluteUrl,
  adminApi,
  apiList,
  contentApi,
  getAbsoluteToolsBasePath,
  getAdminApi,
  getBaseToolsAppPath,
  getContentApi,
  getOrigin,
  getProtocol,
  navigationLinksPublic,
  pageUrl,
  productsCategories,
  productsCategoriesTestPages,
  stopClickPropagation,
  toolPageUrl
} from "./chunk-2F64GF7T.mjs";

// src/library/components/navigation/Footer.tsx
import Image from "next/image";
import Link2 from "next/link";

// src/library/components/common/NoPrefetchLink.tsx
import Link from "next/link";
import { jsx } from "react/jsx-runtime";
function NoPrefetchLink({
  href,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(Link, { href, prefetch: false, className, ...props, children });
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
        link: toolPageUrl("HTML-Formatter" /* HTMLFormatter */),
        icon: HtmlIcon,
        // ✅ pass component, not JSX
        description: "Easily format HTML with customizable indentation levels, minify HTML, and preview your content by uploading files."
      },
      {
        title: "Free CSS Minifier & CSS Formatter Online",
        link: toolPageUrl("CSS-Minifier" /* CSSMinifier */),
        icon: CssIcon,
        description: "Optimize your CSS for faster load times and cleaner code with our free CSS Minifier and CSS Formatter."
      },
      {
        title: "Minify, Compress, and Beautify JavaScript Code Online",
        link: toolPageUrl("JS-Minifier" /* JSMinifier */),
        icon: JavascriptIcon,
        description: "Easily compress, minify, and format JavaScript code to enhance readability and performance."
      },
      {
        title: "Free Online SQL Beautifier & Minifier",
        link: toolPageUrl("SQL-Formatter" /* SQLFormatter */),
        icon: SqlIcon,
        description: "Format and structure SQL queries for better readability and maintenance."
      },
      {
        title: "View, Format, Minify, and Validate JSON Online",
        link: toolPageUrl("JSON-Formatter" /* JSONFormatter */),
        icon: JsonIcon,
        description: "Beautify, minify, validate, and view JSON data with an easy-to-navigate structure."
      },
      {
        title: "Free XML Beautifier, XML Minifier, and XML Validator Online",
        link: toolPageUrl("XML-Formatter" /* XMLFormatter */),
        icon: JsonIcon,
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
        link: toolPageUrl("XML-to-JSON-Converter" /* XMLtoJSONConverter */),
        icon: XmlIcon,
        description: "Convert XML to JSON quickly and efficiently with customizable formatting options."
      },
      {
        title: "Remove Whitespace, Change Text Case & Replace Text Online",
        link: toolPageUrl("Case-Converter" /* CaseConverter */),
        icon: TextIcon,
        description: "Transform text by changing case, removing whitespace, and replacing characters efficiently."
      },
      {
        title: "Online Diff Checker",
        link: toolPageUrl("Diff-Checker" /* DiffChecker */),
        icon: DiffCheckIcon,
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
        link: toolPageUrl("SVG-Viewer" /* SVGViewer */),
        icon: SvgIcon,
        description: "Preview and analyze SVG files with an intuitive online viewer."
      },
      {
        title: "Online YAML Validator and YAML Formatter",
        link: toolPageUrl("YAMLValidator" /* YAMLValidator */),
        icon: YamlIcon,
        description: "Our online YAML Validator checks for syntax errors and ensuring correct formatting."
      },
      {
        title: "Free Online SMTP Checker Tool",
        link: toolPageUrl("SMPTChecker" /* SMTPChecker */),
        icon: EmailIcon,
        description: "Quickly test SMTP connections, ports, and authentication. Diagnose email delivery issues and simulate sending\u2014all in one easy tool."
      },
      {
        title: "Email Header Analyzer",
        link: toolPageUrl("EmailHeaderAnalyzer" /* EmailHeaderAnalyzer */),
        icon: EmailWithSearchIcon,
        description: "Analyze full email headers to trace origin, verify SPF/DKIM/DMARC, and detect spam, spoofing, or delivery issues."
      }
    ]
  }
];
var toolsCategories = toolsLinks.map((cat) => ({
  title: cat.category,
  link: `${pageUrl("tools" /* Tools */)}#${cat.id}`
}));

// src/library/components/navigation/Footer.tsx
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
function Footer({ logosrc = "https://res.cloudinary.com/dc5hkrpco/image/upload/v1755631017/logo-black-bg-small_uadg5k.jpg" }) {
  return /* @__PURE__ */ jsx2(Fragment, { children: /* @__PURE__ */ jsx2("footer", { className: "@container bg-black text-white responsive-pad overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1540px] mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-cc py-10 flex-col @[768px]:flex-row gap-5", children: [
      /* @__PURE__ */ jsx2("p", { className: "text-3xl font-bold text-white", children: "Ready to get started?" }),
      /* @__PURE__ */ jsx2(
        Link2,
        {
          href: pageUrl("signup" /* Signup */),
          className: "bg-primary text-center py-5 px-10 rounded-full text-black font-medium text-base",
          children: "Sign Up for Free"
        }
      )
    ] }),
    /* @__PURE__ */ jsx2("hr", {}),
    /* @__PURE__ */ jsxs("div", { className: "py-10 text-center @[640px]:text-left", children: [
      /* @__PURE__ */ jsxs("div", { className: "@[768px]:flex-b items-start gap-x-12 space-y-20 @[768px]:space-y-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center space-y-3", children: [
          /* @__PURE__ */ jsx2(Link2, { href: "/", className: "mx-auto", children: /* @__PURE__ */ jsx2(
            Image,
            {
              src: logosrc,
              width: 120,
              height: 120,
              alt: "APIFreaks"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-cc gap-2 mt-4", children: [
            /* @__PURE__ */ jsx2(
              Link2,
              {
                href: "/",
                className: "rounded-full bg-primary w-7 h-7 flex-cc text-black",
                children: /* @__PURE__ */ jsx2(LinkedinIcon, {})
              }
            ),
            /* @__PURE__ */ jsx2(
              Link2,
              {
                href: "/",
                className: "rounded-full bg-primary w-7 h-7 flex-cc text-black",
                children: /* @__PURE__ */ jsx2(FacebookIcon, {})
              }
            ),
            /* @__PURE__ */ jsx2(
              Link2,
              {
                href: "/",
                className: "rounded-full bg-primary w-7 h-7 flex-cc text-black",
                children: /* @__PURE__ */ jsx2(TwitterIcon, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-wrap @[640px]:h-[500px] @[1280px]:h-[380px] @[768px]:w-[70%] gap-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx2("h3", { className: "text-primary text-xl font-bold", children: "API Catalog" }),
            /* @__PURE__ */ jsx2("ul", { className: "space-y-1", children: APIDocsUrls.map((api) => /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link2, { href: api.link, children: api.title }) }, api.title)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx2("h3", { className: "text-primary text-xl font-bold", children: "Tools Catalog" }),
            /* @__PURE__ */ jsx2("ul", { className: "space-y-1", children: toolsCategories.map((api) => /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(NoPrefetchLink_default, { href: api.link, children: api.title }) }, api.title)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx2("h3", { className: "text-primary text-xl font-bold", children: "Docs" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link2, { href: pageUrl("apifreaks" /* APIFreaks */), children: "Documentation" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link2, { href: pageUrl("swagger" /* Swagger */), children: "Swagger Docs" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx2("h3", { className: "text-primary text-xl font-bold", children: "Pricing & Accounts" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link2, { href: pageUrl("api-plans-one-off" /* APIPlansPricingOneOff */), children: "Pricing" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link2, { href: pageUrl("signup" /* Signup */), children: "Sign up" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link2, { href: pageUrl("login" /* Login */), children: "Sign In" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-lg space-y-3", children: [
            /* @__PURE__ */ jsx2("h3", { className: "text-primary text-xl font-bold", children: "Company" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link2, { href: pageUrl("about" /* About */), children: "About Us" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link2, { href: pageUrl("resources" /* Resources */), children: "Resources" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link2, { href: pageUrl("terms" /* Terms */), children: "Terms" }) }),
              /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(Link2, { href: pageUrl("privacy-policy" /* PrivacyPolicy */), children: "Privacy" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-cc flex-col text-base mt-56", children: [
        /* @__PURE__ */ jsx2("div", { className: "rounded-full bg-primary w-10 h-10 flex-cc text-black mb-2", children: /* @__PURE__ */ jsx2(HeartIcon, {}) }),
        /* @__PURE__ */ jsx2("p", { children: "Copyright \xA9 2024" }),
        /* @__PURE__ */ jsx2("p", { children: "Made in Pakistan" })
      ] })
    ] })
  ] }) }) });
}
var Footer_default = Footer;

// src/library/components/NotFound.tsx
import Link3 from "next/link";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function NotFound() {
  return /* @__PURE__ */ jsxs2("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx3("h1", { className: "text-9xl font-extrabold text-primary-dark dark:text-soft-white", children: "404" }),
    /* @__PURE__ */ jsx3("p", { className: "text-2xl text-gray-700 mt-4", children: "Page Not Found" }),
    /* @__PURE__ */ jsx3("p", { className: "text-gray-500 mt-2", children: "Sorry, the page you are looking for does not exist." }),
    /* @__PURE__ */ jsx3(
      Link3,
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
import Image2 from "next/image";
import Link4 from "next/link";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function NavBarGlobal({
  logosrc = "https://res.cloudinary.com/dc5hkrpco/image/upload/v1755631017/logo-black-yellow-bg_ty4arv.jpg",
  DropdownMenu,
  MobileNavigation,
  SiteSearchBarComponent: SiteSearchBarComponent2,
  SearchBar
}) {
  return /* @__PURE__ */ jsx4("div", { className: "relative bg-primary", children: /* @__PURE__ */ jsx4("header", { className: "text-primary-dark-hover responsive-pad max-w-[1668px] w-full mx-auto", children: /* @__PURE__ */ jsxs3("div", { className: "flex-cb py-1 w-full", children: [
    /* @__PURE__ */ jsxs3(Link4, { href: "/", className: "block mx-5", children: [
      /* @__PURE__ */ jsx4(
        Image2,
        {
          src: logosrc,
          width: 90,
          height: 90,
          alt: "API Freaks logo",
          priority: true,
          className: "hidden lg:block"
        }
      ),
      /* @__PURE__ */ jsx4(
        Image2,
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
    /* @__PURE__ */ jsxs3("div", { className: "flex-cc gap-1 lg:hidden", children: [
      SiteSearchBarComponent2 && /* @__PURE__ */ jsx4(SiteSearchBarComponent2, { SiteSearchBar: SearchBar }),
      MobileNavigation && /* @__PURE__ */ jsx4(MobileNavigation, {})
    ] }),
    /* @__PURE__ */ jsxs3("nav", { className: "hidden lg:flex justify-between gap-0 max-w-[1050px] w-full py-3 px-5 mx-5 bg-white dark:text-soft-white dark:bg-primary-dark rounded-full select-none dark:bg-black dark:hover:text-[#f5f5f5]", children: [
      /* @__PURE__ */ jsx4("ul", { className: "flex-c space-x-8 xl:space-x-10 dark:text-soft-white dark:hover:text-gray-100", children: navigationLinksPublic.map((link, index) => {
        if (link.label === "Documentation") {
          return DropdownMenu ? /* @__PURE__ */ jsx4(
            DropdownMenu,
            {
              items: APIDocsUrls,
              title: "Documentation",
              page: pageUrl("apifreaks" /* APIFreaks */)
            },
            index
          ) : /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(Link4, { href: pageUrl("apifreaks" /* APIFreaks */), className: "font-bold", children: /* @__PURE__ */ jsx4("div", { className: "flex-cc", children: /* @__PURE__ */ jsx4("p", { children: "Documentation" }) }) }) }, index);
        }
        if (link.label === "Tools") {
          return DropdownMenu ? /* @__PURE__ */ jsx4(
            DropdownMenu,
            {
              items: toolsCategories,
              title: "Tools",
              page: pageUrl("tools" /* Tools */),
              className: "-translate-x-[20rem]",
              linkPrefetch: false
            },
            index
          ) : /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(Link4, { href: pageUrl("tools" /* Tools */), className: "font-bold", children: /* @__PURE__ */ jsx4("div", { className: "flex-cc", children: /* @__PURE__ */ jsx4("p", { children: "Tools" }) }) }) }, index);
        }
        return /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(
          Link4,
          {
            href: link.href,
            className: "font-bold",
            prefetch: link.label !== "Tools",
            children: /* @__PURE__ */ jsx4("div", { className: "flex-cc", children: /* @__PURE__ */ jsx4("p", { children: link.label }) })
          }
        ) }, index);
      }) }),
      /* @__PURE__ */ jsxs3("div", { className: "flex-cb gap-4 font-bold", children: [
        /* @__PURE__ */ jsxs3("div", { className: "ml-2", children: [
          " ",
          SiteSearchBarComponent2 && /* @__PURE__ */ jsx4(SiteSearchBarComponent2, { SiteSearchBar: SearchBar }),
          " "
        ] }),
        /* @__PURE__ */ jsx4(
          Link4,
          {
            className: "hover:text-black dark:text-soft-white dark:hover:text-soft-white",
            href: pageUrl("login" /* Login */),
            children: "Sign In"
          }
        ),
        /* @__PURE__ */ jsx4(
          Link4,
          {
            href: pageUrl("signup" /* Signup */),
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
import { unstable_cache } from "next/cache";
import { Fragment as Fragment2, jsx as jsx5 } from "react/jsx-runtime";
var dynamicResourcesPages = unstable_cache(
  async function(tag, page) {
    const posts = await contentApi.posts.browse({
      order: "published_at desc",
      filter: [`tag:${tag}`]
    });
    return posts.map((post) => ({
      path: absoluteUrl(pageUrl(page, { slug: post.slug })),
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
var apidocs = productsCategories.flatMap((category) => category.subheadings).filter((api) => api.isShowInDocs).map((api) => ({
  path: api.href,
  title: api.name,
  content: api.description,
  tag: "Product pages",
  category: "Product pages"
}));
var swaggerDocs = SwaggerCatelogue.flatMap((category) => category.subheadings).map((api) => ({
  path: api.href,
  title: api.name,
  content: api.description,
  tag: "Swagger Docs",
  category: "Swagger Docs"
}));
var testPages = productsCategoriesTestPages.flatMap((category) => category.subheadings).map((api) => ({
  path: api.href,
  title: api.name,
  content: api.description,
  tag: "Test Pages",
  category: "Test Pages"
}));
var otherPublicPages = [
  {
    path: absoluteUrl(pageUrl("public-pricing-calculator" /* PublicPricingCalculator */)),
    title: "Pricing Calculator",
    content: "Get price estimations and plan suggestions based on your requirements using our pricing calculator.",
    tag: "Pricing",
    category: "Pricing"
  },
  {
    path: absoluteUrl(pageUrl("api-plans-one-off" /* APIPlansPricingOneOff */)),
    title: "One-Time API Plans",
    content: "Explore our one-time payment API pricing plans for single use access.",
    tag: "Pricing",
    category: "Pricing"
  },
  {
    path: absoluteUrl(pageUrl("api-plans-monthly" /* APIPlansPricingMonthly */)),
    title: "Monthly API Plans",
    content: "View our monthly subscription API pricing plans with flexible options.",
    tag: "Pricing",
    category: "Pricing"
  },
  {
    path: absoluteUrl(pageUrl("api-plans-yearly" /* APIPlansPricingYearly */)),
    title: "Yearly API Plans",
    content: "Check out our yearly API pricing plans offering the best value for long-term usage.",
    tag: "Pricing",
    category: "Pricing"
  },
  {
    path: absoluteUrl(pageUrl("organization-plans" /* OrganizationPlans */)),
    title: "Org-Teams Plans",
    content: "Discover our organization-wide plans designed for teams and enterprises.",
    tag: "Organization",
    category: "Organization"
  },
  {
    path: absoluteUrl(pageUrl("terms" /* Terms */)),
    title: "Terms",
    content: "Review the Terms of Service for APIFreaks to understand the rules and guidelines for using our APIs and services.",
    tag: "Legal",
    category: "Legal"
  },
  {
    path: absoluteUrl(pageUrl("privacy-policy" /* PrivacyPolicy */)),
    title: "Privacy Policy",
    content: "Read our Privacy Policy to understand how APIFreaks collects, uses, and protects your personal information.",
    tag: "Legal",
    category: "Legal"
  },
  {
    path: absoluteUrl(pageUrl("contact-us" /* ContactUs */)),
    title: "Contact Us",
    content: "Contact APIFreaks, a centralized platform for all APIs developed by Jfreaks Software Solutions.",
    tag: "Contact",
    category: "Contact"
  },
  {
    path: absoluteUrl(pageUrl("about" /* About */)),
    title: "About Us",
    content: "APIFreaks is a centralized platform for all APIs developed by Jfreaks Software Solutions.",
    tag: "About",
    category: "About"
  },
  {
    path: absoluteUrl(pageUrl("swagger" /* Swagger */)),
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
    blogPages = blogs?.map((page) => ({
      ...page,
      tag: "blog" /* Blog */,
      category: "blog" /* Blog */
    })) ?? [];
    const tutorials = await dynamicResourcesPages("tutorial" /* Tutorial */, "tutorial" /* Tutorial */);
    tutorialPages = tutorials?.map((page) => ({
      ...page,
      tag: "tutorial" /* Tutorial */,
      category: "tutorial" /* Tutorial */
    })) ?? [];
    const guides = await dynamicResourcesPages("guide" /* Guide */, "guide" /* Guide */);
    guidePages = guides?.map((page) => ({
      ...page,
      tag: "guide" /* Guide */,
      category: "guide" /* Guide */
    })) ?? [];
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
  return /* @__PURE__ */ jsx5(Fragment2, { children: SiteSearchBar ? /* @__PURE__ */ jsx5(SiteSearchBar, { searchablePages }) : null });
}
export {
  APIDocsUrls,
  ASNIcon,
  AddIcon,
  AdminIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  AstronomyApiIcon,
  AvailableIcon,
  BarGraphIcon,
  BashIcon,
  BulkDNSLookupIcon,
  BulkDocumentsIcon,
  BulkIpLocationLookupIcon,
  BulkWhoIsLookupIcon,
  CIcon,
  CSharpIcon,
  CalculatorIcon,
  CalendarIcon,
  CashIcon,
  CheckIcon,
  ChevronLefttIcon,
  ChevronRightIcon,
  ClockIcon,
  CollapseIcon,
  CommodityIcon,
  ConvertIcon,
  CopyIcon,
  CropIcon,
  CrossIcon,
  CssIcon,
  CurrencyExchangeIcon,
  DNSIcon,
  DarkModeIcon,
  DartIcon,
  DeleteIcon,
  DiffCheckIcon,
  DiscountIcon,
  DomainIcon,
  DotsMenuIcon,
  DownloadInvoiceIcon,
  DropDownIcon,
  ENDPOINT_TESTING_PAGE_URLS,
  EditIcon,
  EmailIcon,
  EmailWithSearchIcon,
  ErrorIcon,
  ExpandIcon,
  FREE_CREDITS,
  FacebookIcon,
  FluctuationIcon,
  Footer_default as Footer,
  FullScreenIcon,
  GithubDarkIcon,
  GithubIcon,
  GoIcon,
  GoogleIcon,
  HEADER_HEIGHT,
  HamburgerIcon,
  HeartIcon,
  HistoricIcon,
  HistoricalCurrencyConverterIcon,
  HomeIcon,
  HomePageAPICatalogue,
  HtmlIcon,
  IPIcon,
  IncludeIcon,
  InviteIcon,
  IpLocationLookupIcon,
  JavaIcon,
  JavaScriptIcon,
  JavascriptIcon,
  JsonIcon,
  KeyIcon,
  KotlinIcon,
  LeftArrowIcon,
  LightModeIcon,
  LinkIcon,
  LinkedinIcon,
  LoadingIcon,
  LocalCurrencyIcon,
  LockIcon,
  LogoutIcon,
  MAX_FREE_ORGANIZATION_MEMBERS,
  MailIcon,
  MeterIcon,
  MobileNavigationCloseIcon,
  NavBarGlobal_default as NavbarGlobal,
  NoPrefetchLink_default as NoPrefetchLink,
  NodeJsIcon,
  NotFound_default as NotFound,
  OrganizationIcon,
  OrganizationPlanIcon,
  PAGE,
  PAGE_URLS,
  PER_EXTRA_MEMBER_COST,
  PHPIcon,
  PRIVATE_HEADER_HEIGHT,
  PlusIcon,
  ProfileIcon,
  PythonIcon,
  RestrictionIcon,
  ReverseDNSLookupIcon,
  ReverseIcon,
  RotateIcon,
  RubyIcon,
  RustIcon,
  SSLCertificateChainLookupIcon,
  SSLIcon,
  SUPPORT_EMAIL_ADDRESS,
  ScraperApiIcon,
  ScreenshotIcon,
  SearchIcon,
  SiteSearchBarComponent,
  SortArrowsIcon,
  SqlIcon,
  SubscriptionIcon,
  SuccessIcon,
  SuggestIcon,
  SvgIcon,
  SwaggerCatelogue,
  SwiftIcon,
  SystemIcon,
  TAG,
  THEME,
  TOOLS_PAGE_URLS,
  TOOL_PAGE,
  TextIcon,
  TickIcon,
  TimeSeriesIcon,
  TimeZoneConvertIcon,
  TimeZoneIcon,
  TodayIcon,
  TwitterIcon,
  UserAgentApiIcon,
  UserIcon,
  VATIcon,
  WhoIsHistoricalLookupIcon,
  WhoIsLookupIcon,
  XmlIcon,
  YamlIcon,
  absoluteUrl,
  adminApi,
  apiList,
  contentApi,
  getAbsoluteToolsBasePath,
  getAdminApi,
  getBaseToolsAppPath,
  getContentApi,
  getOrigin,
  getProtocol,
  navigationLinksPublic,
  pageUrl,
  productsCategories,
  productsCategoriesTestPages,
  stopClickPropagation,
  toolPageUrl,
  toolsCategories,
  toolsLinks
};
//# sourceMappingURL=exports-server.mjs.map