
export async function fetchAlbums() {
    const url = 'http://localhost:3000/api/albums'
    const response = await fetch(url)
    const albums = response.json()
    return albums
}
export default async function AlbumPage() {
    const albums = await fetchAlbums()
    return <>
        <ul>
            {albums.map(album => <li key={album.id}>{album.title}</li>)}
        </ul>
    </>
}