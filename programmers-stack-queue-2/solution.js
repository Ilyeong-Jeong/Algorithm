function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let total = 0;
  let ing = [];

  while (truck_weights.length !== 0) {
    answer++;

    if (ing.length === bridge_length) {
      total -= ing.shift();
    }

    if (total + truck_weights[0] <= weight) {
      let temp = truck_weights.shift();
      total += temp;
      ing.push(temp);
    } else {
      ing.push(0);
    }

    if (truck_weights.length === 0) {
      answer += bridge_length;
    }
  }

  return answer;
}