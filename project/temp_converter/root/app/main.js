
// 
// variable
let $ = document;


// select item in DOM
let spanChangeLabel = $.getElementById('change-label');
let inputValue = $.querySelector('input');
let btnReset = $.getElementById('reset');
let btnConvert = $.getElementById('convert');
let btnChange = $.getElementById('change');


btnChange.addEventListener('click', function changeAlgo() {
    console.log(spanChangeLabel.value)
})