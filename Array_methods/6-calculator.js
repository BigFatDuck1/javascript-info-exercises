//First, implement the method calculate(str) that 
//takes a string like "1 + 2" in the format 
//“NUMBER operator NUMBER” (space-delimited) 
//and returns the result. 
//Should understand plus + and minus -.

function Calculator() {
    this.calculate = (string_input) => {
        //Split into individual characters
        symbol_array = string_input.split(/[0-9]/);
        symbol_array = symbol_array.slice(1,-1); //Removes the quotation mark from the string
        string_input = string_input.split(/[+-]/);
        console.log(string_input, symbol_array);
        //console.log(string_input);
        //Set result to 0
        let result = 0;
        let previous_symbol = "+";
        //Understands + and -
        for (let index in string_input) {
            if (typeof parseInt(string_input[index]) == "number" && string_input[index] != "+" && string_input[index] != "-") {
                if (previous_symbol == "+") {
                    result += parseInt(string_input[index]);
                }
                else if (previous_symbol == "-") {
                    result -= parseInt(string_input[index]);
                }
            }
            else if (string_input[index] == "+") {
                previous_symbol = "+";
            }
            else if (string_input[index] == "-") {
                previous_symbol = "-";

            }
        }

        return result;
    }
}

let calc = new Calculator; 

let answer = calc.calculate("1+5-6");
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

