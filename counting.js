/* **********xxxxx********** Counting **********xxxxx********** */

console.log('\n' + 'Theorem of counting: ' + '\n');

const countElement = (arr, element) => {
  let d = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      d++;
    }
  }
  return d;
};
console.log('Counting: ', countElement([1, 2, 1, 3, 1], 1));

/* ----- SFJ ----- */

const arr = [3, 4, 5, 7, 2, 1, 10];
const e = 6;
let f = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > e) {
    f++;
  }
}
console.log('Counting SFJ: ' + f);
