import { useState } from "react";

interface Technology {
  id: string;
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
}


function ProjectCard({ title, description, technologies }: ProjectCardProps) {

    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <article className="project-card">
        <h2>{title}</h2>
        <p>{description}</p>

        <ul>
            {technologies.map((technology) => (
            <li key={technology.id}>{technology.name}</li>
            ))}
        </ul>

        <p>Status: {isCompleted ? "Ukończony" : "W trakcie"}</p>

        <button onClick={() => setIsCompleted(!isCompleted)} className="border border-black px-3 py-1 mt-2">
            Zmień status
        </button>
        </article>
    );
}

export default ProjectCard