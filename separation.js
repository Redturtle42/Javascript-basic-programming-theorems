/* **********xxxxx********** Separation **********xxxxx********** */

console.log('\n' + 'Theorem of Separation: ' + '\n');

const separate = (src) => {
  const evens = [];
  const odds = [];
  let evenIndex = 0;
  let oddIndex = 0;
  for (let i = 0; i < src.length; i++) {
    if (src[i] % 2 === 0) {
      evens[evenIndex++] = src[i];
    } else {
      odds[oddIndex++] = src[i];
    }
  }
  return {
    evens,
    odds
  };
};

const separateByReference = (src, evens, odds) => {
  let evenIndex = 0;
  let oddIndex = 0;
  for (let i = 0; i < src.length; i++) {
    if (src[i] % 2 === 0) {
      evens[evenIndex++] = src[i];
    } else {
      odds[oddIndex++] = src[i];
    }
  }
};

const evens = [];
const odds = [];
separateByReference([1, 2, 3, 4, 5], evens, odds);
console.log('Separation: ' + 'evens, odds', evens, odds);
// let separateNumbers = separate([1,2,3,4,5,6]);
// let evens = separateNumbers.evensconsole.log('Separation Evans: ', evens + '\n');
// const { evens, odds } = separate([1, 2, 3, 4, 5, 6]);
// console.log('Separation Evans: ', evens + '\n');
// console.log('Separation Odds: ', odds + '\n');

/* ----- SFJ ----- */

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = [];
var arr3 = [];
var l = 0;
var m = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5) {
    arr2[l++] = arr[i];
  } else {
    arr3[m++] = arr[i];
  }
}

console.log('Separation SFJ: Original array: ', arr);
console.log('Separation SFJ: 2. array: ', arr2);
console.log('Separation SFJ: 3. array: ', arr3);
