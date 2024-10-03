// Write a function that takes a string and a character as arguments and returns the index of the first occurrence of that character in the string. If the character is not found, return -1.
// ++++++++++++ below and above are same +++++++++++++++++++++++++++
// Write a function that takes a string and a character and an index. The function should return the index of the first occurrence of the character after the given index. If not found, return -1.


// Steps
//1-creates a function which takes two arguments i.e fullString , searchTerm.
// Index of the First Occurance i.e indexof
// condition -- return -1 if not present
let searchString = 'This dog is not looking like a dog';
let searchTerm = 'DOG'
let notExistTerm = 'beauty'
let stringIndex = 3
function getFirstOccurance(searchString,searchTerm , index=0) {
 let firstIndexOccurance = searchString.indexOf(searchTerm , index);
 return firstIndexOccurance
}

// console.log(getFirstOccurance(searchString,searchTerm));
// console.log(getFirstOccurance(searchString,notExistTerm));
// console.log(getFirstOccurance(searchString,searchTerm , stringIndex ));


// Write a function that takes a string and a character as arguments and returns the index of the first occurrence of the character, ignoring case. (You can convert both the string and the character to lower or upper case for the comparison.)

// ++++ STEPS +++++
// 1 - write down a function which takes two parameters i.e searchString and searchTerm
// 2 - converting both the string into same case
// 3 - return the first occurance and -1 if not present

function getCaseInsensitiveOccurance (searchString, searchTerm) {
 let convertedString = searchString.toUpperCase() , convertedSubString = searchTerm.toUpperCase();
 let occurance = convertedString.indexOf(convertedSubString);
 return occurance 
}
// console.log(getCaseInsensitiveOccurance(searchString, searchTerm));

 // +++++++ lastIndexOf ++++++++++
// Write a function that takes a string and a character as arguments and returns the index of the last occurrence of that character in the string. If the character is not found, return -1.


// STEPS
// 1 - write a function which will take two arguments
// 2 - return the last occurance if present otherwise return -1  i.e lastIndexOf 
function getLastOccurance( searchString , searchTerm ) {
  let convertedString = searchString.toUpperCase() , convertedSubString = searchTerm.toUpperCase();
  return convertedString.lastIndexOf(convertedSubString);
}

// console.log(getLastOccurance(searchString,searchTerm));

// Write a function that takes a string and a character and an index. The function should return the index of the last occurrence of the character before the given index. If not found, return -1.

// +++++++++ FINDIND OCCURANCE FROM SPECIFIED INDEX +++++++

// STEPS
// 1 - writting a function which will take three parameters i.e searchingString , searchTerm and index
// 2 - 
function getLastAtIndex ( searchString , searchTerm , index) {
let 
}

//Write a function that takes a string and a substring as arguments and returns how many times the substring appears in the string, but only count the last occurrences. Use lastIndexOf for this.

//Write a function that takes a string and a character and an index. The function should return the index of the last occurrence of the character before the given index. If not found, return -1.
//Write a function that takes a string and a substring as arguments and returns how many times the substring appears in the string using indexOf.
