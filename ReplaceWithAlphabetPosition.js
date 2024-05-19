function getVowelCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ('aeiou'.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}