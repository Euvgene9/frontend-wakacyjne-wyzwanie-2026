import { Skeleton } from "@/src/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 px-12">
      {Array(3).fill(0).map((_, key) => (
        <div key={key} className="flex flex-col items-center gap-4 rounded-xl border p-6 pt-4">
          <Skeleton className="size-24 rounded-full" />

          <div className="w-full flex flex-col items-center gap-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>

          <Skeleton className="h-11 w-full rounded-md mt-2" />
        </div>
      ))}
    </div>
  )
}