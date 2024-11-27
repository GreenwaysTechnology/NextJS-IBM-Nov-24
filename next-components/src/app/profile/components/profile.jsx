export const Profile = ({ id = 0, name = 'name', status = false }) => {
    return <div>
        <h1>Id {id}</h1>
        <h2>Name {name}</h2>
        <h3>Status {status ? 'Available' : 'Not Available'}</h3>
    </div>
}