import {reviews} from '../../../data/reviewData'


export async function GET(request) {

    const params = new URLSearchParams(request.url.searchParams)
    const orderByDate = params.get('orderByDate')
    let sortedReviews = [...reviews]
    switch (orderByDate) {
        case 'asc':
            sortedReviews.sort((a, b) => {
                return new Date(a.date) - new Date(b.date)  
            })
            break;
        case 'desc':
            sortedReviews.sort((a, b) => {
                return new Date(b.date) - new Date(a.date)
            })
            break;
        default:
            break;
    }



    return new Response(JSON.stringify({data: sortedReviews}), {
        headers: {
            'content-type': 'application/json'
        }   
    })
}
 


