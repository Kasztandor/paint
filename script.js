var selected = -1
var canvas = document.getElementsByTagName("canvas")[0]
var ctx = canvas.getContext("2d");
var mouseDown = false
var interval
var coords = []
var lastCoords = [];

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

function draw(p){
    if (mouseDown){
        if (selected==0){
            ctx.beginPath()
            ctx.strokeStyle = "#000000";
            ctx.moveTo(p.pageX-61,p.pageY)
            ctx.lineTo(lastCoords[0]-61, lastCoords[1])
            ctx.lineWidth = 10
            ctx.stroke()

            ctx.beginPath()
            ctx.fillStyle = "#000000";
            ctx.arc(p.pageX-61, p.pageY, 5, 0, 2 * Math.PI)
            ctx.fill()
        }
        else if (selected==1){
            ctx.beginPath()
            ctx.strokeStyle = "#FFFFFF";
            ctx.moveTo(p.pageX-61,p.pageY)
            ctx.lineTo(lastCoords[0]-61, lastCoords[1])
            ctx.lineWidth = 10
            ctx.stroke()

            ctx.beginPath()
            ctx.fillStyle = "#FFFFFF";
            ctx.arc(p.pageX-61, p.pageY, 5, 0, 2 * Math.PI)
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
addEventListener('mousemove', draw, false);