document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll("button");

    buttons[0].addEventListener("click", function () {
        document.getElementById("services").scrollIntoView({
            behavior: "smooth"
        });
    });

    buttons[1].addEventListener("click", function () {
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });

})