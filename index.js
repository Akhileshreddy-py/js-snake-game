// Import stylesheets
import './style.css';

// Write Javascript code!
const cvs = document.getElementById('canvas');
var x = 0;
var ctx = cvs.getContext('2d');
function drawXSnake(x,y) {
  ctx.fillStyle = 'white';
  ctx.fillRect(x,0,10,10);
  ctx.fillStyle="black";
  ctx.stroke();
}
drawXSnake(10,10);
drawXSnake(20,10);



//setInterval(move,100)
