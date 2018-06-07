import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Flat from '../components/flat';

import { setFlats } from '../actions';

class FlatList extends Component {
	componentWillMount() {
		this.props.setFlats();
	}
	// in componentwillmount
	// When the component mounts
	// will trigger the action in redux
	// fetch flats from api
	// reducer will recieve this action and update the redux store
	// need to connect the component to the redux state store
	// with mapStateToProps(state)...
	render() {
		return (
			<div className="flat-list col-sm-7">
				{this.props.flats.map((flat, index) =>  {
					return <Flat flat={flat} key={flat.name} />;
				})}
			</div>
			);
	}
}
// dispatch argumment to triggger action
function mapDispatchToProps(dispatch) {
	return bindActionCreators(
    		{ setFlats: setFlats },
    		dispatch
    		);
	}
// below mapping Redux state to the store
// Here we are returning the updated flats
function mapReduxStateToProps(reduxState) {
	return {
		flats: reduxState.flats
	};
}


export default connect(mapReduxStateToProps, mapDispatchToProps) (FlatList);
// line 9 setFlats-- coming from index.js in actions folder

  // TEMPORARY CODE TO INTEGRATE HTML
  	// 	static defaultProps = {
	// 	flats: [{
	//      	"name": "Charm at the Steps of Montmartre",
	//      	"imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
	//       	"price": 164,
	//       	"priceCurrency": "EUR"
 //    		}]
	// }



