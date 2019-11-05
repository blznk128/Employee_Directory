let person;
let getEmployees = [];
let employeeContainer = $("#here");
$(document).on("click", "button.delete", deleteArticle);

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
            person[i].wage + "</td>" + "<td>" + person[i].department + "<button class = 'delete'>" + " X" + "</button>" + "</td>" + "</tr>" )
            
        }
        employeeContainer.append(getEmployees)
    })
    
};
showEmployees()

function deleteArticle(){
      var rowId = $(this).parent("td").parent("tr").attr('id');
      $(this).closest("tr").remove();
      $.ajax({
        method:"DELETE",
        url:"/api/employees/" + rowId
      })
  
}
