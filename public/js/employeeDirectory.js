let person;
let getEmployees = [];
let employeeContainer = $("#here");
$(document).on("click", "button.delete", deleteEmployee);
$(document).on("click", "button.edit", editEmployee);

$("#addEmployee").on("click", () => {
    event.preventDefault();
    window.location.href = "/addEmployee";
});

function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/employees/" + id
    })
      .then(function() {
        console.log(id)
      });
  }

function showEmployees () {
    $.get("/api/employees", (data) => {
        person = data;
        for (let i = 0; i < person.length; i++) {
            getEmployees.push("<tr id = " + person[i].id + ">" + "<td>" + person[i].first_Name + "</td>" + "<td>" + person[i].last_Name + "</td>" + "<td>" + 
            person[i].wage + "</td>" + "<td>" + person[i].department + "<button class = 'edit'>" + "edit" + "</button>" +
            "<button class = 'delete'>" + " X" + "</button>" + "</td>" + "</tr>" )
            
        }
        employeeContainer.append(getEmployees)
    })
    
};
showEmployees()

//sorting, gonna change it to switch statements after it actually works
function employeeLastName () {
  employeeContainer.empty()
  getEmployees = []
  $.get("/api/lastName", (data) => {
      person = data;
      for (let i = 0; i < person.length; i++) {
          getEmployees.push("<tr id = " + person[i].id + ">" + "<td>" + person[i].first_Name + "</td>" + "<td>" + person[i].last_Name + "</td>" + "<td>" + 
          person[i].wage + "</td>" + "<td>" + person[i].department + "<button class = 'edit'>" + "edit" + "</button>" +
          "<button class = 'delete'>" + " X" + "</button>" + "</td>" + "</tr>" )
          
      }
      employeeContainer.append(getEmployees)
  })
};

function employeeWage () {
  employeeContainer.empty()
  getEmployees = []
  $.get("/api/wage", (data) => {
      person = data;
      for (let i = 0; i < person.length; i++) {
          getEmployees.push("<tr id = " + person[i].id + ">" + "<td>" + person[i].first_Name + "</td>" + "<td>" + person[i].last_Name + "</td>" + "<td>" + 
          person[i].wage + "</td>" + "<td>" + person[i].department + "<button class = 'edit'>" + "edit" + "</button>" +
          "<button class = 'delete'>" + " X" + "</button>" + "</td>" + "</tr>" )
          
      }
      employeeContainer.append(getEmployees)
  })
};

function employeeDepartment () {
  employeeContainer.empty()
  getEmployees = []
  $.get("/api/department", (data) => {
      person = data;
      for (let i = 0; i < person.length; i++) {
          getEmployees.push("<tr id = " + person[i].id + ">" + "<td>" + person[i].first_Name + "</td>" + "<td>" + person[i].last_Name + "</td>" + "<td>" + 
          person[i].wage + "</td>" + "<td>" + person[i].department + "<button class = 'edit'>" + "edit" + "</button>" +
          "<button class = 'delete'>" + " X" + "</button>" + "</td>" + "</tr>" )
          
      }
      employeeContainer.append(getEmployees)
  })
};

function deleteEmployee(){
    var rowId = $(this).parent("td").parent("tr").attr('id');
    $(this).closest("tr").remove();
    $.ajax({
       method:"DELETE",
      url:"/api/employees/" + rowId
    })
};

function editEmployee() {
  var currentPost = $(this)
    .parent()
    .parent()
    .attr("id");
  window.location.href = "/addEmployee?employee_id=" + currentPost;
}

$('.dropdown-trigger').dropdown();

$("#lastName").on("click", function() {
  event.preventDefault();
  employeeLastName();
  console.log("lastName")
})

$("#wage").on("click", function() {
  event.preventDefault();
  employeeWage();
  console.log("wage")
})

$("#department").on("click", function() {
  event.preventDefault();
  employeeDepartment();
  console.log("department")
})