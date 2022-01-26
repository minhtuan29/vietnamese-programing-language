let runButton = document.getElementById("run_button");
let userInputScript = document.getElementById("user_input");
let output = document.getElementById("output");


// data = userInputScript.value;
// output.innertext = ...

let vietNamProgLangToJavaScriptToDictionary = {
    "cho " : "let ",
    "viết" : "currentResult.push",
    "nếu" : "if",
    "không_thì" : "else",
    "_không" : "!",
    "đồng_thời" : "&&",
    "hoặc" : "||",
    "==" : "===",
    "cho_hàm" : "function",
    "ra" : "return"
};




let vietNamProgLanVocs = Object.keys(vietNamProgLangToJavaScriptToDictionary);




runButton.addEventListener("click", ()=>{
    let currentResult = [];
    let script = userInputScript.value;
  

    vietNamProgLanVocs.forEach(key =>
         script = script.replace(new RegExp(key, 'g'), vietNamProgLangToJavaScriptToDictionary[key])
    );


    eval(script);
    output.innerText = "";

    output.innerHTML = currentResult.join('\r\n');
});
