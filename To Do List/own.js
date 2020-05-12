let myForm = document.getElementById("myForm");
let input = document.getElementById("input");
let give = document.getElementById("give");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    yourList(input.value);
})

function yourList(a){
    let myPage = `<li> ${a} <button onclick ="deleteInput(this)">Delete This Item</button></li>`
    give.insertAdjacentHTML("beforeend", myPage);
    input.value = "";
    input.focus();
}

function deleteInput(removeInput) {
    removeInput.parentElement.remove();
}