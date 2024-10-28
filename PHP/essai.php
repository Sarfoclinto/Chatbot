<?php 

session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$conn = mysqli_connect("localhost","root","","reactdb");

if(!$conn){
    echo"Failed to connect";
}





if(isset($_POST["submit"])){
    
    $email = mysqli_real_escape_string($conn, $_POST["emailAddress"]);
    $password = mysqli_real_escape_string($conn, $_POST["password"]);

    $query = "SELECT * FROM users WHERE email = '$email' AND password = '$password' ";

    $result = mysqli_query($conn, $query);

    if(mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);

        $_SESSION['login']= true;
        $_SESSION['email']= $row['email'];

        header('location: /dashbaord');

    } else{

        // Redirect back to login page with error message
        header('Location: /login');
        exit;
    }
    
}


// $method = $_SERVER['REQUEST_METHOD'];

// $email = $password = '';

// switch ($method) {

//     case 'GET':

//         $query = "SELECT * FROM users WHERE email = '$email' AND password = '$password' ";

//         $result = mysqli_query($conn, $query);

//         if(mysqli_num_rows($result) > 0){
//             while($row = mysqli_fetch_assoc($result)){
//                 $json_array ['userData'] = array('username'=>$row['username'],'email'=>$row['email']) ;
//             };

//             echo json_encode($json_array['userData']);

//             return;
            
            
//         } else{
//             echo json_encode(['result'=>"Please User Not Found"]);

//             return;
            
//         }
    
//     break;

// }

?>