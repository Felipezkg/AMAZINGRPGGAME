function Personagem(imgHeroi){
    //atributos
    this.srcX = 0,
    this.srcY = 0,
    this.largura = 64,
    this.altura =64,
    this.posX = 0,
    this.posY = 0,
    this.img = imgHeroi

    //metodos
    this.draw = function(ctx){
        ctx.drawImage(this.img,this.srcX,this.srcY,this.largura,this.altura,this.posX,this.posY,this.largura,this.altura)
    }
}