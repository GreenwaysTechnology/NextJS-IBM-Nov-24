import { NextResponse } from "next/server"

//findById,update,delete
const url = `https://jsonplaceholder.typicode.com/albums`

export async function GET(request, { params: { id } }) {
    try {
        const newId = parseInt(id)
        const response = await fetch(`${url}/${newId}`)
        const album = await response.json()
        if (album.id) {
            return NextResponse.json(album)
        }
        return NextResponse.json({ message: `Album for ${newId} is not Found` })
    }
    catch (err) {
        return NextResponse.json({ err })
    }
}

//update
export async function PUT(request, { params: { id } }) {
    try {
        const newId = parseInt(id)
        const { title } = await request.json()
        if (title) {
            const response = await fetch(`${url}/${newId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title })
            })
            const updatedAlbum = await response.json()
            return NextResponse.json(updatedAlbum)
        }

    }
    catch (err) {
        return NextResponse.json({ err })
    }
}

//delete
export async function DELETE(request, { params: { id } }) {
    try {
        const newId = parseInt(id)
        const response = await fetch(`${url}/${newId}`, {
            method: 'DELETE'
        })
        const album = await response.json()
        return NextResponse.json(album)
    }
    catch (err) {
        return NextResponse.json({ err })
    }
}