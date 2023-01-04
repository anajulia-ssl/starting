//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

//variaveis da minha raquete
let xMinhaRaquete = 5;
let yMinhaRaquete = 150
let comprimentoRaquete = 6;
let alturaRaquete = 70;

//variaveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;
let colidiu = false;

//sons do jogo
let trilha
let raquetada
let pontuacao

function preload(){
  trilha = loadSound("sounds/VideoGame.mp3");
  ponto = loadSound("sounds/pontuacao.mp3");
  raquetada = loadSound("sounds/raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostraRaquete(xMinhaRaquete, yMinhaRaquete);
  movimentoMinhaRaquete();
  verificaColisaoRaquete(xMinhaRaquete, yMinhaRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPontos();
  } 

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete)
}

function movimentoMinhaRaquete(){
   if (keyIsDown(87)) {
        yRaqueteOponente -= 10;
    }
   if (keyIsDown(83)) {
        yRaqueteOponente += 10;
    }
}

function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
   if (colidiu){
    velocidadeXBolinha *= -1;
     raquetada.play();
  }
}

  function movimentoRaqueteOponente(){
    if (keyIsDown(UP_ARROW)) {
        yMinhaRaquete -= 10;
    }
   if (keyIsDown(DOWN_ARROW)) {
        yMinhaRaquete += 10;
    }
  }

function incluiPlacar(){
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  stroke(255)
  rect(150, 10, 40, 20);
  rect(400, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  text(pontosOponente, 420, 26);
  fill(255);
}

function marcaPontos(){
  if(xBolinha > 590){
    meusPontos +=1;
    ponto.play();
  }
  
  if(xBolinha < 10){
    pontosOponente +=1;
    ponto.play();
  }
}

