const smallestCommons = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;
};
