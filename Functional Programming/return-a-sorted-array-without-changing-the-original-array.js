var globalArray = [5, 6, 3, 2, 9];
let nonMutatingSort = arr => {
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
}
nonMutatingSort(globalArray);
