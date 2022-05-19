
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


// modal source

let modalSet = $.getElementById('modal-set');
let modalDiv = $.getElementById('modal');
let btnClose = $.getElementById('close');
modalSet.addEventListener('click', function modalbox(){
    modalDiv.classList.remove('d-none');
})

btnClose.addEventListener('click', function closeModel(){
    modalDiv.classList.add('d-none');
})