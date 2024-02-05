//In the person.ts file, create a Person class with the following properties:

//name (string, private, readonly)
//age (number, private, readonly)
//gender (string, private, readonly)

//Create a getter for each property.

//Create a enum called Gender with the following values:

//Male
//Female


export class Person {

    private readonly name: string;
    private readonly age: number;
    private readonly gender: string;

    //create a constructor that takes the parameters above and sets the values accordingly.

    constructor(name, age, gender)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }




    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getGender(): string {
        return this.gender;
    }


    //enum Gender
}
    export enum Gender {
        MALE,
        FEMALE
    }