"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const SearchContent = () => {
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const dep = searchParams.get("dep");
  const ret = searchParams.get("ret");
  const pax = searchParams.get("pax");

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      <div className="bg-background shadow-level-3 rounded-xl p-8">
        <h1 className="text-foreground mb-6 text-3xl font-semibold">
          Search Results
        </h1>

        <div className="space-y-4">
          <div>
            <span className="text-foreground-muted text-sm">From:</span>
            <p className="text-foreground text-lg font-medium">{from}</p>
          </div>

          <div>
            <span className="text-foreground-muted text-sm">To:</span>
            <p className="text-foreground text-lg font-medium">{to}</p>
          </div>

          <div>
            <span className="text-foreground-muted text-sm">
              Departure date:
            </span>
            <p className="text-foreground text-lg font-medium">{dep}</p>
          </div>

          {ret && (
            <div>
              <span className="text-foreground-muted text-sm">
                Return date:
              </span>
              <p className="text-foreground text-lg font-medium">{ret}</p>
            </div>
          )}

          <div>
            <span className="text-foreground-muted text-sm">
              No. of passenger:
            </span>
            <p className="text-foreground text-lg font-medium">{pax}</p>
          </div>
        </div>

        <div className="bg-accent mt-8 rounded-lg p-4">
          <p className="text-foreground-secondary text-center">
            Search results will be displayed here based on the criteria above.
          </p>
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
