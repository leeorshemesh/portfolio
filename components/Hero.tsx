import { Button } from "@/components/Button";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="section-shell flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20"
    >
      <div className="max-w-3xl">
        <p className="fade-up text-sm font-medium uppercase tracking-[0.22em] text-teal">
          Portfolio
        </p>
        <h1 className="fade-up-delay font-display mt-4 text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
          {site.name}
        </h1>
        <p className="fade-up-delay-2 mt-5 max-w-xl text-lg text-muted sm:text-xl">
          {site.title}. {site.tagline}
        </p>
        <div className="fade-up-delay-2 mt-10 flex flex-wrap gap-3">
          <Button href="#projects" variant="primary">
            View projects
          </Button>
          <Button href={site.resumePath} variant="secondary" download>
            Download resume
          </Button>
        </div>
      </div>
    </section>
  );
}
