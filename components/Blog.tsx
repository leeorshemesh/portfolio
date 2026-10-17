import Link from "next/link";
import { Button } from "@/components/Button";
import { getLatestPosts } from "@/lib/blog";

export function Blog() {
  const posts = getLatestPosts(2);

  return (
    <section id="blog" className="section-shell scroll-mt-24 py-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal">
            Blog
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-ink sm:text-4xl">
            Notes & writeups
          </h2>
        </div>
        <Button href="/blog" variant="secondary" className="self-start sm:self-auto">
          View all posts
        </Button>
      </div>

      <ul className="mt-10 divide-y divide-[color:var(--line)] border-y border-line">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block py-8 transition-colors hover:bg-[rgba(20,184,166,0.06)] md:px-4"
            >
              <p className="text-sm text-muted">{formatDate(post.date)}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink transition-colors group-hover:text-teal">
                {post.title}
              </h3>
              <p className="mt-2 max-w-2xl text-ink-soft">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function formatDate(date: string) {
  if (!date) return "";
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
