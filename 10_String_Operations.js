/*----------------------Get the Lenght of String-------------------*/
const browserType = 'Mozilla';
console.log( browserType.length );

/*---------------------Get the Char of Strinf using Index----------*/
console.log( browserType[0] );


/*-----------------------Extracting String Parts & Modify String----------------------------*/
/*
 -------------------------------------------------------------------------------------------------------------
| Methords                         | Examples                                                                    |
 -------------------------------------------------------------------------------------------------------------
| slice (start, end)               | text.slice(7, 13) or text.slice(7, -2) <'-' position from back            |
| substring (start, end)           | str.substring(7, 13)                                                      |
| substr (start, length)           | str.substr(7, 6);                                                         |
| replace (oldText, newText)       | text.replace("MICROSOFT", "W3Schools");                                   |
| replace (\oldText\g, newText)    | text.replace("\MICROSOFT\g", "W3Schools"); < /g for all match>            |
| replace (\oldText\i, newText)    | text.replace("\MICROSOFT\i", "W3Schools");  < /i for case insensitive>    |
| replaceAll (oldText, newText)    | text.replaceAll("cats","dogs");                                           |
| replaceAll (\oldText\g, newText) | text.replaceAll("\cats\g","dogs");   <use \g if parm regular expression   |
| toUpperCase()  & toLowerCase()   | text1.toUpperCase();      & text1.toLowerCase()                           |
| concat()                         | "Hello".concat(" ", "World!")                                             |
| trim()                           | text1.trim()                                                              |
| trimStart() & trimEnd()          | text1.trimStart()     & text1.trimEnd()                                   |
| padStart()                       | 'numOrstring'.padStart(4,'x') // xxxnumOrstring                           |
| padEnd()                         | 'numOrstring'.padEnd(4,'x') // numOrstringxxx                             |
| charAt(position)                 | "HELLO WORLD".charAt(0) // 'H'                                            |
| charCodeAt(position)             | "HELLO WORLD".charCodeAt(0) // 72 i.e. UTF-16 code                        |
| Property access [ ]              | "HELLO WORLD"[0] //'H'                                                    |
| split()                          | "HELLO, WORLD".split(',')  //returns an array                             |
| indexOf()                        | "Please locate where locate".indexOf("locate")                            |
| lastIndexOf()                    | "Please locate where locate".lastIndexOf("locate")                        |
| search()                         |                                                                           |
| match()                          |                                                                           |
| matchAll()                       |                                                                           |
| includes()                       |                                                                           |
 --------------------------------------------------------------------------------------------------------------

/*---------------------Check if the String contains the substring--*/
console.log( browserType.includes('ill') );

/*---------------------Find the position of of the substrin in a String--*/
console.log( browserType.indexOf('ill') );
console.log( browserType.indexOf('z') );

/*---------------------Check if the String starts/ends with substring--*/
console.log( browserType.startsWith('Moz') );
console.log( browserType.endsWith('lla') );

/*---------------------Get the substring from a String------------------*/
console.log( browserType.slice(3,5) ); // 3-start index, 5- end index

/*---------------------Change the case of a string----------------------*/
console.log( browserType.toLowerCase() );
console.log( browserType.toUpperCase() );

/*---------------------Update/Replace the substring in String------------*/
console.log( browserType.replace("Moz", "New Moz") );


/*----------------------Escape Character---------------------------------*/
// Single quote, Double quote, Backslash use Backslash to print the quote and slash see below

// let sq = 'Single quote i.e. ' here '; //Error
// let dq = "double quote i.e. " here "; //Error
// let bs = "backlash i.e. \ here "; //No Error but \ will not print has to make as \\
// let text = "We are 'the' so-called "Vikings" from the north and It \ alright"; //Error
let text = "We are 'the' so-called \"Vikings\" from the north and It \\ alright"; //Corrected
console.log(text);

/*-----------------------Other Excape Characters----------------------------*/
//Six other escape sequences are valid in JavaScript:
/*
 ---------------------------------
| Code   | Result                 |
 ---------------------------------
| \b     | Backspace              |
| \f     | Form Feed              |
| \n     | New Line               |
| \r     | Carriage Return        |
| \t     | Horizontal Tabulator   |
| \v     | Vertical Tabulator     |
| \      | String Line Breaker    |
 ---------------------------------
*/


/*------------------------------String Line Break --------------------------*/
// let string_with_line_breaker="sdsdhsdhsdhsd
// sdsdsdsdsdsd"; //Error
let string_with_line_breaker="sdsdhsdhsdhsd \
 sdsdsdsdsdsd"; //Corrected



 /*------------------------------String as Object----------------------------*/
 let x = "John";
 let y = new String("John");
 //Suggestion----
    // Do not create Strings objects.
    // The new keyword complicates the code and slows down execution speed.
    // String objects can produce unexpected results:
console.log(x==y); //true
console.log(x===y); //false
// Comparing two JavaScript objects always returns false.



