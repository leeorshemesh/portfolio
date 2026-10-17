import { site } from "@/content/site";

export function Experience() {
  return (
    <section id="experience" className="section-shell scroll-mt-24 py-20">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal">
        Experience
      </p>
      <h2 className="font-display mt-3 text-3xl tracking-tight text-ink sm:text-4xl">
        Research & work
      </h2>
      <div className="mt-10 space-y-10">
        {site.experience.map((job) => (
          <article
            key={`${job.org}-${job.role}`}
            className="border-t border-line pt-8"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-ink">{job.role}</h3>
                <p className="mt-1 text-teal">{job.org}</p>
              </div>
              <p className="text-sm text-muted">
                {job.dates} · {job.location}
              </p>
            </div>
            <ul className="mt-5 space-y-3">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-5 text-ink-soft before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-teal-bright"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
