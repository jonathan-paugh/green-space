$(document).ready(() => {
    $(".invert-button").click(() => {
        if (localStorage.getItem("invert") == "true") {
            localStorage.setItem("invert", "false");
        } else {
            localStorage.setItem("invert", "true");
        }
        location.reload();
    });
})