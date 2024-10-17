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
 return str.slice(initialIndex,finalIndex + 1);

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
// console.log( checkingAtEnd('The Godfather','r'));

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


//++++++++++ trim , padStart , padEnds +++++++++++++++++
//1. Using trim() to Clean Up User Input
// trim will be escaping the spaces from both of the ends.
let userInput = '     Ishrat   Qureshi    ';
// console.log(userInput.trim());


let userNumber = '4568765';
let ext = '021'
// console.log(userNumber.padStart(10,ext));

//8. Aligning Items in a List
//// Output:
// Item      Price
// Apple     $1.00
// Banana    $0.50
// Cherry    $2.00

let items = ['Items','Price'];
let itemsList = [
  ['Apple','$1.00'],
  ['Banana','$0.50'],
  ['Cherry','$2.00']
]
// console.log(items[0].padEnd(10,' '), items[1]);
// itemsList.forEach((item , index )=> {
//   console.log((index+1).toString().padEnd(2,''),item[0].padEnd(10 , ' '),item[1]);
// })
// +++++++++++ PadStart and PadEnds practice Question ++++++++
//Objective: Create a formatted list of student names and their grades, aligning them for readability.

let students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charliebhbhbhbhbhhbhbhhbbh", grade: 92 },
];

function alignItems(student) {
  if(!student.length) {
    throw new Error('array is empty')
  }
let keys = Object.keys(student[0]);
let firstColum = student.map((element) => element[keys[0]].toString().length);
let maxLength = Math.max(...firstColum);

console.log(keys[0].padEnd(maxLength +2 ,' '), keys[1]);
student.forEach((element) => {
  console.log(element[keys[0]].padEnd(maxLength +2,' '), element[keys[1]]); 
})
}

let employees = [
  { name: "John Doe", salary: "$50,000" },
  { name: "Jane Smith", salary: "$60,000" },
  { name: "Emily Johnson", salary: "$55,000" },
];
// alignItems(students);
// alignItems(employees)
// alignItems(employees)

// ++++++++ Advance aliging Questions +++++
//Exercise 1: Formatting a Library Book List
//Objective: Create a formatted list of books in a library, including the title, author, and year published.
 // STEP
 // 1 - function with one parameter i.e books list
 // 2 - we need to extract the keys first
 // 3 - get the maximum of first and the second key (number of keys -1 )
 // 4- log the header 
 // 5 looping over the array and then log the results
 // 6 -  checking of the parametrs that its an array as well as a full length array

 let library = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];
function getColumnLength(bookList , keyIndex , keys){
 return Math.max(...bookList.map((books)=> books[keys[keyIndex]].toString().length))
}
 function getAlignList(bookList) {
   if(!Array.isArray(bookList) && bookList.length === 0){
     throw new Error('Array is not correct')
   }
   let keys = Object.keys(bookList[0]);
   
   let firstColumLength = getColumnLength(bookList , 0 , keys)
   let secondColumnLength = getColumnLength(bookList,1,keys)
   //header
   console.log(keys[0].toString().toUpperCase().padEnd(firstColumLength +2 , ' '),keys[1].toString().toUpperCase().padEnd(secondColumnLength +2 , ' '),keys[2].toUpperCase());
   bookList.forEach((element) => {
    
     console.log(element[keys[0]].toString().padEnd(firstColumLength +2,' '),element[keys[1]].toString().padEnd(secondColumnLength +2 , ' '), element[keys[2]] );
   })
 }
//Exercise 2: Displaying a Fitness Tracker
// Objective: Create a formatted list of workouts, including the type of exercise, duration, and calories burned.
let workouts = [
  { exercise: "Running", duration: 30, calories: 300 },
  { exercise: "Cycling", duration: 45, calories: 400 },
  { exercise: "Yoga", duration: 60, calories: 250 },
];
//STEPS
// 1 - function with one parameter i.e workoutChart
// 2 - validating the input i.e type must be an array (Array.isArray) and must have length (length)
// 3 - extracting the keys by passing the first member of dataset
// 4 - dynamic calculation of columns-length i.e looping over the dataset and passing every columns into the defineed function 
// 5 - dynamic printing of header i.e we will be looping over the keys do some manipulation like toUpperCase or added some space and then turn back the intermediate array into String.
// 6 - dynamic printing of rows i.e we will be looping over the keys do some manipulation like added some space and then turn back the intermediate array into String.

