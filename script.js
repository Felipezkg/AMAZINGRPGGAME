
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')

    var letras = new Image()
    letras.src = "fonte.png"    

    var bau= new Image()
    bau.src = 'baus.png'

    var fundo = new Image()
    fundo.src = 'mapa1-certo.png'

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

    //Classe do heroi
    class Personagens{
        constructor(x,y){

                this.posicaox = x
                this.posicaoy = y
                this.animacaox = [0,64,128,192,256,320,384,448,512]
                this.animacaoy = [0,64,128,192]
                this.altura = 64
                this.largura = 64
                this.cabeca = []
                this.mostrarNaTela = function(x,y){

                ctx.drawImage(img,this.animacaox[animax],this.animacaoy[animay],this.largura,this.altura,x,y,100,100)
                ctx.drawImage(cabeca,this.animacaox[animax],this.animacaoy[animay],this.largura,this.altura,x,y,100,100)
                this.hp(x,y)
                if(animaG == true){
                    ctx.drawImage(espada,sheroi.animacaox[animax],sheroi.animacaoy[animay],sheroi.largura,sheroi.altura,x,y,100,100)
                }
            }
            this.hp=function barraHp(x,y){ 
        
                ctx.fillStyle = 'white';
                ctx.beginPath();
                ctx.rect(x - 1, y - 17, 100, 16)
                ctx.closePath();
                ctx.fill();

                ctx.fillStyle = 'green';
                ctx.beginPath();
                ctx.rect(x + 1, y - 15,hp, 12)
                ctx.closePath();
                ctx.fill();

            }
        }
    }
    
     //Classe do inimigo
     class Inimigo{
        constructor(obsx,obsy){
                this.posicaox = obsx
                this.posicaoy = obsy
                this.animacaox = [0,64,128,192,256,320,384,448,512]
                this.animacaoy = [0,64,128,192]
                this.altura = 64
                this.largura = 64
                this.hp2 = 96
                this.hp = function hp(obsx,obsy){


                ctx.fillStyle = 'white';
                ctx.beginPath();
                ctx.rect(obsx - 1, obsy - 17, 100, 16)
                ctx.closePath();
                ctx.fill();

                ctx.fillStyle = 'red';
                ctx.beginPath();
                ctx.rect(obsx + 1, obsy - 15,this.hp2, 12)
                ctx.closePath();
                ctx.fill();

            }
            this.mostrarNaTela = function(){

                ctx.drawImage(esqueleto,this.animacaox[0],this.animacaoy[1],this.largura,this.altura,this.posicaox,this.posicaoy,100,100)
                this.hp(this.posicaox,this.posicaoy)

                     if(armasx>obsx-60&&armasx<obsx+60&&y>obsy-60&&y<obsy+60&&bateu==true){
                    this.hp2-=14
                    bateu= false
                    console.log('hijbweyuhd',bateu)
                }

                
               
                if(armasx==1000){
                    bateu=true
                }
               
                
            }
        }
    }

    class Baus {
        constructor(posBauX,posBauY){
                this.posicaox = posBauX
                this.posicaoy = posBauY
                this.animacaox = [0,64,128,192,256,320,384,448,512]
                this.animacaoy = [0,64,128,192]
                this.altura = 32
                this.largura = 32
                this.alturafonte = 28
                this.largurafonte = 32
               
            this.mostrarNaTela = function(){

                ctx.drawImage(bau,this.animacaox[0],this.animacaoy[0],this.largura,this.altura,this.posicaox,this.posicaoy,64,54)
                if(x>=25&&x<=105&&y>=305&&y<=375){
                ctx.drawImage(letras,32*4,31*4,this.alturafonte,this.largurafonte,this.posicaox+20,this.posicaoy-20,20,20)
                
                    
                }
                
                if(x==this.posicaox){
                    cabelo.src='capaceteandando1.png'
                    cabelo2.src='capacetegolpe1.png'
                    
                }
              
                
            }
        }
    }

    
    //colicao da arma com obsx
    var bateu = true
    
    //vetor de Baus
    var baumapa= []
    //vetor de inimigos
    var quantidade = []

    //Obejtos pesonagens
    var inimigo = new Inimigo(obsx,obsy)
    var inimigo1= new Inimigo

    var sheroi = new Personagens(x,y)

    //determina posicao do golpe
    var posicaoDoGolpe = false
    //setar a possicao do mapa na tela , Um "alinhador"
    var mapax = 0
    var mapay= -1200

    //variavel que determina qual imagem sera exibida na tela
    var img = eroi

    // Váriavel que define a posição do Personagem.
    var x = 440;  // Horizontal.
    var y = 300; // Vertical.

    // Váriavel que define a posição do Inimigo.
    var obsx = 650; //Horizontal.
    var obsy = 300; //Vertical.
   
    // códigos do teclado
    var somar = 0
    var esquerda = 37
    var esquerdaA = 65
    var cima = 38
    var cimaA = 87
    var direita = 39
    var direitaA = 68
    var baixo = 40
    var baixoA = 83
    var golpe = 67
    var armasx = 1000
    var armasy = 1000
    var espaco = 32
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
    var hp = 96
    //valor inicial para o Hp do inimigo
    var hp3 = 96
    //variavel para averiguação da posição
    var dano = true
    var dano2 = true
    var dano3 = true
    
    var animay = 2
    var animax = 0
    //contador da animacao
    var cont = 0
    //variavel de selecao de animacao de combate
    var animaG = false

    //chama as outras funcoes.
    function main() {

        ColisaoEDano()
                
        mudarmapa()        
    
        background();

        MostrarBaus()

        MovimentaCamera()

        MostrarPersonagem()

        colisaoMapa()


        
        //que chama o jogo em 60fps
        requestAnimationFrame(main)
        //console.log(inimigo.quantidade[0].posicaox,inimigo.quantidade[1].posicaox,inimigo.quantidade[2].posicaox,armasx)
        // console.log("meu x:",x,'meu y:',y,"inimigo x:",300,"inimigo y:",200)

        ////////////////////////////////////250 -300 =50px ////////cxaaa
    }
    baumapa.push(new Baus(75,400))
    function MostrarBaus(){
        baumapa[0].mostrarNaTela()

    }

    //funcao que muda de mapa 
    function mudarmapa(){

        if((x>=2140&&x<=2200)&&y<=-1000&&y>=-1095){
            fundo.src = 'mapa2.png'
            mapax=2000
        } else if((x>=2130&&x<=2190)&&(y<-430&&y>=-525)){
            fundo.src = 'mapa3.png'

        }

    }
    //funcao que atuliza a pisicao da camera usando o X e Y como parametro.
    function MovimentaCamera (){

        ctx.translate(camx,  camy)

        AnimacaoMovimento()
        //vida do personagem
        if(andarDireira==true){
            camx =- 5
        } else if(andarEsquerda==true){
            camx = 5
        }else if(andarBaixo==true){

        }

    }
    //funcao que le as teclas 
    function MovimentaPersonagem(evento) {

        if (evento.keyCode == cima || evento.keyCode == cimaA) { 
            andarCima = true;
            andarBaixo = false;
            camy = 5

        }else if (evento.keyCode == baixo || evento.keyCode == baixoA) {
            andarBaixo = true;
            andarCima = false;
            camy =- 5

        }else if (evento.keyCode == esquerda || evento.keyCode == esquerdaA) {
            ponto2 = false
            andarDireira = false
            andarEsquerda =  true
            camx = 5

        }else if (evento.keyCode == direita || evento.keyCode == direitaA) {
            ponto = false
            andarDireira = true
            camx =- 5
        }

        if(evento.keyCode == golpe){
            camx=false
            camy=false
            andarBaixo=false
            andarCima=false
            andarDireira=false
            andarEsquerda=false
            armasx = x
            armasy=y
            animaG = true
            console.log(golpe)
        } 
        if(evento.keyCode == espaco){
            pulo = true
            contador = 40   

        }
    }
    function ColisaoEDano(){
        for(i=0;i<quantidade.length-1;i++){

            if(armasx==quantidade[i].hp()){
            console.log(inimigo.quantidade[i].hp2-=24)

            }
            
            

        }
      
      
    }

    //funcao que escolhe a imagem da movimentacao(animacao de caminhada do personagem).
    function AnimacaoMovimento(){
            if (andarCima == true){
                posicaoDoGolpe=0
                animay = 0 
                y = y - 5
                    
                    if(cont == 10){
                        animax = 1
                    } else if(cont == 10){
                        animax = 2

                    }else if(cont == 15){
                        animax = 3

                    }else if(cont == 20){
                        animax = 4

                    }else if(cont == 25){
                        animax = 5

                    }else if(cont == 30){
                        animax = 6

                    }else if(cont == 35){
                        animax = 7

                    }else if(cont == 40){
                        animax = 8

                    }else if(cont == 45){
                    cont = 5
                    animax=0  
                }  
                cont++
                

            }

                if (andarBaixo == true){
                    posicaoDoGolpe=2
                    y = y + 5
                    animay=2
                    
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
                
                    if(animaG == true){
                        cabeca = cabelo2
                        img = golher
                        animay = posicaoDoGolpe
                    
                    if(conta==2){
                        animax=2

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
                    posicaoDoGolpe=1
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
                        posicaoDoGolpe=3
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
    quantidade.push(new Inimigo(300,200),new Inimigo(500,200),new Inimigo(700,200))
    function MostrarPersonagem() {
        for(let i=0;i<=quantidade.length-1;i++){
                quantidade[i].mostrarNaTela()
        }

        for(let i=0;i<=quantidade.length-1;i++){

            console.log (quantidade.length)
            
            if(quantidade[i].hp2 <0){
                quantidade.splice(i,1)

                

            console.log ('chegou aqui')
            }
            }


      sheroi.mostrarNaTela(x,y)

        
    }


    // Quantidade de pixel que o objeto se movimenta.
    var taxa = 20;

    // Vai acionar um Evento que quando uma tecla for Pressionada ele vai executar a função Movimento.
    document.addEventListener("keydown", MovimentaPersonagem);
    document.addEventListener("keyup",combate);


    // Função do Plano de Fundo.
    function background() {
       
        
        ctx.drawImage(fundo, mapax, mapay,2500, 1800)
    }
    //funcao que le quando soltamos a tecla.
    function combate(evento){
            if(evento.keyCode ==esquerda || evento.keyCode == esquerdaA){
                camx=0
                andarEsquerda = false
                animay=1
                cont =0
                animax = 0
            }else if(evento.keyCode==direita || evento.keyCode == direitaA){
                camx=0
                animay=3
                andarDireira = false
                cont=0
                animax = 0
            }else if(evento.keyCode==cima || evento.keyCode == cimaA){
                animay=0
                animax=1
                andarCima=false
                camy=0
            }else if(evento.keyCode==baixo || evento.keyCode == baixoA){
                andarBaixo=false
                animay=2
                animax=0
                camy=0
            }

            if(evento.keyCode == golpe){
                armasx=1000
                armasy =1000
                camx=0

            }
    }
    function colisaoMapa(){

        if(x <= 5 && y <= 140 || x <= 1325 && y <= 140 || x <= 10 && y <= 380 || x <= 1550 && y >= 380) {
            andarCima = false
            andarEsquerda = false
            andarBaixo = false
            camx -= camx
            camy -= camy
        }

        if(x >= 1545 && y >= -290){
            andarDireira = false
            camx -= camx
            camy -= camy
        }

        

        // if(x <= 15 && y >= 380 || x <= 15 && y >= 70){
        //     andarEsquerda = false
        //     camx -= camx
        //     camy -= camy
        // }

        // if(x >= 5 && y <= 70 || x >= 310 && y <= 70){
        //     andarCima = false
        //     camx -= camx
        //     camy -= camy
        // }

        // if(x >= 320 && y <= 70 || x >= 325 && y <= 140){
        //     andarDireira = false
        //     camx -= camx
        //     camy -= camy
        // }

        // if(x >= 365 && y <= 145 || x <= 1325 && y <= 145){
        //     andarCima = false
        //     camx -= camx
        //     camy -= camy
        // }

        // if(y < 145 && x > 1565){
        //     andarCima = true
        //     camx -= camx
        //     camy -= camy
        // }

    }

    colisaoMapa()


    
    //Tela de Gamer Over
    if(hp == 0){
       document.getElementById("over").style.width = '100%'
    }
    

    // Determina a taxa de atualização da Tela e Puxa a Função Central.

    requestAnimationFrame(main)


// descrição do trabalho
// função que abre a descrição
function opeNav(){
    document.getElementById("myNav").style.width = '100%'
    
    }
    // função que fecha a descrição
    function closeNav(){
    document.getElementById("myNav").style.width = '0%'
    }