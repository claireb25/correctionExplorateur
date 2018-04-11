<?php

$path = "./*";


if (isset($_POST['path'])){
    $path = $_POST['path'];
    $content = ["listDir"=> "", "listFile"=> ""]; // on créé un tableau qui contient deux éléments "listDir" et "listFile" qui sont vides
    $content['listDir'] = array_filter(glob($path), "is_dir"); // on remplit listDir - on applique une fonction callback -> is_dir, qui va tester l'url, sur notre dossier glob("*")
    $content['listFile'] = array_filter(glob($path), "is_file"); // on remplit listFile - on applique un filtre "fichiers" --> is_file, sur notre dossier glob("*")
    // glob("*") = je parcours les éléments 

}

















?>