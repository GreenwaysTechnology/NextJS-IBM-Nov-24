'use client'

import { useRouter } from "next/navigation"

export function DashboardNavigator() {
    const router = useRouter()
    return <div>
        <button onClick={() => {
            router.push('/products')
        }}>Products</button>
         <button onClick={() => {
            router.push('/about')
        }}>About</button>
    </div>
}