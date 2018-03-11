var cb = document.getElementById("clear");
var svg = document.getElementById("svgfield");
var rect = svg.getBoundingClientRect();

var requestID, x, y, r, xMag, yMag;

var circles = [];

var bounce = function(event) {
  clearInterval(requestID);
  x = event.offsetX;
  y = event.offsetY;
  r = 7;
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", r);
  circle.setAttribute("stroke", "white");
  circle.setAttribute("fill", "navy");
  circle.setAttribute("xMag", Math.floor(Math.random() * 10 - 5));
  circle.setAttribute("yMag", Math.floor(Math.random() * 10 - 5));
  svg.appendChild(circle);
  circles.push(circle);
  requestID = setInterval(dvdo, 10);
  dvdo();
}

function dvdo() {
  var circle;
  for (var i = 0; i < circles.length; i++){
    circle = circles[i];
    x = parseInt(circle.getAttribute("cx"));
    y = parseInt(circle.getAttribute("cy"));
    r = parseInt(circle.getAttribute("r"));
    xMag = parseInt(circle.getAttribute("xMag"));
    yMag = parseInt(circle.getAttribute("yMag"));
    if(y - r <= 0 || y + r >= rect.height) {
      yMag *= -1;
      circle.setAttribute("yMag", yMag);
    }
    if(x - r <= 0 || x + r >= rect.width) {
      xMag *= -1;
      circle.setAttribute("xMag", xMag);
    }
    circle.setAttribute("cx", x + xMag);
    circle.setAttribute("cy", y + yMag);
  }
}

var clear = function() {
  clearInterval(requestID);
  svg.innerHTML = ' ';
  circles = [];
}

requestID = setInterval(dvdo, 10);

svg.addEventListener('click', bounce);
cb.addEventListener('click', clear);
