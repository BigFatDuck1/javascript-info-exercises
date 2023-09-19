//First, implement the method calculate(str) that 
//takes a string like "1 + 2" in the format 
//“NUMBER operator NUMBER” (space-delimited) 
//and returns the result. 
//Should understand plus + and minus -.

//Then add the method addMethod(name, func) that teaches the calculator a new operation. 
//It takes the operator name and the two-argument function func(a,b) that implements it.


function Calculator() {

    this.checkOperator = (operator, current_operator) => {
        //Check for what operator it is
        //Yes I should have used a switch statement
        if (operator == "+") {
            current_operator = "+";
        }
        else if (operator == "-") {
            current_operator = "-";
        }
        else if (operator == "*") {
            current_operator = "*";
        }
        else if (operator == "/") {
            current_operator = "/";
        }

        return current_operator;
    }

    this.calculate = (string_input) => {

        //Remove space from string
        string_input = string_input.split("");
        string_input = string_input.filter((element) => {
            return element != " ";
        })
        string_input = string_input.join("");
        console.log(string_input, "=");

        //Split into individual characters
        symbol_array = string_input.split(/[0-9]/);
        symbol_array = symbol_array.slice(1,-1); //Removes the quotation mark from the string
        symbol_array = symbol_array.filter((element) => {
            return element != "" //Remove empty elements from array
        })
        let numbers = []; 
        string_input = string_input.split(/[+-/*]/);
        numbers = Array.from(string_input);
        numbers = numbers.map((element) => {
            return parseInt(element);
        })

        //Create combined array
        let combined_array = [];
        for (let i = 0; i < string_input.length; i++) {
            combined_array.push(string_input[i]);
            if (i < string_input.length - 1) {
                combined_array.push(symbol_array[i]);
            }
        }

        //Set result to 0
        let result = 0;
        let previous_symbol = "+";

        //Does the calculation
        for (let index in combined_array) {
            if (numbers.includes(parseInt(combined_array[index]))) {
                if (previous_symbol == "+") {
                    result += parseInt(combined_array[index]);
                }
                else if (previous_symbol == "-") {
                    result -= parseInt(combined_array[index]);
                }
                //Adding the new operations here because I am too lazy to make a function
                else if (previous_symbol == "*") {
                    result = result * parseInt(combined_array[index]);
                }
                else if (previous_symbol == "/") {
                    result = result / parseInt(combined_array[index]);
                }
                
                
            }
            //Change previous_symbol
            else {
                previous_symbol = this.checkOperator(combined_array[index], previous_symbol);
            }
            // else if (combined_array[index] == "+") {
            //     previous_symbol = "+";
            // }
            // else if (combined_array[index] == "-") {
            //     previous_symbol = "-";

            // }
        }

        return result;
    }
}

let calc = new Calculator; 

let answer = calc.calculate("100 / 5 + 20");
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

