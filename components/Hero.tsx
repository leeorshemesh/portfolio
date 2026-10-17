import Image from "next/image";
import { Button } from "@/components/Button";
import { SocialIcons } from "@/components/SocialIcons";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="section-shell flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 sm:py-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="fade-up text-sm font-medium uppercase tracking-[0.22em] text-teal">
            {site.title}
          </p>
          <h1 className="fade-up-delay font-display mt-4 text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Hello, my name is {site.name}
          </h1>
          <p className="fade-up-delay-2 mt-5 text-lg text-muted sm:text-xl">
            {site.tagline}
          </p>
          <div className="fade-up-delay-2 mt-10 flex flex-wrap gap-3">
            <Button href="/#contact" variant="primary">
              Contact me
            </Button>
            <Button href={site.resumePath} variant="ink" download>
              Download resume
            </Button>
          </div>
          <SocialIcons className="fade-up-delay-2 mt-8" />
        </div>

        <div className="fade-up-delay relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute inset-[-6%] -z-0 rounded-[42%_58%_55%_45%/48%_42%_58%_52%] bg-gradient-to-br from-teal/35 via-teal-bright/25 to-ink/10"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(12,31,46,0.18)]">
            <Image
              src="/images/portrait.jpg"
              alt={`${site.name} smiling outdoors`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover object-[50%_18%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
