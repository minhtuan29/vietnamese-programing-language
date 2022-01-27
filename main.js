let runButton = document.getElementById("run_button");
let userInputScript = document.getElementById("user_input");
let output = document.getElementById("output");

const closeChars = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
    ['\'', '\''],
    ['\"', '\"']
  ]);
      
  
  userInputScript.addEventListener('input', function (e) {
  
      const pos = e.target.selectionStart;
      const val = [...e.target.value];
      
      const char = val.slice(pos-1, pos)[0];
      const closeChar = closeChars.get(char);
      
      if (closeChar) {
        val.splice(pos, 0, closeChar);
        e.target.value = val.join('');
        e.target.selectionEnd = pos;
      }
  });


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
