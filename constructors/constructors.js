function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = greet;
}
let person = new Person('Ann', 25, "Hello");
console.log({person});
console.log(person.age);

// add 
person.height = "3Ft";
console.log({person})

let student = new Person("Henry", 19);
console.log({student})

console.log(Person.prototype);
Person.prototype.gender = "Female"; //add property - genderd arr
console.log(Person.prototype);

let person2 = new Person('Jane', 20);
console.log({person});
console.log(person2.gender);
console.log(person.gender)