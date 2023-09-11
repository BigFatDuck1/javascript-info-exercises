//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
//Leaves values that are of string type unmodified
//Use typeof to check for "number"

//Function that checks for type
let typeNumber = (item) => {
    if(typeof(item) == "number") {
        return true;
    } 
    else {
        return false;
    }
}

//Function that multiples each value by 2
let multiplyNumeric = (obj) => {

    for (key in obj) {
        if (typeNumber(obj[key]) == false) {
            //pass
        }
        else if (typeNumber(obj[key]) == true) {
            obj[key] = obj[key] * 2;
            console.log(obj[key]);
        }
    }
}

//Test
let test = {
    string: "String",
    a: 100,
    b: 200,
    c: "Hello"

}

multiplyNumeric(test);

console.log(test);


