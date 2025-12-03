import { getAllPosts, getPostHeadings } from "@/lib/posts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(`@/posts/${slug}.mdx`);

  const headings = getPostHeadings(slug);

  return (
    <div className="m-auto w-2xl pt-5">
      <div className="py-2">
        <span className="text-5xl font-bold">{metadata.title}</span>
        <p className="pt-2 text-[15px] text-gray-400">{metadata.date}</p>
      </div>
      <div className="flex">
        <article className="markdown w-[700px]">
          <Post />
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
