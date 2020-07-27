/*
César Augusto Miranda Azevedo
Disciplina Logica de programação
Turma 1A - 2020.5
link YouTube1:https://youtu.be/hTZOx-W2fAY
link YouTube2: https://youtu.be/iBxd78tKQBI(talvez não funcione)
link GitHub: https://github.com/cesaraugustu/MATH-GAME---Inicio-do-Projeto-de-LoP
*/

var a = 150;
var b = 250;
var n = 0;
var m = 0;
var x = 70;
var y = 92;
var ad= 0;
var bd= 0;
var raioP = 25;

var vidas = 3;
var pontos = 0;
var dificuldade = 1;
var estadoDisparo = false;
var opcao = 1;
var tela = 0;

let img; // adição de imagens
function preload() {
  img = loadImage('menu1.jpg');
  img1 = loadImage('fase1.jpg');
  img3 = loadImage('cats3.jpg');
  perfil = loadImage('perfil.png');
  perfil1 = loadImage('perfil2.png');
  instrucoes = loadImage('instrucoes.gif');
  nave = loadImage('nave - Copia.png');
  tiro = loadImage('bubble_explo1.png');
}

function setup() {
  createCanvas(340, 300);
}

function draw() {
  background(220);
  image(img, 0,0)

  //telas
  if(tela==0)
    menu();
  if(tela==1)
    fase1()
  if(tela==2)
    Instrucoes();
  if(tela==3)
    Creditos();
}

//função do Menu
function menu() {
    fill(255, 187, 255);
  rect(x, y, 200, 45, 15);
    textSize(25)
    fill(139, 71, 137);
    strokeWeight(2);
    stroke(51);
  text('MATH GAME', 97, 26);
    textSize(32);
    fill(0);
    strokeWeight(1);
    stroke('rgba(100%,0%,100%,0.5)');
  text('Iniciar',100, 130);
    fill(0);
    strokeWeight(1);
    stroke('rgba(100%,0%,100%,0.5)');
  text('Instruções',100, 190);
    fill(0);
    strokeWeight(1);
    stroke('rgba(100%,0%,100%,0.5)');
  text('Créditos',100,250);
}

//Função da Fase 1
function fase1(){
  background(220);
  image(img1,0,0);
  image(nave, a, b);
  rect(n, m, 2*raioP, 2*raioP, 15);
  m = m + 1;
  
  if (m > 300) {
      n = random(300, 0);
      m = random(0, 0);
  }
  if (keyIsDown(LEFT_ARROW  )){
    a=a-5;
  }
  if (keyIsDown(UP_ARROW)){
    b=b-5;
  }
  if(keyIsDown(DOWN_ARROW )){
    b=b+5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    a=a+5;
  }
  if(keyIsDown(CONTROL) && estadoDisparo == false){
    ad = a;
    bd = b;
    estadoDisparo = true;
  }
  
  if ( estadoDisparo == true){
    image(tiro, ad, bd, 40, 40);
    bd = bd - 15;
    if(bd < 0 ) {
      estadoDisparo = false
    }
  }
   textSize(18);
  fill(0);
  text('Vidas: '+vidas, 5 ,20);
  text('Nivel: '+dificuldade, 8 ,40);
  text('Pontos: '+pontos, 230 ,20);
  
pontos= pontos+1;
}

//Função da instrução
function Instrucoes(){
  background(instrucoes,0,0);
    textSize(25);
    fill(0);
  text('INSTRUÇÕES',90, 165)
    textSize(18);
    fill(255);
  text('Ctrl= Atirar.\nSetas= movimentar nave.\nEsc= Voltar.',10, 245)
    fill(0);
    textFont('Georgia');
    textSize(18);
    fill(255);
  text('Indicado para crianças com mais 7 anos, \nou que estejam cursando o fundamental \nprimeiro, o "Math Game" vai ajudar a \ndesenvolver a capacidade matemática \ne o raciocínio \nrápido.', 10, 20)
}

//Função dos Créditos
function Creditos(){
  background(220);
  image(img3,0,0);
  image(perfil,130,50);
  textSize(18);
  fill(0);
  text('← Esc',5, 295)
  textSize(16)
  text('Programador: César A. M. Azevedo',50, 160)
  image(perfil1,130,180);
  textSize(16)
  text('Pedagoga: Ana C. M. Ferreira',70, 270)
  textSize(32)
  text('CRÉDITOS',80, 30)
}

//Movimentar o Menu
function keyPressed() {
  if(key=="ArrowUp" && y > 100){
    y=y-65
    opcao=opcao-1
     console.log(opcao)
  }

  if(key=="ArrowDown" && y < 200){
    y=y+65
    opcao=opcao+1
    console.log(opcao)
  }
  
  if(key=="Enter"){
    tela=opcao
  }
  
  if(key=="Escape"){
    tela=0
  }
}