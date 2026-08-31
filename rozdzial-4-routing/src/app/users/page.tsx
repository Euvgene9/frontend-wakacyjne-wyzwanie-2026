import { UserProfileList } from "../../components/UserProfilesList";

export default async function UsersPage() {

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User's list</h1>
      <UserProfileList />
    </div>
  );
}