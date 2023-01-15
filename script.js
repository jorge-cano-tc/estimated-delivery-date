//Estimated delivery date

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0"); // get the date padStart => 01
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
var fullDate = dd + "." + mm + "." + yyyy;

var someDate = new Date();
var numberOfDaysToAdd = 6;
someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

var dd = String(someDate.getDate()).padStart(2, "0");
var mm = String(someDate.getMonth() + 1).padStart(2, "0");
var y = someDate.getFullYear();

var someFormattedDate = dd + "." + mm + "." + y;

today = fullDate + " bis " + someFormattedDate;

document.getElementById("m-date").innerHTML = today;
