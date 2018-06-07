import React, { Component } from 'react';

class Flat extends Component {
	render () {
		const style = {
			backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')`
		}
		return (
		<div className="card flat" style={style} >
			<div className="card-description">
			    <h2>{this.props.flat.name}</h2>
			    <p>{this.props.flat.price} {this.props.flat.priceCurrency}</p>
			</div>
		</div>
		);
	}

}

export default Flat;

			// background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://kitt.lewagon.com/placeholder/cities/shanghai'
			// backgroundImage: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://kitt.lewagon.com/placeholder/cities/shanghai'
			// the url is a variable this is why you need to to the backticks.
