import Image from "next/image";
import { Kameron } from "next/font/google";
import Link from "next/link";

const besley = Kameron({
  subsets: ["latin"],
  weight: "500",
})

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  photoSrc: string;
}

export default function TeamMemberCard({
  name,
  role,
  bio,
  skills,
  photoSrc,
}: TeamMemberCardProps) {
  return (
    <div className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-xl sm:flex-row">
      <div className="flex h-44 items-center justify-center bg-red-400 sm:h-auto sm:w-48">
        <Image
          src={photoSrc}
          alt={`Zdjęcie: ${name}`}
          width={96}
          height={96}
          className="m-5 h-24 w-24 rounded-full object-cover"
          /> 
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>
          <p className={`mt-1 text-sm font-medium text-red-700 ${besley.className}`}>{role}</p>
        </div>
        <p className="text-sm leading-6 text-gray-600">{bio}</p>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Umiejętności
          </h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {skill}
              </li>
            ))}
          </ul>
          <Link
            href={"https://solvro.pwr.edu.pl/pl/"}
            target="_blank"
            className="mt-2 inline-block self-start rounded-full bg-red-400 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-800"
          >Dowiedz się więcej</Link>
          </div>
      </div>
    </div>
  );
}
