//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {

    let number_of_keys = 0;

    for (key in obj) {
        number_of_keys += 1;
    }

    if (number_of_keys > 0) {
        return true;
    } else {
        return false;
    }
}

//Declare object
emptyObj = {};

//Test object
let result = isEmpty(emptyObj);
console.log(result);