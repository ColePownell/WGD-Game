var canvas = document.getElementById("PLAYSPACE")
var canvasP = document.getElementById("PLAYERSPACE")
var canvasr = document.getElementById("OPP-R")
var canvasrm = document.getElementById("OPP-RM")
var canvaslm = document.getElementById("OPP-LM")
var canvasl = document.getElementById("OPP-L")
var startBtn = document.getElementById("start")
var PHP = document.getElementById("PLAYER-HP")
var OHP = document.getElementById("OPP-HP")
var ONAME = document.getElementById("OPP-NAME")
let ctxp = canvasP.getContext('2d');
let ctx = canvas.getContext('2d');
let ctxr = canvasr.getContext('2d');
let ctxrm = canvasrm.getContext('2d');
let ctxlm = canvaslm.getContext('2d');
let ctxl = canvasl.getContext('2d');
let plx = 612; //player location y
let ply = 300; //player location x
let pls = { // simple player location used for checking damage
    y: 4,
    x: 7
}
let end = false; // is the game over
let canMove = true;
let tempArray = {}
let tempString = ""
let tempNum = 0
let playerHP = 30
let playerDmg = 4
let oppHP = 0
var img = new Image();

//default img array for default background and player img
imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = "./Images/Default.png"
imgArray[1] = new Image();
imgArray[1].src = "./Images/PlayerArt.png"
imgArray[2] = new Image();
imgArray[2].src = "/Images/Gameover100.png"
imgArray[3] = new Image();
imgArray[3].src = "/Images/Win100.png"

startBtn.addEventListener("click", function() { // restes a bunch of stuff to start/start over game

    end = false
    playerHP = 30;
    PHP.textContent = 30;
    ctx.clearRect(0, 0, 1224, 700);
    ctx.drawImage(imgArray[0],0,0)
    plx = 612;
    ply = 300;
    pls = {
        y: 4,
        x: 7
    }
    DrawPlayer(plx,ply);
    })

document.addEventListener("keydown", function(event) 
{
    if (end == false) {
    if (event.key === 'a') 
    {
        if(plx != 0) 
        {
            if(canMove == true)
            {
                pls.x = pls.x - 1;
                plx = plx - 102;
                DrawPlayer(plx,ply);
                canMove = false
                setTimeout(function() {setCanMove()}, 300)
            }
        }
    }
    }
    if (end == false) {
        if (event.key === 's') 
        {
            if(ply != 600) 
            {
                if(canMove == true)
                {
                    pls.y = pls.y + 1
                    ply = ply + 100;
                    DrawPlayer(plx,ply);
                    canMove = false
                    setTimeout(function() {setCanMove()}, 300)
                }
            }
        }
    }
    if (end == false) {
        if (event.key === 'w') 
        {
            if(ply != 0) 
            {
                if(canMove == true)
                {
                    pls.y = pls.y - 1
                    ply = ply - 100;
                    DrawPlayer(plx,ply);
                    canMove = false
                    setTimeout(function() {setCanMove()}, 300)
                }
            }
        }
    }
        if (end == false) {
            if (event.key === 'd') 
            {
                if(plx != 1122) 
                {
                    if(canMove == true)
                    {
                        pls.x = pls.x + 1;
                        plx = plx + 102;
                        DrawPlayer(plx,ply);
                        canMove = false
                        setTimeout(function() {setCanMove()}, 300)
                    }
                }
            }
        }
});

function DrawPlayer(plx, ply) {
    // img.src = "./Images/PlayerArt.png"
    // img.onload = () => {
    ctxp.clearRect(0, 0, 1224, 700);
    ctxp.drawImage(imgArray[1],plx,ply);
    // };
 }

                                    // Loads Default map and player
img.src = "./Images/Default.png";
img.onload = () => {
ctx.drawImage(img,0,0);
img.src = "./Images/PlayerArt.png"
img.onload = () => {
ctxp.drawImage(img,612,300);
};
};

// slows down the movement
function setCanMove() {
    canMove = true;
}


// for(let i=0; i < 12; i++) {
// ctx.beginPath();
// ctx.strokeStyle = 'white';
// ctx.moveTo(x,0);
// ctx.lineTo(x,700);
// ctx.stroke();
// x= x + 102;
// console.log(x)

// ctx.beginPath();
// ctx.strokeStyle = 'white';
// ctx.moveTo(0,y);
// ctx.lineTo(1224,y);
// ctx.stroke();
// y = y + 100;
// }


// var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
// window.location.href=image;