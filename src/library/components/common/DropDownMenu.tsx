'use client';

import { ChevronRightIcon } from '../../icons/Icons';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

type DropdownMenuProps = {
  title: string;
  items: Array<{ title: string; link: string }>;
  className?: string;
  page: string;
  linkPrefetch?: boolean;
};

function DropdownMenu({
  title,
  items,
  className,
  page,
  linkPrefetch = true,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdownOpen = () => setIsOpen(true);
  const toggleDropdownClose = () => setIsOpen(false);

  return (
    <div className='relative'>
      <div
        onMouseEnter={toggleDropdownOpen}
        onMouseLeave={toggleDropdownClose}
        className='cursor-pointer'
      >
        <div className='font-bold'>
          <Link
            href={page}
            className='flex items-center'
            prefetch={linkPrefetch}
          >
            <p>{title}</p>
          </Link>
        </div>
      </div>
      {isOpen && (
        <div
          onMouseEnter={toggleDropdownOpen}
          onMouseLeave={toggleDropdownClose}
          className='absolute w-48 h-20 z-50'
        >
          <div
            className={clsx(
              'mt-8 w-[45rem] bg-white dark:text-soft-white dark:bg-primary-dark shadow-xl rounded-lg overflow-hidden border border-gray-100 transform transition-all duration-300 ease-in-out dark:border-none',
              className
            )}
          >
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800 mb-3 dark:text-soft-white'>
                {title}
              </h3>
              <div className='grid grid-cols-3 gap-3'>
                {items.map(item => (
                  <div key={item.title} className='group relative'>
                    <Link
                      href={item.link}
                      className='block p-3 rounded-lg transition-all duration-200 ease-in-out
                        bg-gray-100 dark:bg-black hover:bg-gray-50 dark:hover:bg-primary-dark-hover hover:shadow-md
                        transform hover:-translate-y-1'
                      prefetch={linkPrefetch}
                    >
                      <div className='flex flex-col space-y-2'>
                        <span className='text-sm font-medium text-primary-dark group-hover:text-primary-dark-hover dark:text-soft-white'>
                          {item.title}
                        </span>
                        <span className='text-xs text-gray-500 group-hover:text-gray-400'>
                          {`Explore ${title}`} →
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 border-t border-gray-100 dark:bg-dark-gray  dark:border-none'>
              <Link
                href={page}
                className='text-sm text-primary-dark hover:text-primary-dark-hover font-medium flex items-center dark:text-soft-white'
                prefetch={linkPrefetch}
              >
                View all {title} <ChevronRightIcon />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
