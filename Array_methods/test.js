let removeSpace = (str) => {
    str = str.split("");
    str = str.filter((element) => {
        return element != " ";
    })
    return str;
}

let result = removeSpace("1 -   2 - 3");
console.log(result);