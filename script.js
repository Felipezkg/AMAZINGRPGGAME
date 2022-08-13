
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

    var camisa = new Image()
    camisa.src = 'troncoandando1.png'

    var pauseGame = false

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
                ctx.drawImage(camisa,this.animacaox[animax],this.animacaoy[animay],this.largura,this.altura,x,y,100,100)
                ctx.drawImage(pernas,this.animacaox[animax],this.animacaoy[animay],this.largura,this.altura,x,y,100,100)
                this.hp(x,y)
                if(animaG == true){
                    ctx.drawImage(espada,sheroi.animacaox[animax],sheroi.animacaoy[animay],sheroi.largura,sheroi.altura,x,y,100,100)
                }
            }
            this.hp = function barraHp(x,y){ 
        
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
                this.passos = 0
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

                ctx.drawImage(esqueleto,this.animacaox[animaxEsqueleto],this.animacaoy[animayEsqueleto],this.largura,this.altura,this.posicaox+passosEsqueletoX,this.posicaoy+passosEsqueletoY,100,100)

                this.hp(this.posicaox+passosEsqueletoX,this.posicaoy+passosEsqueletoY)

                     if(armasx>(obsx+passosEsqueletoX)-60&&armasx<(obsx+passosEsqueletoX)+60&&y>obsy+passosEsqueletoY-60&&y<obsy+passosEsqueletoY+60&&bateu==true){
                    this.hp2-=14
                    bateu= false
                }

                
               
                if(armasx==10000){
                    bateu=true
                }
                
                
                
            }
        }
    }
    var passosEsqueletoX=5
    var passosEsqueletoY=5

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


    var animayEsqueleto=2
    var animaxEsqueleto=2
    var andarCimaEsqueleto=false
    var andarBaixoEsqueleto=true
    
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
    //setar a posicao do mapa na tela , Um "alinhador"
    var mapax = 0
    var mapay = -1200
    
    //setar a posicao do mapa2 na tela , Um "alinhador"
    var mapax2 = 0
    var mapay2 = -1200

    //variavel que determina qual imagem sera exibida na tela
    var img = eroi

    // Váriavel que define a posição do Personagem.
    var x = 490;  // Horizontal.
    var y = 300; // Vertical.

    // Váriavel que define a posição do Inimigo.
    var obsx = 650; //Horizontal.
    var obsy = 300; //Vertical.
    //imagem das pernas
    var pernas = new Image()
    pernas.src ="pernaandando1.png"
   
    // códigos do teclado
    var somar = 0
    var esquerdaA = 65
    var cimaA = 87
    var direitaA = 68
    var baixoA = 83
    var golpe = 67
    var armasx = 10000
    var armasy = 1000
    var espaco = 32
    var contador = 0
    var andarEsquerda = false
    var andarDireita = false
    var conta = 0
    var contaAnimacao=0
    var cabeca = cabelo
    var andarBaixo = false
    var andarCima = false
    //variavel para if de travar o heroi
    var pauseEsquerda = false
    var pauseDireita = false
    var pauseCima = false
    var pauseBaixo = false

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
    var colisaoMapas = 1

    //chama as outras funcoes.
    function main() {
        if(pauseGame==false){
        ColisaoEDano()
                
        mudarmapa()  
    
        background();

        MostrarBaus()

        MovimentaCamera()

        MostrarPersonagem()

        colisaoMapa()

        AnimacaoMovimentoEsqueleto()

        colisaoMapa2()

        }
        console.log('x:'+ x,'y:'+ y,obsx)

       

        // console.log(`meu    x:`,x,`meu  Y:`,y)

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

        if((x >= 2140 && x <= 2200) && y <= -1000 && y >=-1095){
            fundo.src = 'mapa2.png'
            mapax=1500
            mapay=-1250
            colisaoMapas=2
        }

    }
    //funcao que atuliza a pisicao da camera usando o X e Y como parametro.
    function MovimentaCamera (){

        ctx.translate(camx,  camy)

        AnimacaoMovimento()
        //vida do personagem
        if(andarDireita==true){
            camx =- 5
        } else if(andarEsquerda==true){
            camx = 5
        }else if(andarBaixo==true){

        }

    }
    //funcao que le as teclas 
    function MovimentaPersonagem(evento) {

        if (evento.keyCode == cimaA&&pauseCima==false) { 
            andarCima = true;
            andarBaixo = false;
            camy = 5

        }else if (evento.keyCode == baixoA&&pauseBaixo==false) {
            andarBaixo = true;
            andarCima = false;
            camy =- 5

        }else if (evento.keyCode == esquerdaA&&pauseEsquerda==false) {
            ponto2 = false
            andarDireita = false
            andarEsquerda =  true
            camx = 5

        }else if (evento.keyCode == direitaA&&pauseDireita==false) {
            ponto = false
            andarDireita = true
            camx =- 5
        }

        if(evento.keyCode == golpe){
            camx=false
            camy=false
            andarBaixo=false
            andarCima=false
            andarDireita=false
            andarEsquerda=false
            armasx = x
            armasy=y
            animaG = true
        } 
        if(evento.keyCode == espaco){
            pulo = true
            contador = 40  
            if(pauseGame==false){
                pauseGame=true 

            }else{
                pauseGame=false
            }

        }
    }
    function ColisaoEDano(){
        for(i=0;i<quantidade.length-1;i++){
            if(armasx==quantidade[i].hp()){
            }
        }
    }

    //funcao que escolhe a imagem da movimentacao(animacao de caminhada do personagem).
    function AnimacaoMovimentoEsqueleto(){
        
        if (andarCimaEsqueleto == true){            
            passosEsqueletoY=passosEsqueletoY-2
            animayEsqueleto = 0 

                
                if(contaAnimacao == 5){
                    animaxEsqueleto = 1

                } else if(contaAnimacao == 15){
                    animaxEsqueleto = 2

                }else if(contaAnimacao == 25){
                    animaxEsqueleto = 3

                }else if(contaAnimacao == 35){
                    animaxEsqueleto = 4

                }else if(contaAnimacao == 45){
                    animaxEsqueleto = 5

                }else if(contaAnimacao == 55){
                    animaxEsqueleto = 6

                }else if(contaAnimacao == 65){
                    animaxEsqueleto = 7
                    

                }
            contaAnimacao++
                if(contaAnimacao == 75){
                    animaxEsqueleto = 8
                    contaAnimacao = 0
                andarCimaEsqueleto=false
                andarBaixoEsqueleto=true

                }
            

        } 
        if (andarBaixoEsqueleto == true){
            passosEsqueletoY=passosEsqueletoY+2
            animayEsqueleto=2
            
            if(contaAnimacao == 5){
                animaxEsqueleto = 1
            } else if(contaAnimacao == 15){
                animaxEsqueleto = 2

            }else if(contaAnimacao == 25){
                animaxEsqueleto = 3

            }else if(contaAnimacao == 35){
                animaxEsqueleto = 4

            }else if(contaAnimacao == 45){
                animaxEsqueleto = 5

            }else if(contaAnimacao == 55){
                animaxEsqueleto = 6

            }else if(contaAnimacao == 65){
                animaxEsqueleto = 7

            }
            contaAnimacao++

            if(contaAnimacao == 75){
                animaxEsqueleto = 8
                contaAnimacao = 0
                andarBaixoEsqueleto=false
                    andarCimaEsqueleto=true

            }  
        }
    }
    function AnimacaoMovimento(){
            if (andarCima == true){            
                y = y - 5
                posicaoDoGolpe=0
                animay = 0 
                    
                    if(cont == 5){
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
                    cont = 0
                }  
                cont++
            }       

                if (andarBaixo == true){
                    posicaoDoGolpe=2
                    animay=2
                    y=y+5
                    
                    if(cont == 5){
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
                        cont=0

                    }else if(cont == 45){
                    cont = 0
                } 
                    cont++
                }
                
                    if(animaG == true){
                        cabeca = cabelo2
                        img = golher
                        camisa.src = 'troncogolpe1.png'
                        pernas.src="pernagolpe1.png"
                        animay = posicaoDoGolpe
                    
                    if(conta==1){
                        animax=2

                    }else if(conta==3){
                        animax=3

                    }else if(conta==5){
                        animax=4

                    }else if(conta==7){
                        animax=5

                    }else if(conta==9){
                        conta=0
                        animax=0  
                        img = eroi
                        animaG = false
                        cabeca = cabelo
                        pernas.src='pernaandando1.png'
                        camisa.src = 'troncoandando1.png'

                    } 
                    conta++ 
                }

                if (andarEsquerda==true){
                    posicaoDoGolpe=1
                        animay=1
                        x=x-5
                    
                        if(cont == 5){
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
                            cont=0
    
                        }else if(cont == 45){
                        cont = 0
                        }   
                        cont++
                }
                    if (andarDireita==true){
                        posicaoDoGolpe=3
                            animay=3
                            x=x+5


                            if(cont == 5){
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
                                cont=0
        
                            }else if(cont == 45){
                            cont = 0
                        } 
                        cont++
                    
                }
    } 
    quantidade.push(new Inimigo(obsx = 990, obsy = 220),new Inimigo(obsx = 1450,obsy = -170),new Inimigo(1700, -500))
    function MostrarPersonagem() {
        for(let i=0;i<=quantidade.length-1;i++){
                quantidade[i].mostrarNaTela()
        }

        for(let i=0;i<=quantidade.length-1;i++){
            
            if(quantidade[i].hp2 <0){
                quantidade.splice(i,1)
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
            if(evento.keyCode == esquerdaA){
                camx=0
                andarEsquerda = false
                animay=1
                cont =0
                animax = 0
            }else if(evento.keyCode == direitaA){
                camx=0
                animay=3
                andarDireita = false
                cont=0
                animax = 0
            }else if(evento.keyCode == cimaA){
                animay=0
                animax=1
                andarCima=false
                camy=0
            }else if(evento.keyCode == baixoA){
                andarBaixo=false
                animay=2
                animax=0
                camy=0
            }

            if(evento.keyCode == golpe){
                armasx=10000
                armasy =1000
                camx=0

            }
    }

    function colisaoMapa(){

        ///COLISÕES MAPA 1///
        if(colisaoMapas == 1){
                ////////////COLISÃO PARADES A ESQUERDA/////////////
            if((x <= 10 && y <= 380 && y >= 80) || (x == 1325 && y < 125 && y > -595) || (x == 1885 && y <= -595 && y > -1145) || (x == 2170 && y >= -1220 && y <= -1155)){
                andarEsquerda = false
                pauseEsquerda = true
                camx = 0
            }else{
                pauseEsquerda = false
            }
                ////////////COLISÃO PARADES PRA BAIXO/////////////
            if((y == 380 && x >= 10 && x <= 1565) || (y == -340 && x >= 1565 && x <= 2115) || (y == -915 && x >= 2120 && x <= 2395)){
                andarBaixo = false
                pauseBaixo = true
                camy = 0
            }else{
                pauseBaixo = false
            }
                ////////////COLISÃO PARADES PRA DIREITA/////////////
            if((x == 1565 && y <= 380 && y >= -340) || (x == 2115 && y <= -340 && y >= -915) || (x == 2385 && y <= -915 && y >= -1230) || (x == 315 && y >= 80 && y <= 130)){
                andarDireita = false
                pauseDireita = true    
                camx = 0
            }else{
                pauseDireita = false
            }
                ////////////COLISÃO PARADES PRA CIMA/////////////
            if(x >= 10 && x <= 305 && y == 80 || (x >= 370 && x <= 1285 && y == 150) || (x >= 1325 && x <= 1875 && y == -575) || (x >= 1885 && x <= 2165 && y == -1140) || (x >= 2165 && x <= 2385 && y == -1220)){
                andarCima = false
                pauseCima = true    
                camy = 0
            }else{
                pauseCima = false
            }
        }
    }

    function colisaoMapa2(){
        if(colisaoMapas == 2){
                ////////////COLISÃO PAREDES CIMA/////////////
            if((x >= 2130 && x <= 3750 && y == -1065) || (x >= 1925 && x <= 2070 && y == -1140) || (x >= 1940 && x <= 3535 && y == -405) || (x >= 1725 && x <= 1890 && y == -555)){
                andarCima = false
                pauseCima = true
                camy = 0
            }else{
                pauseCima = false
            }
        }
    }

    colisaoMapa()
    colisaoMapa2()

    
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