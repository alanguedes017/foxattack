var botaoY
var botaoX
var xB
var yB1
var yB2
var yB3
var tela
var diffF
var foxC
var tijolinho
var fjogo
var img = []
var contador=0
var tempo = 0
var cfc
var bg = 0
var bg1 = 500
var imgCreditos
var imgInstrucoes

var RespostaN
var calculo = []
var velocidade
var xobj, yobj
var xobj1, yobj1
var xresposta, yresposta
var pont = 0

function preload() {
  foxC = loadImage('capa1.png')
  tijolinho = loadImage('capa2.jpeg')
  fonte1 = loadFont('fontes/Njogo.ttf')  
  fonte = loadFont('fontes/padrao.ttf')
  fjogo = loadImage('Fjogo.png')
  imagensCorrer()
  imgCreditos = loadImage('creditos.png')
  imgInstrucoes = loadImage('instrucoes.png')
}

function setup() {
  createCanvas(500, 500);
  botaoY = 50
  botaoX = 200
  xB = 150
  yB1 = 220
  yB2 = 300
  yB3 = 380
  tela = 0
  diffF = 0
  cfc = 25
  
  xresposta = random(15, 485)
  yresposta = - random(15, 215)
  xobj = random(15, 485)
  yobj = - random(15, 215)
  xobj1 = random(15, 485)
  yobj1 = - random(15, 215)
  velocidade = 1
  calculo[1] = 17
  calculo[2] = 22
  RespostaN = 39
}

function draw(){
  if(tela == 0){
    Menu()
  }
  if(tela == 1){
    Começar()
  }
  if(tela == 2){
    Instruções()
  }
  if(tela == 3){
    Creditos()
  }
  if(tela == 4){
    telaDeDerrota()
  }

}

function mouseClicked(){
  if(tela == 0){

//Botão de jogar
    if(mouseX > xB && mouseX < xB + botaoX && mouseY > yB1 && mouseY < yB1 + botaoY){
      tela = 1
    }

//Botão de instruções
    if(mouseX > xB && mouseX < xB + botaoX && mouseY > yB2 && mouseY < yB2 + botaoY){
      tela = 2
    }

//Botão de creditos
    if(mouseX > xB && mouseX < xB + botaoX && mouseY > yB3 && mouseY < yB3 + botaoY){
      tela = 3
    }
  }
  if(tela == 1){

//Botão de voltar
    if(mouseX > 15 && mouseX < 55 && mouseY > 15 && mouseY < 45){
      tela = 0
      restart()
    }
     
  }
  if(tela == 2){

//Botão de voltar
    if(mouseX > 15 && mouseX < 55 && mouseY > 15 && mouseY < 45){
      tela = 0
      restart()
    }
  }
  if(tela == 3){

//Botão de voltar
    if(mouseX > 15 && mouseX < 55 && mouseY > 15 && mouseY < 45){
      tela = 0
      restart()
    }
  }
  if(tela == 4){
    
//Botão de voltar
    if(mouseX > 15 && mouseX < 55 && mouseY > 15 && mouseY < 45){
      tela = 0
      restart()
    }
    
  }
  
}

function Menu(){

//Fundo do menu
    image(tijolinho,0,0)
    image(foxC,0,0)

//Nome
    textFont(fonte1)
    textSize(30)
    fill(255,102,0)
    text("FOX ATTACK", 200 , 120)
    
//Botão de Jogar
    textFont(fonte)
    textSize(16)
    fill(255, 165, 0)
  
    if(mouseX > xB && mouseX < xB + botaoX && mouseY > yB1 && mouseY < yB1 + botaoY){
      fill(252, 137, 7)
    }
    rect(xB, yB1, botaoX, botaoY, 10)
    fill(0)
    text("COMEÇAR", 208, 250)
    
//Botão de instruções
    fill(255, 165, 0)
  
    if(mouseX > xB && mouseX < xB + botaoX && mouseY > yB2 && mouseY < yB2 + botaoY){
      fill(252, 137, 7)
    }
    rect(xB, yB2, botaoX, botaoY, 10)
    fill(0)
    text("INSTRUÇÔES", 200, 330)

//Botão de creditos
    fill(255, 165, 0)
  
    if(mouseX > xB && mouseX < xB + botaoX && mouseY > yB3 && mouseY < yB3 + botaoY){
      fill(252, 137, 7)
    }
    rect(xB, yB3, botaoX, botaoY, 10)
    fill(0)
    text("CRÉDITOS", 210, 410)

}

function Começar(){
    background1()

//Botão de voltar
    textSize(25)
    fill(255, 165, 0)
    
    if(mouseX > 15 && mouseX < 55 && mouseY > 15 && mouseY < 45){
      fill(252, 137, 7)
    }
    rect(15, 15, 40, 30,10)
    fill(0)
    text("<", 27, 37)

//Pontuação
  textSize(25)
  fill(255)
  text("Pontuação: "+ pont, 25,475)
  
//soma
  textSize(25)
  fill(255)
  text("Soma: "+ Math.round(calculo[1])+" + "+ Math.round(calculo[2]), 300,475)

    movimento()
    obj()
    obj1()
    resposta()
    colisao()
    aumentoDaVelocidade()
  
    
}

function Instruções(){
    image(imgInstrucoes, 0, 0)
    textSize(25)
    fill(255, 165, 0)

//Botão de voltar
    if(mouseX > 15 && mouseX < 55 && mouseY > 15 && mouseY < 45){
      fill(252, 137, 7)
    }
    rect(15, 15, 40, 30,10)
    fill(0)
    text("<", 27, 37)

}

