function productsShow() {
    axios.get('https://northwind.vercel.app/api/products').then(res => {
        res.data.forEach(element => {
            let productsUL = document.querySelector('.productsNameList')
            let productsLI = document.createElement('li');
            let countProducts = document.querySelector('.countProducts')

            productsLI.style.listStyleType = "decimal";

            productsLI.innerHTML = element.name;

            productsUL.appendChild(productsLI)

            countProducts.innerHTML = res.data.length
        });
    })
}