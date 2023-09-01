import {reviews} from '../../../data/reviewData'

export async function GET(request) {

    return new Response(JSON.stringify(reviews), {
        headers: {
            'content-type': 'application/json'
        }   
    })
}
 


