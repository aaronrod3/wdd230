function clickMenu(x) {
    x.classList.toggle("change");
};


let date = new Date(document.lastModified);
document.getElementById("lastUpdated").innerHTML = date;