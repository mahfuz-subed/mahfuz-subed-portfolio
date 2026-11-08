import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/project";

const Projects = () => {
  return (
    <section id="projects" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-medium tracking-tight">
            Selected Works<span className="text-[#EFDF6D]">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-gray-300">
            A collection of projects where ideas meet design, functionality, and
            creativity.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isKhair = project.name.toLowerCase().includes("khair");

            return (
              <article
                key={index}
                className="flex flex-col overflow-hidden rounded-lg border border-white/15 bg-neutral-900"
              >
                {/* Project image */}
                <div className="relative overflow-hidden border-b border-white/15">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={700}
                    height={450}
                    className={`h-60 w-full object-cover ${
                      isKhair ? "" : "origin-bottom scale-[1.15] object-bottom"
                    }`}
                  />
                  <span className="absolute left-0 top-0 bg-[#EFDF6D] px-3 py-1.5 text-sm font-bold text-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Project information */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-bold">{project.name}</h3>

                  <p className="mt-3 text-sm text-gray-400">
                    {project.technologies.slice(0, 3).join(" / ")}
                  </p>

                  {/* Details button */}
                  <div className="mt-auto pt-8">
                    <Link
                      href={`/projectDetails/${project.id}`}
                      className="flex items-center justify-between bg-[#EFDF6D] px-5 py-3.5 text-sm font-semibold text-black hover:bg-white"
                    >
                      <span>View Details</span>
                      <span className="text-lg">↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
