import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
};

const blogDirectory = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(blogDirectory, file), "utf8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ""),
        date: String(data.date ?? ""),
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(blogDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    content,
  };
}

export function getLatestPosts(count = 2): BlogPost[] {
  return getAllPosts().slice(0, count);
}
