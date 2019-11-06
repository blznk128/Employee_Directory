$(document).ready(() => {
    var url = window.location.search;
  var postId;
  var updating = false;
  if (url.indexOf("?employee_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  };

    $("#main").on("click", () => {
        event.preventDefault();
        window.location.href = "/";
    });
    let firstName = $("#firstName");
    let lastName = $("#lastName");
    let wage = $("#wage");
    let department = $("#department");

    // $("#submit").on("click",() => {
    //     event.preventDefault();
    //     let newEmployee = {
    //         first_Name: firstName.val(),
    //         last_Name: lastName.val(),
    //         wage: wage.val(),
    //         department: department.val()
    //     };
    //     addEmployee(newEmployee)
    // });
    $("#submit").on("click",() => {
        event.preventDefault();
        let newEmployee = {
            first_Name: firstName.val(),
            last_Name: lastName.val(),
            wage: wage.val(),
            department: department.val()
        };
        if (updating) {
            newEmployee.id = postId;
            updatePost(newEmployee);
          }
          else {
            addEmployee(newEmployee);
          }
        
    });

    function addEmployee(employee) {
        $.post("/api/employee", employee, () => {
    })
};

function getPostData(id) {
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

  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/employees",
      data: post
    })
      .then(function() {
        console.log("success");
      });
  }







})