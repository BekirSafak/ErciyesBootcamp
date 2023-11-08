function calc(e) {
    let number1 = document.querySelector('.num1').value;
    let number2 = document.querySelector('.num2').value;

    let result = document.querySelector('.resultBox');

    switch (e) {
        case 'topla':
            result.textContent = Number(number1) + Number(number2);
            break;
        case 'cikar':
            result.textContent = number1 - number2;
            break;
        case 'carp':
            result.textContent = number1 * number2;
            break;
        case 'bol':
            result.textContent = number1 / number2;
            break;
        case 'kareKok':
            result.textContent = Math.sqrt(number1);
            break;

        default:
            result.textContent = 'HATA!';
    }
}