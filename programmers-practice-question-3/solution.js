function solution(s) {
  const arr = [...s];

  const standard = arr.length;

  if (standard % 2 === 0) {
    return arr[standard / 2 - 1] + arr[standard / 2];
  } else {
    return arr[Math.floor(standard / 2)];
  }
}