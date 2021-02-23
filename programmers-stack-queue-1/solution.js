function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length !== 0) {
    for (let i in progresses) {
      progresses[i] += speeds[i];
    }

    let count = 0;

    while (progresses[0] >= 100) {
      count++;
      progresses.shift();
      speeds.shift();
    }

    if (count !== 0) {
      answer.push(count);
    }
  }

  return answer;
}