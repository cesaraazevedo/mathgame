/*
César Augusto Miranda Azevedo
Disciplina Logica de programação
Turma 1A - 2020.5
link YouTube1:
link YouTube2:  
link GitHub: 
*/


var a = 150; //nave
var b = 250; //nave altura
var n = 10; //obstaculos
var m = 0; //obstaculos altura
var n2 = 120
var m2 = 0
var n3 = 230
var m3 = 0
var x = 70; //menu
var y = 92;  //menu altura
var ad= 0;  //tiro
var bd= 0;  //tiro altura
var raioP = 25;  
var raioO = 30;

var num1,num2
var vidas = 3;
var pontos = 0;
var pontosS =0;
var dificuldade = 1;
var estadoDisparo = false;
var opcao = 1;
var tela = 0

let img; // adição de imagens
function preload() {
  img = loadImage('menu1.jpg');
  img1 = loadImage('fase1.jpg');
  img3 = loadImage('cats3.jpg');
  perfil = loadImage('perfil.png');
  perfil1 = loadImage('perfil2.png');
  
  nave = loadImage('nave - Copia.png');
  tiro = loadImage('bubble_explo1.png');
  gameover = loadImage('cats.jpg');
  fase07 =   loadImage('winner.gif');
  fase01 = loadImage('fase1.gif');
  fase02 = loadImage('tenor.gif');
  fase03 = loadImage('fase3.gif');
  fase04 = loadImage('fase.gif');
  tenor = loadImage('fase05.gif');
  fase06 = loadImage('fase6.gif');
  winner = loadImage('source.gif');
  instru = loadImage('fundi.png');
}

function setup() {
  createCanvas(340, 300);
  frameRate(30)
}

