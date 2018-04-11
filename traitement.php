<?php
$content = ["listDir"=> "", "listFile"=> ""];
$content['listDir'] = array_filter(glob("*"), "is_dir");
$content['listFile'] = array_filter(glob("*"), "is_file");
// echo $content['listFile'];
var_dump($content);





if (isset($_POST['path'])){
    $path = $_POST['path'];
    

}

















?>