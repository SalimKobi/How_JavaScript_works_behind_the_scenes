"use strict";
// console.log(this);

//CALLING THE THIS KEYWORD IN A REGULAR FUNCTION RESULTS TO UNDEFINED
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

//USING THE THIS KEYWORD IN AN ARRROW FUNCTION YIELDS ACCESS AS THOUGH IT IS IN THE PARENT SCOPE
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

//USING IT IN AN OBJECT WORKS AS EXPECTED
var firstName = "Matilda";

const jonas = {
  firstName: "jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();

jonas.calcAge();

const matilda = {
  year: 2017,
};

//METHOD BORROWING
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

// PIT FALLS OF THE THIS KEYWORD WITH REGULAR FUNCTIONS AND ARROW FUNCTIONS

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "jonas",
  age: 30,
};
const friend = me;
friend.age =
