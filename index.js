var canvas = document.getElementById("PLAYSPACE")
var canvasP = document.getElementById("PLAYERSPACE")
let ctxp = canvasP.getContext('2d');
let ctx = canvas.getContext('2d');
let x = 102
let y = 100


for(let i=0; i < 12; i++) {
ctx.beginPath();
ctx.strokeStyle = 'white';
ctx.moveTo(x,0);
ctx.lineTo(x,700);
ctx.stroke();
x= x + 102;
console.log(x)

ctx.beginPath();
ctx.strokeStyle = 'white';
ctx.moveTo(0,y);
ctx.lineTo(1224,y);
ctx.stroke();
y = y + 100;
}