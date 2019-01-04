
var goButton = document.getElementById("goButton");



//funciton 
function calculatePercentFunc() {

var enterPercent = document.getElementById("percent").value;

var enterPrePercent = document.getElementById("prePercent").value;
  
var percent = enterPercent / 100 * enterPrePercent;

  var resultsDisplay = document.getElementsByTagName("p")[1];
  
  //display total percent but as a fixed, 2-decimal string.
 resultsDisplay.innerHTML = +percent.toFixed(2);

  //enter valid number error message
    if(Number.isNaN(+enterPercent) || +enterPrePercent==0 || Number.isNaN(+enterPrePercent) || +enterPrePercent==0 ) resultsDisplay.innerHTML = "Enter valid number";
  
} //end of function

