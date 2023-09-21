import {reviews} from '../../../data/reviewData'

export const prerender = false;

export async function GET(request) {
    const review = reviews.find((item) => item.id === parseInt(request.params.id))

    return new Response(JSON.stringify({data: review}), {
        headers: {
            'content-type': 'application/json'
        }
    })

}
 

