var se;
var min;
var hour;
var day;
var month;
var year;
var dom;
var noon;
function init() {
  window.setInterval(countdown, 1000);
  se = document.getElementById("se");
  min = document.getElementById("min");
  hour = document.getElementById("hour"); 
  day=document.getElementById("day");
  month=document.getElementById("month");
  year=document.getElementById("year");
  dom=document.getElementById("dom");
   noon=document.getElementById("noon");
}
function countdown() {
  var dayList=["Sunday","Monday","Tuesday","Wensday","Thursday","Friday","Saturday"];
  var monthList=["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec."];
  var date=new Date();
  
  se.innerHTML=date.getSeconds();
  min.innerHTML=date.getMinutes();
  hour.innerHTML=date.getHours();
  day.innerHTML=dayList[date.getDay()];
  month.innerHTML=monthList[date.getMonth()];
 year.innerHTML=date.getFullYear();
 dom.innerHTML=date.getDate();
if(hour.innerHTML>12){
  noon.innerHTML="下午";
}else{
  noon.innerHTML="上午";
}
  }
