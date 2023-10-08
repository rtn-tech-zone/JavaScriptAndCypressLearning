/*---------------------Objects-------------------------*/
/* object is an entity having state and behavior (properties and method).

1. By object literal
2. By creating instance of Object directly (using new keyword)
3. By using an object constructor (using new keyword)
*/

//check difference between Literal vs non-Literal

//By object literal
emp = {id:111,name:'Hari',salary:20000};
console.log(emp.id+" : "+emp.name +" : "+emp.salary);


//By creating instance of Object directly
var emp1=new Object();
emp1.id=112;
emp1.name='Ram';
emp1.salary=30000;
console.log(emp1.id+" : "+emp1.name +" : "+emp1.salary);


//By using an object constructor
function emp2(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}
e2=new emp2(113,'Syam',40000);
console.log(e2.id+" : "+e2.name +" : "+e2.salary);


//Defining method in JavaScript Object
function emp3(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;

    
    function changeSalary(other_salary){
        this.salary=other_salary;
    }
    this.changeSalary=changeSalary;
}

e3=new emp3(114,'Rahgab',50000);
console.log(e3.id+" : "+e3.name +" : "+e3.salary);
e3.changeSalary(45000);
console.log(e3.id+" : "+e3.name +" : "+e3.salary);



/*----------------------------------Few Methords-------------------------*/
// 1	Object.assign()	=> This method is used to copy enumerable and own properties from a source object to a target object
// 2	Object.create()	=> This method is used to create a new object with the specified prototype object and properties.
// 3	Object.defineProperty()	=> This method is used to describe some behavioral attributes of the property.
// 4	Object.defineProperties() => This method is used to create or configure multiple object properties.
// 5	Object.entries() => This method returns an array with arrays of the key, value pairs.
// 6	Object.freeze()	=> This method prevents existing properties from being removed.
// 7	Object.getOwnPropertyDescriptor() => This method returns a property descriptor for the specified property of the specified object.
// 8	Object.getOwnPropertyDescriptors() => This method returns all own property descriptors of a given object.
// 9	Object.getOwnPropertyNames() => This method returns an array of all properties (enumerable or not) found.
// 10	Object.getOwnPropertySymbols() => This method returns an array of all own symbol key properties.
// 11	Object.getPrototypeOf() => This method returns the prototype of the specified object.
// 12	Object.is() => This method determines whether two values are the same value.
// 13	Object.isExtensible() => This method determines if an object is extensible
// 14	Object.isFrozen() => This method determines if an object was frozen.
// 15	Object.isSealed() => This method determines if an object is sealed.
// 16	Object.keys() => This method returns an array of a given object's own property names.
// 17	Object.preventExtensions() => This method is used to prevent any extensions of an object.
// 18	Object.seal() => This method prevents new properties from being added and marks all existing properties as non-configurable.
// 19	Object.setPrototypeOf()	=> This method sets the prototype of a specified object to another object.
// 20	Object.values()	=> This method returns an array of values.