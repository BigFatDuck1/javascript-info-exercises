//Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

//Test

let unique = (array) => {
    new_array = [];

    array.forEach(element => {
        if (new_array.includes(element)) {
            //Do nothing
        }
        else {
            new_array.push(element);
        }
    });

    return new_array;
}

  
let strings = 
["Hare", "Krishna", "Hare", "Krishna",
 "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
console.log( unique(strings) ); // Hare, Krishna, :-O