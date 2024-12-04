
//dynamic title 

export async function fetchPostsById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await response.json()
    return post
}

//dynamic meta data is supplied
export async function generateMetadata({ params, searchParams }, parent) {
    const myparms = await params
    const id = Number(myparms.id)
    const post = await fetchPostsById(id)
    //return meta data object
    return {
        title: `${post.title}`,
        author: 'Subramanian',
        description: `${post.id} - ${post.title}`
    }
}


export default async function PageDetails({ params }) {
    const myparams = await params
    return <h1>{myparams.id} Post Details</h1>
}