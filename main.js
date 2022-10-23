function validar(){
    try{
        var email = document.getElementById("email").value;
        if(email == null || email == ""){
            alert("o e-mail não pode ser nulo!")
        }
        if(email.indexOf("@")< 1){
            alert("E-mail inválido! Digite um e-mail com @")
        }
        if(email.indexOf(".")<1){
            alert("E-mail inválido! Digite um e-mail com pelo meos um '.'")
        }

        var senha= document.getElementById("senha").value;
        if(senha == null || senha == ""){
            alert("A senha não pode ser nula")
        }
        if(senha.length < 6){
            alert("A senha precisa ter pelo menos 6 dígitos!")
        }
        var repsenha = document.getElementById("repsenha").value;
        if(repsenha == ""){
            alert("A senha não pode ser nula")
        }
        if(senha != repsenha){
            alert("A senha precisam ser idênticas")
        }
    }catch(err){
        alert(err)
    }
}