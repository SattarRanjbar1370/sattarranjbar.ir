
// variable
let $ = document;


// select item in DOM
let spanChangeLabel1 = $.getElementById('change-label-1');
let spanChangeLabel2 = $.getElementById('change-label-2');
let inputValue = $.querySelector('input');
let btnReset = $.getElementById('reset');
let btnConvert = $.getElementById('convert');
let btnChange = $.getElementById('change');

btnChange.addEventListener('click',function changeText(){
    spanChangeLabel1.classList.toggle('d-none');
    spanChangeLabel2.classList.toggle('d-none');
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