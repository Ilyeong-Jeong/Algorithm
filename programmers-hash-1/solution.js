function solutionFirst(participant, completion) {
  participant.sort();
  completion.sort();
    
  const failure = participant.find((v, i) => {
    if (v !== completion[i]) return v;
  });

  return failure;
}

const solutionSecond = (participant, completion) => {
  participant.sort();
  completion.sort();
  
  for (let i in participant) {
    if (participant[i] !== completion[i]) {
      return participant[i]
    };
  }
};