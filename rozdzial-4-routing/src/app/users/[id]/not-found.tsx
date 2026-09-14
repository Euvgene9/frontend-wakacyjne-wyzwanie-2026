import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-10">
      <h2 className="text-xl font-semibold">
        User not found
      </h2>
      <p className="text-gray-500">
        Check if given id is correct
      </p>
      <Link
        href="/users"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Return to user's list
      </Link>
    </div>
  );
}