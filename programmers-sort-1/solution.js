const solution = (array, commands) => {
  
  const answer = commands.map((arr) => {
    return array.slice(arr[0]-1, arr[1]).sort((a, b) => {
      return a - b;
    })[arr[2] - 1];
  });

  return answer;
};