/*-----------------Loop-------------------------*/
/*
1. for & for..of loop
2. while loop
3. do-while loop
4. for-in loop
*/



console.log("-----------for & for..of  loop-------------");
for(f=1;f<=5;f++) {
   console.log("f = "+f); 
  }

const animals=['Dog','Cat','Cow',"Camel","Donkey"];
for(a=0;a<animals.length;a++){ 
  console.log('animal in for loop :'+animals[a]) 
};
//alternative way
for( const a of animals){ 
  console.log('animal in for..of loop :'+a) 
};


console.log("-----------while loop-------------");
var w=9;
while (w<=15){
    console.log("w = "+w);
    w++;
}



console.log("-----------do while loop-------------");
var dw=9;
do {
    console.log("dw = "+dw);
    dw++;
}while(dw<=15)



console.log("-----------for in loop------------- Learn Later(used to iterate the properties of an objec)");


console.log("-----------Special loops using map() and filter()-------------------");
function makeStringReveseAnd1stCharCap(string_value){ 
    let string_value_re="";
    for(let i=string_value.length-1;i>=0;i--){
            if(i==string_value.length-1){
                string_value_re=string_value_re+string_value[i].toUpperCase();
            }else{
                string_value_re=string_value_re+string_value[i].toLowerCase();
            }
        }
    return string_value=string_value_re
}

function toUpper(string_v){
    return string_v.toUpperCase();
}

console.log(animals);
animals_inRevers=animals.map(makeStringReveseAnd1stCharCap);
console.log(animals_inRevers);
animals_inUperCase=animals.map(toUpper);
console.log(animals_inUperCase);



function animalNameStarswith(string_v1){
    return string_v1.startsWith('C');
}

animalsStartswith_1=animals.filter(animalNameStarswith);
console.log(animalsStartswith_1);
animalsStartswith_2=animals.filter( (a)=>a.startsWith('D') );
console.log(animalsStartswith_2);


console.log('-----------------Use of the "continue" & "break" in loop--------------------');
// break
let i = 0;
while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}
console.log("Use of 'break' : " + i); // Expected output: 3

//continue
let text = '';
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}
console.log("Use of 'continue' : " + text); // Expected output: "012456789"
 





