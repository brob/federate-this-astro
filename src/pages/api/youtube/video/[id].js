export const prerender = false;


export async function GET(request) {
    const {params, url} = request
    // TODO Make perPage work. current issue is YouTube not accepting the number from parameter as the right type (string or number)
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${params.id}&key=${import.meta.env.YOUTUBE_KEY}`)
    const body = await data.json()
    const videoData = body.items[0].snippet

 return new Response(JSON.stringify({data: videoData}), {
    headers: {
        'content-type': 'application/json'
    }
})
}