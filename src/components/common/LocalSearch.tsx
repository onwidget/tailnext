
'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { LocalSearchProps } from '~/shared/types';
import { formUrlQuery, removeKeysFromUrlQuery } from '~/utils/utils';

const LocalSearch: React.FC<LocalSearchProps> = ({ route, placeholder, otherClasses, label }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get('q');

  const [search, setSearch] = useState<string>(query || '');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = null;
      if (search) {
        // Form new url query with search params
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'q',
          value: search,
        });
      } else {
        // Remove search params from url
        newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['q'],
        });
      }

      if (newUrl) {
        router.push(newUrl, { scroll: false });
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [route, router, pathname, searchParams, query, search]);

  return (
    <div className={`mx-0 mb-1 sm:mb-4 ${otherClasses}`}>
      {label && (
        <label htmlFor="search-input" className="pb-1 text-xs uppercase tracking-wider">
          {label}
        </label>
      )}
      <input
        id="search-input"
        name="search-input"
        autoComplete="given-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        type="text"
        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
      />
    </div>
  );
};

export default LocalSearch;