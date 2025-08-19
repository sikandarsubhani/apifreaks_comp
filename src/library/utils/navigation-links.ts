import {
  ASNIcon,
  AstronomyApiIcon,
  AvailableIcon,
  BarGraphIcon,
  BulkDNSLookupIcon,
  BulkDocumentsIcon,
  BulkIpLocationLookupIcon,
  BulkWhoIsLookupIcon,
  CommodityIcon,
  ConvertIcon,
  CssIcon,
  CurrencyExchangeIcon,
  DiffCheckIcon,
  DNSIcon,
  DomainIcon,
  FluctuationIcon,
  HistoricalCurrencyConverterIcon,
  HistoricIcon,
  HomeIcon,
  HtmlIcon,
  IPIcon,
  IpLocationLookupIcon,
  JavascriptIcon,
  JsonIcon,
  KeyIcon,
  LocalCurrencyIcon,
  MailIcon,
  ReverseDNSLookupIcon,
  ReverseIcon,
  ScraperApiIcon,
  ScreenshotIcon,
  SqlIcon,
  SSLCertificateChainLookupIcon,
  SSLIcon,
  SuggestIcon,
  SvgIcon,
  TextIcon,
  TimeSeriesIcon,
  TimeZoneConvertIcon,
  TimeZoneIcon,
  UserAgentApiIcon,
  VATIcon,
  WhoIsHistoricalLookupIcon,
  WhoIsLookupIcon,
  XmlIcon,
  YamlIcon,
} from '../../library/icons/Icons';
import { ProductCategory, ProductsCategoriesTestPages } from '../../library/types/types';
import { PAGE, TOOL_PAGE } from './constants';
import { pageUrl, toolPageUrl } from './utils';

