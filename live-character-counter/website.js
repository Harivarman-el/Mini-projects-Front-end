let inputBoxEl = document.querySelector('.input-box');
let remainingEl = document.querySelector('.remaining');
let noOfCharEl = document.querySelector('.no-of-char');

const maxLength = inputBoxEl.maxLength;

inputBoxEl.addEventListener('input',()=>{
  remainingEl.innerText = `Remaining : ${maxLength - inputBoxEl.value.length}`;
  noOfCharEl.innerText = `Number of characters : ${inputBoxEl.value.length}`
});