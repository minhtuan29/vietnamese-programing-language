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
    "không_" : "!",
    "đồng_thời" : "&&",
    "hoặc" : "||",
    "==" : "===",
    "cho_hàm" : "function",
    "ra" : "return",
    "chạy_khi" : "while",
    "tiếp_tục" : "continue",
    "dừng_lại" :"break",
    "với_mỗi" : "for",
    "của_tập" : "of",
    "các_pt_sẽ" : "forEach",
    "lọc_với_đk" : "filter",
    "tồn_tại" : "includes",
    "tồn_tại_pt_thõa_đk" : "some",
    "đều_thõa_mãn_đk" : "every",
    "chuyển_đổi" : "map",
    "lấy_về_các_pt_cuối" : "flat",
    "tìm_pt_thõa_đk" : "find",
    "sắp_xếp_với_đk" : "sort",
    "tự_đảo_ngược" : "reverse"
};



let vietNamProgLanVocs = Object.keys(vietNamProgLangToJavaScriptToDictionary);



runButton.addEventListener("click", ()=>{
    let currentResult = [];
    let script = userInputScript.value;

    console.log(script);

    vietNamProgLanVocs.forEach(key =>
         script = script.replace(new RegExp(key, 'g'), vietNamProgLangToJavaScriptToDictionary[key])
    );

    console.log(script);

    eval(script);
    output.innerText = "";

    output.innerHTML = currentResult.join('\r\n');
});



