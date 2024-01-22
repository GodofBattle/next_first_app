import PostList from "./PostList";

export default function Blog() {
    const posts: Array<Post> = [
        { id: '1', slug: '1', title: '일번' },
        { id: '2', slug: '2', title: '이번' },
        { id: '3', slug: '3', title: '삼번' },
        { id: '4', slug: '4', title: '사번' },
    ];

    return (
        <div>
            {PostList({ posts })}
        </div>
    );
}