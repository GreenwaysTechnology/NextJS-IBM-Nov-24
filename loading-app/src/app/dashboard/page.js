import React, { Suspense } from "react"


const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 8000, import('../components/greeter'))
    })
})

const Greeter = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10000, import('../components/greeter'))
    })
})

export default function DashboardPage() {
    return <div>
        {/* Static Content */}
        <h1>Static Content</h1>
        {/* Dynamic content */}
        <Suspense fallback={<h1>Welcome is loading...</h1>}>
            <Welcome />
        </Suspense>
        {/* Static Content */}
     
        <section>
            <p>This is some static content</p>
        </section>
        {/* Dynamcic Content */}
        <Suspense fallback={<h1>Greeter is loading...</h1>}>
            <Greeter />
        </Suspense>
    </div>

}