export const apiList: Array<ProductCategory> = [
  {
    heading: 'General',
    subheadings: [
      {
        name: 'APIFreaks',
        href: pageUrl(PAGE.APIFreaks),
        isShowInDocs: true,
        description:
          'Comprehensive API platform offering a wide range of data services for developers, including geolocation, WHOIS, DNS, SSL, and more. Ideal for integrating reliable data into your applications.',
      },
      {
        name: 'Organization and Teams',
        href: pageUrl(PAGE.OrganizationAndTeams),
        isShowInDocs: true,
        description:
          'Manage users, organizations, and teams efficiently. Enables seamless collaboration, access control, and resource management for enterprise and developer teams.',
      },
      {
        name: 'Credits Usage API',
        href: pageUrl(PAGE.CreditsUsageApi),
        isShowInDocs: true,
        description:
          'Track and monitor your API usage and credit consumption in real time. Provides transparency and control over your API spending and resource allocation.',
      },
    ],
  },
  {
    heading: 'Geolocation APIs',
    subheadings: [
      {
        name: 'IP Geolocation Lookup API',
        href: pageUrl(PAGE.IPLocator),
        description:
          'Instantly retrieve real-time, accurate geolocation and security details for any IPv4 or IPv6 address. Includes city, country, ISP, timezone, and threat intelligence for robust IP analysis.',
        logo: IpLocationLookupIcon,
        isShowInDocs: true,
      },
      {
        name: 'Bulk IP Geolocation Lookup',
        href: pageUrl(PAGE.BulkIPLookup),
        logo: BulkIpLocationLookupIcon,
        description:
          'Perform high-volume IP geolocation lookups in a single request. Get precise location, ISP, and security data for multiple IP addresses, ideal for analytics and security applications.',
        isShowInDocs: true,
      },
    ],
  },
  {
    heading: 'WHOIS APIs',
    subheadings: [
      {
        name: 'Domain WHOIS Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.WHOISDomainLookup),
        logo: WhoIsLookupIcon,
        description:
          'Retrieve up-to-date WHOIS records for any domain, including registrant, administrative, and technical contact details. Essential for domain research, ownership verification, and cybersecurity.',
      },
      {
        name: 'IP WHOIS Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.WHOISIPLookup),
        logo: IPIcon,
        description:
          'Access detailed WHOIS data for any IP address. Includes network allocation, organization, and contact information for network troubleshooting and investigation.',
      },
      {
        name: 'ASN Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.ASNLookup),
        logo: ASNIcon,
        description:
          'Get comprehensive Autonomous System Number (ASN) information: block ranges, routing policies, contacts, and both structured and raw WHOIS data for any ASN. Perfect for network analysis and security.',
      },
      {
        name: 'Domain WHOIS Historical Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.DomainWHOISHistoryLookup),
        logo: WhoIsHistoricalLookupIcon,
        description:
          'Access the entire history of WHOIS records for any domain. Track ownership changes, registration updates, and historical contact details for compliance and research.',
      },
      {
        name: 'Domain WHOIS Reverse Lookup',
        logo: ReverseIcon,
        description:
          'Find all domains registered by a specific company or owner, or search for domains containing particular keywords. Useful for brand protection, legal investigations, and market research.',
        isShowInDocs: true,
        href: pageUrl(PAGE.ReverseWHOIS),
      },
      {
        name: 'Bulk Domain WHOIS Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.BulkWHOISLookup),
        logo: BulkWhoIsLookupIcon,
        description:
          'Retrieve WHOIS data for multiple domains in one request. Streamline large-scale domain research, monitoring, and portfolio management.',
      },
    ],
  },
  {
    heading: 'DNS APIs',
    subheadings: [
      {
        name: 'DNS Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.DNSLookup),
        logo: DNSIcon,
        description:
          'Query A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME DNS records for any hostname. Essential for troubleshooting, monitoring, and domain management.',
      },
      {
        name: 'Historical DNS Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.DNSHistoryLookup),
        logo: HistoricIcon,
        description:
          'Access historical DNS records (A, AAAA, MX, NS, SOA, SPF, TXT, CNAME) for any hostname. Track changes in DNS configuration over time for security and compliance.',
      },
      {
        name: 'Reverse DNS Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.ReverseDNSLookup),
        logo: ReverseDNSLookupIcon,
        description:
          'Discover all hostnames associated with specific DNS records or IP/CIDR ranges. Identify domains using particular name servers or mailboxes, such as Cloudflare or Google.',
      },
      {
        name: 'Bulk DNS Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.BulkDNSLookup),
        logo: BulkDNSLookupIcon,
        description:
          'Retrieve DNS records for multiple hostnames in a single request. Perfect for large-scale monitoring, analytics, and security audits.',
      },
    ],
  },
  {
    heading: 'SSL APIs',
    subheadings: [
      {
        name: 'SSL Certificate Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.SSLCertificateLookup),
        logo: SSLIcon,
        description:
          'Retrieve detailed SSL certificate information for any domain, including issuer, validity, and embedded metadata. Identify hidden certificate details for enhanced security and compliance.',
      },
      {
        name: 'SSL Certificate Chain Lookup',
        isShowInDocs: false,
        logo: SSLCertificateChainLookupIcon,
        description:
          'Retrieve all certificates from the domain to the root Certificate Authority (CA) of a domain.',
        href: pageUrl(PAGE.SSLCertificateLookup),
      },
    ],
  },
  {
    heading: 'Domain Availability APIs',
    subheadings: [
      {
        name: 'Domain Availability API',
        isShowInDocs: true,
        href: pageUrl(PAGE.DomainSearch),
        logo: AvailableIcon,
        description:
          'Instantly check if a domain is available for registration. Supports a wide range of TLDs and provides fast, accurate results for domain search and acquisition.',
      },
      {
        logo: SuggestIcon,
        name: 'Check Domain Availability with Suggestions',
        description:
          'Check domain availability and receive suggestions for related domains.',
        href: pageUrl(PAGE.DomainSearch),
        isShowInDocs: false,
      },
      {
        name: 'Bulk Domain Availability API',
        isShowInDocs: true,
        logo: BulkDocumentsIcon,
        description:
          'Check the registration availability of multiple domains at once. Ideal for domain portfolio management, brand protection, and business expansion.',
        href: pageUrl(PAGE.BulkDomainChecker),
      },
    ],
  },
  {
    heading: 'Screenshot APIs',
    subheadings: [
      {
        name: 'Screenshot API',
        href: pageUrl(PAGE.WebsiteScreenshot),
        isShowInDocs: true,
        logo: ScreenshotIcon,
        description:
          'Capture full-page website screenshots and videos, simulate devices, inject custom code, block cookie banners, and record scrollable content as GIF, MP4, or WebM. Highly customizable for testing and monitoring.',
      },
      {
        name: 'Bulk Screenshot API',
        href: pageUrl(PAGE.BulkScreenshotApi),
        isShowInDocs: true,
        logo: BulkDocumentsIcon,
        description:
          'Capture screenshots of multiple websites in a single request. Streamline visual monitoring, QA, and content archiving for large-scale web projects.',
      },
    ],
  },
  {
    heading: 'Currency APIs',
    subheadings: [
      {
        name: 'Currencies Exchange Rates API',
        isShowInDocs: true,
        href: pageUrl(PAGE.ExchangeRate),
        logo: CurrencyExchangeIcon,
        description:
          'Retrieve up-to-date currency exchange rates with USD as the default base. Supports hundreds of currencies for financial applications, e-commerce, and analytics.',
      },
      {
        name: 'Currencies Historical Exchange Rates',
        isShowInDocs: false,
        href: pageUrl(PAGE.ExchangeRate),
        logo: BarGraphIcon,
        description:
          'Retrieve historical currency exchange rates for a specific date with USD as the default base currency.',
      },
      {
        name: 'Currency Converter API',
        isShowInDocs: true,
        href: pageUrl(PAGE.CurrencyConverter),
        logo: ConvertIcon,
        description:
          'Convert any amount between currencies using the latest exchange rates. Simple, reliable, and supports global currencies for business and travel needs.',
      },
      {
        name: 'Currency Converter on Historical Price',
        isShowInDocs: false,
        href: pageUrl(PAGE.CurrencyConverter),
        logo: HistoricalCurrencyConverterIcon,
        description:
          'Convert any amount from one currency to another using the historical exchange rate for a specific date.',
      },
      {
        name: 'Currency Time Series API',
        isShowInDocs: true,
        href: pageUrl(PAGE.CurrencyTimeSeries),
        logo: TimeSeriesIcon,
        description:
          'Access historical exchange rates for specific currency pairs over any date range. Ideal for financial analysis, trend tracking, and reporting.',
      },
      {
        name: 'Currency Fluctuation API',
        isShowInDocs: true,
        href: pageUrl(PAGE.CurrencyFluctuation),
        logo: FluctuationIcon,
        description:
          'Analyze currency fluctuations over custom date ranges and base currencies. Detect market trends, volatility, and perform risk assessments.',
      },
      {
        name: 'Geolocalized Currency Converter',
        isShowInDocs: true,
        href: pageUrl(PAGE.GeoCurrencyConverter),
        logo: LocalCurrencyIcon,
        description:
          'Convert any amount to the local currency based on IP geolocation. Automatically detects client location for seamless international transactions.',
      },
    ],
  },
  {
    heading: 'Commodity APIs',
    subheadings: [
      {
        name: 'Live Commodity Prices',
        logo: CommodityIcon,
        isShowInDocs: true,
        href: pageUrl(PAGE.LiveCommodityPrices),
        description:
          'Get real-time prices for agricultural, energy, and metal commodities. Supports custom currencies, making it perfect for trading platforms and financial dashboards.',
      },
      {
        name: 'Commodity Historical Prices',
        isShowInDocs: true,
        href: pageUrl(PAGE.HistoricalCommodityRates),
        logo: BarGraphIcon,
        description:
          'Track historical prices for commodities like gold, oil, and cocoa from 1990 to today. Essential for market analysis, investment research, and reporting.',
      },
      {
        name: 'Commodity Fluctuation API',
        isShowInDocs: true,
        href: pageUrl(PAGE.CommodityFluctuationData),
        logo: FluctuationIcon,
        description:
          'Calculate percentage price changes in commodities over any custom date range. Use for market summaries, price shift detection, and risk management.',
      },
      {
        name: 'Commodity Time Series API',
        isShowInDocs: true,
        href: pageUrl(PAGE.TimeSeriesCommodityData),
        logo: TimeSeriesIcon,
        description:
          'Retrieve historical price data for any commodity symbol over a specified period. Supports in-depth market analysis and trend forecasting.',
      },
    ],
  },
  {
    heading: 'Timezone APIs',
    subheadings: [
      {
        name: 'Timezone Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.TimeZoneLookup),
        logo: TimeZoneIcon,
        description:
          'Retrieve current time, date, and timezone information by specifying a timezone name, address, coordinates, or IP address. Automatically detects client location if no parameter is provided.',
      },
      {
        name: 'Timezone Converter',
        isShowInDocs: true,
        href: pageUrl(PAGE.TimeZoneConverter),
        logo: TimeZoneConvertIcon,
        description:
          'Convert timestamps between timezones using names, coordinates, or addresses. Simplifies scheduling and global time management.',
      },
    ],
  },
  {
    heading: 'Zipcode APIs',
    subheadings: [
      {
        name: 'Zipcode Lookup API',
        isShowInDocs: true,
        href: pageUrl(PAGE.ZipcodeLookup),
        logo: () => DomainIcon({}),
        description:
          'Get location data (city, state/province/region, country, latitude, longitude) by searching global ZIP codes and postal codes. Useful for delivery route setups, demographic insights, marketing campaigns, address validation, customer identification, fraud prevention, and more.',
      },
    ],
  },
  {
    heading: 'User Agent APIs',
    subheadings: [
      {
        name: 'User Agent Parser',
        isShowInDocs: true,
        href: pageUrl(PAGE.UserAgentParser),
        logo: () => UserAgentApiIcon({ width: '2rem', height: '2rem' }),
        description:
          'Parse user agent strings to obtain accurate browser, device, and operating system details. Essential for analytics, personalization, and security.',
      },
      {
        name: 'Bulk User Agent Parser',
        isShowInDocs: true,
        href: pageUrl(PAGE.BulkUserAgentParser),
        logo: () => BulkDocumentsIcon({ width: '2rem', height: '2rem' }),
        description:
          'Retrieve browser, device, and OS details for multiple user agent strings in a single request. Ideal for large-scale analytics and data processing.',
      },
    ],
  },
  {
    heading: 'Other APIs',
    subheadings: [
      {
        name: 'Astronomy API',
        isShowInDocs: true,
        href: pageUrl(PAGE.AstronomyData),
        logo: AstronomyApiIcon,
        description:
          'Retrieve sunrise and sunset times, moon position, and other astronomical data by location, coordinates, or IP address. Great for weather apps, event planning, and scientific research.',
      },
    ],
  },
];

