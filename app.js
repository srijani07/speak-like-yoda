var btnTranslate = document.querySelector('#translate-button'); //capturing button interaction
var txtInput = document.querySelector('#txt-input'); 
var outputDiv = document.querySelector('#output'); //for displaying output
var serverURL= "https://api.funtranslations.com/translate/yoda.json";
function getTranslationURL(text) {
return serverURL + "?" +"text=" + text;
}

function errorHandler(error) {
    console.log("error occured"+ error);
    alert("Oops! There an issue at our end")
}

function clickHandler() {

    var inputText = txtInput.value; //taking the user input value
    fetch(getTranslationURL(inputText)) //calling the API 
     .then(response => response.json())
     .then(json => {
        var translatedText = json.contents.translated; //storing the translated sentence
        outputDiv.innerText = translatedText; 
})

}



btnTranslate.addEventListener("click", clickHandler);


