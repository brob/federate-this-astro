import {products} from '../../../data/productData.js'
// make GET route for nextjs

export async function GET(request) {

    return new Response(JSON.stringify({data: products}), {
        headers: {
            'content-type': 'application/json'
        }
    })

}
 


