import { ContactForm } from "@/components/ContactForm";
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
      <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="max-w-md text-muted">
            Have a question, opportunity, or project in mind? Send a message or
            reach me through any of the links below.
          </p>
          <ul className="mt-8 space-y-5">
            {contacts.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
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
        </div>
        <div className="border border-line bg-surface p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-ink">Send a message</h3>
          <p className="mt-2 text-sm text-muted">
            Submissions go straight to my inbox.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
