
import { Code2, Cloud, BrainCircuit, GraduationCap } from "lucide-react";
import { PROFILE } from "../utils/constants";

function About() {
  const interests = [
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Building web applications and learning to write clean, maintainable code.",
    },
    {
      icon: Cloud,
      title: "Azure Cloud",
      description:
        "Exploring cloud services, serverless computing, deployment, and monitoring.",
    },
    {
      icon: BrainCircuit,
      title: "AI and Machine Learning",
      description:
        "Learning how AI can solve practical problems through software projects.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description:
        "Strengthening computer science fundamentals through hands-on projects.",
    },
  ];

  return (
    <section className="min-h-[80vh] bg-slate-50 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Get to know me
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            About Me
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-sky-600" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-600">
            A computer science student interested in building useful
            software, exploring cloud technologies, and learning through
            practical projects.
          </p>
        </div>

        {/* About content */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Hello, I'm {PROFILE.name}
            </h2>

            <div className="mt-6 space-y-4 leading-7 text-slate-600">
              <p>
                I'm a Computer Science Engineering student who enjoys
                exploring how software works and how technology can
                address real-world challenges.
              </p>

              <p>
                I'm currently developing my skills in web development
                and Microsoft Azure, with a focus on understanding the
                complete application lifecycle—from writing code and
                testing locally to deployment and monitoring.
              </p>

              <p>
                My goal is to turn what I learn into practical projects,
                strengthen my problem-solving abilities, and grow as a
                software engineer.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Problem Solving", "Cloud Computing", "Web Development"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Interests */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {interests.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-sky-50 p-3 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
  