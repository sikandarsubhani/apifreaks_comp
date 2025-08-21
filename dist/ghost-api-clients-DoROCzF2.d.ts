type FormFeedback = {
    type: 'error' | 'success';
    message: Array<string>;
};
type ApiCategory = string;
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type APIDocumentationItem = {
    name: string;
    href: string;
    description: string;
    logo?: (props: {
        width?: string;
        height?: string;
    }) => React.ReactElement;
    isShowInDocs: boolean;
};
type ProductCategory = {
    heading: string;
    subheadings: Array<APIDocumentationItem>;
};
type ProductsCategoriesTestPages = {
    heading: string;
    subheadings: Array<{
        name: string;
        href: string;
        method?: string;
        description?: string;
    }>;
};
type IconSizeProps = {
    width?: string;
    height?: string;
};
type SearchBarPage = {
    path: string;
    title: string;
    content: string;
    tag?: string;
    category?: string;
};
declare enum THEME {
    Light = "light",
    Dark = "dark",
    System = "system"
}
type ThemeContextType = {
    theme: THEME;
    toggleTheme: () => void;
    setTheme: (t: THEME) => void;
};

declare function getContentApi(): any;
declare function getAdminApi(): any;
declare const contentApi: any;
declare const adminApi: any;

export { type APIDocumentationItem as A, type FormFeedback as F, type HeadingLevel as H, type IconSizeProps as I, type ProductCategory as P, type SearchBarPage as S, type ThemeContextType as T, getAdminApi as a, adminApi as b, contentApi as c, type ProductsCategoriesTestPages as d, type ApiCategory as e, THEME as f, getContentApi as g };
