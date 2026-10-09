
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FileText } from "lucide-react";
import { PROFILE } from "../../../utils/constants";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Portfolio logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight text-sky-600"
          aria-label="M Lean home"
        >
          ML
        </NavLink>

        {/* Navigation links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-sky-600"
                    : "text-slate-700 hover:text-sky-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* GitHub, LinkedIn and Resume */}
        <div className="flex items-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            title="GitHub"
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-sky-600"
          >
            <FaGithub size={20} />
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
            title="LinkedIn"
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-sky-600"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-700 sm:flex"
          >
            <FileText size={17} />
            Resume
          </a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
