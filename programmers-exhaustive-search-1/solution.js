function solution(answers) {
  let answer = [];

  const guessFirst  = [1, 2, 3, 4, 5];
  const guessSecond = [2, 1, 2, 3, 2, 4, 2, 5];
  const guessThird  = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const guessAll    = [guessFirst, guessSecond, guessThird];

  let score = [];

  for (let gIdx in guessAll) {
    let count = 0;

    for (let aIdx in answers) {
      if (guessAll[gIdx][aIdx % guessAll[gIdx].length] === answers[aIdx]) count++;
    }

    score.push(count);
  }

  let max = Math.max.apply(null, score);
  let idx = score.indexOf(max);

  while (idx !== -1) {
    answer.push(idx + 1);
    idx = score.indexOf(max, idx + 1);
  }

  return answer;
}