import { NextResponse } from "next/server"

const url = `https://jsonplaceholder.typicode.com/albums`


export async function GET(request) {
    try {
        const response = await fetch(url)
        const albums = await response.json()
        return NextResponse.json(albums)
    }
    catch (err) {
        return NextResponse.json({ err })
    }
}

//create new Album - post

export async function POST(request) {
    try {
        //read album from the user
        const album = await request.json()
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(album)
        })
        const newAlbum = await response.json()
        //send response back to the client
        return new NextResponse(JSON.stringify(newAlbum), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
                'url': '/api/albums/create'
            }
        })
    }
    catch (err) {
        return new NextResponse({ err }, { status: 500 })
    }
}