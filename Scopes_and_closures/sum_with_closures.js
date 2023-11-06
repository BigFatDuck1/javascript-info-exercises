//Write function sum that works like this: sum(a)(b) = a+b

// function first_digit(a) {
//     const first_digit = a;

//     const second_function = function(b) {
//         return first_digit + b;
//     }

//     return second_function;

// }

// let sum = first_digit(5);
// let result = sum(6);

// console.log(result);

function sum(a) {
    const first_digit = a;

    const second_function = function(b) {
        return first_digit + b;
    }

    return second_function;

}

console.log(sum(4)(6));