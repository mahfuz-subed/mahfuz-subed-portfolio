import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const contacts: {
  label: string;
  value: string;
  href: string;
  Icon: IconType;
}[] = [
  {
    label: "Email",
    value: "mahfuzsubed@gmail.com",
    href: "mailto:mahfuzsubed@gmail.com",
    Icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "+880 1738 490668",
    href: "tel:+8801738490668",
    Icon: FaPhone,
  },
  {
    label: "WhatsApp",
    value: "+880 1738 490668",
    href: "https://wa.me/8801738490668",
    Icon: FaWhatsapp,
  },
  {
    label: "GitHub",
    value: "github.com/mahfuz-subed",
    href: "https://github.com/mahfuz-subed",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mahfuz-subed",
    href: "https://www.linkedin.com/in/mahfuz-subed",
    Icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-3xl font-medium tracking-tight">Contact</h2>
      <p className="mt-4 max-w-xl text-muted">
        Have a project or an opportunity in mind? Reach out on any of these.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {contacts.map(({ label, value, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-lg border border-black/10 bg-white px-5 py-4 hover:border-ink"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ink">
                <Icon className="size-5 text-[#f9e33e]" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted">{label}</span>
                <span className="block break-words font-medium">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
