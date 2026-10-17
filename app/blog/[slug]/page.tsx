import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Nav } from "@/components";
import { Markdown } from "@/components/Markdown";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} · Leeor Shemesh`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <article className="section-shell py-16 sm:py-20">
          <Link
            href="/blog"
            className="text-sm font-medium text-teal transition-colors hover:text-teal-bright"
          >
            ← All posts
          </Link>
          <p className="mt-8 text-sm text-muted">{formatDate(post.date)}</p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl tracking-tight text-ink sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{post.description}</p>
          <div className="mt-10 max-w-3xl border-t border-line pt-2">
            <Markdown content={post.content} />
          </div>
        </article>
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
