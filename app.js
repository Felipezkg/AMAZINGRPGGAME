const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')



function game(){
inicial()
personagem()

}

function inicial(){

    
    var fundo = new Image()
    fundo.src='fundo.jpg'
    
fundo.addEventListener('load',()=>{

    ctx.drawImage(fundo,0,0,1000,600)
})

    
}
function movimentacao(){
   
}

function personagem(){
    // códigos do teclado
    

    var boneco = new Image()
    boneco.src = 'boneco.png'


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
        

       
ctx.drawImage(boneco,corpo , 205, 55,55, px, 350, 140, 140)//correndo lado1






    })

}   
   var array1 = [20,50,80,110,140,170,200,230,260,290,320,350,380,410,440]
   var array2 = [0,30,60,90,120,150,180,210,240,270,300,330,360,390,420,450]
   var array3 = [10,40,70,100,130,160,190,220,250,280,310,340,370,400,430,460]
    var corpo= 520
    var lado1=600
    var lado2=410
    var lado3 = 500
    var px = 0
    var esquerda = 37
    var direita = 39
  function movimentacao(evento){
     if (evento.keyCode == esquerda) {
            px = px - 10;

    }
     if (evento.keyCode == direita ) {
        px = px + 10;
    }

        
       }
setInterval(game,30)
document.onkeydown = movimentacao




