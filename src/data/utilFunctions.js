export default class utilFunctions {
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
}