function getWorkoutTable(workouts) {
 if(!Array.isArray(workouts) && workouts.length === 0){
  throw new Error('Workout data is not appropriate')
 }
 let keys = Object.keys(workouts[0]);
 let columsLength = workouts.map((workoutDetails, index) =>  getColumnLength(workouts,index,keys))
let header = keys.map((key , index) => key.toUpperCase().padEnd(columsLength[index] + 15 , ' ')).join('')
console.log(header);
workouts.forEach((works) => {
  let row = keys.map((key, index) => works[key].toString().padEnd(columsLength[index] + 15 )).join(' ')
  console.log(row);
})
}
// getWorkoutTable(workouts)

//Exercise 3: Creating a Product Inventory
// Objective: Format a list of products in an inventory, including the product name, quantity, and price.

// let inventory = [
//   { name: "Laptop", quantity: 10, price: "$999.99" },
//   { name: "Smartphone", quantity: 25, price: "$499.99" },
//   { name: "Headphones", quantity: 50, price: "$199.99" },
// ];
// ++++++++++++++++++ Combinations +++++++++++++++++++++++
// Split the title The Lord of the Rings: The Fellowship of the Ring, then join it using hyphens and convert it to uppercase.
//STEPS
// function for only splitting the text
// function only for joining the array into text
// conversion to Upper Case

function splitText(text, splitter) {
  
 if(!checkType(text,'string') || text.length === 0 || !checkType(splitter,'string')){
  throw new Error('please provide a valid string')
 }
 return text.split(splitter)
}
function joinString(arr, joiningStr) {  
 if( !Array.isArray(arr) || !checkType(joiningStr)){
  throw new Error('Please provide the valid paramter ')
 }
 return arr.join(joiningStr)
}
function textUpperCase(text) {
 if(!checkType(text)){
  throw new Error('please send a valid text')
 }
 return text.toUpperCase( )
}
function textLowerCase(text) {
  if(!checkType(text)){
    throw new Error('please send a valid text')
   }
   return text.toLowerCase( )
}
function question_39(text,splitter,joiningStr){
 let splitted =  splitText(text,splitter);
 
 let joinText = joinString(splitted,joiningStr);

 let lowerCaseText = textLowerCase(joinText);

 return lowerCaseText
}
// console.log(question_39('The Lord of the Rings: The Fellowship of the Ring',' ',' '));
//Replace all spaces in the director's name Christopher Nolan with underscores, and then convert the result to lowercase
function question_40(text , splitter, joiningStr) {
let splittedText = splitText(text,splitter);
let joinedText = joinString(splittedText , joiningStr);
let lowerCasedText = textLowerCase(joinedText);
return lowerCasedText
}

// console.log(question_40('Christopher Nolan',' ', '_'));
//Replace "Gump" with "Hero" in Forrest Gump and convert the entire title to uppercase.

function replaceStr(searchString, mainString , replaceString ) {
 if(!checkType(searchString) || !checkType(mainString) || !checkType(replaceString)){
  throw new Error("paramter Type mismatched");
 }
 return mainString.replace(searchString,replaceString);
}
function question_22(searchStr , Str , newStr ){
 let replaceString = replaceStr(searchStr,Str , newStr);
 let lowerCasedText = textLowerCase(replaceString )
 return lowerCasedText
}
// console.log(question_22('Gump','Forrest Gump','Hero'));
//Get the length of the title The Godfather, then retrieve the middle character of the title using charAt.

function getStringLength(text) {
 if(!checkType(text)){
  throw new Error("Please provide a valid string");
 }
 return text.length
}
function getChar(position,text ){
 if(!Number.isInteger(position)){
  throw new Error("provide a valid position");
 }
 if(!checkType(text)){
  throw new Error("provide a valid position");

 }
 return text.charAt(position)
}

function question_24(text){
  let stringLengthHalf = Math.floor(getStringLength(text)/2);
  if(stringLengthHalf>= 0){
    return getChar(stringLengthHalf, text)
  }
  else {
    throw new Error("provide a valid string");
    
  }
}
// console.log(question_24(' '));
// Check if the title Interstellar includes the word "star", and if it does, find the starting index of "star"
function includesText(text, searchingTxt) {
 if(!checkType(text) || !checkType(searchingTxt)){
  throw new Error("not a valid text");
  
 }
 return text.toUpperCase().includes(searchingTxt.toUpperCase())
}

