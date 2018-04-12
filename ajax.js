// Déclaration de la méthode et des paramètres Ajax

function explorateur(chemin){
    var data = new FormData();
    console.log(chemin+"*");
        data.append("path", chemin+"*");
    var paramAjax = {
        method : "POST",
        body : data
    };

    // fetch et affichage des éléments du fichier PHP
    fetch("traitement.php", paramAjax).then(function(response) {
        return response.json();
    })
    .then(function(response) {
        for (elements in response){
            // console.log("response[elements] = "+elements);
            for (donnees in response[elements]){
                
                console.log(response[elements][donnees]);
                
                if (elements == "listDir"){
                    document.getElementById('injectionAjax').innerHTML += '<p><a href="' +response[elements][donnees] +'">' +response[elements][donnees].slice(response[elements][donnees].lastIndexOf("/")+1, response[elements][donnees].lentgh) + '</a></p>';
                    // console.log (response[elements][donnees].indexOf("/"));
                }
                else if (elements == "listFile"){
                    document.getElementById('injectionAjax').innerHTML += "<p>"+ response[elements][donnees].slice(response[elements][donnees].lastIndexOf("/")+1, response[elements][donnees].lentgh) + "</p>";
                }
            }
        }
    });
}

var cheminNouveau = ["./"];
var i = 0;

explorateur(cheminNouveau[0]); // on appelle la fonction la première fois avec l'argument du chemin

// Quand on clique sur un dossier ... 
document.querySelector('#injectionAjax').addEventListener('click', function(event){

    if (event.target.tagName.toLowerCase() == "a"){
        event.preventDefault();
        //  console.log(event.target.href);
        //  console.log(event.target.pathname);
        //  console.log(event.target.innerHTML);
        i++;
        cheminNouveau[i] = event.target.innerText+"/";
       
        document.getElementById('injectionAjax').innerHTML = "<button>Retour</button>";
        explorateur(cheminNouveau[i]);
    } 
    else if (event.target.tagName.toLowerCase() == "button"){
        event.preventDefault();
        cheminNouveau.pop();
        i--;
        if (i == 0){
        document.getElementById('injectionAjax').innerHTML = "";
        }
        else{
            document.getElementById('injectionAjax').innerHTML = "<button>Retour</button>";
        }
        explorateur(cheminNouveau[i]);
    }
    else {
        event.preventDefault();
    }
});