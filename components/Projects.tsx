import Image from "next/image";
import { site, type Project } from "@/content/site";

export function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-24 py-20">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal">
        Projects
      </p>
      <h2 className="font-display mt-3 text-3xl tracking-tight text-ink sm:text-4xl">
        Selected work
      </h2>
      <ul className="mt-10 divide-y divide-[color:var(--line)] border-y border-line">
        {site.projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </ul>
    </section>
  );
}

function ProjectItem({ project }: { project: Project }) {
  const hasImage = Boolean(project.image);

  return (
    <li className="group">
      <div
        className={`grid gap-6 py-8 transition-colors duration-300 group-hover:bg-[rgba(20,184,166,0.06)] md:gap-8 md:px-4 ${
          hasImage
            ? "md:grid-cols-[minmax(0,14rem)_1fr_auto] md:items-center"
            : "sm:grid-cols-[1fr_auto] sm:items-start"
        }`}
      >
        {project.image ? (
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface md:aspect-[4/3]">
            <Image
              src={project.image}
              alt={project.imageAlt ?? `${project.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 224px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ) : null}
        <div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-xl font-semibold text-ink transition-colors group-hover:text-teal">
              {project.title}
            </h3>
            <span className="text-sm text-muted">{project.year}</span>
          </div>
          <p className="mt-3 max-w-2xl text-ink-soft">{project.description}</p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-muted">
            {project.tech.join(" · ")}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 sm:justify-end">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink underline decoration-teal-bright/40 underline-offset-4 transition-colors hover:text-teal hover:decoration-teal"
            >
              GitHub
            </a>
          ) : null}
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink underline decoration-teal-bright/40 underline-offset-4 transition-colors hover:text-teal hover:decoration-teal"
            >
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </li>
  );
}
