//Write the function camelize(str) that changes dash-separated words 
//like “my-short-string” into camel-cased “myShortString”.
//That is: removes all dashes, each word after dash becomes uppercased.

let camelize = (str) => {
    //Split
    let split_string = str.split("-");
    //Transform
    let transformed_string = split_string.map((item, index) => {
        //Todo
        if (index == 0) {
            item = item; //Do nothing
        }
        else {
            let first_letter = item.charAt(0).toUpperCase();
            item = item.slice(1);
            item = first_letter + item;
        }

        return item;
    })

    //Glue
    let joined_string = transformed_string.join("");
    //Return result
    return joined_string;
}


//Test
let test = camelize("a-random-function-that-needs-to-be-camelized");
console.log(test);