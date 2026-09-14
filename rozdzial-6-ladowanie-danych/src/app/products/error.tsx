'use client';

import { Button } from "@/components/ui/button";


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const message = error.message || "During loading of the products error has occured";

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-8">
      <h2 className="mb-4 text-2xl font-bold">Error has occured</h2>
        <Button variant="outline" onClick={reset}>
          Try again
        </Button>
      </div>
  );
}