function Creditos(){
    image(imgCreditos, 0, 0)
    textSize(25)
    fill(255, 165, 0)

//Botão de voltar
    if(mouseX > 15 && mouseX < 55 && mouseY > 15 && mouseY < 45){
      fill(252, 137, 7)
    }
    rect(15, 15, 40, 30,10)
    fill(0)
    text("<", 27, 37)
}

function imagensCorrer(){
  img[0] = loadImage('imagens/run/1.png');
  img[1] = loadImage('imagens/run/1.1.png');
  img[2] = loadImage('imagens/run/2.png');
  img[3] = loadImage('imagens/run/2.1.png');
  img[4] = loadImage('imagens/run/3.png');
  img[5] = loadImage('imagens/run/3.1.png');
  img[6] = loadImage('imagens/run/4.png');
  img[7] = loadImage('imagens/run/4.1.png');
  img[8] = loadImage('imagens/run/5.png');
  img[9] = loadImage('imagens/run/5.1.png');
  img[10] = loadImage('imagens/run/6.png');
  img[11] = loadImage('imagens/run/6.1.png');
  img[12] = loadImage('imagens/run/7.png');
  img[13] = loadImage('imagens/run/7.1.png');
  img[14] = loadImage('imagens/run/8.png')
}

function movimento(){
    if(tela == 1){
      if(cfc < -25 || cfc > 500){
        cfc = -25
      }
      
      if (keyIsDown(RIGHT_ARROW)) {
        cfc += 5
        tempo++;
      image(img[contador%15], cfc, 290,100,100);
        if(tempo>5) {
          contador++;
          tempo=5;
        }
      } else {
      tempo++;
      image(img[contador%15], cfc, 290,100,100);
        if(tempo>5) {
          contador++;
          tempo=2;
        }
      }
      if (keyIsDown(LEFT_ARROW)) {
        cfc -= 5;
      }
      
        
    }
}

function background1(){
    image(fjogo, bg1, 0)
    image(fjogo, bg, 0)
    
    bg = bg - 1
    bg1 = bg1 - 1
  
    if(bg<-500){
      bg = 0
    }
    if(bg1<0){
      bg1 = 500
    }
}

function obj(){
    fill(255)
    ellipse(xobj, yobj, 30, 30)
    fill(0)
    textSize(20)
    text(Math.round(RespostaN+1), xobj-10, yobj+8)

//sorteio da posção
    yobj = yobj + velocidade
    if(yobj > 360){
      xobj = random(15, 485)
      yobj = - random(15, 215)
    }

}

function obj1(){
    fill(255)
    ellipse(xobj1, yobj1, 30, 30)
    fill(0)
    textSize(20)
    text(Math.round(RespostaN-1), xobj1-10, yobj1+8)
  
//sorteio da posção
      yobj1 = yobj1 + velocidade
    if(yobj1> 360){
      xobj1 = random(15, 485)
      yobj1 = - random(15, 215)
    }
  
}

function resposta(){
    fill(255)
    ellipse(xresposta, yresposta, 30, 30)
    fill(0)
    textSize(20)
    text(Math.round(RespostaN), xresposta-10, yresposta+8)
  
//sorteio da posição
      yresposta = yresposta + velocidade
    if(yresposta > 360){
      xresposta = random(15, 485)
      yresposta = - random(15, 215)
    }
  
}

function colisao(){

//colisão com obj
  if(dist(cfc+65,330,xobj,yobj) < 30){
    tela = 4
     }
//colisão com objo 1
  if(dist(cfc+65,330,xobj1,yobj1) < 30){
    tela = 4
    }
//colisão com a resposta
  if(dist(cfc+65,330,xresposta,yresposta) < 30 ){
    pont = pont + 1
    xresposta = random(15, 485)
    yresposta = - random(15, 215)
    xobj = random(15, 485)
    yobj = - random(15, 215)
    xobj1 = random(15, 485)
    yobj1 = - random(15, 215)
    calculos()
     }
}

function aumentoDaVelocidade(){
    if(pont >= 3 && pont <10){
      velocidade = 3
    }
    
    if(pont >= 10 && pont < 25){
      velocidade = 5
    }
  
    if(pont >= 25 && pont < 40){
      velocidade = 8
    }
    
    if(pont >= 40){
      velocidade = 10
    }
  
}

function calculos(){
  calculo[1] = random(0,20)
  calculo[2] = random(0,20)
  
  RespostaN = Math.round(calculo[1]) + Math.round(calculo[2])
}

function telaDeDerrota(){
  background(255, 0, 0)
  
//Botão de voltar
    textSize(25)
    fill(255, 165, 0)
    
    if(mouseX > 15 && mouseX < 55 && mouseY > 15 && mouseY < 45){
      fill(252, 137, 7)
    }
    rect(15, 15, 40, 30,10)
    fill(0)
    text("<", 27, 37)
  
//Aviso
    textSize(40)
    text("NÃO FOI DESSA VEZ!", 60, 220)
    text("Pontuação: "+ pont, 80, 320)
    
}

function restart(){
      pont = 0
      xresposta = random(15, 485)
      yresposta = - random(15, 215)
      xobj = random(15, 485)
      yobj = - random(15, 215)
      xobj1 = random(15, 485)
      yobj1 = - random(15, 215)
      velocidade = 1
}