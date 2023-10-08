/*
 ---------------------------------------Operators------------------------------------------------
|                                                                                                 |
 -------------------------------------------------------------------------------------------------
| Arithmetic Operators              | +, -, *, /, %, x++, x--, ++x, --x                           |
| Assignment Operators              | =, +=, -=, *=, /=, %=                                       |
| Comparison (Relational) Operators | ==, ===, !=, !==, >, >=, <, <=                              |
| Bitwise Operators                 | &, |, ^, ~, >>, <<, >>>                                     |
| Logical Operators                 | &&, ||, !                                                   |
| Special Operators                 | (?:), ',', delete, in, instanceof, new, typeof, void, yield |
 -------------------------------------------------------------------------------------------------
*/

/*----------------Arithmetic Operators----------------*/
console.log('\n----------------Arithmetic Operators----------------\n');
let x=25,y=10;

console.log("x ="+x+" & y="+y);
console.log("Addition            '+'  : x+y => "+(x+y));
console.log("Subtraction         '-'  : x-y => "+(x-y));
console.log("Multiplication      '*'  : x*y => "+(x*y));
console.log("Division            '/'  : x/y => "+(x/y));
console.log("Modulus (Remainder) '%'  : x%y => "+(x%y));
console.log("x ="+x+" & y="+y);
console.log("Increment(post)     '++' : x++ => "+(x++));
console.log("Decrement(post)     '--' : y-- => "+(y--));
console.log("x ="+x+" & y="+y);
console.log("Increment(post)     '++' : x++ => "+(x++));
console.log("Decrement(post)     '--' : y-- => "+(y--));
console.log("x ="+x+" & y="+y);
console.log("Increment(pre)      '++' : x++ => "+(++x));
console.log("Decrement(pre)      '--' : y-- => "+(--y));
console.log("x ="+x+" & y="+y);


/*---------------Assignment Operators----------------*/
console.log('\n----------------Assignment Operators----------------\n');

let i;
let a=10;
let b=20;
console.log("i="+i+" & a="+a+" & b="+b);
console.log("Assign                '='   : i="+i+ " vs 'i=10'  => i="+(i=10));
console.log("Add and assign        '+='  : a="+a+ "        vs 'a+=2'  => a="+(a+=2));
console.log("Subtract and assign   '-='  : a="+a+ "        vs 'a-=2'  => a="+(a-=2));
console.log("Multiply and assign   '*='  : a="+a+ "        vs 'a*=10' => a="+(a*=10));
console.log("Divide and assign     '/='  : b="+b+ "        vs 'b/=2'  => b="+(b/=2));
console.log("Modulus and assign    '%='  : b="+b+ "        vs 'b%=3'  => b="+(b%=3));




/*----------------Comparison Operators----------------*/
console.log('\n----------------Comparison Operators----------------\n');

console.log("Is equal to                              '=='   : 10=='10' => "+(10=='10'));
console.log("Is equal to                              '=='   : 10==10 => "+(10==10));

console.log("\nIdentical (equal and of same type)       '==='  : 10==='10' => "+(10==='10'));
console.log("Identical (equal and of same type)       '==='  : 10===10 => "+(10===10));


console.log("\nNot equal to                             '!='   : 10!='10' => "+(10!='10'));
console.log("Not equal to                             '!='   : 10!=10 => "+(10!=10));

console.log("\nNot Identical (equal and of same type)   '!=='  : 10!=='10' => "+(10!=='10'));
console.log("Not Identical (equal and of same type)   '!=='  : 10!==10 => "+(10!==10));


console.log("\nGreater than                             '>'    : 10>10 => "+(10>10));
console.log("Greater than or equal to                 '>='   : 10>=10 => "+(10>=10));
console.log("Less than                                '<'    : 10<10 => "+(10<10));
console.log("Less than or equal to                    '<='   : 10<=10 => "+(10<=10));


/*----------------Bitwise  Operators----------------*/
console.log('\n----------------Bitwise Operators----------------\n');

console.log("Bitwise AND                    '&'    : (10==20 & 20==33) =>"+((10==20 & 20==33))); //false
console.log("Bitwise OR                     '|='   : (10==20 | 20==33) =>"+((10==10 | 20==33))); //true
console.log("Bitwise XOR                    '^'    : (10==20 ^ 20==33) =>"+((10==20 ^ 20==33))); //false
console.log("Bitwise NOT                    '~'    : (~10)             =>"+((~10))); //-1
console.log("Bitwise Left Shift             '<<'   : (10<<2)           =>"+((10<<2))); //40
console.log("Bitwise Right Shift            '>>'   : (10>>2)           =>"+((10>>2))); //2
console.log("Bitwise Right Shift with Zero  '>>>'  : (10>>>2)          =>"+((10>>>2))); //2


/*----------------Logical   Operators----------------*/
console.log('\n----------------Logical  Operators----------------\n');

console.log("Logical AND                    '&&'   : (10==20 && 20==33) =>"+((10==20 && 20==33))); //false
console.log("Logical OR                     '||'   : (10==20 || 20==20) =>"+((10==20 || 20==20))); //true
console.log("Logical NOT                    '!'    : !(10==20)          =>"+(!(10==20))); //true


/*----------------Special    Operators----------------*/
console.log('\n----------------Special   Operators----------------To be Learned\n');

console.log("Conditional Operator returns value based on the condition. It is like if-else     '(?:)'");
console.log("Comma Operator allows multiple expressions to be evaluated as single statement.   ','");
console.log("Delete Operator deletes a property from the object.                               'delete'");
console.log("In Operator checks if object has the given property                               'in'");
console.log("checks if the object is an instance of given type                                 'instanceof'");
console.log("creates an instance (object)                                                      'new'");
console.log("checks the type of object.                                                        'typeof'");
console.log("it discards the expression's return value.                                        'void'");
console.log("checks what is returned in a generator by the generator's iterator.               'yield'");