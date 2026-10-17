import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="section-shell flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {site.name}
        </p>
        <p>{site.location}</p>
      </div>
    </footer>
  );
}
