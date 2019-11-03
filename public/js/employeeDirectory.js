let person;
let getEmployees = [];
let employeeContainer = $("#here");


$("#addEmployee").on("click", () => {
    event.preventDefault();
    window.location.href = "/addEmployee";
});

function showEmployees () {
    $.get("/api/employees", (data) => {
        console.log("this is specific:", data.first_Name)
        person = data;
        for (let i = 0; i < person.length; i++) {
            console.log("this is person:", person)
            // getEmployees.push("<tr>" + "<td>" + person[i].first_Name + "</td>" + "</tr>" + "<tr>" + "<td>" + person[i].last_Name + "</td>" + "</tr>")
            getEmployees.push("<tr>" + "<td>" + person[i].first_Name + "</td>" + "<td>" + person[i].last_Name + "</td>" + "<td>" + 
            person[i].wage + "</td>" + "<td>" + person[i].department + "</td>" + "</tr>" )
        }
        employeeContainer.append(getEmployees)
    })
};

showEmployees()