// By array literal
// By creating instance of Array directly (using new keyword)
// By using an Array constructor (using new keyword)




// By array literal - Single Data Type
let n_arr=[1,2,3,4];
for(i=0;i<n_arr.length;i++){
    console.log(n_arr[i]);
}

// By array literal - Single Data Type
let es_arr=["Sonoo","Vimal","Ratan"];  
for (i=0;i<es_arr.length;i++){  
    console.log(es_arr[i]);  
}  

// By array literal - Mutiple Data Type
let x;
let a_arr=[1,"Sonoo",true,null,x];  
for (i=0;i<a_arr.length;i++){  
    console.log(a_arr[i]);  
} 




// By creating instance of Array directly
let n_arr1=new Array();
n_arr1[0]=1;
n_arr1[1]=2;
n_arr1[2]=3;
n_arr1[3]=4;

for(i=0;i<n_arr1.length;i++){
    console.log(n_arr1[i]);
}

// By using an Array constructor
let n_arr2=new Array(1,2,3,4);
for(i=0;i<n_arr2.length;i++){
    console.log(n_arr2[i]);
}


/*-------------------------Methoreds----------------------------------*/
// concat()	It returns a new array object that contains two or more merged arrays.
// copywithin()	It copies the part of the given array with its own elements and returns the modified array.
// entries()	It creates an iterator object and a loop that iterates over each key/value pair.
// every()	It determines whether all the elements of an array are satisfying the provided function conditions.
// flat()	It creates a new array carrying sub-array elements concatenated recursively till the specified depth.
// flatMap()	It maps all array elements via mapping function, then flattens the result into a new array.
// fill()	It fills elements into an array with static values.
// from()	It creates a new array carrying the exact copy of another array element.
// filter()	It returns the new array containing the elements that pass the provided function conditions.
// find()	It returns the value of the first element in the given array that satisfies the specified condition.
// findIndex()	It returns the index value of the first element in the given array that satisfies the specified condition.
// forEach()	It invokes the provided function once for each element of an array.
// includes()	It checks whether the given array contains the specified element.
// indexOf()	It searches the specified element in the given array and returns the index of the first match.
// isArray()	It tests if the passed value ia an array.
// join()	It joins the elements of an array as a string.
// keys()	It creates an iterator object that contains only the keys of the array, then loops through these keys.
// lastIndexOf()	It searches the specified element in the given array and returns the index of the last match.
// map()	It calls the specified function for every array element and returns the new array
// of()	It creates a new array from a variable number of arguments, holding any type of argument.
// pop()	It removes and returns the last element of an array.
// push()	It adds one or more elements to the end of an array.
// reverse()	It reverses the elements of given array.
// reduce(function, initial)	It executes a provided function for each value from left to right and reduces the array to a single value.
// reduceRight()	It executes a provided function for each value from right to left and reduces the array to a single value.
// some()	It determines if any element of the array passes the test of the implemented function.
// shift()	It removes and returns the first element of an array.
// slice()	It returns a new array containing the copy of the part of the given array.
// sort()	It returns the element of the given array in a sorted order.
// splice()	It add/remove elements to/from the given array.
// toLocaleString()	It returns a string containing all the elements of a specified array.
// toString()	It converts the elements of a specified array into string form, without affecting the original array.
// unshift()	It adds one or more elements in the beginning of the given array.
// values()	It creates a new iterator object carrying values for each index in the array.



let a1=new Array(1,2,3,4,5,6);
let a2=new Array(6,7,8,9,10);

let a1a2=a1.concat(a2);
let a2a1=a2.concat(a1);
console.log(a1);
console.log(a2);
console.log(a1a2);
console.log(a2a1);

let a1Copya2=a1.copyWithin(a2);
let a2Copya1=a2.copyWithin(a1);
console.log(a1);
console.log(a2);
console.log(a1Copya2);
console.log(a2Copya1);
