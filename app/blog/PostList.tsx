import Link from "next/link";

export default function PostList({ posts }: { posts: Array<Post> }) {
    return (
        <ul>
            {posts.map((post: Post) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    );
}