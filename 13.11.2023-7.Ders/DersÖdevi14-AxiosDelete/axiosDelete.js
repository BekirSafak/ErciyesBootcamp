let linkAPI = "https://northwind.vercel.app/api/customers";
function getAxios() {
    axios.get(linkAPI).then(res => {
        res.data.forEach(element => {
            let getList = document.querySelector('.getList')
            let getLi = document.createElement('li');
            getLi.innerHTML = "Şiket İsmi: " + element.companyName + " ID : " + element.id
            getList.appendChild(getLi)
        });
    });
}

getAxios();

function postCustormers() {

    let companyName = document.querySelector('#companyName').value;
    let contactName = document.querySelector('#contactName').value;
    let contactTitle = document.querySelector('#contactTitle').value;

    console.log(companyName)
    console.log(contactName)
    console.log(contactTitle)

    let axiosPostData1 = {
        companyName,
        contactName,
        contactTitle
    }

    axios.post(linkAPI, axiosPostData1).then(res => {
        console.log("POST GERÇEKLEŞTİ")
        getAxios();
    })
}

function deleteCustomers() {
    let deleteID = document.querySelector('#deleteID').value
    axios.delete(`${linkAPI}/${deleteID}`).then(res => {
        getAxios();
    })
}


