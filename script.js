    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')
    var ctx2 = document.getElementById("canvas2").getContext("2d");

    var inventario = new Image()
    inventario.src = 'ui.png'

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

    var contadorDasMortes = 0

    var contadorDosPontos = 0


    //CLASSE DO PERSONAGEM
    class Personagens{
        constructor(x,y){
                this.posicaox = x
                this.posicaoy = y
                this.animacaox = [0,64,128,192,256,320,384,448,512]
                this.animacaoy = [0,64,128,192]
                this.altura = 64
                this.largura = 64
                this.cabeca = []
                this.hp2 = 96
                this.mostrarNaTela = function(x,y){

                    ctx.drawImage(img,this.animacaox[animax],this.animacaoy[animay],this.largura,this.altura,x,y,100,100)
                    ctx.drawImage(cabeca,this.animacaox[animax],this.animacaoy[animay],this.largura,this.altura,x,y,100,100)
                    ctx.drawImage(camisa,this.animacaox[animax],this.animacaoy[animay],this.largura,this.altura,x,y,100,100)
                    ctx.drawImage(pernas,this.animacaox[animax],this.animacaoy[animay],this.largura,this.altura,x,y,100,100)
                    this.hp(x,y)
                    
                   
                    if(animaG == true){
                        ctx.drawImage(espada,sheroi.animacaox[animax],sheroi.animacaoy[animay],sheroi.largura,sheroi.altura,x,y,100,100)
                    }

                     //TELA DO GAME OVER
                    if(this.hp2 <= 0){
                    document.getElementById("over").style.width = '100%'
                    reiniciarMapa = true    

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
                ctx.rect(x + 1, y - 15,this.hp2, 12)
                ctx.closePath();
                ctx.fill();

            }
        }
        
    }
    
     //CLASSE DO INIMIGO
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

                ctx.drawImage(esqueleto, this.animacaox [animaxEsqueleto], this.animacaoy [animayEsqueleto], this.largura, this.altura, this.posicaox + passosEsqueletoX, this.posicaoy + passosEsqueletoY, 100, 100)

                this.hp(this.posicaox + passosEsqueletoX, this.posicaoy + passosEsqueletoY)

                    if(armasx > (obsx + passosEsqueletoX) - 60 && armasx < (obsx + passosEsqueletoX) + 60 && y > obsy + passosEsqueletoY -60 && y < obsy + passosEsqueletoY + 60 && bateu == true){
                    this.hp2 -= ataque
                    bateu = false
                    }

                if(armasx == 10000){
                    bateu = true
                }
                
                if(this.hp2 <= 0){
                    
                    lvl+=596/subiu
                    if(lvl>=596){
                        nivel++ 
                        ataque+=5                   
                        lvl=0
                        if(subiu==3){
                            subiu=4
                        }else if(subiu==4){
                            subiu=10
                        }
        
                    }
                    
                    contadorDasMortes += 1
                    document.getElementById('morteInimigos').innerHTML = contadorDasMortes
                    contadorDosPontos += 10
                    document.getElementById('pontosGanhos').innerHTML = contadorDosPontos
                    document.getElementById('nivel').innerHTML = "Lvl:"+nivel
                }       
            }
        }
    }
    //CLASSE DOS BAUS
    class Baus {
        constructor(posBauX,posBauY){
                this.posicaox = posBauX
                this.posicaoy = posBauY
                this.animacaox = [0]
                this.animacaoy = [64]
                this.altura = 32
                this.largura = 32
                this.alturafonte = 28
                this.largurafonte = 32
               
            this.mostrarNaTela = function(){

                ctx.drawImage(bau,this.animacaox[0],this.animacaoy[0],this.largura,this.altura,this.posicaox,this.posicaoy,64,54)
                if(x>=25&&x<=105&&y>=305&&y<=375){
                    
                ctx.drawImage(letras,32*4,31*4,this.alturafonte,this.largurafonte,this.posicaox+20,this.posicaoy-20,20,20)  
                if(showIventory==true){
                    cabelo.src='capaceteandando1.png'
                    cabelo2.src='capacetegolpe1.png'                    
                }  
                }
                
                if(x==this.posicaox){
                    
                }            
            }
        }
    }  
    //mostrar inventario
    var showIventory = false

    var teclaE = 69
    var passosEsqueletoX = 5
    var passosEsqueletoY = 5
    var animayEsqueleto = 2
    var animaxEsqueleto = 2
    var andarCimaEsqueleto = false
    var andarBaixoEsqueleto = true
    //controle de Level
    var nivel=1
    var subiu=3
    //COLISAO DA ARMA COM O OBSX
    var bateu = true
    
    //vetor heroi
    var heroiVetor=[]

    //VETOR DOS BAUS
    var baumapa = []
    //VETOR DOS INIMIGOS
    var quantidade = []

    //OBJETO PERSONAGENS E INIMIGOS
    var inimigo = new Inimigo(obsx,obsy)
    var inimigo1= new Inimigo

    var sheroi = new Personagens(x,y)

    //POSIÇÃO INICIAL DO GOLPE
    var posicaoDoGolpe = false
    //SETAR A POSIÇÃO DO MAPA NA TELA, UM "ALINHADOR"
    var mapax = 0
    var mapay = -1200
    
    //SETAR A POSIÇÃO DO MAPA2 NA TELA, UM "ALINHADOR"
    var mapax2 = 0
    var mapay2 = -1200

    //VARIÁVEL QUE DETERMINA QUAL IMG SERÁ EXIBIDA NA TELA
    var img = eroi

    //VARIÁVEL QUE DETERMINA A POSIÇÃO INICIAL DO PERSONAGEM
    var x = 490;  // HORIZONTAL
    var y = 300; // VERTICAL

    // VARIÁVEL QUE DETERMINA A POSIÇÃO DO INIMIGO
    var obsx = 650; //HORIZONTAL
    var obsy = 300; //VERTICAL
    //IMAGEM DAS PERNAS
    var pernas = new Image()
    pernas.src = "pernaandando1.png"

    //poder de ataque
    var ataque = 10
    var dano =true
    // CÓDIGOS DO TECLADO
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
    var contaAnimacao = 0
    var cabeca = cabelo
    var andarBaixo = false
    var andarCima = false
    //VARIÁVEL PARA O IF DE TRAVAR O HERÓI
    var pauseEsquerda = false
    var pauseDireita = false
    var pauseCima = false
    var pauseBaixo = false

    //VARIÁVEL PARA REINICIAR O JOGO
    var enterR = 13
    var reiniciarMapa = false

    //CALIBRAÇÃO DA CÂMERA COM OS OBJETOS NA TELA
    var ponto = true
    var ponto2 = true
    var contou = 0
    var contou2 = 0
    //POSIÇÃO DA CÂMERA
    var camx = 0
    var camy = 0
    //VALOR INICIAL DO HP DO HERÓI
    var hp = 96
    //VALOR INICIAL DO HP DO INIMIGO
    var hp3 = 96
    //VARIÁVEL PARA AVERIGUAÇÃO DE POSIÇÃO
    var dano = true
    var dano2 = true
    var dano3 = true
    
    var animay = 2
    var animax = 0
    //CONTADOR DE ANIMAÇÃO
    var cont = 0
    //VARIÁVEL DE SELEÇÃO DE ANIMAÇÃO DO COMBATE
    var animaG = false
    var colisaoMapas = 1
    var lvl  = 0
    document.getElementById('nivel').innerHTML = "Lvl:"+nivel

    //FUNÇÃO PRINCIPAL QUE CHAMA TODAS AS OUTRAS
    function main() {

        if(pauseGame == false){
            ColisaoEDano()
            background()
            MovimentaCamera()
            MostrarBaus()
            MostrarPersonagem()
            colisaoMapa()
            AnimacaoMovimentoEsqueleto()
            colisaoMapa2()
            mudarmapa()  

        }

        requestAnimationFrame(main)
        
        
        
       
    }
    baumapa.push(new Baus(75,400))
    function MostrarBaus(){
        baumapa[0].mostrarNaTela()

    }
    //classe do boss do game
    class Boss{
        constructor(obsx,obsy){
                this.posicaox = obsx
                this.posicaoy = obsy
                this.animacaox = [0,64,128,192,256,320,384,448,512]
                this.animacaoy = [0,64,128,192]
                this.altura = 64
                this.largura = 64
                this.hp2 = 97*3
                this.passos = 0
                this.hp = function hp(obsx,obsy){


                    ctx.fillStyle = 'white';
                    ctx.beginPath();
                    ctx.rect(obsx - 50, obsy - 17, 3*98, 16)
                    ctx.closePath();
                    ctx.fill();

                    ctx.fillStyle = 'red';
                    ctx.beginPath();
                    ctx.rect(obsx -48, obsy - 15,this.hp2, 12)
                    ctx.closePath();
                    ctx.fill();

                }
            this.mostrarNaTela = function(){

                ctx.drawImage(esqueleto, this.animacaox [animaxEsqueleto], this.animacaoy [animayEsqueleto], this.largura, this.altura, this.posicaox + passosEsqueletoX, this.posicaoy + passosEsqueletoY, 200, 200)

                this.hp(this.posicaox + passosEsqueletoX, this.posicaoy + passosEsqueletoY)

                    if(armasx > (obsx + passosEsqueletoX) - 100 && armasx < (obsx + passosEsqueletoX) + 100 && y > obsy + passosEsqueletoY -110 && y < obsy + passosEsqueletoY + 110 && bateu == true){
                    this.hp2 -= ataque
                    bateu = false
                    }

                if(armasx == 10000){
                    bateu = true
                }
                
                if(this.hp2 <= 0){
                    
                    lvl+=596/subiu
                    if(lvl>=596){
                        nivel++ 
                        ataque+=5                   
                        lvl=0
                        if(subiu==3){
                            subiu=4
                        }else if(subiu==4){
                            subiu=10
                        }
        
                    }
                    
                    contadorDasMortes += 1
                    document.getElementById('morteInimigos').innerHTML = contadorDasMortes
                    contadorDosPontos += 10
                    document.getElementById('pontosGanhos').innerHTML = contadorDosPontos
                    document.getElementById('nivel').innerHTML = "Lvl:"+nivel
                }       
            }
        }
    }

    //FUNÇAÕ QUE MUDA DE MAPA
      function mudarmapa(){ 
        let posicaoE = 2200     

        if(colisaoMapas==1){
          if((x >= 2140 && x <= 2200) && y <= -1000 && y >=-1095){
        ctx.drawImage(letras,32*4,31*4,32,32,2200,-1000,20,20) 

            if(showIventory==true){
                posicaoE-1780
            fundo.src = 'mapa2.png'
            mapax = 1500
            mapay =- 1250
            colisaoMapas = 2
            }
            
        }  
        }else if(colisaoMapas==2){
            if((x >= 1760 && x <= 1830) && y <= -415 && y >=-495){
                ctx.drawImage(letras,32*4,31*4,32,32,1840,-430,20,20)
                if(showIventory==true){
                posicaoE-100
                fundo.src = 'mapafinal.png'
                mapax = 1500
                mapay =- 1250
                colisaoMapas = 3
                }
            }
        }
        
    }
    //FUNÇÃO QUE ATUALIZA A POSIÇÃO DA CÂMERA USANDO O X E Y COMO PARÂMETRO
    function MovimentaCamera (){

        ctx.translate(camx,  camy)
        AnimacaoMovimento()

        if(andarDireita == true){
            camx =- 5
        } else if(andarEsquerda == true){
            camx = 5
        }else if(andarBaixo == true){
        }
    }
    //FUNÇÃO QUE LÊ AS TECLAS DO TECLADO
    function MovimentaPersonagem(evento) {

        if (evento.keyCode == cimaA && pauseCima == false) { 
            andarCima = true;
            andarBaixo = false;
            camy = 5

        }else if (evento.keyCode == baixoA && pauseBaixo == false) {
            andarBaixo = true;
            andarCima = false;
            camy =- 5

        }else if (evento.keyCode == esquerdaA && pauseEsquerda == false) {
            ponto2 = false
            andarDireita = false
            andarEsquerda =  true
            camx = 5

        }else if (evento.keyCode == direitaA && pauseDireita == false) {
            ponto = false
            andarDireita = true
            camx =- 5
        }
        if(evento.keyCode ==teclaE){
            
                showIventory = true 
            }else{
                showIventory = false
            }
        

        if(evento.keyCode == golpe){
            camx = false
            camy = false
            andarBaixo = false
            andarCima = false
            andarDireita = false
            andarEsquerda = false
            armasx = x
            armasy = y
            animaG = true
        } 
        if(evento.keyCode == espaco){
            pulo = true
            contador = 40  
            if(pauseGame == false){
                pauseGame = true 
            }else{
                pauseGame = false
            }
        }
    }
    // FUNÇÃO PARA REINICIAR O MAPA
    function Reiniciar_mapa(evento){
        if(evento.keyCode == enterR && heroiVetor[0].hp2 <= 0){
            location.reload()
        }
        
    }
    //FUNÇÃO PARA DETECTAR COLISÃO E CONTABILIZAR O DANO
    function ColisaoEDano(){
        for(i=0;i<quantidade.length-1;i++){
            if(armasx == quantidade[i].hp()){
            }
        }
    }
    //ANIMAÇÃO DA CAMINHADA DO ESQUELETO
    function AnimacaoMovimentoEsqueleto(){
        
        if (andarCimaEsqueleto == true){            
            passosEsqueletoY = passosEsqueletoY -2
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
                    andarCimaEsqueleto = false
                    andarBaixoEsqueleto = true
                }
        } 

        if (andarBaixoEsqueleto == true){
            passosEsqueletoY = passosEsqueletoY +2
            animayEsqueleto = 2
            
            if(contaAnimacao == 5){
                animaxEsqueleto = 1
            }else if(contaAnimacao == 15){
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
                andarBaixoEsqueleto = false
                andarCimaEsqueleto = true

            }  
        }
    }
    function AnimacaoMovimento(){
            if (andarCima == true){            
                y -= 5
                posicaoDoGolpe = 0
                animay = 0 
                    
                    if(cont == 5){
                        animax = 1
                    }else if(cont == 10){
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
                    }else if(cont == 10){
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
                        cont = 0

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
                    
                    if(conta == 1){
                        animax = 2

                    }else if(conta == 3){
                        animax = 3

                    }else if(conta == 5){
                        animax = 4

                    }else if(conta == 7){
                        animax = 5

                    }else if(conta == 9){
                        conta = 0
                        animax = 0  
                        img = eroi
                        animaG = false
                        cabeca = cabelo
                        pernas.src = 'pernaandando1.png'
                        camisa.src = 'troncoandando1.png'

                    } 
                    conta++ 
                }

                if (andarEsquerda == true){
                    posicaoDoGolpe = 1
                        animay = 1
                        x -= 5
                    
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
                    if (andarDireita == true){
                        posicaoDoGolpe = 3
                            animay = 3
                            x += 5


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
                                cont = 0
        
                            }else if(cont == 45){
                            cont = 0
                        } 
                        cont++
                    
                }
    } 
        //QUANTIDADE DE INIMIGOS PELO JOGO TODO
        quantidade.push(new Inimigo(obsx = 990, obsy = 220),
        new Inimigo(obsx = 1450,obsy = -170),
        new Inimigo(1700, -500),
        new Inimigo(obsx = 3060, obsy = -1045),
        new Inimigo(obsx = 3410, obsy = -1045),
        new Inimigo(obsx = 3315, obsy = -275),
        new Inimigo(obsx = 3315, obsy = -55),
        new Inimigo(obsx = 3110, obsy = -150),
        new Inimigo(obsx = 2640, obsy = -125),
        new Inimigo(obsx = 2480, obsy = -370),
        new Boss(2860,-620)
        )
        heroiVetor.push(new Personagens(x,y))

        
    function MostrarPersonagem() {
        

        for(let i = 0;i <= quantidade.length -1; i++){
                quantidade[i].mostrarNaTela()
                if(dano==true&&x >quantidade[i].posicaox + passosEsqueletoX - 25 && x < quantidade[i].posicaox + passosEsqueletoX + 25 && y > quantidade[i].posicaoy + passosEsqueletoY -10 && y < quantidade[i].posicaoy + passosEsqueletoY + 10 ){
                    if(heroiVetor[0].hp2==96){
                        heroiVetor[0].hp2 = 72
                    }else if(heroiVetor[0].hp2==72){
                        heroiVetor[0].hp2=48
                    }else if (heroiVetor[0].hp2==48){
                        heroiVetor[0].hp2=24
                    }else if(heroiVetor[0].hp2==24){
                        heroiVetor[0].hp2=0
                        x=10000
                        pauseGame=true
                    }
                    }    
                    
        }

        for(let i = 0;i <= quantidade.length -1; i++){
            
            if(quantidade[i].hp2 < 0){
                quantidade.splice(i, 1)
            }
        }
        heroiVetor[0].mostrarNaTela(x,y)
    }

    // QUANTIDADE DE PIXEL QUE O OBJETO MOVIMENTA
    var taxa = 20;

    // QUANDO AS TECLAS FOREM ACIONADAS, ACIONA O EVENTO QUE FAZ O PERSONAGEM ANDAR
    document.addEventListener("keydown", MovimentaPersonagem);
    document.addEventListener("keyup", combate);
    // QUANDO A TECLA FOR ACIONADA, REINICIAR O MAPA.
    document.addEventListener("keypress", Reiniciar_mapa)

    //PLANO DE FUNDO
    function background() {       
        
        ctx.drawImage(fundo, mapax, mapay, 2500, 1800)
    }
    //funcao que le quando soltamos a tecla.
    function combate(evento){
            if(evento.keyCode == esquerdaA){
                camx = 0
                andarEsquerda = false
                animay = 1 
                cont = 0
                animax = 0
            }else if(evento.keyCode == direitaA){
                camx = 0
                animay = 3
                andarDireita = false
                cont = 0
                animax = 0
            }else if(evento.keyCode == cimaA){
                animay = 0
                animax = 1
                andarCima = false
                camy = 0
            }else if(evento.keyCode == baixoA){
                andarBaixo = false
                animay = 2
                animax = 0
                camy = 0
            }
            if(evento.keyCode ==teclaE){
            }

            if(evento.keyCode == golpe){
                armasx = 10000
                armasy = 1000
                camx = 0
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
             //COLISÃO PAREDES DE BAIXO//
                 if((x >= 1915 && x <= 3565 && y == -885) || (x >= 1985 && x <= 3750 && y == 50) || (x >= 1705 && x <= 1960 && y == 200)){
                    andarBaixo = false
                    pauseBaixo = true
                    camy = 0
                }else{
                    pauseBaixo = false
                }
                     //COLISÃO PAREDES DIREITAS//
                 if((y >= -1065 && y <= 55 && x == 3755) ||(y >= 60 && y <= 215 && x == 1945) || (x == 1880 && y >= -555 && y <= -420)){
                    andarDireita = false
                    pauseDireita = true
                    camx = 0
                }else{
                    pauseDireita = false

                }

                    //COLISÃO PARADES ESQUERDAS//
                if((y <= -460 && y >= -860 && x == 3590) || (y <= 200 && y >= -570 && x == 1720) || (x == 1925 && y <= -885 && y >= -1140)){
                    andarEsquerda = false
                    pauseEsquerda = true
                    camx = 0
                }else{
                    pauseEsquerda = false
                } 
            }
    }
    
    colisaoMapa()
    colisaoMapa2()
    
   
    
    //DETERMINA A ATUALIZAÇÃO DA TELA E PUXA A FUNÇÃO CENTRAL

    requestAnimationFrame(main)

    //FUNÇÃO QUE ABRE O HTML MOSTRANDO O NOME DOS ALUNOS DO GRUPO.
    function opeNav(){
        document.getElementById("myNav").style.width = '100%'
    }
    // função que fecha a descrição
    function closeNav(){
        document.getElementById("myNav").style.width = '0%'
    }