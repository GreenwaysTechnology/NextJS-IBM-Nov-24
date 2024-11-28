import Image from "next/image"

export async function getPhotoById(id) {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    const response = await fetch(url)
    const photo = await response.json()
    return photo
}

export default async function PhotosDetailsPage(props) {
    const id = Number(props.params.id)
    const photo = await getPhotoById(id)
    return <div>
        <h2>Id : {photo.id}</h2>
        <h2>AlbumId {photo.albumId}</h2>
        <p>{photo.title}</p>
        <p>{photo.thumbnailUrl}</p>
        <Image
            src={photo.thumbnailUrl}
            width={150}
            height={150}
            alt="Picture"
        />
    </div>
}