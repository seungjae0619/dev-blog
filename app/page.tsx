import { getAllPosts } from "@/lib/posts";
import PostList from "@/components/PostList";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-5xl m-auto p-5">
      <PostList posts={posts} />
    </main>
  );
}
