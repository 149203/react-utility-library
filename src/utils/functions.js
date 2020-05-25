export default class utils {
   // Add Two Numbers with JavaScript
   static add(input1, input2) {
      // A1: any JavaScript value
      // A2: any JavaScript value
      // R: a single JavaScript value

      // return input1 + input2;

      input1 += input2;
      return input1;
   }

   // Subtract One Number from Another with JavaScript
   static subtract(input1, input2) {
      // subtracts input2 from input1
      // return input1 - input2;
      input1 -= input2;
      return input1;
   }

   // Multiply Two Numbers with JavaScript
   static multiply(input1, input2) {
      // multiplies input1 by input 2
      // return input1 * input2;
      input1 *= input2;
      return input1;
   }

   // Divide One Number by Another with JavaScript
   static divide(input1, input2) {
      // divides input1 by input 2
      // return input1 / input2;
      input1 /= input2;
      return input1;
   }

   // Increment a Number with JavaScript
   static increment(input) {
      // increments input by 1
      input++;
      return input;
   }

   // Decrement a Number with JavaScript
   static decrement(input) {
      // decrements input by 1
      input--;
      return input;
   }

   static remainder(input1, input2) {
      // gets remainder of input1 divided by input 2
      return input1 % input2;
   }

   // Multiply Two Decimals with JavaScript
   static multiplyDecimal(input1, input2) {
      input1 = Number(input1);
      input2 = Number(input2);
      return input1 * input2;
   }

   // Divide One Decimal by Another with JavaScript
   static divideDecimal(input1, input2) {
      // divides input1 by input 2
      // return input1 / input2;
      input1 = Number(input1);
      input2 = Number(input2);
      return input1 / input2;
   }

   // Concatenating Strings with Plus Operator
   static concatenate(input1, input2) {
      // concatenates input1 and input2
      input1 = String(input1);
      input1 += input2;
      // return input1 + input2;
      return input1;
   }

   // Concatenating Strings with the Plus Equals Operator
   static concatenatePlusEquals(input1, input2) {
      // concatenates input1 and input2
      input1 = String(input1);
      input1 += input2;
      // return input1 + input2;
      return input1;
   }

   // Constructing Strings with Variables
   static madLib(input1, input2, input3) {
      // concatenates input1 and input2
      return input1 + " " + input2 + ". " + input3;
   }

   // Find the Length of a String
   static getLengthOfString(input) {
      // finds the length of the input string
      return input.length;
   }

   // Use Bracket Notation to Find the First Character in a String
   static getFirstLetterOfString(input) {
      return input[0];
   }

   // Use Bracket Notation to Find the Nth Character in a String
   static getNthLetterOfString(string, n) {
      return string[n - 1];
   }

   // Use Bracket Notation to Find the Last Character in a String
   static getLastLetterOfString(string) {
      return string[string.length - 1];
   }

   // Use Bracket Notation to Find the Nth-to-Last Character in a String
   static getNthToLastLetterOfString(string, n) {
      return string[string.length - n];
   }

   // Manipulate Arrays With push()
   static push(array, newItem) {
      // var array = [1, 2, 3];
      array.push(newItem);
      console.log(array);
      return array;
   }

   // Manipulate Arrays With pop()
   static pop(array) {
      // removes the last element of an array and returns what is left
      array.pop();
      return array;
   }

   // Manipulate Arrays With shift()
   static shift(array) {
      // removes the first element of an array and returns what is left
      array.shift();
      return array;
   }

   // Manipulate Arrays With unshift()
   static unshift(array, newItem) {
      // adds the newItem to the beginning of the array
      array.unshift(newItem);
      return array;
   }

   // Shopping List
   static addToShoppingList(shoppingList, itemType, quantity) {
      // adds itemType and quantity to the shopping list
      shoppingList.push([itemType, quantity]);
      console.log(shoppingList);
      return shoppingList;
   }

   // Stand in Line
   static nextInLine(arr, item) {
      // adds item to end of array, removes item from the beginning, returns the new array
      arr.push(item);
      arr.shift();

      return arr;
   }

   // Your functions go here!

   // Counting Cards

   static countCard(card) {
      var count = 0;
      switch (card) {
         case "A":
         case "K":
         case "J":
         case "Q":
         case "T":
         case "a":
         case "k":
         case "j":
         case "t":
         case 10:
            count -= 1;
            break;
         case 6:
         case 5:
         case 4:
         case 3:
         case 2:
            count += 1;
            break;
         default:
            break;
      }

      var choice;

      if (count > 0) {
         choice = "Bet";
      } else {
         choice = "Hold";
      }

      var result = "Current count = " + count + ", " + choice;
      console.log(result);
      return result;
   }

   // Record Collection

   static updateRecords(id, prop, value) {
      var collection = {
         2548: {
            album: "Slippery When Wet",
            artist: "Bon Jovi",
            tracks: ["Let It Rock", "You Give Love a Bad Name"],
         },
         2468: {
            album: "1999",
            artist: "Prince",
            tracks: ["1999", "Little Red Corvette"],
         },
         1245: {
            artist: "Robert Palmer",
            tracks: [],
         },
         5439: {
            album: "ABBA Gold",
         },
      };
      // updates or makes a new record in your collection
      if (collection.hasOwnProperty(id) === false) {
         // if there is no record with this id
         // make a new record with the id
         console.log("There are no records with that id, making a new one.");
         collection[id] = {};
      }

      if (prop !== "tracks" && value !== "") {
         collection[id][prop] = value;
         console.log("set " + prop + " of " + id + " to " + value);
      } else if (
         prop === "tracks" &&
         collection[id].hasOwnProperty("tracks") === false
      ) {
         collection[id].tracks = [value];
      } else if (prop === "tracks" && value !== "") {
         collection[id].tracks.push(value);
      } else if (value === "") {
         delete collection[id][prop];
      }

      console.log(collection);

      return "See the console to examine updated collection details.";
   }

   // Iterate Odd Numbers With a For Loop
   static iterateBy(start, end, increment) {
      // returns a list of numbers from start to end incrementing by increment
      var myArray = [];

      for (var number = start; number <= end; number += increment) {
         myArray.push(number);
      }

      return myArray;
   }

   // Profile Lookup

   static lookUpProfile(name, prop) {
      var contacts = [
         {
            firstName: "Akira",
            lastName: "Laine",
            number: "0543236543",
            likes: ["Pizza", "Coding", "Brownie Points"],
         },
         {
            firstName: "Harry",
            lastName: "Potter",
            number: "0994372684",
            likes: ["Hogwarts", "Magic", "Hagrid"],
         },
         {
            firstName: "Sherlock",
            lastName: "Holmes",
            number: "0487345643",
            likes: ["Intriguing Cases", "Violin"],
         },
         {
            firstName: "Kristian",
            lastName: "Vos",
            number: "unknown",
            likes: ["JavaScript", "Gaming", "Foxes"],
         },
      ];
      // make a contact list to display in the console if needed
      var contactList = [];

      // first step is find the contact index if it exists
      var contactIndex = null;
      for (var i = 0; i < contacts.length; i++) {
         contactList.push(contacts[i].firstName);
         if (name === contacts[i].firstName) {
            // if this contact exists
            contactIndex = i;
         }
      }

      if (contactIndex === null) {
         console.log(contactList);
         return "No such contact, see console for a list of contacts.";
      } // if there is no such contact
      else {
         // contact is found

         // see if the property exists for the found contact
         if (contacts[contactIndex].hasOwnProperty(prop)) {
            // if this property exists
            return contacts[contactIndex][prop];
         } else {
            console.log(contacts[contactIndex]);
            return (
               contacts[contactIndex].firstName +
               " has no such property. See console for a list of properties."
            );
         }
      }
   }

   // Generate Random Whole Numbers within a Range
   static randomRange(myMin, myMax, amount = 1) {
      var randomNumbers = [];
      for (var i = 0; i < amount; i++) {
         randomNumbers.push(
            Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
         );
      }
      return randomNumbers;
   }

   // Remove Items Using splice()
   static mySplice(array, spliceStart, sliceLength) {
      // Takes array, then splices out sliceLength items starting with spliceStart.
      array.splice(spliceStart, sliceLength);
      return array;
   }

   // Add Items Using splice()
   static spliceAdd(array, spliceStart, sliceLength, newItems) {
      // Takes array, deletes sliceLength items starting with spliceStart, then adds newItems in their place. newItems must be an array.
      array.splice(spliceStart, sliceLength, ...newItems); // ... notation "spreads" the array out into separate arguments
      console.log(array);
      return array;
   }

   // Check For The Presence of an Element With indexOf()
   static quickCheck(arr, elem) {
      // Check to see if elem exists in array arr.
      if (arr.indexOf(elem) !== -1) {
         return true;
      } else {
         return false;
      }
   }

   // Use typeof to Check the Type of a Variable
   static getType(variable) {
      // Get the type of a variable.
      return typeof variable;
   }

   // Return Part of an Array Using the slice Method
   static sliceArray(inputArray, beginSlice, endSlice) {
      return inputArray.slice(beginSlice, endSlice);
   }

   // Remove Elements from an Array Using slice Instead of splice
   static nonMutatingSplice(inputArray, beginSlice, endSlice) {
      var output = inputArray.slice(beginSlice, endSlice);
      console.log(output);
      return output;
   }

   // Combine Two Arrays Using the concat Method
   static nonMutatingConcat(original, attach) {
      // Concatenate first array to second array
      var output = original.concat(attach);
      console.log(output);
      return output;
   }

   // Add Elements to the End of an Array Using concat Instead of push
   static nonMutatingPush(original, newItem) {
      var output = original.concat(newItem);
      console.log(output);
      return output;
   }

   // Use the reduce Method to Analyze Data

   static getAverageRatingByDirector(director) {
      var watchList = [
         {
            Title: "Inception",
            Year: "2010",
            Rated: "PG-13",
            Released: "16 Jul 2010",
            Runtime: "148 min",
            Genre: "Action, Adventure, Crime",
            Director: "Christopher Nolan",
            Writer: "Christopher Nolan",
            Actors:
               "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
            Plot:
               "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
            Language: "English, Japanese, French",
            Country: "USA, UK",
            Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
            Poster:
               "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
            Metascore: "74",
            imdbRating: "8.8",
            imdbVotes: "1,446,708",
            imdbID: "tt1375666",
            Type: "movie",
            Response: "True",
         },
         {
            Title: "Interstellar",
            Year: "2014",
            Rated: "PG-13",
            Released: "07 Nov 2014",
            Runtime: "169 min",
            Genre: "Adventure, Drama, Sci-Fi",
            Director: "Christopher Nolan",
            Writer: "Jonathan Nolan, Christopher Nolan",
            Actors:
               "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
            Plot:
               "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            Language: "English",
            Country: "USA, UK",
            Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
            Poster:
               "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
            Metascore: "74",
            imdbRating: "8.6",
            imdbVotes: "910,366",
            imdbID: "tt0816692",
            Type: "movie",
            Response: "True",
         },
         {
            Title: "The Dark Knight",
            Year: "2008",
            Rated: "PG-13",
            Released: "18 Jul 2008",
            Runtime: "152 min",
            Genre: "Action, Adventure, Crime",
            Director: "Christopher Nolan",
            Writer:
               "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
            Actors:
               "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
            Plot:
               "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
            Language: "English, Mandarin",
            Country: "USA, UK",
            Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
            Poster:
               "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            Metascore: "82",
            imdbRating: "9.0",
            imdbVotes: "1,652,832",
            imdbID: "tt0468569",
            Type: "movie",
            Response: "True",
         },
         {
            Title: "Batman Begins",
            Year: "2005",
            Rated: "PG-13",
            Released: "15 Jun 2005",
            Runtime: "140 min",
            Genre: "Action, Adventure",
            Director: "Christopher Nolan",
            Writer:
               "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
            Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
            Plot:
               "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
            Language: "English, Urdu, Mandarin",
            Country: "USA, UK",
            Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
            Poster:
               "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
            Metascore: "70",
            imdbRating: "8.3",
            imdbVotes: "972,584",
            imdbID: "tt0372784",
            Type: "movie",
            Response: "True",
         },
         {
            Title: "Avatar",
            Year: "2009",
            Rated: "PG-13",
            Released: "18 Dec 2009",
            Runtime: "162 min",
            Genre: "Action, Adventure, Fantasy",
            Director: "James Cameron",
            Writer: "James Cameron",
            Actors:
               "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
            Plot:
               "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            Language: "English, Spanish",
            Country: "USA, UK",
            Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
            Poster:
               "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
            Metascore: "83",
            imdbRating: "7.9",
            imdbVotes: "876,575",
            imdbID: "tt0499549",
            Type: "movie",
            Response: "True",
         },
      ];
      // returns the average rating of movies by a given director
      var directorMovies = watchList.filter(
         (movie) => movie["Director"] === director
      );
      var ratingSum = directorMovies.reduce(
         (sum, movie) => sum + parseFloat(movie.imdbRating),
         0
      );
      var averageRating = ratingSum / directorMovies.length;
      var output =
         director +
         " directed " +
         directorMovies.length +
         " movie(s) with an average rating of " +
         averageRating;

      console.log(averageRating);
      return output;
   }

   // Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
   static getSquaresOfPositiveIntegers(arr) {
      // This returns a list of the squares of all the positive integers.

      var onlyPositive = arr.filter((item) => item > 0); // filter the positive numbers

      var onlyInteger = onlyPositive.filter(
         (item) => String(item).indexOf(".") === -1 // filter the decimal numbers
      );

      var squareList = onlyInteger.map((item) => item * item); // get the squares

      return squareList;
   }

   // Sort an Array Alphabetically using the sort Method
   static alphabeticalOrder(arr) {
      // This sorts an array in alphabetical order.
      return arr.sort();
   }

   // Split a String into an Array Using the split Method
   static splitify(str) {
      var output = str.split(/\W/);
      console.log(output);
      return output;
   }

   // Combine an Array into a String Using the join Method
   static sentensify(array) {
      // var output = str.split(/\W/);
      var output = array.join(" ");
      console.log(output);
      return output;
   }

   // Apply Functional Programming to Convert Strings to URL Slugs
   static urlSlug(title) {
      var makeLower = title.toLowerCase();
      var removeSpaces = makeLower.split(" ");
      var removeBlankItems = removeSpaces.filter((x) => x.length > 0);
      var joinWithDashes = removeBlankItems.join("-");
      console.log(joinWithDashes);
      return joinWithDashes;
   }

   // Use the every Method to Check that Every Element in an Array Meets a Criteria
   static checkIfAllGreaterThan(arr, threshold) {
      // This will check if all values in the array are greater than a given threshold.
      return arr.every(function (curVal) {
         return curVal > threshold;
      });
   }

   // Use the some Method to Check that Any Elements in an Array Meet a Criteria
   static checkIfSomeGreaterThan(arr, threshold) {
      // This will check if some values in the array are greater than a given threshold.
      return arr.some(function (curVal) {
         return curVal > threshold;
      });
   }

   // Convert Celsius to Fahrenheit
   static convertToF(celsius) {
      let fahrenheit = celsius * (9 / 5) + 32;
      return fahrenheit;
   }

   // Reverse a String
   static reverseString(str) {
      var revStr = "";
      for (let i = 0; i < str.length; i++) revStr += str[str.length - i - 1];
      console.log(revStr);
      return revStr;
   }

   // Factorialize a Number
   static factorialize(num) {
      var output = 1;
      for (let i = 2; i <= num; i++) output *= i;
      console.log(output);
      return output;
   }

   // Find the Longest Word in a String
   static findLongestWordLength(str) {
      var lengthOfLongestWord = 0;
      const words = str.split(" ");
      for (let wordIndex in words) {
         console.log(words[wordIndex]);
         if (words[wordIndex].length > lengthOfLongestWord)
            lengthOfLongestWord = words[wordIndex].length;
      }
      console.log(lengthOfLongestWord);
      return lengthOfLongestWord;
   }

   // Return Largest Numbers in Arrays
   static largestInEachSubarray(arr) {
      let output = []; // make a new array
      for (let i = 0; i < arr.length; i++) {
         let max = null;
         for (let j = 0; j < arr[i].length; j++) {
            // console.log(i,j)
            if (arr[i][j] > max || max === null) max = arr[i][j];
         }
         output.push(max);
      }
      console.log(output);
      return output;
   }

   // Confirm the Ending
   static confirmEnding(str, target) {
      // checks if str ends with target
      return str.slice(str.length - target.length) === target;
   }

   // Repeat a String Repeat a String
   static repeatStringNumTimes(str, num) {
      // This returns a new string that is str repeated num times.
      let newStr = "";
      for (let i = 0; i < num; i++) {
         newStr += str;
      }
      console.log(newStr);
      return newStr;
   }

   // Truncate a String
   static truncateString(str, num) {
      // This will return a truncated string with ... after it if its longer than num.
      if (str.length > num) {
         return str.slice(0, num) + "...";
      }
      return str;
   }

   // Finders Keepers
   static findElement(arr, func = (num) => num % 2 === 0) {
      // This looks through an array and returns the first element that passes the given function.
      const newArr = arr.filter(func);
      console.log(newArr);
      return newArr[0];
   }

   // Boo who
   static booWho(bool) {
      // Checks if the argument is a boolean value
      return bool === true || bool === false;
   }

   // Title Case a Sentence
   static titleCase(str) {
      // This makes each word of a given sentence start with a capital letter but makes the rest of the letters lowercase.
      var words = str.split(" ");
      console.log(str);
      for (let wordIndex in words) {
         // for each word
         words[wordIndex] = words[wordIndex].toLowerCase(); // make word all lowercase first
         words[wordIndex] =
            words[wordIndex][0].toUpperCase() + words[wordIndex].slice(1); // make first letter capital
         console.log(words[wordIndex]);
      }
      const newString = words.join(" ");
      console.log(newString);
      return newString;
   }

   // Slice and Splice
   static frankenSplice(arr1, arr2, n) {
      // This copies each element of the first array into the second array, in order, beginning inserting elements at index n of the second array.
      const arr2Left = arr2.slice(0, n);
      const arr2Right = arr2.slice(n);
      const output = arr2Left.concat(arr1, arr2Right);
      console.log(output);
      return output;
   }
   // Falsy Bouncer
   static bouncer(arr) {
      // This will remove all falsy values from an array.
      return arr.filter((item) => Boolean(item));
   }
   // Where do I Belong
   static getIndexToIns(arr, num) {
      // This will return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

      const sortedArray = arr.sort((a, b) => a - b); // sort in numerical order

      console.log(arr, sortedArray, num);
      for (let i = 0; i < sortedArray.length; i++) {
         if (num <= sortedArray[i]) {
            var lowestIndex = i;
            console.log("return", lowestIndex);
            return lowestIndex;
         }
      }
      console.log("return", sortedArray.length);
      return sortedArray.length;
   }

   // Mutations
   static mutation(arr) {
      // This will return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
      const firstArray = arr[0].toLowerCase();
      const secondArray = arr[1].toLowerCase();
      let result = true;
      for (let letterIndex in secondArray) {
         // for every letter in the second arry
         const letter = secondArray[letterIndex];
         // see if its in the first array
         console.log(letter, firstArray.indexOf(letter) !== -1);
         if (firstArray.indexOf(letter) === -1) {
            result = false;
         }
      }
      return result;
   }

   // Chunky Monkey
   static chunkArrayInGroups(arr, size) {
      // This splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

      var newArray = [[]];
      var newSubArrayWeAreOn = 0;
      var indexWithinNewSubArray = 0;

      for (
         let originalIndex = 0;
         originalIndex < arr.length;
         originalIndex++ // iterate over every item in the original array
      ) {
         // console.log(originalIndex);
         if (indexWithinNewSubArray >= size) {
            // start a new subarray
            newArray.push([]);
            newSubArrayWeAreOn++;
            indexWithinNewSubArray = 0;
         }
         newArray[newSubArrayWeAreOn].push(arr[originalIndex]);

         indexWithinNewSubArray++;
      }
      console.log(newArray);
      return newArray;
   }

   // Match Literal Strings
   static matchLiteral(string, pattern) {
      // This will check if pattern is in string with a literal match.
      let regex = new RegExp(pattern, "g"); // https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression
      return regex.test(string);
   }

   // Match Single Character with Multiple Possibilities
   static matchSingleCharacterWithMultiplePossibilities(string, possibilities) {
      // This will find all the characters in possibilities in string.
      let regex = new RegExp("[" + possibilities + "]", "ig");
      console.log(regex);
      return string.match(regex);
   }

   // Match Single Characters Not Specified
   static matchSingleCharactersNotSpecified(string, possibilities) {
      // This will find all the characters not in possibilities in string.
      let regex = new RegExp("[^" + possibilities + "]", "ig");
      console.log(regex);
      return string.match(regex);
   }

   // Match Characters that Occur One or More Times
   static matchCharactersThatOccurOneOrMoreTimes(string, letter) {
      // This will find matches when the given letter occurs one or more times in string.
      let regex = new RegExp(letter + "+", "ig");
      return string.match(regex);
   }

   // Find One or More Criminals in a Hunt
   static findCriminals(people, criminal) {
      // This will find one or more criminals represented by letter criminal within a group of other people.
      let reCriminal = new RegExp(criminal + "+", "g");
      return people.match(reCriminal);
   }

   // Match Beginning String Patterns
   static matchBeginningStringPattern(string, target) {
      // This will find target only in the beginning of the string.
      let regex = new RegExp("^" + target);
      return string.match(regex);
   }

   // Match Ending String Patterns
   static matchEndingStringPattern(string, target) {
      // This will find target only at the ending of the string.
      let regex = new RegExp(target + "$");
      return string.match(regex);
   }

   // Match All Letters and Numbers
   static countAlphanumeric(string) {
      // This will count the number of alphanumeric characters in the given string.
      let regex = /\w/g;
      return string.match(regex).length;
   }

   // Match Everything But Letters and Numbers
   static countNonAlphanumeric(string) {
      // This will count the number of non alphanumeric characters in the given string.
      let regex = /\W/g;
      return string.match(regex).length;
   }

   // Match All Numbers
   static countNumeric(string) {
      // This will count the number of numeric characters in the given string.
      let regex = /\d/g;
      return string.match(regex).length;
   }

   // Match All Non-Numbers
   static countNonNumeric(string) {
      // This will count the number of non numeric characters in the given string.
      let regex = /\D/g;
      return string.match(regex).length;
   }

   // Match Non-Whitespace Characters
   static countNonWhiteSpace(string) {
      // This will count the number of non-whitespace characters in the given string.
      let regex = /\S/g;
      return string.match(regex).length;
   }

   // Positive and Negative Lookahead
   static lookAhead(password) {
      // This will match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.
      let regex = /^\D(?=\w{5})(?=\w*\d{2})/;
      return regex.test(password);
   }

   // Check For Mixed Grouping of Characters
   static testIfRoosevelt(string) {
      // This will check if the name you entered is either Franklin or Eleanor Roosevelt.
      // let myString = "Eleanor Roosevelt";
      let myRegex = /(Franklin|Eleanor).+Roosevelt/;
      return myRegex.test(string);
   }

   // Use Capture Groups to Search and Replace
   static reverseThreeWords(string) {
      // This will reverse three words in a string using capture groups to search and replace.
      let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
      let replaceText = "$3 $2 $1";
      let result = string.replace(fixRegex, replaceText);
      console.log(result);
      return result;
   }

   // Remove Whitespace from Start and End
   static removeWhiteSpaceFromEnds(string) {
      // This will remove the space from the beginning and end of the string.
      // let hello = "   Hello, World!  ";
      // let wsRegex = /(\s{2,})/gi; // Change this line
      let wsRegex = /^\s+|\s+$/gi;
      let result = string.replace(wsRegex, "");
      console.log(result);
      return result;
   }
}
