"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Post {
  slug: string;
  title: string;
  thumbnail: string;
  date: string;
  excerpt: string;
  tag: string;
}

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  const [selectedTag, setSelectedTag] = useState("All");
  const allTags = ["All", ...new Set(posts.flatMap((post) => post.tag))];

  const filteredPosts =
    selectedTag === "All"
      ? posts
      : posts.filter((post) => post.tag.includes(selectedTag));

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="flex ">
      <div className="md:min-w-3xl rounded-2xl pr-10 sm:w-xl w-md max-[380px]:w-sm">
        {sortedPosts.map((item) => (
          <Link key={item.slug} href={`/blog/${item.slug}`}>
            <div className="group flex justify-between py-3 hover:opacity-80 cursor-pointer">
              <span className="text-xl text-slate-100 font-semibold whitespace-pre-wrap w-[500px]">
                {item.title} <br />
                <p className="font-normal text-sm pt-1 text-gray-400">
                  {item.excerpt}
                </p>
                <p className="font-light text-[13px] text-gray-400">
                  {item.date}
                </p>
              </span>

              <div className="overflow-hidden rounded-sm">
                <Image
                  src={item.thumbnail}
                  width={180}
                  height={100}
                  alt="thumbnail"
                  className="rounded-sm opacity-85 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <aside className="border-l border-gray-400 p-4 max-lg:hidden">
        <p className="text-slate-100">태그</p>
        <div className="flex flex gap-2 mb-8 overflow-x-auto">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`
              p-2 py-1.5 rounded-2xl text-sm font-medium transition-colors
              ${
                selectedTag === tag
                  ? "bg-slate-700 text-slate-100" // 선택되었을 때 (진한 색)
                  : "bg-gray-300 text-gray-800 hover:bg-gray-200" // 평소 (회색)
              }
            `}
            >
              {tag}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
