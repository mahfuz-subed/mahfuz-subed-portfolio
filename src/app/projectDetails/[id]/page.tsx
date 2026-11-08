import { projects } from "@/data/project";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type IProject = {
  id: string;
  name: string;
  image: string;
  technologies: string[];
  description: string;
  liveLink: string;
  githubLink: string;
  challenges: string[];
  improvements?: string[];
};

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  console.log(id);

  const project: IProject | undefined = projects.find(
    (project) => project.id === id,
  );

  if (!project) {
    redirect("/");
  }

  return (
    <section className="min-h-screen bg-[#EFDF6D] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Link href="/#projects" className="font-medium text-black">
          ← Back to Projects
        </Link>

        <h1 className="mt-8 text-4xl font-bold text-black">{project.name}</h1>

        <Image
          src={project.image}
          alt={project.name}
          width={1000}
          height={600}
          className="mt-8 w-full rounded-xl object-cover"
        />

        <div className="mt-8 rounded-xl bg-white p-8">
          <h2 className="text-2xl font-bold">Technologies Used</h2>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#EFDF6D] px-4 py-2 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <h2 className="mt-8 text-2xl font-bold">About the Project</h2>
          <p className="mt-3 text-gray-700">{project.description}</p>

          <h2 className="mt-8 text-2xl font-bold">Challenges Faced</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>

          {project.improvements && (
            <div>
              {" "}
              <h2 className="mt-8 text-2xl font-bold">Future Improvements</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
                {project.improvements?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-black px-5 py-3 text-white"
            >
              Live Project ↗
            </Link>

            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-black px-5 py-3 text-black"
            >
              GitHub Repository ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
