// table selector flags

var loc_array = [];
var dpt_array = [];

// $('#comDir').on('click', () => {
//     this.window.location='index.html';
// });

//navbar for mobiles
$('#navOptionsBtn').on('click', () => {
    $('#optionsAll').slideToggle('slow');
})

$('#optionsAll').on('click', () => {
    $('#optionsAll').slideToggle('slow');
})



// Lists all employees 
function displayAllEmployees() {
    $.ajax({
        url: "libs/php/getAllEmployeesDetails.php",
        type: 'GET',
        dataType: 'json',
        success: function(result){
            if(result.status.code == 200){
                $("#table-main").empty();
                console.log(result);
                for(let i = 0 ; i < Object.keys(result['data']).length ; i++){
                    $("#table-main").append('<div  class="col-sm-6 col-md-6 col-lg-3"><div id="employee-card" class="card  text-center"><div class="card-body "><ul class="list-group "></li><li><h5>' + result['data'][i]['firstName'] + " " + result['data'][i]['lastName']  + '</5></li><li>Job Title: '
                    + result['data'][i]['jobTitle'] + '</li>'
                    + '</li><li>Department: ' + result['data'][i]['department'] + '</li><li>City: '
                    + result['data'][i]['location'] + '</li></ul></div><div class="card-footer"><button id="btn-more" value="' 
                    + result['data'][i]['lastName'] + " " + result['data'][i]['firstName'] + '" type="button" class="btn btn-success ">MORE INFO & OPTIONS</button></div></div></div>');
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
}

// displays them as the very first thing
displayAllEmployees();

// Options btn click handler
$(document).on("click", "#btn-more", function(e) {
    getEmployeeDetails(JSON.stringify((this).value.split(" ")[1]),
            JSON.stringify((this).value.split(" ")[0])
            );
});

// Employees filtered by location 
function displayAllEmployeesWithLocationFilter() {
    $.ajax({
        url: "libs/php/getEmployeesByLocation.php",
        type: 'GET',
        dataType: 'json',
        success: function(result){
            if(result.status.code == 200){
                $("#table-main").empty();
                console.log(result);
                for(let i = 0 ; i < Object.keys(result['data']).length ; i++){
                    $("#table-main").append('<div  class="col-sm-6 col-md-6 col-lg-3"><div id="employee-card" class="card  text-center"><div class="card-body "><ul class="list-group "></li><li><h5>' + result['data'][i]['firstName'] + " " + result['data'][i]['lastName']  + '</5></li><li>Job Title: '
                    + result['data'][i]['jobTitle'] + '</li>'
                    + '</li><li>Department: ' + result['data'][i]['department'] + '</li><li>City: '
                    + result['data'][i]['location'] + '</li></ul></div><div class="card-footer"><button id="btn-more" value="' 
                    + result['data'][i]['lastName'] + " " + result['data'][i]['firstName'] + '" type="button" class="btn btn-success ">MORE INFO & OPTIONS</button></div></div></div>');
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
}
 
// Employees names filtered by department
function displayAllEmployeesWithDepartmentFilter() {
    $.ajax({
        url: "libs/php/getEmployeesByDepartment.php",
        type: 'GET',
        dataType: 'json',
        success: function(result){
            console.log(result);
            if(result.status.code == 200){
                $("#table-main").empty();
                console.log(result);
                for(let i = 0 ; i < Object.keys(result['data']).length ; i++){
                    $("#table-main").append('<div  class="col-sm-6 col-md-6 col-lg-3"><div id="employee-card" class="card  text-center"><div class="card-body "><ul class="list-group "></li><li><h5>' + result['data'][i]['firstName'] + " " + result['data'][i]['lastName']  + '</h5></li><li>Job Title: '
                    + result['data'][i]['jobTitle'] + '</li>'
                    + '</li><li>Department: ' + result['data'][i]['department'] + '</li><li>City: '
                    + result['data'][i]['location'] + '</li></ul></div><div class="card-footer"><button id="btn-more" value="' 
                    + result['data'][i]['lastName'] + " " + result['data'][i]['firstName'] + '" type="button" class="btn btn-success ">MORE INFO & OPTIONS</button></div></div></div>');
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
 };


// All departments
function displayAllDepartments() {
    dpt_array = [];
    $.ajax({
        url: "libs/php/getAllDepartmentsDetails.php",
        type: 'GET',
        dataType: 'json',
        success: function(result){
            console.log(result);
            if(result.status.code == 200){
                $("#table-main").empty();
                for(let i = 0 ; i < Object.keys(result['data']).length ; i++){
                    dpt_array.push(result['data'][i]['department'] + ", " + result['data'][i]['location']);
                    $("#table-main").append('<div  class="col-sm-6 col-md-6 col-lg-3"><div id="card-department" class="card  text-center"><div class="card-body "><ul class="list-group "><li><h5>' 
                        + result['data'][i]['department'] 
                        + '</h5><li>based in '
                        + result['data'][i]['location'] + '</li></ul></div><div class="card-footer"><button id="btn-dpt-more" value="'+ result['data'][i]['department'] +'" type="button" class="btn btn-success">MORE INFO & OPTIONS</button></div></div></div>');
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
}

// Options btn click handler
$(document).on("click", "#btn-dpt-more", function(e) {
    getDepartmentDetails(JSON.stringify((this).value));
});

// Locations names WKL: done
function displayAllLocations() {
    loc_array = [];
    $.ajax({
        url: "libs/php/getAllLocationsDetails.php",
        type: 'GET',
        dataType: 'json',
        success: function(result){
            console.log(result);
            if(result.status.code == 200){
                $("#table-main").empty();
                for(let i = 0 ; i < Object.keys(result['data']).length ; i++){
                    loc_array.push(result['data'][i]['name']);
                    $("#table-main").append('<div  class="col-sm-6 col-md-6 col-lg-4"><div id="card-location" class="card  text-center"><div class="card-body "><ul class="list-group "><li><h5>' 
                        + result['data'][i]['name'] + ' Office'
                        +  '</li><li>has ' + result['data'][i]['employees'] + ' employees'
                        + '</li></ul></div><div class="card-footer"><button id="btn-loc-more" type="button" value="'
                        + result['data'][i]['name'] + '" class="btn btn-success">MORE INFO & OPTIONS</button></div></div></div>');
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
}

// Options btn click handler
$(document).on("click", "#btn-loc-more", function(e) {
    getLocationDetails(JSON.stringify((this).value));
});

// Employee -more details info
function getEmployeeDetails(firstName, lastName) {
    $.ajax({
        url: "libs/php/getEmployeeDetails.php",
        type: 'POST',
        dataType: 'json',
        data: {
            firstName: firstName,
            lastName: lastName
        },
        success: function(result){
            if(result.status.code == 200){
                console.log(result);
                $("#table-details").empty();
                
                $('#table-details').append('<h4>' + result['data'][0]['firstName'] + ' ' + result['data'][0]['lastName'] +'</h4>' 
                + '<ul class="list-group "><li>Id: <span id="details-id">'
                + result['data'][0]['id']  + '</span></li>'
                + '</li><li>First name: <span id="details-first">' + result['data'][0]['firstName'] 
                + '</span></li><li>Last name: <span id="details-last">' + result['data'][0]['lastName'] 
                + '</span></li><li>Email: <span id="details-email">' + result['data'][0]['email'] 
                + '</span></li><li>Job title: <span id="details-title">' + result['data'][0]['jobTitle'] 
                + '</span></li><li>Department: <span id="details-department">' + result['data'][0]['department'] 
                + '</span></li><li>Location: <span id="details-location">' + result['data'][0]['location'] 
                + '</span></li></ul>');
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
           // console.log("employee failure");
            alert(`Database error: ${textStatus}`);
        }
    });
    $('#employeeModal').modal('show');
}

// Department - more detail - modal
function getDepartmentDetails(departmentName) {
    $.ajax({
        url: "libs/php/getDepartmentDetails.php",
        type: 'POST',
        dataType: 'json',
        data: {
            name: departmentName,
        },
        success: function(result){
            console.log(result);
            if(result.status.code == 200){
                console.log(result);
                $("#table-dpt-details").empty();

                $('#table-dpt-details').append('<h4><span id="details-dpt-name">' + result['data'][0]['department'] +'</span> Department</h4>' 
                + '<ul class="list-group"><li>Id: <span id="details-dpt-id">' + result['data'][0]['id']  
                + '</span></li><li>City: <span id="details-dpt-location">' + result['data'][0]['name']
                + '</span></li><li><span id="details-dpt-employees">' + result['data'][0]['employees']                
                + '</span> employees</li></ul>');
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            //console.log("department failure");
            alert(`Database error: ${textStatus}`);
        }
    });
    $('#departmentModal').modal('show');
}

// Location - more detail - modal
function getLocationDetails(locationName) {
    $.ajax({
        url: "libs/php/getLocationDetails.php",
        type: 'POST',
        dataType: 'json',
        data: {
            name: locationName,
        },
        success: function(result){
            console.log(result);
            if(result.status.code == 200){
                console.log(result);
                $("#table-loc-details").empty();

                $('#table-loc-details').append('<h4><span id="details-loc-name">' + result['data'][0]['name'] + '</span> Office</h4>' 
                + '<ul><li>Id: <span id="details-loc-id">' + result['data'][0]['id']
                + '</span></li><li>Departments: <span id="details-loc-locations">' + result['data'][0]['departments']
                + '</span></li><li>Employees: <span id="details-loc-employees">' + result['data'][0]['employees']
                + '</span></li></ul>');
            
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
    $('#locationModal').modal('show');
}

// All departments 
function getAllDepartments() {
    $.ajax({
        url: "libs/php/getAllDepartments.php",
        type: 'GET',
        dataType: 'json',
        success: function(result){
            console.log(result);
            if(result.status.code == 200){                
                $("#select-department-edit").empty();
                for(let i = 0 ; i < Object.keys(result['data']).length ; i++){
                    $("#select-department-edit").append('<option value=' + result['data'][i]['id'] + '>' + result['data'][i]['name'] + '</option>');
                    if(result['data'][i]['name'] == $('#details-department').html()){
                        $('#select-department-edit').val(result['data'][i]['id']);
                    }
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
}

// Gets all departments and puts them into add employee modal 
function populateAllDepartments() {
    $.ajax({
        url: "libs/php/getAllDepartments.php",
        type: 'GET',
        dataType: 'json',
        success: function(result){
            console.log(result);
            if(result.status.code == 200){
                $("#select-department-add").empty();
                for(let i = 0 ; i < Object.keys(result['data']).length ; i++){
                    $("#select-department-add").append('<option value=' + result['data'][i]['locationID'] + '>' + result['data'][i]['name'] + '</option>');
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
    $('#addEmployeeModal').modal('show');
}

// Gets all departments and puts them into add employee modal 
function populateAllLocations() {
    $.ajax({
        url: "libs/php/getAllLocations.php",
        type: 'GET',
        dataType: 'json',
        success: function(result){
            console.log(result);
            if(result.status.code == 200){
                $("#select-location-add-dpt").empty();
                for(let i = 0 ; i < Object.keys(result['data']).length ; i++){
                    $("#select-location-add-dpt").append('<option value=' + result['data'][i]['id'] + '>' + result['data'][i]['name'] + '</option>');
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
    $('#addDepartmentModal').modal('show');
}

// gets all locations
function getAllLocations() {
    $.ajax({
        url: "libs/php/getAllLocations.php",
        type: 'GET',
        dataType: 'json',
        success: function(result){
            console.log(result);
            if(result.status.code == 200){
                $("#select-dpt-location-edit").empty();
                for(let i = 0 ; i < Object.keys(result['data']).length ; i++){
                    $("#select-dpt-location-edit").append('<option value=' + result['data'][i]['id'] + '>' + result['data'][i]['name'] + '</option>');
                    if(result['data'][i]['name'] == $('#details-dpt-location').html()){
                        $('#select-dpt-location-edit').val(result['data'][i]['id']);
                    }
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
}

// Deletes employee 
function deleteEmployee(employeeID) {
    $.ajax({
        url: "libs/php/deleteEmployeeByID.php",
        type: 'POST',
        dataType: 'json',
        data: {
            id: employeeID
        },
        success: function(result){
            if(result.status.code == 200){
                console.log(result);
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
}

// Deletes department
function deleteDepartment(departmentID) {
    $.ajax({
        url: "libs/php/deleteDepartmentByID.php",
        type: 'POST',
        dataType: 'json',
        data: {
            id: departmentID
        },
        success: function(result){
            if(result.status.code == 200){
                console.log(result);        
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
}

// Deletes location
function deleteLocation(locationID) {
    $.ajax({
        url: "libs/php/deleteLocationByID.php",
        type: 'POST',
        dataType: 'json',
        data: {
            id: locationID
        },
        success: function(result){
            if(result.status.code == 200){
                console.log(result);        
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
}


function capitalize(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Populates and shows modal with edit employee details form WKL: done
function showEmployeeDetailsForm(){
    $('#input-first-edit').val($('#details-first').html());
    $('#input-last-edit').val($('#details-last').html());
    $('#input-email-edit').val($('#details-email').html());
    $('#input-title-edit').val($('#details-title').html());
    $('#select-department-edit').val($('#details-department').html());
    $('#select-location-edit').val($('#details-location').html());
    getAllDepartments();
    $('#employeeModal').modal('hide');
    $('#editModal').modal('show');
}

// Handles employee edit cancel modal hide/show
$(document).on('click' ,'#btn-employee-edit-cancel', function() {
    $('#employeeModal').modal('show');
});

// Handles department edit cancel modal hide/show
$(document).on('click' ,'#btn-department-edit-cancel', function() {
    $('#departmentModal').modal('show');
});


// Populates and shows modal with edit employee details form
function showDepartmentDetailsForm(){
    $('#input-dpt-edit').val($('#details-dpt-name').html());
    getAllLocations();
    $('#departmentModal').modal('hide');
    $('#editDptModal').modal('show');
}

var employees = true;
var locations = false;
var departments = false;

// Edit record event handler
$(document).on("click", "#btn-edit", function(e) {
    if(employees){
        showEmployeeDetailsForm();
    }else if(departments){
        showDepartmentDetailsForm();
    }else if(locations){
        showLocationDetailsForm();
    }
});

// Delete record event handler
$(document).on("click", "#btn-delete", function() {
    if(employees){
        $('#employeeModal').modal('hide');
        $('#deleteModal').modal('show');
    }else if(departments){
        $('#departmentModal').modal('hide');
        if($('#details-dpt-employees').html() > 0) {
            $('#deleteNo').modal('show');
        }else { 
            $('#deleteModal').modal('show');
        }
    }else if(locations){
        $('#locationModal').modal('hide');
        if($('#details-loc-employees').html() > 0) {
            $('#deleteNo').modal('show');
        }else { 
            $('#deleteModal').modal('show');
        }

    }
});

// Delete cancel event handler
$(document).on("click", "#btn-delete-cancel", function() {
    if(employees){
        $('#employeeModal').modal('show');
        $('#deleteModal').modal('hide');
    }else if(departments){
        $('#departmentModal').modal('show');
        $('#deleteModal').modal('show');
    }else if(locations){
        $('#locationModal').modal('show');
        $('#deleteModal').modal('show');
    }
});

//Protection for items with dependencies
$(document).on("click", "#btn-deleteNo-cancel", function() {
    if(employees){
        $('#employeeModal').modal('show');
        $('#deleteNo').modal('hide');
    }else if(departments){
        $('#departmentModal').modal('show');
        $('#deleteNo').modal('hide');
    }else if(locations){
        $('#locationModal').modal('show');
        $('#deleteNo').modal('hide');
    }
});

// Confirm delete of a record event handler
$(document).on("click", "#btn-confirm", function(e) {
    if(employees){
        deleteEmployee(JSON.stringify($('#details-id').html()));
        $('#deleteModal').modal('hide');
        displayAllEmployees();

    }else if(departments){
        deleteDepartment(JSON.stringify($('#details-dpt-id').html()));
        $('#deleteModal').modal('hide');
        displayAllDepartments();

    }else if(locations){
        deleteLocation(JSON.stringify($('#details-loc-id').html()));
        $('#deleteModal').modal('hide');
        displayAllLocations();
    }
});

// Add record event handler
$(document).on("click", "#btn-add-record", function() {
    if(employees){
        populateAllDepartments();
    }else if(departments){
        populateAllLocations();
    }else if(locations){
        $('#addLocationModal').modal('show');
    }
});


// Populate locations in add employee modal WKL-done
$(document).on("click", "#select-department-add", function() {
    $.ajax({
        url: "libs/php/getDepartmentLocations.php",
        type: 'POST',
        dataType: 'json',
        data: {
            id: JSON.stringify($('#select-department-add').val())
        },
        success: function(result){
            console.log(result);
            if(result.status.code == 200){
                $("#select-location-add").empty();
                for(let i = 0 ; i < Object.keys(result['data']).length ; i++){
                    $("#select-location-add").append('<option value=' + result['data'][i]['id'] + '>' + result['data'][i]['name'] + '</option>');
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
});

// Populate locations in edit employee modal
$(document).on("click", "#select-department-edit", function() {
    $.ajax({
        url: "libs/php/getDepartmentLocations.php",
        type: 'POST',
        dataType: 'json',
        data: {
            id: JSON.stringify($('#select-department-edit').val())
        },
        success: function(result){
            console.log(result);
            if(result.status.code == 200){
                $("#select-location-edit").empty();
                for(let i = 0 ; i < Object.keys(result['data']).length ; i++){
                    $("#select-location-edit").append('<option value=' + result['data'][i]['id'] + '>' + result['data'][i]['name'] + '</option>');
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(`Database error: ${textStatus}`);
        }
    });
});

// Table filter base on search input field event handler
$(document).ready(function(){
    $("#input-name").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
   }); 




// Loads employees
$(document).on("click", "#employees", function() {
    employees = true;
    locations = false;
    departments = false;
    // $('#selected-only').css("visibility", "visible");
    // $('#employees-dropdown-only').show();
    $('#nav-search').show();
    $('#btn-add-record').html('ADD NEW EMPLOYEE');
    $('#input-name')[0]['placeholder'] = "Search employees by the last name";
    displayAllEmployees();
});
// Loads employees on mobile
$(document).on("click", "#employeesM", function() {
    employees = true;
    locations = false;
    departments = false;
    // $('#selected-only').css("visibility", "visible");
    // $('#employees-dropdown-only').show();
    $('#nav-search').show();
    $('#btn-add-record').html('ADD NEW EMPLOYEE');
    $('#input-name')[0]['placeholder'] = "Search employees by the last name";
    displayAllEmployees();
});

// Loads departments
$(document).on("click", "#departments", function() {
    employees = false;
    locations = false;
    departments = true;
    // $('#selected-only').css("visibility", "hidden");
    // $('#employees-dropdown-only').hide();
    $('#nav-search').show();
    $('#btn-add-record').html('ADD NEW DEPARTMENT');
    $('#input-name')[0]['placeholder'] = "Search department names";
    displayAllDepartments();
});

// Loads departments on mobile
$(document).on("click", "#departmentsM", function() {
    employees = false;
    locations = false;
    departments = true;
    // $('#selected-only').css("visibility", "hidden");
    // $('#employees-dropdown-only').hide();
    $('#nav-search').show();
    $('#btn-add-record').html('ADD NEW DEPARTMENT');
    $('#input-name')[0]['placeholder'] = "Search department names";
    displayAllDepartments();
});

// Loads Locations
$(document).on("click", "#locations", function() {
    employees = false;
    locations = true;
    departments = false;
    // $('#selected-only').css("visibility", "hidden");
    // $('#employees-dropdown-only').hide();
    $('#nav-search').show();
    $('#btn-add-record').html('ADD NEW LOCATION');
    $('#input-name')[0]['placeholder'] = "Search locations";
    displayAllLocations();
});
// Loads Locations on mobile
$(document).on("click", "#locationsM", function() {
    employees = false;
    locations = true;
    departments = false;
    // $('#selected-only').css("visibility", "hidden");
    // $('#employees-dropdown-only').hide();
    $('#nav-search').show();
    $('#btn-add-record').html('ADD NEW LOCATION');
    $('#input-name')[0]['placeholder'] = "Search locations";
    displayAllLocations();
});

// Loads employees with location filter
$(document).on("click", "#location-filter", function() {
    employees = true;
    locations = false;
    departments = false;
    displayAllEmployeesWithLocationFilter();
    $('#btn-add-record').html('ADD NEW EMPLOYEE');
    $('#input-name')[0]['placeholder'] = "Search employees by the last name";
    
});
// Loads employees with location filter on mobile
$(document).on("click", "#location-filterM", function() {
    employees = true;
    locations = false;
    departments = false;
    displayAllEmployeesWithLocationFilter();
    $('#btn-add-record').html('ADD NEW EMPLOYEE');
    $('#input-name')[0]['placeholder'] = "Search employees by the last name";
    
});

// Loads employees with department filter
$(document).on("click", "#department-filter", function() {
    employees = true;
    locations = false;
    departments = false;
    displayAllEmployeesWithDepartmentFilter();
    $('#btn-add-record').html('ADD NEW EMPLOYEE');
    $('#input-name')[0]['placeholder'] = "Search employees by the last name";
    
});
// Loads employees with department filter on mobile
$(document).on("click", "#department-filterM", function() {
    employees = true;
    locations = false;
    departments = false;
    displayAllEmployeesWithDepartmentFilter();
    $('#btn-add-record').html('ADD NEW EMPLOYEE');
    $('#input-name')[0]['placeholder'] = "Search employees by the last name";
    
});

// Loads employees with employee last name filter
$(document).on("click", "#employee-filter", function() {
    employees = true;
    locations = false;
    departments = false;
    displayAllEmployees();
});


// Updates employee record 
$("#form-edit-employee").on("submit", function(e) {
    if(!e.isDefaultPrevented()){
        $.ajax({
            url: "libs/php/updateEmployeeDetails.php",
            type: 'POST',
            dataType: 'json',
            data: {
                first: JSON.stringify(capitalize($('#input-first-edit').val())),
                last: JSON.stringify(capitalize($('#input-last-edit').val())),
                email: JSON.stringify($('#input-email-edit').val()),
                job: JSON.stringify(capitalize($('#input-title-edit').val())),
                depID: JSON.stringify($("#select-department-edit").val()),
                id: JSON.parse($('#details-id').html())
            },

            success: function(result){
                if(result.status.code == 200){
                    console.log(result);
                    displayAllEmployees();
                    $('#editModal').modal('hide');
                    getEmployeeDetails(JSON.stringify(capitalize($('#input-first-edit').val())),
                    JSON.stringify(capitalize($('#input-last-edit').val())));
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert(`Database error: ${errorThrown}`);
            }
        });
    }
    e.preventDefault();
});

// Updates department record 
$("#form-edit-department").on("submit", function(e) {
    if(!e.isDefaultPrevented()){
        $.ajax({
            url: "libs/php/updateDepartmentDetails.php",
            type: 'POST',
            dataType: 'json',
            data: {
                name: JSON.stringify(capitalize($('#input-dpt-edit').val())),
                locationID: JSON.stringify($('#select-dpt-location-edit').val()),
                id: JSON.parse($('#details-dpt-id').html())
            },
            success: function(result){
                console.log(JSON.stringify($('#select-dpt-location-edit').val()));
                if(result.status.code == 200){
                    console.log(result);
                    displayAllDepartments();
                    $('#editDptModal').modal('hide');
                    getDepartmentDetails(JSON.stringify($('#input-dpt-edit').val()));
                    $('#editDptModal').modal({refresh: true});
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert(`Database error: ${errorThrown}`);
            }
        });
    }
    e.preventDefault();
});

// Add new employee
$("#form-add-employee").on("submit", function(e) {
    if(!e.isDefaultPrevented()){
        $.ajax({
            url: "libs/php/addEmployee.php",
            type: 'POST',
            dataType: 'json',
            data: {
                first: JSON.stringify(capitalize($('#input-first-add').val())),
                last: JSON.stringify(capitalize($('#input-last-add').val())),
                email: JSON.stringify($('#input-email-add').val().trim()),
                job: JSON.stringify(capitalize($('#input-title-add').val())),
                depName: JSON.stringify($("#select-department-add option:selected").text())
            },
            success: function(result){
                if(result.status.code == 200){
                    displayAllEmployees();
                    $('#addEmployeeModal').modal('hide');
                    getEmployeeDetails(JSON.stringify(capitalize($('#input-first-add').val())),
                    JSON.stringify(capitalize($('#input-last-add').val())));
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert(`Database error: ${errorThrown}`);
            }
        });
    }
    e.preventDefault();
});

// Add new department
$("#form-add-department").on("submit", function(e) {
    if(!e.isDefaultPrevented()){
        console.log(dpt_array[0] == capitalize($('#input-dpt-name-add').val()) + ", " + $('#select-location-add-dpt option:selected').html());
        console.log(dpt_array.includes(capitalize($('#input-dpt-name-add').val()) + ", " + $('#select-location-add-dpt option:selected').html()));
        console.log( typeof (capitalize($('#input-dpt-name-add').val()) + ", " + capitalize($('#select-location-add-dpt option:selected').html())));
        if(!dpt_array.includes((capitalize($('#input-dpt-name-add').val()) + ", " + String($('#select-location-add-dpt option:selected').html())))){
            $.ajax({
                url: "libs/php/addDepartment.php",
                type: 'POST',
                dataType: 'json',
                data: {
                    name: JSON.stringify(capitalize($('#input-dpt-name-add').val())),
                    locID: JSON.stringify($('#select-location-add-dpt').val())
                },
                success: function(result){
                    if(result.status.code == 200){
                        displayAllDepartments();
                        $('#addDepartmentModal').modal('hide');
                        getDepartmentDetails(JSON.stringify(capitalize($('#input-dpt-name-add').val())));
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    alert(`Database error: ${errorThrown}`);
                }
            });
        }else {

            $('#form-add-department').get(0).reset();
        }
    }
    e.preventDefault();
});

// // Add new location
$("#form-add-location").on("submit", function(e) {
    if(!e.isDefaultPrevented()){
        if(!loc_array.includes(capitalize($('#input-loc-name-add').val()))){
            $.ajax({
                url: "libs/php/addLocation.php",
                type: 'POST',
                dataType: 'json',
                data: {
                    name: JSON.stringify(capitalize($('#input-loc-name-add').val()))
                },
                success: function(result){
                    if(result.status.code == 200){
                        console.log(result);
                        displayAllLocations();
                        $('#addLocationModal').modal('hide');
                        getLocationDetails(JSON.stringify(capitalize($('#input-loc-name-add').val())));
                        e.preventDefault();
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    alert(`Database error: ${errorThrown}`);
                }
            });
        }else{

            $('#form-add-location').get(0).reset();
        }   
    }     
    e.preventDefault();
});
