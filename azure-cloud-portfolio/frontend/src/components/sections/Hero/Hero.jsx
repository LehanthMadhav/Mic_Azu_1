
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { PROFILE } from "../../../utils/constants";

function Hero() {
  return (
    <section className="overflow-hidden bg-slate-100">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-8 lg:py-16">

        {/* Introduction */}
        <div className="order-1 text-center lg:text-left">
          <p className="animate-fade-up text-base font-medium text-sky-600">
            Hello 👋
          </p>

          <h1 className="animate-fade-up intro-delay-100 mt-4 break-words text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            I'm {PROFILE.name}
          </h1>

          <h2 className="animate-fade-up intro-delay-200 mt-4 text-xl font-medium text-slate-600 sm:text-2xl">
            Computer Science Student
          </h2>

          <p className="animate-fade-up intro-delay-300 mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
            Passionate about AI, Azure Cloud, Full Stack Development
            and solving real-world problems.
          </p>

          {/* Action buttons */}
          <div className="animate-fade-up intro-delay-400 mt-8 flex flex-col items-stretch justify-center gap-3 min-[420px]:flex-row min-[420px]:items-center sm:mt-10 lg:justify-start">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200"
            >
              Contact Me
              <ArrowRight size={18} />
            </Link>

            <a
              href={PROFILE.resume}
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-sky-600 px-6 py-3 font-semibold text-sky-700 transition duration-200 hover:-translate-y-0.5 hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-100"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Responsive profile photo */}
        <div className="order-2 flex w-full items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[320px]">
            {/* Decorative blue glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.5rem] bg-sky-200/50 blur-2xl"
            />

            {/* Photo frame */}
            <div className="animate-fade-in relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-white bg-white shadow-xl ring-1 ring-slate-200/70">
              <img
                src={PROFILE.photo}
                alt="M Lean - Profile Photo"
                className="animate-float block h-full w-full object-contain object-top"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
