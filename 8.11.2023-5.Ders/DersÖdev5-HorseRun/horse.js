// Yarısmayi baslatan Fonksiyon

function start() {
    let horseLocation1 = 0;
    let horseLocation2 = 0;
    let horseLocation3 = 0;

    let locationTime = setInterval(run, 200)

    function run() {
        // Bitiş çizgisini tamamen ve ilk geçen at kazanır.
        if (horseLocation1 > 950) {
            alert("1.At kazandı");

            // Burada tekrar başa dönmesi için marginLeft değeri sıfırlanıyor.
            document.querySelector('.horse1').style.marginLeft = 0 + 'px';
            document.querySelector('.horse2').style.marginLeft = 0 + 'px';
            document.querySelector('.horse3').style.marginLeft = 0 + 'px';
            clearInterval(locationTime)
        }
        // Bitiş çizgisini tamamen ve ilk geçen at kazanır.
        else if (horseLocation2 > 950) {
            alert("2.At kazandı");

            // Burada tekrar başa dönmesi için marginLeft değeri sıfırlanıyor.
            document.querySelector('.horse1').style.marginLeft = 0 + 'px';
            document.querySelector('.horse2').style.marginLeft = 0 + 'px';
            document.querySelector('.horse3').style.marginLeft = 0 + 'px';
            clearInterval(locationTime)
        }
        // Bitiş çizgisini tamamen ve ilk geçen at kazanır.
        else if (horseLocation3 > 950) {
            alert("3.At kazandı");

            // Burada tekrar başa dönmesi için marginLeft değeri sıfırlanıyor.
            document.querySelector('.horse1').style.marginLeft = 0 + 'px';
            document.querySelector('.horse2').style.marginLeft = 0 + 'px';
            document.querySelector('.horse3').style.marginLeft = 0 + 'px';
            clearInterval(locationTime)
        }
        else {
            horseLocation1 += Math.floor(Math.random() * 40)
            horseLocation2 += Math.floor(Math.random() * 40)
            horseLocation3 += Math.floor(Math.random() * 40)

            document.querySelector('.horse1').style.marginLeft = horseLocation1 + 'px';
            document.querySelector('.horse2').style.marginLeft = horseLocation2 + 'px';
            document.querySelector('.horse3').style.marginLeft = horseLocation3 + 'px';
        }
    }

}