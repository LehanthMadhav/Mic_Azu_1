
import {
  Code2,
  Monitor,
  Server,
  Cloud,
  Database,
  Wrench,
  BrainCircuit,
} from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      description: "Building programming and problem-solving fundamentals.",
      skills: ["C", "Java", "Python", "JavaScript"],
    },
    {
      title: "Frontend Development",
      icon: Monitor,
      description: "Creating interactive and responsive web interfaces.",
      skills: ["HTML", "CSS", "React", "Vite", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: Server,
      description: "Learning how web applications communicate with APIs.",
      skills: ["JavaScript", "REST APIs", "HTTP", "Azure Functions"],
    },
    {
      title: "Cloud Computing",
      icon: Cloud,
      description: "Exploring Microsoft's cloud platform through this project.",
      skills: [
        "Microsoft Azure",
        "Azure CLI",
        "Azure Static Web Apps",
        "Serverless Computing",
      ],
    },
    {
      title: "Databases and Storage",
      icon: Database,
      description: "Learning how applications store and manage information.",
      skills: ["Azure Storage", "Table Storage", "Data Modeling"],
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      description: "Tools for development, version control, and debugging.",
      skills: ["Git", "GitHub", "VS Code", "npm", "Chrome DevTools"],
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Technologies and tools
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            My Skills
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-sky-600" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-600">
            A growing collection of technologies I'm exploring and applying
            through coursework, hands-on development, and personal projects.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-xl bg-sky-50 p-3 text-sky-600 transition duration-300 group-hover:bg-sky-600 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                    Learning & practice
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900">
                  {category.title}
                </h2>

                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Current learning focus */}
        <div className="mt-12 rounded-2xl border border-sky-100 bg-sky-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-white p-3 text-sky-600 shadow-sm">
              <BrainCircuit size={25} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Current Learning Focus
              </h2>

              <p className="mt-2 max-w-3xl leading-7 text-slate-600">
                Building this portfolio with React and Tailwind CSS while
                learning Azure Functions, cloud storage, API integration,
                automated deployment, and application monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
