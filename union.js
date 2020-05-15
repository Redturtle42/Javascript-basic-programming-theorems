/* **********xxxxx********** Union **********xxxxx********** */

console.log('\n' + 'Theorem of union: ' + '\n');

const union = (src1, src2) => {
  const out = [];
  for (const element of src1) {
    out.push(element);
  }
  for (let i = 0; i < src2.length; i++) {
    if (!out.includes(src2[i])) {
      out.push(src2[i]);
    }
  }
  return out;
};
console.log('Union: ', union([1, 4, 4, 4, 5, 6], [7, 8, 9, 1, 2, 4]), '\n');

/* ----- SFJ ----- */

const arr = [2, 3, 4, 5, 1, 10, 7, 8, 9, 6];
const arr2 = [44, 5, 13, 10, 7, 12, 14, 61];
const arrUnion = [];

for (let i = 0; i < arr.length; i++) {
  arrUnion[i] = arr[i];
}
let k = arr.length;

for (let j = 0; j < arr2.length; j++) {
  var i = 0;
  while (i < arr.length && arr[i] !== arr2[j]) {
    i++;
  }
  if (i >= arr.length) {
    arrUnion[k++] = arr2[j];
  }
}

// Checking

console.log(arrUnion.length);
for (let i = 0; i < arrUnion.length; i++) {
  console.log(arrUnion[i]);
}
