let btnEl = document.querySelector('.btn');
btnEl.addEventListener("mouseover",(event)=>{
  const posX = event.pageX - btnEl.offsetLeft;
  const posY = event.pageY - btnEl.offsetTop;
  btnEl.style.setProperty("--xPos", posX + "px");
  btnEl.style.setProperty("--yPos", posY + "px");
});