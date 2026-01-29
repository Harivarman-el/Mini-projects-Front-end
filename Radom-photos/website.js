let imgContainEl = document.querySelector('.image-container');
let loadBtnEl = document.querySelector('.load-btn');

let numImg = 10;
let i = 0;
loadBtnEl.addEventListener('click',()=>{
  for(; i<numImg; i++){
    const newImgEl = document.createElement('img');
    newImgEl.src = `https://picsum.photos/200?random=${i+3}`;
    imgContainEl.appendChild(newImgEl);
  }
  i = numImg ;
  numImg += 10;

});