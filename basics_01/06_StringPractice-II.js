let dataSet = [
    {
        "title": "Inception",
        "year": 2010,
        "director": "Christopher Nolan",
        "genre": "Science Fiction",
        "rating": 8.8
      },
      {
        "title": "The Dark Knight",
        "year": 2008,
        "director": "Christopher Nolan",
        "genre": "Action",
        "rating": 9.0
      },
      {
        "title": "Interstellar",
        "year": 2014,
        "director": "Christopher Nolan",
        "genre": "Science Fiction",
        "rating": 8.6
      },
      {
        "title": "The Matrix",
        "year": 1999,
        "director": "Lana Wachowski, Lilly Wachowski",
        "genre": "Science Fiction",
        "rating": 8.7
      },
      {
        "title": "Pulp Fiction",
        "year": 1994,
        "director": "Quentin Tarantino",
        "genre": "Crime",
        "rating": 8.9
      },
      {
        "title": "The Godfather",
        "year": 1972,
        "director": "Francis Ford Coppola",
        "genre": "Crime",
        "rating": 9.2
      },
      {
        "title": "Forrest Gump",
        "year": 1994,
        "director": "Robert Zemeckis",
        "genre": "Drama",
        "rating": 8.8
      },
      {
        "title": "Fight Club",
        "year": 1999,
        "director": "David Fincher",
        "genre": "Drama",
        "rating": 8.8
      },
      {
        "title": "The Shawshank Redemption",
        "year": 1994,
        "director": "Frank Darabont",
        "genre": "Drama",
        "rating": 9.3
      },
      {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "year": 2001,
        "director": "Peter Jackson",
        "genre": "Fantasy",
        "rating": 8.8
      }
]
// ++++++++++++++++++++length Method++++++++++++

// What is the length of the title of the movie Inception?
//STEPS
//1- search for the movie whose title is inception ( use find method on array)
//2-return the length of value 

function getLength (dataSet , movieTitle , keyName) {
 let filmTitle = dataSet.find((entry) => entry.title.toUpperCase() === movieTitle.toUpperCase());
 if(filmTitle != -1 && typeof filmTitle[keyName] === 'string') {
  return filmTitle[keyName].length
 }
 return 0;
}
// console.log(getLength(dataSet,'inception', 'title'));

// What is the length of the director's name for the movie The Matrix?
// console.log(getLength(dataSet,'The Matrix', 'director'));


//++++++++++ Char At +++++++++++++++++

//STEPS
// write down a function which will take two parametrs i.e movieName , charatersPosition
// to find the character at a particular position we will be using charAt
//edge case if position is longer than string length or a negative integer

// What is the first character of the movie title Pulp Fiction?
// What is the last character of the director's name in The Godfather?

function getSpecificCharacter(movieName , position) {
   if(position<= movieName.length &&  Math.sign(position)) {
    return movieName.charAt(position)
   }
   else {
    return `Please provide a valid position`
   }
}
function questionfour(dataSet , movieName , keyName ) {
 let selectedMovie = dataSet.find((element) => element.title.toUpperCase() === movieName.toUpperCase());
 let lastCharPosition = selectedMovie[keyName].length-1;
 return getSpecificCharacter(selectedMovie[keyName],lastCharPosition);
}
// console.log(getSpecificCharacter('Pulp Fiction',9));
// console.log(questionfour(dataSet,'The Godfather','director'));


//includes Method:
// Does the title The Dark Knight include the word "Knight"?
// Does the title Forrest Gump include the letter "r"?

//STEPS
// 1- function with two parameters (actualString , subString)
//2- boolean mai value dyni ha so we will be using includes

function isStringPresent(actualString , searchString) {
  // to acheive case insensitivity
  // actualString.toUpperCase();
  // searchString.toUpperCase();
 return actualString.toUpperCase().includes(searchString.toUpperCase());
}

// console.log(isStringPresent('The Dark Knight','Knight'));

// console.log(isStringPresent('Forrest Gump','r'));

//+++++++++++ IndexOf +++++++++++++

//. indexOf Method:
// What is the index of the letter "i" in the title Fight Club?
// What is the index of the word "Lord" in the title The Lord of the Rings: The Fellowship of the Ring?


//STEPS
// function with two parametr (mainString , subString)
// indexof will be used to get the index of substring if prsent

function getIndex(mainString , subString) {
  if (typeof mainString !== 'string' || typeof subString !== 'string') {
    throw new Error('Both arguments must be strings.');
  }
  let index = mainString.toUpperCase().indexOf(subString.toUpperCase());
  return index;
}
// console.log(getIndex('Fight Club','i'));
// console.log(getIndex('The Lord of the Rings: The Fellowship of the Ring','LORD' ));


//++++++++++++++ LastIndexOf ++++++++++++++++++++++++++++\

