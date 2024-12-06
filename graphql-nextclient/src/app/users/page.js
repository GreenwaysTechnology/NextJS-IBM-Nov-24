import { gql } from "@apollo/client"
import { getClient } from "../lib/client"

//Declare Query
const query = gql`query {
    users {
      id
      name
      status
      points
      
    }
  }
`

export default async function UsersPage() {
    const { data: { users } } = await getClient().query({ query })

    return <div>
        <h1>Users Info From Graphql Server</h1>
        <ul>
            {users.map(user => {
                return <li>
                    <h3>{user.name} {user.status ? 'Available' : 'Not Available'}</h3>
                </li>
            })}
        </ul>
    </div>
}