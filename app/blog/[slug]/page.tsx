import { getAllPosts, getPostHeadings } from "@/lib/posts";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(`@/posts/${slug}.mdx`);

  return (
    <div className="m-auto md:w-[720px] pt-5  sm:w-[540px] w-[390px]">
      <div className="py-2">
        <span className="text-5xl font-bold">{metadata.title}</span>
        <p className="pt-1 text-[15px] text-gray-400">{metadata.date}</p>

        <Image
          src={metadata.thumbnail}
          width={720}
          height={100}
          alt="thumbnail"
          className="rounded-sm mt-3 opacity-95 "
        />

        <hr className="my-8 border-slate-200" />
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
