$(document).ready(() => {
  let url = window.location.search;
  let employeeId;
  let updating = false;
  $("#loader").hide()
  if (url.indexOf("?employee_id=") !== -1) {
    employeeId = url.split("=")[1];
    getEmployeeInfo(employeeId);
  };


    $("#main").on("click", () => {
        event.preventDefault();
        window.location.href = "/";
    });
    let firstName = $("#firstName");
    let lastName = $("#lastName");
    let wage = $("#wage");
    let department = $("#department");
    let hide = $("#hide");

    $("#submit").on("click",() => {
        event.preventDefault();
        let newEmployee = {
            first_Name: firstName.val(),
            last_Name: lastName.val(),
            wage: wage.val(),
            department: department.val()
        };
        if (updating) {
            newEmployee.id = employeeId;
            updateEmployee(newEmployee);
          }
          else {
            hide.hide()
            addEmployee(newEmployee);
            myFunction()
          }
    });

    function addEmployee(employee) {
        $.post("/api/employee", employee, () => {
    })
};

function getEmployeeInfo(id) {
    $.get("/api/employees/" + id, function(data) {
      if (data) {
        firstName.val(data.first_Name);
        lastName.val(data.last_Name);
        wage.val(data.wage);
        department.val(data.department)
        updating = true;
      }
    });
  }

  function updateEmployee(employeeInformation) {
    $.ajax({
      method: "PUT",
      url: "/api/employees",
      data: employeeInformation
    })
      .then(function() {
        console.log("success");
      });
  }

function myFunction() {
  myVar = setTimeout(showPage, 2000);
  document.getElementById("loader").style.display = "inline";
}

function showPage() {
  document.getElementById("loader").style.display = "inline";
  // document.getElementById("myDiv").style.display = "inline";
  window.location.href = "/"
}












})