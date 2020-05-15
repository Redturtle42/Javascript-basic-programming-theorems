/* **********xxxxx********** Searching **********xxxxx********** */

console.log('\n' + 'Theorem of searching: ' + '\n');

const indexOfArray = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
};
console.log('Searching: ' + 'Index of ' + indexOfArray([1, 2, 3], 2), '\n');

/* ----- SFJ ----- */

const humans = [
  { name: 'Feri', age: 20 },
  { name: 'Géza', age: 19 },
  { name: 'Mate', age: 11 }
];

const searchHumanByName = (arr, name) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      return arr[i];
    }
  }
  return {};
};
console.log('Searching human object: ', searchHumanByName(humans, 'Feri'), '\n');

const searchHuman = (arr, key, value) => {
  for (const hum of arr) {
    if (hum[key] === value) {
      return hum;
    }
  }
  return {};
};
console.log('Search human: ', searchHuman(humans, 'name', 'Mate'), '\n');

/* ----- SFJ ----- */

const arr = [1, 3, 4, 5, 43, 8];
const h = 1;
let j = 0;

while (j < arr.length && arr[j] !== h) {
  j++;
}
if (j < arr.length) {
  console.log('Searching SFJ: You can find on the ' + (j + 1) + '. place!');
} else {
  console.log('Searching SFJ: Not found!');
}