export const productsCategories = apiList.map(cat => {
  return {
    ...cat,
    subheadings: cat.subheadings.filter(api => api.isShowInDocs),
  };
});

export const APIDocsUrls = apiList
  .filter(api => !['General'].includes(api.heading))
  .map(api => ({
    title: api.heading,
    link: api.subheadings[0].href,
  }));

export const HomePageAPICatalogue = apiList.filter(
  api => !['General'].includes(api.heading)
);

export const toolsUrls = [
  {
    title: 'Formatters & Beautifiers',
    link: `${pageUrl(PAGE.Tools)}#formatters-beautifiers`,
  },
  {
    title: 'Converters & Optimizers',
    link: `${pageUrl(PAGE.Tools)}#converters-optimizers`,
  },
  {
    title: 'Viewers & Validators',
    link: `${pageUrl(PAGE.Tools)}#viewers-validators`,
  },
];

export const toolsLinks = [
  {
    category: 'Formatters & Beautifiers',
    id: 'web-tools',
    items: [
      {
        title: 'Online HTML Formatter, HTML Beautifier and HTML Viewer',
        link: toolPageUrl(TOOL_PAGE.HTMLFormatter),
        logo: HtmlIcon,
        description:
          'Easily format HTML with customizable indentation levels, minify HTML, and preview your content by uploading files.',
      },
      {
        title: 'Free CSS Minifier & CSS Formatter Online',
        link: toolPageUrl(TOOL_PAGE.CSSMinifier),
        logo: CssIcon,
        description:
          'Optimize your CSS for faster load times and cleaner code with our free CSS Minifier and CSS Formatter.',
      },
      {
        title: 'Minify, Compress, and Beautify JavaScript Code Online',
        link: toolPageUrl(TOOL_PAGE.JSMinifier),
        logo: JavascriptIcon,
        description:
          'Easily compress, minify, and format JavaScript code to enhance readability and performance.',
      },
      {
        title: 'Free Online SQL Beautifier & Minifier',
        link: toolPageUrl(TOOL_PAGE.SQLFormatter),
        logo: SqlIcon,
        description:
          'Format and structure SQL queries for better readability and maintenance.',
      },
      {
        title: 'View, Format, Minify, and Validate JSON Online',
        link: toolPageUrl(TOOL_PAGE.JSONFormatter),
        logo: JsonIcon,
        description:
          'Beautify, minify, validate, and view JSON data with an easy-to-navigate structure.',
      },
      {
        title: 'Free XML Beautifier, XML Minifier, and XML Validator Online',
        link: toolPageUrl(TOOL_PAGE.XMLFormatter),
        logo: JsonIcon,
        description:
          'Format, minify, and validate XML data for improved readability and efficiency.',
      },
    ],
  },
  {
    category: 'Converters & Optimizers',
    id: 'data-file-processing',
    items: [
      {
        title: 'Free & Fast XML2JSON Online Tool',
        link: toolPageUrl(TOOL_PAGE.XMLtoJSONConverter),
        logo: () => XmlIcon({ width: '30', height: '30' }),
        description:
          'Convert XML to JSON quickly and efficiently with customizable formatting options.',
      },
      {
        title: 'Remove Whitespace, Change Text Case & Replace Text Online',
        link: toolPageUrl(TOOL_PAGE.CaseConverter),
        logo: TextIcon,
        description:
          'Transform text by changing case, removing whitespace, and replacing characters efficiently.',
      },
      {
        title: 'Online Diff Checker',
        link: toolPageUrl(TOOL_PAGE.DiffChecker),
        logo: DiffCheckIcon,
        description:
          'Compare text, code, and files instantly with our online diff checker tool — ideal for spotting differences and changes with ease and accuracy.',
      },
    ],
  },
  {
    category: 'Viewers & Validators',
    id: 'text-content-utilities',
    items: [
      {
        title: 'Online HTML Formatter, HTML Beautifier and HTML Viewer',
        link: toolPageUrl(TOOL_PAGE.HTMLFormatter),
        logo: HtmlIcon,
        description:
          'Easily format HTML with customizable indentation levels, minify HTML, and preview your content by uploading files.',
      },
      {
        title: 'View, Format, Minify, and Validate JSON Online',
        link: toolPageUrl(TOOL_PAGE.JSONFormatter),
        logo: JsonIcon,
        description:
          'Beautify, minify, validate, and view JSON data with an easy-to-navigate structure.',
      },
      {
        title:
          'Free SVG File Viewer & Reader – View, Edit & Optimize SVGs Online',
        link: toolPageUrl(TOOL_PAGE.SVGViewer),
        logo: SvgIcon,
        description:
          'Preview and analyze SVG files with an intuitive online viewer.',
      },
      {
        title: 'Online YAML Validator and YAML Formatter',
        link: toolPageUrl(TOOL_PAGE.YAMLValidator),
        logo: YamlIcon({ width: '40px', height: '40px' }),
        description:
          'Our online YAML Validator checks for syntax errors and ensuring correct formatting.',
      },
      {
        title: 'Email Header Analyzer',
        link: toolPageUrl(TOOL_PAGE.EmailHeaderAnalyzer),
        description:
          'Analyze full email headers to trace origin, verify SPF/DKIM/DMARC, and detect spam, spoofing, or delivery issues.',
      },
      {
        title: 'Free Online SMTP Checker Tool',
        link: toolPageUrl(TOOL_PAGE.SMTPChecker),
        description:
          'Quickly test SMTP connections, ports, and authentication. Diagnose email delivery issues and simulate sending—all in one easy tool.',
      },
    ],
  },
];

