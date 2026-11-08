import type { IconType } from "react-icons";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skills: { name: string; Icon: IconType }[] = [
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React.js", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-14">
      <h2 className="text-3xl font-medium tracking-tight">Skills</h2>
      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {skills.map(({ name, Icon }) => (
          <li
            key={name}
            className="flex flex-col items-center gap-3 rounded-lg border border-black/10 bg-white px-4 py-6"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-ink">
              <Icon className="size-7 text-[#f9e33e]" aria-hidden />
            </span>
            <span className="text-sm font-medium">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
