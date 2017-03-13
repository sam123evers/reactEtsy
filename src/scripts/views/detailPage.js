import React from 'react'
import Banner from './components/banner.js'

var DetailPage = React.createClass({
	render: function() {
		console.log('Render Function in detailPage')
		console.log(this.props.itemModel)
		return (
			<div className="detail-page">
				<Banner />
				<div key={this.props.itemModel.get('listing_id')}>
					<p className="title">{this.props.itemModel.get('title')}</p>
					<img src={this.props.itemModel.get('MainImage').url_570xN} />
					
					<p className="description">{this.props.itemModel.get('description')}</p>
					<p className="price">${this.props.itemModel.get('price')}</p>
				</div> 
			</div>
		)

	},
})

export default DetailPage