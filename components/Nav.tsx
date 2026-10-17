"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { site } from "@/content/site";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = links.map((link) => link.href.replace("/#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[rgba(238,243,245,0.82)] backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a
          href="/#top"
          className="font-display text-lg tracking-tight text-ink transition-colors hover:text-teal"
        >
          {site.name}
        </a>
        <nav
          className="flex max-w-[55%] items-center gap-0.5 overflow-x-auto md:max-w-none"
          aria-label="Primary"
        >
          {links.map((link) => {
            const id = link.href.replace("/#", "");
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative shrink-0 px-2.5 py-2 text-xs transition-colors sm:px-3 sm:text-sm ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-teal-bright transition-transform duration-300 sm:inset-x-3 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>
        <Button
          href={site.resumePath}
          variant="ink"
          className="px-3.5 py-2"
          download
        >
          Resume
        </Button>
      </div>
    </header>
  );
}
