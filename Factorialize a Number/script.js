function factorialize(num) {
  var product = 0;
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
  return product;
}

console.log(factorialize(10));