//lastIndexOf Method:
// What is the last index of the letter "a" in the title Pulp Fiction?
// What is the last index of the letter "o" in Interstellar?


//STEPS
// function with two parameters ( str , subStr)
// as last index will be used therefore lastIndexOf method will be use

function getLastIndex(str,subStr) {
 if(typeof str !== 'string' || typeof subStr !== 'string'){
  throw new Error('Please provide a valid string')
 }
 return str.toUpperCase().lastIndexOf(subStr.toUpperCase());
}

// console.log(getLastIndex('Pulp Fiction','a'));
// console.log(getLastIndex('Interstellar','o'));


//++++++++++++++ concat Method +++++++++++++++
// concat Method:
// Concatenate the movie title The Shawshank Redemption with the year it was released.
// Concatenate the movie title The Matrix with the director's name.

//STEPS
// 1 - function with two parameter (str , subStr)
// 2 - extract the tragtted movie from dataset
// 3-  concatenate the given keys of targetted movie

function concatenateString(movieName , 
  keyName,
  concatMsg
) {
 if(typeof movieName !== 'string' || typeof keyName !== 'string'){
  throw new Error(`The type of ${movieName} and ${keyName} are not string`)
 }
 let selectedMovie = dataSet.find((element) => element.title.toUpperCase() === movieName.toUpperCase()); 
 if(selectedMovie !== undefined){
  return `The movie ${movieName} ${concatMsg} ${selectedMovie[keyName]}`
 }
 return `${movieName} is not found in the given dataSet`

}

// console.log(concatenateString('The Shawshank Redemption','year','was released on the year'));
// console.log(concatenateString('The Matrixww','director','was directed by'));


//+++++++++++++++++ Slice Method +++++++++++++++++++
//slice Method:
// Slice the first 5 characters from the title The Dark Knight.
// Slice the last 4 characters from the title Inception.

//STEPS
// 1 - function with three parameter ie str and initialIndex, finalIndex
// 2 - slice will be used on for slicing the string


function getSlicedStr(str , initialIndex, finalIndex) {
if(typeof str !== 'string' || typeof initialIndex !== 'number' || typeof finalIndex !== 'number') {
  throw new Error('The type of paramters is mismatched')
}
// dont call the method if there is no value
if(str.length === 0) {
  return ''
}
if(initialIndex < 0 || finalIndex > str.length || initialIndex >=finalIndex){
 return ''
}
 return str.slice(initialIndex,finalIndex);

}
let strValue = 'Inception'
// console.log(getSlicedStr('The Dark Knight',6,6));
// console.log(getSlicedStr(strValue,strValue.length - 4 , strValue.length  ));

//+++++++ split +++++++++++++++
//Split the title The Lord of the Rings: The Fellowship of the Ring by spaces.

// STEPS
// 1 - function with two paramters i.e originalStr and delimiter
// 2 - as we need to split the string we will be using String it will return array of string

function getSplittedString( str , delimiter) {
  if(typeof str !== 'string'){
    throw new Error('The string is not a valid one')
  }
  if(delimiter === undefined || typeof delimiter !== 'string') {
    throw new Error('Please provide a valid delimiter')
  }
  return str.split(delimiter)
}
// console.log(getSplittedString('The Lord of the Rings: The Fellowship of the Ring'));

//Split the director's name of Pulp Fiction by spaces.

// STEPS
// 1 -  write a function to validate the type of paramters
// 2- write a function to validate the key name in an object
// 3 - write a function for finding an object 
// 4 - then splitted function will be use

function checkType(variable , varType) {
  // to avoid arrays and object we can define a pre-define list of types.
  let validType = ['string', 'boolean','number']
 if(variable !== undefined && variable !== null){
  return validType.includes(typeof variable);
 }
 return null
}
function validateKey (keyName , entity) {
  // !=. consider null and undefined as same
  if(keyName != null && entity != null) {
   return entity.hasOwnProperty(keyName)
  }
  return false
}
function findAnObject(keyName , filterValue , dataSet) {
 if(keyName != null && filterValue != null && dataSet != null){
  let obj = dataSet.find((element) => element[keyName] === filterValue);  
  if(obj != undefined){
    return obj;
  }
 }
  return false;
}
// console.log(findAnObject('rating',8.8,dataSet));

function question_18(filterKeyName , keyName , filterValue , delimiter , dataSet) {
  if(!checkType(keyName,typeof keyName) || !checkType(filterValue , typeof filterValue) ||  !checkType(delimiter , typeof delimiter)) {
    throw new Error('Paramter Types are not valid')
  }
if(!validateKey(keyName , dataSet[0] ) && !validateKey(filterKeyName , dataSet[0])){
  throw new Error('Paramter Types are not valid')
}
let obj = findAnObject(filterKeyName,filterValue,dataSet)
 if(obj){
  return getSplittedString(obj[keyName] , delimiter)
 }
 return
}

