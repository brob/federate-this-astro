import {products} from '../../../data/productData.js'


export function getStaticPaths() {
	return products.map((item) => {
		return { params: { id: item.id } };
	});
}

export async function GET(request) {
    const product = products.find((item) => item.id === parseInt(request.params.id))
    return new Response(JSON.stringify({data: product}), {
        headers: {
            'content-type': 'application/json'
        }
    })

}
 


