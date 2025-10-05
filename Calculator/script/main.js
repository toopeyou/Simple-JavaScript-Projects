let numbers = document.querySelectorAll('.keyboard-item-number');
let operators = document.querySelectorAll('.keyboard-item-operator');

let operatorDisplayElement = document.querySelector(".oper");
let firstDisplayElement = document.querySelector('.first');
let secondDisplayElement = document.querySelector('.second');

let resultDisplay = document.querySelector('.results')

let resultElement = document.querySelector(".calculator-display");
let p = document.querySelector('p')


let OperatorCheck = false
let start = false
 





operators.forEach(element => {
    element.onclick = () => {
        AddOper(element.textContent)
    }
});
function AddOper(el) {
    if (OperatorCheck == false) {
        if (start == true) {
            operatorDisplayElement.textContent = el
            OperatorCheck = true
        }
    }
}


numbers.forEach(element => {
    element.onclick = () =>  {
        num(element.textContent)
    }    
});
function num(el) {
    if (OperatorCheck == false) {
            updateFontSize()
            if (firstDisplayElement.textContent.length < 10) firstDisplayElement.textContent += el, start = true;
        }else {
            if (secondDisplayElement.textContent.length < 10) {secondDisplayElement.textContent += el}
            updateFontSize()
        }
}



function result() {
    switch (operatorDisplayElement.textContent) {
        case '-':
                clear(Number(firstDisplayElement.innerHTML) - Number(secondDisplayElement.innerHTML), `${firstDisplayElement.innerHTML} ${operatorDisplayElement.innerHTML} ${secondDisplayElement.innerHTML}`)
            break;
        case '+':
                clear(Number(firstDisplayElement.innerHTML) + Number(secondDisplayElement.innerHTML), `${firstDisplayElement.innerHTML} ${operatorDisplayElement.innerHTML} ${secondDisplayElement.innerHTML}`)
            break;
        case 'x':
                clear(Number(firstDisplayElement.innerHTML) * Number(secondDisplayElement.innerHTML), `${firstDisplayElement.innerHTML} ${operatorDisplayElement.innerHTML} ${secondDisplayElement.innerHTML}`)
            break;
        case '÷':
                clear(Number(firstDisplayElement.innerHTML) / Number(secondDisplayElement.innerHTML), `${firstDisplayElement.innerHTML} ${operatorDisplayElement.innerHTML} ${secondDisplayElement.innerHTML}`)
            break;
        case '%':
                clear((Number(firstDisplayElement.innerHTML) / 100 ) * Number(secondDisplayElement.innerHTML), `${firstDisplayElement.innerHTML} ${operatorDisplayElement.innerHTML} ${secondDisplayElement.innerHTML}`)
            break;
        default:
            if (firstDisplayElement.innerHTML) {
                clear(Number(firstDisplayElement.innerHTML) * 2, `${firstDisplayElement.innerHTML} x ${firstDisplayElement.innerHTML}`)
            }
            break;
    }
}









function clear(getResult, showResult) {
    console.log(getResult)

    operatorDisplayElement.innerHTML = ''
    secondDisplayElement.innerHTML = ''
    resultDisplay.innerHTML = showResult
    if (getResult == '' ) {
        firstDisplayElement.innerHTML = ''
        resultDisplay.innerHTML = ''
    }else if (getResult > 9999999999009000000){
        firstDisplayElement.innerHTML = ''
        resultDisplay.innerHTML  = ''
    }else {
        firstDisplayElement.innerHTML = parseFloat(Number(getResult).toFixed(2));
    }
    updateFontSize()

    OperatorCheck = false
}
document.querySelector('.ac').onclick = () => {clear('', '')}




function updateFontSize() {
    const h2 = document.querySelector("h2.result");
    const p = document.querySelector(".results");
    let length = firstDisplayElement.textContent.length + secondDisplayElement.textContent.length
    console.log(length)

    if (p.textContent.length > 32) {
        p.classList.add('fz')
    }else{
        p.classList.remove('fz')
    }


    if (length > 10 && length < 19) {
        resultElement.classList.add("mediumSize")
    }else if (length > 18  && length < 30){      
        resultElement.classList.add('lowSize')
        resultElement.classList.remove('mediumSize')
    }else {
        resultElement.classList.remove('lowSize')
        resultElement.classList.remove('mediumSize')
    }

}


