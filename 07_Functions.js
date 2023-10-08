/* ---------------------Functions--------------------*/
/*used to perform operations and call JavaScript function many times to reuse the code
1. Code reusablity
2. Less coding
*/

//=================================Print cube of number 1 to 5===============================
// Not using function
let num1=1
let cubofnum1=num1*num1*num1
console.log("Cube of Number(not using fucntion) <"+num1+">--> "+cubofnum1);
let num2=2
let cubofnum2=num2*num2*num2
console.log("Cube of Number(not using fucntion) <"+num2+">--> "+cubofnum2);
let num3=3
let cubofnum3=num3*num3*num3
console.log("Cube of Number(not using fucntion) <"+num3+">--> "+cubofnum3);
let num4=4
let cubofnum4=num4*num4*num4
console.log("Cube of Number(not using fucntion) <"+num4+">--> "+cubofnum4);
let num5=5
let cubofnum5=num5*num5*num5
console.log("Cube of Number(not using fucntion) <"+num5+">--> "+cubofnum5);

//using a function 
//JS Function Type 1 - Normal Function without return value but can have parameter
//JavaScript Function Arguments-----------------------------------------------------------------
function printTheOutput(msg){
    console.log(msg); //call/invoke the function printTheOutput function
}

//JavaScript Function Arguments-----------------------------------------------------------------
function printCubeOfNumber(number){
    let cubeOfnumber=number*number*number
    printTheOutput("Cube of Number(using function) <"+number+">--> "+cubeOfnumber);
}

//Example of Function Resusbility
for(i=1;i<=5;i++){
    printCubeOfNumber(i); //call/invoke the function printCubeOfNumber function
}
//================same as above ==========
for(let i=1;i<=5;i++){
    printCubeOfNumber(i); //call/invoke the function printCubeOfNumber function
}

// for(const i=1;i<=5;i++){ // Error Assignment to constant variable.
//     printCubeOfNumber(i); //call/invoke the function printCubeOfNumber function
// } // Error 

//JavaScript Function Arguments-----------------------------------------------------------------
function printCubeOfAllNumber(num){
    for(const i=1;i<=num;i++){
      let cubeOfnumber=i*i*i;
      printTheOutput("Cube of Number(using function) <"+i+">--> "+cubeOfnumber);
      //-----------------------------------------------------------------------------
      //printCubeOfNumber(i); //call/invoke the function printCubeOfNumber function
    }
}

//Example of Function Resusbility
printCubeOfAllNumber(10); //call/invoke the function printCubeOfAllNumber function

//Example of Function Resusbility
// printCubeOfNumber(10); 
// printTheOutput("print message");
    
//=======================================================================================================


//JS Function Type 2 - Returnable Function i.e. with return value but can have parameter
//JavaScript Function with Return Value---------------------------------------------------------
function getCubeOfNumber(number){
    let cubeOfnumber=number*number*number;
    return cubeOfnumber;
    //printTheOutput("Cube of Number(using function) <"+number+">--> "+cubeOfnumber);
}

function getSquareOfNumber(number){
    let squareOfNumber=number*number;
    return squareOfNumber;
}

let cube_of_number=getCubeOfNumber(10);
console.log("Cube of "+10+" is : "+cube_of_number) // call/invoke the function getCubeOfNumber in return and Print
console.log("Area of Circel is --> "+(getSquareOfNumber(5)*3.143));




//JS Function Type 3 - Defult Parameter
//JavaScript Function with Default parameters------------------------------------------------------
function welcomeMessgae(name='Sir'){
    console.log("Hello "+name);
    console.log(`Welcome ${name}!`); 
}

welcomeMessgae('Sandib');
welcomeMessgae();

//JS Function Type 4 - Anonymous
//JavaScript Anonymous Function-------------------------------------------------------------------
//Non - Anonymous
function myFunction(a, b) {
    return a * b;
  }
const myFunctionValue=myFunction(1,3)
console.log( "Non - Anonymous Function: " + myFunctionValue );

//Anonymous
const x=function(a,b){ return a * b};  // This can be written in as JS Arrow Functions from ES6 you learn in following code
console.log( "Anonymous Function:" + x(1,3) );

//JS Function Type 4 - Anonymous Arrow Function
//JavaScript Arrow Functions---------------------------------------------------------------------
// ES5
var x1 = function(x, y) {
    return x * y;
  }
  
// ES6
const x2 = (x, y) => x * y;



//JS Function Type 5 - Self-Invoking Functions
//JavaScript Function Self-Invoking Functions----------------------------------------------------
// Self-invoking function can't be reused as other function
(function () {
    let x = "Self-Invoking Non - Anonymous Function example 1 - Hello!! I will invoke myself";  // I will invoke myself
    console.log(x);
  })();

(function sv(){
    console.log('Self-Invoking Anonymous Function example 2 - Hello!! I will invoke myself');
})();

(function welcomeMessgae(name='Sir'){
    console.log("Hello "+name);
    console.log(`Welcome ${name}!`); 
})('Sandib')

// (function welcomeMessgae(name='Sir'){
//     console.log("Hello "+name);
//     console.log(`Welcome ${name}!`); 
// })()// Needs to check why error occuring - TypeError: (intermediate value)(intermediate value)(intermediate value)(...) is not a function







//JS Function Type 6 - Function Object
//JavaScript Function Object or Function() Constructor ------------------------------------------
//syntax new Function ([arg1[, arg2[, ....argn]],] functionBody)  
// arg - Argument or Parameter
//Needs to check as arg we can assigne Primitive and non primitive data along with Objects and functions
var cube=new Function("number","return number*number*number"); //Function Object with single arg(called as parameter)
console.log("Cube of a number with Function Constructor "+cube(10));

const cube2= function(number){return number*number*number}; //Anonymous Function Object
console.log("Cube of a number without Function Constructor "+cube2(10));

var pow=new Function("num1","num2","return Math.pow(num1,num2)"); 
console.log("power of number with Function Constructor "+pow(5,2));


// //Also we can pass a function to a function as parameter
// function sumOfTwoNumber(num1,num2,printTheOutput){

// }


//Nested Functions
function hypotenuse(a,b){
    function square(x){
        return x*x;
    }

    return Math.sqrt(square(a)+square(b));
}

let hypotenuse_value= hypotenuse(1,2);
printTheOutput("hypotenuse_value : "+hypotenuse_value);


//Function literal
let avrageOfTwoNumber=function(x,y){
    return (x+y)/2;
}
let avg=avrageOfTwoNumber(4,10);
printTheOutput("Avrage of Two number : "+avg)
