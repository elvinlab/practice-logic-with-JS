function getAverage(scores) {
  let sum = 0;
  let index = 0;
  for (const score of scores) {
    sum += score;
    index++;
  }
  //console.log("First solution: " + sum / index);

  sum = 0;

  scores.map((score) => (sum += score));
  //console.log("Second solution: " + sum / scores.length);

  sum = 0;

  scores.forEach((score) => {
    sum += score;
  });
  //console.log("Third solution: " + sum / scores.length);

  sum = 0;

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  //console.log("Fourth solution: " + sum / scores.length);

  sum = 0;

  for (const index in scores) {
    sum += scores[index];
  }
  // console.log("Fifth solution: " + sum / scores.length);

  sum = 0;
  totalIndex = scores.length;
  while (scores.length > 0) {
    sum += scores.pop();
  }

  //console.log("Sixth solution: " + sum / totalIndex);

  return sum / totalIndex;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(score) {
  if (score >= 90) return score === 100 ? "A++" : "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

function studentMsg(totalScores, studentScore) {
  return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(
    studentScore
  )}. ${
    hasPassingGrade(studentScore)
      ? "You passed the course."
      : "You failed the course."
  }`;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
