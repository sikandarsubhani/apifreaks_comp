import {
  CssIcon,
  DiffCheckIcon,
  EmailIcon,
  EmailWithSearchIcon,
  HtmlIcon,
  JavascriptIcon,
  JsonIcon,
  SqlIcon,
  SvgIcon,
  TextIcon,
  XmlIcon,
  YamlIcon,
} from '../../library/icons/Icons';
import { PAGE, TOOL_PAGE } from './constants';
import { pageUrl, toolPageUrl } from './utils';

export type ToolItem = {
  title: string;
  link: string;
  icon: React.ElementType;   // store component type instead of JSX
  description: string;
}

export type ToolCategory = {
  category: string;
  id: string;
  items: ToolItem[];
}

export type ToolsCategoryLink = {
  title: string;
  link: string;
}

export const toolsLinks: ToolCategory[] = [
  {
    category: 'Formatters & Beautifiers',
    id: 'web-tools',
    items: [
      {
        title: 'Online HTML Formatter, HTML Beautifier and HTML Viewer',
        link: toolPageUrl(TOOL_PAGE.HTMLFormatter),
        icon: HtmlIcon,   // ✅ pass component, not JSX
        description:
          'Easily format HTML with customizable indentation levels, minify HTML, and preview your content by uploading files.',
      },
      {
        title: 'Free CSS Minifier & CSS Formatter Online',
        link: toolPageUrl(TOOL_PAGE.CSSMinifier),
        icon: CssIcon,
        description:
          'Optimize your CSS for faster load times and cleaner code with our free CSS Minifier and CSS Formatter.',
      },
      {
        title: 'Minify, Compress, and Beautify JavaScript Code Online',
        link: toolPageUrl(TOOL_PAGE.JSMinifier),
        icon: JavascriptIcon,
        description:
          'Easily compress, minify, and format JavaScript code to enhance readability and performance.',
      },
      {
        title: 'Free Online SQL Beautifier & Minifier',
        link: toolPageUrl(TOOL_PAGE.SQLFormatter),
        icon: SqlIcon,
        description:
          'Format and structure SQL queries for better readability and maintenance.',
      },
      {
        title: 'View, Format, Minify, and Validate JSON Online',
        link: toolPageUrl(TOOL_PAGE.JSONFormatter),
        icon: JsonIcon,
        description:
          'Beautify, minify, validate, and view JSON data with an easy-to-navigate structure.',
      },
      {
        title: 'Free XML Beautifier, XML Minifier, and XML Validator Online',
        link: toolPageUrl(TOOL_PAGE.XMLFormatter),
        icon: JsonIcon,
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
        icon: XmlIcon,
        description:
          'Convert XML to JSON quickly and efficiently with customizable formatting options.',
      },
      {
        title: 'Remove Whitespace, Change Text Case & Replace Text Online',
        link: toolPageUrl(TOOL_PAGE.CaseConverter),
        icon: TextIcon,
        description:
          'Transform text by changing case, removing whitespace, and replacing characters efficiently.',
      },
      {
        title: 'Online Diff Checker',
        link: toolPageUrl(TOOL_PAGE.DiffChecker),
        icon: DiffCheckIcon,
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
        title: 'Free SVG File Viewer & Reader',
        link: toolPageUrl(TOOL_PAGE.SVGViewer),
        icon: SvgIcon,
        description:
          'Preview and analyze SVG files with an intuitive online viewer.',
      },
      {
        title: 'Online YAML Validator and YAML Formatter',
        link: toolPageUrl(TOOL_PAGE.YAMLValidator),
        icon: YamlIcon,
        description:
          'Our online YAML Validator checks for syntax errors and ensuring correct formatting.',
      },
      {
        title: 'Free Online SMTP Checker Tool',
        link: toolPageUrl(TOOL_PAGE.SMTPChecker),
        icon: EmailIcon,
        description:
          'Quickly test SMTP connections, ports, and authentication. Diagnose email delivery issues and simulate sending—all in one easy tool.',
      },
      {
        title: 'Email Header Analyzer',
        link: toolPageUrl(TOOL_PAGE.EmailHeaderAnalyzer),
        icon: EmailWithSearchIcon,
        description:
          'Analyze full email headers to trace origin, verify SPF/DKIM/DMARC, and detect spam, spoofing, or delivery issues.',
      },
    ],
  },
];

export const toolsCategories: ToolsCategoryLink[] = toolsLinks.map(cat => ({
  title: cat.category,
  link: `${pageUrl(PAGE.Tools)}#${cat.id}`,
}));
