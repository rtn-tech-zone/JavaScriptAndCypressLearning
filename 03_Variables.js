/*
1. Varibales And Types
2. Varibale Data Types
*/

console.log('\n----------------Varibales----------------\n');
/*
 ------------------------------------Varibale ------------------------------------------
| Varibale naming caultre                                                               |
|    * Case Sensitive                                                                   |
|    * starts with [a-zA-Z] or _ or $ and number[but only number can't be used]         |
|    * Symbel and stored symbols can't be used                                          |
|    * Variables can be declered with var, let, constant & without any keyword also     |
 -----------------------------------------------------------------------------------------------------------------------------------------------
| var                              | let                                  | constant                             | no keyword                   |
|----------------------------------|--------------------------------------|--------------------------------------|------------------------------|
| var x=5;                         | let x=5;                             | constant x=5;                        | x=5;                         |
| Can be re-declared               | Can't be re-declared                 | Can't be re-declared                 | NA                           |
| Can be used & can declared later | Must be declared before use          | Must be declared before use          | later can be declared as var |
| e.g. var x = "John Doe";         | e.g. let x = "John Doe";             | e.g. const x = "John Doe";           | NA                           |
|      var x = 0;                  |      let x = 0; //Error              |      const x = 0; //Error            | NA                           |
| Do not have block scope          | Have block scope                     | Have block scope                     | NA                           |
| Can accessed from outside        | Can't accessed from outside          | Can't accessed from outside          | NA                           |
| e.g. {                           | e.g. {                               | e.g. {                               | NA                           |
|        var x = 5;                |        let x = 2;                    |        const x = 6;                  | NA                           |
|       }                          |       }                              |        }                             | NA                           |
|      console.log(x); // output 5 |      console.log(x); // output Error |      console.log(x); // output Error | NA                           |
| Value can be re-assigned         | Value can be re-assigned             | Value can't be re-assigned           | NA                           |
 -----------------------------------------------------------------------------------------------------------------------------------------------

 ------------------------------Varibale Types-------------------------------------------
| Local Varibale                     | Global Varibale                                  |
 ---------------------------------------------------------------------------------------
|decleared inside of a function      | decleared ouside of a function                   |
 ---------------------------------------------------------------------------------------
| e.g.                                                                                  |
|      let x=5; //Global Varibale i.e. decleared ouside of a function                   |
|       function f1(){                                                                  |
|           x=10; //Local Varibale i.e decleared inside of a function                   |
|           console.log("Local Varibale : " + x);                                       |
|       }                                                                               |
|       console.log("Global Varibale : " + x);                                          |
 ---------------------------------------------------------------------------------------
*/

console.log('\n=>Varibales Types----------------\n');
let x=5; //Global Varibale i.e. decleared ouside of a function

function f1(){
    x=10; //Local Varibale i.e decleared inside of a function
    
    console.log("Local Varibale : " + x);
}

// function f2(){
//     window.value=15; //Declear a global varibale inside a function using 'window'
//     console.log(value);
// }


console.log("Global Varibale : " + x); //Print Global Varibale
f1(); //calling f1 function & Print Local Varibale

// console.log("Global Varibale decleared inside function 'y': "+y); //Print Global varibale deleared inside a function;
// Error for above line Uncaught ReferenceError ReferenceError: y is not defined

// console.log("Global Varibale decleared inside function 'window.y': " + window.value); //Print Global varibale deleared inside a function;



/*---------------------Varibales Data Types [dynamic type language]-----------------------------*/
/*
 ------------------------------Varibale Data Types---------------------------------------
|Primitive data type                    || Non-primitive (reference) data type          |
 ---------------------------------------------------------------------------------------
| String    | "String", "Ram"           || Object   |                                   |
| Number    | 5, 5.5, 555555566         || Array    |                                   |
| Boolean   | true, false               || RegExp   |        Will Learn Later           |
| Undefined | let x (no value assigned) || Etc..    |                                   |
| Null      | let x=null                ||          |                                   |
 ---------------------------------------------------------------------------------------
*/


console.log('\n=>Varibales Data Types---------------\n');
let v_string="String";
let v_number1=5;
let v_number2=5.5;
let v_number3=55555556666666677777; // Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
let v_boolean=true;
let v_undefined;
let v_null=null;

console.log("String : "+v_string +"\n"
            +"Number : "+v_number1+"~"+v_number2+"~"+v_number3+"\n"
            +"Boolean : "+v_boolean+"\n"
            +"Undefined : "+v_undefined+"\n"
            +"Null : "+v_null);


console.log('\n=>Varibales Data Types[Non-primitive (reference) data type ]--------\n');
console.log("1. Object , 2.Array & 3.RegExp  will learn later...")
