// Déclaration de la méthode et des paramètres Ajax

var data = new FormData();
    data.append("path","./*");

var paramAjax = {
    method : "POST",
    body : data
};

// fetch et affichage des élémlents du fichier PHP
fetch("traitement.php", paramAjax).then(function(response) {
  return response.json();
})
.then(function(response) {
   console.log("response = "+response);
    for (elements in response){
        console.log("response[elements] = "+elements);
        for (donnees in response[elements]){
            console.log(" valeur des éléments de la réponse = "+response[elements][donnees]);
            var url = response[elements][donnees].slice(2); // permet de retirer le "./" -> affiche à partir du 2ème élement de la chaine de caractères
            if (elements == "listDir"){
                document.getElementById('injectionAjax').innerHTML += '<a href="' +response[elements][donnees] +'">' +url + '<br>';
            }
            else if (elements == "listFile"){
                document.getElementById('injectionAjax').innerHTML += url + "<br>";
            }
        }
    }
});

// Quand on clique sur un dossier ... 