/* **********xxxxx********** Minimum **********xxxxx********** */

console.log('\n' + 'Theorem of minimum: ' + '\n');

const minArr = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
console.log('Minimum: ', minArr([300, -5, 2, 10, 20, -2]), '\n');

/* ----- SFJ ----- */

const arr = [2, 3, 4, 5, 1, 6, 7, 8, 9, 10];
let min2 = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min2) {
    min2 = arr[i];
  }
}
console.log('Minimum SFJ: ' + min2);
