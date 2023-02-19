<?php

?>
<!-- MODALS -->



<!-- Modal for adding new employee  WKL: done-->
      <div class="modal" id="addEmployeeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <form id="form-add-employee" >     
              
              <div class="modal-body ">

                <h4>ADD AN EMPLOYEE</h4>        
                
                <label for="input-first-add" class="form-label-control">First name:</label>
                <input type="text" class="form-control" id="input-first-add" pattern="^[A-Za-z\s]+$" required>
                                
                <label for="input-last-add" class="form-label-control" >Surname:</label>
                <input type="text" class="form-control" id="input-last-add" pattern="^[A-Za-z\s]+$" required>
                                
                <label for="input-email-add" class="form-label-control">Email:</label>
                <input type="email" class="form-control" id="input-email-add" required>
                
                <label for="input-title-add" class="form-label-control">Job title:</label>
                <input type="text" class="form-control" id="input-title-add" pattern="^[A-Za-z\s]+$" required>
                
                
                <label for="select-department-add" class="form-label-control">Department:</label>
                <select id="select-department-add" class="custom-select custom-select-md" name="Select department">
                </select>
                Corresponding location: <label id="select-location-add" name="Select location"></label>                
                
              </div>

              <div class="modal-footer">
                <button id="btn-add" type="submit" class="btn btn-success">SUBMIT</button>
                <button id="btn-add-cancel" type="button" class="btn btn-success" data-dismiss="modal">CANCEL</button>
              </div>
            </form>

          </div>
        </div>
      </div>


      <!-- Modal for displaying employee details WKL: done-->
      <div class="modal" id="employeeModal" >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
              
                <table id="table-details" class="table">
                </table>
                
              </div>

              <div class="modal-footer">

                <button id="btn-edit" type="button" class="btn btn-success">EDIT</button>
                <button id="btn-delete" type="button" class="btn btn-danger">DELETE</button>
                <button id="btn-close" type="button" class="btn btn-success" data-dismiss="modal">CLOSE</button>

              </div>
            </div>
          </div>
        </div>




        <!-- Modal for updating employee record WKL: done-->
        <div class="modal" id="editModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <form id="form-edit-employee" >

                <div class="modal-body">

                  <h4>EDIT EMPLOYEE DETAILS</h4>

                  <label for="input-first-edit ">First name</label>
                  <input type="text" class="form-control" id="input-first-edit" pattern="^[A-Za-z\s]+$" required>
                  
                  <label for="input-last-edit ">Last name</label>
                  <input type="text" class="form-control" id="input-last-edit" pattern="^[A-Za-z\s]+$"  required>
                 
                  <label for="input-email-edit ">Employee email</label>
                  <input type="email" class="form-control" id="input-email-edit"  required>
                  
                  <label for="input-title-edit " >Job title</label>
                  <input type="text" class="form-control" id="input-title-edit" pattern="^[A-Za-z\s]+$" required>

                  <label for="select-department-edit ">Department</label>
                  <select id="select-department-edit" class="custom-select custom-select-md" name="Select department">
                  </select>              
                  Corresponding location: <span id="select-location-edit" name="Select location"></span>          
                  
                </div>
                <div class="modal-footer">
                  <button id="btn-update-edit" type="submit" class="btn btn-success">SUBMIT CHANGES</button>
                  <button id="btn-employee-edit-cancel" type="button" class="btn btn-success" data-dismiss="modal">CANCEL</button>

                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Modal for adding new department   WKL: done-->
      <div class="modal" id="addDepartmentModal" >
        <div class="modal-dialog">
          <div class="modal-content">
            <form id="form-add-department">

              <div class="modal-body">

                  <h4>ADD DEPARTMENT</h4>

                  <label for="input-dpt-name-add" >Department name</label>
                  <input type="text" class="form-control" id="input-dpt-name-add" pattern="^[A-Za-z\s]+$" required>

                  <label for="select-location-add-dpt" >Location</label>
                  <select id="select-location-add-dpt" class="custom-select custom-select-md" name="Select location">
                  </select>

              </div>
              <div class="modal-footer">
                <button id="btn-dpt-add" type="submit" class="btn btn-success">SUBMIT</button>
                <button id="btn-dpt-add-cancel" type="button" class="btn btn-success" data-dismiss="modal">CANCEL</button>
              </div>
            </form>
          </div>
        </div>
      </div>


        <!-- Modal for displaying department details WKL: done -->
      <div class="modal " id="departmentModal" >
        <div class="modal-dialog ">
          <div class="modal-content">

            <div class="modal-body">
              <table id="table-dpt-details" class="table" ">
              </table>
            </div>
            <div class="modal-footer">
              <button id="btn-edit" type="submit" class="btn btn-success">EDIT</button>
              <button id="btn-delete" type="button" class="btn btn-danger">DELETE</button>
              <button id="btn-dpt-close" type="button" class="btn btn-success" data-dismiss="modal">CLOSE</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal for updating department name and location WKL : done-->
      <div class="modal fade" id="editDptModal" >
        <div class="modal-dialog">
          <div class="modal-content">
            <form id="form-edit-department" class="needs-validation" data-toggle="validator" role="form" novalidate>               

              <div class="modal-body">

                <h4 id="editDptModalLabel">EDIT DEPARTMENT DETAILS</h4>

                <label for="input-dpt-edit">Department name</label>
                <input type="text" class="form-control" id="input-dpt-edit" pattern="^[A-Za-z\s]+$" required>

                <label for="select-dpt-location-edit font-weight-bold">Department</label>
                <select id="select-dpt-location-edit" class="custom-select custom-select-md" name="Select location"></select>

              </div>

              <div class="modal-footer">
                <button id="btn-dpt-update-edit" type="submit" class="btn btn-success">SUBMIT</button>
                <button id="btn-department-edit-cancel" type="button" class="btn btn-success" data-dismiss="modal">CANCEL</button>
              </div>

            </form>            
          </div>
        </div>
      </div>

      <!-- Modal for adding new location  WKL: done   -->
      <div class="modal fade needs-validation" id="addLocationModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <form id="form-add-location" >

              <div class="modal-body">

                <h4>ADD LOCATION</h4>
                  
                <label for="input-loc-name-add" >Location name: </label>
                <input id="input-loc-name-add" type="text" class="form-control form-control-sm" pattern="^[A-Za-z\s]+$" required>                   

              </div>
              <div class="modal-footer">
                <button id="btn-loc-add" type="submit" class="btn btn-success">SUBMIT</button>
                <button id="btn-loc-add-cancel" type="button" class="btn btn-success" data-dismiss="modal">CANCEL</button>
              </div>
            </form>
          </div>
        </div>
      </div>

       <!-- Modal location details WKL: done-->
       <div class="modal" id="locationModal" >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <table id="table-loc-details" class="table ">
              </table>
            </div>

            <div class="modal-footer">
              <button id="btn-delete" type="button" class="btn btn-danger">DELETE</button>
              <button id="btn-loc-close" type="button" class="btn btn-success" data-dismiss="modal">CLOSE</button>
            </div>
          </div>
        </div>
      </div>


      <!-- Modal for NO delete WKL done -->
      <div class="modal" id="deleteNo" >
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-body">
              <h4>This record cannot be deleted as it has dependencies.</h4>
            </div>
            <div class="modal-footer">
              <button id="btn-deleteNo-cancel" type="button" class="btn btn-success" data-dismiss="modal">CANCEL</button>
            </div>
          </div>
        </div>
      </div>      


      <!-- Modal for requesting deletion confirmation WKL done -->
      <div class="modal" id="deleteModal" >
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-body">
              <h4>Are you sure you want to delete this?</h4>
            </div>
            <div class="modal-footer">
              <button id="btn-confirm" type="button" class="btn btn-danger">YES, DELETE</button>
              <button id="btn-delete-cancel" type="button" class="btn btn-success" data-dismiss="modal">CANCEL</button>
            </div>
          </div>
        </div>
      </div>