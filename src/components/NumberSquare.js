import React from "react";

function NumberSquare(props) {
	var output;
	if (props.number != 0) {
		output = (
			<div className="tile" onClick={() => props.handleClick(props.number)}>
				<p>{props.number}</p>
			</div>
		);
	} else {
		output = <div></div>;
	}
	return output;
}

export default NumberSquare;
