//basics of object
let person = {
    name: "varsh",   
    age: 3,
    isStudent:false
};
    
        console.log("person",person);
        console.log("name",person.name);
        console.log("age:",person["age"]);
// add a new property
person.city="Mysore";
console.log("person",person);
//modify
person.age =31;
//delete
delete person.isStudent;
console.log("person",person);
//object constructer
const car=new Object();
car.name="Audi";
car.model="A4";
car.year="2026";
console.log("car",car);
