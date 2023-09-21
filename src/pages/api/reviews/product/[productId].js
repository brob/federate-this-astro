import {products} from '../../../../data/productData.js'

import {reviews} from '../../../../data/reviewData'

export const prerender = false;


function isId(value) {
    const id = parseInt(value)
    if (isNaN(id)) {
        return false
    }
    return true
}

export async function GET(request) {
    const key = (isId(request.params.productId)) ? 'product' : 'productSlug'
    const id = (isId(request.params.productId)) ? parseInt(request.params.productId) : request.params.productId

    const review = reviews.filter((item) => item[key] === id)
    return new Response(JSON.stringify({data: review}), {
        headers: {
            'content-type': 'application/json'
        }
    })

}
 


