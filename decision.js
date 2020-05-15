/* **********xxxxx********** Decision **********xxxxx********** */

console.log('\n' + 'Theorem of decision: ' + '\n');

const containElement = (arr, element) => {
  for (const actual of arr) {
    if (actual === element) {
      return true;
    }
  }
  return false;
};
console.log('Decision: ' + containElement([1, 2, 3], 4), '\n');

/* ----- SFJ ----- */

const arr = [1, 3, 5, 8, 5, 43];
const searched = 43;
let z = 0;

while (z < arr.length && arr[z] !== searched) {
  z++;
}
if (z < arr.length) {
  console.log('Matched!');
} else {
  console.log('Not found!');
}
