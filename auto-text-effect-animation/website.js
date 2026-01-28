let innerIndex = 0;
let outerIndex = 0;
let arrayOfNames = ["Freelancer","ECE-Student","Content-Creator","Web-developer"];
//console.log(typeof arrayOfNames[2].length);

let sentenceEl = document.querySelector(".js-sentence");
displaySentence()
function displaySentence(){
  sentenceEl.innerHTML = `I am ${arrayOfNames[outerIndex][0]==='E'?'an':'a'} ${arrayOfNames[outerIndex].slice(0,innerIndex)}`;
  innerIndex++; 
  if(innerIndex > arrayOfNames[outerIndex].length){
    outerIndex++;
    innerIndex = 0;
  }
  if(outerIndex >= arrayOfNames.length){
    outerIndex = 0;
    innerIndex = 0;
  }
  setTimeout(displaySentence,300);
}