let qrImg = document.querySelector("#qr-img")
let imgBox = document.querySelector("#img-box")
let inputText = document.querySelector("#inputText")
let btn = document.querySelector("#generateBtn")


function generateQR(){


    if(inputText.value.length > 0 ){

    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value
    imgBox.classList.add("show-img")
    inputText.value =""
    }
    else{
        alert("Please enter the text")
    }

}



inputText.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        generateQR()

    }
});

btn.addEventListener("click", generateQR)