import "./App.css";
import React, { useState, useEffect } from "react";
import NumberSquare from "./components/NumberSquare";
import ResetButtons from "./components/ResetButtons";
import puzzleArrayModifier from "./components/puzzleArrayModifier";

function App() {
	const [puzzle, setPuzzle] = useState([]);
	const [dims, setDims] = useState([3, 3]);
	const [gameWon, setGameWon] = useState(false);

	function handleClick(number) {
		var new_puzzle_layout = puzzleArrayModifier(puzzle, number, dims);
		setPuzzle([...new_puzzle_layout]);
		checkIfWon();
	}

	function createPuzzle() {
		setGameWon(false);
		setPuzzle(shuffle(Array.from(Array(dims[0] * dims[1]).keys())));
	}

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	function checkIfWon() {
		var check_list = puzzle;
		if (check_list[check_list.length - 1] == 0) {
			check_list.pop();
		}
		setGameWon(
			!!check_list.reduce((n, item) => n !== false && item >= n && item)
		);
	}

	useEffect(() => {
		createPuzzle();
	}, [dims]);

	return (
		<div className="body">
			<div className="puzzleContainer">
				<div
					style={{
						gridTemplateRows: "repeat(" + dims[0] + ", minmax(auto, 100px))",
						gridTemplateColumns: "repeat(" + dims[1] + ", minmax(auto, 100px))",
					}}
					className={`puzzleGrid ${gameWon ? "disableMouseInput" : ""}`}
				>
					{puzzle.map((number, index) => (
						<NumberSquare
							key={index}
							number={number}
							handleClick={handleClick}
						/>
					))}
				</div>
			</div>
			<div className="messageContainer">
				{gameWon ? (
					<p>You won!</p>
				) : (
					<p>Solve the puzzle by placeing the tiles in numerical order.</p>
				)}
			</div>
			<div className="interfaceContainer">
				<ResetButtons dims={dims} setDims={setDims} />
			</div>
		</div>
	);
}

export default App;
