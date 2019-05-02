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
    for(let i = 0; i<=13;i++){
        var trElement = document.createElement("tr")
        document.body.appendChild(trElement);  
        trElement.innerHTML = "TEST";  
        console.log(result[i]);
    }
    
    //console.log(result[0].gameNumber);
   
    
}
window.addEventListener('load', init) 