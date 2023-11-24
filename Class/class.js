// Rewrite the following to a class

// function Clock({ template }) {
  
//     let timer;
  
//     function render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
//   }
  
//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();

class Clock {
    constructor({template}) {
        //Template is an object that tells the console how to log the output
        this.template = template;
        this.timer;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
  
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
  
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
  
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
  
        console.log(output);
    }


    start() {
        //This is necessary to bind this.template correctly
        let render = () => {this.render()};
        this.timer = setInterval(render, 1000);

    }

    stop() {
        let timer = this.timer;
        clearInterval(timer);
    }
}

//Execute

let clock = new Clock({template: 'h:m:s'});
clock.start();