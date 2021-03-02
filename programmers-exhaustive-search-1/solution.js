function solutionFirst(answers) {
  const guessFirst  = [1, 2, 3, 4, 5];
  const guessSecond = [2, 1, 2, 3, 2, 4, 2, 5];
  const guessThird  = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const answerFirst = answers.filter((v, i) => {
    return v === guessFirst[i % guessFirst.length]
  }).length

  const answerSecond = answers.filter((v, i) => {
    return v === guessSecond[i % guessSecond.length]
  }).length

  const answerThird = answers.filter((v, i) => {
    return v === guessThird[i % guessThird.length]
  }).length

  const answerTotal = [answerFirst, answerSecond, answerThird]

  const max = Math.max.apply(null, answerTotal);

  const answer = answerTotal.map((v, i) => {
    if (v === max) return i + 1;
  }).filter(x => x)

  return answer;
}

function solutionSecond(answers) {
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

  const max = Math.max.apply(null, score);
  let idx = score.indexOf(max);

  while (idx !== -1) {
    answer.push(idx + 1);
    idx = score.indexOf(max, idx + 1);
  }

  return answer;
}