import Image from "next/image";

interface TeamMemberCardProps {
     name: string;
     role: string;
     bio: string;
     skills: string[];
   }

export default function TeamMemberCard({
  name,
  role,
  bio,
  skills,
}: TeamMemberCardProps) {
  return (
    <article className="flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 md:max-w-2xl md:flex-row md:items-start">
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-3xl font-bold text-white ring-4 ring-indigo-400">
        {name
          .split(" ")
          .map((part) => part[0])
          .join("")}
      </div>

      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold text-white">{name}</h2>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gray-400">
          {role}
        </p>
        <p className="mt-3 text-sm leading-relaxed dark:text-gray-400">{bio}</p>

        <ul className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full bg-indigo-500 px-3 py-1 text-xs font-bold text-white"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}