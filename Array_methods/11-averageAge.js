//Write the function getAverageAge(users) that 
//gets an array of objects with property age and returns the average age.

//The formula for the average is (age1 + age2 + ... + ageN) / N.

let getAverageAge = (array) => {
    let total_age = 0;
    let number_of_users = array.length;

    total_age = array.reduce(((accumulator, current_element) => {
        return accumulator + current_element["age"];
    }), 0); //No need to do accumulator["age"] because accumulator takes on either the initial value
    //in this case accumulator = 0 (initial value is specified to be 0)
    //or it takes the previous answer (in the next iteration it will be current_element.age)

    return total_age / number_of_users;
}


//Test
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

