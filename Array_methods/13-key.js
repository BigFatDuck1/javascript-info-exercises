//Let’s say we received an array of users in the form {id:..., name:..., age:... }.
//Create a function groupById(arr) that creates an object from it, 
//with id as the key, and array items as values.

let groupById = (array) => {
    let new_object = {};

    for (let i = 0; i < array.length; i++) {
        new_object[array[i].id] = array[i];
    }

    return new_object;
}

//Test
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);

  console.log(usersById);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */