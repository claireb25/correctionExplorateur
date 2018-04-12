<?php
   
    if (isset($_POST['path'])){
        $path = $_POST['path'];
        if (strpos($path,'/..') > -1){
            $path = substr($path, 0, strpos($path,'/..')); // retirer les .. pour ne pas les exécuter
        }
        $path = $_SERVER["DOCUMENT_ROOT"]."/correctionExplorateur"."/".substr($path, 0);
    } 
    else { 
        $path = $_SERVER["DOCUMENT_ROOT"]."/correctionExplorateur"; 
    }

    
    // echo (substr($_GET['path'], 0, strpos($_GET['path'], '/..')));
    
    

    $content = ["listDir"=> "", "listFile"=> ""]; // on créé un tableau qui contient deux éléments "listDir" et "listFile" qui sont vides
    $content['listDir'] = array_filter(glob($path), "is_dir"); // on remplit listDir - on applique une fonction callback -> is_dir, qui va tester l'url et choisir uniquement les dossiers, sur notre dossier glob("*")
    $content['listFile'] = array_filter(glob($path), "is_file"); // on remplit listFile - on applique un filtre "fichiers" --> is_file, sur notre dossier glob("*")
    // glob("*") = je parcours les éléments ;
    
    echo json_encode($content);
    






















?>