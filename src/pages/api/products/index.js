import {products} from './productData.js'
// make GET route for nextjs

export async function GET(request) {

    return new Response(JSON.stringify(products), {
        headers: {
            'content-type': 'application/json'
        }
    })

}
 


