var buttonEnable = true

$("#InputCPF").mask("000.000.000-00")

function verificationInput(inputVal){
    var inputVal = $("#InputCPF").val()
    if (inputVal != 0 && inputVal.length == 14){
        var res = (validationCPF(inputVal.replace(".", "").replace(".", "").replace("-", "")))
        buttonResponse(res)
    }else if (inputVal.length < 11 && inputVal != 0){
        return ("Número de CPF incompleto.")
    }else {
        return ("Preencha o CPF.")
    }
}

function validationCPF(cpfNumber){
    var Soma;
    var Resto;
    Soma = 0;
    if (cpfNumber == "00000000000") return false;

    for (i=1; i<=9; i++) Soma = Soma + parseInt(cpfNumber.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpfNumber.substring(9, 10)) ) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfNumber.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpfNumber.substring(10, 11) ) ) return false;
    return true;
}

function buttonLoad(){
    $("#ValidationBtn").addClass("Load-Btn")
    $("#ValidationBtn").html('<div class="loader"></div>')
    buttonEnable = false
}

function buttonResponse(response){
    if (response) {
        $("#ValidationBtn").removeClass("Load-Btn")
        $("#ValidationBtn").addClass("True-Response")
        $("#ValidationBtn").html('<img src="src/check-circle-solid-24.png" draggable="false" height="19px"/>   CPF Valido')
        buttonEnable = false
    }else{
        $("#ValidationBtn").removeClass("Load-Btn")
        $("#ValidationBtn").addClass("False-Response")
        $("#ValidationBtn").html('<img src="src/x-circle-solid-24.png" draggable="false" height="19px"/>   CPF Inválido')
        buttonEnable = false
    }
}

$("#ValidationBtn").click(function(){
    if (buttonEnable){
        buttonLoad()
    setTimeout(function(){
        verificationInput()
    },1500); 
    }
})

$("#InputCPF").focus(function() {
    $("#ValidationBtn").removeClass("Load-Btn")
    $("#ValidationBtn").removeClass("False-Response")
    $("#ValidationBtn").removeClass("True-Response")
    $("#ValidationBtn").html('Validar')
    buttonEnable = true
})