function randomNumbers() {
    let numbers = []
    i = 0;
    while (i < 6) {
        let randomNums = Math.floor(Math.random() * 49)
        if (!numbers.includes(randomNums)) {
            numbers.push(randomNums)
            document.querySelector(".box" + (i + 1)).innerHTML = randomNums;
            i++
        }
    }
}
