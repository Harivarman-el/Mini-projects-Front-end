let containerEl = document.getElementById("calender-container");
let monthEL = document.getElementById("month-name");
let dayEl = document.getElementById("day-name");
let dateEl = document.getElementById("date");
let yearEL = document.getElementById("year");

let dateValue = new Date();
monthEL.innerText = dateValue.toLocaleString("en",{
  month:"long"
});
dayEl.innerText = dateValue.toLocaleString("en",{
  weekday :"long"
});
dateEl.innerText = dateValue.getDate();
yearEL.innerText = dateValue.getFullYear();