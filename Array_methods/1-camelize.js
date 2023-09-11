//Write the function camelize(str) that changes dash-separated words 
//like “my-short-string” into camel-cased “myShortString”.
//That is: removes all dashes, each word after dash becomes uppercased.

let camelize = (str) => {
    //Split
    let split_string = str.split("-");
    //Transform
    let transformed_array = split_string.map((item) => {
        //Todo
    })
    //Glue
    let joined_string = split_string.join("");
    //Return result
    return joined_string;
}


//Test
let test = camelize("background-color");
console.log(test);