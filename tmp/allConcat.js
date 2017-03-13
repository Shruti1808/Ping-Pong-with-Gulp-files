var Calculator = require('./../js/pingpong.js').calculatorModule;


$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");           //Created a Calculator object
    var output = simpleCalculator.pingPong(goal);            //Calling pingPong methodon Calculator object
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
