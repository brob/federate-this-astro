
export const prerender = false;



export async function GET({params}) {
    const data = await fetch(`https://dev.to/api/articles/${params.id}`)
    const body = await data.json()

    // return products based on nextjs return
    return new Response(JSON.stringify(body), {
        headers: {
            'content-type': 'application/json'
        }
    })
}
 


