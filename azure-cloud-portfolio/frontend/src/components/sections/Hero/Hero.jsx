import { PROFILE } from "../../../utils/constants";
function Hero() {
  return (
    <section className="bg-slate-100">

      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center justify-between px-8">

        <div>

          <p className="text-lg font-medium text-sky-600">
            Hello 👋
          </p>

          <h1 className="mt-4 text-6xl font-bold">
            I'm Your Name
          </h1>

          <h2 className="mt-4 text-2xl text-gray-600">
            Computer Science Student
          </h2>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Passionate about AI, Azure Cloud,
            Full Stack Development and solving
            real-world problems.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="rounded-lg bg-sky-600 px-6 py-3 text-white">
              Contact Me
            </button>

            <button className="rounded-lg border border-sky-600 px-6 py-3 text-sky-600">
              Download Resume
            </button>

          </div>

        </div>

        <div>

          <img
            src="https://placehold.co/400x450"
            alt="Profile"
            className="rounded-3xl shadow-xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;