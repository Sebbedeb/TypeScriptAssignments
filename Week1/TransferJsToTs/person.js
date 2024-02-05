"use strict";
//In the person.ts file, create a Person class with the following properties:
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = exports.Person = void 0;
//name (string, private, readonly)
//age (number, private, readonly)
//gender (string, private, readonly)
//Create a getter for each property.
//Create a enum called Gender with the following values:
//Male
//Female
var Person = /** @class */ (function () {
    //create a constructor that takes the parameters above and sets the values accordingly.
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getGender = function () {
        return this.gender;
    };
    return Person;
}());
exports.Person = Person;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (exports.Gender = Gender = {}));
