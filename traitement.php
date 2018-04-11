<?php
$content = ["listDir"=> "", "listFile"=> ""]; // on créé un tableau qui contient deux éléments "listDir" et "listFile" qui sont vides
$content['listDir'] = array_filter(glob("*"), "is_dir"); // on remplit listDir - on applique un filtre "dossier" --> is_dir, sur notre dossier glob("*")
$content['listFile'] = array_filter(glob("./*"), "is_file"); // on remplit listFile - on applique un filtre "fichiers" --> is_file, sur notre dossier glob("*")
// glob("*") = je parcours les éléments 
var_dump($content);





if (isset($_POST['path'])){
    $path = $_POST['path'];
    

}

















?>