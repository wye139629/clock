var se;
var min;
var hour;
function init() {
  window.setInterval(countdown, 1000);
  se = document.getElementById("se");
  min = document.getElementById("min");
  hour = document.getElementById("hour");
}
function countdown() {
  se.innerHTML = se.innerHTML - -1;
  if (se.innerHTML == 60) {
    se.innerHtml = "0";
  }
}
