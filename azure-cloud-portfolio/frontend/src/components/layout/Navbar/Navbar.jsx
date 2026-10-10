
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FileText, Menu, X } from "lucide-react";
import { PROFILE } from "../../../utils/constants";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const desktopLinkClass = ({ isActive }) =>
    `whitespace-nowrap text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-sky-600"
        : "text-slate-700 hover:text-sky-600"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
      isActive
        ? "bg-sky-50 text-sky-700"
        : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
    }`;

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      {/* Main navigation bar */}
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:min-h-20 lg:px-8"
      >
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          aria-label="M Lean home"
          className="shrink-0 text-2xl font-bold tracking-tight text-sky-600"
        >
          ML
        </NavLink>

        {/* Desktop navigation: visible on large screens */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={desktopLinkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop social links and resume */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-sky-600"
          >
            <FaGithub size={20} />
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn"
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-sky-600"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200"
          >
            <FileText size={17} />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-sky-100 lg:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation panel */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-7xl px-4 py-4 sm:px-6"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile social links */}
            <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:text-sky-600"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:text-sky-600"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>

              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-sky-700"
              >
                <FileText size={17} />
                Resume
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
