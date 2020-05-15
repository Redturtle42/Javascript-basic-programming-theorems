/* **********xxxxx********** Summary **********xxxxx********** */

console.log('\n' + 'Theorem of summary: ' + '\n');

const summaryArr = (arr) => {
  let a = 0;
  for (const element of arr) {
    a += element;
  }
  console.log('Summary: ', a, '\n');
  return a;
};
summaryArr([5, 6, 7]);

/* ----- SFJ ----- */

const arr = [1, 2, 4, 5, 6, 8, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log('Summary SFJ: ', sum);
