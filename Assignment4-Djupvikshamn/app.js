'use strict'
function init() {
    console.log("Initializing program");
    fetchData();
    changeLanguage();
}
function changeLanguage() {
    console.log("In change-Language function")
    var element = document.getElementById("englishLogo")
    element.addEventListener("click", myFunction);
}
function myFunction() {
    console.log("Hello World!");
    var popupWindow = window.open('./engelska.html', 'Djupvikhamn', 'width=900,height=550');
    popupWindow.focus();
}
function fetchData(url = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json') {
    console.log("Fetching data ");
    fetch(url)
        .then(result => result.json())
        .then(result => handleResult(result))
        .catch(error => console.log(error))
}
function handleResult(result) {
    console.log("In handleResult function");
    console.log("All results:");
    console.log(result)
    var dateObj = new Date(result.approvedTime);
    console.log(dateObj)
    var dateString = dateObj.toDateString();
    var timeString = dateObj.toTimeString();
    console.log("DateString: "+dateString);
    console.log("Timestring:"+ timeString);


    var test = document.createElement("h3");
    test.innerHTML =dateString;
    document.getElementById("weatherplace").appendChild(test);

}
window.addEventListener('load', init)

