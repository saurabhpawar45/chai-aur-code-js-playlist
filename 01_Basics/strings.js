// const str = "  stringtrim  \n"
// console.log(str.trim());
// const re = /[a-b]/;
// console.log(typeof re);

const myString = "Hello 1 word. Sentence number 2.";
const splits = myString.split(/(\d)/);

console.log(splits);
// [ "Hello ", "1", " word. Sentence number ", "2", "." ]
