'use strict'
function init() {
    console.log("Initializing program");
    fetchData();
}
function fetchData(url = 'https://stryk.herokuapp.com/tipset') {
    fetch(url)
        .then(result => result.json())
        .then(result => handleResult(result))
        .catch(error => console.log(error))
}
function handleResult(result) {
    console.log("In handleResult function");
    console.log("All results:");
    console.log(result);

   for (let i = 0; i <= result.length; ++i) {
        var numberElements = document.createElement("tr");
        var teamElements = document.createElement("td");
        numberElements.setAttribute("id", "rowrow"); 
        numberElements.innerHTML =result[i].gameNumber;
        teamElements.innerHTML =result[i].teams;
        
        document.getElementById("table").appendChild(numberElements);
        document.getElementById("rowrow").appendChild(teamElements);
       // document.getElementById("table").appendChild(teamElements);
        console.log(result[i]);

    }

    //console.log(result[0].gameNumber);


}

window.addEventListener('load', init) 