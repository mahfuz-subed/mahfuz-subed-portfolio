import Link from "next/link";

const links = (
  <>
    <li>
      <Link href="#home">Home</Link>
    </li>
    <li>
      <Link href="#about">About</Link>
    </li>
    <li>
      <Link href="#skills">Skills</Link>
    </li>
    <li>
      <Link href="#projects">Projects</Link>
    </li>
    <li>
      <Link href="#contact">Contact</Link>
    </li>
  </>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/85 text-white backdrop-blur-xl">
      <div className="navbar mx-auto max-w-6xl px-6">
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              aria-label="Open menu"
              className="btn btn-ghost px-2 text-white hover:bg-[#EFDF6D] hover:text-black lg:hidden"
            >
              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-xl border border-white/10 bg-black p-2 text-white shadow-xl"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="#home"
            className="btn btn-ghost px-2 text-xl font-extrabold tracking-tight text-white hover:bg-transparent"
          >
            Mahfuz<span className="text-[#EFDF6D]">.</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-2 px-1">
            {links}
          </ul>
        </div>

        {/* Resume button */}
        <div className="navbar-end">
          <a
            href="/Mahfuz_Subed_Resume.pdf"
            download
            className="btn border-none bg-[#EFDF6D] px-6 font-bold text-black shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
