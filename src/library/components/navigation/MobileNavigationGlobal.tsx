'use client';

import { HamburgerIcon, MobileNavigationCloseIcon } from '../../icons/Icons';
import { PAGE } from '../../utils/constants';
import { navigationLinksPublic } from '../../utils/navigation-links';
import { pageUrl } from '../../utils/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

function MobileNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className='ml-auto lg:hidden w-full'>
      <div className='flex-cb'>
        <div className='flex items-center gap-2'>
          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className='block text-primary-dark hover:text-gray-500 cursor-pointer'
          >
            {isMobileMenuOpen ? (
              <MobileNavigationCloseIcon />
            ) : (
              <HamburgerIcon />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav
          className={clsx(
            'absolute bg-primary top-[100%] left-0 z-20 px-2 w-full border-y border-primary-dark py-10 space-y-12 text-base'
          )}
        >
          <div>
            <ul className='bg-primary text-primay-dark space-y-6 text-center'>
              {navigationLinksPublic.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className={clsx('font-bold')}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-cc flex-col gap-5 font-bold'>
            <Link className='hover:text-black' href={pageUrl(PAGE.Login)}>
              Sign In
            </Link>
            <Link
              href={pageUrl(PAGE.Signup)}
              className='bg-primary-dark text-white rounded-full py-3 px-4 hover:bg-primary-dark-hover'
            >
              Sign Up
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}

export default MobileNavigation;
