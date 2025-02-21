var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var previousMouseX = null;
var previousMouse = null;
var isDrawing = false;

var lineWidth = 10;
var brush = 1;
var myColor = "#FF0000";

function getMousePosition(canvas, evt) {

    var rect = canvas.getBoundingClientRect();

    if (evt.clientX !== undefined && evt.clientY !== undefined) {
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}

document.getElementById("btn1").onclick = function() {
    ctx.globalAlpha = "0.2";
};

document.getElementById("btn2").onclick = function() {
    ctx.globalAlpha = "1";
};

document.getElementById("change-color").onclick = function() {
    ctx.strokeStyle = "#009933";
};

canvas.onmousedown = function(e) {
    isDrawing = true;
    var pos = getMousePosition(canvas, e);
    move(pos.x, pos.y);

};

canvas.onmousemove = function(e) {
    if(isDrawing) {
        var pos = getMousePosition(canvas, e);
        stroke(pos.x, pos.y);
    }
};

canvas.onmouseup = function() {
    isDrawing = false;
};

function stroke(mouseX, mouseY) {
        ctx.globalCompositeOperation = "source-over";
        ctx.lineJoin = ctx.lineCap = "round";
        ctx.lineWidth = 10;
        ctx.globalAlpha = "0.2";  //NOTE ALWAYS SET TO 'TRANSPARENT' needs variable if you want to switch to solid.
        ctx.beginPath();
        ctx.moveTo(previousMouseX, previousMouseY);
        ctx.lineTo(mouseX, mouseY);
        ctx.closePath();
        ctx.stroke();

        ctx.globalAlpha = "1";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(previousMouseX, previousMouseY);
        ctx.lineTo(mouseX, mouseY);
        ctx.closePath();
        ctx.stroke();

        move(mouseX, mouseY);
}

function move(mouseX, mouseY) {
        previousMouseX = mouseX;
        previousMouseY = mouseY;
}
