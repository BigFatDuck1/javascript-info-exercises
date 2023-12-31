// The following code creates an array of shooters.
// Every function is meant to output its number. But something is wrong…
//TODO: Why do all of the shooters show the same value?
// TODO: Fix the code so that they work as intended.


//Solution 1: Using a for loop
function makeArmy_for() {
    let shooters = [];
  
    //let i = 0;

    for (let i = 0; i < 10; i++) {
      let shooter = function() { // create a shooter function,
        console.log( i ); // that should show its number
      };
      shooters.push(shooter); // and add it to the array
      //i++;
    }
  
    // ...and return the array of shooters
    return shooters;
  }

  //Solution 2: define i before function call
  function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        let index = i;
      let shooter = function() { // create a shooter function,
        console.log( index ); // that should show its number
      };
      shooters.push(shooter); // and add it to the array
      i++;
    }
  
    // ...and return the array of shooters
    return shooters;
  }
  
  
  let army = makeArmy();
  
  // all shooters show 10 instead of their numbers 0, 1, 2, 3...
  army[0](); // 10 from the shooter number 0
  army[1](); // 10 from the shooter number 1
  army[2](); // 10 ...and so on.