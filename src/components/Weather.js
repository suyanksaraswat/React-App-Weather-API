import React from "react";

class Weather extends React.Component {
	render() {
		return(
			<div>
				{ this.props.temprature && <p>Temprature: { this.props.temprature }</p>};
			</div>
		);
	}
}

export default Weather;