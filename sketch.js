var bananaI, bananaG, obstacleI, obstacleG, bG, BGI, score, monkey, monkeyI, ground;

function preload()
{
  monkeyI = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_01.png", "Monkey_10.png");
  
  BGI= loadImage("jungle.jpg");
}

function setup() 
{
  createCanvas(400, 400);
  bG = createSprite(200, 200, 400, 400);
  bG.addAnimation("background", BGI);
  bG.velocityX = -5;
  
  monkey = createSprite(50, 380, 50, 50);
  monkey.addAnimation("mrun", monkeyI);
  
  ground = createSprite(200, 400, 5, 400);
  ground.visible = false
  
  score = 0;
}

function draw() {
  background("white");
  if(bG.x < 0)
  {
    bG.x = bG.width/2;
  }
  
  if (keyDown("space")&&monkey.isTouching(ground))
    {
      monkey.velocityY = -10
    }
  monkey.velocityY = monkey.velocityY + 0.8;

  if(bananaG.isTouching(obstacleG))
  {
    score = score+2;
    bananaG = destroyEach;
  }
  
  switch(score)
  {
    case 10: monkey.scale=0.12;
      break;
    case 20: monkey.scale=0.14;
      break;
    case 30: monkey.scale=0.16;
      break;
    case 40: monkey.scale=0.18;
      break;
      default: break;
  }
    
  if(monkey.isTouching(obstacleG))
  {
    monkey.scale = 0.2;
  }
  drawSprites();
  
  stroke("white");
  textSize("20")
  fill("white")
  text("Score: "+ score, 350, 50)
}