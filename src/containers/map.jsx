import React from "react";
import GoogleMapReact from "google-map-react";

import { connect } from "react-redux";

const Map = (props) => {
  let marker = null;
  let center = { lat: 48.856614, lng: 2.352222 };

  if (props.selectedFlat) {
    marker = (
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "red",
          borderRadius: "50%"
        }}
        lat={props.selectedFlat.lat}
        lng={props.selectedFlat.lng}
      />
    );
    center = {
      lat: props.selectedFlat.lat,
      lng: props.selectedFlat.lng
    };
  }

  return (
    <div className="col-sm-5" style={{ height: "100vh" }}>
      <GoogleMapReact center={center} defaultZoom={15}>
        {marker}
      </GoogleMapReact>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

export default connect(mapStateToProps)(Map);

//className... style={{height: '100vh'}}
//how you inline style in a jsx file-- it's an object in JS.
//the style properties are the css
// Or using a const.
		// const style = {
		// 	height: "100vh"
		// };
