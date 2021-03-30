function solution(numbers) {
  const answer = numbers.map((v, i, arr) => {
    return arr.map((x, y) => {
      return i === y ? null : v + x;
    });
  })
  .flat()
  .filter((x) => x !== null)
  .reduce((a, c) => (a.includes(c) ? a : [...a, c]), [])
  .sort((a, b) => a - b);

  return answer;
}