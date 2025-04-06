//defines an array to store test scores of 5 students
let testScores = [78, 84, 90, 45, 95];

//initializes variables for the statistics
let total = 0;
let highest = testScores[0]; //first score
let lowest = testScores[0]; //first score
let passed = 0;
let failed = 0;
let failedScores = []; //scores below 60
let highAchievers = []; //scores 90 and above

//loop through each score in the array
for (let score of testScores) {
  total += score; //add to total for average

  //update the highest and lowest scores
  if (score > highest) highest = score;
  if (score < lowest) lowest = score;

  //count the pass or fail
  if (score >= 60) {
    passed++;
  } else {
    failed++;
    failedScores.push(score); //save the failed score
  }

  //collect scores 90 and above
  if (score >= 90) {
    highAchievers.push(score);
  }
}

//calculate the average
let average = total / testScores.length;

//display all results
console.log(`Test Scores: ${testScores.join(", ")}`);
console.log(`Average Score: ${average.toFixed(1)}`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Number of Students Passed: ${passed}`);
console.log(`Number of Students Failed: ${failed}`);
console.log(`Students Who Failed: ${failedScores.join(", ") || "None"}`);
console.log(`Students Who Scored 90 or Above: ${highAchievers.join(", ") || "None"}`);
