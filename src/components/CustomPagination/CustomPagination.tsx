import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface CustomPaginationProps {
  total: number;
  onChangePage: (page: number) => void;
  limit: number;
  skip: number;
}

const getPageRange = (current: number, total: number): (number | "...")[] => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  if (current <= 4) return [1, 2, 3, 4, 5, "...", total];

  if (current >= total - 3) {
    return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
  }

  return [1, "...", current - 1, current, current + 1, "...", total];
};

export const CustomPagination = ({
  total,
  onChangePage,
  skip,
  limit,
}: CustomPaginationProps) => {
  const currentPage = skip === 0 ? 1 : Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  const pages = getPageRange(currentPage, totalPages);

  return (
    <Pagination className="mx-auto">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && onChangePage(currentPage - 1)}
            aria-disabled={currentPage === 1}
            className={
              currentPage === 1
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
          />
        </PaginationItem>

        {pages.map((page, idx) =>
          page === "..." ? (
            <PaginationItem key={`ellipsis-${idx}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() =>
                  page !== currentPage && onChangePage(page as number)
                }
                className={page !== currentPage ? "cursor-pointer" : undefined}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() =>
              currentPage < totalPages && onChangePage(currentPage + 1)
            }
            aria-disabled={currentPage === totalPages}
            className={
              currentPage === totalPages
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
