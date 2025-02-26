/*******************************************************/
// P5.play: gamethatworks
// Create a sprite
// Written by Dylan
/*******************************************************/
console.log("startup test");
/*******************************************************/
//variables

const GAMEWIDTH = 500;
const GAMEHEIGHT = 500;
const PLAYERSPEED = 5;
const PLAYERSIZE = 75;
const COINSIZE = 25;
const COINTIME = 2000;


var score = 0;
var coin;

/*******************************************************/
//setup
function setup() {
  cnv = new Canvas(GAMEWIDTH, GAMEHEIGHT)
  player = new Sprite((GAMEWIDTH/2), (GAMEHEIGHT/2), PLAYERSIZE, PLAYERSIZE, 'd');
  player.color = 'red';


  coingroup();


}




/*******************************************************/
//game
function draw() {
    background('cyan');
  // Movement logic
  if (kb.pressing('left')) {
    player.vel.x = -PLAYERSPEED;
  } else if (kb.pressing('right')) {
    player.vel.x = PLAYERSPEED;
  }

  if (kb.released('left')) {
    player.vel.x = 0;
  } else if (kb.released('right')) {
    player.vel.x = 0;
  }

  if (kb.pressing('up')) {
    player.vel.y = -PLAYERSPEED;
  } else if (kb.pressing('down')) {
    player.vel.y = PLAYERSPEED;
  }

  if (kb.released('up')) {
    player.vel.y = 0;
  } else if (kb.released('down')) {
    player.vel.y = 0;
  }

  displayScore();
}
/*******************************************************/
//FUNCTIONS

function coingroup(){
  for (i = 0; i < 5; i++) {
    coin = new Sprite(random(0, GAMEWIDTH), random(0, GAMEWIDTH), COINSIZE, 'k');
    coin.color = 'gold';
	  
	  }
}

function displayScore(){
  fill(0, 0, 0);
  textSize(20);
  text("Score: " + score, 5 ,30);
}


function coincreate(){
  coin = new Sprite(random(0, GAMEHEIGHT), random(0, GAMEWIDTH), COINSIZE, 'k');
  coin.color = 'gold';
  coin.spawntime = millis();
  return (coin);

}

function CoinTime(){
  if (_coin.spawntime + COINTIME <millis()){
    return(true); //too old

  }
}
/*******************************************************/


//END 
/*******************************************************/