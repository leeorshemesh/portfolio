import Link from "next/link";
import { Footer, Nav } from "@/components";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog · Leeor Shemesh",
  description: "Notes and writeups on projects, workshops, and computer science.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="section-shell py-16 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal">
            Blog
          </p>
          <h1 className="font-display mt-3 text-4xl tracking-tight text-ink sm:text-5xl">
            All posts
          </h1>
          <ul className="mt-12 divide-y divide-[color:var(--line)] border-y border-line">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block py-8 transition-colors hover:bg-[rgba(20,184,166,0.06)] md:px-4"
                >
                  <p className="text-sm text-muted">{formatDate(post.date)}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-ink transition-colors group-hover:text-teal">
                    {post.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-ink-soft">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
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
