export async function fetchTodosByid(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    return response.json()
}
//this function is used to populate details page during build phase
export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    return response.json()
}
export default async function TodoDetailPage(props) {
    const params = await props.params
    const todo = await fetchTodosByid(Number(params.id))
    return <div>
        <h2>id {todo.id}</h2>
        <p>title {todo.title}</p>
        <p>Status {todo.completed ? 'Ok' : 'Not Completed'}</p>
    </div>
}
//override the function which is called during build phase
export async function generateStaticParams() {
    const todos = await fetchTodos()
    //generate html pages for all 200 todos, if you have 200 todos, 200 html pages/files to be
    //generated

    return todos.map(todo => {
        //based on id only the pages are prepared, id value must be string
        const id = todo.id.toString()
        return {
            //id:id
            id
        }
    })
}