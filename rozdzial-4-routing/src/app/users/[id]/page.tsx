import { notFound } from "next/navigation";
import { UserProfileCard } from "../../../components/UserProfileCard";
import { MOCK_USERS } from "../../../components/UserProfilesList";
import Link from "next/link";

export default async function UserProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userId = parseInt(id);

  if (isNaN(userId) || userId < 1 || userId > 3) {
    notFound();
  }

  const foundUser = MOCK_USERS.find((u) => u.id === id);

  if (!foundUser) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col justify-between items-center mx-auto max-w-5xl p-8 text-center">
      <div className="max-w-xl mx-auto rounded-2xl border p-8 shadow-sm mr-32 ">
        <Link
          href="/users"
          className="inline-flex items-center text-sm font-medium mb-6 transition-colors"
        >
          ← Return
        </Link>

        <div className="flex flex-col items-center text-center">
          <img
            src={foundUser.avatarUrl}
            alt={foundUser.name}
            className="w-28 h-28 rounded-full border-4 mb-4"
          />

          <h1 className="text-2xl font-bold">{foundUser.name}</h1>
          <p className=" font-medium mb-4">{foundUser.role}</p>

          <div className="w-full border-t  pt-4 mt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold">
              <span>Loves pizza:</span>
              <span>{foundUser.likesPizza ? "Yes" : "No"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}