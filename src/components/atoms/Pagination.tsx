
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { formUrlQuery } from '~/utils/utils';
import type { PaginationProps } from '~/shared/types';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const Pagination: React.FC<PaginationProps> = ({ pageNumber, isNext }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNavigation = (direction: 'prev' | 'next') => {
    const nextPageNumber = direction === 'next' ? pageNumber + 1 : pageNumber - 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'page',
      value: nextPageNumber.toString(),
    });

    router.push(newUrl);
  };

  return (
    <div className="flex justify-between w-full">
      <button
        className={pageNumber == 1 ? 'invisible' : `btn btn-ghost px-4 py-2 text-sm font-semibold`}
        onClick={() => handleNavigation('prev')}
        disabled={pageNumber === 1}
      >
        <IconChevronLeft className="h-6 w-6" />
      </button>
      <span className="px-4 py-2 text-sm font-semibold">{pageNumber}</span>
      <button
        className={!isNext ? 'invisible' : 'btn btn-ghost px-4 py-2 text-sm font-semibold'}
        onClick={() => handleNavigation('next')}
        disabled={!isNext}
      >
        <IconChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Pagination;
