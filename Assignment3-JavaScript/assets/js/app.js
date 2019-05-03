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

   for (let i = 0; i <= result.length;i++) {
       var trElements = document.createElement("tr");
       trElements.setAttribute("id","Rows");
       document.getElementById("table").appendChild(trElements);
      
        var numbers= document.createElement("td");
        numbers.setAttribute("id", "Num");
        numbers.innerHTML =result[i].gameNumber;
        trElements.appendChild(numbers);

        var teams = document.createElement("td");
        teams.setAttribute("id","Team");
        teams.innerHTML = result[i].teams;
        trElements.appendChild(teams);

        var checkmark = document.createElement("td");
        checkmark.setAttribute("id", "Check");
        checkmark.innerHTML = result[i].outcome;
        trElements.appendChild(checkmark);

        console.log(result[i]);

    }



}

window.addEventListener('load', init) 