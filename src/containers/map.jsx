import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
	render () {
		let marker = null;
		let center = { lat: 48.856614, lng: 2.352222 };

	return (
		<div className="col-sm-5" style={{height: '100vh'}}>
			<GoogleMapReact
				center={center}
				defaultZoom={15}>
				{marker}
        		</GoogleMapReact>
		</div>
	);
	}
}

export default Map;
//line 5 also js--
//how you inline style in a jsx file
//the style properties are the css
//line 9 style is js.
//
		// const style = {
		// 	height: "100vh"
		// };
