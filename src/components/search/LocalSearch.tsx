'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type TCustomInput = {
  route: string;
  placeholder: string;
  otherClasses?: string;
  hasLabel?: boolean;
  label?: string;
};

const LocalSearch: React.FC<TCustomInput> = ({ route, placeholder, otherClasses, hasLabel, label }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get('q');

  const [search, setSearch] = useState<string>(query || '');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        // Form new url query with search params
      } else {
        // Remove search params from url
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [route, router, pathname, searchParams, query, search]);

  return (
    <div key="search-input" className={`mx-0 mb-1 sm:mb-4 ${otherClasses}`}>
      {hasLabel && (
        <label htmlFor="search-input" className="pb-1 text-xs uppercase tracking-wider">
          {label ?? placeholder}
        </label>
      )}
      <input
        id="search-input"
        name="search-input"
        autoComplete="given-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
      />
    </div>
  );
};

export default LocalSearch;
