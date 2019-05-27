'use strict'
function init() {
    console.log("Initializing program");
    fetchData();
}
function fetchData(url = 'https://stryk.herokuapp.com/tipset') {
    fetch(url)
        .then(result => result.json())
        .then(result => handleResult(result))
    //.catch(error => console.log(error))
}
function handleResult(result) {
    console.log("In handleResult function");
    console.log("All results:");
    console.log(result);

    for (let i = 0; i <= result.length-1; i++) {
        var trElements = document.createElement("tr");
        trElements.setAttribute("id", "Rows");
        document.getElementById("table").appendChild(trElements);

        var numbers = document.createElement("td");
        numbers.setAttribute("id", "Num");
        numbers.innerHTML = result[i].gameNumber;
        trElements.appendChild(numbers);

        var teams = document.createElement("td");
        teams.setAttribute("id", "Team");
        teams.innerHTML = result[i].teams;
        trElements.appendChild(teams);

        var span = document.createElement("span");
        var kick = document.createElement("div");
        var stem = document.createElement("div");

        kick.setAttribute("id", "kick");
        stem.setAttribute("id", "stem");
        span.setAttribute("id", "checkmark");
        span.appendChild(stem);
        span.appendChild(kick);

        if (result[i].outcome == "2") {
            var checkmark1 = document.createElement("td");
            checkmark1.setAttribute("id", "checkmark1");
            checkmark1.setAttribute("class", "Check");

            var checkmarkX = document.createElement("td");
            checkmarkX.setAttribute("id", "checkmarkX");
            checkmarkX.setAttribute("class", "Check");

            var checkmark2 = document.createElement("td");
            checkmark2.setAttribute("id", "checkmark2");
            checkmark2.setAttribute("class", "Check");
            //checkmark2.innerHTML = result[i].outcome;

            checkmark2.appendChild(span);

            trElements.appendChild(checkmark1);
            trElements.appendChild(checkmarkX);
            trElements.appendChild(checkmark2);

        } if (result[i].outcome == "X") {

            var checkmark1 = document.createElement("td");
            checkmark1.setAttribute("id", "checkmark1");
            checkmark1.setAttribute("class", "Check");

            var checkmarkX = document.createElement("td");
            checkmarkX.setAttribute("id", "checkmarkX");
            checkmarkX.setAttribute("class", "Check");
            //checkmarkX.innerHTML = result[i].outcome;
            checkmarkX.appendChild(span);

            trElements.appendChild(checkmark1);
            trElements.appendChild(checkmarkX);
        } if (result[i].outcome == "1") {
            var checkmark1 = document.createElement("td");
            checkmark1.setAttribute("id", "checkmark1");
            checkmark1.setAttribute("class", "Check");
            checkmark1.appendChild(span);
            //checkmark1.innerHTML = result[i].outcome;
            trElements.appendChild(checkmark1);
        }


    }



}

window.addEventListener('load', init) 