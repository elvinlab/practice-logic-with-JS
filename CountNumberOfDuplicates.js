function countNumberOfDuplicates(str) {
  let count = 0;
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char) && charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (const char in charCount) {
    if (charCount[char] > 1) {
      count++;
    }
  }

  return count;
}

console.log(countNumberOfDuplicates("abcde")); // 0
console.log(countNumberOfDuplicates("aabbcde")); // 2
console.log(countNumberOfDuplicates("aabBcde")); // 2
console.log(countNumberOfDuplicates("indivisibility")); // 1
console.log(countNumberOfDuplicates("Indivisibilities")); // 2
console.log(countNumberOfDuplicates("aA11")); // 2
console.log(countNumberOfDuplicates("ABBA")); // 2