function stringIndex(text, searchingTxt){
  if(!checkType(text) || !checkType(searchingTxt)){
    throw new Error("not a valid text");
   }
   return includesText(text,searchingTxt) ? text.toUpperCase().indexOf(searchingTxt.toUpperCase()) :-1
}
// console.log(stringIndex('INSterstellar','ins'));
//Extract the first 3 characters of the first word in the title The Godfather using indexOf and substring
//STEPS
// 1- we will be writing a function by using indexOf along with space
// 2- wrting a function to get the substring
function findIndex (text) {
 if(!checkType(text)){
  throw new Error('Incorrect paramter Type')
 }
 return text.indexOf('')
}
function getSubString(text , startStr , EndStr ){
if(!checkType(text)){
  throw new Error('Please provide a valid String')
}
if(!Number.isInteger(startStr) || !Number.isInteger(EndStr)){
  throw new Error('Please provide a valid position')
}
if(startStr < 0 || EndStr > text.length || startStr>=EndStr){
  throw new Error('Invalid Range .....')
}
return text.substring(startStr,EndStr)
}
function question_25( text , EndStr){
 let initialIndex = findIndex(text);
 let subString = getSubString(text, initialIndex , EndStr) 
 return subString
}
// console.log(question_25('The Godfather',3));

// 27. replaceAll Method:
// Replace all instances of the letter "e" with "3" in the title The Dark Knight
function replaceIns( text , oldStr , newStr) {
if(!checkType(text) || !checkType(oldStr) || !checkType(newStr)){
  throw new Error('Invalid values')
}
let regex = new RegExp(oldStr , 'ig')
 return text.replace(regex, '3')
}
// console.log(replaceIns('The Dark Knight','T','3'));

// match Method:
// Use a regular expression to find all occurrences of vowels in the title Fight Club.
//STEPS
// 1 - we need to write the expression of the vowels 
// 2 - It will return an 
function getMatchStr( text , searchStr) {
 if(!checkType(text) || !checkType(searchStr)){
  throw new Error('The inputs are not valid')
 }
 let regex = new RegExp(searchStr , 'ig'); 
let found = text.match(regex);
console.log(found);
}
// getMatchStr('Fight Club','[aeiou]')

// Get the first character of the title Inception, convert it to uppercase, and concatenate it with the rest of the title.
// STEPS
// 1 - use CharAt to get the alphabet of specific character 
// 2 - convert the letter into uppercase
// 3 - concatenate the letter with rest 

function question_51(text){
 let firstChar = getSpecificCharacter(text,0);
 if(firstChar.length){
  let convertedCase = textUpperCase(firstChar);
  let concatedText = convertedCase.concat('',convertedCase);
  return concatedText
 }
 else {
  return null
 }
}
// console.log(question_51('inception'));
// Find the index of "Redemption" in The Shawshank Redemption, slice the title up to that point, and concatenate it with Fight Club.
//STEPS
// 1 - find the index of Redemption using index of
// 2 - slice the title till redemption
// 3- concatenate it with Fight Club
// 4 - create helper functions to get the index , slice and for concatenation

function getIndexOfStr(text , searchStr){
 if(!checkType(text) || !checkType(searchStr)){
  throw new Error('Invalid types')
 }
 return text.indexOf(searchStr)
}
function getSlicedStr(text , startPos , EndPos){
  if(!checkType(text)){
    throw new Error('Please provide a valid text')
  }  
  if(startPos < 0 || EndPos > text.length){
    throw new Error('please provide a valid position')
  }
  return text.slice(startPos, EndPos);
}
function getConcatenate( text , newText , joingText) {
 if(!checkType(text) || !checkType(newText) || !checkType(joingText)){
  throw new Error('Not a valid Str')
 }
 return text.concat(joingText,newText)
}

function question_01(text, searchStr , newText ) {
 let index = getIndexOfStr(text,searchStr);
 if(index == -1) {
  throw new Error('String not found')
 }
 let slicedText = getSlicedStr(text, 0 , index);
 let concatenateTxt = getConcatenate(slicedText,newText,' ')
 return concatenateTxt;
}
//// Split The Shawshank Redemption by spaces, slice the first two words, and concatenate them back with spaces.
//STEPS
// 1 - helper functions for splitting slicing and concatenating
// 2 - 
function question_02(text, delimiter){
 let splittedTxt = getSplittedString(text,delimiter);
 let sliced = splittedTxt.slice(0,2);
 console.log(sliced);
 
 let concatedText = getConcatenate(sliced.toString(),' ', ' ')
 return concatedText
}
// console.log(question_02('The Shawshank Redemption',' '));

