function recognize(){
    console.log("aaaa");
    var recognition=new webkitSpeechRecognition();
    recognition.lang="en-GB";
    recognition.onresult=(event)=>{
        console.log(event);
    }
    recognition.start();
}