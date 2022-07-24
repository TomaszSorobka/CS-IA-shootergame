// A method that allows the ground level to exist, by setting the player's y velocity to zero after some height is reached.
function groundLevel() {
    if (player.y + tile_size > tile_size * 11 + 4) {
    player.y = tile_size * 10 + 4;
    player.jumping = false;
    player.vy = 0; }}

function hitDetect(m, mi) {
    for(let i = 0; i < enemiesRight.length; i++){
        let e = enemiesRight[i];
        // Checking with the use of if statement whether the target's coordinates are within the bullet's coordinates. 
        if(m.x + 4 >= e.x && m.x <= e.x + e.w && m.y + 4 >= e.y && m.y <= e.y+e.h){
            bullets.splice(bullets[mi],1); // Removing the missile
            enemiesRight.splice(i,1); // Removing the enemy that the missile has hit
            score++;
            if (score == 45) {
                enabled = false;
                buffer.fillStyle = "rgba(0, 0, 0, 0.6)";
                buffer.fillRect(0, 0, width, height);
                result = "YOU WON";
                endScreen(result);
                context.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0,
                    context.canvas.width, context.canvas.height);
    
                context.canvas.addEventListener("click", restart);
            }
 }}};

function deathDetect(e, ei) {
    for(let i = 0; i < enemiesRight.length; i++){
        let e = enemiesRight[i];
        // Checking with the use of if statement whether the player's coordinates are within the target's coordinates. 
        // If yes, the game ending code is executed.
        if(player.x + 4 >= e.x && player.x <= e.x + e.w && player.y + 4 >= e.y && player.y <= e.y+e.h){
            console.log("THE END");
            // Setting the enabled variable to false, so the main loop does not run.
            enabled = false;
            buffer.fillStyle = "rgba(0, 0, 0, 0.6)";
            buffer.fillRect(0, 0, width, height);
            result = "GAME OVER";
            endScreen(result);
            context.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0,
                context.canvas.width, context.canvas.height);

            context.canvas.addEventListener("click", restart);
    }}
};