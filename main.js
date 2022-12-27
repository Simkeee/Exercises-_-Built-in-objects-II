// 1. Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.
// 12345 -&gt; 54321
function reversesNumber(number) {
    var numStr = number.toString();
    var reversedStr = numStr.split("").reverse().join("");
    return parseInt(reversedStr);
}
console.log("1.Zad: " + reversesNumber(12345));


// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -&gt; “abeemrstw”
function alphabeticalOrder(str) {
    var splitArray = str.toLowerCase().split("");
    splitArray.sort();
    return "2.Zad: " + splitArray.join("");
  }

  console.log(alphabeticalOrder("Webmaster"));


// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.
// &quot;Republic Of Serbia&quot; -&gt; &quot;Rbceilpu Of Sabeir&quot;
function alphabetizeWords(string) {
    var newstring = "";
    var splitArray = string.split(" ");
    var sortArray = splitArray.forEach(element => {
        var splitElement = element.split("");
        var sortElement = splitElement.sort();
        var joinElement = sortElement.join('');
        newstring += joinElement + ' ';
    });
    return "3.Zad: " + newstring;
}
console.log(alphabetizeWords('Republic Of Serbia'));


// 4. Write a function to split a string and convert it into an array of words.
// &quot;John Snow&quot; -&gt; [ &#39;John&#39;, &#39;Snow&#39; ]
function splitString(string) {
    var arr = [];
    var stringSplit = string.split(" ");
    for (let i = 0; i < stringSplit.length; i++) {
    arr[i] = stringSplit[i];
    }
    return  arr;
}
console.log(splitString('John Snow'));


// 5. Write a function to convert a string to its abbreviated form.
// &quot;John Snow&quot; -&gt; &quot;John S.&quot;
function abbreviatedForm(string) {
    var arr = '';
    var stringSplit = string.split(" ");
    for (let i = 0; i < stringSplit.length-1; i++) {
    arr += stringSplit[i];
    }
    arr += ' ' + stringSplit[stringSplit.length-1][0] + '.';
    return "5.Zad: " + arr;
}
console.log(abbreviatedForm('John Snow'));


// 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
// &#39;0000&#39;, ‘123’, &#39;l&#39; -&gt; &#39;0123&#39;
// &#39;00000000&#39;, ‘123’, &#39;r&#39; -&gt; &#39;12300000&#39;
function addsStringLeftRightReplacingCharacters(arr) {
    var result = 'Error!';
    if(arr[2] == 'l'){
        result = arr[1] + arr[0].slice(arr[1].length);
    }
    if(arr[2] == 'r'){
        result = arr[0].slice(0,-arr[1].length) + arr[1];
    }
    return result;
} 
console.log("6.Zad: " + addsStringLeftRightReplacingCharacters(['000000','123','r']));


// 7. Write a function to capitalize the first letter of a string and returns modified string.
// &quot;js string exercises&quot; -&gt; &quot;Js string exercises&quot;
function capitalizeFirstLetter(string) {
    var result = 'Error!';
    if(string[0].toUpperCase() != string[0].toLowerCase()){
        result = string[0].toUpperCase() + string.slice(1);
    }
    return "7.Zad: " + result;
}
console.log(capitalizeFirstLetter('js string exercises'));


// 8. Write a function to hide email addresses to protect them from unauthorized users.
// &quot;somerandomaddress@example.com&quot; -&gt; &quot;somerand...@example.com&quot;
function hideEmailAddress(email) {
    var parts = email.split('@');
    if (parts.length !== 2) {
      throw new Error('Invalid email address');
    }
    var username = parts[0];
    var domain = parts[1];
    return username.slice(0, 1) + '...' + '@' + domain;
  }

  console.log("8.Zad: " +hideEmailAddress('somerandomaddress@example.com'));


// 9. Write a program that accepts a string as input and swaps the case of each character. For
// example, if you input &#39;The Quick Brown Fox&#39;, the output should be &#39;tHE qUICK bROWN fOX&#39;.
// var UPPER = &#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;;
// var LOWER = &#39;abcdefghijklmnopqrstuvwxyz&#39;;
// &quot;The Quick Brown Fox&quot; -&gt; &quot;tHE qUICK bROWN fOX&quot;
function swapsCaseEachCharacter(string) {
var swapsString = '';

for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
        swapsString += string[i].toLowerCase();
    }
    if (string[i] === string[i].toLowerCase()) {
        swapsString += string[i].toUpperCase();
    }
}
return swapsString;
}
console.log("9.Zad: " + swapsCaseEachCharacter('The Quick Brown Fox'));