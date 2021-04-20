import React, { useState, useEffect } from "react";

function ResetButtons(props) {
	const [inputRows, setInputRows] = useState(props.dims[0]);
	const [inputColls, setInputColls] = useState(props.dims[1]);

	const handleSubmit = (event) => {
		event.preventDefault();
		let dims = [parseInt(inputRows), parseInt(inputColls)];
		props.setDims(...[dims]);
	};

	const handleRowChange = (event) => {
		setInputRows(event.target.value);
	};

	const handleCollChange = (event) => {
		setInputColls(event.target.value);
	};

	return (
		<form className="resetButtonsGrid">
			<div className="inputGrid">
				<label>
					<input
						onChange={(event) => handleRowChange(event)}
						type="number"
						value={inputRows}
						min="2"
						max="12"
					/>
				</label>
				X
				<label>
					<input
						onChange={(event) => handleCollChange(event)}
						type="number"
						value={inputColls}
						min="2"
						max="12"
					/>
				</label>
			</div>
			<input
				onClick={(event) => handleSubmit(event)}
				type="submit"
				value="Reset"
			/>
		</form>
	);
}

export default ResetButtons;
