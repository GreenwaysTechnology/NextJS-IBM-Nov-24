// export default async function CachePage(props) {
//     //with caching
//     let data 
//     try {
//         const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
//         data = await response.json()
//         console.log('data' , data)
//         console.log(data.datetime)
//     }
//     catch (err) {
//         console.log(err)
//     }   

//     return <div>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </div>
// }

//without cache
// export default async function CachePage(props) {
//     //without caching
//     const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata', { cache: 'no-store' })
//     const data = await response.json()

//     return <div>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </div>
// }

// 1.As part of fetch api call

// export default async function CachePage(props) {
//     //with caching and revalidation
//     const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata',
//          { next: { revalidate: 10 } })
//     const data = await response.json()

//     return <div>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </div>
// }


//route segment config option
// export const revalidate = 5

// export default async function CachePage(props) {
//     //with caching
//     const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
//     const data = await response.json()
//     return <div>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </div>
// }

//route segement and fetch - fetch will override the route segment configuration

export const revalidate = 5

export default async function CachePage(props) {
    //with caching
    const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata',{ next: { revalidate: 2 } })
    const data = await response.json()
    return <div>
        <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
    </div>
}