export const productsCategoriesTestPages: Array<ProductsCategoriesTestPages> = [
  {
    heading: 'General',
    subheadings: [
      {
        name: 'Credits Usage API',
        href: pageUrl(PAGE.CreditsUsageApiTest),
        method: 'GET',
        description:
          'Monitor and track your API usage and credit consumption in real-time for better resource management and budget control.',
      },
    ],
  },
  {
    heading: 'Geolocation APIs',
    subheadings: [
      {
        name: 'IP Geolocation Lookup API',
        href: pageUrl(PAGE.IPLocatorTest),
        method: 'GET',
        description:
          'Retrieve accurate geolocation data for any IP address including location, ISP, timezone, and security information.',
      },
      {
        name: 'Bulk IP Geolocation Lookup',
        href: pageUrl(PAGE.BulkIPLookupTest),
        method: 'POST',
        description:
          'Process multiple IP addresses simultaneously to get comprehensive geolocation data for large-scale analytics and security applications.',
      },
    ],
  },
  {
    heading: 'WHOIS APIs',
    subheadings: [
      {
        name: 'Domain WHOIS Lookup',
        href: pageUrl(PAGE.WHOISDomainLookupTest),
        method: 'GET',
        description:
          'Access detailed domain WHOIS information including registrant details, registration dates, and administrative contacts.',
      },
      {
        name: 'IP WHOIS Lookup',
        href: pageUrl(PAGE.WHOISIPLookupTest),
        method: 'GET',
        description:
          'Retrieve WHOIS data for IP addresses including network allocation, organization details, and contact information.',
      },
      {
        name: 'ASN Lookup',
        href: pageUrl(PAGE.ASNLookupTest),
        method: 'GET',
        description:
          'Get comprehensive Autonomous System Number information including network ranges, organization details, and routing policies.',
      },
      {
        name: 'Domain WHOIS Historical Lookup',
        href: pageUrl(PAGE.DomainWHOISHistoryLookupTest),
        method: 'GET',
        description:
          'Access historical WHOIS records to track domain ownership changes and registration history over time.',
      },
      {
        name: 'Domain WHOIS Reverse Lookup',
        href: pageUrl(PAGE.ReverseWHOISTest),
        method: 'GET',
        description:
          'Find domains registered by specific companies or individuals using reverse WHOIS search capabilities.',
      },
      {
        name: 'Bulk Domain WHOIS Lookup',
        href: pageUrl(PAGE.BulkWHOISLookupTest),
        method: 'POST',
        description:
          'Retrieve WHOIS information for multiple domains in a single request for efficient domain portfolio analysis.',
      },
    ],
  },
  {
    heading: 'DNS APIs',
    subheadings: [
      {
        name: 'DNS Lookup',
        href: pageUrl(PAGE.DNSLookupTest),
        method: 'GET',
        description:
          'Query DNS records including A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME records for any hostname.',
      },
      {
        name: 'Historical DNS Lookup',
        href: pageUrl(PAGE.DNSHistoryLookupTest),
        method: 'GET',
        description:
          'Access historical DNS records to track changes in domain configuration and DNS settings over time.',
      },
      {
        name: 'Reverse DNS Lookup',
        href: pageUrl(PAGE.ReverseDNSLookupTest),
        method: 'GET',
        description:
          'Discover hostnames associated with specific IP addresses or find domains using particular DNS configurations.',
      },
      {
        name: 'Bulk DNS Lookup',
        href: pageUrl(PAGE.BulkDNSLookupTest),
        method: 'POST',
        description:
          'Process multiple DNS queries simultaneously for efficient large-scale DNS monitoring and analysis.',
      },
    ],
  },
  {
    heading: 'SSL APIs',
    subheadings: [
      {
        name: 'SSL Certificate Lookup',
        href: pageUrl(PAGE.SSLCertificateLookupTest),
        method: 'GET',
        description:
          'Retrieve detailed SSL certificate information including issuer, validity period, and security details for any domain.',
      },
      {
        name: 'SSL Certificate Chain Lookup',
        href: pageUrl(PAGE.SSLCertificateChainLookupTest),
        method: 'GET',
        description:
          'Get the complete SSL certificate chain from domain certificate to root Certificate Authority for comprehensive security analysis.',
      },
    ],
  },
  {
    heading: 'Domain Availability APIs',
    subheadings: [
      {
        name: 'Domain Availability',
        href: pageUrl(PAGE.DomainSearchTest),
        method: 'GET',
        description:
          'Check if a domain name is available for registration across multiple top-level domains (TLDs).',
      },
      {
        name: 'Domain Availability with Suggestions',
        href: pageUrl(PAGE.DomainSearchSuggestTest),
        method: 'GET',
        description:
          'Check domain availability and receive intelligent suggestions for alternative domain names when your preferred choice is taken.',
      },
      {
        name: 'Bulk Domain Availability',
        href: pageUrl(PAGE.BulkDomainCheckerTest),
        method: 'POST',
        description:
          'Check availability status for multiple domain names simultaneously for efficient domain portfolio management.',
      },
    ],
  },
  {
    heading: 'Screenshot APIs',
    subheadings: [
      {
        name: 'Website Screenshot API',
        href: pageUrl(PAGE.WebsiteScreenshotTest),
        method: 'GET',
        description:
          'Capture high-quality screenshots of websites with customizable options for device simulation, full-page capture, and format selection.',
      },
      {
        name: 'Bulk Screenshot API',
        href: pageUrl(PAGE.BulkScreenshotApiTest),
        method: 'POST',
        description:
          'Generate screenshots for multiple websites in a single request for efficient visual monitoring and documentation.',
      },
    ],
  },
  {
    heading: 'Currency APIs',
    subheadings: [
      {
        name: 'Latest Exchange Rates',
        href: pageUrl(PAGE.ExchangeRateTest),
        method: 'GET',
        description:
          'Get current exchange rates for global currencies with USD as the base for financial applications and e-commerce.',
      },
      {
        name: 'Historical Exchange Rates',
        href: pageUrl(PAGE.HistoricalExchangeRateTest),
        method: 'GET',
        description:
          'Access historical currency exchange rates for specific dates to analyze market trends and perform financial analysis.',
      },
      {
        name: 'Currency Converter Latest',
        href: pageUrl(PAGE.CurrencyConverterTest),
        method: 'GET',
        description:
          'Convert amounts between different currencies using the latest exchange rates for real-time financial calculations.',
      },
      {
        name: 'Currency Converter Historical',
        href: pageUrl(PAGE.HistoricalCurrencyConverterTest),
        method: 'GET',
        description:
          'Convert currency amounts using historical exchange rates for specific dates to analyze past transactions and trends.',
      },
      {
        name: 'Currency Time Series API',
        href: pageUrl(PAGE.CurrencyTimeSeriesTest),
        method: 'GET',
        description:
          'Retrieve time series data for currency pairs over custom date ranges for comprehensive market analysis and reporting.',
      },
      {
        name: 'Currency Fluctuation API',
        href: pageUrl(PAGE.CurrencyFluctuationTest),
        method: 'GET',
        description:
          'Analyze currency fluctuations and percentage changes over custom periods for risk assessment and market monitoring.',
      },
      {
        name: 'Geolocalized Currency Converter',
        href: pageUrl(PAGE.GeoCurrencyConverterTest),
        method: 'GET',
        description:
          'Convert amounts to local currency based on IP geolocation for personalized international shopping experiences.',
      },
      {
        name: 'Currency Supported',
        href: pageUrl(PAGE.CurrencySupportedTest),
        method: 'GET',
        description:
          'Get a comprehensive list of all supported currencies and their details for integration planning and validation.',
      },
      {
        name: 'Currency Symbols',
        href: pageUrl(PAGE.CurrencySymbolsTest),
        method: 'GET',
        description:
          'Retrieve currency symbols and formatting information for proper display and localization in financial applications.',
      },
      {
        name: 'Currency Historical Data Limits',
        href: pageUrl(PAGE.CurrencyHistoricalDataLimitTest),
        method: 'GET',
        description:
          'Check the available historical data range and limitations for currency exchange rate queries and planning.',
      },
    ],
  },
  {
    heading: 'Commodity APIs',
    subheadings: [
      {
        name: 'Live Commodity Prices',
        href: pageUrl(PAGE.LiveCommodityPricesTest),
        method: 'GET',
        description:
          'Get real-time prices for agricultural, energy, and metal commodities in various currencies for trading and analysis.',
      },
      {
        name: 'Historical Commodity Prices API',
        href: pageUrl(PAGE.HistoricalCommodityRatesTest),
        method: 'GET',
        description:
          'Access historical commodity price data from 1990 to present for market analysis and investment research.',
      },
      {
        name: 'Commodity Fluctuation API',
        href: pageUrl(PAGE.CommodityFluctuationDataTest),
        method: 'GET',
        description:
          'Calculate percentage price changes in commodities over custom date ranges for volatility analysis and risk management.',
      },
      {
        name: 'Commodity Time Series API',
        href: pageUrl(PAGE.TimeSeriesCommodityDataTest),
        method: 'GET',
        description:
          'Retrieve time series commodity price data over specified periods for trend analysis and forecasting.',
      },
      {
        name: 'Commodity Symbols',
        href: pageUrl(PAGE.CommoditySymbolsTest),
        method: 'GET',
        description:
          'Get a complete list of available commodity symbols and their details for API integration and reference.',
      },
    ],
  },
  {
    heading: 'Timezone APIs',
    subheadings: [
      {
        name: 'Timezone Lookup',
        href: pageUrl(PAGE.TimeZoneLookupTest),
        method: 'GET',
        description:
          'Get current time and timezone information for any location using coordinates, address, timezone name, or IP address.',
      },
      {
        name: 'Timezone Converter',
        href: pageUrl(PAGE.TimeZoneConverterTest),
        method: 'GET',
        description:
          'Convert timestamps between different timezones for global scheduling and time coordination applications.',
      },
    ],
  },
  {
    heading: 'GeoDB APIs',
    subheadings: [
      {
        name: 'GeoDB Countries API',
        href: pageUrl(PAGE.CountriesTest),
        method: 'GET',
        description:
          'Access comprehensive country information including names, codes, regions, and geographical data for location-based services.',
      },
      {
        name: 'GeoDB Country Details API',
        href: pageUrl(PAGE.CountryDetailsTest),
        method: 'GET',
        description:
          'Get detailed information about specific countries including administrative divisions, currencies, and regional data.',
      },
      {
        name: 'GeoDB Regions API',
        href: pageUrl(PAGE.RegionsTest),
        method: 'GET',
        description:
          'Retrieve information about world regions and their constituent countries for geographical analysis and categorization.',
      },
      {
        name: 'GeoDB Subregions API',
        href: pageUrl(PAGE.SubregionsTest),
        method: 'GET',
        description:
          'Access subregion data and their relationships to countries and larger regions for detailed geographical mapping.',
      },
      {
        name: 'GeoDB Admin Levels API',
        href: pageUrl(PAGE.AdminLevelsTest),
        method: 'GET',
        description:
          'Get information about administrative levels (states, provinces, etc.) for hierarchical location data organization.',
      },
      {
        name: 'GeoDB Admin Units API',
        href: pageUrl(PAGE.AdminUnitsTest),
        method: 'GET',
        description:
          'Retrieve administrative units and their hierarchical relationships for comprehensive location-based applications.',
      },
      {
        name: 'GeoDB Admin Units Details API',
        href: pageUrl(PAGE.AdminUnitsDetailsTest),
        method: 'GET',
        description:
          'Get detailed information about specific administrative units including boundaries, populations, and administrative data.',
      },
      {
        name: 'GeoDB Cities API',
        href: pageUrl(PAGE.CitiesTest),
        method: 'GET',
        description:
          'Access comprehensive city data including coordinates, population, administrative divisions, and geographical information.',
      },
    ],
  },
  {
    heading: 'Zip Codes APIs',
    subheadings: [
      {
        name: 'Zip Code Lookup API',
        href: pageUrl(PAGE.ZipCodeLookupTest),
        method: 'GET',
        description:
          'Get detailed information about zip codes including location, administrative divisions, and geographical coordinates.',
      },
      {
        name: 'ZIP Code Search City API',
        href: pageUrl(PAGE.SearchCityTest),
        method: 'GET',
        description:
          'Search for zip codes within specific cities and get comprehensive location data for address validation.',
      },
      {
        name: 'ZIP Code Search Region API',
        href: pageUrl(PAGE.SearchRegionTest),
        method: 'GET',
        description:
          'Find zip codes within specific regions or states for geographical analysis and regional targeting.',
      },
      {
        name: 'ZIP Code Search Radius API',
        href: pageUrl(PAGE.SearchRadiusTest),
        method: 'GET',
        description:
          'Discover zip codes within a specified radius of a location for proximity-based services and analysis.',
      },
      {
        name: 'ZIP Code Distance API',
        href: pageUrl(PAGE.DistanceTest),
        method: 'GET',
        description:
          'Calculate distances between zip codes for logistics, shipping cost estimation, and service area planning.',
      },
      {
        name: 'ZIP Code Distance Match API',
        href: pageUrl(PAGE.DistanceMatchTest),
        method: 'GET',
        description:
          'Find zip codes that match specific distance criteria for advanced location-based filtering and analysis.',
      },
    ],
  },
  {
    heading: 'User Agent APIs',
    subheadings: [
      {
        name: 'User Agent Parser',
        href: pageUrl(PAGE.UserAgentParserTest),
        method: 'GET',
        description:
          'Parse user agent strings to extract browser, device, and operating system information for analytics and personalization.',
      },
      {
        name: 'Bulk User Agent Parser',
        href: pageUrl(PAGE.BulkUserAgentParserTest),
        method: 'POST',
        description:
          'Process multiple user agent strings simultaneously for large-scale analytics and batch processing applications.',
      },
    ],
  },
  {
    heading: 'Other APIs',
    subheadings: [
      {
        name: 'Astronomy API',
        href: pageUrl(PAGE.AstronomyDataTest),
        method: 'GET',
        description:
          'Get astronomical data including sunrise, sunset, moon phases, and celestial information for any location and date.',
      },
    ],
  },
];

