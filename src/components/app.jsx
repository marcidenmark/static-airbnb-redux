import React, { Component } from 'react';
import Map from '../containers/map';
import FlatList from '../containers/flat_list';

class App extends Component {
	render () {
		return (
		<div className="row">
			<FlatList />
			<Map />
		</div>

		);
	}

}


export default App;
