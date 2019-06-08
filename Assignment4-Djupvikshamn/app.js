'use strict'
function init() {
    console.log("Initializing program");
    getGridPictures();
    fetchData();
    changeLanguage();
}
function getGridPictures() {
    const images = Array.from(document.getElementsByClassName("turistpagePics"));

    images.map(image => {
        const ratio = image.height / image.width;
        console.log(ratio);
        ratio >= 1 ? image.classList.add("tall") : image.classList.add("wide");
    })
}
function changeLanguage() {
    console.log("In change-Language function")
    var element = document.getElementById("englishLogo")
    if (element) element.addEventListener("click", myFunction);
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
    console.log("DateString: " + dateString);
    console.log("Timestring:" + timeString);

    var resultArray = result.timeSeries;
    console.log("TimeSeries array:");
    console.log(resultArray);
    var dateElement = document.createElement("p");
    dateElement.setAttribute("id", "date")
    dateElement.innerHTML = dateString;
    var timeElement = document.createElement("p");
    timeElement.setAttribute("id", "time");
    timeElement.innerHTML = timeString.slice(0, 8);

    document.getElementById("weatherplace").appendChild(dateElement);
    document.getElementById("timePlace").appendChild(timeElement);

}
window.addEventListener('load', init)

