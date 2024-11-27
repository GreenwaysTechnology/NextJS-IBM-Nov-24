'use client'

import { useState } from "react"
import { Comments } from "./comments"
const Review = props => {
    const [like, setLike] = useState(0)
    return <div>
        <h1>Like {like}</h1>
        <button onClick={() => {
            setLike(like + 1)
        }}>+</button>
        {/* Use Server Component */}
        <Comments/>
    </div>
}
export { Review }