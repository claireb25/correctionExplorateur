var data = new FormData();
    data.append("path","./*");

var paramAjax = {
    method : "POST",
    body : data
};


fetch("traitement.php", paramAjax).then(function(response) {
  return response.json();
})
.then(function(response) {
   console.log("response = "+response);
    for (elements in response){
        console.log("response[elements] = "+elements);
        for (donnees in response[elements]){
            console.log(" valeur des éléments de la réponse = "+response[elements][donnees]);
            document.getElementById('injectionAjax').innerHTML += response[elements][donnees] + "<br>";
        }
    }
});