const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

// Váriavel que define a posição do Personagem.
var x = 35;  // Horizontal.
var y = 455; // Vertical.

// Váriavel que define a posição do Inimigo.
let obsx = 600; //Horizontal.
let obsy = 455; //Vertical.

// códigos do teclado
var esquerda = 37
var cima = 38
var direita = 39
var baixo = 40


// Vai acionar um Evento que quando uma tecla for Pressionada ele vai executar a função Movimento.
document.addEventListener("keydown", Movimento);



// Função CENTRAL do Script. Tudo que for puxado na Atualização de Tela terá que ser colocado aqui.
function main() {
    // Função do Pano de Fundo.
    background();
    // Função do Personagem(Herói).
    Personagem(x, y, 20);
    // Função do Inimigo.
    inimigo(obsx, obsy, 20);

}
// Função do Pano de Fundo.
function background() {
    
    let fundo = new Image()
    fundo.src = 'fundo.jpg'
    
    ctx.drawImage(fundo, 0, 0, 1000, 600)
}
// Função do Personagem Principal (Herói).
function Personagem(posX, posY, raio) {
    
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(posX, posY, raio, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

}

// Quantidade de pixel que o objeto se movimenta.
var taxa = 20;
// Função que determina pra onde o objeto irá se movimentar.
function Movimento(evento) {

    if(evento.keyCode == cima && y - taxa > 0){
        y = y - taxa;

        // if(y > 495){
        //     y = 455 (TENTATIVA DE IF DENTRO DE IF PARA AND A BOLINHA ATINGIR  495 ELA VOLTE PARA 455 QUE É O PONTO INICIAL)
        // }           (MAS OBIAMENTE NAO DEU KKKK F)

    } else if(evento.keyCode == baixo && y + taxa < 1000){
         y = y + taxa;
    } else if(evento.keyCode == esquerda && x - taxa > 0){
         x = x - taxa; 
    } else if(evento.keyCode == direita && x + taxa < 1000){
         x = x + taxa; 
    }

}
// Função que cria um Inimigo.
function inimigo(posX, posY, raio) {

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(posX, posY, raio, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}


// Determina a taxa de atualização da Tela e Puxa a Função Central.
setInterval(main, 10);



//COISAS QUE TEMOS QUE FAZER: SETAR UMA GRAVIDADE, SETAR UM CHÃO, POIS PRA TER UMA GRAVIDADE PRECISA
//TER UM CHÃO, POR EXEMPLO, O X TA SETADO EM 35, PODE SER UMA BASE.