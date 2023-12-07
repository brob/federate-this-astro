export const prerender = false;


// https://www.omdbapi.com/?i=tt6791350&apikey=818aae1c

export async function GET({ request, params }) {
    // get params from request.url
    const url = new URL(request.url)
    const {title=false} = Object.fromEntries(url.searchParams)
    const searchQuery = title ? `t` : 'i'

    const data = await fetch(`https://www.omdbapi.com/?${searchQuery}=${params.id}&apikey=818aae1c`)
    const body = await data.json()

    // return products based on nextjs return
    return new Response(JSON.stringify({data: body}), {
        headers: {
            'content-type': 'application/json'
        }
    })
}
 