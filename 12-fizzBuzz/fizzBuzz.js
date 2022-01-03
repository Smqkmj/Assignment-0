function fizzBuzz(start, end) {
	// Insert code here;
	var num = end - (start - 1);

	var arr = [];
	for (var i = 0; i < num; i++) {
		arr[i] = start + i;
	}

	for (var i = 0; i < num; i++) {
		if (arr[i] % 15 == 0 && arr[i] != 0)
			arr[i] = "FizzBuzz";

		else if (arr[i] % 5 == 0 && arr[i] != 0)
			arr[i] = "Buzz";

		else if (arr[i] % 3 == 0 && arr[i] != 0)
			arr[i] = "Fizz";

		else
			arr[i] = arr[i];

	}
	return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;