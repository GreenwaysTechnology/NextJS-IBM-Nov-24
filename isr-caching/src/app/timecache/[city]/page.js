// export default async function CachePage(props) {
//     //with caching

//     // const response = await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata',{cache:'force-cache'})
//     // const response = await fetch('http://localhost:8080/api/timezone/Asia/Kolkata', { cache: 'force-cache' })

//     // const response = await fetch('http://localhost:8080/api/timezone/Asia/Kolkata')

//     // const response = await fetch('http://localhost:8080/api/timezone/Asia/Kolkata', { cache: 'force-cache' })
//     // const response = await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata', { cache: 'force-cache' })
//     const response = await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata')
//     const data = await response.json()

//     return <div>
//         <h1>Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
//     </div>
// }

//without cache
// export default async function CachePage(props) {
//     //with caching

//     const response = await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata', { cache: "no-cache" })
//     const data = await response.json()

//     return <div>
//         <h1>Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
//     </div>
// }

// 1.As part of fetch api call

// export default async function CachePage(props) {
//     //with caching and revalidation

//     const response = await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata',
//         { cache: 'force-cache', next: { revalidate: 10 } })
//     const data = await response.json()

//     return <div>
//         <h1>Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
//     </div>
// }


//route segment config option
export const revalidate = 5

export default async function CachePage(props) {
    //with caching and revalidation

    const response = await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata',
        { cache: 'force-cache', next: { revalidate: 10 } })
    const data = await response.json()

    return <div>
        <h1>Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
    </div>
}

//route segement and fetch - fetch will override the route segment configuration

// export const revalidate = 5

// export default async function CachePage(props) {
//     //with caching
//     const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata',{ next: { revalidate: 2 } })
//     const data = await response.json()
//     return <div>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </div>
// }