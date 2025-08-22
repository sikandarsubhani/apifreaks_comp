import { toolsCategories } from '../../utils/tools-navigation';
import { PAGE } from '../../utils/constants';
import {
  APIDocsUrls,
  navigationLinksPublic,
} from '../../utils/navigation-links';
import { pageUrl } from '../../utils/utils';
import Image from 'next/image';
import Link from 'next/link';

import type { ElementType } from 'react';

type SiteSearchBarComponentProps = {
  SiteSearchBar?: ElementType
};

type NavBarGlobalProps = {
  logosrc?: string;
  DropdownMenu?: ElementType;
  MobileNavigation?: ElementType;
  SiteSearchBarComponent?: ElementType<SiteSearchBarComponentProps>;
  SearchBar?: ElementType;
};

function NavBarGlobal({
  logosrc = 'https://res.cloudinary.com/dc5hkrpco/image/upload/v1755631017/logo-black-yellow-bg_ty4arv.jpg',
  DropdownMenu,
  MobileNavigation,
  SiteSearchBarComponent,
  SearchBar
}: NavBarGlobalProps) {
  return (
    <div className='relative bg-primary'>
      <header className='text-primary-dark-hover responsive-pad max-w-[1668px] w-full mx-auto'>
        <div className='flex-cb py-1 w-full'>
          <Link href='/' className='block mx-5'>
            <Image
              src={logosrc}
              width={90}
              height={90}
              alt='API Freaks logo'
              priority={true}
              className='hidden lg:block'
            />
            <Image
              src={logosrc}
              width={70}
              height={70}
              alt='API Freaks logo'
              priority={true}
              className='lg:hidden block'
            />
          </Link>
          <div className='flex-cc gap-1 lg:hidden'>
            {SiteSearchBarComponent && <SiteSearchBarComponent SiteSearchBar={SearchBar} />}
            {MobileNavigation && <MobileNavigation />}
          </div>

          <nav className='hidden lg:flex justify-between gap-0 max-w-[1050px] w-full py-3 px-5 mx-5 bg-white dark:text-soft-white dark:bg-primary-dark rounded-full select-none dark:bg-black dark:hover:text-[#f5f5f5]'>
            <ul className='flex-c space-x-8 xl:space-x-10 dark:text-soft-white dark:hover:text-gray-100'>
              {navigationLinksPublic.map((link, index) => {
                // If a client DropdownMenu was provided, use it for interactive
                // dropdowns. Otherwise fall back to a plain Link on the server.
                if (link.label === 'Documentation') {
                  return DropdownMenu ? (
                    <DropdownMenu
                      key={index}
                      items={APIDocsUrls}
                      title='Documentation'
                      page={pageUrl(PAGE.APIFreaks)}
                    />
                  ) : (
                    <li key={index}>
                      <Link href={pageUrl(PAGE.APIFreaks)} className='font-bold'>
                        <div className='flex-cc'>
                          <p>Documentation</p>
                        </div>
                      </Link>
                    </li>
                  );
                }
                if (link.label === 'Tools') {
                  return DropdownMenu ? (
                    <DropdownMenu
                      key={index}
                      items={toolsCategories}
                      title='Tools'
                      page={pageUrl(PAGE.Tools)}
                      className='-translate-x-[20rem]'
                      linkPrefetch={false}
                    />
                  ) : (
                    <li key={index}>
                      <Link href={pageUrl(PAGE.Tools)} className='font-bold'>
                        <div className='flex-cc'>
                          <p>Tools</p>
                        </div>
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className='font-bold'
                      prefetch={link.label !== 'Tools'}
                    >
                      <div className='flex-cc'>
                        <p>{link.label}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className='flex-cb gap-4 font-bold'>
              <div className='ml-2'>
                {' '}
                {SiteSearchBarComponent && <SiteSearchBarComponent SiteSearchBar={SearchBar} />}{' '}
              </div>
              <Link
                className='hover:text-black dark:text-soft-white dark:hover:text-soft-white'
                href={pageUrl(PAGE.Login)}
              >
                Sign In
              </Link>
              <Link
                href={pageUrl(PAGE.Signup)}
                className='bg-primary-dark text-white rounded-full py-3 px-4 hover:bg-primary-dark-hover dark:bg-primary dark:text-primary-dark dark:hover:bg-primary-hover'
              >
                Get Started For Free
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBarGlobal;
