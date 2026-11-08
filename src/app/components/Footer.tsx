import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#EFDF6D] px-6 py-10 text-black">
        <div className="mx-auto max-w-6xl">
          <div>
            <h2 className="text-3xl font-extrabold">
              Mahfuz<span className="text-white">.</span>
            </h2>

            <p className="mt-2 text-sm text-black/70">
              Turning ideas into functional digital experiences.
            </p>
          </div>

          <nav className="mt-8 flex flex-wrap gap-6 text-sm font-medium">
            <a href="#home" className="transition hover:underline">
              Home
            </a>
            <a href="#projects" className="transition hover:underline">
              Projects
            </a>
            <a href="#education" className="transition hover:underline">
              Education
            </a>
            <a href="#contact" className="transition hover:underline">
              Contact
            </a>
          </nav>

          <div className="mt-8 flex flex-col gap-4 border-t border-black/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-black/70">
              © {new Date().getFullYear()} Mahfuz Subed. All rights reserved.
            </p>

            <a
              href="#home"
              className="text-sm font-semibold transition hover:-translate-y-1"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
      ;
    </div>
  );
};

export default Footer;
