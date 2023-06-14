function letterCombinations(digits) {
 const digitMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // Function to generate letter combinations recursively
  function generateCombinations(digits, index, current, result) {
    // Base case: If all digits have been processed, add the current combination to the result
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const letters = digitMap[digits[index]]; // Get the letters for the current digit
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      generateCombinations(digits, index + 1, current + letter, result);
    }
  }

  // Handle edge cases
  if (!digits) {
    return [];
  }

  // Generate the combinations
  const result = [];
  generateCombinations(digits, 0, "", result);

  // Sort the combinations lexicographically
  result.sort();

  return result;
}

module.exports = letterCombinations;
