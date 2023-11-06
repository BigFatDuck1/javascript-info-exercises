// We’ve got an array of objects to sort:

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];
// The usual way to do that would be:
// Comment: by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// Comment: by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Can we make it even less verbose, like this?

// users.sort(byField('name'));
// users.sort(byField('age'));
// So, instead of writing a function, just put byField(fieldName).

// Write the function byField that can be used for that.

function byField(field) {
    return function(object1, object2) {
        if (object1[field] > object2[field]) {
            return 1;
        }
        if (object1[field] < object2[field]) {
            return -1;
        }
    }
}






//Test
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

let by_name = users.sort(byField('name'));
// console.log(users.sort((a, b) => a.name > b.name ? 1 : -1));
console.log(by_name);

let by_age = users.sort(byField('age'));
//console.log(users.sort((a, b) => a.age > b.age ? 1 : -1));
console.log(by_age);

//! Remember sort() sorts the array in place (so it literally messes up the original copy!)