'use client'

import { useEffect, useState } from "react"


export default function FetchPost() {
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        const url = 'https://jsonplaceholder.typicode.com/photos'
        const response = await fetch(url)
        const posts = await response.json()
        setPosts(myposts => myposts.concat(posts))
    }
    useEffect(() => {
        fetchPosts();
    }, [])

    return <>
        <h1>Posts- Client Component</h1>
        <ul>
            {posts.map(post => {
                return <li key={post.id}><span>
                    {post.title}
                </span></li>
            })}
        </ul>
    </>
}