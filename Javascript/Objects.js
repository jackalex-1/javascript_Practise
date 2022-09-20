// let object = {
//     firstName : 'John',
//     LastName : 'Sami',
//     Personal_Information : {
//         "CNIC" : 3058-7874-152-1,
//         "Address" : "Street no2, House# 908, Rajanpur",
//     },
//     Age : function () {
//         let y = new Date().getFullYear()
//         let d = y - 2004;
//         return d; 
//     },
//     FullName : function () {
//         return this.firstName + ' ' +this.LastName;
//     }
// }
// Object Methods

// object.greet = function () {
//     console.log("Greetings 🙍‍♂️");
// }

// Constructor Functions

// function object1(firstName, LastName, Personal_Information) {
//     this.firstName = firstName;
//     this.LastName = LastName;
//     this.Personal_Information = Personal_Information;
// }

// let newOb = new object1("john", "Sami", {
//     CNIC : "98903-4555-12"
// });


// class 

class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }

    setName(name){
        this.name = name;
    }


    getFullName(firstname , lastname){
        return `${this.firstname} ${this.lastname}`
    }
}
let obj = new Person('ahmed');
// obj.setName("Omer");
let firstname = obj.name;
let lastname = "Faisal";
obj.getFullName(firstname , lastname);
console.log(obj);
