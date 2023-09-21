//Randomize with Fisher-Yates algorithm

//Fisher-Yates: Takes an element from the input list, 
//randomly swaps with another and puts that in output list

let shuffle = (array) => {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let j = Math.floor(Math.random() * len);

        [array[i], array[j]] = [array[j], array[i]];

    }

    return array;

}

let shuffle_reverse = (array) => {
    let len = array.length;
    for (let i = len; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

    return array;

}

//Counting whether it's truly random
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};
  
for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}

//Reset for true randomness
//Need to use shuffle_reverse as that makes sure each index has an equal chance of being picked

console.log("\n");

count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle_reverse(array);
    count[array.join('')]++;
}

for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}