// Replace the word "Knight" with "warrior" in The Dark Knight and convert the entire title to lowercase.
function replaceTxt(text , newText , searchTxt){
 if(!checkType(text) || !checkType(newText) || !checkType(searchTxt)) {
  throw new Error('Not a valid Str')
 }
 let regex = new RegExp(searchTxt , 'ig');
  return text.replace(regex,newText)
}
function question_03(text , newText , searchStr) {
 let replacedStr = replaceTxt(text, newText , searchStr);
 let lowerCasedText = textLowerCase(replacedStr)
 return lowerCasedText
}
// // Find the last occurrence of the letter "e" in Interstellar and return the substring from the start to that index.
//STEPS
// use lastIndex to find the last occurance
// get the text from that occurance till end

function question_04(txt , searchTxt ) {
 let lastIndex = getLastIndex(txt, searchTxt);
 console.log(lastIndex);
 
 if(lastIndex == -1){
   throw new Error('SubString not found')
 }
 let subStr = txt.substring(lastIndex)
  return subStr
}
// Split the title The Matrix into words, get the first character of each word, convert them to uppercase, and join them back.
//STEPS
// spliiting the word into Two using split
// using map to get each word and will use charat to get the first letter willbe using slice to get the rest and then apply join 
function question_05(text){
 let splittedText = splitText(text.trim(), ' ');
 let formattedTex = splittedText.map((element) => {
  
  return `${element.charAt(0).toUpperCase()}${element.slice(1)}`
 }).join(' ')
 return formattedTex
}
//Check if The Godfather includes the letter "t". If true, find the index and slice the title from that index onwards
// STEPS
function question_06(text , searchStr) {
 let isPresent = includesText(text , searchStr);
 if(!isPresent){
  throw new Error('Str not present')
 }
 let index = getIndex(text, searchStr);
 let slicedTxt = getSlicedStr(text , index , index.length);
 return slicedTxt
}
// console.log(question_06('The Godfather','t'));
// Split the title Forrest Gump into words, join them with a hyphen (-), and replace all "o"s with "0".
function question_07(text , joingText , oldStr , newStr) {
 let splittedTxt = getSplittedString(text , ' ');
 let joinedText = splittedTxt.join(joingText)
  let replacedText = replaceTxt(joinedText,newStr , oldStr);
  return replacedText
}
// console.log(question_07('Forrest Gump','-','o','0'));
// Find the index of the letter "C" in Pulp Fiction, slice from that index to the end, and convert the substring to uppercase.
function getIndexTwo(text , searchStr) {
if(!checkType(text) || !checkType(searchStr)){
  throw new Error('not a valid String')
}
return text.toUpperCase().indexOf(searchStr.toUpperCase())
}
function getSlicedTwo(text, startPos , endPos) {
  console.log(startPos,endPos);
  
if(!checkType(text)) {
  return new Error('not a valid string')
}
if(!Number.isInteger(startPos) || !Number.isInteger(endPos)){
  return new Error('not a valid Number')
}
if(startPos < 0 || startPos >=endPos || endPos > text.length){
  return new Error(' Please provide a valid postions')
}
return text.slice(startPos,endPos)
}
function question_08(text , searchTxt) {
 let index = getIndexTwo(text , searchTxt); 
 let slicedStr = getSlicedTwo(text,index, text.length);
 let formattedStr = textUpperCase(slicedStr);
 return formattedStr
}
// //// Slice the first 4 characters from Fight Club and concatenate them with The Dark Knight.
function question_09(text , newTxt ){
 let slicedTxt = getSlicedTwo(text, 0, 4);
 let concatedText = getConcatenate(slicedTxt,' ', newTxt);
 return concatedText
}
// console.log(question_10('Fight Club','The Dark Knight'));
// Get the first character of the title Inception, convert it to uppercase, and concatenate it with the rest of the title.
function question_10(text){
 let initialChar = text.charAt(0).toUpperCase();
 let formatted = `${initialChar}${text.slice(1)}`
 return formatted
}
// console.log(question_10('enception'));
// Split Fight Club into an array of characters, reverse the array, and join it back together as a reversed string.
function question_11(text ){
 let spliitedArray = text.split('');
 let reversedArray = spliitedArray.reverse();
 let finalTxt = reversedArray.join('')
 return finalTxt
}
// console.log(question_11('Fight Club'));
// Replace all "a"s in The Godfather with "@", slice the title from index 4 to 10, and concatenate it with Interstellar.
function replaceTwo(text , oldStr , newStr) {
 if(!checkType(text) || !checkType(oldStr) || !checkType(newStr)){
  throw new Error('not a valid String')
 }
 let regex = new RegExp(oldStr , 'ig');
 return text.replace(regex,newStr)
}
function question_12(text){
 let replacedStr = replaceTwo(text,'a','@');
 let slicedTxt = getSlicedStr(replacedStr,4,10);
 let concatedText = getConcatenate(slicedTxt,'Interstellar',' ')
 return concatedText
}
// Split Pulp Fiction into words, replace "Fiction" with "Story", and join the parts back together with spaces.

