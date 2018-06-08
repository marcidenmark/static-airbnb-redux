import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

class Flat extends Component {
	handleClick = () => {
		// debugger
		this.props.selectFlat (this.props.flat);
		//redux action
	};

	render () {
		const style = {
			backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')`
		}
		let classes = "flat card";
		if ( this.props.flat === this.props.selectedFlat ) {
			classes += " flat-selected ";
		}

		return (
		<div className={classes} style={style}
			onClick={this.handleClick} >
			<div className="card-description">
			    <h2>{this.props.flat.name}</h2>
			    <p>{this.props.flat.price} {this.props.flat.priceCurrency}</p>
			</div>
		</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ selectFlat: selectFlat } ,
		dispatch
		);
}

 function mapStateToProps(State) {
	return {
		selectedFlat: State.selectedFlat
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Flat);


			// background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://kitt.lewagon.com/placeholder/cities/shanghai'
			// backgroundImage: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://kitt.lewagon.com/placeholder/cities/shanghai'
			// the url is a variable this is why you need to to the backticks.
