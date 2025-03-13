var sliderElement = document.getElementById("slider")
var buttonElement = document.getElementById("button")

var valor = document.getElementById("valor")
var password = document.getElementById("password")

var containerpassword = document.getElementById("container-password")
var copy = document.getElementById("copiar")

var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&-/=?@_"
var newpassword = ""

valor.innerHTML = sliderElement.value;

slider.oninput = function(){
    valor.innerHTML = this.value
}


function generetepassword(){
    var pass = ""
    for(var x = 0, n = charset.length; x < slider.value; ++x){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    password.innerHTML = pass
    containerpassword.classList.remove("hide")
    newpassword = pass
    copy.innerHTML = "Clique na senha para copiar"

}

function copypassword(){
    copy.innerHTML = "Senha copiada"
    navigator.clipboard.writeText(newpassword)
}
