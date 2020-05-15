/* **********xxxxx********** Maximum **********xxxxx********** */

console.log('\n' + 'Theorem of maximum: ' + '\n');

const maxArr = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log('Maximum: ', maxArr([300, -5, 2, 10, 20, -2]), '\n');

/* ----- SFJ ----- */

const arr = [2, 3, 4, 5, 1, 6, 7, 8, 9, 10];
let max2 = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max2) {
    max2 = arr[i];
  }
}
console.log('Maximum SFJ: ' + max2);