// +++++++++++ replace +++++++++++++++

//simple Syntax
// string.replace(searchValue , newValue);

const paragraph = "I think Ruth's DOG is cuter than your DOG!";

// STEPS
// 1- replacing the dog with cat
// 2- we will be replacing in the entire paragraph

// console.log(paragraph.replace(/dog/g,'cat'));
// In the regular expression we will be providing the searching string along with flags
// i -- > case insensitivity
// console.log(paragraph.replace(/dog/ig, 'cat'));
// console.log(paragraph.replaceAll(/dog/ig,'cat'));


let str = "Hello world! this is the basic of PROGRAMMING. PROGRAMMING can be thought as the most difficult one but these days PROGRAMMING is turning into something very handy.";
// 1 - replace all the occurance of the word programming with 'development'
// 2 - do it exercise with two methods

// STEPS
 // 1 -  make a use of regular expression with a flag (g) inside replace method
 // 2- log the result

 let formattedStr = str.replace(/programming/g , (  match )=> {
  return match.toUpperCase()
 });
//  console.log(formattedStr);
 
  
// Replace the word "Knight" with "Warrior" in the title The Dark Knight.
// Replace the word "Fiction" with "Story" in Pulp Fiction.

// STEPS
// 1 - function with two paramters i.e searchString , updatedString
//2 - returning the string
// 3 -  log the results 

function replaceString(searchStr , newStr , str,flag = undefined) {
  if(!checkType(searchStr , 'string') || !checkType(newStr,'string') || !checkType(str,'string'))
  {
    throw new Error (' parameters Types mismatched')
  }
  let updatedString = flag ? new RegExp(searchStr , flag) : searchStr
  return str.replace(updatedString,newStr)
}
// console.log(replaceString('this','that',str));
//  console.log(replaceString('Fiction','Story','Pulp Fiction', 'ig'));

// ++++++++++++++= endsWith  && startsWith+++++++++++++++

// 1. Checking if a URL starts with https://
// requirements 
// make a function which will take the url and determines whether its a safe one or not based on http and https
// STEPS
// 1 - function (url).
// 2 - startwith function will be using to do so.
// 3 - returning true if safe and false if not.

function urlChecker(url){
if(!checkType(url ,'string')){
  throw new Error ('URL is not a string')
}
return url.startsWith('https') ? true : false
}
let URL = 'http://fictional-space-cod-7ppr9vxwrx7fxgw6.github.dev/'
// console.log(urlChecker(URL));

// filtering out the fruits which starts with a
let fruits = ["apple", "banana", "apricot", "blueberry", "avocado" , 'orange', 'okara'];


let Afruits = fruits.filter((element) => element.startsWith('b'))
// STEPS
// 1- function with two parametrs (dataset and the initialMatch)
// 2 - typeCheck of the parametrs
// 3 - we should filter the names based on the results of StartWith method ( filter , StartWith)
// 4- returing the array
// 5- log the results


function InitialBasedFilter( listOfData , initialMatch) {
  if(!Array.isArray(listOfData) || !checkType(initialMatch, 'string')) {
    throw new Error('parameters mismatched!')
  }
  return listOfData.filter((element) => element.startsWith(initialMatch))
}
// console.log(InitialBasedFilter(fruits, 'p'));

// Verifying if a File Ends with a Specific Extension
// Requirement --> we have a make a extension checker
// STEPS
// fucntion with two paramters ( fileName , extension)
// checking the parameter Type i.e string
// we will be using endsWith along ternary operator to either return true or false
// log the results

function extensionChk(fileName , extension) {
 if(!checkType(fileName,'string') || !checkType(extension , 'string')){
  throw new Error('paramter mis-matched Types')
 }
 // in-order to get the case insensitivity we need to convert both of the inputs into one case
 return fileName.toUpperCase().endsWith(extension.toUpperCase())
}
// console.log(extensionChk('video.MOV', '.mov'));

function checkingAtEnd(str , matchedStr) {
  if(!checkType(str,'string') || !checkType(matchedStr , 'string')){
   throw new Error('paramter mis-matched Types')
  }
  // in-order to get the case insensitivity we need to convert both of the inputs into one case
  return str.toUpperCase().endsWith(matchedStr.toUpperCase())
 }
//Does the title Forrest Gump end with the letter "p"?
// console.log(checkingAtEnd('Forrest Gump','p'));
//Does the title The Godfather end with the letter "r"?
console.log( checkingAtEnd('The Godfather','r'));

// ++++++ toString method ++++
let number = 25;
let myName = 'ishrat';
let isMarried = true;

let array = ['sttr' , 'njnj'];
let obj = {
  foo:'too'
}
let updatedNum = array.toString()
let updatedBoolean = obj.toString()

// console.log( updatedNum.indexOf(','));
// console.log( updatedBoolean.padEnd(25, '.'));



