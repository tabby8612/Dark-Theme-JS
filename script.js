const icon = document.getElementById("icon");


icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        document.querySelector("nav i").classList.replace("fa-moon", "fa-sun");
        document.querySelector("nav i").style.color = "white";
    } else {
        document.querySelector("nav i").classList.replace("fa-sun", "fa-moon");
        document.querySelector("nav i").style.color = "black";
    }
})