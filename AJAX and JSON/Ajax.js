var start = 0;
var end = 5;
var theRequest = new XMLHttpRequest();
var but = document.getElementById("but");
var theList = document.getElementById("theList");

but.addEventListener("click", function () {
    theRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
    theRequest.onload = function () {
        var theData = JSON.parse(theRequest.responseText);
        display(theData);
    };
    theRequest.send();

});

function display(data) {
    var x = "";
    for (var i = start; i < end; i++) {
        x += `<p> My Website Is ${data[i].website}</p>`;
    };
    theList.insertAdjacentHTML("beforeend", x);
    start += 5;
    end += 5;

    if (end ==15) {
        but.classList.add("butGone");
    }
}