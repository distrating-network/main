const inputs = document.getElementsByClassName("buyinput")

for(i = 0; i< inputs.length; i++){
    inputs[i].addEventListener('input', setMaxValue)
}

function setMaxValue() {
    for(i = 0; i< inputs.length; i++){
        if(inputs[i].value > 0.1011){
            inputs[i].value = 0.1
            inputs[i].setAttribute("value", "0.1")
        }
    }
}