//funciton 
function calculatePercentFunc() {

var enterPercent = document.getElementById("percent").value;

var enterPrePercent = document.getElementById("prePercent").value;
  
var percent = enterPercent / 100 * enterPrePercent;

  var resultsDisplay = document.getElementsByTagName("p")[0];
  
  //display total percent but as a fixed, 2-decimal string.
 resultsDisplay.innerHTML = `\$${+percent.toFixed(2)}`;

  //enter valid number error message
    if(Number.isNaN(+enterPercent) || Number.isNaN(+enterPrePercent) ) resultsDisplay.innerHTML = "Enter valid number";
  
} 

