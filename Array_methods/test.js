let removeSpace = (str) => {
    str = str.split('');
    str = str.filter((element) => {
        return element != " ";
    })
    return str;
}

let result = removeSpace("1 -   2 - 3");
result = result.join("");
result = [...result];
//console.log(result);
console.log(100/5);
