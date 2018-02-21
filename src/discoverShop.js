const config = require('./config.js');
const YaaS = require('./yaas_api/yaas.js');

// we don't need any scopes here
var scopes = "";
var yaas = new YaaS();

function discoverShop(product){
	yaas.init(config.CLIENT_ID, config.CLIENT_SECRET, scopes, config.PRODUCT_ID);
	yaas.setLanguage('kr');

	return yaas.category.getCategory()
		.then(results =. {
			if(results.length === 0){
				return [{
					type: 'quickReplies',
					content: {
						title: 'Sorry, but I could not find any results for your request :('
						buttons: [{ title: 'Start over', value: 'Start over'}],
					},
				}];
			}

			const cards = results.slice(0,10).map(product => ({
				name: product.name,
				
			})

			)
		}

	)
}


result2 = yaas.category.getCategory()
	.then(response => {
		for(var key in  response.body[0].assignments){
			id = response.body[0].assignments[key].ref.id
			result = yaas.productdetials.getProductdetailsId(id)
				.then(res => console.log(res))
				.catch(errorResponse => console.log(errorResponse));
		}
	}).catch(errorResponse => console.log(errorResponse));

// create a new instance


// and fill it with our config and scopes

// now we can build an object that includes query parameter
// we put the sku or product number of our product here
//  in the end, this will be reformatted to a string included in the url
var query = {
	q : {
		sku : "mil01"
	}
};

// now, we start the request
// we use Promise for that - they enable use to do some easy-to-read functional programming

/*
result = yaas.productdetials.getProductdetails()
//.then(response => console.log(JSON.stringify(response.body[0].product, null, "       ")))
.then(response => {
	product = response.body[0].product;
	price = response.body[0].prices;
	console.log(JSON.stringify(response, null, "       "));
	//console.log(JSON.stringify(prices, null, "       "));
})
.catch(errorResponse => console.log(errorResponse));
*/




//product = result.body;
//price = result.body;

// yaas.product.getProduct(theProductId)
// yaas.cart.deleteCart(cartId)
//
//
// var reqParams = {
//     pageNumber: 1,
//     pageSize: 10,
//     totalCount: true
// };
// yaas.document.getAll(clientApplicationId, documentType, reqParams).then(
//     function(response) {
//         console.log('Fetched', response.data.length, 'of', response.headers['hybris-count'], 'documents.');
//     },
//     function(err) {
//         console.error('Error: ', err);
//     }
// );
