'use strict'
function init () {
    console.log("Initializing program");
   fetchData();
  }
  function fetchData(url = 'https://stryk.herokuapp.com/tipset'){
    fetch(url)
    .then(result => result.json())
    .then(result => handleResult(result))
    .catch(error => console.log(error))
  }
  function handleResult (result) {
      console.log(result);
  }    
  window.addEventListener('load', init) 