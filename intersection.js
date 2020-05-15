/* **********xxxxx********** Intersection **********xxxxx********** */

console.log('\n' + 'Theorem of intersection: ' + '\n');

const section = (src1, src2) => {
  const out = [];
  for (let i = 0; i < src1.length; i++) {
    for (let j = 0; j < src2.length; j++) {
      if (src2[j] === src1[i] && !out.includes(src1[i])) {
        out.push(src1[i]);
        break;
      }
    }
  }
  return out;
};
console.log('Intersection: ' + section([1, 2, 3, 4, 5], [7, 8, 1, 2, 5, 5]), '\n');

/* ----- SFJ ----- */

const arr = [2, 3, 4, 5, 1, 10, 7, 8, 9, 6];
const arr2 = [44, 5, 13, 10, 7, 12, 14, 61];
const intersectionArr = [];
let j;
let k = 0;

for (let i = 0; i < arr.length; i++) {
  j = 0;
  while (j < arr2.length && arr2[j] !== arr[i]) {
    j++;
  }
  if (j < arr2.length) {
    intersectionArr[k++] = arr[i];
  }
}

// Checking

for (let i = 0; i < intersectionArr.length; i++) {
  console.log('Intersection SFJ: ' + intersectionArr[i]);
}
