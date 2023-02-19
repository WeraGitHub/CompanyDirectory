<?php

include('./libs/php/modals.php')

?>


<!DOCTYPE html>

<html lang="en" >
    <head>
        <meta charset="utf-8">
        <title>Company Directory</title>
        <meta name="description" content="Company Directory">
        <meta name="author" content="Weronika Limberger">
        
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" type="text/css" href="libs/vendors/css/bootstrap.min.css">
        
        <!-- My CSS -->
        <link rel="stylesheet" type="text/css" href="libs/css/styles.css"/> 

    </head>
    <body >
      <div class="mainContainer">

      <!-- Navigation -->
      <nav  class="navbar sticky-top ">

        <!-- top of the navbar -->
        <div id="main-nav">
          <a id="comDir" class="text-color" href="index.html" >Company Directory</a>
          <button id="btn-add-record" class="btn btn-success ">ADD AN EMPLOYEE</button>
        </div>

          <!-- search by the name option -->
        <div id="navSearch">
            <input id="input-name" class="form-control" type="search" placeholder="Search employees by the last name" >
        </div>

        <!-- options and filters here -->
        <div id="navOptions">
          <button id="departments" class="btn btn-success ">ALL DEPARTMENTS</button>
          <button id="locations" class="btn btn-success ">ALL LOCATIONS</button>
          <button id="employees" class="btn btn-success ">ALL EMPLOYEES</button>
          <button id="location-filter" class="btn btn-success ">EMPLOYEES FILTERED BY LOCATION</button>
          <button id="department-filter" class="btn btn-success ">EMPLOYEES FILTERED BY DEPARTMENT</button>
          <!-- <a href="./libs/sql/companydirectory.sql" download >
            <button id="download" class="btn btn-success">DOWNLOAD THE DATABASE TO YOUR DRIVE</button>
          </a> -->
        </div>

        <div id="navOptionsDrop">
          <!-- drop down selections here -->
          <button id="navOptionsBtn" class="btn btn-success ">OPTIONS</button>
          <div id="optionsAll">
            <button id="departmentsM" class="btn btn-success MobileNav">LIST ALL DEPARTMENTS</button>
            <button id="locationsM" class="btn btn-success MobileNav">LIST ALL LOCATIONS</button>
            <button id="employeesM" class="btn btn-success MobileNav">SHOW ALL EMPLOYEES</button>
            <button id="location-filterM" class="btn btn-success MobileNav">SHOW EMPLOYEES FILTERED BY LOCATION</button>
            <button id="department-filterM" class="btn btn-success MobileNav">SHOW EMPLOYEES FILTERED BY DEPARTMENT</button>
            <!-- <a href="./libs/sql/companydirectory.sql" download >
              <button id="downloadM" class="btn btn-success MobileNav">DOWNLOAD THE DATABASE TO YOUR DRIVE</button>
            </a> -->
          </div>
        </div>
      </nav>

      <!-- Employee and other cards here   -->
    
      <div id="table-main" class="card-group">
      </div>


    </div>

     

      <footer class="companyFooter">
        <div>

          &copy; &nbsp; Company Directory &nbsp; 2020 
          <br>
          <img src="./media/Signature Black.png" class="signature">
          
        </div>
      </footer>
      
        <script type="application/javascript" src="libs/js/jquery-2.2.3.min.js"></script>
        <script type="application/javascript" src="libs/vendors/js/bootstrap.min.js"></script> 
        <script type="application/javascript" src="libs/js/script.js"></script>
    </body>

</html>