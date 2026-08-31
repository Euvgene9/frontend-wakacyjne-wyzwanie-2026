import { MOCK_USERS } from "../../../components/UserProfilesList";

export default async function StatsSlot() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const pizzaLovers = MOCK_USERS.filter((u) => u.likesPizza).length;
  const total = MOCK_USERS.length;
  const percentage = Math.round((pizzaLovers / total) * 100);

  return (
    <div className="border rounded-lg mt-40 p-4 shadow-sm ">
      <h2 className="text-lg font-semibold mb-2">Lovers of pizza</h2>
      <p className="text-3xl font-bold">{percentage}%</p>
      <p className="text-sm text-gray-600">
        {pizzaLovers} of {total} users love pizza
      </p>
    </div>
  );
}