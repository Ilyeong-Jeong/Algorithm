function solution(citations) {
  const hIndex = citations.sort((a, b) => b - a)
  .map((v, i) => {
    if (v >= i + 1) return v;
  })
  .filter((x) => x).length;

  return hIndex;
}