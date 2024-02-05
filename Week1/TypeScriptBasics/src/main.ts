
// 1. Basic Types: Define variables with the following types: number, string, boolean, array, and any.
// number
let num: number = 5;
// string
let str: string = 'hello';
// boolean
let bool: boolean = true;
// array
let arr: number[] = [1, 2, 3];
// any
let anyVar: any = 5;


/*
2. Enums:
    Create a numeric enum for all days of the week.
    Change a day of the week to a string enums.
    What else could you use that would be similar to an enum?
*/
enum Days {
  MONDAY = 0,
  TUESDAY = 1,
  WEDNESDAY = 2,
  THURSDAY = "Thursday",
  FRIDAY = 3,
  SATURDAY = 4,
  SUNDAY = 5
}
 //What else could you use that would be similar to an enum?
 //litteral types
 type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

 /* 
3. Classes:
    Create a ts class representing a basic person with properties for name, email and age. Make the properties private and add getters and setters.
    Also add a constructor that takes the values for the properties as parameters. Make the email property read-only. Create an instance of the class.
    Now create another class called employee that extends the person class and adds a property for salary. Create an instance of the employee class.
*/

class Person {
  private name: string;
  private readonly email: string;
  private age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getAge(): number {
    return this.age;
  }
}

const johnny: Person = new Person('Johnny' , "johnny@johnny.com" , 30);

class Employee extends Person {
  private salary: number;

  constructor(name: string, email: string, age: number, salary: number) {
    super(name, email, age);
    this.salary = salary;
  }

  public getSalary(): number {
    return this.salary;
  }
}

const johnnyIArbejde: Employee = new Employee("Johnny", "johnny@job.com", 30, 300000);

//4. Type Assertion: Use type assertion to convert a variable from type any to type string.

let anyVar2: any = "hello";
let str2: string = <string>anyVar2;
let str3: string = anyVar2 as string;

// 5. Function with Types: Create a function that takes two numbers as parameters and returns their sum.

function add(a: number, b: number): number {
  return a + b;
}


// 6. Tuples: Define 4 tuples representing the http status codes 200, 400, 404 and 500 and their corresponding messages. Define a tuple representing a person with name(string), age(number) and email(string).
type HttpStatus = [number , string];
const httpStatus200: HttpStatus = [200, "OK"];
const httpStatus400: HttpStatus = [400, "Bad Request"];
const httpStatus404: HttpStatus = [404, "Not Found"];
const httpStatus500: HttpStatus = [500, "Internal Server Error"];

type PersonTuple = [string, number, string];
const person: PersonTuple = ["Johnny", 30, "Johnny@johnnyMail.com"];


/* 7. Union Types:
    Create a function that can accept either a number or a string as a parameter.
    Create a type alias for the person tuple from the previous exercise. Where the age property can be either a number or a string.
    call the function with a number and a string.
*/

function numberOrString (input: number | string): number | string{
  if(typeof input === "number"){
    console.log("number");
  }
  else if(typeof input === "string"){
    console.log("string");
  }
  return input;
}

type PersonTupleAlias = [string, number | string, string];

numberOrString(1);
numberOrString("1");

/* 8. Generics:
Create a generic function that takes an array of any type and returns the first element of the array.
Create a generic function that takes two parameters that extends the type object and returns both object parameters combined.
*/

function firstElement<T>(input: T[]): T {
  return input[0];
}

function combine<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}