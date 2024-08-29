"use client";
import { ReactNode, useState } from "react";

const TOTAL_PAGES = 5;
export default function Home() {
  const [page, setPage] = useState(1);

  return (
    <main className="flex flex-col min-h-screen justify-between ">
      <div className="mt-[500px]">
        <h1 className="text-3xl text-center">{page}</h1>
      </div>

      <div className="flex justify-center m-10">
        <PaginationController
          setPageFn={(page: number) => {
            setPage(page);
          }}
          currentPage={page}
          totalPages={TOTAL_PAGES}
        />
      </div>
    </main>
  );
}

function PaginationController({
  currentPage,
  totalPages,
  setPageFn,
}: {
  currentPage: number;
  totalPages: number;
  setPageFn: (page: number) => void;
}) {
  return (
    <div className="flex gap-4">
      <button
        className={clsx(
          "inline-flex gap-4  justify-between px-4 py-2 items-center",
          currentPage === 1 && "text-gray-400"
        )}
        disabled={currentPage === 1}
        onClick={() => {
          setPageFn(currentPage - 1);
        }}
      >
        <span>&#x2039;</span>
        <span>Prev</span>
      </button>
      {Array.from({ length: totalPages })
        .fill(null)
        .map((_, idx) => {
          const pageNum = idx + 1;
          return (
            <span key={idx}>
              <PaginationButton
                onClick={() => {
                  setPageFn(pageNum);
                }}
                disabled={currentPage === pageNum}
              >
                {pageNum}
              </PaginationButton>
            </span>
          );
        })}
      <button
        className={clsx(
          "inline-flex gap-4 justify-between px-4 py-2 items-center",
          currentPage === totalPages && "text-gray-400"
        )}
        disabled={currentPage === totalPages}
        onClick={() => {
          setPageFn(currentPage + 1);
        }}
      >
        <span>Next</span> <span>&#x203A;</span>
      </button>
    </div>
  );
}

function clsx(...classNames: any[]) {
  return classNames.filter(Boolean).join(" ");
}

function PaginationButton({
  children,
  disabled,
  onClick,
}: {
  disabled: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        " p-4 w-[50px] h-[50px] inline-flex justify-center items-center rounded-lg",
        disabled && "border-2"
      )}
    >
      {children}
    </button>
  );
}
