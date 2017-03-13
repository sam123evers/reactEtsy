import React from 'react'
import Banner from './components/banner'

var HomePage = React.createClass({
	render: function() {
		console.log('this.props.productColl.models: ', this.props.productColl.models)
		console.log(this.props.productColl.models[0].get('MainImage'))
		return(
			<div className="home-page">
				<Banner />
				<div className="listings">
					{this.props.productColl.models.map(function(model){
						return ( 
							<div className="singleItem" key={model.get('listing_id')}> 
								
								<a href={`#/details/${model.get('listing_id')}`}>
									<img src={model.get('MainImage').url_170x135} />
									<p>{model.get('title')}</p>
								</a>
							</div>
						)

					})}
				</div>
			</div>
		)
	}
})


export default HomePage