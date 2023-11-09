
function add() {
    let userName = document.querySelector(".userName").value;
    let userLastname = document.querySelector(".userLastname").value;
    let nameList = document.querySelector(".nameList");

    let nameLi = document.createElement("li");
    nameLi.innerHTML = userName.toUpperCase() + " " + userLastname.toUpperCase();

    nameList.appendChild(nameLi);
    console.log("Eklendi")
}