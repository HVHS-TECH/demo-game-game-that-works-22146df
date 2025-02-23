/*******************************************************/
// P5.play: gamethatworks
// Create a sprite
// Written by Dylan
/*******************************************************/
console.log("startup test");
/*******************************************************/
//variables

var gameWidth = windowWidth;
var gameHeight = windowHeight;
/*******************************************************/
//setup
function setup() {
  cnv = new Canvas(gameWidth, gameHeight)
  player = new Sprite((width/2), (height/2), 75, 75, 'd');
  player.color = 'red';


  coin = new Sprite(random(5, 995), random(5, 995), 25, 'k');
  coin.color = 'gold';

}

/*******************************************************/
//game
function draw() {
    background('cyan');
  // Movement logic
  if (kb.pressing('left')) {
    player.vel.x = -5;
  } else if (kb.pressing('right')) {
    player.vel.x = 5;
  }

  if (kb.released('left')) {
    player.vel.x = 0;
  } else if (kb.released('right')) {
    player.vel.x = 0;
  }

  if (kb.pressing('up')) {
    player.vel.y = -5;
  } else if (kb.pressing('down')) {
    player.vel.y = 5;
  }

  if (kb.released('up')) {
    player.vel.y = 0;
  } else if (kb.released('down')) {
    player.vel.y = 0;
  }
}
/*******************************************************/
//END 
/*******************************************************/