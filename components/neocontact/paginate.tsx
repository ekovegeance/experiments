import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface PaginateProps {
  page: number;
  totalPages: number;
}

export default function Paginate({ page, totalPages }: PaginateProps) {
  return (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`?page=${page - 1}`}
              aria-label="Go to previous page"
            />
          </PaginationItem>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href={`?page=${pageNumber}`}
                isActive={pageNumber === page}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        {page < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={`?page=${page + 1}`}
              aria-label="Go to next page"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
