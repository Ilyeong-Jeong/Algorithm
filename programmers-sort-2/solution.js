function solution(numbers) {
  let answer = '';

  answer = numbers.sort((a, b) => {
    return `${a}${b}` - `${b}${a}`
  }).reverse().join('');

  if (Number(answer) === 0) answer = '0'
  
  return answer;
}