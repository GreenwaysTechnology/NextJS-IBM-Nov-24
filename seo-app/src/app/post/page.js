import Link from "next/link"

export const metadata = {
    title: 'Post Page'
}
export async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return posts
}

export default async function Post() {
    const posts = await fetchPosts();
    return <div>
        <h1>Post Page</h1>
        <ul>
            {
                posts.map(post => <li key={post.id}><Link href={`/post/${post.id}`}>{post.title}</Link></li>)
            }
        </ul>
    </div>
}