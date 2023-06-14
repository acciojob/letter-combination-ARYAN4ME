function letterCombinations(input) {
	let tabel = {
		"2": "abc",
		"3": "def",
		"4": "ghi",
		"5": "jkl",
		"6": "mno",
		"7": "pqrs",
		"8": "tuv",
		"9": "wxyz"
	}
	let solution = [];
	function solve(currIndex, calStr){
		if(input.length <= currIndex){
			solution.push(calStr);
			return;
		}
		let currChar = input[currIndex];
		for(let i = 0; i<tabel[currChar].length; i++){
			solve(currIndex + 1, calStr + tabel[currChar][i])
		}
	}
	solve(0,"");
	return solution;
}

module.exports = letterCombinations;
