
import {
  FolderCode,
  Cloud,
  Activity,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Azure Cloud Portfolio",
      category: "Cloud & Web Development",
      status: "In Progress",
      icon: Cloud,
      description:
        "A personal portfolio designed to showcase projects and technical skills while learning the complete Azure application lifecycle.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Azure Functions",
        "Azure Storage",
      ],
      highlights: [
        "Reusable React components and page routing",
        "Planned serverless contact API",
        "Planned automated deployment and monitoring",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Industrial Machine Fault Detection",
      category: "IoT & Machine Learning",
      status: "Development",
      icon: Activity,
      description:
        "A project to investigate machine vibration data using an ESP32 and an MPU6050 sensor, with the goal of identifying abnormal operating conditions.",
      technologies: [
        "ESP32",
        "MPU6050",
        "Python",
        "Machine Learning",
        "Sensor Data",
      ],
      highlights: [
        "Collect vibration readings from a motor",
        "Explore data processing and feature extraction",
        "Develop a fault classification approach",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Project Arbitrage",
      category: "AI Agents & Financial Technology",
      status: "Prototype / Concept",
      icon: BrainCircuit,
      description:
        "A treasury risk-agent project concept focused on long-term memory, financial context, and supporting enterprise treasury decisions.",
      technologies: [
        "AI Agents",
        "LLMs",
        "Memory Systems",
        "Financial Data",
      ],
      highlights: [
        "Explore long-term context retention",
        "Investigate treasury-risk analysis workflows",
        "Design a decision-support agent",
      ],
      github: "",
      demo: "",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Things I've been working on
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            My Projects
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-sky-600" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-600">
            A collection of my software, cloud, IoT, and AI project work.
            Each project represents an opportunity to learn, experiment,
            and solve practical problems.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-7 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
              >
                {/* Card header */}
                <div className="flex items-start justify-between border-b border-slate-100 bg-gradient-to-br from-sky-50 to-white p-6">
                  <div className="rounded-2xl bg-white p-4 text-sky-600 shadow-sm ring-1 ring-sky-100 transition duration-300 group-hover:bg-sky-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <span className="rounded-full border border-sky-100 bg-white px-3 py-1.5 text-xs font-semibold text-sky-700">
                    {project.status}
                  </span>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                    {project.category}
                  </p>

                  <h2 className="mt-3 text-xl font-bold leading-snug text-slate-900">
                    {project.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-5">
                    <h3 className="text-sm font-semibold text-slate-900">
                      Project highlights
                    </h3>

                    <ul className="mt-3 space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-slate-900">
                      Technologies
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project links */}
                  <div className="mt-auto flex flex-wrap gap-3 pt-7">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
                      >
                        <FaGithub size={17} />
                        Source Code
                        <ArrowUpRight size={15} />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-sky-700"
                      >
                        Live Demo
                        <ArrowUpRight size={15} />
                      </a>
                    )}

                    {!project.github && !project.demo && (
                      <p className="text-xs text-slate-400">
                        Project links will be added when available.
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing section */}
        <div className="mt-14 rounded-3xl border border-sky-100 bg-sky-50 p-8 text-center sm:p-10">
          <FolderCode
            size={34}
            className="mx-auto text-sky-600"
          />

          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            Always building and learning
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            I'm continuing to develop projects that strengthen my software
            engineering fundamentals and help me understand real-world
            technologies in practice.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
