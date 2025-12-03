import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getAllPosts() {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

  const allPosts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const { metadata } = await import(`@/posts/${file}`);
      return { slug, ...metadata };
    })
  );

  return allPosts;
}

export function getPostHeadings(slug: string) {
  const filePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);

  const headingRegex = /^(#{1,6})\s+(.*)$/gm;

  const headings = [];
  let match;
  let id = 0;

  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      id: ++id,
      level: match[1].length,
      text: match[2],
    });
  }

  return headings;
}
