function mutation(arr) {
  let result = arr[1].toLowerCase();
  let result1 = arr[0].toLowerCase();
  for (let i = 0; i < result.length; i++) {
    if (result1.indexOf(result[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["ate", "date"]));
console.log(mutation(["Mary", "Aarmy"]));
