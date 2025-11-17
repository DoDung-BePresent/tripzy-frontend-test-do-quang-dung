"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const SearchContent = () => {
  const searchParams = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const dep = searchParams.get("dep");
  const ret = searchParams.get("ret");
  const pax = searchParams.get("pax");

  return (
    <div className="mx-auto max-w-6xl">
      <div className="bg-background shadow-level-2 rounded-xl p-20">
        <div className="space-y-12">
          <div>
            <p className="text-foreground text-xl font-semibold">
              From: {from}
            </p>
          </div>

          <div>
            <p className="text-foreground text-xl font-semibold">To: {to}</p>
          </div>

          <div>
            <p className="text-foreground text-xl font-semibold">
              Departure date: {dep}
            </p>
          </div>

          {ret && (
            <div>
              <p className="text-foreground text-xl font-semibold">
                Return date: {ret}
              </p>
            </div>
          )}

          <div>
            <p className="text-foreground text-xl font-semibold">
              No. of passenger: {pax}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p>Loading...</p>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
};

export default SearchPage;
