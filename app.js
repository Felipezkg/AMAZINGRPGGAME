const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

function personagem(){
    // códigos do teclado

    var boneco = new Image()
    boneco.src = 'barbaro.png'

    var comparador = array1.indexOf(px)
    var comparador2 = array2.indexOf(px)
    var comparador3 = array3.indexOf(px)

        if(px==array1[comparador]){
            corpo = lado1  
        } 
        if(px==array2[comparador2]){
            corpo = lado2   
        }
        if(px==array3[comparador3]){
            corpo = lado3
        }
       
boneco.addEventListener('load',()=>{    
    ctx.drawImage(boneco,corpo, 720, 100,100, px, 350, 140, 140)
    })
}   

function game(){
inicial()
personagem()

}
function inicial(){
    var fundo = new Image()
    fundo.src='fundo2.jpg'
    
fundo.addEventListener('load', () => {

    ctx.drawImage(fundo,0,0,1000,600)
})
}
    var array1 = [20,50,80,110,140,170,200,230,260,290,320,350,380,410,440]
    var array2 = [0,30,60,90,120,150,180,210,240,270,300,330,360,390,420,450]
    var array3 = [10,40,70,100,130,160,190,220,250,280,310,340,370,400,430,460]
    var corpo= 520
    var lado1=30
    var lado2=230
    var lado3 = 330
    var lado4 =330
    var lado5=430
    var lado6=530
    var px = 0
    var esquerda = 37
    var direita = 39


  function movimentacao(evento){//ESSA FUNCTION FAZ O BONECO ANDAR PARA OS LADOS. 
     if (evento.keyCode == esquerda) {
        px = px - 20;//ESQUERDA
    }
     if (evento.keyCode == direita ) {
        px = px + 20;//DIREITA
    }
       }
       
setInterval(game,10)
document.onkeydown = movimentacao