function question_13(text){
  let replacedTxt  = replaceTwo(text ,'Fiction','Story' )
  let formatted = getSplittedString(replacedTxt , ' ');
  return formatted.join(' ')
  
}
// // Find the last index of the letter "e" in The Shawshank Redemption, slice the title until that index, and concatenate it with Inception.
function getLastIndexTwo(text , searchStr) {
 if(!checkType(text)|| !checkType(searchStr)) {
  throw new Error('not a valid Str')
 }
 let lastIndex = text.lastIndexOf(searchStr);
 return lastIndex === -1 ? null : lastIndex
}
function question_14(text , searchingTxt){
 let lastIndex = getLastIndexTwo(text,searchingTxt);
 console.log(lastIndex);
 
 let slicedTxt = getSlicedStr(text , 0 , lastIndex);
 let concatedText = getConcatenate(slicedTxt ,'Inception',' ' );
 return concatedText
}
// / Get a substring of The Lord of the Rings from index 4 to 15, replace all spaces with underscores, and concatenate it with The Matrix.

function getSubStringTwo(text , startPos , EndPos) {
if(!checkType(text)){
  throw new Error('not a valid string')
}
if(!Number.isInteger(startPos) || !Number.isInteger(EndPos)){
  throw new Error('please provide a valid postion')
}
if(startPos < 0 || EndPos > text.length || startPos>=EndPos){
  throw new Error('please provide a valid Number')
}
return text.substring(startPos, EndPos)
}
function getReplaceThree(text , newStr , searchingTxt) {
if(!checkType(text) || !checkType(newStr) || !checkType(searchingTxt)){
  throw new Error('Not a valid string')
}
let regex = new RegExp(searchingTxt , 'ig');
return text.replace(regex , '_')
}
function question_15(text , searchingTxt , concatTxt) {
 let subString = getSubStringTwo(text , 4 , 15);
 let replacedStr = getReplaceThree(subString , '_',searchingTxt);
 let concatedText = getConcatenate(replacedStr ,concatTxt,' ' );
 return concatedText
}
// console.log(question_15('The Lord of the Rings',' ','The Matrix'));
// Slice the last 3 characters of Fight Club, convert them to uppercase, and concatenate them with the first 3 characters of The Matrix.

function question_16(text , textTwo) {
  if(!checkType(text)){
    throw new Error('Not a valid String')
  }
 let textLength = text.length;
 let lastThree = getSubStringTwo(text , textLength- 3 , textLength);
 let formattedlastThree = textUpperCase(lastThree);
 let newFirstText = getSubStringTwo(textTwo ,0 , 3)
 let concatedText = getConcatenate(formattedlastThree ,newFirstText,' ' );
 return concatedText
}
// // Split the director's name Christopher Nolan by spaces, convert each part to uppercase, and join them with a hyphen.
function question_17(text , delimiter,joiningStr){
  if(!checkType(text) || !checkType(delimiter) || !checkType(joiningStr)) {
    throw new Error('Please provide valid parameters')
  }
 let spliitedArray = getSplittedString(text , delimiter);
 let formattedArr = spliitedArray.map((element) => textUpperCase(element)).join(joiningStr)
 return formattedArr
}
// console.log(question_17( 'Christopher Nolan', ' ','_'));
//// Find the index of the letter "r" in Interstellar, replace all occurrences of "r" with "*", and concatenate the result with The Matrix.
function question_18(text , searchingTxt , newStr , concatedText) {
  let index = getIndex(text,searchingTxt);
  if(index === -1) {
  throw new Error( `${searchingTxt} is not found in ${text}`)
  }
  let replacedTxt = replaceTwo(text,searchingTxt ,newStr);
  let concatText = getConcatenate(replacedTxt , concatedText , ' ');
  return concatText
}
// // Get the length of Forrest Gump, slice the title from the midpoint to the end, and concatenate it with Inception.