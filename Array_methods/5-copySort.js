//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

//Create a function copySorted(arr) that returns such a copy.

let copySorted = (arr) => {
    let new_array = [];

    //Spread syntax to copy the elements of the array (not the array reference)
    new_array = [...arr];

    return new_array.sort();
}


//Test
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)