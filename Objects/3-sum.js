//If salaries is empty, then the result must be 0.

let emptyObj = (obj) => {
    let counter = 0;

    for (keys in obj) {
        counter += 1;
    }

    if (counter == 0) {
        return true; //Object is indeed empty
    }
    else {
        return false; //Object is NOT empty
    }
}

//Sum all salaries
let sumAll = (obj) => {
    //Check is it empty
    let is_it_empty = emptyObj(obj);
    if (is_it_empty == true) {
        return 0; 
    }

    //Sum
    let result = 0;

    for (key in obj) {
        result += obj[key]
    }

    return result;
}

//Example
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let test = sumAll(salaries);
console.log(test) //Should equal 390