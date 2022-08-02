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
    var x = 440;  // Horizontal.
    var y = 355; // Vertical.

    // Váriavel que define a posição do Inimigo.
    var obsx = 650; //Horizontal.
    var obsy = 300; //Vertical.
    var inimigo1 = 1400;
    var inimigo11 = 180;
    // var inimigo2 = 720;
    // var inimigo12 = 720;
    // var inimigo3 = 830;
    // var inimigo13 = 830;
    // var inimigo4 = 940;
    // var inimigo14 = 940;
    // var inimigo5 = 1050;
    // var inimigo15 = 1050;
    // var inimigo6 = 1160;
    // var inimigo16 = 1160;
    // var inimigo7 = 1270;
    // var inimigo17 = 1270;
    // var inimigo8 = 1380;
    // var inimigo18 = 1380;
    // var inimigo9 = 1490;
    // var inimigo19 = 1490;

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
    var armasx = 1000
    var armasy = 1000
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
    var hp = 96
    //valor inicial para o Hp do inimigo
    var hp2 = 96
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
    // Função CENTRAL do Script. Tudo que for puxado na Atualização de Tela terá que ser colocado aqui.
    function main() {
        
        // Função do Pano de Fundo.
        background();
        // Função do Personagem(Herói).
        cam()
        Personagem(x, y, 20);
        // Função do Inimigo.
        inimigo(obsx, obsy, 20);
        inimigo(inimigo1, inimigo11, 20);
        // inimigo(inimigo2, inimigo12, 20);
        // inimigo(inimigo3, inimigo13, 20);
        // inimigo(inimigo4, inimigo14, 20);
        // inimigo(inimigo5, inimigo15, 20);
        // inimigo(inimigo6, inimigo16, 20);
        // inimigo(inimigo7, inimigo17, 20);
        // inimigo(inimigo8, inimigo18, 20);
        // inimigo(inimigo9, inimigo19, 20);
        colisao()
        
        //que chama o jogo em 60fps
        requestAnimationFrame(main)
    }
    function cam (){
    ctx.translate(camx,  camy)
        movimentacao()
        //vida do personagem
        barraHp()
        if(andarDireira==true){
            camx =- 5
        } else if(andarEsquerda==true){
            camx = 5
        }else if(andarBaixo==true){

        }

    }
    function Movimento(evento) {

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
            andarEsquerda = false
            camx =- 5
        }

        if(evento.keyCode == golpe){
            armasx = x
            armasy=y
            animaG = true
        } 
        if(evento.keyCode == espaco){
            pulo = true
            contador = 40   
        }
    }

    function movimentacao(){
            if (andarCima == true){
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
            animay = 2
            y = y + 5
            
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
        ctx.drawImage(img,sheroi.animacaox[animax],sheroi.animacaoy[animay],sheroi.largura,sheroi.altura,x,y,100,100)
        ctx.drawImage(cabeca,sheroi.animacaox[animax],sheroi.animacaoy[animay],64,64,posX,posY,100,100)

        if(animaG == true){
            ctx.drawImage(espada,sheroi.animacaox[animax],sheroi.animacaoy[animay],sheroi.largura,sheroi.altura,x,y,100,100)
        }
    }

    // Quantidade de pixel que o objeto se movimenta.
    var taxa = 20;

    // Vai acionar um Evento que quando uma tecla for Pressionada ele vai executar a função Movimento.
    document.addEventListener("keydown", Movimento);
    document.addEventListener("keyup",combate);


    // Função do Plano de Fundo.
    function background() {
        let fundo = new Image()
        fundo.src = 'mapa1.png'
        ctx.drawImage(fundo, 0, -1200,2500, 1800)
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
            }else if(evento.keyCode==direita || evento.keyCode == direitaA){
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
                armasx=1000
                armasy =1000
                camx=0
            }
    }

    // Função que DESENHA e CRIA um Inimigo.....
    function inimigo() {
        ctx.drawImage(esqueleto,sheroi.animacaox[0],sheroi.animacaoy[1],sheroi.largura,sheroi.altura,obsx,obsy,100,100)
        ctx.drawImage(esqueleto,sheroi.animacaox[0],sheroi.animacaoy[1],sheroi.largura,sheroi.altura,inimigo1,inimigo11,100,100)
        // ctx.drawImage(esqueleto,sheroi.animacaox[0],sheroi.animacaoy[1],sheroi.largura,sheroi.altura,inimigo2,inimigo12-75,100,100)
        // ctx.drawImage(esqueleto,sheroi.animacaox[0],sheroi.animacaoy[1],sheroi.largura,sheroi.altura,inimigo3,inimigo13-75,100,100)
        // ctx.drawImage(esqueleto,sheroi.animacaox[0],sheroi.animacaoy[1],sheroi.largura,sheroi.altura,inimigo4,inimigo14-75,100,100)
        // ctx.drawImage(esqueleto,sheroi.animacaox[0],sheroi.animacaoy[1],sheroi.largura,sheroi.altura,inimigo5,inimigo15-75,100,100)
        // ctx.drawImage(esqueleto,sheroi.animacaox[0],sheroi.animacaoy[1],sheroi.largura,sheroi.altura,inimigo6,inimigo16-75,100,100)
        // ctx.drawImage(esqueleto,sheroi.animacaox[0],sheroi.animacaoy[1],sheroi.largura,sheroi.altura,inimigo7,inimigo17-75,100,100)
        // ctx.drawImage(esqueleto,sheroi.animacaox[0],sheroi.animacaoy[1],sheroi.largura,sheroi.altura,inimigo8,inimigo18-75,100,100)
        // ctx.drawImage(esqueleto,sheroi.animacaox[0],sheroi.animacaoy[1],sheroi.largura,sheroi.altura,inimigo9,inimigo19-75,100,100)
    }

    function esqueletinho1(){
        
        if (x == obsx && y == obsy){    
            if(hp > 0 && dano == true){
                hp = hp - 24
                dano = false
            }
        }
        if(x != obsx){
            dano = true
        }
        
        if(hp2 > 0 && (armasx == obsx || armasx == obsx-5 || armasx==obsx-10 || armasx==obsx-15 || armasx==obsx-20|| armasx == obsx+5|| armasx == obsx+10|| armasx == obsx+15|| armasx == obsx+20|| armasx==obsx-25|| armasx==obsx-30) && (armasy==obsy||armasy==obsy-5||armasy==obsy-10||armasy==obsy-15||armasy==obsy-20||armasy==obsy-25||armasy==obsy-30||armasy==obsy+5||armasy==obsy+10||armasy==obsy+15||armasy==obsy+20)&&dano2 == true){
            hp2 = hp2 - 24
            dano2 = false
            }
            
            if(armasx != obsx && armasx != obsx -5 && armasx != obsx -10 && armasx != obsx -15 && armasx != obsx - 20){
            dano2 = true
        }
    }

    function esqueletinho2(){

        if (x == inimigo1 && y == inimigo11){
            if(hp > 0 && dano == true){
                hp = hp - 24
                dano = false
            }
        }
            if(x != inimigo1){
                dano=true
            }
        
        if(hp3 > 0 && (armasx == inimigo1 -5 || armasx == inimigo1 - 10 || armasx == inimigo1 - 15 || armasx == inimigo1 - 20 || armasx == inimigo1 - 25|| armasx == inimigo1 - 30|| armasx == inimigo1|| armasx == inimigo1 + 5|| armasx == inimigo1+ 10|| armasx == inimigo1 + 15|| armasx == inimigo1 + 20) &&(armasy==inimigo11+5||armasy==inimigo11+10||armasy==inimigo11+15||armasy==inimigo11+20||armasy==inimigo11||armasy==inimigo11-5||armasy==inimigo11-10||armasy==inimigo11-15||armasy==inimigo11-20||armasy==inimigo11-25||armasy==inimigo11-30)&& dano3 == true){
            hp3 = hp3 - 24
            dano3 = false
            }
            
            if(armasx != inimigo1 - 40 && armasx != inimigo1 - 10 && armasx != inimigo1 - 20 && armasx != inimigo1 - 30 && armasx != inimigo1 - 50){
            dano3 = true
        }
    }



    function colisao(){

        esqueletinho1();
        esqueletinho2();


        // if (x == inimigo2 && y == inimigo12){    
        //     if(hp > 0 && dano == true){
        //         hp = hp - 24
        //         dano = false
        //     }     
        // }
        // if(x != inimigo2){
        //     dano = true
        // }
        
        // if(hp2 > 0 && (armas == inimigo2 - 40 || armas == inimigo2 - 10 || armas == inimigo2 - 20 || armas == inimigo2 - 30 || armas == inimigo2 - 50) && dano2 == true){
        //     hp2 = hp2 - 24
        //     dano2 = false
        //     }
            
        //     if(armas != inimigo2 - 40 && armas != inimigo2 - 10 && armas != inimigo2 - 20 && armas != inimigo2 - 30 && armas != inimigo2 - 50){
        //     dano2 = true
        // }

        // if (x == inimigo3 && y == inimigo13){    
        //     if(hp > 0 && dano == true){
        //         hp = hp - 24
        //         dano = false
        //     }     
        // }
        // if(x != inimigo3){
        //     dano = true
        // }
        
        // if(hp2 > 0 && (armas == inimigo3 - 40 || armas == inimigo3 - 10 || armas == inimigo3 - 20 || armas == inimigo3 - 30 || armas == inimigo3 - 50) && dano2 == true){
        //     hp2 = hp2 - 24
        //     dano2 = false
        //     }
            
        //     if(armas != inimigo3 - 40 && armas != inimigo3 - 10 && armas != inimigo3 - 20 && armas != inimigo3 - 30 && armas != inimigo3 - 50){
        //     dano2 = true
        // }

        // if (x == inimigo4 && y == inimigo14){    
        //     if(hp > 0 && dano == true){
        //         hp = hp - 24
        //         dano = false
        //     }     
        // }
        // if(x != inimigo4){
        //     dano = true
        // }
        
        // if(hp2 > 0 && (armas == inimigo4 - 40 || armas == inimigo4 - 10 || armas == inimigo4 - 20 || armas == inimigo4 - 30 || armas == inimigo4 - 50) && dano2 == true){
        //     hp2 = hp2 - 24
        //     dano2 = false
        //     }
            
        //     if(armas != inimigo4 - 40 && armas != inimigo4 - 10 && armas != inimigo4 - 20 && armas != inimigo4 - 30 && armas != inimigo4 - 50){
        //     dano2 = true
        // }

        // if (x == inimigo5 && y == inimigo15){    
        //     if(hp > 0 && dano == true){
        //         hp = hp - 24
        //         dano = false
        //     }     
        // }
        // if(x != inimigo5){
        //     dano = true
        // }
        
        // if(hp2 > 0 && (armas == inimigo5 - 40 || armas == inimigo5 - 10 || armas == inimigo5 - 20 || armas == inimigo5 - 30 || armas == inimigo5 - 50) && dano2 == true){
        //     hp2 = hp2 - 24
        //     dano2 = false
        //     }
            
        //     if(armas != inimigo5 - 40 && armas != inimigo5 - 10 && armas != inimigo5 - 20 && armas != inimigo5 - 30 && armas != inimigo5 - 50){
        //     dano2 = true
        // }

        // if (x == inimigo6 && y == inimigo16){    
        //     if(hp > 0 && dano == true){
        //         hp = hp - 24
        //         dano = false
        //     }     
        // }
        // if(x != inimigo6){
        //     dano = true
        // }
        
        // if(hp2 > 0 && (armas == inimigo6 - 40 || armas == inimigo6 - 10 || armas == inimigo6 - 20 || armas == inimigo6 - 30 || armas == inimigo6 - 50) && dano2 == true){
        //     hp2 = hp2 - 24
        //     dano2 = false
        //     }
            
        //     if(armas != inimigo6 - 40 && armas != inimigo6 - 10 && armas != inimigo6 - 20 && armas != inimigo6 - 30 && armas != inimigo6 - 50){
        //     dano2 = true
        // }

        // if (x == inimigo7 && y == inimigo17){    
        //     if(hp > 0 && dano == true){
        //         hp = hp - 24
        //         dano = false
        //     }     
        // }
        // if(x != inimigo7){
        //     dano=true
        // }
        
        // if(hp2 > 0 && (armas == inimigo7 - 40 || armas == inimigo7 - 10 || armas == inimigo7 - 20 || armas == inimigo7 - 30 || armas == inimigo7 - 50) && dano2 == true){
        //     hp2 = hp2 - 24
        //     dano2 = false
        //     }
            
        //     if(armas != inimigo7 - 40 && armas != inimigo7 - 10 && armas != inimigo7 - 20 && armas != inimigo7 - 30 && armas != inimigo7 - 50){
        //     dano2 = true
        // }

        // if (x == inimigo8 && y == inimigo18){    
        //     if(hp > 0 && dano == true){
        //         hp = hp - 24
        //         dano = false
        //     }     
        // }
        // if(x != inimigo8){
        //     dano = true
        // }
        
        // if(hp2 > 0 && (armas == inimigo8 - 40 || armas == inimigo8 - 10 || armas == inimigo8 - 20 || armas == inimigo8 - 30 || armas == inimigo8 - 50) && dano2 == true){
        //     hp2 = hp2 - 24
        //     dano2 = false
        //     }
            
        //     if(armas != inimigo8 - 40 && armas != inimigo8 - 10 && armas != inimigo8 - 20 && armas != inimigo8 - 30 && armas != inimigo8 - 50){
        //     dano2 = true
        // }

        // if (x == inimigo9 && y == inimigo19){    
        //     if(hp > 0 && dano == true){
        //         hp = hp - 24
        //         dano = false
        //     }     
        // }
        // if(x != inimigo9){
        //     dano = true
        // }
        
        // if(hp2 > 0 && (armas == inimigo9 - 40 || armas == inimigo9 - 10 || armas == inimigo9 - 20 || armas == inimigo9 - 30 || armas == inimigo9 - 50) && dano2 == true){
        //     hp2 = hp2 - 24
        //     dano2 = false
        //     }
            
        //     if(armas != inimigo9 - 40 && armas != inimigo9 - 10 && armas != inimigo9 - 20 && armas != inimigo9 - 30 && armas != inimigo9 - 50){
        //     dano2 = true
        // }

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
        ctx.rect(x - 1, y - 17, 100, 16)
        ctx.rect(obsx - 2, obsy - 17, 100, 22)//AQUI SETA A BARRINHA BRANCA DE CADA INIMIGO
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = 'white';
        ctx.beginPath();
        // ctx.rect(x - 1, y - 77, 100, 16)
        ctx.rect(inimigo1 - 2, inimigo11 - 17, 100, 22)//AQUI SETA A BARRINHA BRANCA DE CADA INIMIGO
        ctx.closePath();
        ctx.fill();

        //barra de vida do heroi
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.rect(x + 1, y - 15,hp, 12)
        ctx.closePath();
        ctx.fill();
        
        //barra de vida do inimiga
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.rect(obsx, obsy - 15, hp2, 18)//AQUI ESTÁ POSICIONADA A BARRA DE VIDA DO INIMIGO obsx && obsy
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.rect(inimigo1, inimigo11 - 15, hp3, 18)//AQUI ESTÁ POSICIONADA A BARRA DE VIDA DO INIMIGO obsx && obsy
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