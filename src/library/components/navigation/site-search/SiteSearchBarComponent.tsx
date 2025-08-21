import { unstable_cache } from 'next/cache';
import { SearchBarPage } from '../../../types/types';
import { PAGE, TAG } from '../../../utils/constants';
import { contentApi } from '../../../utils/ghost-api-clients';
import {
  productsCategories,
  productsCategoriesTestPages,
  SwaggerCatelogue
} from '../../../utils/navigation-links';
import { absoluteUrl, pageUrl } from '../../../utils/utils';
// import SiteSearchBar from './SearchBar';
import { ElementType } from 'react';
import { toolsLinks } from '../../../utils/tools-navigation';

//This component is cached by default and can be revalidated whenever the cache is invalidated, by the tags defined, in the environment where it is used.
const dynamicResourcesPages = unstable_cache(
  async function (
    tag: TAG,
    page: PAGE.Blog | PAGE.Tutorial | PAGE.Guide
  ): Promise<Array<SearchBarPage>> {
    const posts = await contentApi.posts.browse({
      order: 'published_at desc',
      filter: [`tag:${tag}`],
    });
    return posts.map((post: { slug: string; title?: string; excerpt?: string }) => ({
      path: absoluteUrl(pageUrl(page, { slug: post.slug })),
      title: post.title || '',
      content: post.excerpt || '',
    }));
  },
  ['ghost-resources'],
  {
    tags: ['ghost-resources'],
    revalidate: 20, //* 60 * 24,  //Revalidate After One Day,
  }
);
const apidocs = productsCategories
  .flatMap(category => category.subheadings)
  .filter(api => api.isShowInDocs)
  .map(api => ({
    path: api.href,
    title: api.name,
    content: api.description,
    tag: 'Product pages',
    category: 'Product pages',
  }));

const swaggerDocs = SwaggerCatelogue
  .flatMap(category => category.subheadings)
  .map(api => ({
    path: api.href,
    title: api.name,
    content: api.description,
    tag: 'Swagger Docs',
    category: 'Swagger Docs',
  }));

const testPages = productsCategoriesTestPages
  .flatMap(category => category.subheadings)
  .map(api => ({
    path: api.href,
    title: api.name,
    content: api.description,
    tag: 'Test Pages',
    category: 'Test Pages',
  }));

const otherPublicPages: Array<SearchBarPage> = [
  {
    path: absoluteUrl(pageUrl(PAGE.PublicPricingCalculator)),
    title: 'Pricing Calculator',
    content:
      'Get price estimations and plan suggestions based on your requirements using our pricing calculator.',
    tag: 'Pricing',
    category: 'Pricing',
  },
  {
    path: absoluteUrl(pageUrl(PAGE.APIPlansPricingOneOff)),
    title: 'One-Time API Plans',
    content:
      'Explore our one-time payment API pricing plans for single use access.',
    tag: 'Pricing',
    category: 'Pricing',
  },
  {
    path: absoluteUrl(pageUrl(PAGE.APIPlansPricingMonthly)),
    title: 'Monthly API Plans',
    content:
      'View our monthly subscription API pricing plans with flexible options.',
    tag: 'Pricing',
    category: 'Pricing',
  },
  {
    path: absoluteUrl(pageUrl(PAGE.APIPlansPricingYearly)),
    title: 'Yearly API Plans',
    content:
      'Check out our yearly API pricing plans offering the best value for long-term usage.',
    tag: 'Pricing',
    category: 'Pricing',
  },
  {
    path: absoluteUrl(pageUrl(PAGE.OrganizationPlans)),
    title: 'Org-Teams Plans',
    content:
      'Discover our organization-wide plans designed for teams and enterprises.',
    tag: 'Organization',
    category: 'Organization',
  },
  {
    path: absoluteUrl(pageUrl(PAGE.Terms)),
    title: 'Terms',
    content:
      'Review the Terms of Service for APIFreaks to understand the rules and guidelines for using our APIs and services.',
    tag: 'Legal',
    category: 'Legal',
  },
  {
    path: absoluteUrl(pageUrl(PAGE.PrivacyPolicy)),
    title: 'Privacy Policy',
    content:
      'Read our Privacy Policy to understand how APIFreaks collects, uses, and protects your personal information.',
    tag: 'Legal',
    category: 'Legal',
  },
  {
    path: absoluteUrl(pageUrl(PAGE.ContactUs)),
    title: 'Contact Us',
    content:
      'Contact APIFreaks, a centralized platform for all APIs developed by Jfreaks Software Solutions.',
    tag: 'Contact',
    category: 'Contact',
  },
  {
    path: absoluteUrl(pageUrl(PAGE.About)),
    title: 'About Us',
    content:
      'APIFreaks is a centralized platform for all APIs developed by Jfreaks Software Solutions.',
    tag: 'About',
    category: 'About',
  },
  {
    path: absoluteUrl(pageUrl(PAGE.Swagger)),
    title: 'Swagger Docs',
    content:
      'Interactive API documentation using Swagger UI. Explore and test all APIFreaks endpoints.',
    tag: 'Swagger Docs',
    category: 'Swagger Docs',
  },
];

const seen = new Set<string>();

const toolsPages: SearchBarPage[] = toolsLinks.flatMap(section =>
  section.items.flatMap(tool => {
    if (seen.has(tool.link)) return [];
    seen.add(tool.link);
    return {
      category: section.category,
      tag: 'Tools',
      path: tool.link,
      title: tool.title,
      content: tool.description, // Ensure content is always a string
    };
  })
);
type SiteSearchBarComponentProps = {
  SiteSearchBar?: ElementType;
};
export default async function SiteSearchBarComponent({ SiteSearchBar }: SiteSearchBarComponentProps) {
  let blogPages: SearchBarPage[] = [];
  let tutorialPages: SearchBarPage[] = [];
  let guidePages: SearchBarPage[] = [];

  try {
    console.log('Loading dynamic pages...');
    const blogs = await dynamicResourcesPages(TAG.Blog, PAGE.Blog);
    blogPages =
      blogs?.map(page => ({
        ...page,
        tag: TAG.Blog,
        category: TAG.Blog,
      })) ?? [];

    const tutorials = await dynamicResourcesPages(TAG.Tutorial, PAGE.Tutorial);
    tutorialPages =
      tutorials?.map(page => ({
        ...page,
        tag: TAG.Tutorial,
        category: TAG.Tutorial,
      })) ?? [];

    const guides = await dynamicResourcesPages(TAG.Guide, PAGE.Guide);
    guidePages =
      guides?.map(page => ({
        ...page,
        tag: TAG.Guide,
        category: TAG.Guide,
      })) ?? [];
  } catch (e) {
    console.error('Error loading dynamic pages:', e);
  }

  const searchablePages: Array<SearchBarPage> = [
    ...blogPages,
    ...tutorialPages,
    ...guidePages,
    ...otherPublicPages,
    ...(apidocs as Array<SearchBarPage>),
    ...(testPages as Array<SearchBarPage>),
    ...toolsPages,
    ...(swaggerDocs as Array<SearchBarPage>),
  ];

  return (
    <>
      {SiteSearchBar ? <SiteSearchBar searchablePages={searchablePages} /> : null}
    </>
  );
}
