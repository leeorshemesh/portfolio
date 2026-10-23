import { site } from "@/content/site";

export function About() {
  const { education } = site;

  return (
    <section id="about" className="section-shell scroll-mt-24 py-20">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal">
            About
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-ink sm:text-4xl">
            Education
          </h2>
        </div>
        <div className="border-t border-line pt-6 md:border-t-0 md:border-l md:pl-10 md:pt-0">
          <h3 className="text-xl font-semibold text-ink">{education.school}</h3>
          <p className="mt-1 text-muted">
            {education.degree} · {education.years}
          </p>
          <p className="mt-1 text-muted">
            Minor in {education.minor}, {education.minorSchool}
          </p>
          <p className="mt-3 text-ink">GPA {education.gpa}</p>
          <ul className="mt-3 space-y-1 text-ink-soft">
            {education.honors.map((honor) => (
              <li key={honor}>{honor}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.14em] text-muted">
            Relevant coursework
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <li
                key={course}
                className="border border-line bg-surface px-3 py-1.5 text-sm text-ink-soft"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
