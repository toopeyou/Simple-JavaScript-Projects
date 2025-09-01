let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

voiceSelect.onchange = function () {
    let selectedIndex = voiceSelect.value;
    speech.voice = voices[selectedIndex];
}

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices()
    voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.name, i) )   
}

document.querySelector('#listen').addEventListener("click", () => {
    if (document.querySelector('#text').value) {  
        speech.text = document.querySelector('#text').value
        window.speechSynthesis.speak(speech)
    }else {
        alert('Введите текст')
    }


})