export const SwaggerCatelogue = [
  {
    heading: 'Swagger Documentation',
    subheadings: [
      {
        name: 'General APIs',
        description:
          'Easily monitor your API credit usage, manage API keys, and track subscription status with the APIFreaks Credit Usage API.',
        href: pageUrl(PAGE.SwaggerGeneral),
        isShowInDocs: false,
        logo: HomeIcon,
      },
      {
        name: 'Geolocation APIs',
        description:
          'Access real-time IP geolocation and security data with the Geolocation API. Instantly retrieve country, city, timezone, currency, ISP, and threat intelligence for IPv4, IPv6, or hostnames.',
        href: pageUrl(PAGE.SwaggerGeolocation),
        isShowInDocs: false,
        logo: IpLocationLookupIcon,
      },
      {
        name: 'Whois APIs',
        description:
          'Access live and historical WHOIS data for domains, IPs, and ASNs with the WHOIS API. ',
        href: pageUrl(PAGE.SwaggerWhois),
        isShowInDocs: false,
        logo: WhoIsLookupIcon,
      },
      {
        name: 'DNS APIs',
        description:
          'Access comprehensive DNS lookup services for real-time and historical DNS records. Query DNS records including A, AAAA, MX, TXT, and NS records for domains.',
        href: pageUrl(PAGE.SwaggerDNS),
        isShowInDocs: false,
        logo: DNSIcon,
      },
      {
        name: 'SSL APIs',
        description:
          'Retrieve SSL certificate details and validate certificate chains with the SSL API.Instantly access expiry dates, issuer info, encryption methods, and full certificate chains for any domain.',
        href: pageUrl(PAGE.SwaggerSSL),
        isShowInDocs: false,
        logo: SSLIcon,
      },
      {
        name: 'Domain Availability APIs',
        description:
          'Check domain name availability instantly across all TLDs and get smart domain suggestions for your business. ',
        href: pageUrl(PAGE.SwaggerDomainAvailability),
        isShowInDocs: false,
        logo: AvailableIcon,
      },
      {
        name: 'Screenshot APIs',
        description:
          'Capture high-quality website screenshots and videos with the Screenshot API. Supports full-page, device simulation, custom code injection, cookie banner blocking, and bulk screenshot capture. ',
        href: pageUrl(PAGE.SwaggerScreenshot),
        isShowInDocs: false,
        logo: ScreenshotIcon,
      },
      {
        name: 'Currency APIs',
        description:
          'Access real-time currency exchange rates and historical forex data for 900+ currencies including Cryptocurrencies. ',
        href: pageUrl(PAGE.SwaggerCurrency),
        isShowInDocs: false,
        logo: CurrencyExchangeIcon,
      },
      {
        name: 'Commodity APIs',
        description:
          'Access real-time and historical commodity prices for gold, silver, oil, agricultural products, and more. ',
        href: pageUrl(PAGE.SwaggerCommodity),
        isShowInDocs: false,
        logo: CommodityIcon,
      },
      {
        name: 'Timezone APIs',
        description:
          'Access global timezone data and convert times across regions with the Timezone API. Instantly retrieve current time, date, and timezone info by IP, coordinates, city, or airport code.',
        href: pageUrl(PAGE.SwaggerTimezone),
        isShowInDocs: false,
        logo: TimeZoneIcon,
      },
      {
        name: 'GeoDB APIs',
        description:
          'Access worldwide geographical data with the GeoDB API. Instantly retrieve countries, regions, subregions, administrative divisions, and cities using ISO codes.',
        href: pageUrl(PAGE.SwaggerGeoDB),
        isShowInDocs: false,
        logo: DomainIcon,
      },
      {
        name: 'Zip Code APIs',
        description:
          'Access global ZIP and postal code data with the ZIP Code API. Instantly lookup, search, and compare ZIP codes by city, region, radius, or distance.',
        href: pageUrl(PAGE.SwaggerZipCode),
        isShowInDocs: false,
        logo: KeyIcon,
      },
      {
        name: 'User Agent APIs',
        description:
          'Parse user agent strings to identify browser, device, and operating system details with the User Agent API',
        href: pageUrl(PAGE.SwaggerUserAgent),
        isShowInDocs: false,
        logo: UserAgentApiIcon,
      },
      {
        name: 'Email Validation APIs',
        description:
          'Validate email addresses instantly with our comprehensive Email Validation API. ',
        href: pageUrl(PAGE.SwaggerEmailValidation),
        isShowInDocs: false,
        logo: MailIcon,
      },
      {
        name: 'PDF APIs',
        description:
          'Easily process and manage PDF files with the PDF API. Merge, split, extract, rotate, encrypt, decrypt, restrict, and upload/download PDFs with advanced options.',
        href: pageUrl(PAGE.SwaggerPDF),
        isShowInDocs: false,
        logo: BulkDocumentsIcon,
      },
      {
        name: 'Scraping APIs',
        description:
          'Leverage powerful web scraping capabilities to automate data extraction from any website, including dynamic and JavaScript-heavy pages.',
        href: pageUrl(PAGE.SwaggerScraping),
        isShowInDocs: false,
        logo: ScraperApiIcon,
      },
      {
        name: 'VAT APIs',
        description:
          'Access real-time VAT rates and validation for countries and regions worldwide. Instantly retrieve VAT rates by country, state, or IP address with the Vat API.',
        href: pageUrl(PAGE.SwaggerVat),
        isShowInDocs: false,
        logo: VATIcon,
      },
      {
        name: 'Other APIs',
        description:
          'Additional tools including Astronomy API and other specialized data services. Get accurate astronomy data based on location name, coordinates, or IP address.',
        href: pageUrl(PAGE.SwaggerOther),
        isShowInDocs: false,
        logo: AstronomyApiIcon,
      },
    ],
  },
];
export const navigationLinksPublic: Array<{ href: string; label: string }> = [
  { href: pageUrl(PAGE.APIFreaks), label: 'Documentation' },
  { href: pageUrl(PAGE.APIPlansPricingOneOff), label: 'Pricing' },
  { href: pageUrl(PAGE.Resources), label: 'Resources' },
  { href: pageUrl(PAGE.Tools), label: 'Tools' },
  { href: pageUrl(PAGE.ContactUs), label: 'Contact us' },
];

export const navigationLinksPrivate: Array<{ href: string; label: string }> = [
  { href: pageUrl(PAGE.APIFreaks), label: 'Documentation' },
  { href: pageUrl(PAGE.Resources), label: 'Resources' },
  { href: pageUrl(PAGE.CreditsUsageApiTest), label: 'Try APIs' },
  { href: pageUrl(PAGE.Tools), label: 'Tools' },
  { href: pageUrl(PAGE.ContactUs), label: 'Contact us' },
];
