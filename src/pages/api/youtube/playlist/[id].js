export const prerender = false;


export async function GET(request) {
    const {params, url} = request
    // TODO Make perPage work. current issue is YouTube not accepting the number from parameter as the right type (string or number)

    const data = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${params.id}&key=${import.meta.env.YOUTUBE_KEY}&maxResults=50`)
    const body = await data.json()

 // return products based on nextjs return
 return new Response(JSON.stringify({data: body}), {
    headers: {
        'content-type': 'application/json'
    }
})
}