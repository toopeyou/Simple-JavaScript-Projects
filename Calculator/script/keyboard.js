let ChangeBtn = document.querySelector('.mode')

document.querySelector('.backspace').onclick = () => {Backspace()};

function Backspace() {
        if (OperatorCheck == false) {
        firstDisplayElement.textContent = firstDisplayElement.textContent.slice(0, -1);
    } else {
        secondDisplayElement.textContent = secondDisplayElement.textContent.slice(0, -1);
    }
}


                    
let dotBtn = document.querySelector('.dot');
dotBtn.onclick = () => {
    if (OperatorCheck === false) {
        if (!firstDisplayElement.textContent.includes(".")) {
            firstDisplayElement.textContent += firstDisplayElement.textContent ? "." : "0.";
            start = true;
        }
    } else {
        if (!secondDisplayElement.textContent.includes(".")) {
            secondDisplayElement.textContent += secondDisplayElement.textContent ? "." : "0.";
        }
    }
};



ChangeBtn.onclick = () => {
    document.querySelector('.changeBtn').classList.toggle('slider')
    document.querySelector('body').classList.toggle("nigth-mode")
}


window.addEventListener('keydown', (e) => {
    console.log(e.key)
      if (e.key >= '0' && e.key <= '9') {
        num(e.key)
      }

      switch (e.key) {
        case '+':
                AddOper(e.key)
            break;
        case '-':
                AddOper(e.key)
            break;
        case 'Enter':
                result()
            break;
        case 'Backspace':
                Backspace();
            break;
        case 'Escape':
            clear('', '')
        default:
            break;
      }
});