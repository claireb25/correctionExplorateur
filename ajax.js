// Déclaration de la méthode et des paramètres Ajax

function explorateur(chemin){

    var data = new FormData();
        data.append("path", chemin);

    var paramAjax = {
        method : "POST",
        body : data
    };

    // fetch et affichage des éléments du fichier PHP
    fetch("traitement.php", paramAjax).then(function(response) {
    return response.json();
    })
    .then(function(response) {
    console.log(response);
        for (elements in response){
            // console.log("response[elements] = "+elements);
            for (donnees in response[elements]){
                // console.log(" valeur des éléments de la réponse = "+response[elements][donnees]);
                var url = response[elements][donnees].slice(2); // permet de retirer le "./" -> affiche à partir du 2ème élement de la chaine de caractères
                if (elements == "listDir"){
                    document.getElementById('injectionAjax').innerHTML += '<p><a href="' +response[elements][donnees] +'">' +url + '</p>';
                }
                else if (elements == "listFile"){
                    document.getElementById('injectionAjax').innerHTML += "<p>"+ url + "</p>";
                }
            }
        }
    });
}
explorateur("./*");

// Quand on clique sur un dossier ... 
document.querySelector('#injectionAjax').addEventListener('click', function(event){
    event.preventDefault();
    //  console.log(event.target.href);
    var cheminNouveau = "./"+event.target.innerText+"/*";
    console.log(cheminNouveau);
    //  console.log(event.target.pathname);
    //  console.log(event.target.innerHTML);
    //  console.log('coucou');
    explorateur(cheminNouveau);

});