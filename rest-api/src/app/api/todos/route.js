import { TODOS } from "@/app/mock-data/todos"; //import alise syntax
import { NextResponse } from "next/server";

//Return all todos

export async function GET(request) {
    //send response
    return NextResponse.json(TODOS)
}

//post 
export async function POST(request) {
    //read payload
    const payload = await request.json()
    console.log(payload)
    TODOS.concat(payload)
    return NextResponse.json({ message: 'saved' })

}