var selected = -1
var canvas = document.getElementsByTagName("canvas")[0]
var ctx = canvas.getContext("2d");
var mouseDown = false
var interval
var lastCoords = []
var size = 20
var color = "#000000"

window.onbeforeunload = function(event)
{
    return confirm("Confirm refresh")
}

function selectReload(){
    var selects = document.querySelectorAll(".selected")
    selects.forEach((x)=>{
        x.classList.remove("selected")
    })
    document.querySelectorAll(".tool")[selected].classList.add("selected")
}
function select(x){
    selected = x
    selectReload()
}

document.getElementsByTagName("input")[0].value = size

function change(){
    size = document.getElementsByTagName("input")[0].value
    document.documentElement.style.setProperty("--size",size+"px")
}

function mouseMover(p){
    document.documentElement.style.setProperty("--posX",p.pageX-size/2+"px")
    document.documentElement.style.setProperty("--posY",p.pageY-size/2+"px")
    if (mouseDown){
        if (selected===0){
            ctx.beginPath()
            ctx.strokeStyle = color;
            ctx.moveTo(p.pageX-61,p.pageY)
            ctx.lineTo(lastCoords[0]-61, lastCoords[1])
            ctx.lineWidth = size
            ctx.stroke()

            ctx.beginPath()
            ctx.fillStyle = color;
            ctx.arc(p.pageX-61, p.pageY, size/2, 0, 2 * Math.PI)
            ctx.fill()
        }
        else if (selected===1){
            ctx.beginPath()
            ctx.strokeStyle = "#FFFFFF";
            ctx.moveTo(p.pageX-61,p.pageY)
            ctx.lineTo(lastCoords[0]-61, lastCoords[1])
            ctx.lineWidth = size
            ctx.stroke()

            ctx.beginPath()
            ctx.fillStyle = "#FFFFFF";
            ctx.arc(p.pageX-61, p.pageY, size/2, 0, 2 * Math.PI)
            ctx.fill()
        }
    }
    lastCoords=[p.pageX,p.pageY]
}
canvas.addEventListener('pointerdown', (event) => {
    mouseDown = true
});
canvas.addEventListener('pointerup', (event) => {
    mouseDown = false
});
/*canvas.addEventListener('pointerout', (event) => {
    mouseDown = false
});*/

function setColor(a){
    color = a
    document.documentElement.style.setProperty('--selected-color',a)
}

addEventListener('mousemove', mouseMover, false);