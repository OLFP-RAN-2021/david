const convert = document.getElementById("convert") ;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;


let result_seconds = document.getElementById("resultSeconds") 
let result_minutes = document.getElementById("resultMinutes")
let result_hours = document.getElementById("resultHours")
let result_days = document.getElementById("resultDays")

convert.addEventListener("click", function() {
let numberOfYears = document.getElementById("numberOfYears").value ;

result_seconds.innerText ="123" ;
result_minutes.innerText ="456" ;
result_hours.innerText ="789" ;
result_days.innerText ="1 3" ;
});
function dayDiff(d1, d2)
{
  d1 = d1.getTime() / 86400000;
  d2 = d2.getTime() / 86400000;
  return new Number(d2 - d1).toFixed(0);
}