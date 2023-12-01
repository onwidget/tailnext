'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { formUrlQuery } from '~/utils/utils';

type TPagination = {
  pageNumber: number;
  isNext: boolean;
};

const Pagination: React.FC<TPagination> = ({ pageNumber, isNext }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNavigation = (direction: 'prev' | 'next') => {
    const nextPageNumber = direction === 'prev' ? pageNumber - 1 : pageNumber + 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'page',
      value: nextPageNumber.toString(),
    });

    router.push(newUrl);
  };

  if (!isNext && pageNumber === 1) return null; // Hide pagination if there is only one page

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <button
        className="btn btn-primary px-3 py-2 md:px-4"
        onClick={() => handleNavigation('prev')}
        disabled={pageNumber === 1}
      >
        <p>Prev</p>
      </button>
      <div className="btn btn-primary pointer-events-none flex items-center justify-center rounded-md px-3 py-2 md:px-4">
        <p>{pageNumber}</p>
      </div>
      <button className="btn btn-primary px-3 py-2 md:px-4" onClick={() => handleNavigation('next')} disabled={!isNext}>
        <p>Next</p>
      </button>
    </div>
  );
};

export default Pagination;
