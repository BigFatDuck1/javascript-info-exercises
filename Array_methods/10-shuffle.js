//Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
//Multiple runs of shuffle may lead to different orders of elements. For instance:

let shuffle = (array) => {
    array.sort((a,b) => {
        let random_a = Math.floor(Math.random()*100);
        let random_b = Math.floor(Math.random() *100);

        a = a * random_a;
        b = b * random_b; 

        if (a < b) {
            return -1;
        }
        else {
            return 1;
        }

    })  
    
    return array;
}

arr = [1,2,3,4,5,6];

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));