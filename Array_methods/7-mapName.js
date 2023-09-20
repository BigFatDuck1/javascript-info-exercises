//You have an array of user objects, each one has user.name. 
//Write the code that converts it into an array of names.

let mapName = (users_array) => {

    let result = [];

    result = users_array.map((element) => {
        //todo
    })
    
}

//Test
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = [];

names = mapName(users);

console.log(names);
