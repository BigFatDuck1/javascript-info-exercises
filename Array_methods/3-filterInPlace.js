// Write a function filterRangeInPlace(arr, a, b) 
//that gets an array arr and removes from it all values except those that are between a and b. 
//The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

let filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Index: ${i}; Value: ${arr[i]}`)
        if (!(arr[i] >= a && arr[i] <= b)) {
            arr.splice(i, 1);
            //Set the index back otherwise "innocent" elements will be deleted
            i--;
        }
    }
}

//Test
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 7);

console.log(arr);