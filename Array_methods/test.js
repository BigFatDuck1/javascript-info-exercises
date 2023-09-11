let upperFunction = (item) => {
    let first_letter = item.charAt(0).toUpperCase();
    item = item.slice(1);
    item = first_letter + item;
    console.log(item)
    return item;
}

console.log(upperFunction("hello"));