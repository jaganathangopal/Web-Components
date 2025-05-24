function getVoice() {
    const output = document.getElementById('output');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SpeechRecognition){
        output.textContent = "Voice dont recognize";
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.start();

    recognition.onresult = function (event){
        const transcript = event.results[0][0].transcript;
        output.textContent = transcript;
    };
    recognition.onerror = function (event){
        output.textContent = event.error;
    };
}
