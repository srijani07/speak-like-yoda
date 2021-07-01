var btnTranslate = document.querySelector('#translate-button');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');
var serverURL= "https://api.funtranslations.com/translate/yoda.json";
function getTranslationURL(text) {
return serverURL + "?" +"text=" + text;
}

function errorHandler(error) {
    console.log("error occured"+ error);
    alert("Oops! There an issue at our end")
}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
     .then(response => response.json())
     .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; 
})

}



btnTranslate.addEventListener("click", clickHandler);


