//First, implement the method calculate(str) that 
//takes a string like "1 + 2" in the format 
//“NUMBER operator NUMBER” (space-delimited) 
//and returns the result. 
//Should understand plus + and minus -.

//Sum function
let sumAll = (...array) => {
    let result = 0;
    for (let element in array) {
        result += parseInt(array[element]); //Add each element in args array to result
        
    }
    return result;
} 

console.log(sumAll(1,2,3,4,5)) //Test


