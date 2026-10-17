import { site } from "@/content/site";

const contacts = [
  { label: "Email", href: `mailto:${site.email}`, value: site.email },
  { label: "GitHub", href: site.github, value: "leeorshemesh" },
  {
    label: "LinkedIn",
    href: site.linkedin,
    value: "leeor-shemesh",
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 py-20">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal">
        Contact
      </p>
      <h2 className="font-display mt-3 text-3xl tracking-tight text-ink sm:text-4xl">
        Let&apos;s connect
      </h2>
      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {contacts.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="block border-t border-line pt-4 transition-colors hover:border-teal"
            >
              <span className="text-sm font-medium uppercase tracking-[0.14em] text-muted">
                {item.label}
              </span>
              <span className="mt-2 block text-ink hover:text-teal">
                {item.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
