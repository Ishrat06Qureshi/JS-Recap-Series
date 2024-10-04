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
console.log(getLastIndex('Interstellar','o'));
