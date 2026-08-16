import Image from "next/image";
import TeamMemberCard from "./TeamMemberCard";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-500 p-4 dark:bg-slate-900">
      <TeamMemberCard
        name="Yevhenii Duranin"
        role="Frontend Developer"
        bio="Student politechniki, uczę się frontendu i backendu."
        skills={["React", "TypeScript", "Tailwind CSS", "Next.js"]}
      />
    </main>
  );
}
