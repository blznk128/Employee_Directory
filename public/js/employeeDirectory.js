let person;
let getEmployees = [];
let employeeContainer = $("#here");
let lookUp = $("#lookUp");

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

//delete a employee
function deleteEmployee(){
    let rowId = $(this).parent("td").parent("tr").attr('id');
    $(this).closest("tr").remove();
    $.ajax({
       method:"DELETE",
      url:"/api/employees/" + rowId
    })
};

//edit a employee
function editEmployee() {
  let currentPost = $(this)
    .parent()
    .parent()
    .attr("id");
  window.location.href = "/addEmployee?employee_id=" + currentPost;
}

//code for drop down menu to sort data
$('.dropdown-trigger').dropdown();

//search function
// $("#search").on("click", () => {
//   event.preventDefault();
//   let searchedEmployee = lookUp.val()
//   employeeContainer.empty()
//   getEmployees = []
//   $.get("/api/last_Name/" + searchedEmployee, function(foundEmployee) {
//     for (let i = 0; i < foundEmployee.length; i++) {
//       getEmployees.push("<tr id = " + foundEmployee[i].id + ">" + "<td>" + foundEmployee[i].first_Name + "</td>" + "<td>" + foundEmployee[i].last_Name + "</td>" + "<td>" + 
//       foundEmployee[i].wage + "</td>" + "<td>" + foundEmployee[i].department + "<button class = 'edit'>" + "edit" + "</button>" +
//       "<button class = 'delete'>" + " X" + "</button>" + "</td>" + "</tr>" )
//       console.log("this is search by last name: " , foundEmployee[i].first_Name + " " + foundEmployee[i].last_Name);
//     }
//     employeeContainer.append(getEmployees)
    
//   });
// })

function searchEmployee() {
  let searchedEmployee = lookUp.val()
  employeeContainer.empty()
  getEmployees = []
  $.get("/api/last_Name/" + searchedEmployee, function(foundEmployee) {
    for (let i = 0; i < foundEmployee.length; i++) {
      getEmployees.push("<tr id = " + foundEmployee[i].id + ">" + "<td>" + foundEmployee[i].first_Name + "</td>" + "<td>" + foundEmployee[i].last_Name + "</td>" + "<td>" + 
      foundEmployee[i].wage + "</td>" + "<td>" + foundEmployee[i].department + "<button class = 'edit'>" + "edit" + "</button>" +
      "<button class = 'delete'>" + " X" + "</button>" + "</td>" + "</tr>" )
      console.log("this is search by last name: " , foundEmployee[i].first_Name + " " + foundEmployee[i].last_Name);
    }
    employeeContainer.append(getEmployees)
    
  });
}

$("#lookUp").keyup(function() {
  let searchedEmployee = lookUp.val()
  getEmployees = []
  $.get("/api/last_Name/" + searchedEmployee, function(foundEmployee) {
    for (let i = 0; i < foundEmployee.length; i++) {
      if(searchedEmployee === foundEmployee[i].last_Name) {
        employeeContainer.empty()
        getEmployees.push("<tr id = " + foundEmployee[i].id + ">" + "<td>" + foundEmployee[i].first_Name + "</td>" + "<td>" + foundEmployee[i].last_Name + "</td>" + "<td>" + 
      foundEmployee[i].wage + "</td>" + "<td>" + foundEmployee[i].department + "<button class = 'edit'>" + "edit" + "</button>" +
      "<button class = 'delete'>" + " X" + "</button>" + "</td>" + "</tr>" )
      } 
      employeeContainer.append(getEmployees)
    }
  });
})

$("#lookUp").keyup(function() {
  if (lookUp.val() === "") {
    getEmployees = []
    showEmployees()
  }
})

$("#search").on("click", () => {
  if (lookUp.val() === "") {
    employeeContainer.empty();
    employeeContainer.append("type something foo")
  } else {
    searchEmployee()
  }
})

// $("#lookUp").keyup(function() {
//   if (lookUp.val() === "borunda") {
//     console.log("hi")
//   }
// })

// sort by functions
$("#lastName").on("click", function() {
  event.preventDefault();
  employeeLastName();
})

$("#wage").on("click", function() {
  event.preventDefault();
  employeeWage();
})

$("#department").on("click", function() {
  event.preventDefault();
  employeeDepartment();
})