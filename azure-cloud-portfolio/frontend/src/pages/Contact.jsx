
import { useState } from "react";
import { Mail, Send, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE } from "../utils/constants";

function Contact() {
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    setStatus("sending");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let result = {};

      try {
        result = await response.json();
      } catch {
        throw new Error("The API returned an invalid response.");
      }

      if (!response.ok) {
        const validationErrors = result.errors
          ? Object.values(result.errors).join(" ")
          : "";

        throw new Error(
          validationErrors ||
            result.message ||
            `Request failed with status ${response.status}.`
        );
      }

      if (!result.success) {
        throw new Error(result.message || "The request was unsuccessful.");
      }

      setStatus("success");

      if (result.stored === false) {
        setNotice(
          "The API received and validated your message, but it has not been saved yet. Azure Storage will be connected next."
        );
      } else {
        setNotice(
          result.message || "Your message was submitted successfully."
        );
      }

      // Keep the entered data until storage is connected.
    } catch (error) {
      setStatus("error");

      setNotice(
        error instanceof TypeError
          ? "Could not connect to the API. Check that Azure Functions is running on port 7071."
          : error.message || "Something went wrong. Please try again."
      );
    }
  }

  const feedbackStyle =
    status === "error"
      ? "border-rose-200 bg-rose-50 text-rose-700"
      : "border-sky-200 bg-sky-50 text-sky-800";

  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
            Get in touch
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Contact Me
          </h1>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-sky-600" />

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Have a project idea, a technical question, or an opportunity
            to discuss? I'd love to hear from you.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-7">
          {/* Contact information */}
          <aside className="rounded-2xl bg-slate-900 p-5 text-white sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
              <MessageCircle size={23} />
            </div>

            <h2 className="mt-4 text-xl font-bold">Let's connect</h2>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              I'm interested in software development, cloud computing,
              AI, and building projects that solve practical problems.
            </p>

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
              <Mail size={19} className="mt-0.5 shrink-0 text-sky-400" />

              <div>
                <h3 className="text-sm font-semibold">
                  Send me a message
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-300">
                  Use the form to contact me.
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-xs font-semibold tracking-wider text-slate-300">
                FIND ME ONLINE
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub profile"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2.5 text-sm transition hover:border-sky-400 hover:bg-white/5"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2.5 text-sm transition hover:border-sky-400 hover:bg-white/5"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>

          {/* Contact form */}
          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <h2 className="text-xl font-bold text-slate-900">
              Send a message
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Complete the fields below to submit a test request to the API.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Full name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  minLength={2}
                  maxLength={100}
                  required
                  className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Email address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  maxLength={254}
                  required
                  className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  minLength={3}
                  maxLength={150}
                  required
                  className="w-full min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  minLength={10}
                  maxLength={3000}
                  placeholder="Write your message..."
                  required
                  className="w-full min-w-0 resize-y rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200 disabled:cursor-wait disabled:opacity-60"
              >
                <Send size={16} />
                {status === "sending" ? "Sending..." : "Submit Message"}
              </button>

              {notice && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-lg border p-3 text-sm leading-6 ${feedbackStyle}`}
                >
                  {notice}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
