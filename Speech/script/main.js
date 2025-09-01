let startButton = document.querySelector('.startRecordButton')
let stopButton = document.querySelector('.stopRecordButton')


let timer;
let seconds = 0;
let display = document.querySelector('.timer')
function updateDisplay() {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  display.textContent =
    (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? " 0" : " ") + secs;
}


function Stop() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateDisplay();      
    startButton.classList.remove('none')
    stopButton.classList.add('none')
}









document.querySelector('.speech-to-text-btn').onclick = (e) => {
  document.querySelector('.Speech-to-text').classList.remove('none')
  document.querySelector('.Text-to-speech').classList.add('none')
  document.querySelector('.speech-to-text-btn').classList.add('active'); 
  document.querySelector('.text-to-speech-btn').classList.remove('active') 
}

document.querySelector('.text-to-speech-btn').onclick = (e) => {
  document.querySelector('.Text-to-speech').classList.remove('none')
  document.querySelector('.Speech-to-text').classList.add('none')
  document.querySelector('.speech-to-text-btn').classList.remove('active'); 
  document.querySelector('.text-to-speech-btn').classList.add('active') 
}