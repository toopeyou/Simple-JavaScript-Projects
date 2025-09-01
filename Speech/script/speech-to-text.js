let SpeechArea = document.querySelector('.speech')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.error('Web Speech API не поддерживается в этом браузере');
  } else {
    const rec = new SpeechRecognition();


    rec.lang = 'ru-RU';   
    rec.interimResults = true; 
    rec.continuous = true;   

    // события
    rec.onstart = () => console.log('🎧 Слушаю...');
    rec.onend   = () => console.log('🛑 Остановлено');
    rec.onerror = (e) => console.error('Ошибка распознавания:', e.error);

    rec.onresult = (e) => {
      const result = e.results[e.results.length - 1];
      const text = result[0].transcript.trim();
      if (result.isFinal) {SpeechArea.textContent = text} else {SpeechArea.textContent = text}
    };

    startButton.onclick = async () => {
      try {
          if (!timer) { 
            timer = setInterval(() => {
              seconds++;
              updateDisplay();
            }, 1000);
          }
        startButton.classList.add('none')
        stopButton.classList.remove('none')
    
        await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (err) {
        console.error('Нет доступа к микрофону:', err);
        return;
      }
      rec.start();
    };

    stopButton.onclick = () => {
      rec.stop();
      Stop()
    } 
  }