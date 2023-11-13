
function postAxios() {
    let postName = document.querySelector('#postName').value;
    let postPrice = document.querySelector('#postPrice').value;
    let postStock = document.querySelector('#postStock').value;

    let numberPostPrice = Number(postPrice);
    let numberPostStock = Number(postStock);

    if (postPrice <= 0 || postStock <= 0) {
        alert("Price veya Stock '0' olamaz")
        return
    } else if (isNaN(numberPostPrice) || isNaN(numberPostStock)) {
        alert("Price ve Stock sayı olmak zorunda")
        return
    } else {
        let axiosPostData = {
            postName,
            postPrice,
            postStock
        }

        axios.post('https://northwind.vercel.app/api/products', axiosPostData).then(res => {
            console.log("POST GERÇEKLEŞTİ")
        })
    }
}