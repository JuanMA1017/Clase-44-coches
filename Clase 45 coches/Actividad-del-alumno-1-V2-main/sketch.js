var database
var menu1
var gamestate=0
var jugador1

function preload(){
  
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  database=firebase.database()
  menu1=new Menu()
}

function draw(){
  menu1.display()
}

