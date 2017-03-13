import Backbone from 'backbone'

export var ProductCollection = Backbone.Collection.extend ({
	url: "https://openapi.etsy.com/v2/listings/active.js",
	_key: "ds4wn63vlswhs4g9k4nercba",
	parse: function(apiResponse) {
		// console.log(apiResponse)
		return apiResponse.results
	}
}) 

export var ItemModel = Backbone.Model.extend ({
	
	_key: "ds4wn63vlswhs4g9k4nercba",
	parse: function(apiResponse) {
		return apiResponse.results[0]
	}
})