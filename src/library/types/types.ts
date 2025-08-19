export type FormFeedback = {
  type: 'error' | 'success';
  message: Array<string>;
};

export type ApiCategory = string;

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

// ************************* Types for swr api response date *******************************

export type APIDocumentationItem = {
  name: string;
  href: string;
  description?: string;
  logo?: (props: { width?: string; height?: string }) => React.ReactElement;
  isShowInDocs: boolean;
};

export type ProductCategory = {
  heading: string;
  subheadings: Array<APIDocumentationItem>;
};

export type ProductsCategoriesTestPages = {
  heading: string;
  subheadings: Array<{
    name: string;
    href: string;
    method?: string;
    description?: string;
  }>;
};

export type IconSizeProps = {
  width?: string;
  height?: string;
};

export type SearchBarPage = {
  path: string;
  title: string;
  content: string;
  tag?: string;
  category?: string;
};

export enum THEME {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}
export type ThemeContextType = {
  theme: THEME;
  toggleTheme: () => void;
  setTheme: (t: THEME) => void;
};
