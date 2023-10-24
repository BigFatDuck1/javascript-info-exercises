// Here’s the code that creates a pair of objects, then modifies them.

// Which values are shown in the process?


let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
console.log( rabbit.jumps ); // ? (1)

//1: true
//because rabbit contains jumps property

delete rabbit.jumps;

console.log( rabbit.jumps ); // ? (2)

//2: null
//because delete has deleted the property from rabbit, so 
//console will log the property in animal (inherited property)

delete animal.jumps;

console.log( rabbit.jumps ); // ? (3)

//3: undefined
//property is deleted from prototype so this property
//no longer exists  
