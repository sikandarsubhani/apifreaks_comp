'use client';

import { PAGE } from '../../../utils/constants';
import Fuse, { FuseResult, FuseResultMatch } from 'fuse.js';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { SearchBarPage } from '../../../types/types';
import { navigationLinksPublic } from '../../../utils/navigation-links';
import { pageUrl, stopClickPropagation } from '../../../utils/utils';
import DarkModeToggle from '../../dark-mode/DarkModeToggle';
import { CrossIcon, SearchIcon } from '../../../icons/Icons';

const options = {
  keys: [
    { name: 'title', weight: 0.6 },
    { name: 'content', weight: 0.4 },
    { name: 'category', weight: 0.3 },
    { name: 'tags', weight: 0.2 },
  ],
  includeScore: true,
  includeMatches: true,
  threshold: 0.3,
  shouldSort: true,
  minMatchCharLength: 1,
  distance: 150,
  useExtendedSearch: true,
  ignoreLocation: false,
};

export default function SiteSearchBar({
  searchablePages,
}: {
  searchablePages: SearchBarPage[];
}) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Array<FuseResult<SearchBarPage>>>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const fuse = useMemo(
    () => new Fuse(searchablePages, options),
    [searchablePages]
  );

  function handleSearch(value: string) {
    setQuery(value);
    if (!value) return setResults([]);
    const fuseResults = fuse.search(value);
    setResults(fuseResults);
  }

  function openModal() {
    setIsModalOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  function closeModal() {
    setIsModalOpen(false);
    setQuery('');
    setResults([]);
  }

  function isSwaggerRelated(path: string): boolean {
    return path.includes('/swagger') || path.includes('swagger');
  }

  function handleLinkClick(path: string) {
    closeModal();

    if (isSwaggerRelated(path)) {
      window.location.href = path;
      return false;
    }

    return true;
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className='flex flex-row gap-2'>
        <DarkModeToggle />{' '}
        <div
          className='relative cursor-pointer group transition-all duration-200'
          onClick={openModal}
        >
          {/* Mobile: Search icon only */}
          <div className='lg:hidden flex items-center justify-center'>
            <div className='text-primary-dark hover:text-gray-500 cursor-pointer transition-colors'>
              <SearchIcon width='1.9rem' height='1.9rem' />
            </div>
          </div>

          {/* Desktop/Tablet: Full search bar */}
          <div className='hidden lg:flex items-center relative'>
            <input
              type='text'
              placeholder='Search'
              readOnly
              className='dark:text-soft-white dark:bg-off-black pl-4 pr-16 py-2.5 w-20 sm:w-30 lg:w-35 border border-gray-400 rounded-full bg-white backdrop-blur-sm focus:outline-none placeholder-gray-500 hover:bg-white dark:hover:bg-off-black hover:shadow-lg transition-all duration-300 group-hover:border-primary/40'
            />
            <div className='absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2'>
              <kbd className='px-2 py-1 text-xs font-medium text-gray-500 dark:text-soft-white bg-gray-100 dark:bg-dark-gray border border-gray-200 rounded-md transition-colors dark:border-none dark:bg-dark-gray'>
                CTRL+K
              </kbd>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div
            className='fixed inset-0 z-50 bg-black/70 flex justify-center items-start pt-[10vh] px-4'
            onClick={closeModal}
          >
            <div
              className='w-full max-w-3xl max-h-[80vh] overflow-hidden bg-white dark:text-soft-white dark:bg-black rounded-2xl shadow-2xl relative p-6 border border-gray-200'
              onClick={stopClickPropagation}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className='absolute top-4 right-4 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full p-1 transition cursor-pointer dark:text-soft-white dark:hover:bg-off-black'
              >
                <CrossIcon width='1.5rem' height='1.5rem' />
              </button>

              {/* Search Input */}
              <div className='flex-cb w-full px-4 py-2 mt-10 border border-primary-dark rounded-md focus:outline-none focus:ring-1 focus:ring-primary-dark-hover dark:bg-primary-dark-hover'>
                <input
                  ref={inputRef}
                  type='text'
                  value={query}
                  onChange={e => handleSearch(e.target.value)}
                  placeholder='Search docs, tools, blog...'
                  className='border-none w-full focus:outline-none placeholder-gray-400 dark:placeholder-soft-white'
                />
                <SearchIcon />
              </div>

              <div className='overflow-y-auto mt-6 pr-1 max-h-[45vh]'>
                {results.length > 0 ? (
                  <div className='space-y-2'>
                    {results.map((result, index) => (
                      <div key={index} className='border-l-2 border-primary'>
                        {isSwaggerRelated(result.item.path) ? (
                          <a
                            href={result.item.path}
                            onClick={() => handleLinkClick(result.item.path)}
                            className='block px-4 py-3 hover:bg-gray-50 rounded-md transition text-base font-medium dark:bg-primary-dark dark:hover:bg-primary-dark-hover dark:text-soft-white'
                          >
                            <div className='flex items-center justify-between'>
                              <div
                                className='flex-1 text-base'
                                dangerouslySetInnerHTML={{
                                  __html: highlightText(
                                    result.item.title,
                                    result.matches?.filter(m => m.key === 'title')
                                  ),
                                }}
                              />
                              <div className='ml-3 flex items-center gap-2'>
                                {result.item.category && (
                                  <span className='px-2 py-1 text-sm bg-gray-200 dark:bg-primary dark:hover:bg-primary-hover dark:text-primary-dark text-pretty rounded-full font-normal'>
                                    {result.item.category}
                                  </span>
                                )}
                              </div>
                            </div>
                          </a>
                        ) : (
                          <Link
                            href={result.item.path}
                            onClick={() => handleLinkClick(result.item.path)}
                            className='block px-4 py-3 hover:bg-gray-50 dark:hover:bg-primary-dark rounded-md transition text-base font-medium dark:bg-primary-dark dark:hover:bg-primary-dark-hover dark:text-soft-white'
                          >
                            <div className='flex items-center justify-between'>
                              <div
                                className='flex-1 text-base'
                                dangerouslySetInnerHTML={{
                                  __html: highlightText(
                                    result.item.title,
                                    result.matches?.filter(m => m.key === 'title')
                                  ),
                                }}
                              />
                              <div className='ml-3 flex items-center gap-2'>
                                {result.item.category && (
                                  <span className='px-2 py-1 text-sm bg-gray-200 dark:bg-primary dark:hover:bg-primary-hover dark:text-primary-dark text-pretty rounded-full font-normal'>
                                    {result.item.category}
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                ) : query ? (
                  <div className='text-center text-gray-400 text-base mt-8'>
                    No results found for &ldquo;
                    <span className='font-medium'>{query}</span>&rdquo;
                  </div>
                ) : (
                  <div className='space-y-6'>
                    <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2 px-1 dark:text-soft-white'>
                      Quick Links
                    </h3>
                    <ul className='ml-2 border-l-2 border-primary divide-y dark:bg-primary-dark dark:hover:primary-dark-hover dark:text-soft-white'>
                      {navigationLinksPublic.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            onClick={() => handleLinkClick(link.href)}
                            className='block px-4 py-3 hover:bg-gray-50 dark:hover:bg-primary-dark-hover rounded-md transition text-base font-medium'
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href={pageUrl(PAGE.Swagger)}
                          onClick={closeModal}
                          className='block px-4 py-3 hover:bg-gray-50 dark:hover:bg-primary-dark-hover rounded-md transition text-base font-medium'
                        >
                          Swagger Docs
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div >
    </>
  );
}

function highlightText(
  text: string,
  matches: Array<FuseResultMatch> | undefined
) {
  if (!matches || matches.length === 0) return text;

  // Collect all match indices and sort them by start position
  const allIndices: Array<[number, number]> = [];
  matches.forEach(match => {
    match.indices.forEach(([start, end]) => {
      allIndices.push([start, end]);
    });
  });

  // Sort by start position to avoid overlap issues
  allIndices.sort((a, b) => a[0] - b[0]);

  // Remove overlapping indices
  const cleanIndices: Array<[number, number]> = [];
  for (const [start, end] of allIndices) {
    const lastIndex = cleanIndices[cleanIndices.length - 1];
    if (!lastIndex || start > lastIndex[1]) {
      cleanIndices.push([start, end]);
    } else if (end > lastIndex[1]) {
      // Extend the last index if current end is greater
      cleanIndices[cleanIndices.length - 1] = [lastIndex[0], end];
    }
  }

  // Build highlighted text from right to left to avoid index shifting
  let result = text;
  for (let i = cleanIndices.length - 1; i >= 0; i--) {
    const [start, end] = cleanIndices[i];
    const matchedText = text.substring(start, end + 1);
    result =
      result.substring(0, start) +
      `<mark>${matchedText}</mark>` +
      result.substring(end + 1);
  }

  return result;
}