import { NextResponse } from "next/server"
import { prisma } from "@/app/lib/prisma"

//get all users
export async function GET() {
    try {
        const users = await prisma.user.findMany()
        return NextResponse.json(users)
    }
    catch (err) {
        return NextResponse.json({ err })
    }
}

//save 
export async function POST(request) {
    try {
        const user = await request.json()
        const response = await prisma.user.create({
            data: user
        })
        return new NextResponse(JSON.stringify(response), {
            status: 201, headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (err) {
        return NextResponse.json({ err })
    }
}