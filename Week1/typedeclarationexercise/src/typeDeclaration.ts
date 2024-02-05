import axios from "axios";

let user1URL: string = "https://jsonplaceholder.typicode.com/users/1";
/*
{
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                  "lat": "-37.3159",
                  "lng": "81.1496"
            }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
      }
}
*/

let usersUrl: string = "https://jsonplaceholder.typicode.com/users";

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

const user1 = axios.get(user1URL).then((response) => {
    return response.data as User;
}).catch((error) => {
    console.log(error);
});

const users = axios.get(usersUrl).then((response) => {
    return response.data as User[];
}).catch((error) => {
    console.log(error);
});

function printUserInfo(user: User)
{
    console.log(user);
}