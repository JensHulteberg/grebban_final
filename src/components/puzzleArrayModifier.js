//A function that modifies an array as if it was a 15-puzzle. The empty square is represented by the 0 of the array

function switchElement(array, index_1, index_2) {
	let temp = array[index_1];
	array[index_1] = array[index_2];
	array[index_2] = temp;
}

export default function puzzleArrayModifier(array, number, dims) {
	var list = array;
	var colls = dims[1];
	var zero_index = list.indexOf(0);
	const number_index = list.indexOf(number);

	//Check if the empty square and the active number is in the same collumn
	if (number_index % colls == zero_index % colls) {
		var index_dif = zero_index - number_index;
		while (Math.abs(index_dif) > 0) {
			if (index_dif > 0) {
				switchElement(list, zero_index, zero_index - colls);
				zero_index -= colls;
				index_dif -= colls;
			} else {
				switchElement(list, zero_index, zero_index + colls);
				zero_index += colls;
				index_dif += colls;
			}
		}
		//Check if the empty sqaure and the active number is in the same row
	} else if (
		Math.floor(number_index / colls) == Math.floor(zero_index / colls)
	) {
		var index_dif = zero_index - number_index;
		while (Math.abs(index_dif) > 0) {
			if (index_dif > 0) {
				switchElement(list, zero_index, zero_index - 1);
				zero_index -= 1;
				index_dif -= 1;
			} else {
				switchElement(list, zero_index, zero_index + 1);
				zero_index += 1;
				index_dif += 1;
			}
		}
	}
	return list;
}
