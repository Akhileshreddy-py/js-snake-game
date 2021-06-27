// Import stylesheets
import './style.css';

// Write Javascript code!
const cvs = document.getElementById('canvas');
var x=0;
var ctx=cvs.getContext("2d");
function move()
{
ctx.fillStyle="black";
ctx.fillRect(x,9,10,15);
x++;
}

setInterval(move,100)