function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}
console.log(getIndexToIns([1, 3, 6, 4], 2.5));
