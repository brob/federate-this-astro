import {products} from '../../products/productData.js'
import {reviews} from '../reviewData'

export function getStaticPaths() {
	return products.map((item) => {
		return { params: { productId: item.id } };
	});
}

export async function GET(request) {
    const review = reviews.find((item) => item.product === parseInt(request.params.productId))
    return new Response(JSON.stringify(review), {
        headers: {
            'content-type': 'application/json'
        }
    })

}
 


