import { site } from "@/content/site";

export function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-24 py-20">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal">
        Skills
      </p>
      <h2 className="font-display mt-3 text-3xl tracking-tight text-ink sm:text-4xl">
        Technical toolkit
      </h2>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {Object.entries(site.skills).map(([category, items]) => (
          <div key={category} className="border-t border-line pt-5">
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-muted">
              {category}
            </h3>
            <ul className="mt-4 space-y-2">
              {items.map((skill) => (
                <li key={skill} className="text-ink">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
