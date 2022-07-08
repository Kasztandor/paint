var selected = 0

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