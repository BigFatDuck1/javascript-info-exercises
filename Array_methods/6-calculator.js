//First, implement the method calculate(str) that 
//takes a string like "1 + 2" in the format 
//“NUMBER operator NUMBER” (space-delimited) 
//and returns the result. 
//Should understand plus + and minus -.


function Calculator() {

    this.calculate = (string_input) => {

        //Remove space from string
        string_input = string_input.split("");
        string_input = string_input.filter((element) => {
            return element != " ";
        })
        string_input = string_input.join("");
        console.log(string_input);

        //Split into individual characters
        symbol_array = string_input.split(/[0-9]/);
        symbol_array = symbol_array.slice(1,-1); //Removes the quotation mark from the string
        symbol_array = symbol_array.filter((element) => {
            return element != "" //Remove empty elements from array
        })
        string_input = string_input.split(/[+-]/);
        //console.log(string_input, symbol_array);

        //Create combined array
        let combined_array = [];
        for (let i = 0; i < string_input.length; i++) {
            combined_array.push(string_input[i]);
            if (i < string_input.length - 1) {
                combined_array.push(symbol_array[i]);
            }
        }
        console.log(combined_array);

        //Set result to 0
        let result = 0;
        let previous_symbol = "+";
        //Understands + and -
        for (let index in combined_array) {
            if (typeof parseInt(combined_array[index]) == "number" && combined_array[index] != "+" && combined_array[index] != "-") {
                if (previous_symbol == "+") {
                    result += parseInt(combined_array[index]);
                    //console.log(result)
                }
                else if (previous_symbol == "-") {
                    result -= parseInt(combined_array[index]);
                }
            }
            else if (combined_array[index] == "+") {
                previous_symbol = "+";
            }
            else if (combined_array[index] == "-") {
                previous_symbol = "-";

            }
        }

        return result;
    }
}

let calc = new Calculator; 

let answer = calc.calculate("100 + 4 + 5 + 6");
console.log(answer);




















//Unused stuff
//Sum function
let sumAll = (...array) => {
    let result = 0;
    for (let index in array) {
        result += parseInt(array[index]); //Add each element in args array to result
        
    }
    return result;
} 

//console.log(sumAll(1,2,3,4,5)) // Expected: 15

//Minus function
let minusAll = (...array) => {
    let result = array[0];
    for (let element of array) {
        //Skip first element
        if (element == array[0]) {
            continue;
        }        
        result -= element;
    }
    return result;
}

//console.log(minusAll(10,5,3)); // Expected: 2

