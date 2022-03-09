// dar de alta las variables 
// elementos : fondo de la torre, puerta, fantasma, climber

var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  // cargar imagenes y sonido
}

function setup() {
  createCanvas(600,600);
  spookySound.loop(); //REPRODUCCIÓN EN BUCLE
   
  //crear torre 
  
  
  // crear fantasma 

   // GRUPO DE PUERTAS
  // GRUPO DE CLIMBERS 
  invisibleBlockGroup = new Group();

}


function draw() {
  background(255);
  
  if (gameState === "play") {

    
   
  
      //escribir aquí el código para mover el fantasma a la izquierda al presionar la flecha izquierda
  
   
  
    
      //escribir aquí el código para mover el fantasma a la derecha al presionar la flecha derecha
      

    
  
      //escribir aquí el código para QUE EL FANTASMA SALTE AL PRESIONAR SPACE
      
  
  ghost.velocityY = ghost.velocityY + 0.8; // TE ACUERDAS PARA QUE ERA ESTA INSTRUCCIÓN?
  
   
      //escribir una condición para desplazar infinitamente la torre
    
      // LLAMA A LA FUNCIÓN DE PUERTAS! 

  
      //escribir el código = SI EL FANTASMA TOCA EL CLIMBERSGROUP SE DETIENE. 

      if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
        // Escribe el codigo para destruir al fantasma. 
      // CAMBIA EL JUEGO A END
      }
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
   // TEXTO DE FIN DE JUEGO 
  }
}

function spawnDoors() // PARA QUE SIRVE ESTA FUNCION? 
 {
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //agregar la función random para que la puerta aparezca al azar
    climber.x = door.x;
    invisibleBlock.x = door.x;
    
    // AGREGAR DOOR AL GRUPO
    // AGREGAR CLIMBER AL GRUPO 
    
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    ghost.depth = door.depth; // PARA QUE SIRVE ESTA INSTRUCCIÓN? 
    ghost.depth +=1;
    
     

    
    //asignar lifetime a la PUERTA, CIMBER E invisibleBlock = 800


    //agregar cada obstáculo al grupo obstaclesGroup.add(obstacle);
    //aquí los obstáculos son la puerta y  la barandilla o CLIMBER 
        invisibleBlock.debug = true;
    invisibleBlockGroup.add(invisibleBlock);
  }
}

