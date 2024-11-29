import FetchPost from "./components/FetchPost";
import FetchPostsUsingSWR from "./components/PostClientUsingSWR";

export default function PostPage(){
    return <>
        {/* <FetchPost/> */}
        <FetchPostsUsingSWR/>
    </>
}