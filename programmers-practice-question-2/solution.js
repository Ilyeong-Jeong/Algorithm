function solution(s) {
  let answer = false;

  let textArr = [...s];
  let tempArr = [];

  if (textArr[0] === ")" || textArr.length % 2 !== 0) {
    return answer;
  } else {
    for (let i = 0; i < textArr.length; i++) {
      if (textArr[i] === "(") {
        tempArr.push(textArr[i]);
      } else {
        tempArr.pop();
      }
    }

    if (tempArr.length === 0) answer = true;
  }

  return answer;
}