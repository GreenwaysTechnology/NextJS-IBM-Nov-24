// 'use client'

import { createUser } from "@/app/actions/userActions";

// export default function CreateUserForm() {

//     async function handleSubmit(event) {
//         event.preventDefault();

//         const data = {
//             name: event.target.name.value,
//             email: event.target.email.value,
//         };

//         try {
//             // const result = await createUser(data);
//             // alert(`User created: ${result.message}`);
//             await createUser(data);
//             alert(`User created`);
//         } catch (error) {
//             alert(`Error: ${error.message}`);
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="name" placeholder="Name" required />
//             <input type="email" name="email" placeholder="Email" required />
//             <button type="submit">Create User</button>
//         </form>
//     );
// }
export default function CreateUserForm() {
    return (
        <form action={createUser} method="POST">
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" required />
            </div>

            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

