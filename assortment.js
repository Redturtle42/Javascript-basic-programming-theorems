/* **********xxxxx********** Assortment  **********xxxxx********** */

console.log('\n' + 'Theorem of assortment: ' + '\n');

const selectEvens = (src) => {
  const out = [];
  let j = 0;
  for (let i = 0; i < src.length; i++) {
    if (src[i] % 2 === 0) {
      out[j] = src[i]; // out.push(src[i]);
      j++;
    }
  }
  return out;
};
console.log('Assortment: ' + selectEvens([1, 2, 4, 5, 6], []), '\n');

/* ----- SFJ ----- */

const arr = [1, 3, 5, 6, 43, 8];
const newArr = [];
let k = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 6) {
    newArr[k++] = arr[i];
  }
}
const newArrLength = k;

// Checking

for (let i = 0; i < arr.length; i++) {
  console.log('Assortment SFJ: ' + arr[i]);
}
for (let i = 0; i < newArrLength; i++) {
  console.log('Assortment SFJ: ' + newArr[i]);
}
