import Link from "next/link"
import TODOS from "../mock-data/todos"

export default function TodosMasterPage() {
    return <div>
        <ul>
            {TODOS.map(todo => {
                return <li key={todo.id}>
                   <Link href={`/todos/${todo.id}`}>{todo.title}</Link> 
                </li>
            })}
        </ul>
    </div>
}