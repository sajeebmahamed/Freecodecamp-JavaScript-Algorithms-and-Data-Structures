// function getIndexToIns(arr, num) {
//   return arr.filter(val => num > val).length;
// }

const getIndexToIns = (arr, num) => {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}