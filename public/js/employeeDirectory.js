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
            getEmployees.push("<p>" + person[i].first_Name)
        }
        employeeContainer.append(getEmployees)
    })
};

showEmployees()