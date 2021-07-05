var mouseEvent = "empty";
var lastXPosition, lastYPosition;
var color = "black";
var width = 2;
var screenWidth = screen.width;
var newCanvasWidth = screen.width-100;
var newCanvasHeight = screen.height-300;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

if(screenWidth < 992) {
   document.getElementById("myCanvas").width = newCanvasWidth;
   document.getElementById("myCanvas").height = newCanvasHeight;
   document.body.style.overflow = "hidden";
   canvas.addEventListener("touchstart", MyTouchStart);
   canvas.addEventListener("touchmove", MyTouchMove);
}
else{
    canvas.addEventListener("mousedown", MyMouseDown);
    canvas.addEventListener("mousemove", MyMouseMove);
    canvas.addEventListener("mouseUp", myMouseUp);
    canvas.addEventListener("mouseleave", myMouseLeave);
    document.getElementById("myCanvas").width = 800;
   document.getElementById("myCanvas").height = 600;
}

function MyTouchStart(e){
    console.log("my_touch_start");
    color=document.getElementById("color").value;
    width=document.getElementById("line_width").value;
     lastXposition = e.touches[0].clientX-canvas.offsetLeft;
     lastYposition = e.touches[0].clientY-canvas.offsetTop;
    }
    
    
    function MyTouchMove(e){
        console.log("my_touch_move");
        var currentTouchXposition =e.touches[0].clientX-canvas.offsetLeft;
        var currentTouchYposition =e.touches[0].clientY-canvas.offsetTop;
         
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=width;
    
            console.log("last x position = " + lastXPosition);
            console.log("last y position = " + lastYPosition);
            ctx.moveTo(lastXPosition, lastYPosition);
    
            //console.log("current touch x position = " + currentTouchXPosition);
            //console.log("current touch y position = " + currentTouchYPosition);
            ctx.lineTo(currentTouchXposition, currentTouchYposition);
            ctx.stroke();
        
         lastXPosition = currentTouchXposition;
         lastYPosition = currentTouchYposition;
    }


function MyMouseDown(e){
mouseEvent="mouseDown";
color=document.getElementById("color").value;
width=document.getElementById("line_width").value;
}


function MyMouseMove(e){
    var currentXposition =e.clientX-canvas.offsetLeft;
    var currentYposition =e.clientY-canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        ctx.moveTo(lastXPosition, lastYPosition);

        ctx.lineTo(currentXposition, currentYposition);
        ctx.stroke();
    }
     lastXPosition = currentXposition;
     lastYPosition = currentYposition;
}

function myMouseUp(e){
    mouseEvent="mouseUp";
}


function myMouseLeave(e){
    mouseEvent="mouseLeave";
}

function clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }