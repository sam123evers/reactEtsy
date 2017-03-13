import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import Banner from './views/components/banner'
import HomePage from './views/homePage'
import DetailPage from './views/detailPage'
import SearchPage from './views/searchPage'
import {ProductCollection} from './models/productModel'
import {ItemModel} from './models/productModel'


const app = function() {
	var EtsyRouter = Backbone.Router.extend({
		routes: {
			"" : "handleRedirect",
			"home" : "handleHome",
			"search/:query" : "handleProductSearch",
			"details/:listing_id" : "handleDetailPage"
		},

		handleRedirect: function() {
			location.hash = 'home'
		},

		handleHome: function() {
			console.log('handlehome function')
			var collectionInstance = new ProductCollection()
			var promise = collectionInstance.fetch({
				dataType: 'jsonp',
				data: {
					includes: "Images,MainImage",
					'api_key' : collectionInstance._key
				}
			})

			promise.then(function(){
				ReactDOM.render(<HomePage productColl={collectionInstance}/>, document.querySelector('.container'))
			})
		},

		handleProductSearch: function(query) {
			console.log('product search function')
			var collectionInstance = new ProductCollection()

			var promise = collectionInstance.fetch({
				dataType: 'jsonp',
				data: {
					keywords: query,
					includes: "Images,MainImage",
					'api_key' : collectionInstance._key
				}
			})

			promise.then(function(){
				ReactDOM.render(<HomePage productColl={collectionInstance} />, document.querySelector('.container'))
			})
		},

		handleDetailPage: function(listing_id) {
			console.log('detailsPage function')
			var modelInstance = new ItemModel()
			var promise = modelInstance.fetch({
				url: "https://openapi.etsy.com/v2/listings/" + listing_id + ".js",
				dataType: 'jsonp',
				data: {
					includes: "Images,MainImage",
					'api_key' : modelInstance._key
				}
			})

			promise.then(function() {
				ReactDOM.render(<DetailPage itemModel={modelInstance} />, document.querySelector('.container'))
			})
		},
	})
	new EtsyRouter
	Backbone.history.start()
}



// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..