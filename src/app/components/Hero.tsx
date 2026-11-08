import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Replace the LinkedIn and Facebook placeholders with your real profiles.
const socials = [
  { label: "GitHub", href: "https://github.com/mahfuz-subed", Icon: FaGithub },
  {
    label: "LinkedIn",
    href: "http://www.linkedin.com/in/mahfuz-subed",
    Icon: FaLinkedin,
  },
];

export default function Hero() {
  return (
    <section id="home" className="bg-[#EFE066]">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="order-last md:order-first">
          <h1 className="text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            Mahfuz Subed
          </h1>
          <p className="mt-3 text-xl font-medium text-ink sm:text-2xl">
            Fullstack web developer
          </p>
          <p className="mt-4 max-w-md text-ink/80">
            Fascinated by technology and always eager to go deeper, I build
            modern web apps from front to back.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/Mahfuz_Subed_Resume.pdf"
              download
              className="rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-ink/80"
            >
              Download resume
            </a>
            <a
              href="#projects"
              className="rounded-md border border-black/30 px-5 py-2.5 text-sm font-medium hover:bg-black/5"
            >
              View projects
            </a>
          </div>

          <ul className="mt-8 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full bg-white text-ink hover:bg-ink hover:text-white"
                >
                  <Icon className="size-5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-64 sm:w-80 md:w-full md:max-w-sm md:justify-self-center">
          <Image
            src="/mahfuz.jpg"
            alt="Portrait of Mahfuz Subed"
            width={800}
            height={800}
            priority
            className="h-auto w-full [clip-path:inset(6px_6px_6px_0)]"
          />
        </div>
      </div>
    </section>
  );
}
