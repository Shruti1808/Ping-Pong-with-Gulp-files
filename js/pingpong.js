function Calculator(skinName){                         //Constructor for Calculator that takes skin name as an argument
    this.skin = skinName;
}


Calculator.prototype.pingPong = function(goal) {                          //turns pingPong function into a method
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
}

exports.calculatorModule = Calculator; //Calling property calculatorModule on exports objects and it's equal to constructor function 
