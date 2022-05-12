// Variáveis

var boy, boy_animation;
var street, street_image;
var side1, side2;

function preload() {
// Carregar imagens

  street_image = loadImage("path.png");
  boy_animation = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup() {
  createCanvas(400, 400);
// Criando Sprites e adicionando imagens

  // Estrada
  street = createSprite(200, 200, 200, 400);
  street.addImage("street", street_image);
  street.scale = 1.2

  // Muleque
  boy = createSprite(200, 340, 30, 30);
  boy.addAnimation("runner", boy_animation);
  boy.scale = 0.09;

  // Lateral
  side1 = createSprite(0, 200, 100, 400);
  side2 = createSprite(400, 200, 100, 400);
}

function draw() {
  background("grey");
  createEdgeSprites();
  

// Viabilizar a movimentação do muleque

  boy.x = World.mouseX;
// fazer o muleque colidir

  boy.collide(side1);
  boy.collide(side2);
// Solo infinito

  if (street.y > 400) {
    street.y = height/2
  }
// Atribuindo velocidade (que não funciona)

  street.velocityY = 5;

  drawSprites();
}