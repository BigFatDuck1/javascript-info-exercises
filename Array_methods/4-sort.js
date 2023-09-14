//Sort in descending order

let sortD = (array) => {
    array.sort((a,b) => {
        if (a > b) {
            return -1;
        }
        else if (a < b) {
            return 1;
        }
    })
}


//Test
let arr = [5, 2, 1, -10, 8];
let arr1 = [10,5];

sortD(arr);

console.log(arr); // 8, 5, 2, 1, -10