function draw() {
  background(220);
  image(img, 0,0)

  //telas
  if(tela==0)
    menu();
  if(tela==1)
    fase1();
  if(tela==5)
    fase2();
  if(tela==6)
    fase3();
  if(tela==7)
    fase4();
  if(tela==8)
    fase5();
  if(tela==9)
    fase6();
  if(tela==10)
    fase7();

  if(tela==2)
    Instrucoes();
  if(tela==3)
    Creditos();
  if(tela==4)
   Gameover()
  if(tela==50)
    Winner();
  
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
  image(fase01,0,0);
  image(nave, a, b);
  
  if (dist(ad,bd, n, m) < 45 && estadoDisparo == true){
    tela=5 
  }
 else if (dist(ad,bd, n, m) < 45 && estadoDisparo == false){
 
  
 }
  fill(255, 187, 255);
  rect(n, m, 100, 20, 15);
  fill(0);
  text("         7",n ,m, 101, 101 )
  fill(255, 187, 255);
  rect(n2, m2, 100, 20, 15);
  fill(0);
  text("         9",n2 ,m2, 101, 101 )
  fill(255, 187, 255);
  rect(n3, m3, 100, 20, 15);
  fill(0);
  text("         6",n3 ,m3, 300, 101 )
  
  //para descer na tela
  m = m + 0.4;
  if (m > 300) {
  }
   m2 = m2 + 0.4;
  if (m2 > 300) {
      
  }
   m3 = m3 + 0.4;
  if (m3 > 300) {
     tela=4
  }
  if (keyIsDown(LEFT_ARROW )){
     if (a>-10){
      a=a-7;
    } 
  }
  if (keyIsDown(UP_ARROW )){
    if (b>0){
      b=b-7;
    }
  }
  if(keyIsDown(DOWN_ARROW )){
    if (b<250){
      b=b+7;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
     if (a<300){
      a=a+7;
    }
  }
  if(keyIsDown(CONTROL) && estadoDisparo == false){
    ad = a;
    bd = b;
    estadoDisparo = true;
  }
  
  if ( estadoDisparo == true){
    image(tiro, ad, bd, 40, 40);
    bd = bd - 25;
    if(bd < 0 ) {
      estadoDisparo = false
    }
  }
   textSize(18);
  fill(0);
  textSize(25);
  text('3+4= ?', 230, 20)
  textSize(18);
  text('Tempo: '+pontosS, 230 ,40);
  pontos= pontos+1;
  pontosS=parseInt(pontos/30)
}

//Função da Fase 2
function fase2(){
  background(220);
  image(fase02,0,0);
  image(nave, a, b);
  
  if (dist(ad,bd, n2, m2) < 45 && estadoDisparo == true){
    tela=6
 }
  fill(255, 187, 255);
  rect(n, m, 100, 20, 15);
  fill(0);
  text("        10",n ,m, 101, 101 )
  fill(255, 187, 255);
  rect(n2, m2, 100, 20, 15);
  fill(0);
  text("        15",n2 ,m2, 101, 101 )
  fill(255, 187, 255);
  rect(n3, m3, 100, 20, 15);
  fill(0);
  text("        11",n3 ,m3, 300, 101 )
  
  //para descer na tela
  m = m + 0.5;
  if (m > 300) {
    tela=4
  }
   m2 = m2 + 0.5;
  if (m2 > 300) {
  }
   m3 = m3 + 0.5;
  if (m3 > 300) {
  }
  if (keyIsDown(LEFT_ARROW )){
     if (a>-10){
      a=a-7;
    } 
  }
  if (keyIsDown(UP_ARROW )){
    if (b>0){
      b=b-7;
    }
  }
  if(keyIsDown(DOWN_ARROW )){
    if (b<250){
      b=b+7;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
     if (a<300){
      a=a+7
    }
  }
  if(keyIsDown(CONTROL) && estadoDisparo == false){
    ad = a;
    bd = b;
    estadoDisparo = true;
  }
  
  if ( estadoDisparo == true){
    image(tiro, ad, bd, 40, 40);
    bd = bd - 25;
    if(bd < 0 ) {
      estadoDisparo = false
    }
  }
   textSize(18);
  fill(0);
  textSize(25);
  text('7+8= ?', 230, 20)
  textSize(18);
  text('Tempo: '+pontosS, 230 ,40);
  pontos= pontos+1;
  pontosS=parseInt(pontos/30)
}

//Função da Fase 3
function fase3(){
  background(220);
  image(fase03,0,0);
  image(nave, a, b);
  
  if (dist(ad,bd, n3, m3) < 65 && estadoDisparo == true){
    tela=7
  
 }
  fill(255, 187, 255);
  rect(n, m, 100, 20, 15);
  fill(0);
  text("         8",n ,m, 101, 101 )
  fill(255, 187, 255);
  rect(n2, m2, 100, 20, 15);
  fill(0);
  text("         5",n2 ,m2, 101, 101 )
  fill(255, 187, 255);
  rect(n3, m3, 100, 20, 15);
  fill(0);
  text("         6",n3 ,m3, 300, 101 )
  
  //para descer na tela
  m = m + 0.5;
  if (m > 300) {
    tela=4
  }
   m2 = m2 + 0.5;
  if (m2 > 300) {
  }
   m3 = m3 + 0.5;
  if (m3 > 300) {
  }
  if (keyIsDown(LEFT_ARROW )){
     if (a>-10){
      a=a-7;
    } 
  }
  if (keyIsDown(UP_ARROW )){
    if (b>0){
      b=b-7;
    }
  }
  if(keyIsDown(DOWN_ARROW )){
    if (b<250){
      b=b+7;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
     if (a<300){
      a=a+7
    }
  }
  if(keyIsDown(CONTROL) && estadoDisparo == false){
    ad = a;
    bd = b;
    estadoDisparo = true;
  }
  
  if ( estadoDisparo == true){
    image(tiro, ad, bd, 40, 40);
    bd = bd - 25;
    if(bd < 0 ) {
      estadoDisparo = false
    }
  }
   textSize(18);
  fill(0);
  textSize(25);
  text('15-9= ?', 230, 20)
  textSize(18);
  text('Tempo: '+pontosS, 230 ,40);
  pontos= pontos+1;
  pontosS=parseInt(pontos/30)
}

//Função da Fase 4
function fase4(){
  background(220);
  image(fase04,0,0);
  image(nave, a, b);
  
  if (dist(ad,bd, n, m) < 45 && estadoDisparo == true){
    tela=8 
    
  }
 else if (dist(ad,bd, n, m) < 45 && estadoDisparo == false){
 
  
 }
  fill(255, 187, 255);
  rect(n, m, 100, 20, 15);
  fill(0);
  text("        20",n ,m, 101, 101 )
  fill(255, 187, 255);
  rect(n2, m2, 100, 20, 15);
  fill(0);
  text("        18",n2 ,m2, 101, 101 )
  fill(255, 187, 255);
  rect(n3, m3, 100, 20, 15);
  fill(0);
  text("        19",n3 ,m3, 300, 101 )
  
  //para descer na tela
  m = m + 0.4;
  if (m > 300) {
  }
   m2 = m2 + 0.4;
  if (m2 > 300) {
      
  }
   m3 = m3 + 0.4;
  if (m3 > 300) {
     tela=4
  }
  if (keyIsDown(LEFT_ARROW )){
     if (a>-10){
      a=a-7;
    } 
  }
  if (keyIsDown(UP_ARROW )){
    if (b>0){
      b=b-7;
    }
  }
  if(keyIsDown(DOWN_ARROW )){
    if (b<250){
      b=b+7;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
     if (a<300){
      a=a+7;
    }
  }
  if(keyIsDown(CONTROL) && estadoDisparo == false){
    ad = a;
    bd = b;
    estadoDisparo = true;
  }
  
  if ( estadoDisparo == true){
    image(tiro, ad, bd, 40, 40);
    bd = bd - 25;
    if(bd < 0 ) {
      estadoDisparo = false
    }
  }
   textSize(18);
  fill(255);
  textSize(25);
  text('14+6= ?', 230, 20)
  textSize(18);
  text('Tempo: '+pontosS, 230 ,40);
  pontos= pontos+1;
  pontosS=parseInt(pontos/30)
}

//Função da Fase 5
function fase5(){
  background(220);
  image(tenor,0,0);
  image(nave, a, b);
  
  if (dist(ad,bd, n, m) < 45 && estadoDisparo == true){
    tela=9
  }
 
fill(255, 187, 255);
  rect(n, m, 100, 20, 15);
  fill(0);
   text("        34 ",n ,m, 101, 101 )
  fill(255, 187, 255);
  rect(n2, m2, 100, 20, 15);
  fill(0);
  text("         30",n2 ,m2, 101, 101 )
  fill(255, 187, 255);
  rect(n3, m3, 100, 20, 15);
  fill(0);
  text("         24",n3 ,m3, 300, 101 )
  
  //para descer na tela
  m = m + 0.5;
  if (m > 300) {
  }
   m2 = m2 + 0.5;
  if (m2 > 300) {
      
  }
   m3 = m3 + 0.5;
  if (m3 > 300) {
     tela=4
  }
  if (keyIsDown(LEFT_ARROW )){
     if (a>-10){
      a=a-7;
    } 
  }
  if (keyIsDown(UP_ARROW )){
    if (b>0){
      b=b-7;
    }
  }
  if(keyIsDown(DOWN_ARROW )){
    if (b<250){
      b=b+7;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
     if (a<300){
      a=a+7
    }
  }
  if(keyIsDown(CONTROL) && estadoDisparo == false){
    ad = a;
    bd = b;
    estadoDisparo = true;
  }
  
  if ( estadoDisparo == true){
    image(tiro, ad, bd, 40, 40);
    bd = bd - 25;
    if(bd < 0 ) {
      estadoDisparo = false
    }
  }
   textSize(18);
  fill(0);
  textSize(25);
  text('14+20= ?', 230, 20)
  textSize(18);
  text('Tempo: '+pontosS, 230 ,40);
  pontos= pontos+1;
  pontosS=parseInt(pontos/30)
}

//Função da Fase 6
function fase6(){
  background(220);
  image(fase06,0,0);
  image(nave, a, b);
  
  if (dist(ad,bd, n3, m3) < 45 && estadoDisparo == true){
    tela=10
  }
 else if (dist(ad,bd, n2, m2) < 45 && estadoDisparo == true){
   tela=4
 }
fill(255, 187, 255);
  rect(n, m, 100, 20, 15);
  fill(0);
   text("       24",n ,m, 101, 101 )
  fill(255, 187, 255);
  rect(n2, m2, 100, 20, 15);
  fill(0);
  text("        15",n2 ,m2, 101, 101 )
  fill(255, 187, 255);
  rect(n3, m3, 100, 20, 15);
  fill(0);
  text("        19",n3 ,m3, 300, 101 )
  
  //para descer na tela
  m = m + 0.5;
  if (m > 300) {
  }
   m2 = m2 + 0.5;
  if (m2 > 300) {
      
  }
   m3 = m3 + 0.5;
  if (m3 > 300) {
     tela=4
  }
  if (keyIsDown(LEFT_ARROW )){
     if (a>-10){
      a=a-7;
    } 
  }
  if (keyIsDown(UP_ARROW )){
    if (b>0){
      b=b-7;
    }
  }
  if(keyIsDown(DOWN_ARROW )){
    if (b<250){
      b=b+7;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
     if (a<300){
      a=a+7
    }
  }
  if(keyIsDown(CONTROL) && estadoDisparo == false){
    ad = a;
    bd = b;
    estadoDisparo = true;
  }
  
  if ( estadoDisparo == true){
    image(tiro, ad, bd, 40, 40);
    bd = bd - 25;
    if(bd < 0 ) {
      estadoDisparo = false
    }
  }
   textSize(18);
  fill(0);
  textSize(25);
  text('34-15= ?', 230, 20)
  textSize(18);
  text('Tempo: '+pontosS, 230 ,40);
  pontos= pontos+1;
  pontosS=parseInt(pontos/30)
}

//Função da Fase 7
function fase7(){
  background(220);
  image(fase07,0,0);
  image(nave, a, b);
  
  if (dist(ad,bd, n2, m2) < 45 && estadoDisparo == true){
    tela=50
  }
 else if (dist(ad,bd, n2, m2) < 45 && estadoDisparo == true){
   tela=4
 }
fill(255, 187, 255);
  rect(n, m, 100, 20, 15);
  fill(0);
   text("        11 ",n ,m, 101, 101 )
  fill(255, 187, 255);
  rect(n2, m2, 100, 20, 15);
  fill(0);
  text("         8",n2 ,m2, 101, 101 )
  fill(255, 187, 255);
  rect(n3, m3, 100, 20, 15);
  fill(0);
  text("         16",n3 ,m3, 300, 101 )
  
  //para descer na tela
  m = m + 0.5;
  if (m > 300) {
  }
   m2 = m2 + 0.5;
  if (m2 > 300) {
      
  }
   m3 = m3 + 0.5;
  if (m3 > 300) {
     tela=4
  }
  if (keyIsDown(LEFT_ARROW )){
     if (a>-10){
      a=a-7;
    } 
  }
  if (keyIsDown(UP_ARROW )){
    if (b>0){
      b=b-7;
    }
  }
  if(keyIsDown(DOWN_ARROW )){
    if (b<250){
      b=b+7;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
     if (a<300){
      a=a+7
    }
  }
  if(keyIsDown(CONTROL) && estadoDisparo == false){
    ad = a;
    bd = b;
    estadoDisparo = true;
  }
  
  if ( estadoDisparo == true){
    image(tiro, ad, bd, 40, 40);
    bd = bd - 25;
    if(bd < 0 ) {
      estadoDisparo = false
    }
  }
   textSize(18);
  fill(0);
  textSize(25);
  text('+19-18+7= ?', 230, 20)
  textSize(18);
  text('Tempo: '+pontosS, 230 ,40);
  pontos= pontos+1;
  pontosS=parseInt(pontos/30)
}

//Função do Gameover
function Gameover(){

 background(gameover, 0,0);
  textSize(18);
  fill(0);
  text('← Esc',5, 295)
  strokeWeight(4);
  textSize(35)
  text('GAME OVER',60, 165)
}

//Função da Winner
function Winner (){

 background(winner, 0,0);
  textSize(18);
  fill(0);
  text('← Esc',5, 295)
  strokeWeight(4);
  textSize(35)
  text('WINNER',90, 165)
  textSize(18);
  text('Tempo: '+pontosS, 230 ,40);
  
}

//Função da instrução
function Instrucoes(){
  background(250)
  image(instru,0,0);
    textSize(25);
    fill(0);
  text('INSTRUÇÕES',90, 210)
    textSize(18);
    fill(255);
  text('Ctrl= Atirar.\nSetas= movimentar nave.\nEsc= Voltar.',10, 245)
    fill(0);
    textFont('Georgia');
    textSize(18);
    fill(255);
  text('       Indicado para crianças com mais \n7 anos, ou que estejam cursando o \nfundamental inicial, o "Math Game" vai \najudar a desenvolver a capacidade \nmatemática e o raciocínio rápido. \n\nO desafio é acertar mais na menor \nquantidade de tempo!!', 10, 20)
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