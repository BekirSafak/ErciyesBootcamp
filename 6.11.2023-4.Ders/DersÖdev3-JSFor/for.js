// 1.Soru 250 ye kadar olan sayıların toplamı nedir?
let sum = 0;
for (let i = 0; i < 250; i++) {
    sum = sum + i;
}
// console.log("Toplam " + sum)
document.write(`1.Soru 250 ye kadar olan sayıların toplamı nedir? 250 Hariç = ${sum} <br><br>`)


// 2.Soru 25 ile 125 arasındaki sayıların toplamı nedir?
let sum1 = 0;
for (let i = 26; i < 125; i++) {
    sum1 = sum1 + i;
}
// console.log("Toplam " + sum)
document.write(`2.Soru 25 ile 125 arasındaki sayıların toplamı nedir? 25 ve 125 hariç = ${sum1} <br><br>`)

// 3.Soru 1 ile 1000 Arasındaki Sayıların Toplamının ortalaması nedir?
let sum2 = 0;
let avgCount = 0;
for (let i = 1; i <= 1000; i++) {
    avgCount++
    sum2 = sum2 + i
}
sum2 = sum2 / avgCount
// console.log(sum2)
document.write(`3.Soru 1 ile 1000 Arasındaki Sayıların Toplamının ortalaması nedir? = ${sum2} <br><br>`)

// 4.Soru Birden yüze kadarki sayılardan, 5’e bölünenleri ekrana yazdırın
let sum3 = 0
let fiveDivided = []
for (let i = 1; i < 100; i++) {
    if (i % 5 == 0) {
        fiveDivided.push(i)
    }

}
// console.log(fiveDivided)
document.write(`4.Soru Birden yüze kadarki sayılardan, 5’e bölünenleri ekrana yazdırın = ${fiveDivided} <br><br>`)

// 5.soru var numbers = [33, 11, -5, 20, 1, 55, 100, 2, 94, 55, 11]
// Dizinin en büyük sayısıı for döngüsü ile bul
// Dizinin en küçük sayısıı for döngüsü ile bul
let maxNum = [i];
let minNum = [i];
let numbers = [33, 11, -5, 20, 1, 55, 100, 2, 94, 55, 11]
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
        maxNum = numbers[i];
    }
    if (numbers[i] < minNum) {
        minNum = numbers[i];
    }
}
// console.log("maxNum " + maxNum);
// console.log("minNum " + minNum);

document.write(`5.soru var numbers = [33, 11, -5, 20, 1, 55, 100, 2, 94, 55, 11] en büyük ve en küçük değerleri? = En büyük = ${maxNum} En Küçük = ${minNum} <br><br>`)