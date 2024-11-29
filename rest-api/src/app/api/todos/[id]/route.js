import { TODOS } from "@/app/mock-data/todos";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
    const response = TODOS.filter(todo => todo.id === parseInt(id))
    if (response.length != 0) {
        return NextResponse.json(response)
    }
    return NextResponse.json({ message: 'No Todos Found' })

}