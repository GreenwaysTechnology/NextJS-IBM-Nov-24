import { revalidate } from "next/cache"
import { NextResponse } from "next/server"

export async function GET(reqest) {
    //get the path
    const path = request.nextUrl.searchParams.get('path') || '/timecache/Kolkata'
    revalidate(path)
    console.log('revalided', path)
    return NextResponse.json({ revalidate: true, now: new Date.now(), cache: 'no-store' })
}