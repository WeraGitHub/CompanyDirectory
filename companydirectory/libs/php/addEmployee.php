<?php

	// example use from browser
	// http://localhost/companydirectory/libs/php/insertDepartment.php?name=New%20Department&locationID=1

	// remove next two lines for production
	
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true);

	include("config.php");

	header('Content-Type: application/json; charset=UTF-8');

	$conn = new mysqli($cd_host, $cd_user, $cd_password, $cd_dbname, $cd_port, $cd_socket);

	if (mysqli_connect_errno()) {
		
		$output['status']['code'] = "300";
		$output['status']['name'] = "failure";
		$output['status']['description'] = "database unavailable";
		$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output);

		exit;
	}	


	//server side validation here
	// $first = $last = $job = $email = '';
	// $errors = array('first' => '', 'last' => '', 'job' => '', 'email' => '');

	
	// 	// check first name
	// 	if(empty($_POST['first'])){
	// 		$errors['first'] = 'A title is required';
	// 	} else{
	// 		$first = $_POST['first'];
	// 		if(!preg_match('/^[a-zA-Z\s]+$/', $first)){
	// 			$errors['first'] = 'First name must be letters and spaces only';
	// 		}
	// 	}

	// 	// check last name
	// 	if(empty($_POST['last'])){
	// 		$errors['last'] = 'A title is required';
	// 	} else{
	// 		$last = $_POST['last'];
	// 		if(!preg_match('/^[a-zA-Z\s]+$/', $last)){
	// 			$errors['last'] = 'Last name must be letters and spaces only';
	// 		}
	// 	}

	// 	// check job name
	// 	if(empty($_POST['job'])){
	// 		$errors['job'] = 'A title is required';
	// 	} else{
	// 		$job = $_POST['job'];
	// 		if(!preg_match('/^[a-zA-Z\s]+$/', $job)){
	// 			$errors['job'] = 'Job Title must be letters and spaces only';
	// 		}
	// 	}
		
	// 	// check email
	// 	if(empty($_POST['email'])){
	// 		$errors['email'] = 'An email is required';
	// 	} else{
	// 		$email = $_POST['email'];
	// 		if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
	// 			$errors['email'] = 'Email must be a valid email address';
	// 		}
	// 	}
	



	// $_REQUEST used for development / debugging. Remember to change to $_POST for production

	$query = 'INSERT INTO personnel (firstName, lastName, jobTitle, email, departmentID) VALUES(' . $_POST['first'] . ',' . $_POST['last'] . ',' . $_POST['job'] . ',' . $_POST['email'] . ', (SELECT d.id FROM department d WHERE d.name = ' . $_POST['depName'] . '))';

	$result = $conn->query($query);
	
	if (!$result) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = [];
	
	mysqli_close($conn);

	echo json_encode($output); 

?>