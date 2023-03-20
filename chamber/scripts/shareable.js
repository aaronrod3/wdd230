function clickMenu(x) {
    x.classList.toggle("change");
};


let date = new Date(document.lastModified);
document.getElementById("lastUpdated").innerHTML = date;


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function clickMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }