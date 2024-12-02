
export default function shopPage({ params }) {
    const { slug } = params;  // 'slug' is an array of the captured path segments

    // Handling different URL paths:
    if (slug.length === 1) {
        return <div>Blog Category: {slug[0]}</div>;
    }
    // const categories = params
    //     return <div>
    //         <h1>Category Page</h1>
    //         {JSON.stringify(categories)}
    //     </div>
    if (slug.length === 2) {
        return (
            <div>
                Blog Post: {slug[1]} under Category: {slug[0]}
            </div>
        );
    }

    if (slug.length === 3) {
        return (
            <div>
                Blog Post: {slug[2]} by Author: {slug[0]} in Category: {slug[1]}
            </div>
        );
    }
}