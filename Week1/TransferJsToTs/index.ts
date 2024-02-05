import {Gender, Person} from "./person";

const people = [
    new Person("Steve", 25, Gender.MALE),
    new Person("Michell", 19, Gender.FEMALE),
    new Person("Patrick", 17, Gender.MALE),
    new Person("Claus", 55, Gender.MALE),
    new Person("Benjamin", 12, Gender.MALE),
    new Person("Laura", 33, Gender.FEMALE),
    new Person("Isabella", 12, Gender.FEMALE),
    new Person("Emily", 15, Gender.FEMALE),
    new Person("Jonathan", 13, Gender.MALE),
]

const table = document.getElementById("table") as HTMLElement
const header = document.getElementById("header") as HTMLElement
const button = document.getElementById("button") as HTMLElement
const btn: HTMLElement | null = document.createElement("button")
btn.innerHTML = "Sort" as string;
button.appendChild(btn);

const helloWorld = (name: string) => {
    return `Hello from ${name}`;
};

header.innerHTML = helloWorld("TypeScript") as string;

const createTable = (array: Array<Person>) => {
    array.forEach((person) => {
        const row: HTMLTableRowElement = document.createElement("tr") // missing html element
        row.innerHTML = `
        <td>${person.getName()}</td>
        <td>${person.getAge()}</td>
        <td>${person.getGender()}</td>
    `;
        table!.appendChild(row);
    });
}

createTable(people);

let toggle: boolean = false;
btn.addEventListener("click", () => {

    if (toggle) {
        table.innerHTML = "";
        createTable(sortPeopleAscending(people));
        toggle = !toggle;
    } else {
        table.innerHTML = "";
        createTable(sortPeopleDescending(people));
        toggle = !toggle;
    }
});

const sortPeopleDescending = (array) => {
    return array.sort((a, b) => {
        if (a.getName() < b.getName()) {
            return -1;
        }
        if (a.getName() > b.getName()) {
            return 1;
        }
        return 0;
    });
}

const sortPeopleAscending = (array) => {
    return array.sort((a, b) => {
        if (a.getName() < b.getName()) {
            return 1;
        }
        if (a.getName() > b.getName()) {
            return -1;
        }
        return 0;
    });
};



