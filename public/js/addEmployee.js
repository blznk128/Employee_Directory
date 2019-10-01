$(document).ready(() => {
    let firstName = $("#firstName");
    let lastName = $("#lastName");

    $("#submit").on("click",() => {
        event.preventDefault();

        console.log(firstName.val())
    });











})