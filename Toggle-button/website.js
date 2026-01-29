let inputEl = document.querySelector('.input-btn');
let labelEl = document.querySelector('label');
let circleEl = document.querySelector('.circle');
let bodyEL = document.querySelector('body');

let isDark = JSON.parse(localStorage.getItem('toggle')) || false;


inputEl.checked = isDark;
toggle(isDark); 


function toggle(dark){
  if(dark){
    bodyEL.style.background = 'black';
    circleEl.style.background = 'black';
    labelEl.style.background = 'white';
  }else{
    bodyEL.style.background = 'antiquewhite';
    circleEl.style.background = 'white';
    labelEl.style.background = 'rgb(204, 204, 206)';
  }
}


inputEl.addEventListener('click', () => {
  isDark = inputEl.checked; 
  localStorage.setItem('toggle', JSON.stringify(isDark)); 
  toggle(isDark); 
});
