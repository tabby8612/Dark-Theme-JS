const icon = document.getElementById("icon");


if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
} else if (localStorage.getItem("theme") === "dark") {
    document.body.classList.toggle("dark-theme");
    document.querySelector("nav i").classList.replace("fa-moon", "fa-sun");
    document.querySelector("nav i").style.color = "white";
    localStorage.setItem("theme", "dark");
}


icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        document.querySelector("nav i").classList.replace("fa-moon", "fa-sun");
        document.querySelector("nav i").style.color = "white";
        localStorage.setItem("theme", "dark");
    } else {
        document.querySelector("nav i").classList.replace("fa-sun", "fa-moon");
        document.querySelector("nav i").style.color = "black";
        localStorage.setItem("theme", "light");
    }
});