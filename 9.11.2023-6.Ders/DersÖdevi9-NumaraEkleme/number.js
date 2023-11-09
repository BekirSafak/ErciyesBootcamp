let count = 0;
function add() {
    count++;

    let numberList = document.querySelector(".numberList");
    let randomNuber = Math.floor(Math.random() * 100);
    console.log(count)
    if (count > 15) {
        return
    }

    let numberLi = document.createElement("li");
    numberLi.innerHTML = randomNuber;
    numberList.appendChild(numberLi);
    console.log("Eklendi")
}