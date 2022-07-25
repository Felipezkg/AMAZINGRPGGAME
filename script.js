window.onload = function(){

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')
var eroi = new Image()
eroi.src ='corpo.png'

var cabelo = new Image()
cabelo.src = 'cabelo.png'

var cabelo2 = new Image()
cabelo2.src = 'cabelo2.png'

var esqueleto = new Image()
esqueleto.src = "esqueleto.png"

var golesc = new Image()
golesc.src = "golpeEsqueleto.png"

var golher = new Image()
golher.src = "golpeHeroi.png"

var espada = new Image()
espada.src = 'espada.png'

//variavel que determina qual imagem sera exibida na tela
var img = eroi

// Váriavel que define a posição do Personagem.
var x = 500;  // Horizontal.
var y = 455; // Vertical.

// Váriavel que define a posição do Inimigo.
let obsx = 600; //Horizontal.
let obsy = 455; //Vertical.

// códigos do teclado
var esquerda = 37
var esquerdaA = 65
var cima = 38
var cimaA = 87
var direita = 39
var direitaA = 68
var baixo = 40
var baixoA = 83
var golpe = 67
var armas = 1000
var espaco = 32
var pulo = false
var contador = 0
var andarEsquerda = false
var andarDireira = false
var conta = 0
var cabeca = cabelo
var andarBaixo = false
var andarCima = false

//calibracao da camera com objetos da tela
var ponto = true
var ponto2 = true
var contou = 0
var contou2 = 0
//posicao da camera
var camx = 0
var camy = 0
//valor inicial para o Hp heroi
var hp=96
//valor inicial para o Hp do inimigo
var hp2 = 96
//variavel para averiguação da posição
var dano = true
var dano2 = true
var animay=0
var animax=0
//contador da animacao
var cont = 0
//variavel de selecao de animacao de combate
var animaG = false
// Função CENTRAL do Script. Tudo que for puxado na Atualização de Tela terá que ser colocado aqui.
function main() {
    
   
    
    // Função do Pano de Fundo.
    background();
    // Função do Personagem(Herói).
     cam()
    Personagem(x, y, 20);
    // Função do Inimigo.
    inimigo(obsx, obsy, 20);
    //Função colisão
    colisao()
    
    //que chama o jogo em 60fps
    requestAnimationFrame(main)
    
    //movimentacao
   
    
    



}


function cam (){
ctx.translate(camx,  camy)
movimentacao()
//vida do personagem
barraHp()
if(andarDireira==true){
    camx=-5
} else if(andarEsquerda==true){
    camx=5
}else if(andarBaixo==true){

}

}
function Movimento(evento) {

    if (evento.keyCode == cima || evento.keyCode == cimaA) { 
       andarCima=true
       camy=5

    } else if (evento.keyCode == baixo || evento.keyCode == baixoA) {
        andarBaixo = true
        camy=-5

    } else if (evento.keyCode == esquerda || evento.keyCode == esquerdaA) {

        
         ponto2=false
         andarDireira = false
         andarEsquerda =  true
         camx=5

    } else if (evento.keyCode == direita || evento.keyCode == direitaA) {
        ponto=false
        andarDireira = true
        andarEsquerda=false
        camx=-5
    }

    if(evento.keyCode == golpe){
        armas=x
        animaG=true
    } 
    if(evento.keyCode ==espaco){
        pulo = true
        contador = 40
        
    }
    }


function movimentacao(){
    if (andarCima==true){
        animay=0
        y=y-5
        
        if(cont==10){
            animax=1
        } else if(cont==10){
            animax=2

        }else if(cont==15){
            animax=3

        }else if(cont==20){
            animax=4

        }else if(cont==25){
            animax=5

        }else if(cont==30){
            animax=6

        }else if(cont==35){
            animax=7

        }else if(cont==40){
            animax=8

        }else if(cont==45){
         cont=5
        animax=0  

        }  
        cont++
            

    }

    if (andarBaixo==true){
        animay=2
        y=y+5
        
        if(cont==10){
            animax=1
        } else if(cont==10){
            animax=2

        }else if(cont==15){
            animax=3

        }else if(cont==20){
            animax=4

        }else if(cont==25){
            animax=5

        }else if(cont==30){
            animax=6

        }else if(cont==35){
            animax=7

        }else if(cont==40){
            animax=8

        }else if(cont==45){
         cont=5
        animax=0  

        }  
        cont++
            

    }
    

    if ( animaG==true){
        
        cabeca = cabelo2
        img = golher
        animay = 1
        
        if(conta==2){
            animax=2
            andarDireira=false
        andarEsquerda=false

        }else if(conta==4){
            animax=3

        }else if(conta==6){
            animax=4

        }else if(conta==8){
            animax=5

        }else if(conta==10){
         conta=0
        animax=0  
        img = eroi
        animaG = false
        cabeca = cabelo
        

        } 
        conta++ 
        
       
    }

    if (andarEsquerda==true){
        animay=1
        x=x-5
        
        if(cont==10){
            animax=1
        } else if(cont==10){
            animax=2

        }else if(cont==15){
            animax=3

        }else if(cont==20){
            animax=4

        }else if(cont==25){
            animax=5

        }else if(cont==30){
            animax=6

        }else if(cont==35){
            animax=7

        }else if(cont==40){
            animax=8

        }else if(cont==45){
         cont=5
        animax=0  

        }  
        cont++
            

    }
    if (andarDireira==true){
        animay=3
        x=x+5

        if(cont==10){
            animax=1
        } else if(cont==10){
            animax=2

        }else if(cont==15){
            animax=3

        }else if(cont==20){
            animax=4

        }else if(cont==25){
            animax=5

        }else if(cont==30){
            animax=6

        }else if(cont==35){
            animax=7

        }else if(cont==40){
            animax=8

        }else if(cont==45){
         cont=5
        animax=0  

        }  
        cont++
        
    }
   

}

//obejto pessoa
var sheroi = {
    posicaox: x,
    posicaoy: y,
    animacaox:[0,64,128,192,256,320,384,448,512], 
    animacaoy:[0,64,128,192],
    altura:64,
    largura:64,

}

function Personagem(posX, posY) {
     ctx.drawImage(img,sheroi.animacaox[animax],sheroi.animacaoy[animay],sheroi.largura,sheroi.altura,x,y-75,100,100)
     ctx.drawImage(espada,sheroi.animacaox[animax],sheroi.animacaoy[animay],sheroi.largura,sheroi.altura,x,y-75,100,100)
     ctx.drawImage(cabeca,sheroi.animacaox[animax],sheroi.animacaoy[animay],64,64,posX,posY-75,100,100)
    

}

// Quantidade de pixel que o objeto se movimenta.
var taxa = 20;

// Vai acionar um Evento que quando uma tecla for Pressionada ele vai executar a função Movimento.
document.addEventListener("keydown", Movimento);
document.addEventListener("keyup",combate)


// Função do Pano de Fundo.
function background() {

    let fundo = new Image()
    fundo.src = 'fundo.png'

    ctx.drawImage(fundo, 0, 00, 4096+1000, 4096+1000)
   
}
// Função do Personagem Principal (Herói).



// Função que determina pra onde o objeto irá se movimentar.

function combate(evento){
    if(evento.keyCode ==esquerda || evento.keyCode == esquerdaA){
        camx=0
        andarEsquerda = false
        animay=2
        cont =0
        animax = 0
    } else if(evento.keyCode==direita || evento.keyCode == direitaA){
        camx=0
        animay=2
        andarDireira = false
        cont=0
        animax = 0
    }else if(evento.keyCode==cima || evento.keyCode == cimaA){
        andarCima=false
        camy=0
    }else if(evento.keyCode==baixo || evento.keyCode == baixoA){
        andarBaixo=false
        camy=0
    }

    if(evento.keyCode == golpe){
        armas=1000
        camx=0
        }}
// Função que cria um Inimigo.....
function inimigo(posX, posY, raio) {
    ctx.drawImage(esqueleto,sheroi.animacaox[0],sheroi.animacaoy[1],sheroi.largura,sheroi.altura,obsx,obsy-75,100,100)


}
function colisao(){

    if (x==obsx&&y==obsy){    
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

    if(hp2 == 0){
        dano = false;

}

    if(hp == 0){
        dano2 = false;
        document.location.reload(true)
    }
}
function barraHp(){


    //barra de vida fundo do heroi
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.rect(x-488,10,100,22)
    ctx.closePath();
    ctx.fill();

    //barra de vida do heroi
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.rect(x-486,12,hp,18)
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



// Determina a taxa de atualização da Tela e Puxa a Função Central.

requestAnimationFrame(main)

}

// descrição do trabalho
// função que abre a descrição
function opeNav(){
    document.getElementById("myNav").style.width = '100%'
    
    }
    // função que fecha a descrição
    function closeNav(){
    document.getElementById("myNav").style.width = '0%'
    } 