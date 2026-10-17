import { Button } from "@/components/Button";
import { site } from "@/content/site";

export function Resume() {
  return (
    <section id="resume" className="section-shell scroll-mt-24 py-20">
      <div className="border border-line bg-surface px-6 py-10 sm:px-10">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal">
          Resume
        </p>
        <h2 className="font-display mt-3 text-3xl tracking-tight text-ink sm:text-4xl">
          Download the full PDF
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          One-page PDF with education, experience, projects, and skills — ready
          to share with recruiters and collaborators.
        </p>
        <Button href={site.resumePath} variant="ink" className="mt-8" download>
          Download resume
        </Button>
      </div>
    </section>
  );
}
