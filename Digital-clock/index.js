let hoursEl = document.querySelector('.hours');
let minutesEl = document.querySelector('.minutes');
let secondsEl = document.querySelector('.seconds');
let ampmEl = document.querySelector('.ampm');

function displayTime(){
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if(h>12){
    h = h - 12;
    ampmEl.innerText = `PM`;
  }else{
    ampmEl.innerText = `AM`;
  }

  h =  h < 10 ? '0'+ h : h;
  m =  m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hoursEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;
  setTimeout(displayTime, 1000);
}

displayTime();