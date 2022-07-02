const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

var esquerda = 37
    var cima = 38
    var direita = 39
    var baixo = 40
    var py = 300
    var px =400


function inicial(){

    ctx.fillStyle= 'green'
    ctx.fillRect(0, 0, 1000, 600); 

}

function inicial1(px,py){

    ctx.fillStyle= 'gray'
    ctx.fillRect(px, py, 6, 50);

    ctx.fillStyle= 'BLUE'
    ctx.fillRect(px-5, py-5, 15, 15);

    ctx.fillStyle= 'black'
    ctx.fillRect(px+6, py+40, 8, 30);

    ctx.fillStyle= 'black'
    ctx.fillRect(px-6, py+40, 8, 30);

    ctx.fillStyle= 'black'
    ctx.fillRect(px+5, py+40, 8, 30);






}
inicial1()
function game(){
inicial()
inicial1(px,py)

}
function leDoTeclado(evento) {

    if(evento.keyCode == cima ) {
        py = py - 10

    } else if (evento.keyCode == baixo) {
        py = py + 10

    } else if (evento.keyCode == esquerda) {
        px = px - 10

    } else if (evento.keyCode == direita) {
        px = px + 10
    } else if (evento.keyCode == direita && baixo){
        alert(`fumegou`)
    }
}


document.onkeydown = leDoTeclado


setInterval(game,10)