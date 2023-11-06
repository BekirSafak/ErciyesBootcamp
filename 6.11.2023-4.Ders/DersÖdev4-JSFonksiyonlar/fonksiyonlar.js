// 1.Soru “cagatay yildiz” kelimesindeki boşlukları temizle ve tüm harfleri büyült.
let userName = 'cagatay yildiz';
document.write(`1.Soru “cagatay yildiz” kelimesindeki boşlukları temizle ve tüm harfleri büyült = ${userName.trim().toUpperCase()} <br><br>`)

// 2.Soru “******Çağatay Yıldız” isimli metindeki yıldızları kaldır (REPLACE)
let userName1 = '******Çağatay Yıldız';
document.write(`2.Soru “******Çağatay Yıldız” isimli metindeki yıldızları kaldır = ${userName1.replace("******", "")} <br><br>`)

// 3.Soru “Çağatay  Yıldız” metnindeki kelimeler arasında 2 boşluk var bunu bir boşluk yap (REPLACE)
let userName2 = 'Çağatay  Yıldız';
document.write(`3.Soru “Çağatay  Yıldız” metnindeki kelimeler arasında 2 boşluk var bunu bir boşluk yap = ${userName2.replace("  ", " ")} <br><br>`)

// 4.Soru “**Tech Career**” isimli metindeki yıldızları kaldır (REPLACE)
let userName3 = '**Tech Career**';
document.write(`4.Soru “**Tech Career**” isimli metindeki yıldızları kaldır = ${userName3.replaceAll("**", "")} <br><br>`)

// 5.Soru “Tech Career” isimli metnin soluna ve sağına 3 yıldız koy. “***Tech Career***” ( Normal toplama operatörü)
let userName4 = 'Tech Career';
document.write(`5.Soru “Tech Career” isimli metnin soluna ve sağına 3 yıldız koy = ${"***" + userName4 + "***"} <br><br>`)

// 6.Soru “Tech Career Bilişim teknolojileri” metnindeki son kelimeyi büyült (SUBSTRING)
let userName5 = 'Tech Career Bilişim teknolojileri';
document.write(`6.Soru “Tech Career Bilişim teknolojileri” metnindeki son kelimeyi büyült = ${userName5.substring(0, 20) + userName5.substring(20).toUpperCase()} <br><br>`)


// 7.Soru “tech career” kelimelerin ilk harflerini büyült (Substring ve upper)
let userName6 = 'tech career';
document.write(`7.Soru “tech career” kelimelerin ilk harflerini büyült = ${userName6.substring(0, 1).toUpperCase() + userName6.substring(1, 4) + userName6.substring(4, 6).toUpperCase() + userName6.substring(6)} <br><br>`)