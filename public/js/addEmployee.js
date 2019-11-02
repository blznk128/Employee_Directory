$(document).ready(() => {
    $("#main").on("click", () => {
        event.preventDefault();
        window.location.href = "/";
    });
    let firstName = $("#firstName");
    let lastName = $("#lastName");
    let wage = $("#wage");
    let department = $("#department");

    $("#submit").on("click",() => {
        event.preventDefault();
        let newEmployee = {
            first_Name: firstName.val(),
            last_Name: lastName.val(),
            wage: wage.val(),
            department: department.val()
        };
        addEmployee(newEmployee)
    });

    function addEmployee(employee) {
        $.post("/api/employee", employee, () => {
    })
};











})