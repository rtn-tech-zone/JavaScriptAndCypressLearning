/*
------------------------------------Control Statement---------------------------------------------
|                                                                                                 |
 -------------------------------------------------------------------------------------------------
| if         |    if(condition or logic){                                                         |
|            |        //Your Code                                                                 |
|            |    }                                                                               |
 -------------------------------------------------------------------------------------------------
| if else    |    if(condition or logic){}                                                        |
|            |       // Your Code                                                                 |
|            |    }else{                                                                          |
|            |       // Your Code                                                                 |
|            |    }                                                                               |
 -------------------------------------------------------------------------------------------------
| if else if |    if(condition or logic){}                                                        |
|            |       // Your Code                                                                 |
|            |    }else if(condition or logic){}                                                  |
|            |       // Your Code                                                                 |
|            |    }else{                                                                          |
|            |       // Your Code                                                                 |
|            |    }                                                                               |
 -------------------------------------------------------------------------------------------------
| switch     |    switch(expression){                                                             |
|            |      case x:                                                                       |
|            |          // code block                                                             |
|            |         break:                                                                     |
|            |      case y:                                                                       |
|            |          // code block                                                             |
|            |         break:                                                                     |
|            |      default:                                                                      |
|            |          // code block                                                             |
 -------------------------------------------------------------------------------------------------
 */


let a=10;
//if
if(a==10){
    console.log("if clause");
}

let b=20 
//if else
if(b==10){
    console.log("if clause");
}else{
    console.log("else clause");
}
//"if else" alternative "Ternary operator"
// syntax : condition ? run this code : run this code instead
b==10 ? console.log("Ternary operator if clause") : console.log("Ternary operator else clause") ;
b==20 ? console.log("Ternary operator if clause") : console.log("Ternary operator else clause") ;

// let isBirthday=true;
let isBirthday=false;
const greeting = isBirthday ? 'Happy birthday Mrs. Smith' : 'Good morning Mrs. Smith.' ;
console.log(greeting);






let c=30;
//if else if
if(c==10){
    console.log("if clause");
}else if(c>10) {
    console.log("else if clause");
}else{
    console.log("else clause");
}


//switch with out break
let d=1;
let d_result;
switch(d){
case 1:
    d_result="case 1 switch";
case 2:
    d_result="case 2 switch";
case 3:
    d_result="case 3 switch";
case 4:
    d_result="case 4 switch";
case 5:
    d_result="case 5 switch";
}
console.log("Switch wituout break : d_result = "+d_result);//Last case treated as defult case; 
// After 1st match it will execute all following cases & defults if break not used
// if no match found the conition will be aborted
// if no match found and defult case is there that case will be executed by default

//switch with out break & with defult case
let d1=1;
let d1_result;
switch(d1){
case 1:
    d1_result="case 1 switch";
case 2:
    d1_result="case 2 switch";
case 3:
    d1_result="case 3 switch";
case 4:
    d1_result="case 4 switch";
case 5:
    d1_result="case 5 switch";
default:
    d1_result="case defult switch";
}
console.log("Switch wituout break & with defult case : d1_result = "+d1_result);//Last case treated as defult case;


//switch with  break
let e=1;
let e_result;
switch(e){
case 1:
    e_result="case 1 switch";
    break;
case 2:
    e_result="case 2 switch";
    break;
case 3:
    e_result="case 3 switch";
    break;
case 4:
    e_result="case 4 switch";
    break;
case 5:
    e_result="case 5 switch";
    break;
}
console.log("Switch with break : e_result = "+e_result);


//switch with  break & with defult case 
let e1=7;
let e1_result;
switch(e1){
case 1:
    e1_result="case 1 switch";
    break;
case 2:
    e1_result="case 2 switch";
    break;
case 3:
    e1_result="case 3 switch";
    break;
case 4:
    e1_result="case 4 switch";
    break;
case 5:
    e1_result="case 5 switch";
    break;
default:
    e1_result="case defult switch";
}
console.log("Switch with break & with defult case : e1_result = "+e1_result); // if no case match will treat the defult case




var grade='B';  
var result='initial';  
switch(grade){  
case 'A':  
result+=" A Grade";  
case 'B':  
result+=" B Grade";  
case 'C':  
result+=" C Grade";  
default:  
result+=" No Grade";  
}
console.log(result);  