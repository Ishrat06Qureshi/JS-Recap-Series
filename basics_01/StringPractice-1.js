// Write a function that takes a string and a character as arguments and returns the index of the first occurrence of that character in the string. If the character is not found, return -1.
// ++++++++++++ below and above are same +++++++++++++++++++++++++++
// Write a function that takes a string and a character and an index. The function should return the index of the first occurrence of the character after the given index. If not found, return -1.


// Steps
//1-creates a function which takes two arguments i.e fullString , searchTerm.
// Index of the First Occurance i.e indexof
// condition -- return -1 if not present
let searchString = 'This dog is not looking like a dog';
let searchTerm = 'dog'
let notExistTerm = 'beauty'
let stringIndex = 9;
function getFirstOccurance(searchString,searchTerm , index=0) {
 let firstIndexOccurance = searchString.indexOf(searchTerm , index);
 return firstIndexOccurance
}

// console.log(getFirstOccurance(searchString,searchTerm));
// console.log(getFirstOccurance(searchString,notExistTerm));
// console.log(getFirstOccurance(searchString,searchTerm , stringIndex ));


