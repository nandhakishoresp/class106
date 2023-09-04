var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start_recognition(){
    document.getElementById("textarea").innerHTML="";
    recognition.start();

}

recognition.onresult = function(event){

    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("textarea").innerHTML = content;
    if(content=="take my selfie"){
        console.log("taking selfie")
        speak()
        
    }}