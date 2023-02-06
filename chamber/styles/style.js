function clickMenu(x) {
    x.classList.toggle("change");
};

let date = new Date(document.lastModified);
document.querySelector("#lastUpdated").innerHTML = date;