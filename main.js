// ------------------------------------------------------ ALL THE VARIABLES -----------------------------------------------------------
let tile_sheet = new Image();
// DIMENSION VARIABLES
let columns = 16; let rows = 16; let tile_size = 16; let scale = 1;
// The map is saved as an array of numbers corresponding to the tiles in the shoot.png file. 
let map =       [19,1,1,20,0,0,0,0,0,17,17,15,1,1,16,0,
                   0,18,18,0,0,0,0,0,15,1,1,1,1,1,1,16,
                   0,0,0,0,0,0,0,0,19,1,1,1,1,1,1,20,
                   16,17,0,0,0,0,0,0,0,18,19,1,1,1,20,0,
                   1,1,16,0,0,0,0,17,17,0,0,18,18,18,0,0,
                   1,1,20,0,0,0,15,1,1,16,0,0,0,0,0,15,
                   18,18,0,0,0,0,19,1,1,20,0,0,0,0,0,19,
                   0,0,24,21,22,0,0,18,18,0,0,0,0,0,0,24,
                   0,21,13,10,11,22,24,0,0,0,24,0,0,0,21, 13,
                   21,10, 12,12,12,11,13,22,24,21,13,22,24,21,10,12,
                   10,12,12,12,12,12,12,11,23,10,12,11,23,10,12,12,
                   2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                   3,3,3,3,3,3,9,3,3,3,3,3,3,3, 3,9,
                   3,3,3,9,3,3,3,3,3,3,3,9,3,3,3,3,
                   14,3,3,3,3,3,3,3,9,3,3,3,9,3,3,3,
                   3,3,3,3,3,3,3,14,3,3,3,3,3,3,14,3];
var enemiesRight;
// Setting the enemie's coordinates that are initialized in the enemies.js file.             
enemiesCoordinates();

let ex = 0.2;
let ey = 0.1;
let addx;
let addy;
let difficulty;
let level;
let result;

let context = document.querySelector("canvas").getContext("2d");
let buffer = document.createElement("canvas").getContext("2d");
let height = document.documentElement.clientHeight - 16;
let width = document.documentElement.clientWidth - 16;
let pointer = { down: false, x:0, y:0};
let space = {down: false};

// A method responsible for resizing, setting canvas' dimensions and ensuring sharp, clear graphics in every loop.
function resize() {
    height = document.documentElement.clientHeight - 16;
    width = document.documentElement.clientWidth - 16;
    let min_size = height < width ? height : width;
    context.canvas.height = min_size;
    context.canvas.width = min_size;
    context.imageSmoothingEnabled = false;

    scale = min_size / buffer.canvas.width;
}

let check = true;
function drawScore() {
    buffer.font = "15px Calibri";
    buffer.fillStyle = "rgba(255, 0, 27, 1)";
    buffer.textAlign = "center";
    buffer.fillText("IB score:" + score , 220, 20);
}

// DEFINING THE PLAYER
var player = new Player (100, 100, -1);
var bullets = new Array();
let score = 0;
//An important variable that is used as an indicator as whether the game is still running or has already ended.
let enabled = true;

// --------------------------------------------------------- GAME LOOP ---------------------------------------------------------------------
function loop() {
    // If statement checking if the game has ended (if so, enabled = false so the code of this statement will not run).
    if (enabled) {
    window.requestAnimationFrame(loop);
    resize();
    loadingTiles();
    pointerAbove();
    spaceDown();

    // Increasing the player's velocity along the y-axis every loop makes him fall down. It serves as a simulation of gravity.
    player.vy += 1;

    // This method updates the player position, which makes him move left and right, depending on the player's mouseclick coordinates.
    player.updatePosition(pointer.x, pointer.y);

    groundLevel();
    drawPlayer();
    renderEnemies();
    drawScore();

    // A for loop responsible for updating bullets' position and running a hitDetect check whether a bullet has touched the player.
    for (let index = bullets.length - 1; index > -1; -- index) {
        let bullet = bullets[index];

        bullet.updatePosition();
        // Bullet's black color.
        buffer.fillStyle = "#000000";

        buffer.fillRect(bullet.x, bullet.y, 4, 4);
        // Running hitDetect every game's loop ensures that every bullet's coordinates are checked in comparison to the player's coordinates.
        hitDetect(this.bullets[index], index);

        if (bullet.x < -4 || bullet.x > buffer.canvas.width) bullets.splice(index, 1);
    }
// So far, every update was being drawn on the buffer object. However, it is the canvas that is displayed to the user. Code below draws the buffer on the canvas.
    context.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0,
    context.canvas.width, context.canvas.height);
    }
}

// Sets the right buffer dimensions.
buffer.canvas.height = tile_size * rows;
buffer.canvas.width = tile_size * columns;
buffer.imageSmoothingEnabled = false;

// Adding the event listener which calls the method start() once the tile_sheet loads.
tile_sheet.addEventListener("load", start);
tile_sheet.src = "shoot.png";

// Adding the event listener which updates the pointer's coordinates once the mouse was clicked by the user.
context.canvas.addEventListener("click", (event) => {

    var boundary = event.target.getBoundingClientRect();
    pointer.x = (event.pageX - boundary.left) / scale;
    pointer.y = (event.pageY - boundary.top) / scale;

    pointer.down = true;
})

// Adding the event listener on the spacebar.
document.addEventListener("keypress", (event) => {
    if (event.keyCode == 32) {
        // Setting space.down to true makes the player shoot the bullet.
       space.down = true; 
     }});