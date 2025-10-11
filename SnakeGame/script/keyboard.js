document.addEventListener('keydown', direction)
let buttons = document.querySelectorAll('button')
let dir;
function direction(event) {
    if (event.keyCode == 37 && dir != 'rigth') {
        dir = 'left'
    }else if (event.keyCode == 38 && dir != 'down'){
        dir = 'up'
    }else if (event.keyCode == 39 && dir != 'left'){
        dir = 'rigth'
    }else if (event.keyCode == 40 && dir != 'up'){
        dir = 'down'
    }
}

buttons.forEach(element => {
    element.onclick = () => {
        console.log(element.value);
        if (element.value == 'left') dir = 'left';        
        if (element.value == 'right') dir = 'rigth';        
        if (element.value == 'up') dir = 'up';
        if (element.value == 'down') dir = 'down';        
    }
});


document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'r' && isGameOver) {
        restartGame();
    }
});