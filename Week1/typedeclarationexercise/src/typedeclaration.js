"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var user1URL = "https://jsonplaceholder.typicode.com/users/1";
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
var usersUrl = "https://jsonplaceholder.typicode.com/users";
var user1 = axios_1.default.get(user1URL).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});
var users = axios_1.default.get(usersUrl).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});
function printUserInfo(user) {
    console.log(user);
}
function printTest(test) {
    console.log(test);
}
printTest({ name: "test", age: 20 });
