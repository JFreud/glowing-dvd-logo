var cb = document.getElementById("clear");
var svg = document.getElementById("svgfield");



var bounce = function(event) {
  var xMag = Math.floor(Math.random() * 10 - 5);
  var yMag = Math.floor(Math.random() * 10 - 5);
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", event.offsetX);
  circle.setAttribute("cy", event.offsetY);
  circle.setAttribute("r", 7);
  circle.setAttribute("stroke", "white");
  circle.setAttribute("fill", "navy");
  svg.appendChild(circle);
  clearInterval(id);
  function dvdo() {
    x += xMag;
    y += yMag;
    id = setInterval(animate, 10);
    if(y - r <= 0 || y + r >= rect.height) {
      yMag *= -1;
    }
    if(x - r <= 0 || x + r >= rect.width) {
      xMag *= -1;
    }
  }
  dvdo();
}



svg.addEventListener('click', bounce);
