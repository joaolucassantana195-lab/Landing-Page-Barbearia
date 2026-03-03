//elementos do html
let zoomimg = document.querySelector(".logozoom")
let imgheader = document.querySelector(".headerimg")
let header = document.querySelector("header")
let main = document.querySelector("main")
let btnenviar = document.querySelector(".btn-enviar")
let inputemail = document.querySelector(".input-email")
let footer = document.querySelector("footer")
let btncomprar = document.querySelector(".btn-comprar")

// funcoes
imgheader.addEventListener("mouseover", () => {
    zoomimg.style.opacity = "1"
    main.style.opacity = "0.5"
    header.style.opacity = "0.5"
    footer.style.opacity = "0.5" 
})
imgheader.addEventListener("mouseout", () => {
    zoomimg.style.opacity = "0"
    main.style.opacity = "1"
    header.style.opacity = "1"
    footer.style.opacity = "1" 
})
btnenviar.addEventListener("click", () => {
    if (inputemail.value === "" ){
        alert("Digite seu email!")
    }else{
        let email = inputemail.value
        if(email.includes("@gmail.com")){
            alert("email enviado com sucesso!")
        }else{
            alert("insira um email valido!")
        }
    }
})

btncomprar.addEventListener("click", () => {
    window.location.href = "checkout.html"
})