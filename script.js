


const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

// Váriavel que define a posição do Personagem.
var x = 20;  // Horizontal.
var y = 455; // Vertical.

// Váriavel que define a posição do Inimigo.
let obsx = 600; //Horizontal.
let obsy = 455; //Vertical.

// códigos do teclado
var esquerda = 37
var cima = 38
var direita = 39
var baixo = 40
var golpe = 67
var armas=1000
var espaco = 32
var pulo = false
var contador = 0
var andarEsquerda = false
var andarDireira = false

//valor inicial para o Hp heroi
var hp=96
//valor inicial para o Hp do inimigo
var hp2 = 96
//variavel para averiguação da posição
var dano = true
var dano2 = true



// Quantidade de pixel que o objeto se movimenta.
var taxa = 20;

// Vai acionar um Evento que quando uma tecla for Pressionada ele vai executar a função Movimento.
document.addEventListener("keydown", Movimento);
document.addEventListener("keyup",combate)





// Função CENTRAL do Script. Tudo que for puxado na Atualização de Tela terá que ser colocado aqui.
function main() {
    // Função do Pano de Fundo.
    background();
    // Função do Personagem(Herói).
    Personagem(x, y, 20);
    // Função do Inimigo.
    inimigo(obsx, obsy, 20);
    //Função colisão
    colisao()
    //vida do personagem
    barraHp()
    //que chama o jogo em 60fps
    requestAnimationFrame(main)
    //arma
    arma()
    //movimentacao
    movimentacao()

}
// Função do Pano de Fundo.
function background() {

    let fundo = new Image()
    fundo.src = 'fundo.jpg'

    ctx.drawImage(fundo, 0, 0, 1000, 600)
}
// Função do Personagem Principal (Herói).
function Personagem(posX, posY, raio) {

    ctx.fillStyle = 'gold';
    ctx.beginPath();
    ctx.arc(posX, posY, raio, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    if ( pulo ==true&&contador>=20 ){
        y=y-7
        contador=contador-1
    }
     if(pulo==true&&contador<20){

        if(contador>=1){
            contador=contador-1
        y=y+7        }
        
    }
    if(contador==0){
        y=455
    }

      

    

}


function movimentacao(){

    if (andarEsquerda==true){
            x=x-10
    }
    if (andarDireira==true){
        x=x+10
    }

}
// Função que determina pra onde o objeto irá se movimentar.
function Movimento(evento) {

    if (evento.keyCode == cima) { 
        y =y-taxa

    } else if (evento.keyCode == baixo && y + taxa < 0) { y = y + taxa;

    } else if (evento.keyCode == esquerda) {

         andarEsquerda=true

    } else if (evento.keyCode == direita) {
        andarDireira = true
    }

    if(evento.keyCode == golpe){
        armas=x
    } 
    if(evento.keyCode ==espaco){
        pulo = true
        contador = 40
        
    }
    }
function combate(evento){
    if(evento.keyCode == golpe){
        armas=1000
        }else if(evento.keyCode ==esquerda){
            andarEsquerda = false
        } else if(evento.keyCode==direita){
            andarDireira = false
        } }
// Função que cria um Inimigo.
function inimigo(posX, posY, raio) {

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(posX, posY, raio, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}
function colisao(){

    if (x==obsx){    
        if(hp>0&&dano==true){
            hp=hp-24
            dano = false
        }     
    }
    if(x!=obsx){
        dano=true
    }
    
    if(hp2 > 0 && (armas == obsx-40||armas == obsx-10||armas==obsx-20||armas==obsx-30||armas==obsx-50) && dano2 == true){
        hp2=hp2-24
        dano2 = false
        }
        
        if(armas != obsx-40&&armas != obsx-10&&armas!=obsx-20&&armas!=obsx-30&&armas!=obsx-50){
        dano2 = true

    }

}
function barraHp(){


    //barra de vida fundo do heroi
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.rect(10,10,100,22)
    ctx.closePath();
    ctx.fill();

    //barra de vida do heroi
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.rect(12,12,hp,18)
    ctx.closePath();
    ctx.fill();


    //barra de vida inimiga fundo
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.rect(890,10,100,22)
    ctx.closePath();
    ctx.fill();

    //barra de vida do inimiga
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.rect(892,12,hp2,18)
    ctx.closePath();
    ctx.fill();

}

function arma(){

    
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.rect(armas,455,50,10)
    ctx.closePath();
    ctx.fill();


}

// Determina a taxa de atualização da Tela e Puxa a Função Central.

requestAnimationFrame(main)
