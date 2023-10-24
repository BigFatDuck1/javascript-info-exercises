// We have rabbit inheriting from animal.

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?


let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};
  
rabbit.eat();

//Answer: rabbit receives the full property, as this is called at runtime i.e. 
//whatever is behind the (.) is this

console.log(animal.full); //undefined
console.log(rabbit.full); //true, because eat() has been called on rabbit