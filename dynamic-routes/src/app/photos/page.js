import Link from "next/link"

//function to fetch data
export async function fetchPhotos() {

    const url = `https://jsonplaceholder.typicode.com/photos`
    try {
        const response = await fetch(url)
        const photos = await response.json()
        return photos
    }
    catch (err) {
        console.log(err)
    }

}


export default async function PhotosPage() {
    //invoke api call
    const photos = await fetchPhotos()
    return <div>
        <h1>Photos Master Page</h1>
        <ul>
            {
                photos.map(photo => {
                    return <li key={photo.id}>
                        <Link href={`/photos/${photo.id}`}>{photo.title}</Link>
                    </li>
                })
            }
        </ul>
    </div>
}